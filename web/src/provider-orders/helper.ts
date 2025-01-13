import { ProviderOrdersFormNode } from '.';

export function filterValidProviderOrderItem(
  item: ReturnType<
    typeof providerOrderDto
  >['providerOrderItems']['nodes'][number]
) {
  return item.productId && item.quantity && item.totalValue;
}

export function providerOrderDto(providerOrder: ProviderOrdersFormNode): Omit<
  ProviderOrdersFormNode,
  'providerOrderItems'
> & {
  providerOrderItems: {
    nodes: ProviderOrdersFormNode['providerOrderItems']['nodes'][0][];
  };
} {
  return {
    id: providerOrder.id,
    date: providerOrder.date,
    providerOrderItems: {
      nodes: providerOrder.providerOrderItems.nodes
        .filter(filterValidProviderOrderItem)
        .map((item) => {
          return {
            id: item.id,
            productId: item.productId,
            quantity: item.quantity,
            moveQty: item.moveQty ?? false,
            totalValue: item.totalValue,
            providerId: item.providerId,
          };
        }),
    },
  };
}
