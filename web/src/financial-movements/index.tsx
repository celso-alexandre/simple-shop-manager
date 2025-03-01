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
  FinancialMovementQuery,
  FinancialMovementsQuery,
  useFinancialMovementsQuery,
} from '../graphql/__generated__/financial-movements.gql.generated';
import { useFinancialMovementAggregateQuery } from '../graphql/__generated__/financial-movement-aggregate.gql.generated';
import { useQueryParamsWithDebounce } from '../helpers/use-query-params-with-debounce';
import { SortOrder } from '../types';
import { FinancialMovementsTable } from './table';
import { tablePagination } from '../helpers/pagination';
import { CustomRangePicker } from '../components/range-picker';
import { FinancialMovementsFooter } from './common/footer';

export type FinancialMovementsNode =
  FinancialMovementsQuery['financialMovements']['nodes'][0];
export type FinancialMovementsFormNode = Pick<
  FinancialMovementQuery['financialMovement'],
  'date' | 'value' | 'description'
> & {
  id?: string;
  kind: 'credit' | 'debit';
};
export type FinancialMovementsQueryParams = {
  take: QueryParamConfig<number>;
  skip: QueryParamConfig<number>;
  search: QueryParamConfig<string | null | undefined>;
  startDate: QueryParamConfig<Date>;
  endDate: QueryParamConfig<Date>;
};
export function FinancialMovements() {
  const queryDefaults: DecodedValueMap<FinancialMovementsQueryParams> = {
    take: 10,
    skip: 0,
    search: undefined,
    startDate: dayjs().startOf('month').toDate(),
    endDate: dayjs().endOf('month').toDate(),
  };
  const [query, , queryObj, setQueryDebounced] =
    useQueryParamsWithDebounce<FinancialMovementsQueryParams>({
      take: withDefault(NumberParam, queryDefaults.take),
      skip: withDefault(NumberParam, queryDefaults.skip),
      search: StringParam,
      startDate: withDefault(DateParam, queryDefaults.startDate),
      endDate: withDefault(DateParam, queryDefaults.endDate),
    });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { skip, take, search, startDate, endDate } = query;
  const { data, loading, refetch } = useFinancialMovementsQuery({
    variables: {
      take,
      skip,
      orderBy: { id: SortOrder.Desc },
      where: {
        date: { gte: startDate, lte: dayjs(endDate).endOf('day').toDate() },
      },
    },
  });

  const { data: dataAggregate } = useFinancialMovementAggregateQuery();

  return (
    <div style={{ margin: '0 25px 0 0' }}>
      <Title title="Movimentação Financeira" />

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
        <FinancialMovementsTable
          size="small"
          loading={loading}
          dataSource={data?.financialMovements.nodes}
          rowKey={'id' as any}
          {...tablePagination({
            pageSize: take,
            skip,
            totalPages: data?.financialMovements.pageInfo?.total || 0,
            setPagination(newSkip, newTake) {
              setQueryDebounced((prev) => {
                return { ...prev, skip: newSkip, take: newTake };
              });
            },
          })}
        />
      </div>

      <FinancialMovementsFooter
        value={dataAggregate?.financialMovementAggregate?.value}
      />
    </div>
  );
}
