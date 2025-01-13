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
import { formatMoneyFromInt, serializeDecimalAsInt } from '../helpers';
import { FinancialMovementsForm } from './form';
import { useFinancialMovementAggregateQuery } from '../graphql/__generated__/financial-movement-aggregate.gql.generated';

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

        <div className="relative rounded-lg border border-gray-300 p-4">
          <h3 className="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold text-gray-700">
            Caixa
          </h3>
          <div className="grid grid-cols-1 gap-x-28 sm:gap-x-12 lg:grid-cols-4">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Total</span>
              <span className="text-gray-900">
                {formatMoneyFromInt(
                  dataAggregate?.financialMovementAggregate?.value
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
