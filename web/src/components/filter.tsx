import { Col, Input } from 'antd';
import type { ChangeEvent, JSX } from 'react';
import { IoMdSearch } from 'react-icons/io';
import type { DecodedValueMap, QueryParamConfig } from 'use-query-params';
import type { SetDebouncedQuery } from '../helpers/use-query-params-with-debounce';
import { ListFilterLayout } from './filter-layout';
import { RefetchButton } from './refetch-button.component';

type Query = {
  search: QueryParamConfig<string | null | undefined>;
};
type Props = {
  query: Partial<DecodedValueMap<Query>>;
  setQuery: SetDebouncedQuery<Query>;
  refetch: () => void;
  loading: boolean;
  extraBefore?: JSX.Element[];
  extraAfter?: JSX.Element[];
};
export function Filter({
  query,
  setQuery,
  refetch,
  loading,
  extraBefore,
  extraAfter,
}: Props) {
  return (
    <ListFilterLayout
      clearQuery={() => {
        setQuery({}, 'push');
      }}
      content={[
        ...(extraBefore ?? []),
        <Col flex={6} key={1}>
          <label style={{ fontWeight: 'bold' }} htmlFor="search">
            O que está procurando hoje?
          </label>

          <Input
            id="search"
            style={{ marginTop: 10 }}
            allowClear
            placeholder="Comece a pesquisar aqui..."
            prefix={<IoMdSearch />}
            onChange={(input: ChangeEvent<HTMLInputElement>) => {
              const { value } = input.target;
              setQuery((prev) => {
                return { ...prev, search: value, skip: 0 };
              });
            }}
            value={query.search ?? ''}
          />
        </Col>,
        ...(extraAfter ?? []),
        <Col key={0}>
          <RefetchButton isLoading={loading} setRefetch={refetch} />
        </Col>,
      ]}
    />
  );
}
