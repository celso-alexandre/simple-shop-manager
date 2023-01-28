import type { TableProps } from 'antd';

export function tablePagination({
  skip,
  pageSize,
  totalPages,
  setPagination,
}: {
  skip: number;
  pageSize: number;
  totalPages: number;
  setPagination: (newSkip: number, newTake: number) => void;
}): TableProps<any> {
  const current = Math.floor(skip / pageSize) + 1;
  return {
    pagination: {
      size: 'default',
      hideOnSinglePage: false,
      current,
      pageSize,
      pageSizeOptions: [5, 10, 50, 100],
      showSizeChanger: true,
      total: totalPages,
      onChange: (newPage: number, newPageSize: number) => {
        setPagination(newPageSize !== pageSize ? 0 : (newPage - 1) * newPageSize, newPageSize);
      },
    },
  };
}
// const pagination: TablePaginationConfig = {
//    size: 'default',
//    showQuickJumper: {
//      goButton: (
//        <Button size="small" type="primary">
//          {t('common.goToPage')}
//        </Button>
//      ),
//    },
//    showSizeChanger: true,
//    pageSize,
//    pageSizeOptions,
//    total: batchResponse?.qrBatchs.pageInfo.total,
//    current: batchResponse?.qrBatchs.pageInfo.currentPage,
//    onChange: (page: number, _pageSize: number) => {
//      setQuery({
//        skip: (page - 1) * pageSize,
//        take: _pageSize,
//      });
//    },
//  };
//  const sorterItems = (order: antdSorter, field: Key) => {
//    setQuery(oldValue => {
//      const value = order === 'descend' ? SortOrder.Desc : SortOrder.Asc;
//      const sortValue = order ? value : undefined;
//      const sorterBy = {
//        id: {
//          qrBatchIdSort: sortValue,
//          qrBatchStatusSort: undefined,
//        },
//        isActive: {
//          qrBatchStatusSort: sortValue,
//          qrBatchIdSort: undefined,
//        },
//      };
//      const sorterQuery = sorterBy[field];
//      return { ...oldValue, ...sorterQuery };
//    });
//  };
