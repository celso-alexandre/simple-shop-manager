import { Col, Form, Input } from 'antd';
import type { ProvidersFormNode } from '.';
import { InputPhone } from '../components/input-phone';

export function ProvidersForm({
  onFinish: finish,
  ...props
}: Parameters<typeof Form<ProvidersFormNode>>[0]) {
  async function onFinish(values: ProvidersFormNode) {
    if (finish) await finish(values);
    window.location.href = '/providers';
  }
  return (
    <Form
      onFinish={onFinish}
      style={{ width: '100%' }}
      layout="inline"
      {...props}>
      <Form.Item
        hidden
        name={nameof<ProvidersFormNode>((x) => {
          return x.id;
        })}>
        <Input />
      </Form.Item>

      <Col>
        <Form.Item
          name={nameof<ProvidersFormNode>((x) => {
            return x.name;
          })}
          label="Name">
          <Input style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item
          name={nameof<ProvidersFormNode>((x) => {
            return x.document;
          })}
          label="Documento">
          <Input style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item
          name={nameof<ProvidersFormNode>((x) => {
            return x.email;
          })}
          label="E-mail"

          // rules={[{ required: true, type: 'regexp', pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g }]}
        >
          <Input style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item
          name={nameof<ProvidersFormNode>((x) => {
            return x.whatsapp;
          })}
          label="Whatsapp">
          <InputPhone style={{ width: '100%' }} />
        </Form.Item>
      </Col>
    </Form>
  );
}
