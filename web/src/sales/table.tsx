import { Table } from 'antd';
import type { TableProps } from 'antd';
import dayjs from 'dayjs';
import { SalesNode } from '.';
import { formatMoneyFromInt } from '../helpers';
import { BooleanTag } from '../components/tag';

export function SalesTable(props: TableProps<SalesNode>) {
  const columns: typeof props.columns = [
    {
      title: 'ID',
      dataIndex: nameof<SalesNode>(x => x.id),
      ellipsis: true,
    },
    {
      title: 'Data',
      dataIndex: nameof<SalesNode>(x => x.date),
      render: value => dayjs(value).format('L LTS'),
    },
    {
      title: 'Preço',
      dataIndex: nameof<SalesNode>(x => x.priceValue),
      render: value => formatMoneyFromInt(value),
    },
    {
      title: 'Tp Custo',
      dataIndex: nameof<SalesNode>(x => x.isPostPaid),
      render: value => <BooleanTag bool={value} title={value ? 'Consignado' : 'Normal'} />,
    },
    {
      title: 'Custo',
      dataIndex: nameof<SalesNode>(x => x.costValue),
      render: value => formatMoneyFromInt(value),
    },
  ];

  return <Table columns={columns} {...props} />;
}
