import { Button, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { SalesFormNode } from '.';
import { Title } from '../components/title';
import { useCreateSaleMutation, SalesDocument } from '../graphql/__generated__/sales.gql.generated';
import { SalesForm } from './form';

async function onSubmit(data: SalesFormNode, create: ReturnType<typeof useCreateSaleMutation>[0]) {
  const { date, saleItems } = data;
  await create({
    variables: {
      data: {
        date,
        saleItems: {
          createMany: {
            data: saleItems.nodes.map(item => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { id, ...rest } = item;
              return rest;
            }),
          },
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
