import {
  PrismaClient,
  Product,
  ProductMovement,
  Sale,
  SaleItem
} from '@prisma/client';

type SaleType = Sale & {
  saleItems: (SaleItem & {
    product: Product;
    ProductMovement: ProductMovement[];
  })[];
};

export async function handleProductMovement(
  prisma: Partial<PrismaClient>,
  saleAfter: SaleType,
  saleBefore?: SaleType
) {
  // Case 1: Newly created sale
  if (!saleBefore) {
    const productMovements: Parameters<
      PrismaClient['productMovement']['createMany']
    >[0]['data'] = [];
    for (const item of saleAfter.saleItems) {
      if (!item.product.controlsQty) {
        continue;
      }
      productMovements.push({
        type: 'SALE',
        quantity: item.quantity * -1,
        productId: item.product.id,
        saleItemId: item.id
      });
    }
    const promises: Promise<any>[] = [];

    if (productMovements.length) {
      promises.push(
        prisma.productMovement.createMany({
          data: productMovements
        })
      );
    }

    promises.push(
      ...saleAfter.saleItems.map((item) => {
        return prisma.product.update({
          where: { id: item.product.id },
          data: {
            qty: {
              decrement: item.quantity
            }
          }
        });
      })
    );
    await Promise.all(promises);
    return;
  }

  // Case 2: Sale update
  const promises: Promise<any>[] = [];
  const productMovements: Parameters<
    PrismaClient['productMovement']['createMany']
  >[0]['data'] = [];

  const saleItemsQtyDiff = new Map<
    string,
    {
      saleItemId: string;
      qtyDiff: number;
      productId: string;
    }
  >();

  for (const item of saleAfter.saleItems) {
    // not sure if !item.ProductMovement?.length!item.ProductMovement?.length is good: !item.ProductMovement?.length
    // it ensures that if the product moved stock before, it keeps doing that in updates
    if (!item.product.controlsQty && !item.ProductMovement?.length) {
      continue;
    }

    const saleItemBefore = saleBefore.saleItems.find((saleItem) => {
      return saleItem.id === item.id;
    });
    const prevQty = saleItemBefore?.quantity || 0;
    const qtyDiff = prevQty - item.quantity;
    if (!qtyDiff) {
      continue;
    }

    productMovements.push({
      type: 'SALE_EDIT',
      quantity: qtyDiff,
      productId: item.product.id,
      saleItemId: item.id
    });

    const currentQtyDiff = saleItemsQtyDiff.get(item.id);
    saleItemsQtyDiff.set(item.id, {
      saleItemId: item.id,
      productId: item.product.id,
      qtyDiff: (currentQtyDiff?.qtyDiff || 0) + qtyDiff
    });
  }

  // Iteration over sale items that were removed only
  for (const item of saleBefore.saleItems) {
    if (!item.product.controlsQty && !item.ProductMovement?.length) {
      continue;
    }

    // If the product still exists in the sale, it means it was not removed
    // the previous loop already took care of the quantity difference
    const saleItemAfter = saleAfter.saleItems.find((saleItem) => {
      return saleItem.id === item.id;
    });
    if (saleItemAfter) {
      continue;
    }

    productMovements.push({
      type: 'SALE_DELETE',
      quantity: item.quantity,
      productId: item.product.id,
      saleItemId: item.id
    });

    const currentQtyDiff = saleItemsQtyDiff.get(item.id);
    saleItemsQtyDiff.set(item.id, {
      saleItemId: item.id,
      productId: item.product.id,
      qtyDiff: (currentQtyDiff?.qtyDiff || 0) + item.quantity
    });
  }

  if (productMovements.length) {
    promises.push(
      prisma.productMovement.createMany({
        data: productMovements
      })
    );
  }

  for (const [, qtyDiff] of saleItemsQtyDiff) {
    promises.push(
      prisma.product.update({
        where: {
          id: qtyDiff.productId
        },
        data: {
          qty: {
            [qtyDiff.qtyDiff >= 0 ? 'increment' : 'decrement']: Math.abs(
              qtyDiff.qtyDiff
            )
          }
        }
      })
    );
  }

  await Promise.all(promises);
}
