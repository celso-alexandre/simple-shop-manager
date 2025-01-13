import { Button, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { FinancialMovementsFormNode } from '.';
import { Title } from '../components/title';
import {
  useCreateFinancialMovementMutation,
  FinancialMovementsDocument,
  FinancialMovementDocument,
} from '../graphql/__generated__/financial-movements.gql.generated';
import { FinancialMovementsForm } from './form';
import { FinancialMovementType } from '../types';
import { formatMoneyFromInt, serializeDecimalAsInt } from '../helpers';
import { useFinancialMovementAggregateQuery } from '../graphql/__generated__/financial-movement-aggregate.gql.generated';

async function onSubmit(
  data: FinancialMovementsFormNode,
  create: ReturnType<typeof useCreateFinancialMovementMutation>[0]
) {
  await create({
    refetchQueries: [FinancialMovementDocument, FinancialMovementsDocument],
    variables: {
      data: {
        type: FinancialMovementType.Manual,
        date: data.date,
        value:
          serializeDecimalAsInt(data.value) * (data.kind === 'debit' ? -1 : 1),
        // todo: maybe add a comment?
      },
    },
  });
}

export function FinancialMovementInsert() {
  const [form] = useForm<FinancialMovementsFormNode>();
  const [create] = useCreateFinancialMovementMutation({
    refetchQueries: [FinancialMovementsDocument],
  });
  const { data: dataAggregate } = useFinancialMovementAggregateQuery();

  return (
    <>
      <div className="flex h-full flex-col justify-between">
        <div>
          <Title title="Novo Movimento Financeiro" />

          <FinancialMovementsForm
            form={form}
            onFinish={async (values) => {
              await onSubmit(values, create);
            }}
          />

          <Row style={{ marginTop: '20px' }}>
            <Button
              size="large"
              type="primary"
              onClick={async () => {
                await form.validateFields();
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
