import { Button, Col, Form, Input, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { ProvidersFormNode } from '.';
import { Title } from '../components/title';
import { useCreateProviderMutation, ProvidersDocument } from '../graphql/__generated__/providers.gql.generated';

async function onSubmit(data: ProvidersFormNode, create: ReturnType<typeof useCreateProviderMutation>[0]) {
  await create({
    variables: {
      data,
    },
  });
}

export function ProviderInsert() {
  const [form] = useForm<ProvidersFormNode>();
  const [create] = useCreateProviderMutation({
    refetchQueries: [ProvidersDocument],
  });

  return (
    <>
      <Title title="Novo Fornecedor" />

      <Form form={form} onFinish={values => onSubmit(values, create)} style={{ width: '100%' }} layout="inline">
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

      <Row style={{ marginTop: '20px' }}>
        <Button size="large" type="primary" onClick={() => form.submit()}>
          Salvar
        </Button>
      </Row>
    </>
  );
}
