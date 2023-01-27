import { Button, Table, Tooltip } from 'antd';
import type { TableProps } from 'antd';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { SalesNode } from '.';
import { formatMoneyFromDecimal, formatMoneyFromInt, formatPercentFromDecimal } from '../helpers';

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
      dataIndex: nameof<SalesNode>(x => x.totalValueDecimal),
      render: value => formatMoneyFromDecimal(value),
    },
    {
      title: 'M Líquida',
      dataIndex: nameof<SalesNode>(x => x.netMarginPercent),
      render: (value, record) => {
        const common = (
          <>
            {formatPercentFromDecimal(record.netMarginPercent)} ({formatMoneyFromInt(record.netMarginValue)})
          </>
        );
        if (!record.totalValueDecimal) return common;
        return <Tooltip title={`Custo: ${formatMoneyFromDecimal(record.totalCostValueDecimal)}`}>{common}</Tooltip>;
      },
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
