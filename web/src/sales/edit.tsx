import { Button, Row, Skeleton } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useParams } from 'react-router-dom';
import type { SalesFormNode } from '.';
import { Title } from '../components/title';
import { useUpdateSaleMutation, SalesDocument, useSaleQuery } from '../graphql/__generated__/sales.gql.generated';
import { objectPropertiesSet } from '../helpers';
import { SalesForm } from './form';

async function onSubmit({ id, date, saleItems }: SalesFormNode, update: ReturnType<typeof useUpdateSaleMutation>[0]) {
  const createMany = saleItems.nodes.filter(item => !item.id);
  const updateMany = saleItems.nodes.filter(item => item.id);
  await update({
    variables: {
      where: { id },
      data: {
        date: { set: date },
        saleItems: {
          createMany: {
            data: createMany,
          },
          update: updateMany.map(item => {
            const { id: itemId, ...rest } = item;
            return {
              where: { id: itemId },
              data: objectPropertiesSet(rest),
            };
          }),
        },
      },
    },
  });
}

export function SaleEdit() {
  const { id } = useParams();
  const [form] = useForm<SalesFormNode>();
  const [update] = useUpdateSaleMutation({
    refetchQueries: [SalesDocument],
  });
  const { data, loading } = useSaleQuery({
    variables: {
      where: { id },
    },
  });

  if (loading) return <Skeleton />;

  return (
    <>
      <Title title={data?.sale?.id ?? 'Venda não encontrada'} />

      <SalesForm initialValues={data?.sale} form={form} onFinish={values => onSubmit(values, update)} />

      <Row style={{ marginTop: '20px' }}>
        <Button size="large" type="primary" onClick={() => form.submit()}>
          Salvar
        </Button>
      </Row>
    </>
  );
}
