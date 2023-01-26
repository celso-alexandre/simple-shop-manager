import { Button, Table, Typography } from 'antd';
import type { TableProps } from 'antd';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { ProductsNode } from '.';
import { formatMoneyFromInt, formatPercentFromDecimal } from '../helpers';
import { BooleanTag } from '../components/tag';

export function ProductsTable(props: TableProps<ProductsNode>) {
  const navigate = useNavigate();

  const columns: typeof props.columns = [
    {
      title: 'ID',
      dataIndex: nameof<ProductsNode>(x => x.id),
      ellipsis: true,
    },
    {
      title: 'Nome',
      dataIndex: nameof<ProductsNode>(x => x.name),
      ellipsis: true,
    },
    {
      title: 'Marca',
      dataIndex: nameof<ProductsNode>(x => x.brandName),
      ellipsis: true,
    },
    {
      title: 'Data',
      dataIndex: nameof<ProductsNode>(x => x.createdAt),
      render: value => dayjs(value).format('L'),
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
      title: 'M Líquida',
      dataIndex: nameof<ProductsNode>(x => x.costValue),
      render: (value, record) => formatPercentFromDecimal((record.priceValue - record.costValue) / record.priceValue),
    },
    {
      title: 'Fornecedor',
      dataIndex: nameof<ProductsNode>(x => x.provider),
      render: (value, record) => {
        if (!record.provider) return null;
        return (
          <Typography.Link
            href={`/provider/${record.providerId}`}
          >{`${record.provider?.name} ${record.provider?.whatsapp}`}</Typography.Link>
        );
      },
      ellipsis: true,
    },
    {
      width: 100,
      align: 'center',
      key: 'actions',
      render: (value, record) => {
        return (
          <div>
            <Button onClick={() => navigate(`/product/${record.id}`)} size="middle" type="primary">
              Editar
            </Button>
          </div>
        );
      },
    },
  ];

  return <Table columns={columns} {...props} />;
}
