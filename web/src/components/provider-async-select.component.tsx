import React from 'react';
import { SelectProps } from 'antd';
import { DecodedValueMap, QueryParamConfig, SetQuery } from 'use-query-params';
import { useProvidersSelectQuery } from '../graphql/__generated__/providers.gql.generated';
import type { ProvidersSelectQuery } from '../graphql/__generated__/providers.gql.generated';
import { SelectDropdown } from './select.component';
import { QueryMode } from '../types';

type queryFields = {
  providerId: QueryParamConfig<number>;
  providerDesc: QueryParamConfig<string>;
};

type ProviderAsyncSelectProps = SelectProps<any> & {
  setQuery?: SetQuery<queryFields>;
  query?: Partial<DecodedValueMap<queryFields>>;
  style?: React.CSSProperties;
  searchTerm?: string;
};

export const ProviderAsyncSelect: React.FC<ProviderAsyncSelectProps> = ({
  setQuery,
  query,
  style,
  searchTerm,
  ...props
}) => {
  const { data, loading, fetchMore, refetch } = useProvidersSelectQuery({
    variables: {
      where: !searchTerm
        ? undefined
        : {
            OR: [
              { name: { contains: searchTerm, mode: QueryMode.Insensitive } },
              { document: { contains: searchTerm, mode: QueryMode.Insensitive } },
              { email: { contains: searchTerm, mode: QueryMode.Insensitive } },
              { whatsapp: { contains: searchTerm, mode: QueryMode.Insensitive } },
            ],
          },
    },
  });

  return (
    <div style={style}>
      <SelectDropdown<ProvidersSelectQuery, 'providers'>
        autoClearSearchValue={false}
        mapData={({ value, label }) => ({ label, value })}
        data={data}
        refetch={refetch}
        fetchMore={fetchMore}
        allowClear
        showSearch
        onClear={() => {
          if (!setQuery) return;
          setQuery(prev => ({
            ...prev,
            providerId: undefined,
            providerDesc: undefined,
            skip: 0,
          }));
        }}
        value={query?.providerDesc}
        entityName="providers"
        placeholder="Selecione o Fornecedor..."
        onChange={(value, option) => {
          if (!setQuery) return;
          const { label } = option as unknown as { label: string };
          setQuery(prev => ({
            ...prev,
            providerId: value,
            providerDesc: label,
            skip: 0,
          }));
        }}
        loading={loading}
        filterOption={false}
        style={style}
        {...props}
      />
    </div>
  );
};
