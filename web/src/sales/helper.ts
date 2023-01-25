import { SaleItem } from '.';

export function filterValidSaleItem(item: SaleItem) {
  return (
    typeof item.costIsPostPaid === 'boolean' &&
    typeof item.netMarginPercent === 'number' &&
    item.productId &&
    item.providerId &&
    item.quantity &&
    typeof item.totalCostValue === 'number' &&
    typeof item.totalValue === 'number'
  );
}
