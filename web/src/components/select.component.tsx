import { useState, useMemo, useEffect } from 'react';
import { Select, SelectProps } from 'antd';
import { ObservableQueryFields } from '@apollo/client';

type TData<X extends keyof any> = { __typename?: string } & Record<
  X,
  {
    pageInfo?: {
      [key: string]: any | null;
    } | null;
    nodes: {
      [key: string]: any;
    }[];
  }
>;

type TVariables = { skip?: number; take?: number; search?: string };

type SelectDropdownProps<T extends TData<K>, K extends keyof T> = {
  data?: T;
  fetchMore: ObservableQueryFields<T, TVariables>['fetchMore'];
  loading: boolean;
  refetch: ObservableQueryFields<T, TVariables>['refetch'];
  entityName: K;
  mapData?: (value: T[K]['nodes'][0]) => {
    value: string;
    label: string;
  };
} & SelectProps<any>;

export function SelectDropdown<T extends TData<K>, K extends keyof T>({
  data,
  fetchMore,
  loading,
  refetch,
  entityName,
  mapData,
  ...props
}: SelectDropdownProps<T, K>) {
  const [selectedSearch, setselectedSearch] = useState(undefined);

  useEffect(() => {
    void refetch({
      search: selectedSearch,
    });
  }, [selectedSearch]);

  const options = useMemo(() => {
    if (!mapData) return;

    return data?.[entityName]?.nodes?.map(mapData) || [];
  }, [data]);

  const onScroll = async (event: any) => {
    const { target } = event;
    if (
      !loading &&
      (target.scrollTop as number) + (target.offsetHeight as number) ===
        target.scrollHeight
    ) {
      target.scrollTo(0, target.scrollHeight);
      await fetchMore({
        variables: {
          skip: (data?.[entityName].pageInfo?.currentPage || 0) * 10,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const previousEntry = (previousResult as T)?.[entityName];
          const newEntries = (fetchMoreResult as T)?.[entityName];
          return {
            [entityName]: {
              pageInfo: newEntries?.pageInfo,
              nodes: [
                ...(previousEntry?.nodes ?? []),
                ...(newEntries?.nodes ?? []),
              ],
            },
          } as any;
        },
      });
    }
  };
  return (
    <Select
      onPopupScroll={onScroll}
      onSearch={(text) => {
        setselectedSearch(text as any);
      }}
      searchValue={selectedSearch}
      options={options}
      loading={loading}
      filterOption={false}
      showSearch
      {...props}
    />
  );
}
