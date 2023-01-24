import { Button, Col, DatePicker, Form, Input, InputNumber, Switch } from 'antd';
import dayjs from 'dayjs';
import { Fragment } from 'react';
import { BiTrashAlt } from 'react-icons/bi';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import type { SaleItem, SalesFormNode } from '.';
import { InputNumberMoney } from '../components/input-number-money';
import { InputNumberPercent } from '../components/input-number-percent';
import { ProductAsyncSelect } from '../components/product-async-select.component';
import { ProviderAsyncSelect } from '../components/provider-async-select.component';

const initialValues: SalesFormNode = {
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

      <Col span={24} />

      <Form.List name={nameof.split<SalesFormNode>(x => x.saleItems.nodes)}>
        {(fields, { add, remove }) =>
          fields.map(field => {
            type SaleItemKeys = keyof SalesFormNode['saleItems']['nodes'][0];
            return (
              <Fragment key={field.key ?? field.name}>
                <Col>
                  <Form.Item labelCol={{ span: 24 }} hidden name={[field.name, 'id' as SaleItemKeys]}>
                    <Input />
                  </Form.Item>
                </Col>

                <Col>
                  <Form.Item labelCol={{ span: 24 }} label="Produto" name={[field.name, 'productId']}>
                    <ProductAsyncSelect />
                  </Form.Item>
                </Col>

                <Col>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    label="Quantidade"
                    name={[field.name, nameof<SaleItem>(x => x.quantity)]}
                  >
                    <InputNumber precision={0} min={1} />
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
                    name={[field.name, nameof<SaleItem>(x => x.providerId), 'id']}
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
