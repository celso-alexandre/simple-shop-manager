import { Col, Form, Input, Switch } from 'antd';
import { useNavigate } from 'react-router-dom';
import type { ProductsFormNode } from '.';
import { InputNumberMoney } from '../components/input-number-money';
import { ProviderAsyncSelect } from '../components/provider-async-select.component';

export function ProductsForm({ onFinish: finish, ...props }: Parameters<typeof Form<ProductsFormNode>>[0]) {
  const navigate = useNavigate();
  async function onFinish(values: ProductsFormNode) {
    if (finish) await finish(values);
    navigate('/products');
  }
  return (
    <Form onFinish={onFinish} style={{ width: '100%' }} layout="inline" {...props}>
      <Form.Item hidden name={nameof<ProductsFormNode>(x => x.id)}>
        <Input />
      </Form.Item>

      <Col>
        <Form.Item name={nameof<ProductsFormNode>(x => x.name)} label="Nome">
          <Input style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item name={nameof<ProductsFormNode>(x => x.brandName)} label="Marca">
          <Input style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item name={nameof<ProductsFormNode>(x => x.costValue)} label="Custo">
          <InputNumberMoney style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item name={nameof<ProductsFormNode>(x => x.priceValue)} label="Preço">
          <InputNumberMoney style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item
         
          label="Fornecedor"
          name={nameof<ProductsFormNode>(x => x.providerId)}
          style={{ width: 300 }}
        >
          <ProviderAsyncSelect style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item
          name={nameof<ProductsFormNode>(x => x.isPostPaid)}
          label="Consignado"
         
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
      </Col>
    </Form>
  );
}
