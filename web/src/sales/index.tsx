import { Skeleton } from 'antd';
import { Title } from '../components/title';
import { SaleQuery, SalesQuery, useSalesQuery } from '../graphql/__generated__/sales.gql.generated';
import { SortOrder } from '../types';
import { SalesTable } from './table';

export type SalesNode = SalesQuery['sales']['nodes'][0];
export type SalesFormNode = Pick<SaleQuery['sale'], 'id' | 'date' | 'saleItems'>;
export function Sales() {
  const { data, loading } = useSalesQuery({
    variables: {
      orderBy: { id: SortOrder.Desc },
    },
  });

  if (loading) return <Skeleton />;

  return (
    <>
      <Title title="Vendas" />

      <div style={{ padding: '0px 30px' }}>Filter here</div>

      <div style={{ padding: '0px 30px' }}>
        <SalesTable dataSource={data?.sales.nodes} />
      </div>
    </>
  );
}
