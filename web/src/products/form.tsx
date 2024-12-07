import { Col, Form, Input, InputNumber, Switch } from 'antd';
import { useNavigate } from 'react-router-dom';
import type { ProductsFormNode } from '.';
import { InputNumberMoney } from '../components/input-number-money';
import { ProviderAsyncSelect } from '../components/provider-async-select.component';
import { useState } from 'react';

export function ProductsForm({ onFinish: finish, ...props }: Parameters<typeof Form<ProductsFormNode>>[0]) {
  const [controlsQty, setControlsQty] = useState(props?.initialValues?.controlsQty || false);
  const navigate = useNavigate();
  async function onFinish(values: ProductsFormNode) {
    if (finish) await finish(values);
    navigate('/products');
  }
  return (
    <Form onFinish={onFinish} style={{ width: '100%' }} {...props}>
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
          name={nameof<ProductsFormNode>(x => x.controlsQty)}
          label="Controla Qtde?"
          valuePropName="checked"
        >
          <Switch
            onChange={(chk => {
              setControlsQty(chk);
              props.form?.setFieldValue('qty', 0);
            })}
          />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item
          name={nameof<ProductsFormNode>(x => x.qty)}
          label="Qtde"
        >
          <InputNumber
            disabled={!controlsQty}
            min={0}
          />
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
