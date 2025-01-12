import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class FinancialMovementAggregateService {
  constructor(private readonly prisma: PrismaService) {}

  count() {
    return this.prisma.financialMovement.count();
  }

  async aggregate() {
    const result = await this.prisma.financialMovement.aggregateRaw({
      pipeline: [
        {
          $group: {
            _id: null,
            value: { $sum: '$value' }
          }
        },
        {
          $project: {
            _id: 0,
            value: 1
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
      value: res.value || 0
    };
  }
}
