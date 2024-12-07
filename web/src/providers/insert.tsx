import { Button, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { ProvidersFormNode } from '.';
import { Title } from '../components/title';
import {
  useCreateProviderMutation,
  ProvidersDocument,
  ProviderDocument,
  ProvidersSelectDocument,
} from '../graphql/__generated__/providers.gql.generated';
import { ProvidersForm } from './form';

async function onSubmit(
  { whatsapp, ...data }: ProvidersFormNode,
  create: ReturnType<typeof useCreateProviderMutation>[0],
) {
  await create({
    refetchQueries: [ProviderDocument, ProvidersDocument, ProvidersSelectDocument],
    variables: {
      data: {
        ...data,
        whatsapp: !whatsapp || whatsapp === '+55 (__) _____-____' ? undefined : whatsapp,
      },
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

      <ProvidersForm
        form={form}
        onFinish={async (values) => {
          await form.validateFields();
          await onSubmit(values, create);
        }}
      />

      <Row style={{ marginTop: '20px' }}>
        <Button
          size="large"
          type="primary"
          onClick={() => {
            form.submit();
          }}>
          Salvar
        </Button>
      </Row>
    </>
  );
}
