import type { DecodedValueMap } from 'use-query-params';
import { Col } from 'antd';
import dayjs from 'dayjs';
import {
  DateParam,
  NumberParam,
  QueryParamConfig,
  StringParam,
  withDefault,
} from 'use-query-params';
import { Filter } from '../components/filter';
import { Title } from '../components/title';
import {
  SaleQuery,
  SalesQuery,
  useSalesQuery,
} from '../graphql/__generated__/sales.gql.generated';
import { useQueryParamsWithDebounce } from '../helpers/use-query-params-with-debounce';
import { QueryMode, SortOrder } from '../types';
import { SalesTable } from './table';
import { tablePagination } from '../helpers/pagination';
import { formatMoneyFromInt, getPercentPretty } from '../helpers';
import { useSaleAggregateQuery } from '../graphql/__generated__/sale-aggregate.gql.generated';
import { CustomRangePicker } from '../components/range-picker';

export type SalesNode = SalesQuery['sales']['nodes'][0];
export type SaleItem = Pick<
  SaleQuery['sale']['saleItems']['nodes'][number],
  | 'productId'
  | 'providerId'
  | 'totalValue'
  | 'quantity'
  | 'totalCostValue'
  | 'costIsPostPaid'
  | 'netMarginPercent'
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
export function Sales() {
  const queryDefaults: DecodedValueMap<SalesQueryParams> = {
    take: 10,
    skip: 0,
    search: undefined,
    startDate: dayjs().startOf('month').toDate(),
    endDate: dayjs().endOf('month').toDate(),
  };
  const [query, , queryObj, setQueryDebounced] =
    useQueryParamsWithDebounce<SalesQueryParams>({
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
        date: { gte: startDate, lte: dayjs(endDate).endOf('day').toDate() },
        OR: !search
          ? undefined
          : [
              {
                saleItems: {
                  some: {
                    product: {
                      is: {
                        name: { contains: search, mode: QueryMode.Insensitive },
                      },
                    },
                  },
                },
              },
              {
                saleItems: {
                  some: {
                    product: {
                      is: {
                        brandName: {
                          contains: search,
                          mode: QueryMode.Insensitive,
                        },
                      },
                    },
                  },
                },
              },
            ],
      },
    },
  });

  const { data: dataAggregate } = useSaleAggregateQuery();
  const { data: dataAggregatePeriod } = useSaleAggregateQuery({
    variables: {
      where: {
        startDate,
        endDate: dayjs(endDate).endOf('day').toDate(),
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
            <label
              style={{ fontWeight: 'bold', display: 'block' }}
              htmlFor="dates">
              Período
            </label>

            <CustomRangePicker
              id="dates"
              style={{ marginTop: 10 }}
              value={[dayjs(startDate), dayjs(endDate)]}
              onChange={(dates) => {
                const [startDay, endDay] = dates ?? [];
                setQueryDebounced((prev) => {
                  return {
                    ...prev,
                    startDate: startDay ? dayjs(startDay).toDate() : undefined,
                    endDate: endDay ? dayjs(endDay).toDate() : undefined,
                  };
                });
              }}
            />
          </Col>,
        ]}
      />

      <div style={{ marginTop: 20 }}>
        <SalesTable
          size="small"
          loading={loading}
          dataSource={data?.sales.nodes}
          rowKey={'id' as any}
          {...tablePagination({
            pageSize: take,
            skip,
            totalPages: data?.sales.pageInfo?.total || 0,
            setPagination(newSkip, newTake) {
              setQueryDebounced((prev) => {
                return { ...prev, skip: newSkip, take: newTake };
              });
            },
          })}
        />
      </div>

      <div className="mt-4">
        {/* General Total */}
        <div className="relative rounded-lg border border-gray-300 p-4">
          <h3 className="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold text-gray-700">
            Total geral
          </h3>
          <div className="grid grid-cols-1 gap-x-28 sm:gap-x-12 lg:grid-cols-4">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Bruto</span>
              <span className="text-gray-900">
                {formatMoneyFromInt(dataAggregate?.totalSale?.totalValue)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Custo</span>
              <span className="text-gray-900">
                {formatMoneyFromInt(dataAggregate?.totalSale?.totalCostValue)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Líquido</span>
              <span className="text-gray-900">
                {formatMoneyFromInt(dataAggregate?.totalSale?.netValue)} (
                {getPercentPretty(
                  dataAggregate?.totalSale?.netValue,
                  dataAggregate?.totalSale?.totalValue
                )}
                )
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Vendas</span>
              <span className="text-gray-900">
                {dataAggregate?.totalSale?.count}
              </span>
            </div>
          </div>
        </div>

        {/* Selected Period Total */}
        {!!startDate && !!endDate && (
          <div className="relative mt-6 rounded-lg border border-gray-300 p-4">
            <h3 className="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold text-gray-700">
              Total período {dayjs(startDate).format('DD/MM/YYYY')} -{' '}
              {dayjs(endDate).format('DD/MM/YYYY')}
            </h3>
            <div className="grid grid-cols-1 gap-x-28 sm:gap-x-12 lg:grid-cols-4">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Bruto</span>
                <span className="text-gray-900">
                  {formatMoneyFromInt(
                    dataAggregatePeriod?.totalSale?.totalValue
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Custo</span>
                <span className="text-gray-900">
                  {formatMoneyFromInt(
                    dataAggregatePeriod?.totalSale?.totalCostValue
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Líquido</span>
                <span className="text-gray-900">
                  {formatMoneyFromInt(dataAggregatePeriod?.totalSale?.netValue)}{' '}
                  (
                  {getPercentPretty(
                    dataAggregatePeriod?.totalSale?.netValue,
                    dataAggregatePeriod?.totalSale?.totalValue
                  )}
                  )
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Vendas</span>
                <span className="text-gray-900">
                  {dataAggregatePeriod?.totalSale?.count}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
