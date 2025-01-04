import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { SaleAggregateArgsCustom } from './dto/args';

@Injectable()
export class SaleAggregateService {
  constructor(private readonly prisma: PrismaService) {}

  async count(args: SaleAggregateArgsCustom) {
    const res = await this.prisma.sale.count({
      where: {
        date: {
          gte: args.where?.startDate,
          lte: args.where?.endDate
        }
      }
    });
    // console.log('Count args:', args, 'res', res);

    return res;
  }
  default;
  async aggregate(args: SaleAggregateArgsCustom) {
    const { startDate, endDate } = args.where ?? {};

    const pipeline: any[] = [];

    if (startDate || endDate) {
      const matchStage = {
        $expr: {
          $and: []
        }
      };

      if (startDate) {
        matchStage.$expr.$and.push({
          $gte: [
            '$date',
            {
              $dateFromString: {
                dateString: new Date(startDate).toISOString()
              }
            }
          ]
        });
      }

      if (endDate) {
        matchStage.$expr.$and.push({
          $lte: [
            '$date',
            {
              $dateFromString: {
                dateString: new Date(endDate).toISOString()
              }
            }
          ]
        });
      }

      pipeline.push({ $match: matchStage });
    }

    pipeline.push({
      $group: {
        _id: null,
        totalValue: { $sum: '$totalValue' },
        totalCostValue: { $sum: '$totalCostValue' },
        netValue: {
          $sum: { $subtract: ['$totalValue', '$totalCostValue'] }
        }
      }
    });

    pipeline.push({
      $project: {
        _id: 0,
        totalValue: 1,
        totalCostValue: 1,
        netValue: 1
      }
    });

    const result = await this.prisma.sale.aggregateRaw({ pipeline });

    const res = (result as unknown as any[])[0] || {};
    // console.log('Aggregate Result:', res);
    return {
      totalValue: res.totalValue || 0,
      totalCostValue: res.totalCostValue || 0,
      netValue: res.netValue || 0
    };
  }
}
