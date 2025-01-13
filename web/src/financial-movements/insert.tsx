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
import { serializeDecimalAsInt } from '../helpers';
import { useFinancialMovementAggregateQuery } from '../graphql/__generated__/financial-movement-aggregate.gql.generated';
import { FinancialMovementsFooter } from './common/footer';
import { useState } from 'react';

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
  const [value, setValue] = useState(0);

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
              onClick={async () => {
                await form.validateFields();
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
            prevValue: 0,
          }}
        />
      </div>
    </>
  );
}
