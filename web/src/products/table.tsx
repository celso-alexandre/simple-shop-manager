import { Button, Table, Tooltip } from 'antd';
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
  const columns: typeof props.columns = [
    {
      title: 'ID',
      width: 100,
      dataIndex: nameof<ProductsNode>((x) => {
        return x.id;
      }),
      ellipsis: true,
      sorter: (a, b) => {
        return a.id.localeCompare(b.id);
      },
    },
    {
      title: 'Nome',
      width: 300,
      dataIndex: nameof<ProductsNode>((x) => {
        return x.name;
      }),
      ellipsis: true,
      sorter: (a, b) => {
        return a.name.localeCompare(b.name);
      },
    },
    {
      title: 'Marca',
      width: 300,
      dataIndex: nameof<ProductsNode>((x) => {
        return x.brandName;
      }),
      sorter: (a, b) => {
        return a.brandName.localeCompare(b.brandName);
      },
    },
    {
      title: 'Data',
      width: 100,
      dataIndex: nameof<ProductsNode>((x) => {
        return x.createdAt;
      }),
      render: (value) => {
        return dayjs(value).format('L');
      },
      sorter: (a, b) => {
        return dayjs(a.createdAt).unix() - dayjs(b.createdAt).unix();
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
      sorter: (a, b) => {
        return (a.priceValueDecimal || 0) - (b.priceValueDecimal || 0);
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
      sorter: (a, b) => {
        return (a.qty || 0) - (b.qty || 0);
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
      sorter: (a, b) => {
        return Number(a.isPostPaid) - Number(b.isPostPaid);
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
      sorter: (a, b) => {
        return (a.netMarginPercent || 0) - (b.netMarginPercent || 0);
      },
    },
    {
      title: 'Fornecedor',
      dataIndex: nameof<ProductsNode>((x) => {
        return x.provider;
      }),
      render: (_value, record) => {
        if (!record.provider) return null;
        return (
          <a href={`/provider/${record.providerId}`}>
            {`${record.provider?.name} ${record.provider?.whatsapp ?? ''}`}
          </a>
        );
      },
      ellipsis: true,
      sorter: (a, b) => {
        return a.provider?.name.localeCompare(b.provider?.name);
      },
    },
    {
      width: 100,
      align: 'center',
      key: 'actions',
      render: (value, record) => {
        return (
          <div>
            <Button
              className="w-full"
              onClick={() => {
                window.location.href = `/product/${record.id}`;
              }}
              type="primary">
              Editar
            </Button>
          </div>
        );
      },
    },
  ];

  return <Table size="small" columns={columns} {...props} />;
}
