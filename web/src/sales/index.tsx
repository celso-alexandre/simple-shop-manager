import { Title } from '../components/title';
import { SalesQuery, useSalesQuery } from '../graphql/__generated__/sales.gql.generated';
import { SortOrder } from '../types';
import { SalesTable } from './table';

export type SalesNode = SalesQuery['sales'][0];
export function Sales() {
  const { data, loading } = useSalesQuery({
    variables: {
      orderBy: { id: SortOrder.Desc },
      where: {
        priceValue: { gt: 10 },
      },
    },
  });

  return (
    <>
      <Title title="Vendas" />

      <div style={{ padding: '0px 30px' }}>Filter here</div>

      <div style={{ padding: '0px 30px' }}>
        <SalesTable />
      </div>
    </>
  );
}
