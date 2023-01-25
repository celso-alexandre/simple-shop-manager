import { Button, Col, DatePicker, Form, Input, InputNumber, Switch } from 'antd';
import dayjs from 'dayjs';
import _ from 'lodash';
import { Fragment } from 'react';
import { BiTrashAlt } from 'react-icons/bi';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import type { SaleItem, SalesFormNode } from '.';
import { InputNumberMoney } from '../components/input-number-money';
import { InputNumberPercent } from '../components/input-number-percent';
import { ProductAsyncSelect } from '../components/product-async-select.component';
import { ProviderAsyncSelect } from '../components/provider-async-select.component';
import { ProductQuery, useProductLazyQuery } from '../graphql/__generated__/products.gql.generated';

const defaultInitialValues: SalesFormNode = {
  date: dayjs(),
  saleItems: {
    nodes: [
      {
        quantity: 1,
        costIsPostPaid: false,
        totalCostValue: 0,
        totalValue: 0,
        netMarginPercent: 0,
      } as SalesFormNode['saleItems']['nodes'][number],
    ],
  },
};

export function SalesForm({ onFinish: finish, ...props }: Parameters<typeof Form<SalesFormNode>>[0]) {
  const navigate = useNavigate();
  async function onFinish(values: SalesFormNode) {
    if (finish) await finish(values);
    navigate('/sales');
  }
  const [getProduct] = useProductLazyQuery();

  type SaleItemRes = SalesFormNode['saleItems']['nodes'][number];
  async function setSaleItem(
    index: number,
    saleItemOverride: (saleItem: SaleItemRes, product: ProductQuery['product']) => SaleItemRes
  ) {
    if (!props.form) return;
    const {
      saleItems: { nodes },
    } = props.form.getFieldsValue();
    const item = nodes[index];
    const { productId } = item;
    const { data } = await getProduct({
      variables: {
        where: { id: productId },
      },
    });
    if (!data?.product) throw new Error('Could not get product');

    Object.assign(nodes[index], saleItemOverride(item, data.product));
    props.form.setFieldsValue({ saleItems: { nodes } });
  }

  function setSaleItemProduct(index: number) {
    return setSaleItem(index, (saleItem, product) => {
      const netMargin = product.priceValue - product.costValue;
      const netMarginPercent = netMargin / product.priceValue;
      console.log('provider', product.provider?.id);
      return {
        ...saleItem,
        quantity: 1,
        costIsPostPaid: product.isPostPaid,
        netMarginPercent: netMarginPercent * 100,
        providerId: product.provider?.id || null,
        totalValue: product.priceValue,
        totalCostValue: product.costValue,
      };
    });
  }

  function setSaleItemQty(index: number, quantity: number) {
    return setSaleItem(index, (saleItem, product) => {
      return {
        ...saleItem,
        quantity,
        totalValue: product.priceValue * quantity,
        totalCostValue: product.costValue * quantity,
      };
    });
  }

  const mergedInitialValues = _.pick(props.initialValues ?? defaultInitialValues ?? {}, [
    'id',
    'date',
    'saleItems',
  ] as (keyof typeof defaultInitialValues)[]) as typeof defaultInitialValues;
  const initialValues = {
    ...mergedInitialValues,
    saleItems:
      mergedInitialValues.saleItems.nodes.map(item =>
        _.pick(item, [
          'id',
          'costIsPostPaid',
          'productId',
          'providerId',
          'quantity',
          'totalCostValue',
          'totalValue',
        ] as (keyof typeof item)[])
      ) ?? [],
  };

  return (
    <Form initialValues={initialValues} onFinish={onFinish} style={{ width: '100%' }} layout="inline" {...props}>
      <Form.Item hidden name={nameof<SalesFormNode>(x => x.id)}>
        <Input />
      </Form.Item>

      <Col>
        <Form.Item name={nameof<SalesFormNode>(x => x.date)} label="Data" labelCol={{ span: 24 }}>
          <DatePicker style={{ width: '100%' }} format="L" />
        </Form.Item>
      </Col>

      <Col span={24} style={{ height: 20 }} />

      <Form.List name={nameof.split<SalesFormNode>(x => x.saleItems.nodes)}>
        {(fields, { add, remove }) =>
          fields.map(field => {
            type SaleItemKeys = keyof SalesFormNode['saleItems']['nodes'][0];
            return (
              <Fragment key={field.key ?? field.name}>
                <Col>
                  <Form.Item hidden labelCol={{ span: 24 }} name={[field.name, 'id' as SaleItemKeys]}>
                    <InputNumber />
                  </Form.Item>
                </Col>

                <Col>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    label="Produto"
                    name={[field.name, nameof<SaleItem>(x => x.productId)]}
                  >
                    <ProductAsyncSelect
                      style={{ width: 200 }}
                      onChange={async () => {
                        await setSaleItemProduct(field.name);
                      }}
                    />
                  </Form.Item>
                </Col>

                <Col>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    label="Quantidade"
                    name={[field.name, nameof<SaleItem>(x => x.quantity)]}
                  >
                    <InputNumber
                      precision={0}
                      min={1}
                      onChange={async quantity => {
                        await setSaleItemQty(field.name, quantity ?? 0);
                      }}
                    />
                  </Form.Item>
                </Col>

                <Col>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    label="Valor"
                    name={[field.name, nameof<SaleItem>(x => x.totalValue)]}
                  >
                    <InputNumberMoney disabled />
                  </Form.Item>
                </Col>

                <Col>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    label="Fornecedor"
                    name={[field.name, nameof<SaleItem>(x => x.providerId)]}
                    style={{ width: 300 }}
                  >
                    <ProviderAsyncSelect style={{ width: '100%' }} />
                  </Form.Item>
                </Col>

                <Col>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    label="Consignado?"
                    name={[field.name, nameof<SaleItem>(x => x.costIsPostPaid)]}
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>

                <Col>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    label="Margem"
                    name={[field.name, nameof<SaleItem>(x => x.netMarginPercent)]}
                  >
                    <InputNumberPercent disabled />
                  </Form.Item>
                </Col>

                <div style={{ width: 100, display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Button onClick={add}>
                      <FiPlus />
                    </Button>
                  </div>
                  {field.name !== 0 && (
                    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                      <Button onClick={() => remove(field.name)}>
                        <BiTrashAlt />
                      </Button>
                    </div>
                  )}
                </div>
              </Fragment>
            );
          })
        }
      </Form.List>
    </Form>
  );
}
