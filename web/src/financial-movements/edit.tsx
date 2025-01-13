import { Button, Row, Skeleton } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import _ from 'lodash';
import { useEffect, useMemo, useState } from 'react';
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
import { useFinancialMovementAggregateQuery } from '../graphql/__generated__/financial-movement-aggregate.gql.generated';
import { FinancialMovementsFooter } from './common/footer';

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
  const { data: dataAggregate } = useFinancialMovementAggregateQuery();
  const [value, setValue] = useState(0);

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

  useEffect(() => {
    setValue(data?.financialMovement?.valueDecimal || 0);
  }, [data]);

  if (loading) return <Skeleton />;

  return (
    <>
      <div className="flex h-full flex-col justify-between">
        <div>
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
            onValuesChange={(_, values) => {
              let v = values.value || 0;
              if (values.kind === 'debit') {
                v = v * -1;
              }
              setValue(v);
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
        </div>

        <FinancialMovementsFooter
          value={dataAggregate?.financialMovementAggregate?.value}
          pendingMovement={{
            value: serializeDecimalAsInt(value),
            prevValue: data?.financialMovement?.value || 0,
          }}
        />
      </div>
    </>
  );
}
