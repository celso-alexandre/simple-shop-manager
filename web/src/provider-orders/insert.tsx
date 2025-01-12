import { Button, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { ProviderOrdersFormNode } from '.';
import { Title } from '../components/title';
import {
  useCreateProviderOrderMutation,
  ProviderOrdersDocument,
  ProviderOrderDocument,
} from '../graphql/__generated__/provider-orders.gql.generated';
import { serializeDecimalAsInt } from '../helpers';
import { ProviderOrdersForm } from './form';
import { providerOrderDto } from './helper';

async function onSubmit(
  data: ProviderOrdersFormNode,
  create: ReturnType<typeof useCreateProviderOrderMutation>[0]
) {
  const { date, providerOrderItems } = providerOrderDto(data);
  await create({
    refetchQueries: [ProviderOrderDocument, ProviderOrdersDocument],
    variables: {
      data: {
        date,
        providerOrderItems: {
          create: providerOrderItems.nodes.map((item) => {
            const { productId, providerId, totalValue, ...rest } = item;
            return {
              ...rest,
              totalValue: serializeDecimalAsInt(totalValue),
              product: { connect: { id: productId } },
              providerId,
              // provider: !providerId
              //   ? undefined
              //   : { connect: { id: providerId } },
            };
          }),
        },
      },
    },
  });
}

export function ProviderOrderInsert() {
  const [form] = useForm<ProviderOrdersFormNode>();
  const [create] = useCreateProviderOrderMutation({
    refetchQueries: [ProviderOrdersDocument],
  });

  return (
    <>
      <Title title="Nova Compra" />

      <ProviderOrdersForm
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
