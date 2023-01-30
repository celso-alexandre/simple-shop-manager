import { Button, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { SalesFormNode } from '.';
import { Title } from '../components/title';
import { useCreateSaleMutation, SalesDocument, SaleDocument } from '../graphql/__generated__/sales.gql.generated';
import { serializeDecimalAsInt } from '../helpers';
import { SalesForm } from './form';
import { saleDto } from './helper';

async function onSubmit(data: SalesFormNode, create: ReturnType<typeof useCreateSaleMutation>[0]) {
  const { date, saleItems } = saleDto(data);
  await create({
    refetchQueries: [SaleDocument, SalesDocument],
    variables: {
      data: {
        date,
        saleItems: {
          create: saleItems.nodes.map(item => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { productId, providerId, totalValue, ...rest } = item;
            return {
              ...rest,
              totalValue: serializeDecimalAsInt(totalValue),
              product: { connect: { id: productId } },
              provider: !providerId ? undefined : { connect: { id: providerId } },
            };
          }),
        },
      },
    },
  });
}

export function SaleInsert() {
  const [form] = useForm<SalesFormNode>();
  const [create] = useCreateSaleMutation({
    refetchQueries: [SalesDocument],
  });

  return (
    <>
      <Title title="Nova Venda" />

      <SalesForm form={form} onFinish={values => onSubmit(values, create)} />

      <Row style={{ marginTop: '20px' }}>
        <Button size="large" type="primary" onClick={() => form.submit()}>
          Salvar
        </Button>
      </Row>
    </>
  );
}
