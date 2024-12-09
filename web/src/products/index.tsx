import { Col } from 'antd';
import { BooleanParam, QueryParamConfig, StringParam } from 'use-query-params';
import { Filter } from '../components/filter';
import { Title } from '../components/title';
import {
  ProductsQuery,
  useProductsQuery,
} from '../graphql/__generated__/products.gql.generated';
import { useQueryParamsWithDebounce } from '../helpers/use-query-params-with-debounce';
import { SortOrder, QueryMode } from '../types';
import { ProductsTable } from './table';
import { useProductAggregateQuery } from '../graphql/__generated__/product-aggregate.gql.generated';
import { formatMoneyFromInt } from '../helpers';
import { SelectBoolean } from '../components/select-boolean';

export type ProductsNode = Omit<ProductsQuery['products']['nodes'][0], 'id'> & {
  id?: string;
};
export type ProductsFormNode = Pick<
  ProductsNode,
  | 'id'
  | 'name'
  | 'brandName'
  | 'priceValue'
  | 'isPostPaid'
  | 'costValue'
  | 'providerId'
  | 'controlsQty'
  | 'qty'
>;
export type ProductsQueryParams = {
  search: QueryParamConfig<string | null | undefined>;
  controlsQty: QueryParamConfig<boolean | null | undefined>;
};
export function Products() {
  const [query, setQuery, queryObj, setQueryDebounced] =
    useQueryParamsWithDebounce<ProductsQueryParams>({
      search: StringParam,
      controlsQty: BooleanParam,
    });
  const { search, controlsQty } = query;
  const { data, loading, refetch } = useProductsQuery({
    variables: {
      orderBy: { id: SortOrder.Desc },
      where: {
        controlsQty:
          typeof controlsQty !== 'boolean'
            ? undefined
            : { equals: controlsQty },
        OR: !search
          ? undefined
          : [
              { name: { contains: search, mode: QueryMode.Insensitive } },
              { brandName: { contains: search, mode: QueryMode.Insensitive } },
              {
                provider: {
                  is: {
                    name: { contains: search, mode: QueryMode.Insensitive },
                  },
                },
              },
            ],
      },
    },
  });

  const { data: dataAggregate } = useProductAggregateQuery();

  return (
    <>
      <Title title="Produtos" />

      <div style={{ padding: '0px 30px' }}>
        <Filter
          query={queryObj}
          setQuery={setQueryDebounced}
          refetch={refetch}
          loading={loading}
          extraAfter={[
            <SelectBoolean
              key="controlsQty"
              title="Controla Qtde?"
              value={query.controlsQty ?? undefined}
              onChange={(value) => {
                setQuery((prev) => {
                  return { ...prev, controlsQty: value ?? undefined };
                });
              }}
            />,
          ]}
        />

        <Col span={24} style={{ height: 20 }} />

        <ProductsTable loading={loading} dataSource={data?.products.nodes} />

        <div className="mt-4 grid grid-cols-1 gap-x-28 sm:gap-x-12 lg:grid-cols-5">
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Bruto</span>
            <span className="text-gray-900">
              {formatMoneyFromInt(dataAggregate?.productAggregate?.priceValue)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Custo</span>
            <span className="text-gray-900">
              {formatMoneyFromInt(dataAggregate?.productAggregate?.costValue)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Líquido</span>
            <span className="text-gray-900">
              {formatMoneyFromInt(dataAggregate?.productAggregate?.netValue)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Quantidade</span>
            <span className="text-gray-900">
              {dataAggregate?.productAggregate?.qty}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Cadastros</span>
            <span className="text-gray-900">
              {dataAggregate?.productAggregate?.count}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
