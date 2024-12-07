import { SelectProps } from 'antd';
import { DecodedValueMap, QueryParamConfig, SetQuery } from 'use-query-params';
import type { CSSProperties, FC } from 'react';
import { useProductsSelectQuery } from '../graphql/__generated__/products.gql.generated';
import type { ProductsSelectQuery } from '../graphql/__generated__/products.gql.generated';
import { SelectDropdown } from './select.component';
import { QueryMode } from '../types';
import { useDebounce } from '../hooks/useDebounce';

type queryFields = {
  productId: QueryParamConfig<number>;
  productDesc: QueryParamConfig<string>;
};

type ProductAsyncSelectProps = SelectProps<any> & {
  setQuery?: SetQuery<queryFields>;
  query?: Partial<DecodedValueMap<queryFields>>;
  style?: CSSProperties;
};

export const ProductAsyncSelect: FC<ProductAsyncSelectProps> = ({ setQuery, query, style, ...props }) => {
  const [searchTerm, setSearchTerm, debouncedSearchTerm] = useDebounce('');
  const { data, loading, fetchMore, refetch } = useProductsSelectQuery({
    variables: {
      where: !debouncedSearchTerm
        ? undefined
        : {
          OR: [
            { name: { contains: debouncedSearchTerm, mode: QueryMode.Insensitive } },
            { brandName: { contains: debouncedSearchTerm, mode: QueryMode.Insensitive } },
          ],
        },
    },
  });

  return (
    <div style={style}>
      <SelectDropdown<ProductsSelectQuery, 'products'>
        autoClearSearchValue={false}
        mapData={({ value, label, label2 }) => {
          return { label: `${label} ${label2 ?? ''}`, value };
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
              productId: undefined,
              productDesc: undefined,
              skip: 0,
            };
          });
        }}
        value={query?.productDesc}
        entityName="products"
        placeholder="Selecione o Produto..."
        onChange={(value, option) => {
          if (!setQuery) return;
          const { label } = option as unknown as { label: string };
          setQuery((prev) => {
            return {
              ...prev,
              productId: value,
              productDesc: label,
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
