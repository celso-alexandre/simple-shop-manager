import { Skeleton } from 'antd';
import { Title } from '../components/title';
import {
  ProvidersQuery,
  useProvidersQuery,
} from '../graphql/__generated__/providers.gql.generated';
import { SortOrder } from '../types';
import { ProvidersTable } from './table';

export type ProvidersNode = Omit<
  ProvidersQuery['providers']['nodes'][0],
  'id'
> & { id?: string };
export type ProvidersFormNode = Pick<
  ProvidersNode,
  'id' | 'name' | 'email' | 'document' | 'whatsapp'
>;
export function Providers() {
  const { data, loading } = useProvidersQuery({
    variables: {
      orderBy: { id: SortOrder.Desc },
    },
  });

  if (loading) return <Skeleton />;

  return (
    <>
      <Title title="Fornecedores" />

      <div style={{ padding: '0px 30px' }}>
        <ProvidersTable dataSource={data?.providers.nodes} />
      </div>
    </>
  );
}
