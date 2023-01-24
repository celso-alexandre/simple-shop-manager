import React from 'react';
import { SelectProps } from 'antd';
import { DecodedValueMap, QueryParamConfig, SetQuery } from 'use-query-params';
import { useProductsSelectQuery } from '../graphql/__generated__/products.gql.generated';
import type { ProductsSelectQuery } from '../graphql/__generated__/products.gql.generated';
import { SelectDropdown } from './select.component';
import { QueryMode } from '../types';

type queryFields = {
  productId: QueryParamConfig<number>;
  productDesc: QueryParamConfig<string>;
};

type ProductAsyncSelectProps = SelectProps<any> & {
  setQuery?: SetQuery<queryFields>;
  query?: Partial<DecodedValueMap<queryFields>>;
  style?: React.CSSProperties;
  searchTerm?: string;
};

export const ProductAsyncSelect: React.FC<ProductAsyncSelectProps> = ({
  setQuery,
  query,
  style,
  searchTerm,
  ...props
}) => {
  const { data, loading, fetchMore, refetch } = useProductsSelectQuery({
    variables: {
      where: !searchTerm
        ? undefined
        : {
            OR: [
              { name: { contains: searchTerm, mode: QueryMode.Insensitive } },
              { brandName: { contains: searchTerm, mode: QueryMode.Insensitive } },
            ],
          },
    },
  });

  return (
    <div style={style}>
      <SelectDropdown<ProductsSelectQuery, 'products'>
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
            productId: undefined,
            productDesc: undefined,
            skip: 0,
          }));
        }}
        value={query?.productDesc}
        entityName="products"
        placeholder="Selecione o Produto..."
        onChange={(value, option) => {
          if (!setQuery) return;
          const { label } = option as unknown as { label: string };
          setQuery(prev => ({
            ...prev,
            productId: value,
            productDesc: label,
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
