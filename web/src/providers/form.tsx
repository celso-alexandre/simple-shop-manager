import { Col, Form, Input } from 'antd';
import type { ProvidersFormNode } from '.';
import { InputPhone } from '../components/input-phone';

export function ProvidersForm({ onFinish: finish, ...props }: Parameters<typeof Form<ProvidersFormNode>>[0]) {
  // const navigate = useNavigate();
  async function onFinish(values: ProvidersFormNode) {
    if (finish) await finish(values);
    // navigate('/providers');
    window.location.href = '/providers';
  }
  return (
    <Form onFinish={onFinish} style={{ width: '100%' }} layout="inline" {...props}>
      <Form.Item hidden name={nameof<ProvidersFormNode>(x => x.id)}>
        <Input />
      </Form.Item>

      <Col>
        <Form.Item name={nameof<ProvidersFormNode>(x => x.name)} label="Name">
          <Input style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item name={nameof<ProvidersFormNode>(x => x.document)} label="Documento">
          <Input style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item
          name={nameof<ProvidersFormNode>(x => x.email)}
          label="E-mail"
         
          // rules={[{ required: true, type: 'regexp', pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g }]}
        >
          <Input style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item name={nameof<ProvidersFormNode>(x => x.whatsapp)} label="Whatsapp">
          <InputPhone style={{ width: '100%' }} />
        </Form.Item>
      </Col>
    </Form>
  );
}
