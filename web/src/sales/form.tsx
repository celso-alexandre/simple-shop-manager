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
import { formatMoneyFromDecimal, getNetMargin, serializeIntAsDecimal } from '../helpers';

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
      const { percent } = getNetMargin(product.priceValue * 100, product.costValue * 100, 0);
      return {
        ...saleItem,
        quantity: 1,
        costIsPostPaid: product.isPostPaid,
        netMarginPercent: percent,
        providerId: product.provider?.id || null,
        totalValue: serializeIntAsDecimal(product.priceValue),
        totalCostValue: serializeIntAsDecimal(product.costValue),
      };
    });
  }

  function setSaleItemQty(index: number, quantity: number) {
    return setSaleItem(index, (saleItem, product) => {
      const totalValue = serializeIntAsDecimal(product.priceValue * quantity);
      const totalCostValue = serializeIntAsDecimal(product.costValue * quantity);
      const { percent } = getNetMargin(totalValue, totalCostValue, 0);
      return {
        ...saleItem,
        quantity,
        netMarginPercent: percent,
        totalValue,
        totalCostValue,
      };
    });
  }

  function setTotalValue(index: number, totalValue: number) {
    return setSaleItem(index, (saleItem, product) => {
      const totalCostValue = serializeIntAsDecimal(product.costValue) * saleItem.quantity;
      const { percent } = getNetMargin(totalValue, totalCostValue, 0);
      return {
        ...saleItem,
        netMarginPercent: percent,
        totalCostValue,
      };
    });
  }

  return (
    <Form initialValues={defaultInitialValues} onFinish={onFinish} style={{ width: '100%' }} layout="inline" {...props}>
      <Form.Item hidden name={nameof<SalesFormNode>(x => x.id)}>
        <Input />
      </Form.Item>

      <Col>
        <Form.Item name={nameof<SalesFormNode>(x => x.date)}>
          <label>Data</label>
          <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" />
        </Form.Item>
      </Col>

      <Col span={24} style={{ height: 20 }} />

      <Form.List name={nameof.split<SalesFormNode>(x => x.saleItems.nodes)}>
        {(fields, { add, remove }) =>
          fields.map(field => {
            type SaleItemKeys = keyof SalesFormNode['saleItems']['nodes'][0];
            return (
              <Fragment key={field.key ?? field.name}>
                  <Form.Item hidden  name={[field.name, 'id' as SaleItemKeys]}>
                    <InputNumber />
                  </Form.Item>

                  <Form.Item
                    name={[field.name, nameof<SaleItem>(x => x.productId)]}
                  >
                    <div>
                      <label>Produto</label>
                    </div>
                    <ProductAsyncSelect
                      style={{ width: 400 }}
                      onChange={async () => {
                        await setSaleItemProduct(field.name);
                      }}
                    />
                  </Form.Item>

                  <Form.Item
                    name={[field.name, nameof<SaleItem>(x => x.quantity)]}
                  >
                    <div>
                      <label>Quantidade</label>
                    </div>
                    <InputNumber
                      precision={0}
                      min={1}
                      onChange={async quantity => {
                        await setSaleItemQty(field.name, quantity ?? 0);
                      }}
                    />
                  </Form.Item>

                  <Form.Item
                    name={[field.name, nameof<SaleItem>(x => x.totalValue)]}
                  >
                    <div>
                      <label>Valor</label>
                    </div>
                    <InputNumberMoney
                      onChange={async value => {
                        await setTotalValue(field.name, +(value ?? 0));
                      }}
                    />
                  </Form.Item>

                  <Form.Item
                    name={[field.name, nameof<SaleItem>(x => x.providerId)]}
                    style={{ width: 220 }}
                  >
                    <div>
                      <label>Fornecedor</label>
                    </div>
                    <ProviderAsyncSelect style={{ width: '100%' }} />
                  </Form.Item>

                  <Form.Item
                    name={[field.name, nameof<SaleItem>(x => x.costIsPostPaid)]}
                    valuePropName="checked"
                  >
                    <div>
                      <label>Consignado?</label>
                    </div>
                    <Switch />
                  </Form.Item>

                  <Form.Item
                    style={{ maxWidth: 150 }}
                    name={[field.name, nameof<SaleItem>(x => x.netMarginPercent)]}
                    tooltip={`Custo: ${formatMoneyFromDecimal(
                      props.form?.getFieldValue([
                        'saleItems',
                        'nodes',
                        field.name,
                        'totalCostValue',
                      ])
                    )}`}
                  >
                    <div>
                      <label>M Líquida</label>
                    </div>
                    <InputNumberPercent disabled />
                  </Form.Item>

                <div style={{ width: 100, display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Button onClick={add}>
                      <FiPlus />
                    </Button>
                  </div>
                  {fields.length > 1 && (
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
