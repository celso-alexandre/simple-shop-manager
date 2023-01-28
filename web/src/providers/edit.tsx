import { Button, Col, Row, Skeleton, Typography } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { Link, useParams } from 'react-router-dom';
import type { ProvidersFormNode } from '.';
import { Title } from '../components/title';
import {
  useUpdateProviderMutation,
  ProvidersDocument,
  useProviderQuery,
  ProviderDocument,
} from '../graphql/__generated__/providers.gql.generated';
import { objectPropertiesSet } from '../helpers';
import { ProvidersForm } from './form';

async function onSubmit(
  { id, whatsapp, ...data }: ProvidersFormNode,
  update: ReturnType<typeof useUpdateProviderMutation>[0]
) {
  let wpp = { set: whatsapp };
  if (!whatsapp || whatsapp === '+55 (__) _____-____') wpp = undefined as any;
  await update({
    refetchQueries: [ProviderDocument, ProvidersDocument],
    variables: {
      where: { id },
      data: {
        ...objectPropertiesSet(data),
        whatsapp: wpp,
      },
    },
  });
}

export function ProviderEdit() {
  const { id } = useParams();
  const [form] = useForm<ProvidersFormNode>();
  const [update] = useUpdateProviderMutation({
    refetchQueries: [ProvidersDocument],
  });
  const { data, loading } = useProviderQuery({
    variables: {
      where: { id },
    },
  });

  if (loading) return <Skeleton />;

  return (
    <>
      <Title title={data?.provider?.name ?? 'Fornecedor não encontrado'} />

      <ProvidersForm
        initialValues={data?.provider}
        form={form}
        onFinish={async values => {
          await onSubmit(values, update);
        }}
      />

      <Row style={{ marginTop: '20px' }}>
        <Button size="large" type="primary" onClick={() => form.submit()}>
          Salvar
        </Button>
      </Row>

      {!!data?.provider?.products?.nodes?.length && (
        <Row>
          <Typography.Title level={3}>Produtos Fornecidos</Typography.Title>
          <Col span={24}>
            <Typography.Paragraph>
              {data?.provider?.products?.nodes?.map(node => (
                <Link style={{ marginRight: 10 }} key={node.id} to={`/product/${node.id}`}>
                  {node.name}
                </Link>
              ))}
            </Typography.Paragraph>
          </Col>
        </Row>
      )}
    </>
  );
}
