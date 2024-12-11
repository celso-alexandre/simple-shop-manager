import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class ProductAggregateService {
  constructor(private readonly prisma: PrismaService) {}

  count() {
    return this.prisma.product.count();
  }

  async aggregate() {
    const result = await this.prisma.product.aggregateRaw({
      pipeline: [
        {
          $match: {
            controlsQty: true
          }
        },
        {
          $group: {
            _id: null,
            qty: { $sum: '$qty' },
            priceValue: { $sum: { $multiply: ['$qty', '$priceValue'] } },
            costValue: { $sum: { $multiply: ['$qty', '$costValue'] } },
            netValue: {
              $sum: {
                $subtract: [
                  { $multiply: ['$qty', '$priceValue'] },
                  { $multiply: ['$qty', '$costValue'] }
                ]
              }
            }
          }
        },
        {
          $project: {
            _id: 0,
            qty: 1,
            priceValue: 1,
            costValue: 1,
            netValue: 1
          }
        }
      ]
    });
    if (!result || (result as any).length > 1) {
      throw new Error('Unexpected result');
    }

    const res = (result as unknown as any[])[0] || {};
    console.log('Aggregated Result:', result);
    return {
      qty: res.qty || 0,
      priceValue: res.priceValue || 0,
      costValue: res.costValue || 0,
      netValue: res.netValue || 0
    };
  }
}
