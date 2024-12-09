const viewName = 'VwProduct';
export const VwProduct = [
  { drop: viewName },
  {
    create: viewName,
    viewOn: 'Product',
    pipeline: [
      {
        $project: {
          productName: 1,
          totalPrice: { $multiply: ['$quantity', '$priceValue'] },
          totalCost: { $multiply: ['$quantity', '$costValue'] }
        }
      }
    ]
  }
];
