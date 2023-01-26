import { Col, Skeleton } from 'antd';
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
  // take: QueryParamConfig<number>;
  // skip: QueryParamConfig<number>;
  search: QueryParamConfig<string | null | undefined>;
};
export function Products() {
  const [query, , queryObj, setQueryDebounced] = useQueryParamsWithDebounce<ProductsQueryParams>({
    // take: withDefault(NumberParam, 10),
    // skip: withDefault(NumberParam, 0),
    search: StringParam,
  });
  const { data, loading, refetch } = useProductsQuery({
    variables: {
      orderBy: { id: SortOrder.Desc },
      where: {
        name: { contains: query.search, mode: QueryMode.Insensitive },
      },
    },
  });

  return (
    <>
      <Title title="Produtos" />

      <div style={{ padding: '0px 30px' }}>
        <Filter query={queryObj} setQuery={setQueryDebounced} refetch={refetch} loading={loading} />

        <Col span={24} style={{ height: 20 }} />

        {loading ? <Skeleton /> : <ProductsTable dataSource={data?.products.nodes} />}
      </div>
    </>
  );
}
