import { ProductsFormNode } from '.';

export function productDto(product: ProductsFormNode): ProductsFormNode {
  return {
    id: product.id,
    name: product.name,
    costValue: product.costValue,
    isPostPaid: product.isPostPaid,
    priceValue: product.priceValue,
    brandName: product.brandName,
    providerId: product.providerId,
    controlsQty: product.controlsQty,
    qty: product.qty,
    netMarginPercent: product.netMarginPercent,
  };
}
