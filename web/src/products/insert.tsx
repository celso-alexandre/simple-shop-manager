import { Button, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { ProductsFormNode } from '.';
import { Title } from '../components/title';
import { useCreateProductMutation, ProductsDocument } from '../graphql/__generated__/products.gql.generated';
import { serializeDecimalAsInt } from '../helpers';
import { ProductsForm } from './form';

async function onSubmit(data: ProductsFormNode, create: ReturnType<typeof useCreateProductMutation>[0]) {
  await create({
    variables: {
      data: {
        ...data,
        isPostPaid: data.isPostPaid ?? false,
        costValue: serializeDecimalAsInt(data.costValue),
        priceValue: serializeDecimalAsInt(data.priceValue),
      },
    },
  });
}

export function ProductInsert() {
  const [form] = useForm<ProductsFormNode>();
  const [create] = useCreateProductMutation({
    refetchQueries: [ProductsDocument],
  });

  return (
    <>
      <Title title="Novo Fornecedor" />

      <ProductsForm form={form} onFinish={values => onSubmit(values, create)} />

      <Row style={{ marginTop: '20px' }}>
        <Button size="large" type="primary" onClick={() => form.submit()}>
          Salvar
        </Button>
      </Row>
    </>
  );
}
