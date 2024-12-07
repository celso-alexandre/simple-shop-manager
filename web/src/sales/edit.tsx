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
  SaleQuery,
} from '../graphql/__generated__/sales.gql.generated';
import { objectPropertiesSet, serializeDecimalAsInt } from '../helpers';
import { SaleItemUpdateWithWhereUniqueWithoutSaleInput } from '../types';
import { SalesForm } from './form';
import { saleDto } from './helper';

async function onSubmit(sale: SalesFormNode, update: ReturnType<typeof useUpdateSaleMutation>[0], data?: SaleQuery) {
  const { id, date, saleItems } = saleDto(sale);
  const createMany = saleItems.nodes.filter(item => !item.id);
  const updateMany = saleItems.nodes.filter(item => item.id);
  const disconnect =
    data?.sale?.saleItems?.nodes?.filter(item => {
      return !updateMany.find(x => x.id === item.id);
    }) ?? [];

  await update({
    refetchQueries: [SaleDocument, SalesDocument],
    variables: {
      where: { id },
      data: {
        date: { set: date },
        saleItems: {
          deleteMany: !disconnect?.length ? undefined : [{ id: { in: disconnect.map(item => item.id) } }],
          create: !createMany?.length
            ? undefined
            : createMany.map(item => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { id: saleItemId, productId, providerId, totalValue, ...rest } = item;
                return {
                  ...rest,
                  totalValue: serializeDecimalAsInt(totalValue),
                  product: { connect: { id: productId } },
                  provider: !providerId ? undefined : { connect: { id: providerId } },
                };
              }),
          update: !updateMany?.length
            ? undefined
            : updateMany.map(item => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { id: saleItemId, productId, providerId, totalValue, ...rest } = item;
                const res: SaleItemUpdateWithWhereUniqueWithoutSaleInput = {
                  where: { id: saleItemId },
                  data: {
                    ...objectPropertiesSet(rest),
                    totalValue: { set: serializeDecimalAsInt(totalValue) },
                    product: { connect: { id: productId } },
                    provider: !providerId ? { disconnect: true } : { connect: { id: providerId } },
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

  const initialValues = useMemo<SalesFormNode | undefined>(() => {
    if (!data?.sale) return undefined;
    const { sale } = data;
    return {
      ...sale,
      date: dayjs(sale.date),
      saleItems: {
        nodes: sale.saleItems.nodes.map(item => ({
          ...item,
          totalValue: item.totalValueDecimal,
          netMarginPercent: serializeDecimalAsInt(item.netMarginPercent),
        })),
      },
    };
  }, [data]);

  if (loading) return <Skeleton />;

  return (
    <>
      <Title title={data?.sale?.id ?? 'Venda não encontrada'} />

      <SalesForm
        initialValues={initialValues}
        form={form}
        onFinish={async (values) => {
          await form.validateFields();
          onSubmit(values, update, data);
        }}
      />

      <Row style={{ marginTop: '20px' }}>
        <Button size="large" type="primary" onClick={() => form.submit()}>
          Salvar
        </Button>
      </Row>
    </>
  );
}
