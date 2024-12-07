import { Button, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { ProductsFormNode } from '.';
import { Title } from '../components/title';
import {
  useCreateProductMutation,
  ProductsDocument,
  ProductDocument,
  ProductsSelectDocument,
} from '../graphql/__generated__/products.gql.generated';
import { serializeDecimalAsInt } from '../helpers';
import { ProductsForm } from './form';
import { productDto } from './helpers';

async function onSubmit(product: ProductsFormNode, create: ReturnType<typeof useCreateProductMutation>[0]) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, providerId, ...data } = productDto(product);
  await create({
    refetchQueries: [ProductDocument, ProductsDocument, ProductsSelectDocument],
    variables: {
      data: {
        ...data,
        isPostPaid: data.isPostPaid || false,
        costValue: serializeDecimalAsInt(data.costValue),
        priceValue: serializeDecimalAsInt(data.priceValue),
        qty: data.qty || 0,
        controlsQty: data.controlsQty || false,
        provider: !providerId ? undefined : { connect: { id: providerId } },
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
      <Title title="Novo Produto" />

      <ProductsForm
        form={form}
        onFinish={(values) => {
          onSubmit(values, create);
        }} />

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
    </>
  );
}
