import { Button, Row, Skeleton } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import _ from 'lodash';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import type { SalesFormNode } from '.';
import { Title } from '../components/title';
import {
  useUpdateSaleMutation,
  SalesDocument,
  SaleDocument,
  useSaleQuery,
} from '../graphql/__generated__/sales.gql.generated';
import { objectPropertiesSet } from '../helpers';
import { SaleItemUpdateWithWhereUniqueWithoutSaleInput } from '../types';
import { SalesForm } from './form';

async function onSubmit({ id, date, saleItems }: SalesFormNode, update: ReturnType<typeof useUpdateSaleMutation>[0]) {
  const createMany = saleItems.nodes.filter(item => !item.id);
  const updateMany = saleItems.nodes.filter(item => item.id);
  await update({
    refetchQueries: [SaleDocument, SalesDocument],
    variables: {
      where: { id },
      data: {
        date: { set: date },
        saleItems: {
          createMany: !createMany.length
            ? undefined
            : {
                data: createMany,
              },
          update: updateMany.map(item => {
            const { id: itemId, productId, providerId, ...rest } = item;
            const res: SaleItemUpdateWithWhereUniqueWithoutSaleInput = {
              where: { id: itemId },
              data: {
                ...objectPropertiesSet(
                  _.pick(rest, ['costIsPostPaid', 'quantity', 'totalCostValue', 'totalValue'] as (keyof typeof rest)[])
                ),
                product: !productId ? undefined : { connect: { id: productId } },
                provider: !providerId ? undefined : { connect: { id: providerId } },
              },
            };
            return res;
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

  const initialValues = useMemo(
    () => ({
      ...data?.sale,
      date: !data?.sale?.date ? undefined : dayjs(data?.sale?.date),
    }),
    [data]
  );

  if (loading) return <Skeleton />;

  return (
    <>
      <Title title={data?.sale?.id ?? 'Venda não encontrada'} />

      <SalesForm initialValues={initialValues} form={form} onFinish={values => onSubmit(values, update)} />

      <Row style={{ marginTop: '20px' }}>
        <Button size="large" type="primary" onClick={() => form.submit()}>
          Salvar
        </Button>
      </Row>
    </>
  );
}
