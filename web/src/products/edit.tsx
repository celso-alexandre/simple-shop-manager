import { Button, Row, Skeleton } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import type { ProductsFormNode } from '.';
import { Title } from '../components/title';
import {
  useUpdateProductMutation,
  ProductsDocument,
  useProductQuery,
  ProductDocument,
  ProductsSelectDocument,
} from '../graphql/__generated__/products.gql.generated';
import {
  objectPropertiesSet,
  serializeDecimalAsInt,
  serializeIntAsDecimal,
} from '../helpers';
import { ProductsForm } from './form';
import { productDto } from './helpers';

async function onSubmit(
  product: ProductsFormNode,
  update: ReturnType<typeof useUpdateProductMutation>[0]
) {
  const { id, providerId, ...data } = productDto(product);
  await update({
    refetchQueries: [ProductDocument, ProductsDocument, ProductsSelectDocument],
    variables: {
      where: { id },
      data: {
        ...objectPropertiesSet({
          ...data,
          isPostPaid: data.isPostPaid ?? false,
          costValue: serializeDecimalAsInt(data.costValue),
          priceValue: serializeDecimalAsInt(data.priceValue),
        }),
        provider: !providerId
          ? { disconnect: true }
          : { connect: { id: providerId } },
      },
    },
  });
}

export function ProductEdit() {
  const { id } = useParams();
  const [form] = useForm<ProductsFormNode>();
  const [update] = useUpdateProductMutation({
    refetchQueries: [ProductsDocument],
  });
  const { data, loading } = useProductQuery({
    variables: {
      where: { id },
    },
  });

  const initialValues = useMemo(() => {
    if (!data?.product) return data?.product;
    return {
      ...data.product,
      isPostPaid: data.product.isPostPaid ?? false,
      costValue: serializeIntAsDecimal(data.product.costValue),
      priceValue: serializeIntAsDecimal(data.product.priceValue),
      controlsQty: data.product.controlsQty ?? false,
      qty: data.product.qty ?? 0,
      netMarginPercent: data.product.netMarginPercent ?? 0,
    };
  }, [data]);

  if (loading) return <Skeleton />;

  return (
    <>
      <Title title={initialValues?.name ?? 'Produto não encontrado'} />

      <ProductsForm
        initialValues={initialValues}
        form={form}
        onFinish={async (values) => {
          await onSubmit(values, update);
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
    </>
  );
}
