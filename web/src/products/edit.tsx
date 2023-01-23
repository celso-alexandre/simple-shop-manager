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
} from '../graphql/__generated__/products.gql.generated';
import { objectPropertiesSet, serializeDecimalAsInt, serializeIntAsDecimal } from '../helpers';
import { ProductsForm } from './form';

async function onSubmit({ id, ...data }: ProductsFormNode, update: ReturnType<typeof useUpdateProductMutation>[0]) {
  await update({
    variables: {
      where: { id },
      data: objectPropertiesSet({
        ...data,
        isPostPaid: data.isPostPaid ?? false,
        costValue: serializeDecimalAsInt(data.costValue),
        priceValue: serializeDecimalAsInt(data.priceValue),
      }),
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
    };
  }, [data]);

  if (loading) return <Skeleton />;

  return (
    <>
      <Title title={initialValues?.name ?? 'Fornecedor não encontrado'} />

      <ProductsForm initialValues={initialValues} form={form} onFinish={values => onSubmit(values, update)} />

      <Row style={{ marginTop: '20px' }}>
        <Button size="large" type="primary" onClick={() => form.submit()}>
          Salvar
        </Button>
      </Row>
    </>
  );
}
