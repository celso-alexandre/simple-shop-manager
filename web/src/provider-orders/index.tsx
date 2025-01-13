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
  ProviderOrderQuery,
  ProviderOrdersQuery,
  useProviderOrdersQuery,
} from '../graphql/__generated__/provider-orders.gql.generated';
import { useQueryParamsWithDebounce } from '../helpers/use-query-params-with-debounce';
import { QueryMode, SortOrder } from '../types';
import { ProviderOrdersTable } from './table';
import { tablePagination } from '../helpers/pagination';
import { CustomRangePicker } from '../components/range-picker';

export type ProviderOrdersNode =
  ProviderOrdersQuery['providerOrders']['nodes'][0];
export type ProviderOrderItem = Pick<
  ProviderOrderQuery['providerOrder']['providerOrderItems']['nodes'][number],
  'productId' | 'providerId' | 'totalValue' | 'quantity' | 'moveQty'
> & { id?: string };
export type ProviderOrdersFormNode = Pick<
  ProviderOrderQuery['providerOrder'],
  'date'
> & {
  id?: string;
  providerOrderItems: { nodes: ProviderOrderItem[] };
};
export type ProviderOrdersQueryParams = {
  take: QueryParamConfig<number>;
  skip: QueryParamConfig<number>;
  search: QueryParamConfig<string | null | undefined>;
  startDate: QueryParamConfig<Date>;
  endDate: QueryParamConfig<Date>;
};
export function ProviderOrders() {
  const queryDefaults: DecodedValueMap<ProviderOrdersQueryParams> = {
    take: 10,
    skip: 0,
    search: undefined,
    startDate: dayjs().startOf('month').toDate(),
    endDate: dayjs().endOf('month').toDate(),
  };
  const [query, , queryObj, setQueryDebounced] =
    useQueryParamsWithDebounce<ProviderOrdersQueryParams>({
      take: withDefault(NumberParam, queryDefaults.take),
      skip: withDefault(NumberParam, queryDefaults.skip),
      search: StringParam,
      startDate: withDefault(DateParam, queryDefaults.startDate),
      endDate: withDefault(DateParam, queryDefaults.endDate),
    });
  const { skip, take, search, startDate, endDate } = query;
  const { data, loading, refetch } = useProviderOrdersQuery({
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
                providerOrderItems: {
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
                providerOrderItems: {
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

  return (
    <div style={{ margin: '0 25px 0 0' }}>
      <Title title="Compras" />

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
        <ProviderOrdersTable
          size="small"
          loading={loading}
          dataSource={data?.providerOrders.nodes}
          rowKey={'id' as any}
          {...tablePagination({
            pageSize: take,
            skip,
            totalPages: data?.providerOrders.pageInfo?.total || 0,
            setPagination(newSkip, newTake) {
              setQueryDebounced((prev) => {
                return { ...prev, skip: newSkip, take: newTake };
              });
            },
          })}
        />
      </div>
    </div>
  );
}
