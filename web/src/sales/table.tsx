import { Button, Table } from 'antd';
import type { TableProps } from 'antd';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { SalesNode } from '.';
import { formatMoneyFromInt, formatPercentFromDecimal } from '../helpers';

export function SalesTable(props: TableProps<SalesNode>) {
  const navigate = useNavigate();

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
    {
      key: 'actions',
      render: (value, record) => {
        return (
          <div>
            <Button onClick={() => navigate(`/sale/${record.id}`)} size="middle" type="primary">
              Editar
            </Button>
          </div>
        );
      },
    },
  ];

  return <Table columns={columns} {...props} />;
}
