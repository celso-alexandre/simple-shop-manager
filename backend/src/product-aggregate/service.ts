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
          $project: {
            qty: { $sum: '$qty' },
            priceValue: { $multiply: ['$qty', '$priceValue'] },
            costValue: { $multiply: ['$qty', '$costValue'] },
            netValue: {
              $subtract: [
                { $multiply: ['$qty', '$priceValue'] },
                { $multiply: ['$qty', '$costValue'] }
              ]
            }
          }
        }
      ]
    });

    const res = (result as unknown as any[])[0] || {};
    // console.log('Aggregated Result:', (result as unknown as any[])[0]);
    return {
      qty: res.qty || 0,
      priceValue: res.priceValue || 0,
      costValue: res.costValue || 0,
      netValue: res.netValue || 0
    };
  }
}
