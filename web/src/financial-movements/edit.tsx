import { Button, Row, Skeleton } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import _ from 'lodash';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import type { FinancialMovementsFormNode } from '.';
import { Title } from '../components/title';
import {
  useUpdateFinancialMovementMutation,
  FinancialMovementsDocument,
  FinancialMovementDocument,
  useFinancialMovementQuery,
} from '../graphql/__generated__/financial-movements.gql.generated';
import { serializeDecimalAsInt } from '../helpers';
import { FinancialMovementsForm } from './form';

async function onSubmit(
  financialMovement: FinancialMovementsFormNode,
  update: ReturnType<typeof useUpdateFinancialMovementMutation>[0]
) {
  const { id, date, kind, value } = financialMovement;
  await update({
    refetchQueries: [FinancialMovementDocument, FinancialMovementsDocument],
    variables: {
      where: { id },
      data: {
        date: { set: date },
        value: {
          set: serializeDecimalAsInt(value) * (kind === 'debit' ? -1 : 1),
        },
      },
    },
  });
}

export function FinancialMovementEdit() {
  const { id } = useParams();
  const [form] = useForm<FinancialMovementsFormNode>();
  const [update] = useUpdateFinancialMovementMutation({
    refetchQueries: [FinancialMovementsDocument],
  });
  const { data, loading } = useFinancialMovementQuery({
    variables: {
      where: { id },
    },
  });

  const initialValues = useMemo<FinancialMovementsFormNode | undefined>(() => {
    if (!data?.financialMovement) return undefined;
    const { financialMovement } = data;
    return {
      id: financialMovement.id,
      date: dayjs(financialMovement.date),
      kind: financialMovement.value < 0 ? 'debit' : 'credit',
      value: Math.abs(financialMovement.valueDecimal),
    };
  }, [data]);

  if (loading) return <Skeleton />;

  return (
    <>
      <Title
        title={data?.financialMovement?.id ?? 'Movimento não encontrado'}
      />

      <FinancialMovementsForm
        initialValues={initialValues}
        form={form}
        onFinish={async (values) => {
          await form.validateFields();
          onSubmit(values, update);
        }}
      />

      <Row style={{ marginTop: '20px' }}>
        <Button
          size="large"
          type="primary"
          onClick={() => {
            form.submit();
          }}>
          Salvar
        </Button>
      </Row>
    </>
  );
}
