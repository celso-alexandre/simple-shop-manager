import { Skeleton } from 'antd';
import { Title } from '../components/title';
import { ProvidersQuery, useProvidersQuery } from '../graphql/__generated__/providers.gql.generated';
import { SortOrder } from '../types';
import { ProvidersTable } from './table';

export type ProvidersNode = ProvidersQuery['providers']['nodes'][0];
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

      <div style={{ padding: '0px 30px' }}>Filter here</div>

      <div style={{ padding: '0px 30px' }}>
        <ProvidersTable dataSource={data?.providers.nodes} />
      </div>
    </>
  );
}
