import { SalesFormNode } from '.';

export function saleDto(sale: SalesFormNode): Omit<SalesFormNode, 'saleItems'> & {
  saleItems: {
    nodes: Omit<SalesFormNode['saleItems']['nodes'][0], 'netMarginPercent' | 'totalCostValue'>[];
  };
} {
  return {
    id: sale.id,
    date: sale.date,
    saleItems: {
      nodes: sale.saleItems.nodes.map(item => ({
        id: item.id,
        costIsPostPaid: item.costIsPostPaid,
        productId: item.productId,
        quantity: item.quantity,
        totalValue: item.totalValue,
        providerId: item.providerId,
      })),
    },
  };
}

export function filterValidSaleItem(item: ReturnType<typeof saleDto>['saleItems']['nodes'][number]) {
  return (
    typeof item.costIsPostPaid === 'boolean' &&
    item.productId &&
    item.providerId &&
    item.quantity &&
    typeof item.totalValue === 'number'
  );
}
