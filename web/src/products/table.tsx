import { Button, Table, Tooltip, Typography } from 'antd';
import type { TableProps } from 'antd';
import dayjs from 'dayjs';
import { ProductsNode } from '.';
import {
  formatPercentFromDecimal,
  formatMoneyFromDecimal,
  formatMoneyFromInt,
} from '../helpers';
import { BooleanTag } from '../components/tag';

export function ProductsTable(props: TableProps<ProductsNode>) {
  // const navigate = useNavigate();

  const columns: typeof props.columns = [
    {
      title: 'ID',
      dataIndex: nameof<ProductsNode>((x) => {
        return x.id;
      }),
      ellipsis: true,
    },
    {
      title: 'Nome',
      dataIndex: nameof<ProductsNode>((x) => {
        return x.name;
      }),
      ellipsis: true,
    },
    {
      title: 'Marca',
      dataIndex: nameof<ProductsNode>((x) => {
        return x.brandName;
      }),
      ellipsis: true,
    },
    {
      title: 'Data',
      dataIndex: nameof<ProductsNode>((x) => {
        return x.createdAt;
      }),
      render: (value) => {
        return dayjs(value).format('L');
      },
    },
    {
      title: 'Preço',
      dataIndex: nameof<ProductsNode>((x) => {
        return x.priceValueDecimal;
      }),
      render: (value) => {
        return formatMoneyFromDecimal(value);
      },
    },
    {
      title: 'Qtde',
      dataIndex: nameof<ProductsNode>((x) => {
        return x.qty;
      }),
      render: (_, record) => {
        if (record.controlsQty) return record.qty;
        return null;
      },
    },
    {
      title: 'Tp Custo',
      dataIndex: nameof<ProductsNode>((x) => {
        return x.isPostPaid;
      }),
      render: (value) => {
        return (
          <BooleanTag bool={value}>
            {value ? 'Consignado' : 'Normal'}
          </BooleanTag>
        );
      },
    },
    {
      title: 'M Líquida',
      dataIndex: nameof<ProductsNode>((x) => {
        return x.priceValueDecimal;
      }),
      render: (value, record) => {
        const common = (
          <>
            {formatPercentFromDecimal(record.netMarginPercent)} (
            {formatMoneyFromInt(record.netMarginValue)})
          </>
        );
        if (!record.priceValueDecimal) return common;
        return (
          <Tooltip
            title={`Custo: ${formatMoneyFromDecimal(record.costValueDecimal)}`}>
            {common}
          </Tooltip>
        );
      },
    },
    {
      title: 'Fornecedor',
      dataIndex: nameof<ProductsNode>((x) => {
        return x.provider;
      }),
      render: (value, record) => {
        if (!record.provider) return null;
        return (
          <Typography.Link
            href={`/provider/${record.providerId}`}>{`${record.provider?.name} ${
            record.provider?.whatsapp ?? ''
          }`}</Typography.Link>
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
            <Button
              onClick={() => {
                // navigate(`/product/${record.id}`)
                window.location.href = `/product/${record.id}`;
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
