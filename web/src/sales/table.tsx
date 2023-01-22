import { Table } from 'antd';
import type { TableProps } from 'antd';
import dayjs from 'dayjs';
import { SalesNode } from '.';
import { formatMoneyFromInt, formatPercentFromDecimal } from '../helpers';

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
      title: 'Valor',
      dataIndex: nameof<SalesNode>(x => x.totalValue),
      render: value => formatMoneyFromInt(value),
    },
    {
      title: 'M Líquida',
      dataIndex: nameof<SalesNode>(x => x.netMarginPercent),
      render: value => formatPercentFromDecimal(value),
    },
  ];

  return <Table columns={columns} {...props} />;
}
