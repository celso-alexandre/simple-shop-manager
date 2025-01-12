import { Button, Table, Tooltip, Typography } from 'antd';
import type { TableProps } from 'antd';
import dayjs from 'dayjs';
import { FinancialMovementsNode } from '.';
import { formatMoneyFromDecimal } from '../helpers';
import {
  FinancialMovementsDocument,
  useDeleteFinancialMovementMutation,
} from '../graphql/__generated__/financial-movements.gql.generated';
import { FinancialMovementType } from '../types';

export function FinancialMovementsTable(
  props: TableProps<FinancialMovementsNode>
) {
  const [deleteFinancialMovement] = useDeleteFinancialMovementMutation({
    refetchQueries: [FinancialMovementsDocument],
  });

  const columns: typeof props.columns = [
    {
      title: 'ID',
      dataIndex: nameof<FinancialMovementsNode>((x) => {
        return x.id;
      }),
      ellipsis: true,
    },
    {
      title: 'Data',
      dataIndex: nameof<FinancialMovementsNode>((x) => {
        return x.date;
      }),
      render: (value) => {
        return dayjs(value).format('DD/MM/YYYY HH:mm');
      },
    },
    {
      title: 'Valor',
      dataIndex: nameof<FinancialMovementsNode>((x) => {
        return x.valueDecimal;
      }),
      render: (value) => {
        return (
          <>
            <Typography.Text
              className={`font-semibold ${value > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {value > 0 ? 'C' : 'D'}
            </Typography.Text>{' '}
            {formatMoneyFromDecimal(Math.abs(value))}
          </>
        );
      },
    },
    {
      title: 'Tipo',
      dataIndex: nameof<FinancialMovementsNode>((x) => {
        return x.type;
      }),
      render(value) {
        switch (value) {
          case FinancialMovementType.Manual:
            return 'Manual';
          case FinancialMovementType.Sale:
            return 'Venda';
          case FinancialMovementType.ProviderOrder:
            return 'Compra';
          default:
            return null;
        }
      },
    },
    {
      key: 'actions',
      width: 200,
      render: (value, record) => {
        const disabled =
          !record.type || record.type !== FinancialMovementType.Manual;
        let editUrl = '#';
        switch (record.type) {
          case FinancialMovementType.Manual:
            editUrl = `/financial-movement/${record.id ?? -1}`;
            break;
          case FinancialMovementType.Sale:
            editUrl = `/sale/${record.saleId}`;
            break;
          case FinancialMovementType.ProviderOrder:
            editUrl = `/provider-order/${record.providerOrderId ?? -1}`;
            break;
        }
        return (
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <a href={editUrl}>
              <Button size="middle" type="primary">
                Editar
              </Button>
            </a>
            <Tooltip
              title={
                disabled
                  ? 'Não é permitido remover movimentos automáticos'
                  : undefined
              }>
              <Button
                disabled={disabled}
                style={{ background: '#f33', color: '#fff' }}
                onClick={() => {
                  deleteFinancialMovement({
                    variables: { where: { id: record.id } },
                  });
                }}
                size="middle"
                type="default">
                Remover
              </Button>
            </Tooltip>
          </div>
        );
      },
    },
  ];

  return <Table columns={columns} {...props} />;
}
