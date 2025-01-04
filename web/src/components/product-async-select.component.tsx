import { Button, SelectProps, Tooltip } from 'antd';
import { DecodedValueMap, QueryParamConfig, SetQuery } from 'use-query-params';
import { useMemo, type CSSProperties, type FC } from 'react';
import {
  ProductsDocument,
  ProductsSelectDocument,
  useCreateProductMutation,
  useProductsSelectQuery,
} from '../graphql/__generated__/products.gql.generated';
import type { ProductsSelectQuery } from '../graphql/__generated__/products.gql.generated';
import { SelectDropdown } from './select.component';
import { ProductWhereInput, QueryMode } from '../types';
import { useDebounce } from '../hooks/useDebounce';
import { BiLink, BiRefresh } from 'react-icons/bi';

type queryFields = {
  productId: QueryParamConfig<number>;
  productDesc: QueryParamConfig<string>;
};

type ProductAsyncSelectProps = SelectProps<any> & {
  setQuery?: SetQuery<queryFields>;
  query?: Partial<DecodedValueMap<queryFields>>;
  style?: CSSProperties;
  notInProductIds?: string[];
};

export const ProductAsyncSelect: FC<ProductAsyncSelectProps> = ({
  setQuery,
  query,
  style,
  notInProductIds,
  onChange,
  ...props
}) => {
  const [searchTerm, setSearchTerm, debouncedSearchTerm] = useDebounce('');
  const where = useMemo(() => {
    const w: ProductWhereInput = {};
    if (notInProductIds) {
      w.id = {
        notIn: notInProductIds,
      };
    }
    if (debouncedSearchTerm) {
      w.OR = [
        {
          name: {
            contains: debouncedSearchTerm,
            mode: QueryMode.Insensitive,
          },
        },
        {
          brandName: {
            contains: debouncedSearchTerm,
            mode: QueryMode.Insensitive,
          },
        },
      ];
    }
    return w;
  }, [debouncedSearchTerm, notInProductIds]);
  const { data, loading, fetchMore, refetch } = useProductsSelectQuery({
    variables: {
      where,
    },
  });

  const [create] = useCreateProductMutation({
    refetchQueries: [ProductsDocument, ProductsSelectDocument],
  });

  const value = props.value ?? query?.productDesc;

  function createProductFromSearchTerm(term: string) {
    if (!term?.startsWith('new|')) return;
    const [, newProductName] = term.split('|');
    if (!newProductName) return;
    // window.alert(`Criar Produto: ${newProductName}`);
    return create({
      variables: {
        data: {
          name: newProductName,
          costValue: 0,
          isPostPaid: false,
          priceValue: 0,
          qty: 0,
          controlsQty: false,
        },
      },
    });
  }

  return (
    <div style={style} className="flex items-center">
      <SelectDropdown<ProductsSelectQuery, 'products'>
        autoClearSearchValue={false}
        data={
          !(searchTerm || !data || !onChange)
            ? data
            : {
                products: {
                  nodes: [
                    {
                      label: `Criar Produto: ${searchTerm}`,
                      value: `new|${searchTerm}`,
                    },
                    ...(data?.products?.nodes ?? []),
                  ],
                  pageInfo: data?.products?.pageInfo,
                },
              }
        }
        entityName="products"
        mapData={({ value, label, label2 }) => {
          return { label: `${label} ${label2 ?? ''}`, value };
        }}
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
        placeholder="Selecione o Produto..."
        onChange={async (value, option) => {
          const newProduct = await createProductFromSearchTerm(value);
          const id = newProduct?.data?.createProduct?.id;
          if (onChange) {
            onChange(id ?? value, option);
            return;
          } else {
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
          }
        }}
        loading={loading}
        filterOption={false}
        style={style}
        {...props}
      />
      <div className="flex items-center">
        <Tooltip title="Atualizar lista">
          <Button
            type="link"
            loading={loading}
            disabled={loading}
            className="anticon"
            icon={
              <BiRefresh
                className={`anticon text-blue-600${loading ? 'anticon-spin' : ''}`}
              />
            }
            onClick={() => {
              refetch();
              onChange?.(value);
            }}
          />
        </Tooltip>
        <Tooltip title="Ver Produto Selecionado">
          <a
            href={`/product/${value}`}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              if (!value || value.startsWith('new|')) {
                e.preventDefault();
              }
            }}>
            <BiLink className="text-green-600" />
          </a>
        </Tooltip>
      </div>
    </div>
  );
};
