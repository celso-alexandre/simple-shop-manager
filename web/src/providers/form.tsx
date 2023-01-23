import { Col, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import type { ProvidersFormNode } from '.';

export function ProvidersForm({ onFinish: finish, ...props }: Parameters<typeof Form<ProvidersFormNode>>[0]) {
  const navigate = useNavigate();
  async function onFinish(values: ProvidersFormNode) {
    if (finish) await finish(values);
    navigate('/providers');
  }
  return (
    <Form onFinish={onFinish} style={{ width: '100%' }} layout="inline" {...props}>
      <Form.Item hidden name={nameof<ProvidersFormNode>(x => x.id)}>
        <Input />
      </Form.Item>

      <Col>
        <Form.Item name={nameof<ProvidersFormNode>(x => x.name)} label="Name" labelCol={{ span: 24 }}>
          <Input style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item name={nameof<ProvidersFormNode>(x => x.document)} label="Documento" labelCol={{ span: 24 }}>
          <Input style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item name={nameof<ProvidersFormNode>(x => x.email)} label="E-mail" labelCol={{ span: 24 }}>
          <Input style={{ width: '100%' }} />
        </Form.Item>
      </Col>

      <Col>
        <Form.Item name={nameof<ProvidersFormNode>(x => x.whatsapp)} label="Whatsapp" labelCol={{ span: 24 }}>
          <Input style={{ width: '100%' }} />
        </Form.Item>
      </Col>
    </Form>
  );
}
