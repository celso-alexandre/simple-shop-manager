import { Col, Form, Input, InputNumber, Row, Switch } from 'antd';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import type { SalesFormNode } from '.';
import { InputNumberMoney } from '../components/input-number-money';

export function SalesForm({ onFinish: finish, ...props }: Parameters<typeof Form<SalesFormNode>>[0]) {
  const navigate = useNavigate();
  async function onFinish(values: SalesFormNode) {
    if (finish) await finish(values);
    navigate('/sales');
  }
  return (
    <Form onFinish={onFinish} style={{ width: '100%' }} layout="inline" {...props}>
      <Form.Item hidden name={nameof<SalesFormNode>(x => x.id)}>
        <Input />
      </Form.Item>

      <Col>
        <Form.Item name={nameof<SalesFormNode>(x => x.date)} label="Name" labelCol={{ span: 24 }}>
          <Input style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Row>
        <Form.List name={nameof<SalesFormNode>(x => x.saleItems)}>
          {fields =>
            fields.map(field => {
              type SaleItem = SalesFormNode['saleItems']['nodes'][0];
              type SaleItemKeys = keyof SalesFormNode['saleItems']['nodes'][0];
              return (
                <Fragment key={field.key ?? field.name}>
                  <Col>
                    <Form.Item name={[nameof<SalesFormNode>(x => x.saleItems), field.name, 'id' as SaleItemKeys]}>
                      <Input hidden />
                    </Form.Item>
                  </Col>

                  <Col>
                    <Form.Item
                      name={[
                        nameof<SalesFormNode>(x => x.saleItems),
                        field.name,
                        'product',
                        nameof<SaleItem>(x => x.id),
                      ]}
                    >
                      <Input hidden /> {/** TODO: Async Select */}
                    </Form.Item>
                  </Col>

                  <Col>
                    <Form.Item
                      name={[nameof<SalesFormNode>(x => x.saleItems), field.name, nameof<SaleItem>(x => x.quantity)]}
                    >
                      <InputNumber />
                    </Form.Item>
                  </Col>

                  <Col>
                    <Form.Item
                      name={[nameof<SalesFormNode>(x => x.saleItems), field.name, nameof<SaleItem>(x => x.totalValue)]}
                    >
                      <InputNumberMoney />
                    </Form.Item>
                  </Col>

                  <Col>
                    <Form.Item
                      name={[
                        nameof<SalesFormNode>(x => x.saleItems),
                        field.name,
                        nameof<SaleItem>(x => x.provider),
                        'id',
                      ]}
                    >
                      <Input /> {/** TODO: Async Select */}
                    </Form.Item>
                  </Col>

                  <Col>
                    <Form.Item
                      name={[
                        nameof<SalesFormNode>(x => x.saleItems),
                        field.name,
                        nameof<SaleItem>(x => x.costIsPostPaid),
                      ]}
                      valuePropName="checked"
                    >
                      <Switch />
                    </Form.Item>
                  </Col>

                  <Col>
                    <Form.Item
                      name={[
                        nameof<SalesFormNode>(x => x.saleItems),
                        field.name,
                        nameof<SaleItem>(x => x.totalCostValue),
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Fragment>
              );
            })
          }
        </Form.List>
      </Row>
    </Form>
  );
}
