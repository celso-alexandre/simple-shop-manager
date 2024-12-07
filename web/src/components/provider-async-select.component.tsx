import { SelectProps } from 'antd';
import { DecodedValueMap, QueryParamConfig, SetQuery } from 'use-query-params';
import type { CSSProperties, FC } from 'react';
import { useProvidersSelectQuery } from '../graphql/__generated__/providers.gql.generated';
import type { ProvidersSelectQuery } from '../graphql/__generated__/providers.gql.generated';
import { SelectDropdown } from './select.component';
import { QueryMode } from '../types';
import { useDebounce } from '../hooks/useDebounce';

type queryFields = {
  providerId: QueryParamConfig<number>;
  providerDesc: QueryParamConfig<string>;
};

type ProviderAsyncSelectProps = SelectProps<any> & {
  setQuery?: SetQuery<queryFields>;
  query?: Partial<DecodedValueMap<queryFields>>;
  style?: CSSProperties;
};

export const ProviderAsyncSelect: FC<ProviderAsyncSelectProps> = ({ setQuery, query, style, ...props }) => {
  const [searchTerm, setSearchTerm, debouncedSearchTerm] = useDebounce('');
  const { data, loading, fetchMore, refetch } = useProvidersSelectQuery({
    variables: {
      where: !debouncedSearchTerm
        ? undefined
        : {
          OR: [
            { name: { contains: debouncedSearchTerm, mode: QueryMode.Insensitive } },
            { document: { contains: debouncedSearchTerm, mode: QueryMode.Insensitive } },
            { email: { contains: debouncedSearchTerm, mode: QueryMode.Insensitive } },
            { whatsapp: { contains: debouncedSearchTerm, mode: QueryMode.Insensitive } },
          ],
        },
    },
  });

  return (
    <div style={style}>
      <SelectDropdown<ProvidersSelectQuery, 'providers'>
        autoClearSearchValue={false}
        mapData={({ value, label }) => {
          return { label, value };
        }}
        data={data}
        refetch={refetch}
        fetchMore={fetchMore}
        allowClear
        showSearch
        searchValue={searchTerm}
        onSearch={(term) => {
          setSearchTerm(term);
        }}
        onClear={() => {
          setSearchTerm('');
          if (!setQuery) return;
          setQuery((prev) => {
            return {
              ...prev,
              providerId: undefined,
              providerDesc: undefined,
              skip: 0,
            };
          });
        }}
        value={query?.providerDesc}
        entityName="providers"
        placeholder="Selecione o Fornecedor..."
        onChange={(value, option) => {
          if (!setQuery) return;
          const { label } = option as unknown as { label: string };
          setQuery((prev) => {
            return {
              ...prev,
              providerId: value,
              providerDesc: label,
              skip: 0,
            };
          });
        }}
        loading={loading}
        filterOption={false}
        style={style}
        {...props}
      />
    </div>
  );
};
