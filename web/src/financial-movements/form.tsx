import { Col, DatePicker, Form, Input, Radio } from 'antd';
import dayjs from 'dayjs';
import _ from 'lodash';
import type { FinancialMovementsFormNode } from '.';
import { InputNumberMoney } from '../components/input-number-money';

const defaultInitialValues: FinancialMovementsFormNode = {
  date: dayjs(),
  kind: 'credit',
  value: 0,
};

export function FinancialMovementsForm({
  onFinish: finish,
  ...props
}: Parameters<typeof Form<FinancialMovementsFormNode>>[0]) {
  async function onFinish(values: FinancialMovementsFormNode) {
    if (finish) await finish(values);
    window.location.href = '/financial-movements';
  }

  return (
    <div>
      <div>
        <Form
          initialValues={defaultInitialValues}
          onFinish={onFinish}
          style={{ width: '100%' }}
          layout="inline"
          {...props}>
          <Form.Item
            hidden
            name={nameof<FinancialMovementsFormNode>((x) => {
              return x.id;
            })}>
            <Input />
          </Form.Item>

          <Col>
            <label>Data</label>
            <Form.Item
              name={nameof<FinancialMovementsFormNode>((x) => {
                return x.date;
              })}>
              <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" />
            </Form.Item>
          </Col>

          <Col>
            <label>Tipo</label>
            <Form.Item
              name={nameof<FinancialMovementsFormNode>((x) => {
                return x.kind;
              })}>
              <Radio.Group>
                <Radio value="credit">Crédito</Radio>
                <Radio value="debit">Débito</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>

          <Col>
            <label>Valor</label>
            <Form.Item
              name={nameof<FinancialMovementsFormNode>((x) => {
                return x.value;
              })}>
              <InputNumberMoney />
            </Form.Item>
          </Col>

          <Col>
            <label>Descrição</label>
            <Form.Item
              name={nameof<FinancialMovementsFormNode>((x) => {
                return x.description;
              })}>
              <Input allowClear />
            </Form.Item>
          </Col>
        </Form>
      </div>
    </div>
  );
}
