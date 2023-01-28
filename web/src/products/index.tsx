import { Col } from 'antd';
import { QueryParamConfig, StringParam } from 'use-query-params';
import { Filter } from '../components/filter';
import { Title } from '../components/title';
import { ProductsQuery, useProductsQuery } from '../graphql/__generated__/products.gql.generated';
import { useQueryParamsWithDebounce } from '../helpers/use-query-params-with-debounce';
import { SortOrder, QueryMode } from '../types';
import { ProductsTable } from './table';

export type ProductsNode = Omit<ProductsQuery['products']['nodes'][0], 'id'> & { id?: string };
export type ProductsFormNode = Pick<
  ProductsNode,
  'id' | 'name' | 'brandName' | 'priceValue' | 'isPostPaid' | 'costValue' | 'providerId'
>;
export type ProductsQueryParams = {
  search: QueryParamConfig<string | null | undefined>;
};
export function Products() {
  const [query, , queryObj, setQueryDebounced] = useQueryParamsWithDebounce<ProductsQueryParams>({
    search: StringParam,
  });
  const { search } = query;
  const { data, loading, refetch } = useProductsQuery({
    variables: {
      orderBy: { id: SortOrder.Desc },
      where: {
        OR: !search
          ? undefined
          : [
              { name: { contains: search, mode: QueryMode.Insensitive } },
              { brandName: { contains: search, mode: QueryMode.Insensitive } },
              { provider: { is: { name: { contains: search, mode: QueryMode.Insensitive } } } },
            ],
      },
    },
  });

  return (
    <>
      <Title title="Produtos" />

      <div style={{ padding: '0px 30px' }}>
        <Filter query={queryObj} setQuery={setQueryDebounced} refetch={refetch} loading={loading} />

        <Col span={24} style={{ height: 20 }} />

        <ProductsTable loading={loading} dataSource={data?.products.nodes} />
      </div>
    </>
  );
}
