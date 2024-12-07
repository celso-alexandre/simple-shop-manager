import { registerEnumType } from '@nestjs/graphql';

export enum ExceptionKeys {
  // Automatically thrown errors
  'User_UQ_email_conflict',
  'Provider_UQ_name_conflict',
  'Provider_UQ_document_conflict',
  'Provider_UQ_email_conflict',
  'SaleItem_UQ_costIsPostPaid_productId_saleId',

  // Manually thrown errors
  'Sale_SaleItem_zero_length_badRequest',
  'SalePaidCost_zero_paidValue_badRequest'
}

registerEnumType(ExceptionKeys, {
  name: 'MainExceptionKeys'
});
