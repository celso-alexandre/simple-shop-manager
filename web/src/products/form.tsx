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

      <div
        className="flex gap-8 pl-4 pt-2"
        style={{
          border: priceIsBelowCost ? '2px solid red' : '2px solid #ccc',
          borderRadius: '8px',
        }}>
        <Form.Item
          name={nameof<ProductsFormNode>((x) => {
            return x.costValue;
          })}
          label="Custo"
          style={{ width: 250 }}
          labelCol={{ span: 24 }}>
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

        <Form.Item
          name={nameof<ProductsFormNode>((x) => {
            return x.netMarginPercent;
          })}
          label="M Líquida"
          style={{ width: 250 }}
          labelCol={{ span: 24 }}>
          <InputDecimalPercent
            className="w-full"
            onChange={(val) => {
              const costValue = props.form?.getFieldValue('costValue') || 0;
              const newPriceValue = addMargin(
                costValue,
                preciseParseFloat(val as any, 2),
                2
              );
              setPriceIsBelowCost(newPriceValue < costValue);
              // console.log('newPriceValue', newPriceValue);
              props.form?.setFieldValue('priceValue', newPriceValue);
            }}
          />
        </Form.Item>

        <Form.Item
          name={nameof<ProductsFormNode>((x) => {
            return x.priceValue;
          })}
          label="Preço Venda"
          style={{ width: 250 }}
          labelCol={{ span: 24 }}
          extra={
            priceIsBelowCost ? (
              <div className="mt-2 p-0 text-xs text-red-500">
                ** Margem negativa
              </div>
            ) : (
              <div />
            )
          }>
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
      </div>

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
          <ProviderAsyncSelect
            className="w-full"
            setFirst={(id) => {
              if (!props.form) return;
              if (!id) return;
              if (props.form?.getFieldValue('providerId')) return;
              props.form?.setFieldsValue({ providerId: id });
            }}
          />
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
