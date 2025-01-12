import { Button, Table } from 'antd';
import type { TableProps } from 'antd';
import dayjs from 'dayjs';
import { ProviderOrdersNode } from '.';
import { formatMoneyFromDecimal } from '../helpers';
import {
  ProviderOrdersDocument,
  useDeleteProviderOrderMutation,
} from '../graphql/__generated__/provider-orders.gql.generated';

export function ProviderOrdersTable(props: TableProps<ProviderOrdersNode>) {
  const [deleteProviderOrder] = useDeleteProviderOrderMutation({
    refetchQueries: [ProviderOrdersDocument],
  });

  const columns: typeof props.columns = [
    {
      title: 'ID',
      dataIndex: nameof<ProviderOrdersNode>((x) => {
        return x.id;
      }),
      ellipsis: true,
    },
    {
      title: 'Data',
      dataIndex: nameof<ProviderOrdersNode>((x) => {
        return x.date;
      }),
      render: (value) => {
        return dayjs(value).format('DD/MM/YYYY HH:mm');
      },
    },
    {
      title: 'Valor',
      dataIndex: nameof<ProviderOrdersNode>((x) => {
        return x.totalValueDecimal;
      }),
      render: (value) => {
        return formatMoneyFromDecimal(value);
      },
    },
    {
      key: 'actions',
      width: 200,
      render: (value, record) => {
        return (
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <a href={`/provider-order/${record.id}`}>
              <Button size="middle" type="primary">
                Editar
              </Button>
            </a>
            <Button
              style={{ background: '#f33', color: '#fff' }}
              onClick={() => {
                deleteProviderOrder({
                  variables: { where: { id: record.id } },
                });
              }}
              size="middle"
              type="default">
              Remover
            </Button>
          </div>
        );
      },
    },
  ];

  return <Table columns={columns} {...props} />;
}
