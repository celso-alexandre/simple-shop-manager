import { Button, Col, DatePicker, Form, Input, InputNumber } from 'antd';
import dayjs from 'dayjs';
import _ from 'lodash';
import { Fragment, useEffect, useState } from 'react';
import { BiTrashAlt } from 'react-icons/bi';
import { FiPlus } from 'react-icons/fi';
import type { ProviderOrderItem, ProviderOrdersFormNode } from '.';
import { InputNumberMoney } from '../components/input-number-money';
import { ProductAsyncSelect } from '../components/product-async-select.component';
import { ProviderAsyncSelect } from '../components/provider-async-select.component';
import {
  ProductQuery,
  useProductLazyQuery,
} from '../graphql/__generated__/products.gql.generated';
import {
  formatMoneyFromDecimal,
  getNetMargin,
  serializeIntAsDecimal,
} from '../helpers';

const defaultInitialValues: ProviderOrdersFormNode = {
  date: dayjs(),
  providerOrderItems: {
    nodes: [
      {
        quantity: 1,
        totalValue: 0,
      } as ProviderOrdersFormNode['providerOrderItems']['nodes'][number],
    ],
  },
};

export function ProviderOrdersForm({
  onFinish: finish,
  ...props
}: Parameters<typeof Form<ProviderOrdersFormNode>>[0]) {
  async function onFinish(values: ProviderOrdersFormNode) {
    if (finish) await finish(values);
    window.location.href = '/provider-orders';
  }
  const [getProduct] = useProductLazyQuery();
  const [selectedProducts, setSelectedProducts] = useState(
    (
      props?.initialValues as ProviderOrdersFormNode
    )?.providerOrderItems?.nodes?.map(({ productId }, i) => {
      return {
        i,
        productId,
      };
    }) || []
  );

  type ProviderOrderItemRes =
    ProviderOrdersFormNode['providerOrderItems']['nodes'][number];
  async function setProviderOrderItem(
    index: number,
    providerOrderItemOverride: (
      providerOrderItem: ProviderOrderItemRes,
      product: ProductQuery['product']
    ) => ProviderOrderItemRes
  ) {
    if (!props.form) return;
    const {
      providerOrderItems: { nodes },
    } = props.form.getFieldsValue();
    const item = nodes[index];
    const { productId } = item;
    if (!productId || productId?.startsWith('new|')) return;
    const { data } = await getProduct({
      variables: {
        where: { id: productId },
      },
    });
    if (!data?.product) throw new Error('Could not get product');

    Object.assign(nodes[index], providerOrderItemOverride(item, data.product));
    props.form.setFieldsValue({ providerOrderItems: { nodes } });
    getValuesAndUpdateTotals();
  }

  const [totals, setTotals] = useState({
    totalValue: 0,
  });
  function updateTotals(values?: ProviderOrdersFormNode) {
    setTotals(
      (values?.providerOrderItems?.nodes ?? [])?.reduce(
        (acc, item) => {
          return {
            totalValue: acc.totalValue + (item?.totalValue || 0),
          };
        },
        { totalValue: 0 }
      )
    );
  }
  function getValuesAndUpdateTotals() {
    const values = props.form?.getFieldsValue();
    updateTotals(values);
    return values;
  }

  function setProviderOrderItemProduct(index: number) {
    return setProviderOrderItem(index, (providerOrderItem, product) => {
      const { percent } = getNetMargin(
        product.priceValue * 100,
        product.costValue * 100,
        0
      );
      return {
        ...providerOrderItem,
        quantity: 1,
        costIsPostPaid: product.isPostPaid,
        netMarginPercent: percent,
        providerId: product.provider?.id || null,
        totalValue: serializeIntAsDecimal(product.priceValue),
        totalCostValue: serializeIntAsDecimal(product.costValue),
      };
    });
  }

  function setProviderOrderItemQty(index: number, quantity: number) {
    return setProviderOrderItem(index, (providerOrderItem, product) => {
      const totalValue = serializeIntAsDecimal(product.priceValue * quantity);
      const totalCostValue = serializeIntAsDecimal(
        product.costValue * quantity
      );
      const { percent } = getNetMargin(totalValue, totalCostValue, 0);
      return {
        ...providerOrderItem,
        quantity,
        netMarginPercent: percent,
        totalValue,
        totalCostValue,
      };
    });
  }

  function setTotalValue(index: number, totalValue: number) {
    return setProviderOrderItem(index, (providerOrderItem, product) => {
      const totalCostValue =
        serializeIntAsDecimal(product.costValue) * providerOrderItem.quantity;
      const { percent } = getNetMargin(totalValue, totalCostValue, 0);
      return {
        ...providerOrderItem,
        netMarginPercent: percent,
        totalCostValue,
      };
    });
  }

  useEffect(() => {
    if (!props?.initialValues?.id) return;
    updateTotals(props?.initialValues as any);
  }, [props?.initialValues?.id]);

  return (
    <div>
      <div>
        <Form
          initialValues={defaultInitialValues}
          onFinish={onFinish}
          style={{ width: '100%' }}
          layout="inline"
          onValuesChange={(_, values) => {
            updateTotals(values);
          }}
          {...props}>
          <Form.Item
            hidden
            name={nameof<ProviderOrdersFormNode>((x) => {
              return x.id;
            })}>
            <Input />
          </Form.Item>

          <Col>
            <label>Data</label>
            <Form.Item
              name={nameof<ProviderOrdersFormNode>((x) => {
                return x.date;
              })}>
              <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" />
            </Form.Item>
          </Col>

          <Col span={24} style={{ height: 20 }} />

          <Form.List
            name={nameof.split<ProviderOrdersFormNode>((x) => {
              return x.providerOrderItems.nodes;
            })}>
            {(fields, { add, remove }) => {
              return fields.map((field) => {
                type ProviderOrderItemKeys =
                  keyof ProviderOrdersFormNode['providerOrderItems']['nodes'][0];
                return (
                  <Fragment key={field.key ?? field.name}>
                    <Form.Item
                      hidden
                      name={[field.name, 'id' as ProviderOrderItemKeys]}>
                      <InputNumber />
                    </Form.Item>

                    <div>
                      <div>
                        <label>Produto</label>
                      </div>
                      <Form.Item
                        name={[
                          field.name,
                          nameof<ProviderOrderItem>((x) => {
                            return x.productId;
                          }),
                        ]}
                        rules={[
                          { required: true, message: 'Selecione um produto' },
                        ]}>
                        <ProductAsyncSelect
                          style={{ width: 400 }}
                          notInProductIds={selectedProducts
                            ?.filter((_x, i) => {
                              return i !== field.name;
                            })
                            ?.map((x) => {
                              return x.productId;
                            })}
                          onChange={async (val) => {
                            const selectedProductsCopy =
                              _.cloneDeep(selectedProducts);
                            selectedProductsCopy[field.name] = {
                              i: field.name,
                              productId: val,
                            };
                            setSelectedProducts(selectedProductsCopy);
                            props?.form?.resetFields([
                              [
                                'providerOrderItems',
                                'nodes',
                                field.name,
                                'quantity',
                              ],
                              [
                                'providerOrderItems',
                                'nodes',
                                field.name,
                                'totalValue',
                              ],
                              [
                                'providerOrderItems',
                                'nodes',
                                field.name,
                                'providerId',
                              ],
                            ]);
                            await setProviderOrderItemProduct(field.name);
                          }}
                        />
                      </Form.Item>
                    </div>

                    <div>
                      <div>
                        <label>Quantidade</label>
                      </div>
                      <Form.Item
                        name={[
                          field.name,
                          nameof<ProviderOrderItem>((x) => {
                            return x.quantity;
                          }),
                        ]}
                        rules={[
                          { required: true, message: 'Informe a quantidade' },
                        ]}>
                        <InputNumber
                          disabled={
                            !props.form?.getFieldValue([
                              'providerOrderItems',
                              'nodes',
                              field.name,
                              'productId',
                            ])
                          }
                          precision={0}
                          min={1}
                          onChange={async (quantity) => {
                            await setProviderOrderItemQty(
                              field.name,
                              quantity ?? 0
                            );
                          }}
                        />
                      </Form.Item>
                    </div>

                    <div>
                      <div>
                        <label>Valor</label>
                      </div>
                      <Form.Item
                        name={[
                          field.name,
                          nameof<ProviderOrderItem>((x) => {
                            return x.totalValue;
                          }),
                        ]}
                        rules={[
                          { required: true, message: 'Informe o valor' },
                        ]}>
                        <InputNumberMoney
                          disabled={
                            !props.form?.getFieldValue([
                              'providerOrderItems',
                              'nodes',
                              field.name,
                              'productId',
                            ])
                          }
                          onChange={async (value) => {
                            await setTotalValue(field.name, +(value ?? 0));
                          }}
                        />
                      </Form.Item>
                    </div>

                    <div>
                      <div>
                        <label>Fornecedor</label>
                      </div>
                      <Form.Item
                        name={[
                          field.name,
                          nameof<ProviderOrderItem>((x) => {
                            return x.providerId;
                          }),
                        ]}
                        style={{ width: 220 }}>
                        <ProviderAsyncSelect
                          disabled={
                            !props.form?.getFieldValue([
                              'providerOrderItems',
                              'nodes',
                              field.name,
                              'productId',
                            ])
                          }
                          style={{ width: '100%' }}
                        />
                      </Form.Item>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        height: 0,
                        marginTop: 22,
                        width: '100px',
                      }}>
                      {field.name === fields.length - 1 && (
                        <div>
                          <Button
                            onClick={async () => {
                              await props?.form?.validateFields();
                              add();
                            }}>
                            <FiPlus />
                          </Button>
                        </div>
                      )}
                      {field.name > 1 && (
                        <div>
                          <Button
                            onClick={() => {
                              remove(field.name);
                            }}>
                            <BiTrashAlt />
                          </Button>
                        </div>
                      )}
                    </div>
                  </Fragment>
                );
              });
            }}
          </Form.List>
        </Form>
      </div>
      <div style={{ marginTop: '5em' }}>
        Total: {formatMoneyFromDecimal(totals?.totalValue)}
      </div>
    </div>
  );
}
