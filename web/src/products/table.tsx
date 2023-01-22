import { Table } from 'antd';
import type { TableProps } from 'antd';
import dayjs from 'dayjs';
import { ProductsNode } from '.';
import { formatMoneyFromInt } from '../helpers';
import { BooleanTag } from '../components/tag';

export function ProductsTable(props: TableProps<ProductsNode>) {
  const columns: typeof props.columns = [
    {
      title: 'ID',
      dataIndex: nameof<ProductsNode>(x => x.id),
      ellipsis: true,
    },
    {
      title: 'Data',
      dataIndex: nameof<ProductsNode>(x => x.createdAt),
      render: value => dayjs(value).format('L LTS'),
    },
    {
      title: 'Preço',
      dataIndex: nameof<ProductsNode>(x => x.priceValue),
      render: value => formatMoneyFromInt(value),
    },
    {
      title: 'Tp Custo',
      dataIndex: nameof<ProductsNode>(x => x.isPostPaid),
      render: value => <BooleanTag bool={value}>{value ? 'Consignado' : 'Normal'}</BooleanTag>,
    },
    {
      title: 'Custo',
      dataIndex: nameof<ProductsNode>(x => x.costValue),
      render: value => formatMoneyFromInt(value),
    },
    {
      title: 'Fornecedor',
      dataIndex: nameof<ProductsNode>(x => x.provider),
      render: (value, record) => `${record.provider?.name} ${record.provider?.whatsapp}`,
    },
  ];

  return <Table columns={columns} {...props} />;
}
