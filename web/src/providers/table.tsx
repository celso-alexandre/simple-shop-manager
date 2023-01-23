import { Table } from 'antd';
import type { TableProps } from 'antd';
import dayjs from 'dayjs';
import { ProvidersNode } from '.';

export function ProvidersTable(props: TableProps<ProvidersNode>) {
  const columns: typeof props.columns = [
    {
      title: 'ID',
      dataIndex: nameof<ProvidersNode>(x => x.id),
      ellipsis: true,
    },
    {
      title: 'Nome',
      dataIndex: nameof<ProvidersNode>(x => x.name),
    },
    {
      title: 'Whatsapp',
      dataIndex: nameof<ProvidersNode>(x => x.whatsapp),
      ellipsis: true,
    },
    {
      title: 'Cadastro',
      dataIndex: nameof<ProvidersNode>(x => x.createdAt),
      render: value => dayjs(value).format('L'),
    },
    {
      title: 'Atualização',
      dataIndex: nameof<ProvidersNode>(x => x.createdAt),
      render: (value, record) => record.updatedAt !== record.createdAt && dayjs(value).format('L'),
    },
  ];

  return <Table columns={columns} {...props} />;
}