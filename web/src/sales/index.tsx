import type { DecodedValueMap } from 'use-query-params';
import { Col, DatePicker } from 'antd';
import dayjs from 'dayjs';
import { DateParam, NumberParam, QueryParamConfig, StringParam, withDefault } from 'use-query-params';
import { Filter } from '../components/filter';
import { Title } from '../components/title';
import { SaleQuery, SalesQuery, useSalesQuery } from '../graphql/__generated__/sales.gql.generated';
import { useQueryParamsWithDebounce } from '../helpers/use-query-params-with-debounce';
import { QueryMode, SortOrder } from '../types';
import { SalesTable } from './table';
import { tablePagination } from '../helpers/pagination';

export type SalesNode = SalesQuery['sales']['nodes'][0];
export type SaleItem = Pick<
  SaleQuery['sale']['saleItems']['nodes'][number],
  'productId' | 'providerId' | 'totalValue' | 'quantity' | 'totalCostValue' | 'costIsPostPaid' | 'netMarginPercent'
> & { id?: string };
export type SalesFormNode = Pick<SaleQuery['sale'], 'date'> & {
  id?: string;
  saleItems: { nodes: SaleItem[] };
};
export type SalesQueryParams = {
  take: QueryParamConfig<number>;
  skip: QueryParamConfig<number>;
  search: QueryParamConfig<string | null | undefined>;
  startDate: QueryParamConfig<Date>;
  endDate: QueryParamConfig<Date>;
};
const { RangePicker } = DatePicker;
export function Sales() {
  const queryDefaults: DecodedValueMap<SalesQueryParams> = {
    take: 10,
    skip: 0,
    search: undefined,
    startDate: dayjs().startOf('month').toDate(),
    endDate: dayjs().endOf('month').toDate(),
  };
  const [query, , queryObj, setQueryDebounced] = useQueryParamsWithDebounce<SalesQueryParams>({
    take: withDefault(NumberParam, queryDefaults.take),
    skip: withDefault(NumberParam, queryDefaults.skip),
    search: StringParam,
    startDate: withDefault(DateParam, queryDefaults.startDate),
    endDate: withDefault(DateParam, queryDefaults.endDate),
  });
  const { skip, take, search, startDate, endDate } = query;
  const { data, loading, refetch } = useSalesQuery({
    variables: {
      take,
      skip,
      orderBy: { id: SortOrder.Desc },
      where: {
        date: { gte: startDate, lte: endDate },
        OR: !search
          ? undefined
          : [
              { saleItems: { some: { product: { is: { name: { contains: search, mode: QueryMode.Insensitive } } } } } },
              {
                saleItems: {
                  some: { product: { is: { brandName: { contains: search, mode: QueryMode.Insensitive } } } },
                },
              },
            ],
      },
    },
  });

  return (
    <div style={{ margin: '0 25px 0 0' }}>
      <Title title="Vendas" />

      <Filter
        query={queryObj}
        setQuery={setQueryDebounced}
        refetch={refetch}
        loading={loading}
        extraAfter={[
          <Col key={-1}>
            <label style={{ fontWeight: 'bold', display: 'block' }} htmlFor="dates">
              Período
            </label>

            <RangePicker
              id="dates"
              format="DD/MM/YYYY"
              style={{ marginTop: 10 }}
              allowClear
              value={[dayjs(startDate), dayjs(endDate)]}
              onChange={dates => {
                const [startDay, endDay] = dates ?? [];
                setQueryDebounced(prev => ({
                  ...prev,
                  startDate: startDay ? dayjs(startDay).toDate() : undefined,
                  endDate: endDay ? dayjs(endDay).toDate() : undefined,
                }));
              }}
            />
          </Col>,
        ]}
      />

      <div style={{ marginTop: 20 }}>
        <SalesTable
          loading={loading}
          dataSource={data?.sales.nodes}
          {...tablePagination({
            pageSize: take,
            skip,
            totalPages: data?.sales.pageInfo?.total || 0,
            setPagination(newSkip, newTake) {
              setQueryDebounced(prev => ({ ...prev, skip: newSkip, take: newTake }));
            },
          })}
        />
      </div>
    </div>
  );
}
