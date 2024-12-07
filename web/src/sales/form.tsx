import { Button, Col, DatePicker, Form, Input, InputNumber, Switch } from 'antd';
import dayjs from 'dayjs';
import _ from 'lodash';
import { Fragment, useState } from 'react';
import { BiTrashAlt } from 'react-icons/bi';
import { FiPlus } from 'react-icons/fi';
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
  // const navigate = useNavigate();
  async function onFinish(values: SalesFormNode) {
    if (finish) await finish(values);
    // navigate('/sales');
    window.location.href = '/sales';
  }
  const [getProduct] = useProductLazyQuery();

  type SaleItemRes = SalesFormNode['saleItems']['nodes'][number];
  async function setSaleItem(
    index: number,
    saleItemOverride: (saleItem: SaleItemRes, product: ProductQuery['product']) => SaleItemRes,
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
    getValuesAndUpdateTotals();
  }

  const [totals, setTotals] = useState({
    totalValue: 0,
  });
  function updateTotals(values?: SalesFormNode) {
    setTotals(
      (values?.saleItems?.nodes ?? [])?.reduce((acc, item) => {
        return {
          totalValue: acc.totalValue + (item?.totalValue || 0),
        };
      }, { totalValue: 0 }),
    );
  }
  function getValuesAndUpdateTotals() {
    const values = props.form?.getFieldsValue();
    updateTotals(values);
    return values;
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
          {...props}
        >
          <Form.Item
            hidden
            name={nameof<SalesFormNode>((x) => {
              return x.id;
            })}>
            <Input />
          </Form.Item>

          <Col>
            <label>Data</label>
            <Form.Item
              name={nameof<SalesFormNode>((x) => {
                return x.date;
              })}>
              <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" />
            </Form.Item>
          </Col>

          <Col span={24} style={{ height: 20 }} />

          <Form.List
            name={nameof.split<SalesFormNode>((x) => {
              return x.saleItems.nodes;
            })}>
            {(fields, { add, remove }) => {
              return fields.map((field) => {
              type SaleItemKeys = keyof SalesFormNode['saleItems']['nodes'][0];
              return (
                <Fragment key={field.key ?? field.name}>
                  <Form.Item hidden name={[field.name, 'id' as SaleItemKeys]}>
                    <InputNumber />
                  </Form.Item>

                  <div>
                    <div>
                      <label>Produto</label>
                    </div>
                    <Form.Item
                      name={[field.name, nameof<SaleItem>((x) => {
                        return x.productId;
                      })]}
                      rules={[
                        { required: true, message: 'Selecione um produto' },
                      ]}
                    >
                      <ProductAsyncSelect
                        style={{ width: 400 }}
                        onChange={async () => {
                          props?.form?.resetFields([
                            ['saleItems', 'nodes', field.name, 'quantity'],
                            ['saleItems', 'nodes', field.name, 'totalValue'],
                            ['saleItems', 'nodes', field.name, 'totalCostValue'],
                            ['saleItems', 'nodes', field.name, 'providerId'],
                            ['saleItems', 'nodes', field.name, 'costIsPostPaid'],
                            ['saleItems', 'nodes', field.name, 'netMarginPercent'],
                          ]);
                          await setSaleItemProduct(field.name);
                        }}
                      />
                    </Form.Item>
                  </div>

                  <div>
                    <div>
                      <label>Quantidade</label>
                    </div>
                    <Form.Item
                      name={[field.name, nameof<SaleItem>((x) => {
                        return x.quantity;
                      })]}
                      rules={[
                        { required: true, message: 'Informe a quantidade' },
                      ]}
                    >                    
                      <InputNumber
                        disabled={!props.form?.getFieldValue(['saleItems', 'nodes', field.name, 'productId'])}
                        precision={0}
                        min={1}
                        onChange={async (quantity) => {
                          await setSaleItemQty(field.name, quantity ?? 0);
                        }}
                      />
                    </Form.Item>
                  </div>

                  <div>
                    <div>
                      <label>Valor</label>
                    </div>
                    <Form.Item
                      name={[field.name, nameof<SaleItem>((x) => {
                        return x.totalValue;
                      })]}
                      rules={[
                        { required: true, message: 'Informe o valor' },
                      ]}
                    >                    
                      <InputNumberMoney
                        disabled={!props.form?.getFieldValue(['saleItems', 'nodes', field.name, 'productId'])}
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
                      name={[field.name, nameof<SaleItem>((x) => {
                        return x.providerId;
                      })]}
                      style={{ width: 220 }}
                    >                    
                      <ProviderAsyncSelect disabled={!props.form?.getFieldValue(['saleItems', 'nodes', field.name, 'productId'])} style={{ width: '100%' }} />
                    </Form.Item>
                  </div>

                  <div>
                    <div>
                      <label>Consignado?</label>
                    </div>
                    <Form.Item
                      name={[field.name, nameof<SaleItem>((x) => {
                        return x.costIsPostPaid;
                      })]}
                      valuePropName="checked"
                    >                    
                      <Switch disabled={!props.form?.getFieldValue(['saleItems', 'nodes', field.name, 'productId'])} />
                    </Form.Item>
                  </div>

                  <div style={{ marginLeft: '2em' }}>
                    <div>
                      <label>M Líquida</label>
                    </div>
                    <Form.Item
                      style={{ maxWidth: 150 }}
                      name={[field.name, nameof<SaleItem>((x) => {
                        return x.netMarginPercent;
                      })]}
                      tooltip={`Custo: ${formatMoneyFromDecimal(
                        props.form?.getFieldValue([
                          'saleItems',
                          'nodes',
                          field.name,
                          'totalCostValue',
                        ]),
                      )}`}
                    >
                      <InputNumberPercent disabled />
                    </Form.Item>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', height: 0, marginTop: 22, width: '100px' }}>
                    {(field.name === fields.length - 1) && (
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
            }
            }
          </Form.List>
        </Form>
      </div>
      <div style={{ marginTop: '5em' }}>
        Total: {formatMoneyFromDecimal(totals?.totalValue)}
      </div>
    </div>
  );
}
