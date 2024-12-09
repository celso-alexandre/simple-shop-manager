import { PrismaClient } from '@prisma/client';
import { Sql } from './sql';

const prisma = new PrismaClient();
function runRaw(args: any) {
  return prisma.$runCommandRaw(args);
}
async function runSeed() {
  for (const sql of Sql) {
    await runRaw(sql);
  }

  // await prisma.product.updateMany({
  //   data: {
  //     controlsQty: false
  //   }
  // });
}
runSeed();
