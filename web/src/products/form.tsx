import { Col, Form, Input, InputNumber, Switch } from 'antd';
import type { ProductsFormNode } from '.';
import { InputNumberMoney } from '../components/input-number-money';
import { ProviderAsyncSelect } from '../components/provider-async-select.component';
import { useEffect, useState } from 'react';
import { addMargin, preciseParseFloat } from '../helpers';
import { InputDecimalPercent } from '../components/input-decimal-percent';

export function ProductsForm({
  onFinish: finish,
  ...props
}: Parameters<typeof Form<ProductsFormNode>>[0]) {
  const [controlsQty, setControlsQty] = useState(
    props?.initialValues?.controlsQty || false
  );
  const [priceIsBelowCost, setPriceIsBelowCost] = useState(false);
  async function onFinish(values: ProductsFormNode) {
    if (finish) await finish(values);
    window.location.href = '/products';
  }
  useEffect(() => {
    const costValue = props?.initialValues?.costValue || 0;
    const priceValue = props?.initialValues?.priceValue || 0;
    setPriceIsBelowCost(priceValue < costValue);
  }, [props.initialValues]);
  return (
    <Form onFinish={onFinish} className="w-full" {...props}>
      <Form.Item
        hidden
        name={nameof<ProductsFormNode>((x) => {
          return x.id;
        })}>
        <Input />
      </Form.Item>

      <Col>
        <Form.Item
          name={nameof<ProductsFormNode>((x) => {
            return x.name;
          })}
          label="Nome">
          <Input className="w-full" autoFocus />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item
          name={nameof<ProductsFormNode>((x) => {
            return x.brandName;
          })}
          label="Marca">
          <Input className="w-full" />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item
          name={nameof<ProductsFormNode>((x) => {
            return x.costValue;
          })}
          label="Custo">
          <InputNumberMoney
            className="w-full"
            onChange={(val) => {
              const priceValue =
                preciseParseFloat(props.form?.getFieldValue('priceValue'), 2) ||
                0;
              const costValue = preciseParseFloat(val, 2) || 0;
              setPriceIsBelowCost(priceValue < costValue);
              if (!priceValue || !costValue) {
                props.form?.setFieldValue('netMarginPercent', 0);
                return;
              }
              props.form?.setFieldValue(
                'netMarginPercent',
                priceValue / costValue - 1
              );
            }}
          />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item
          name={nameof<ProductsFormNode>((x) => {
            return x.netMarginPercent;
          })}
          label="M Líquida">
          <InputDecimalPercent
            className="min-w-24"
            onChange={(val) => {
              const costValue = props.form?.getFieldValue('costValue') || 0;
              const newPriceValue = addMargin(
                costValue,
                preciseParseFloat(val as any, 2),
                2
              );
              setPriceIsBelowCost(newPriceValue < costValue);
              props.form?.setFieldValue('priceValue', newPriceValue);
            }}
          />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item
          name={nameof<ProductsFormNode>((x) => {
            return x.priceValue;
          })}
          label={`Preço Venda${priceIsBelowCost ? ' **margem negativa**' : ''}`}
          className={`rounded-md p-3 ${
            priceIsBelowCost
              ? 'border-2 border-red-500'
              : 'border-2 border-blue-500'
          }`}>
          <InputNumberMoney
            className="w-full"
            onChange={(val) => {
              const priceValue = parseFloat(val as any) || 0;
              const costValue = props.form?.getFieldValue('costValue') || 0;
              setPriceIsBelowCost(priceValue < costValue);
              if (!priceValue || !costValue) {
                props.form?.setFieldValue('netMarginPercent', 0);
                return;
              }
              props.form?.setFieldValue(
                'netMarginPercent',
                priceValue / costValue - 1
              );
            }}
          />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item
          name={nameof<ProductsFormNode>((x) => {
            return x.controlsQty;
          })}
          label="Controla Qtde?"
          valuePropName="checked">
          <Switch
            onChange={(chk) => {
              setControlsQty(chk);
              props.form?.setFieldValue('qty', 0);
            }}
          />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item
          name={nameof<ProductsFormNode>((x) => {
            return x.qty;
          })}
          label="Qtde">
          <InputNumber disabled={!controlsQty} min={0} />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item
          label="Fornecedor"
          name={nameof<ProductsFormNode>((x) => {
            return x.providerId;
          })}
          style={{ width: 300 }}>
          <ProviderAsyncSelect className="w-full" />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item
          name={nameof<ProductsFormNode>((x) => {
            return x.isPostPaid;
          })}
          label="Consignado"
          valuePropName="checked">
          <Switch />
        </Form.Item>
      </Col>
    </Form>
  );
}
