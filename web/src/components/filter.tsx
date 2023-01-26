import { Col, Input } from 'antd';
import type { ChangeEvent } from 'react';
import { IoMdSearch } from 'react-icons/io';
import type { DecodedValueMap } from 'use-query-params';
import type { SetDebouncedQuery } from '../helpers/use-query-params-with-debounce';
import type { ProductsQueryParams } from '../products';
import { ListFilterLayout } from './filter-layout';
import { RefetchButton } from './refetch-button.component';

type Props = {
  query: Partial<DecodedValueMap<ProductsQueryParams>>;
  setQuery: SetDebouncedQuery<ProductsQueryParams>;
  refetch: () => void;
  loading: boolean;
  extra?: JSX.Element[];
};
export function Filter({ query, setQuery, refetch, loading, extra }: Props) {
  return (
    <ListFilterLayout
      clearQuery={() => setQuery({}, 'push')}
      content={[
        <Col flex={6} key={1}>
          <label style={{ fontWeight: 'bold' }} htmlFor="search">
            O que está procurando hoje?
          </label>

          <Input
            style={{ marginTop: 10 }}
            allowClear
            placeholder="Digite aqui o ID ou nome para filtrar os resultados..."
            prefix={<IoMdSearch />}
            onChange={(input: ChangeEvent<HTMLInputElement>) => {
              const { value } = input.target;
              setQuery(prev => ({ ...prev, search: value, skip: 0 }));
            }}
            value={query.search ?? ''}
          />
        </Col>,
        <Col key={0}>
          <RefetchButton isLoading={loading} setRefetch={refetch} />
        </Col>,
        ...(extra ?? []),
      ]}
    />
  );
}
