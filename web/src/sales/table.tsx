import { Button, Table, Tooltip } from 'antd';
import type { TableProps } from 'antd';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { SalesNode } from '.';
import { formatMoneyFromDecimal, formatMoneyFromInt, formatPercentFromDecimal } from '../helpers';
import { SalesDocument, useDeleteSaleMutation } from '../graphql/__generated__/sales.gql.generated';

export function SalesTable(props: TableProps<SalesNode>) {
  const [deleteSale] = useDeleteSaleMutation({
    refetchQueries: [SalesDocument],
  });

  const columns: typeof props.columns = [
    {
      title: 'ID',
      dataIndex: nameof<SalesNode>(x => x.id),
      ellipsis: true,
    },
    {
      title: 'Data',
      dataIndex: nameof<SalesNode>(x => x.date),
      render: value => dayjs(value).format('DD/MM/YYYY HH:mm'),
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
      width: 200,
      render: (value, record) => {
        return (
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <a href={`/sale/${record.id}`}>
              <Button size="middle" type="primary">
                Editar
              </Button>
            </a>
            <Button
              style={{ background: '#f33', color: '#fff' }}
              onClick={() => deleteSale({ variables: { where: { id: record.id } } })}
              size="middle"
              type="default"
            >
              Remover
            </Button>
          </div>
        );
      },
    },
  ];

  return <Table columns={columns} {...props} />;
}
