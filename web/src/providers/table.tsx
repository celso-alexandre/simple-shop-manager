import { Button, Table } from 'antd';
import type { TableProps } from 'antd';
import dayjs from 'dayjs';
import { ProvidersNode } from '.';

export function ProvidersTable(props: TableProps<ProvidersNode>) {
  const columns: typeof props.columns = [
    {
      title: 'ID',
      dataIndex: nameof<ProvidersNode>((x) => {
        return x.id;
      }),
      ellipsis: true,
    },
    {
      title: 'Nome',
      dataIndex: nameof<ProvidersNode>((x) => {
        return x.name;
      }),
    },
    {
      title: 'Whatsapp',
      dataIndex: nameof<ProvidersNode>((x) => {
        return x.whatsapp;
      }),
      ellipsis: true,
    },
    {
      title: 'Cadastro',
      dataIndex: nameof<ProvidersNode>((x) => {
        return x.createdAt;
      }),
      render: (value) => {
        return dayjs(value).format('L');
      },
    },
    {
      title: 'Atualização',
      dataIndex: nameof<ProvidersNode>((x) => {
        return x.createdAt;
      }),
      render: (value, record) => {
        return (
          record.updatedAt !== record.createdAt && dayjs(value).format('L')
        );
      },
    },
    {
      key: 'actions',
      render: (value, record) => {
        return (
          <div>
            <Button
              onClick={() => {
                window.location.href = `/provider/${record.id}`;
              }}
              size="middle"
              type="primary">
              Editar
            </Button>
          </div>
        );
      },
    },
  ];

  return <Table columns={columns} {...props} />;
}
