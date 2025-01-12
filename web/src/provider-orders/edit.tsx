import { Button, Row, Skeleton } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import _ from 'lodash';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import type { ProviderOrdersFormNode } from '.';
import { Title } from '../components/title';
import {
  useUpdateProviderOrderMutation,
  ProviderOrdersDocument,
  ProviderOrderDocument,
  useProviderOrderQuery,
  ProviderOrderQuery,
} from '../graphql/__generated__/provider-orders.gql.generated';
import { serializeDecimalAsInt } from '../helpers';
import { ProviderOrderItemUpdateWithWhereUniqueWithoutProviderOrderInput } from '../types';
import { ProviderOrdersForm } from './form';
import { providerOrderDto } from './helper';

async function onSubmit(
  providerOrder: ProviderOrdersFormNode,
  update: ReturnType<typeof useUpdateProviderOrderMutation>[0],
  data?: ProviderOrderQuery
) {
  const { id, date, providerOrderItems } = providerOrderDto(providerOrder);
  const createMany = providerOrderItems.nodes.filter((item) => {
    return !item.id;
  });
  const updateMany = providerOrderItems.nodes.filter((item) => {
    return item.id;
  });
  const disconnect =
    data?.providerOrder?.providerOrderItems?.nodes?.filter((item) => {
      return !updateMany.find((x) => {
        return x.id === item.id;
      });
    }) ?? [];

  await update({
    refetchQueries: [ProviderOrderDocument, ProviderOrdersDocument],
    variables: {
      where: { id },
      data: {
        date: { set: date },
        providerOrderItems: {
          deleteMany: !disconnect?.length
            ? undefined
            : [
                {
                  id: {
                    in: disconnect.map((item) => {
                      return item.id;
                    }),
                  },
                },
              ],
          create: !createMany?.length
            ? undefined
            : createMany.map((item) => {
                const {
                  id: _providerOrderItemId,
                  productId,
                  providerId,
                  totalValue,
                  quantity,
                } = item;
                return {
                  quantity,
                  totalValue: serializeDecimalAsInt(totalValue),
                  product: { connect: { id: productId } },
                  providerId,
                  // provider: !providerId
                  //   ? undefined
                  //   : { connect: { id: providerId } },
                };
              }),
          update: !updateMany?.length
            ? undefined
            : updateMany.map((item) => {
                const {
                  id: providerOrderItemId,
                  productId,
                  providerId,
                  totalValue,
                  quantity,
                } = item;
                const res: ProviderOrderItemUpdateWithWhereUniqueWithoutProviderOrderInput =
                  {
                    where: { id: providerOrderItemId },
                    data: {
                      quantity: { set: quantity },
                      totalValue: { set: serializeDecimalAsInt(totalValue) },
                      product: { connect: { id: productId } },
                      providerId: { set: providerId },
                      // provider: !providerId
                      //   ? { disconnect: true }
                      //   : { connect: { id: providerId } },
                    },
                  };
                return res;
              }),
        },
      },
    },
  });
}

export function ProviderOrderEdit() {
  const { id } = useParams();
  const [form] = useForm<ProviderOrdersFormNode>();
  const [update] = useUpdateProviderOrderMutation({
    refetchQueries: [ProviderOrdersDocument],
  });
  const { data, loading } = useProviderOrderQuery({
    variables: {
      where: { id },
    },
  });

  const initialValues = useMemo<ProviderOrdersFormNode | undefined>(() => {
    if (!data?.providerOrder) return undefined;
    const { providerOrder } = data;
    return {
      ...providerOrder,
      date: dayjs(providerOrder.date),
      providerOrderItems: {
        nodes: providerOrder.providerOrderItems.nodes.map((item) => {
          return {
            ...item,
            totalValue: item.totalValueDecimal,
          };
        }),
      },
    };
  }, [data]);

  if (loading) return <Skeleton />;

  return (
    <>
      <Title title={data?.providerOrder?.id ?? 'Compra não encontrada'} />

      <ProviderOrdersForm
        initialValues={initialValues}
        form={form}
        onFinish={async (values) => {
          await form.validateFields();
          onSubmit(values, update, data);
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
