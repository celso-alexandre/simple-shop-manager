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

  return (
    <>
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
    </>
  );
}
