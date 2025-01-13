import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AggregateFinancialMovement = {
  __typename?: 'AggregateFinancialMovement';
  count?: Maybe<Scalars['Float']['output']>;
  value: Scalars['Int']['output'];
};

export type AggregateProduct = {
  __typename?: 'AggregateProduct';
  costValue: Scalars['Int']['output'];
  count?: Maybe<Scalars['Float']['output']>;
  netValue: Scalars['Int']['output'];
  priceValue: Scalars['Int']['output'];
  qty: Scalars['Int']['output'];
};

export type AggregateSale = {
  __typename?: 'AggregateSale';
  count?: Maybe<Scalars['Float']['output']>;
  netValue: Scalars['Int']['output'];
  totalCostValue: Scalars['Int']['output'];
  totalValue: Scalars['Int']['output'];
};


export type AggregateSaleCountArgs = {
  where?: InputMaybe<SaleWhereInputCustom>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumFinancialMovementTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<FinancialMovementType>;
};

export type EnumFinancialMovementTypeFilter = {
  equals?: InputMaybe<FinancialMovementType>;
  in?: InputMaybe<Array<FinancialMovementType>>;
  not?: InputMaybe<NestedEnumFinancialMovementTypeFilter>;
  notIn?: InputMaybe<Array<FinancialMovementType>>;
};

export type EnumProductMovementGroupTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<ProductMovementGroupType>;
};

export type EnumProductMovementGroupTypeFilter = {
  equals?: InputMaybe<ProductMovementGroupType>;
  in?: InputMaybe<Array<ProductMovementGroupType>>;
  not?: InputMaybe<NestedEnumProductMovementGroupTypeFilter>;
  notIn?: InputMaybe<Array<ProductMovementGroupType>>;
};

export type EnumProductMovementTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<ProductMovementType>;
};

export type EnumProductMovementTypeFilter = {
  equals?: InputMaybe<ProductMovementType>;
  in?: InputMaybe<Array<ProductMovementType>>;
  not?: InputMaybe<NestedEnumProductMovementTypeFilter>;
  notIn?: InputMaybe<Array<ProductMovementType>>;
};

export type FinancialMovement = {
  __typename?: 'FinancialMovement';
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  providerOrderId?: Maybe<Scalars['String']['output']>;
  saleId?: Maybe<Scalars['String']['output']>;
  type: FinancialMovementType;
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['Int']['output'];
  valueDecimal: Scalars['Float']['output'];
};

export type FinancialMovementAvgAggregate = {
  __typename?: 'FinancialMovementAvgAggregate';
  value?: Maybe<Scalars['Float']['output']>;
};

export type FinancialMovementCountAggregate = {
  __typename?: 'FinancialMovementCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  date: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  providerOrderId: Scalars['Int']['output'];
  saleId: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type FinancialMovementCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  providerOrder?: InputMaybe<ProviderOrderCreateNestedOneWithoutFinancialMovementsInput>;
  sale?: InputMaybe<SaleCreateNestedOneWithoutFinancialMovementInput>;
  type: FinancialMovementType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

export type FinancialMovementCreateManyProviderOrderInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  saleId?: InputMaybe<Scalars['String']['input']>;
  type: FinancialMovementType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

export type FinancialMovementCreateManyProviderOrderInputEnvelope = {
  data: Array<FinancialMovementCreateManyProviderOrderInput>;
};

export type FinancialMovementCreateManySaleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  providerOrderId?: InputMaybe<Scalars['String']['input']>;
  type: FinancialMovementType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

export type FinancialMovementCreateManySaleInputEnvelope = {
  data: Array<FinancialMovementCreateManySaleInput>;
};

export type FinancialMovementCreateNestedManyWithoutProviderOrderInput = {
  connect?: InputMaybe<Array<FinancialMovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FinancialMovementCreateOrConnectWithoutProviderOrderInput>>;
  create?: InputMaybe<Array<FinancialMovementCreateWithoutProviderOrderInput>>;
  createMany?: InputMaybe<FinancialMovementCreateManyProviderOrderInputEnvelope>;
};

export type FinancialMovementCreateNestedManyWithoutSaleInput = {
  connect?: InputMaybe<Array<FinancialMovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FinancialMovementCreateOrConnectWithoutSaleInput>>;
  create?: InputMaybe<Array<FinancialMovementCreateWithoutSaleInput>>;
  createMany?: InputMaybe<FinancialMovementCreateManySaleInputEnvelope>;
};

export type FinancialMovementCreateOrConnectWithoutProviderOrderInput = {
  create: FinancialMovementCreateWithoutProviderOrderInput;
  where: FinancialMovementWhereUniqueInput;
};

export type FinancialMovementCreateOrConnectWithoutSaleInput = {
  create: FinancialMovementCreateWithoutSaleInput;
  where: FinancialMovementWhereUniqueInput;
};

export type FinancialMovementCreateWithoutProviderOrderInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  sale?: InputMaybe<SaleCreateNestedOneWithoutFinancialMovementInput>;
  type: FinancialMovementType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

export type FinancialMovementCreateWithoutSaleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  providerOrder?: InputMaybe<ProviderOrderCreateNestedOneWithoutFinancialMovementsInput>;
  type: FinancialMovementType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

export type FinancialMovementListRelationFilter = {
  every?: InputMaybe<FinancialMovementWhereInput>;
  none?: InputMaybe<FinancialMovementWhereInput>;
  some?: InputMaybe<FinancialMovementWhereInput>;
};

export type FinancialMovementMaxAggregate = {
  __typename?: 'FinancialMovementMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  providerOrderId?: Maybe<Scalars['String']['output']>;
  saleId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<FinancialMovementType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type FinancialMovementMinAggregate = {
  __typename?: 'FinancialMovementMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  providerOrderId?: Maybe<Scalars['String']['output']>;
  saleId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<FinancialMovementType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type FinancialMovementOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FinancialMovementOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  providerOrder?: InputMaybe<ProviderOrderOrderByWithRelationInput>;
  providerOrderId?: InputMaybe<SortOrder>;
  sale?: InputMaybe<SaleOrderByWithRelationInput>;
  saleId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type FinancialMovementPaginated = {
  __typename?: 'FinancialMovementPaginated';
  /** Number of current page */
  currentPage?: Maybe<Scalars['Int']['output']>;
  /** Boolean to use on a cursor-based pagination. E.g: Mobile scroll */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** Number of last page */
  lastPage?: Maybe<Scalars['Int']['output']>;
  nextCursor?: Maybe<Scalars['Int']['output']>;
  /** Count for query results without skip, take and cursor */
  total?: Maybe<Scalars['Int']['output']>;
};

export enum FinancialMovementScalarFieldEnum {
  CreatedAt = 'createdAt',
  Date = 'date',
  Id = 'id',
  ProviderOrderId = 'providerOrderId',
  SaleId = 'saleId',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  Value = 'value'
}

export type FinancialMovementScalarWhereInput = {
  AND?: InputMaybe<Array<FinancialMovementScalarWhereInput>>;
  NOT?: InputMaybe<Array<FinancialMovementScalarWhereInput>>;
  OR?: InputMaybe<Array<FinancialMovementScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  providerOrderId?: InputMaybe<StringNullableFilter>;
  saleId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumFinancialMovementTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<IntFilter>;
};

export type FinancialMovementSumAggregate = {
  __typename?: 'FinancialMovementSumAggregate';
  value?: Maybe<Scalars['Int']['output']>;
};

export enum FinancialMovementType {
  Manual = 'MANUAL',
  ProviderOrder = 'PROVIDER_ORDER',
  Sale = 'SALE'
}

export type FinancialMovementUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  providerOrder?: InputMaybe<ProviderOrderUpdateOneWithoutFinancialMovementsNestedInput>;
  sale?: InputMaybe<SaleUpdateOneWithoutFinancialMovementNestedInput>;
  type?: InputMaybe<EnumFinancialMovementTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type FinancialMovementUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumFinancialMovementTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type FinancialMovementUpdateManyWithWhereWithoutProviderOrderInput = {
  data: FinancialMovementUpdateManyMutationInput;
  where: FinancialMovementScalarWhereInput;
};

export type FinancialMovementUpdateManyWithWhereWithoutSaleInput = {
  data: FinancialMovementUpdateManyMutationInput;
  where: FinancialMovementScalarWhereInput;
};

export type FinancialMovementUpdateManyWithoutProviderOrderNestedInput = {
  connect?: InputMaybe<Array<FinancialMovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FinancialMovementCreateOrConnectWithoutProviderOrderInput>>;
  create?: InputMaybe<Array<FinancialMovementCreateWithoutProviderOrderInput>>;
  createMany?: InputMaybe<FinancialMovementCreateManyProviderOrderInputEnvelope>;
  delete?: InputMaybe<Array<FinancialMovementWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FinancialMovementScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FinancialMovementWhereUniqueInput>>;
  set?: InputMaybe<Array<FinancialMovementWhereUniqueInput>>;
  update?: InputMaybe<Array<FinancialMovementUpdateWithWhereUniqueWithoutProviderOrderInput>>;
  updateMany?: InputMaybe<Array<FinancialMovementUpdateManyWithWhereWithoutProviderOrderInput>>;
  upsert?: InputMaybe<Array<FinancialMovementUpsertWithWhereUniqueWithoutProviderOrderInput>>;
};

export type FinancialMovementUpdateManyWithoutSaleNestedInput = {
  connect?: InputMaybe<Array<FinancialMovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FinancialMovementCreateOrConnectWithoutSaleInput>>;
  create?: InputMaybe<Array<FinancialMovementCreateWithoutSaleInput>>;
  createMany?: InputMaybe<FinancialMovementCreateManySaleInputEnvelope>;
  delete?: InputMaybe<Array<FinancialMovementWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FinancialMovementScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FinancialMovementWhereUniqueInput>>;
  set?: InputMaybe<Array<FinancialMovementWhereUniqueInput>>;
  update?: InputMaybe<Array<FinancialMovementUpdateWithWhereUniqueWithoutSaleInput>>;
  updateMany?: InputMaybe<Array<FinancialMovementUpdateManyWithWhereWithoutSaleInput>>;
  upsert?: InputMaybe<Array<FinancialMovementUpsertWithWhereUniqueWithoutSaleInput>>;
};

export type FinancialMovementUpdateWithWhereUniqueWithoutProviderOrderInput = {
  data: FinancialMovementUpdateWithoutProviderOrderInput;
  where: FinancialMovementWhereUniqueInput;
};

export type FinancialMovementUpdateWithWhereUniqueWithoutSaleInput = {
  data: FinancialMovementUpdateWithoutSaleInput;
  where: FinancialMovementWhereUniqueInput;
};

export type FinancialMovementUpdateWithoutProviderOrderInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  sale?: InputMaybe<SaleUpdateOneWithoutFinancialMovementNestedInput>;
  type?: InputMaybe<EnumFinancialMovementTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type FinancialMovementUpdateWithoutSaleInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  providerOrder?: InputMaybe<ProviderOrderUpdateOneWithoutFinancialMovementsNestedInput>;
  type?: InputMaybe<EnumFinancialMovementTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type FinancialMovementUpsertWithWhereUniqueWithoutProviderOrderInput = {
  create: FinancialMovementCreateWithoutProviderOrderInput;
  update: FinancialMovementUpdateWithoutProviderOrderInput;
  where: FinancialMovementWhereUniqueInput;
};

export type FinancialMovementUpsertWithWhereUniqueWithoutSaleInput = {
  create: FinancialMovementCreateWithoutSaleInput;
  update: FinancialMovementUpdateWithoutSaleInput;
  where: FinancialMovementWhereUniqueInput;
};

export type FinancialMovementWhereInput = {
  AND?: InputMaybe<Array<FinancialMovementWhereInput>>;
  NOT?: InputMaybe<Array<FinancialMovementWhereInput>>;
  OR?: InputMaybe<Array<FinancialMovementWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  providerOrder?: InputMaybe<ProviderOrderNullableScalarRelationFilter>;
  providerOrderId?: InputMaybe<StringNullableFilter>;
  sale?: InputMaybe<SaleNullableScalarRelationFilter>;
  saleId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumFinancialMovementTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<IntFilter>;
};

export type FinancialMovementWhereUniqueInput = {
  AND?: InputMaybe<Array<FinancialMovementWhereInput>>;
  NOT?: InputMaybe<Array<FinancialMovementWhereInput>>;
  OR?: InputMaybe<Array<FinancialMovementWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  providerOrder?: InputMaybe<ProviderOrderNullableScalarRelationFilter>;
  providerOrderId?: InputMaybe<Scalars['String']['input']>;
  sale?: InputMaybe<SaleNullableScalarRelationFilter>;
  saleId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumFinancialMovementTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<IntFilter>;
};

export type FinancialMovementsOutput = {
  __typename?: 'FinancialMovementsOutput';
  nodes: Array<FinancialMovement>;
  /** Pagination info for findMany requests */
  pageInfo?: Maybe<FinancialMovementPaginated>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum MainExceptionKeys {
  ProviderUqDocumentConflict = 'Provider_UQ_document_conflict',
  ProviderUqEmailConflict = 'Provider_UQ_email_conflict',
  ProviderUqNameConflict = 'Provider_UQ_name_conflict',
  SaleItemUqCostIsPostPaidProductIdSaleId = 'SaleItem_UQ_costIsPostPaid_productId_saleId',
  SalePaidCostZeroPaidValueBadRequest = 'SalePaidCost_zero_paidValue_badRequest',
  SaleSaleItemZeroLengthBadRequest = 'Sale_SaleItem_zero_length_badRequest',
  UserUqEmailConflict = 'User_UQ_email_conflict'
}

export type Mutation = {
  __typename?: 'Mutation';
  createFinancialMovement: FinancialMovement;
  createProduct: Product;
  createProvider: Provider;
  createProviderOrder: ProviderOrder;
  createProviders: Scalars['Boolean']['output'];
  createSale?: Maybe<Sale>;
  deleteFinancialMovement: Scalars['Boolean']['output'];
  deleteProduct: Product;
  deleteProvider: Provider;
  deleteProviderOrder: Scalars['Boolean']['output'];
  deleteSale?: Maybe<Sale>;
  updateFinancialMovement: FinancialMovement;
  updateProduct: Product;
  updateProvider: Provider;
  updateProviderOrder: ProviderOrder;
  updateSale?: Maybe<Sale>;
};


export type MutationCreateFinancialMovementArgs = {
  data: FinancialMovementCreateInput;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateProviderArgs = {
  data: ProviderCreateInput;
};


export type MutationCreateProviderOrderArgs = {
  data: ProviderOrderCreateInput;
};


export type MutationCreateProvidersArgs = {
  data: Array<ProviderCreateManyInput>;
};


export type MutationCreateSaleArgs = {
  data: SaleCreateInputCustom;
};


export type MutationDeleteFinancialMovementArgs = {
  where: FinancialMovementWhereUniqueInput;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteProviderArgs = {
  where: ProviderWhereUniqueInput;
};


export type MutationDeleteProviderOrderArgs = {
  where: ProviderOrderWhereUniqueInput;
};


export type MutationDeleteSaleArgs = {
  where: SaleWhereUniqueInput;
};


export type MutationUpdateFinancialMovementArgs = {
  data: FinancialMovementUpdateInput;
  where: FinancialMovementWhereUniqueInput;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateProviderArgs = {
  data: ProviderUpdateInput;
  where: ProviderWhereUniqueInput;
};


export type MutationUpdateProviderOrderArgs = {
  data: ProviderOrderUpdateInput;
  where: ProviderOrderWhereUniqueInput;
};


export type MutationUpdateSaleArgs = {
  data: SaleUpdateInputCustom;
  where: SaleWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumFinancialMovementTypeFilter = {
  equals?: InputMaybe<FinancialMovementType>;
  in?: InputMaybe<Array<FinancialMovementType>>;
  not?: InputMaybe<NestedEnumFinancialMovementTypeFilter>;
  notIn?: InputMaybe<Array<FinancialMovementType>>;
};

export type NestedEnumProductMovementGroupTypeFilter = {
  equals?: InputMaybe<ProductMovementGroupType>;
  in?: InputMaybe<Array<ProductMovementGroupType>>;
  not?: InputMaybe<NestedEnumProductMovementGroupTypeFilter>;
  notIn?: InputMaybe<Array<ProductMovementGroupType>>;
};

export type NestedEnumProductMovementTypeFilter = {
  equals?: InputMaybe<ProductMovementType>;
  in?: InputMaybe<Array<ProductMovementType>>;
  not?: InputMaybe<NestedEnumProductMovementTypeFilter>;
  notIn?: InputMaybe<Array<ProductMovementType>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
  unset?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product = {
  __typename?: 'Product';
  _count: ProductCount;
  blameUser?: Maybe<User>;
  /** FK: User.id - User to blame for */
  blameUserId?: Maybe<Scalars['String']['output']>;
  /** Brand name */
  brandName?: Maybe<Scalars['String']['output']>;
  /** Product Controls Qty */
  controlsQty: Scalars['Boolean']['output'];
  /** Cost value */
  costValue: Scalars['Int']['output'];
  costValueDecimal: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  errors?: Maybe<MainExceptionKeys>;
  /** ID */
  id: Scalars['ID']['output'];
  /** Cost is post paid? (consigned) */
  isPostPaid: Scalars['Boolean']['output'];
  /** Name */
  name: Scalars['String']['output'];
  netMarginPercent: Scalars['Float']['output'];
  netMarginValue: Scalars['Float']['output'];
  /** Retail price */
  priceValue: Scalars['Int']['output'];
  priceValueDecimal: Scalars['Float']['output'];
  provider?: Maybe<Provider>;
  /** FK: Provider.id */
  providerId?: Maybe<Scalars['String']['output']>;
  /** Qty in stock */
  qty: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  costValue?: Maybe<Scalars['Float']['output']>;
  priceValue?: Maybe<Scalars['Float']['output']>;
  qty?: Maybe<Scalars['Float']['output']>;
};

export type ProductCount = {
  __typename?: 'ProductCount';
  ProductMovements: Scalars['Int']['output'];
  ProviderOrderItem: Scalars['Int']['output'];
  SaleItems: Scalars['Int']['output'];
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  _all: Scalars['Int']['output'];
  blameUserId: Scalars['Int']['output'];
  brandName: Scalars['Int']['output'];
  controlsQty: Scalars['Int']['output'];
  costValue: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isPostPaid: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  priceValue: Scalars['Int']['output'];
  providerId: Scalars['Int']['output'];
  qty: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ProductCreateInput = {
  ProductMovements?: InputMaybe<ProductMovementCreateNestedManyWithoutProductInput>;
  ProviderOrderItem?: InputMaybe<ProviderOrderItemCreateNestedManyWithoutProductInput>;
  SaleItems?: InputMaybe<SaleItemCreateNestedManyWithoutProductInput>;
  blameUser?: InputMaybe<UserCreateNestedOneWithoutProductsInput>;
  brandName?: InputMaybe<Scalars['String']['input']>;
  controlsQty?: InputMaybe<Scalars['Boolean']['input']>;
  costValue: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isPostPaid: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  priceValue: Scalars['Int']['input'];
  provider?: InputMaybe<ProviderCreateNestedOneWithoutProductsInput>;
  qty?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductCreateManyBlameUserInput = {
  brandName?: InputMaybe<Scalars['String']['input']>;
  controlsQty?: InputMaybe<Scalars['Boolean']['input']>;
  costValue: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isPostPaid: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  priceValue: Scalars['Int']['input'];
  providerId?: InputMaybe<Scalars['String']['input']>;
  qty?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductCreateManyBlameUserInputEnvelope = {
  data: Array<ProductCreateManyBlameUserInput>;
};

export type ProductCreateManyProviderInput = {
  blameUserId?: InputMaybe<Scalars['String']['input']>;
  brandName?: InputMaybe<Scalars['String']['input']>;
  controlsQty?: InputMaybe<Scalars['Boolean']['input']>;
  costValue: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isPostPaid: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  priceValue: Scalars['Int']['input'];
  qty?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductCreateManyProviderInputEnvelope = {
  data: Array<ProductCreateManyProviderInput>;
};

export type ProductCreateNestedManyWithoutBlameUserInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutBlameUserInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutBlameUserInput>>;
  createMany?: InputMaybe<ProductCreateManyBlameUserInputEnvelope>;
};

export type ProductCreateNestedManyWithoutProviderInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutProviderInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutProviderInput>>;
  createMany?: InputMaybe<ProductCreateManyProviderInputEnvelope>;
};

export type ProductCreateNestedOneWithoutProductMovementsInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductMovementsInput>;
  create?: InputMaybe<ProductCreateWithoutProductMovementsInput>;
};

export type ProductCreateNestedOneWithoutProviderOrderItemInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProviderOrderItemInput>;
  create?: InputMaybe<ProductCreateWithoutProviderOrderItemInput>;
};

export type ProductCreateNestedOneWithoutSaleItemsInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutSaleItemsInput>;
  create?: InputMaybe<ProductCreateWithoutSaleItemsInput>;
};

export type ProductCreateOrConnectWithoutBlameUserInput = {
  create: ProductCreateWithoutBlameUserInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutProductMovementsInput = {
  create: ProductCreateWithoutProductMovementsInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutProviderInput = {
  create: ProductCreateWithoutProviderInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutProviderOrderItemInput = {
  create: ProductCreateWithoutProviderOrderItemInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutSaleItemsInput = {
  create: ProductCreateWithoutSaleItemsInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutBlameUserInput = {
  ProductMovements?: InputMaybe<ProductMovementCreateNestedManyWithoutProductInput>;
  ProviderOrderItem?: InputMaybe<ProviderOrderItemCreateNestedManyWithoutProductInput>;
  SaleItems?: InputMaybe<SaleItemCreateNestedManyWithoutProductInput>;
  brandName?: InputMaybe<Scalars['String']['input']>;
  controlsQty?: InputMaybe<Scalars['Boolean']['input']>;
  costValue: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isPostPaid: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  priceValue: Scalars['Int']['input'];
  provider?: InputMaybe<ProviderCreateNestedOneWithoutProductsInput>;
  qty?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductCreateWithoutProductMovementsInput = {
  ProviderOrderItem?: InputMaybe<ProviderOrderItemCreateNestedManyWithoutProductInput>;
  SaleItems?: InputMaybe<SaleItemCreateNestedManyWithoutProductInput>;
  blameUser?: InputMaybe<UserCreateNestedOneWithoutProductsInput>;
  brandName?: InputMaybe<Scalars['String']['input']>;
  controlsQty?: InputMaybe<Scalars['Boolean']['input']>;
  costValue: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isPostPaid: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  priceValue: Scalars['Int']['input'];
  provider?: InputMaybe<ProviderCreateNestedOneWithoutProductsInput>;
  qty?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductCreateWithoutProviderInput = {
  ProductMovements?: InputMaybe<ProductMovementCreateNestedManyWithoutProductInput>;
  ProviderOrderItem?: InputMaybe<ProviderOrderItemCreateNestedManyWithoutProductInput>;
  SaleItems?: InputMaybe<SaleItemCreateNestedManyWithoutProductInput>;
  blameUser?: InputMaybe<UserCreateNestedOneWithoutProductsInput>;
  brandName?: InputMaybe<Scalars['String']['input']>;
  controlsQty?: InputMaybe<Scalars['Boolean']['input']>;
  costValue: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isPostPaid: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  priceValue: Scalars['Int']['input'];
  qty?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductCreateWithoutProviderOrderItemInput = {
  ProductMovements?: InputMaybe<ProductMovementCreateNestedManyWithoutProductInput>;
  SaleItems?: InputMaybe<SaleItemCreateNestedManyWithoutProductInput>;
  blameUser?: InputMaybe<UserCreateNestedOneWithoutProductsInput>;
  brandName?: InputMaybe<Scalars['String']['input']>;
  controlsQty?: InputMaybe<Scalars['Boolean']['input']>;
  costValue: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isPostPaid: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  priceValue: Scalars['Int']['input'];
  provider?: InputMaybe<ProviderCreateNestedOneWithoutProductsInput>;
  qty?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductCreateWithoutSaleItemsInput = {
  ProductMovements?: InputMaybe<ProductMovementCreateNestedManyWithoutProductInput>;
  ProviderOrderItem?: InputMaybe<ProviderOrderItemCreateNestedManyWithoutProductInput>;
  blameUser?: InputMaybe<UserCreateNestedOneWithoutProductsInput>;
  brandName?: InputMaybe<Scalars['String']['input']>;
  controlsQty?: InputMaybe<Scalars['Boolean']['input']>;
  costValue: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isPostPaid: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  priceValue: Scalars['Int']['input'];
  provider?: InputMaybe<ProviderCreateNestedOneWithoutProductsInput>;
  qty?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductListRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  blameUserId?: Maybe<Scalars['String']['output']>;
  brandName?: Maybe<Scalars['String']['output']>;
  controlsQty?: Maybe<Scalars['Boolean']['output']>;
  costValue?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isPostPaid?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  priceValue?: Maybe<Scalars['Int']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  qty?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  blameUserId?: Maybe<Scalars['String']['output']>;
  brandName?: Maybe<Scalars['String']['output']>;
  controlsQty?: Maybe<Scalars['Boolean']['output']>;
  costValue?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isPostPaid?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  priceValue?: Maybe<Scalars['Int']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  qty?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductMovementAvgAggregate = {
  __typename?: 'ProductMovementAvgAggregate';
  quantity?: Maybe<Scalars['Float']['output']>;
};

export type ProductMovementCountAggregate = {
  __typename?: 'ProductMovementCountAggregate';
  _all: Scalars['Int']['output'];
  blameUserId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  productId: Scalars['Int']['output'];
  productMovementGroupId: Scalars['Int']['output'];
  providerOrderItemId: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  saleItemId: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ProductMovementCreateManyBlameUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
  productMovementGroupId?: InputMaybe<Scalars['String']['input']>;
  providerOrderItemId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  saleItemId?: InputMaybe<Scalars['String']['input']>;
  type: ProductMovementType;
};

export type ProductMovementCreateManyBlameUserInputEnvelope = {
  data: Array<ProductMovementCreateManyBlameUserInput>;
};

export type ProductMovementCreateManyProductInput = {
  blameUserId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  productMovementGroupId?: InputMaybe<Scalars['String']['input']>;
  providerOrderItemId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  saleItemId?: InputMaybe<Scalars['String']['input']>;
  type: ProductMovementType;
};

export type ProductMovementCreateManyProductInputEnvelope = {
  data: Array<ProductMovementCreateManyProductInput>;
};

export type ProductMovementCreateManyProductMovementGroupInput = {
  blameUserId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
  providerOrderItemId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  saleItemId?: InputMaybe<Scalars['String']['input']>;
  type: ProductMovementType;
};

export type ProductMovementCreateManyProductMovementGroupInputEnvelope = {
  data: Array<ProductMovementCreateManyProductMovementGroupInput>;
};

export type ProductMovementCreateManyProviderOrderItemInput = {
  blameUserId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
  productMovementGroupId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  saleItemId?: InputMaybe<Scalars['String']['input']>;
  type: ProductMovementType;
};

export type ProductMovementCreateManyProviderOrderItemInputEnvelope = {
  data: Array<ProductMovementCreateManyProviderOrderItemInput>;
};

export type ProductMovementCreateManySaleItemInput = {
  blameUserId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
  productMovementGroupId?: InputMaybe<Scalars['String']['input']>;
  providerOrderItemId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  type: ProductMovementType;
};

export type ProductMovementCreateManySaleItemInputEnvelope = {
  data: Array<ProductMovementCreateManySaleItemInput>;
};

export type ProductMovementCreateNestedManyWithoutBlameUserInput = {
  connect?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductMovementCreateOrConnectWithoutBlameUserInput>>;
  create?: InputMaybe<Array<ProductMovementCreateWithoutBlameUserInput>>;
  createMany?: InputMaybe<ProductMovementCreateManyBlameUserInputEnvelope>;
};

export type ProductMovementCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductMovementCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductMovementCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductMovementCreateManyProductInputEnvelope>;
};

export type ProductMovementCreateNestedManyWithoutProductMovementGroupInput = {
  connect?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductMovementCreateOrConnectWithoutProductMovementGroupInput>>;
  create?: InputMaybe<Array<ProductMovementCreateWithoutProductMovementGroupInput>>;
  createMany?: InputMaybe<ProductMovementCreateManyProductMovementGroupInputEnvelope>;
};

export type ProductMovementCreateNestedManyWithoutProviderOrderItemInput = {
  connect?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductMovementCreateOrConnectWithoutProviderOrderItemInput>>;
  create?: InputMaybe<Array<ProductMovementCreateWithoutProviderOrderItemInput>>;
  createMany?: InputMaybe<ProductMovementCreateManyProviderOrderItemInputEnvelope>;
};

export type ProductMovementCreateNestedManyWithoutSaleItemInput = {
  connect?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductMovementCreateOrConnectWithoutSaleItemInput>>;
  create?: InputMaybe<Array<ProductMovementCreateWithoutSaleItemInput>>;
  createMany?: InputMaybe<ProductMovementCreateManySaleItemInputEnvelope>;
};

export type ProductMovementCreateOrConnectWithoutBlameUserInput = {
  create: ProductMovementCreateWithoutBlameUserInput;
  where: ProductMovementWhereUniqueInput;
};

export type ProductMovementCreateOrConnectWithoutProductInput = {
  create: ProductMovementCreateWithoutProductInput;
  where: ProductMovementWhereUniqueInput;
};

export type ProductMovementCreateOrConnectWithoutProductMovementGroupInput = {
  create: ProductMovementCreateWithoutProductMovementGroupInput;
  where: ProductMovementWhereUniqueInput;
};

export type ProductMovementCreateOrConnectWithoutProviderOrderItemInput = {
  create: ProductMovementCreateWithoutProviderOrderItemInput;
  where: ProductMovementWhereUniqueInput;
};

export type ProductMovementCreateOrConnectWithoutSaleItemInput = {
  create: ProductMovementCreateWithoutSaleItemInput;
  where: ProductMovementWhereUniqueInput;
};

export type ProductMovementCreateWithoutBlameUserInput = {
  Product: ProductCreateNestedOneWithoutProductMovementsInput;
  ProductMovementGroup?: InputMaybe<ProductMovementGroupCreateNestedOneWithoutProductMovementsInput>;
  SaleItem?: InputMaybe<SaleItemCreateNestedOneWithoutProductMovementsInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  providerOrderItem?: InputMaybe<ProviderOrderItemCreateNestedOneWithoutProductMovementsInput>;
  quantity: Scalars['Int']['input'];
  type: ProductMovementType;
};

export type ProductMovementCreateWithoutProductInput = {
  ProductMovementGroup?: InputMaybe<ProductMovementGroupCreateNestedOneWithoutProductMovementsInput>;
  SaleItem?: InputMaybe<SaleItemCreateNestedOneWithoutProductMovementsInput>;
  blameUser?: InputMaybe<UserCreateNestedOneWithoutProductMovementsInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  providerOrderItem?: InputMaybe<ProviderOrderItemCreateNestedOneWithoutProductMovementsInput>;
  quantity: Scalars['Int']['input'];
  type: ProductMovementType;
};

export type ProductMovementCreateWithoutProductMovementGroupInput = {
  Product: ProductCreateNestedOneWithoutProductMovementsInput;
  SaleItem?: InputMaybe<SaleItemCreateNestedOneWithoutProductMovementsInput>;
  blameUser?: InputMaybe<UserCreateNestedOneWithoutProductMovementsInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  providerOrderItem?: InputMaybe<ProviderOrderItemCreateNestedOneWithoutProductMovementsInput>;
  quantity: Scalars['Int']['input'];
  type: ProductMovementType;
};

export type ProductMovementCreateWithoutProviderOrderItemInput = {
  Product: ProductCreateNestedOneWithoutProductMovementsInput;
  ProductMovementGroup?: InputMaybe<ProductMovementGroupCreateNestedOneWithoutProductMovementsInput>;
  SaleItem?: InputMaybe<SaleItemCreateNestedOneWithoutProductMovementsInput>;
  blameUser?: InputMaybe<UserCreateNestedOneWithoutProductMovementsInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  type: ProductMovementType;
};

export type ProductMovementCreateWithoutSaleItemInput = {
  Product: ProductCreateNestedOneWithoutProductMovementsInput;
  ProductMovementGroup?: InputMaybe<ProductMovementGroupCreateNestedOneWithoutProductMovementsInput>;
  blameUser?: InputMaybe<UserCreateNestedOneWithoutProductMovementsInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  providerOrderItem?: InputMaybe<ProviderOrderItemCreateNestedOneWithoutProductMovementsInput>;
  quantity: Scalars['Int']['input'];
  type: ProductMovementType;
};

export type ProductMovementGroupCount = {
  __typename?: 'ProductMovementGroupCount';
  ProductMovements: Scalars['Int']['output'];
};

export type ProductMovementGroupCountAggregate = {
  __typename?: 'ProductMovementGroupCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  documentId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  providerId: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
};

export type ProductMovementGroupCreateManyProviderInput = {
  documentId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  type: ProductMovementGroupType;
};

export type ProductMovementGroupCreateManyProviderInputEnvelope = {
  data: Array<ProductMovementGroupCreateManyProviderInput>;
};

export type ProductMovementGroupCreateNestedManyWithoutProviderInput = {
  connect?: InputMaybe<Array<ProductMovementGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductMovementGroupCreateOrConnectWithoutProviderInput>>;
  create?: InputMaybe<Array<ProductMovementGroupCreateWithoutProviderInput>>;
  createMany?: InputMaybe<ProductMovementGroupCreateManyProviderInputEnvelope>;
};

export type ProductMovementGroupCreateNestedOneWithoutProductMovementsInput = {
  connect?: InputMaybe<ProductMovementGroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductMovementGroupCreateOrConnectWithoutProductMovementsInput>;
  create?: InputMaybe<ProductMovementGroupCreateWithoutProductMovementsInput>;
};

export type ProductMovementGroupCreateOrConnectWithoutProductMovementsInput = {
  create: ProductMovementGroupCreateWithoutProductMovementsInput;
  where: ProductMovementGroupWhereUniqueInput;
};

export type ProductMovementGroupCreateOrConnectWithoutProviderInput = {
  create: ProductMovementGroupCreateWithoutProviderInput;
  where: ProductMovementGroupWhereUniqueInput;
};

export type ProductMovementGroupCreateWithoutProductMovementsInput = {
  Provider?: InputMaybe<ProviderCreateNestedOneWithoutProductMovementGroupInput>;
  documentId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  type: ProductMovementGroupType;
};

export type ProductMovementGroupCreateWithoutProviderInput = {
  ProductMovements?: InputMaybe<ProductMovementCreateNestedManyWithoutProductMovementGroupInput>;
  documentId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  type: ProductMovementGroupType;
};

export type ProductMovementGroupListRelationFilter = {
  every?: InputMaybe<ProductMovementGroupWhereInput>;
  none?: InputMaybe<ProductMovementGroupWhereInput>;
  some?: InputMaybe<ProductMovementGroupWhereInput>;
};

export type ProductMovementGroupMaxAggregate = {
  __typename?: 'ProductMovementGroupMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ProductMovementGroupType>;
};

export type ProductMovementGroupMinAggregate = {
  __typename?: 'ProductMovementGroupMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ProductMovementGroupType>;
};

export type ProductMovementGroupNullableScalarRelationFilter = {
  is?: InputMaybe<ProductMovementGroupWhereInput>;
  isNot?: InputMaybe<ProductMovementGroupWhereInput>;
};

export type ProductMovementGroupOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductMovementGroupScalarWhereInput = {
  AND?: InputMaybe<Array<ProductMovementGroupScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductMovementGroupScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductMovementGroupScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  documentId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  providerId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumProductMovementGroupTypeFilter>;
};

export enum ProductMovementGroupType {
  Manual = 'MANUAL',
  Receival = 'RECEIVAL'
}

export type ProductMovementGroupTypeProviderIdDocumentIdCompoundUniqueInput = {
  documentId: Scalars['String']['input'];
  providerId: Scalars['String']['input'];
  type: ProductMovementGroupType;
};

export type ProductMovementGroupUpdateManyMutationInput = {
  documentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductMovementGroupTypeFieldUpdateOperationsInput>;
};

export type ProductMovementGroupUpdateManyWithWhereWithoutProviderInput = {
  data: ProductMovementGroupUpdateManyMutationInput;
  where: ProductMovementGroupScalarWhereInput;
};

export type ProductMovementGroupUpdateManyWithoutProviderNestedInput = {
  connect?: InputMaybe<Array<ProductMovementGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductMovementGroupCreateOrConnectWithoutProviderInput>>;
  create?: InputMaybe<Array<ProductMovementGroupCreateWithoutProviderInput>>;
  createMany?: InputMaybe<ProductMovementGroupCreateManyProviderInputEnvelope>;
  delete?: InputMaybe<Array<ProductMovementGroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductMovementGroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductMovementGroupWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductMovementGroupWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductMovementGroupUpdateWithWhereUniqueWithoutProviderInput>>;
  updateMany?: InputMaybe<Array<ProductMovementGroupUpdateManyWithWhereWithoutProviderInput>>;
  upsert?: InputMaybe<Array<ProductMovementGroupUpsertWithWhereUniqueWithoutProviderInput>>;
};

export type ProductMovementGroupUpdateOneWithoutProductMovementsNestedInput = {
  connect?: InputMaybe<ProductMovementGroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductMovementGroupCreateOrConnectWithoutProductMovementsInput>;
  create?: InputMaybe<ProductMovementGroupCreateWithoutProductMovementsInput>;
  delete?: InputMaybe<ProductMovementGroupWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<ProductMovementGroupUpdateToOneWithWhereWithoutProductMovementsInput>;
  upsert?: InputMaybe<ProductMovementGroupUpsertWithoutProductMovementsInput>;
};

export type ProductMovementGroupUpdateToOneWithWhereWithoutProductMovementsInput = {
  data: ProductMovementGroupUpdateWithoutProductMovementsInput;
  where?: InputMaybe<ProductMovementGroupWhereInput>;
};

export type ProductMovementGroupUpdateWithWhereUniqueWithoutProviderInput = {
  data: ProductMovementGroupUpdateWithoutProviderInput;
  where: ProductMovementGroupWhereUniqueInput;
};

export type ProductMovementGroupUpdateWithoutProductMovementsInput = {
  Provider?: InputMaybe<ProviderUpdateOneWithoutProductMovementGroupNestedInput>;
  documentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductMovementGroupTypeFieldUpdateOperationsInput>;
};

export type ProductMovementGroupUpdateWithoutProviderInput = {
  ProductMovements?: InputMaybe<ProductMovementUpdateManyWithoutProductMovementGroupNestedInput>;
  documentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductMovementGroupTypeFieldUpdateOperationsInput>;
};

export type ProductMovementGroupUpsertWithWhereUniqueWithoutProviderInput = {
  create: ProductMovementGroupCreateWithoutProviderInput;
  update: ProductMovementGroupUpdateWithoutProviderInput;
  where: ProductMovementGroupWhereUniqueInput;
};

export type ProductMovementGroupUpsertWithoutProductMovementsInput = {
  create: ProductMovementGroupCreateWithoutProductMovementsInput;
  update: ProductMovementGroupUpdateWithoutProductMovementsInput;
  where?: InputMaybe<ProductMovementGroupWhereInput>;
};

export type ProductMovementGroupWhereInput = {
  AND?: InputMaybe<Array<ProductMovementGroupWhereInput>>;
  NOT?: InputMaybe<Array<ProductMovementGroupWhereInput>>;
  OR?: InputMaybe<Array<ProductMovementGroupWhereInput>>;
  ProductMovements?: InputMaybe<ProductMovementListRelationFilter>;
  Provider?: InputMaybe<ProviderNullableScalarRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  documentId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  providerId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumProductMovementGroupTypeFilter>;
};

export type ProductMovementGroupWhereUniqueInput = {
  AND?: InputMaybe<Array<ProductMovementGroupWhereInput>>;
  NOT?: InputMaybe<Array<ProductMovementGroupWhereInput>>;
  OR?: InputMaybe<Array<ProductMovementGroupWhereInput>>;
  ProductMovements?: InputMaybe<ProductMovementListRelationFilter>;
  Provider?: InputMaybe<ProviderNullableScalarRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  documentId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  providerId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumProductMovementGroupTypeFilter>;
  type_providerId_documentId?: InputMaybe<ProductMovementGroupTypeProviderIdDocumentIdCompoundUniqueInput>;
};

export type ProductMovementListRelationFilter = {
  every?: InputMaybe<ProductMovementWhereInput>;
  none?: InputMaybe<ProductMovementWhereInput>;
  some?: InputMaybe<ProductMovementWhereInput>;
};

export type ProductMovementMaxAggregate = {
  __typename?: 'ProductMovementMaxAggregate';
  blameUserId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  productMovementGroupId?: Maybe<Scalars['String']['output']>;
  providerOrderItemId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  saleItemId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ProductMovementType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductMovementMinAggregate = {
  __typename?: 'ProductMovementMinAggregate';
  blameUserId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  productMovementGroupId?: Maybe<Scalars['String']['output']>;
  providerOrderItemId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  saleItemId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ProductMovementType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductMovementOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductMovementScalarWhereInput = {
  AND?: InputMaybe<Array<ProductMovementScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductMovementScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductMovementScalarWhereInput>>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
  productMovementGroupId?: InputMaybe<StringNullableFilter>;
  providerOrderItemId?: InputMaybe<StringNullableFilter>;
  quantity?: InputMaybe<IntFilter>;
  saleItemId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumProductMovementTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductMovementSumAggregate = {
  __typename?: 'ProductMovementSumAggregate';
  quantity?: Maybe<Scalars['Int']['output']>;
};

export enum ProductMovementType {
  Initial = 'INITIAL',
  Manual = 'MANUAL',
  ProviderOrder = 'PROVIDER_ORDER',
  Sale = 'SALE',
  SaleDelete = 'SALE_DELETE',
  SaleEdit = 'SALE_EDIT'
}

export type ProductMovementUpdateManyMutationInput = {
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductMovementTypeFieldUpdateOperationsInput>;
};

export type ProductMovementUpdateManyWithWhereWithoutBlameUserInput = {
  data: ProductMovementUpdateManyMutationInput;
  where: ProductMovementScalarWhereInput;
};

export type ProductMovementUpdateManyWithWhereWithoutProductInput = {
  data: ProductMovementUpdateManyMutationInput;
  where: ProductMovementScalarWhereInput;
};

export type ProductMovementUpdateManyWithWhereWithoutProductMovementGroupInput = {
  data: ProductMovementUpdateManyMutationInput;
  where: ProductMovementScalarWhereInput;
};

export type ProductMovementUpdateManyWithWhereWithoutProviderOrderItemInput = {
  data: ProductMovementUpdateManyMutationInput;
  where: ProductMovementScalarWhereInput;
};

export type ProductMovementUpdateManyWithWhereWithoutSaleItemInput = {
  data: ProductMovementUpdateManyMutationInput;
  where: ProductMovementScalarWhereInput;
};

export type ProductMovementUpdateManyWithoutBlameUserNestedInput = {
  connect?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductMovementCreateOrConnectWithoutBlameUserInput>>;
  create?: InputMaybe<Array<ProductMovementCreateWithoutBlameUserInput>>;
  createMany?: InputMaybe<ProductMovementCreateManyBlameUserInputEnvelope>;
  delete?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductMovementScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductMovementUpdateWithWhereUniqueWithoutBlameUserInput>>;
  updateMany?: InputMaybe<Array<ProductMovementUpdateManyWithWhereWithoutBlameUserInput>>;
  upsert?: InputMaybe<Array<ProductMovementUpsertWithWhereUniqueWithoutBlameUserInput>>;
};

export type ProductMovementUpdateManyWithoutProductMovementGroupNestedInput = {
  connect?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductMovementCreateOrConnectWithoutProductMovementGroupInput>>;
  create?: InputMaybe<Array<ProductMovementCreateWithoutProductMovementGroupInput>>;
  createMany?: InputMaybe<ProductMovementCreateManyProductMovementGroupInputEnvelope>;
  delete?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductMovementScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductMovementUpdateWithWhereUniqueWithoutProductMovementGroupInput>>;
  updateMany?: InputMaybe<Array<ProductMovementUpdateManyWithWhereWithoutProductMovementGroupInput>>;
  upsert?: InputMaybe<Array<ProductMovementUpsertWithWhereUniqueWithoutProductMovementGroupInput>>;
};

export type ProductMovementUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductMovementCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductMovementCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductMovementCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductMovementScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductMovementUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<ProductMovementUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<ProductMovementUpsertWithWhereUniqueWithoutProductInput>>;
};

export type ProductMovementUpdateManyWithoutProviderOrderItemNestedInput = {
  connect?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductMovementCreateOrConnectWithoutProviderOrderItemInput>>;
  create?: InputMaybe<Array<ProductMovementCreateWithoutProviderOrderItemInput>>;
  createMany?: InputMaybe<ProductMovementCreateManyProviderOrderItemInputEnvelope>;
  delete?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductMovementScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductMovementUpdateWithWhereUniqueWithoutProviderOrderItemInput>>;
  updateMany?: InputMaybe<Array<ProductMovementUpdateManyWithWhereWithoutProviderOrderItemInput>>;
  upsert?: InputMaybe<Array<ProductMovementUpsertWithWhereUniqueWithoutProviderOrderItemInput>>;
};

export type ProductMovementUpdateManyWithoutSaleItemNestedInput = {
  connect?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductMovementCreateOrConnectWithoutSaleItemInput>>;
  create?: InputMaybe<Array<ProductMovementCreateWithoutSaleItemInput>>;
  createMany?: InputMaybe<ProductMovementCreateManySaleItemInputEnvelope>;
  delete?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductMovementScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductMovementWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductMovementUpdateWithWhereUniqueWithoutSaleItemInput>>;
  updateMany?: InputMaybe<Array<ProductMovementUpdateManyWithWhereWithoutSaleItemInput>>;
  upsert?: InputMaybe<Array<ProductMovementUpsertWithWhereUniqueWithoutSaleItemInput>>;
};

export type ProductMovementUpdateWithWhereUniqueWithoutBlameUserInput = {
  data: ProductMovementUpdateWithoutBlameUserInput;
  where: ProductMovementWhereUniqueInput;
};

export type ProductMovementUpdateWithWhereUniqueWithoutProductInput = {
  data: ProductMovementUpdateWithoutProductInput;
  where: ProductMovementWhereUniqueInput;
};

export type ProductMovementUpdateWithWhereUniqueWithoutProductMovementGroupInput = {
  data: ProductMovementUpdateWithoutProductMovementGroupInput;
  where: ProductMovementWhereUniqueInput;
};

export type ProductMovementUpdateWithWhereUniqueWithoutProviderOrderItemInput = {
  data: ProductMovementUpdateWithoutProviderOrderItemInput;
  where: ProductMovementWhereUniqueInput;
};

export type ProductMovementUpdateWithWhereUniqueWithoutSaleItemInput = {
  data: ProductMovementUpdateWithoutSaleItemInput;
  where: ProductMovementWhereUniqueInput;
};

export type ProductMovementUpdateWithoutBlameUserInput = {
  Product?: InputMaybe<ProductUpdateOneRequiredWithoutProductMovementsNestedInput>;
  ProductMovementGroup?: InputMaybe<ProductMovementGroupUpdateOneWithoutProductMovementsNestedInput>;
  SaleItem?: InputMaybe<SaleItemUpdateOneWithoutProductMovementsNestedInput>;
  providerOrderItem?: InputMaybe<ProviderOrderItemUpdateOneWithoutProductMovementsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductMovementTypeFieldUpdateOperationsInput>;
};

export type ProductMovementUpdateWithoutProductInput = {
  ProductMovementGroup?: InputMaybe<ProductMovementGroupUpdateOneWithoutProductMovementsNestedInput>;
  SaleItem?: InputMaybe<SaleItemUpdateOneWithoutProductMovementsNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneWithoutProductMovementsNestedInput>;
  providerOrderItem?: InputMaybe<ProviderOrderItemUpdateOneWithoutProductMovementsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductMovementTypeFieldUpdateOperationsInput>;
};

export type ProductMovementUpdateWithoutProductMovementGroupInput = {
  Product?: InputMaybe<ProductUpdateOneRequiredWithoutProductMovementsNestedInput>;
  SaleItem?: InputMaybe<SaleItemUpdateOneWithoutProductMovementsNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneWithoutProductMovementsNestedInput>;
  providerOrderItem?: InputMaybe<ProviderOrderItemUpdateOneWithoutProductMovementsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductMovementTypeFieldUpdateOperationsInput>;
};

export type ProductMovementUpdateWithoutProviderOrderItemInput = {
  Product?: InputMaybe<ProductUpdateOneRequiredWithoutProductMovementsNestedInput>;
  ProductMovementGroup?: InputMaybe<ProductMovementGroupUpdateOneWithoutProductMovementsNestedInput>;
  SaleItem?: InputMaybe<SaleItemUpdateOneWithoutProductMovementsNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneWithoutProductMovementsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductMovementTypeFieldUpdateOperationsInput>;
};

export type ProductMovementUpdateWithoutSaleItemInput = {
  Product?: InputMaybe<ProductUpdateOneRequiredWithoutProductMovementsNestedInput>;
  ProductMovementGroup?: InputMaybe<ProductMovementGroupUpdateOneWithoutProductMovementsNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneWithoutProductMovementsNestedInput>;
  providerOrderItem?: InputMaybe<ProviderOrderItemUpdateOneWithoutProductMovementsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductMovementTypeFieldUpdateOperationsInput>;
};

export type ProductMovementUpsertWithWhereUniqueWithoutBlameUserInput = {
  create: ProductMovementCreateWithoutBlameUserInput;
  update: ProductMovementUpdateWithoutBlameUserInput;
  where: ProductMovementWhereUniqueInput;
};

export type ProductMovementUpsertWithWhereUniqueWithoutProductInput = {
  create: ProductMovementCreateWithoutProductInput;
  update: ProductMovementUpdateWithoutProductInput;
  where: ProductMovementWhereUniqueInput;
};

export type ProductMovementUpsertWithWhereUniqueWithoutProductMovementGroupInput = {
  create: ProductMovementCreateWithoutProductMovementGroupInput;
  update: ProductMovementUpdateWithoutProductMovementGroupInput;
  where: ProductMovementWhereUniqueInput;
};

export type ProductMovementUpsertWithWhereUniqueWithoutProviderOrderItemInput = {
  create: ProductMovementCreateWithoutProviderOrderItemInput;
  update: ProductMovementUpdateWithoutProviderOrderItemInput;
  where: ProductMovementWhereUniqueInput;
};

export type ProductMovementUpsertWithWhereUniqueWithoutSaleItemInput = {
  create: ProductMovementCreateWithoutSaleItemInput;
  update: ProductMovementUpdateWithoutSaleItemInput;
  where: ProductMovementWhereUniqueInput;
};

export type ProductMovementWhereInput = {
  AND?: InputMaybe<Array<ProductMovementWhereInput>>;
  NOT?: InputMaybe<Array<ProductMovementWhereInput>>;
  OR?: InputMaybe<Array<ProductMovementWhereInput>>;
  Product?: InputMaybe<ProductScalarRelationFilter>;
  ProductMovementGroup?: InputMaybe<ProductMovementGroupNullableScalarRelationFilter>;
  SaleItem?: InputMaybe<SaleItemNullableScalarRelationFilter>;
  blameUser?: InputMaybe<UserNullableScalarRelationFilter>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
  productMovementGroupId?: InputMaybe<StringNullableFilter>;
  providerOrderItem?: InputMaybe<ProviderOrderItemNullableScalarRelationFilter>;
  providerOrderItemId?: InputMaybe<StringNullableFilter>;
  quantity?: InputMaybe<IntFilter>;
  saleItemId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumProductMovementTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductMovementWhereUniqueInput = {
  AND?: InputMaybe<Array<ProductMovementWhereInput>>;
  NOT?: InputMaybe<Array<ProductMovementWhereInput>>;
  OR?: InputMaybe<Array<ProductMovementWhereInput>>;
  Product?: InputMaybe<ProductScalarRelationFilter>;
  ProductMovementGroup?: InputMaybe<ProductMovementGroupNullableScalarRelationFilter>;
  SaleItem?: InputMaybe<SaleItemNullableScalarRelationFilter>;
  blameUser?: InputMaybe<UserNullableScalarRelationFilter>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<StringFilter>;
  productMovementGroupId?: InputMaybe<StringNullableFilter>;
  providerOrderItem?: InputMaybe<ProviderOrderItemNullableScalarRelationFilter>;
  providerOrderItemId?: InputMaybe<StringNullableFilter>;
  quantity?: InputMaybe<IntFilter>;
  saleItemId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumProductMovementTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  ProductMovements?: InputMaybe<ProductMovementOrderByRelationAggregateInput>;
  ProviderOrderItem?: InputMaybe<ProviderOrderItemOrderByRelationAggregateInput>;
  SaleItems?: InputMaybe<SaleItemOrderByRelationAggregateInput>;
  blameUser?: InputMaybe<UserOrderByWithRelationInput>;
  blameUserId?: InputMaybe<SortOrder>;
  brandName?: InputMaybe<SortOrder>;
  controlsQty?: InputMaybe<SortOrder>;
  costValue?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPostPaid?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  priceValue?: InputMaybe<SortOrder>;
  provider?: InputMaybe<ProviderOrderByWithRelationInput>;
  providerId?: InputMaybe<SortOrder>;
  qty?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductPaginated = {
  __typename?: 'ProductPaginated';
  /** Number of current page */
  currentPage?: Maybe<Scalars['Int']['output']>;
  /** Boolean to use on a cursor-based pagination. E.g: Mobile scroll */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** Number of last page */
  lastPage?: Maybe<Scalars['Int']['output']>;
  nextCursor?: Maybe<Scalars['Int']['output']>;
  /** Count for query results without skip, take and cursor */
  total?: Maybe<Scalars['Int']['output']>;
};

export enum ProductScalarFieldEnum {
  BlameUserId = 'blameUserId',
  BrandName = 'brandName',
  ControlsQty = 'controlsQty',
  CostValue = 'costValue',
  CreatedAt = 'createdAt',
  Id = 'id',
  IsPostPaid = 'isPostPaid',
  Name = 'name',
  PriceValue = 'priceValue',
  ProviderId = 'providerId',
  Qty = 'qty',
  UpdatedAt = 'updatedAt'
}

export type ProductScalarRelationFilter = {
  is?: InputMaybe<ProductWhereInput>;
  isNot?: InputMaybe<ProductWhereInput>;
};

export type ProductScalarWhereInput = {
  AND?: InputMaybe<Array<ProductScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereInput>>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  brandName?: InputMaybe<StringNullableFilter>;
  controlsQty?: InputMaybe<BoolFilter>;
  costValue?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isPostPaid?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  priceValue?: InputMaybe<IntFilter>;
  providerId?: InputMaybe<StringNullableFilter>;
  qty?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  costValue?: Maybe<Scalars['Int']['output']>;
  priceValue?: Maybe<Scalars['Int']['output']>;
  qty?: Maybe<Scalars['Int']['output']>;
};

export type ProductUpdateInput = {
  ProductMovements?: InputMaybe<ProductMovementUpdateManyWithoutProductNestedInput>;
  ProviderOrderItem?: InputMaybe<ProviderOrderItemUpdateManyWithoutProductNestedInput>;
  SaleItems?: InputMaybe<SaleItemUpdateManyWithoutProductNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneWithoutProductsNestedInput>;
  brandName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  controlsQty?: InputMaybe<BoolFieldUpdateOperationsInput>;
  costValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  isPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutProductsNestedInput>;
  qty?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ProductUpdateManyMutationInput = {
  brandName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  controlsQty?: InputMaybe<BoolFieldUpdateOperationsInput>;
  costValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  isPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  qty?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ProductUpdateManyWithWhereWithoutBlameUserInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithWhereWithoutProviderInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithoutBlameUserNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutBlameUserInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutBlameUserInput>>;
  createMany?: InputMaybe<ProductCreateManyBlameUserInputEnvelope>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutBlameUserInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutBlameUserInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutBlameUserInput>>;
};

export type ProductUpdateManyWithoutProviderNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutProviderInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutProviderInput>>;
  createMany?: InputMaybe<ProductCreateManyProviderInputEnvelope>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutProviderInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutProviderInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutProviderInput>>;
};

export type ProductUpdateOneRequiredWithoutProductMovementsNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductMovementsInput>;
  create?: InputMaybe<ProductCreateWithoutProductMovementsInput>;
  update?: InputMaybe<ProductUpdateToOneWithWhereWithoutProductMovementsInput>;
  upsert?: InputMaybe<ProductUpsertWithoutProductMovementsInput>;
};

export type ProductUpdateOneRequiredWithoutProviderOrderItemNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProviderOrderItemInput>;
  create?: InputMaybe<ProductCreateWithoutProviderOrderItemInput>;
  update?: InputMaybe<ProductUpdateToOneWithWhereWithoutProviderOrderItemInput>;
  upsert?: InputMaybe<ProductUpsertWithoutProviderOrderItemInput>;
};

export type ProductUpdateOneRequiredWithoutSaleItemsNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutSaleItemsInput>;
  create?: InputMaybe<ProductCreateWithoutSaleItemsInput>;
  update?: InputMaybe<ProductUpdateToOneWithWhereWithoutSaleItemsInput>;
  upsert?: InputMaybe<ProductUpsertWithoutSaleItemsInput>;
};

export type ProductUpdateToOneWithWhereWithoutProductMovementsInput = {
  data: ProductUpdateWithoutProductMovementsInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpdateToOneWithWhereWithoutProviderOrderItemInput = {
  data: ProductUpdateWithoutProviderOrderItemInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpdateToOneWithWhereWithoutSaleItemsInput = {
  data: ProductUpdateWithoutSaleItemsInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpdateWithWhereUniqueWithoutBlameUserInput = {
  data: ProductUpdateWithoutBlameUserInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithWhereUniqueWithoutProviderInput = {
  data: ProductUpdateWithoutProviderInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithoutBlameUserInput = {
  ProductMovements?: InputMaybe<ProductMovementUpdateManyWithoutProductNestedInput>;
  ProviderOrderItem?: InputMaybe<ProviderOrderItemUpdateManyWithoutProductNestedInput>;
  SaleItems?: InputMaybe<SaleItemUpdateManyWithoutProductNestedInput>;
  brandName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  controlsQty?: InputMaybe<BoolFieldUpdateOperationsInput>;
  costValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  isPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutProductsNestedInput>;
  qty?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutProductMovementsInput = {
  ProviderOrderItem?: InputMaybe<ProviderOrderItemUpdateManyWithoutProductNestedInput>;
  SaleItems?: InputMaybe<SaleItemUpdateManyWithoutProductNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneWithoutProductsNestedInput>;
  brandName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  controlsQty?: InputMaybe<BoolFieldUpdateOperationsInput>;
  costValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  isPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutProductsNestedInput>;
  qty?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutProviderInput = {
  ProductMovements?: InputMaybe<ProductMovementUpdateManyWithoutProductNestedInput>;
  ProviderOrderItem?: InputMaybe<ProviderOrderItemUpdateManyWithoutProductNestedInput>;
  SaleItems?: InputMaybe<SaleItemUpdateManyWithoutProductNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneWithoutProductsNestedInput>;
  brandName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  controlsQty?: InputMaybe<BoolFieldUpdateOperationsInput>;
  costValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  isPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  qty?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutProviderOrderItemInput = {
  ProductMovements?: InputMaybe<ProductMovementUpdateManyWithoutProductNestedInput>;
  SaleItems?: InputMaybe<SaleItemUpdateManyWithoutProductNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneWithoutProductsNestedInput>;
  brandName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  controlsQty?: InputMaybe<BoolFieldUpdateOperationsInput>;
  costValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  isPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutProductsNestedInput>;
  qty?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutSaleItemsInput = {
  ProductMovements?: InputMaybe<ProductMovementUpdateManyWithoutProductNestedInput>;
  ProviderOrderItem?: InputMaybe<ProviderOrderItemUpdateManyWithoutProductNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneWithoutProductsNestedInput>;
  brandName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  controlsQty?: InputMaybe<BoolFieldUpdateOperationsInput>;
  costValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  isPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutProductsNestedInput>;
  qty?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ProductUpsertWithWhereUniqueWithoutBlameUserInput = {
  create: ProductCreateWithoutBlameUserInput;
  update: ProductUpdateWithoutBlameUserInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithWhereUniqueWithoutProviderInput = {
  create: ProductCreateWithoutProviderInput;
  update: ProductUpdateWithoutProviderInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithoutProductMovementsInput = {
  create: ProductCreateWithoutProductMovementsInput;
  update: ProductUpdateWithoutProductMovementsInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpsertWithoutProviderOrderItemInput = {
  create: ProductCreateWithoutProviderOrderItemInput;
  update: ProductUpdateWithoutProviderOrderItemInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpsertWithoutSaleItemsInput = {
  create: ProductCreateWithoutSaleItemsInput;
  update: ProductUpdateWithoutSaleItemsInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  ProductMovements?: InputMaybe<ProductMovementListRelationFilter>;
  ProviderOrderItem?: InputMaybe<ProviderOrderItemListRelationFilter>;
  SaleItems?: InputMaybe<SaleItemListRelationFilter>;
  blameUser?: InputMaybe<UserNullableScalarRelationFilter>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  brandName?: InputMaybe<StringNullableFilter>;
  controlsQty?: InputMaybe<BoolFilter>;
  costValue?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isPostPaid?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  priceValue?: InputMaybe<IntFilter>;
  provider?: InputMaybe<ProviderNullableScalarRelationFilter>;
  providerId?: InputMaybe<StringNullableFilter>;
  qty?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductWhereUniqueInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  ProductMovements?: InputMaybe<ProductMovementListRelationFilter>;
  ProviderOrderItem?: InputMaybe<ProviderOrderItemListRelationFilter>;
  SaleItems?: InputMaybe<SaleItemListRelationFilter>;
  blameUser?: InputMaybe<UserNullableScalarRelationFilter>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  brandName?: InputMaybe<StringNullableFilter>;
  controlsQty?: InputMaybe<BoolFilter>;
  costValue?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPostPaid?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  priceValue?: InputMaybe<IntFilter>;
  provider?: InputMaybe<ProviderNullableScalarRelationFilter>;
  providerId?: InputMaybe<StringNullableFilter>;
  qty?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductsOutput = {
  __typename?: 'ProductsOutput';
  nodes: Array<Product>;
  /** Pagination info for findMany requests */
  pageInfo?: Maybe<ProductPaginated>;
};

export type Provider = {
  __typename?: 'Provider';
  _count: ProviderCount;
  blameUser?: Maybe<User>;
  /** FK: User.id - User to blame for */
  blameUserId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** Document */
  document?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['ID']['output'];
  /** Name */
  name: Scalars['String']['output'];
  products: ProductsOutput;
  updatedAt: Scalars['DateTime']['output'];
  /** Whatsapp */
  whatsapp?: Maybe<Scalars['String']['output']>;
};


export type ProviderProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProviderCount = {
  __typename?: 'ProviderCount';
  ProductMovementGroup: Scalars['Int']['output'];
  products: Scalars['Int']['output'];
  saleItems: Scalars['Int']['output'];
};

export type ProviderCountAggregate = {
  __typename?: 'ProviderCountAggregate';
  _all: Scalars['Int']['output'];
  blameUserId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  document: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  whatsapp: Scalars['Int']['output'];
};

export type ProviderCreateInput = {
  ProductMovementGroup?: InputMaybe<ProductMovementGroupCreateNestedManyWithoutProviderInput>;
  blameUser?: InputMaybe<UserCreateNestedOneWithoutProvidersInput>;
  document?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutProviderInput>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutProviderInput>;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
};

export type ProviderCreateManyBlameUserInput = {
  document?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  whatsapp?: InputMaybe<Scalars['String']['input']>;
};

export type ProviderCreateManyBlameUserInputEnvelope = {
  data: Array<ProviderCreateManyBlameUserInput>;
};

export type ProviderCreateManyInput = {
  blameUserId?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  whatsapp?: InputMaybe<Scalars['String']['input']>;
};

export type ProviderCreateNestedManyWithoutBlameUserInput = {
  connect?: InputMaybe<Array<ProviderWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProviderCreateOrConnectWithoutBlameUserInput>>;
  create?: InputMaybe<Array<ProviderCreateWithoutBlameUserInput>>;
  createMany?: InputMaybe<ProviderCreateManyBlameUserInputEnvelope>;
};

export type ProviderCreateNestedOneWithoutProductMovementGroupInput = {
  connect?: InputMaybe<ProviderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProviderCreateOrConnectWithoutProductMovementGroupInput>;
  create?: InputMaybe<ProviderCreateWithoutProductMovementGroupInput>;
};

export type ProviderCreateNestedOneWithoutProductsInput = {
  connect?: InputMaybe<ProviderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProviderCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<ProviderCreateWithoutProductsInput>;
};

export type ProviderCreateNestedOneWithoutSaleItemsInput = {
  connect?: InputMaybe<ProviderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProviderCreateOrConnectWithoutSaleItemsInput>;
  create?: InputMaybe<ProviderCreateWithoutSaleItemsInput>;
};

export type ProviderCreateOrConnectWithoutBlameUserInput = {
  create: ProviderCreateWithoutBlameUserInput;
  where: ProviderWhereUniqueInput;
};

export type ProviderCreateOrConnectWithoutProductMovementGroupInput = {
  create: ProviderCreateWithoutProductMovementGroupInput;
  where: ProviderWhereUniqueInput;
};

export type ProviderCreateOrConnectWithoutProductsInput = {
  create: ProviderCreateWithoutProductsInput;
  where: ProviderWhereUniqueInput;
};

export type ProviderCreateOrConnectWithoutSaleItemsInput = {
  create: ProviderCreateWithoutSaleItemsInput;
  where: ProviderWhereUniqueInput;
};

export type ProviderCreateWithoutBlameUserInput = {
  ProductMovementGroup?: InputMaybe<ProductMovementGroupCreateNestedManyWithoutProviderInput>;
  document?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutProviderInput>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutProviderInput>;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
};

export type ProviderCreateWithoutProductMovementGroupInput = {
  blameUser?: InputMaybe<UserCreateNestedOneWithoutProvidersInput>;
  document?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutProviderInput>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutProviderInput>;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
};

export type ProviderCreateWithoutProductsInput = {
  ProductMovementGroup?: InputMaybe<ProductMovementGroupCreateNestedManyWithoutProviderInput>;
  blameUser?: InputMaybe<UserCreateNestedOneWithoutProvidersInput>;
  document?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutProviderInput>;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
};

export type ProviderCreateWithoutSaleItemsInput = {
  ProductMovementGroup?: InputMaybe<ProductMovementGroupCreateNestedManyWithoutProviderInput>;
  blameUser?: InputMaybe<UserCreateNestedOneWithoutProvidersInput>;
  document?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutProviderInput>;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
};

export type ProviderListRelationFilter = {
  every?: InputMaybe<ProviderWhereInput>;
  none?: InputMaybe<ProviderWhereInput>;
  some?: InputMaybe<ProviderWhereInput>;
};

export type ProviderMaxAggregate = {
  __typename?: 'ProviderMaxAggregate';
  blameUserId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  document?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  whatsapp?: Maybe<Scalars['String']['output']>;
};

export type ProviderMinAggregate = {
  __typename?: 'ProviderMinAggregate';
  blameUserId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  document?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  whatsapp?: Maybe<Scalars['String']['output']>;
};

export type ProviderNullableScalarRelationFilter = {
  is?: InputMaybe<ProviderWhereInput>;
  isNot?: InputMaybe<ProviderWhereInput>;
};

export type ProviderOrder = {
  __typename?: 'ProviderOrder';
  _count: ProviderOrderCount;
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  itemsValue: Scalars['Int']['output'];
  itemsValueDecimal: Scalars['Float']['output'];
  otherValue: Scalars['Int']['output'];
  providerOrderItems: ProviderOrderItemsOutput;
  totalValue: Scalars['Float']['output'];
  totalValueDecimal: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type ProviderOrderProviderOrderItemsArgs = {
  cursor?: InputMaybe<ProviderOrderItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProviderOrderItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProviderOrderItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProviderOrderItemWhereInput>;
};

export type ProviderOrderAvgAggregate = {
  __typename?: 'ProviderOrderAvgAggregate';
  itemsValue?: Maybe<Scalars['Float']['output']>;
  otherValue?: Maybe<Scalars['Float']['output']>;
};

export type ProviderOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProviderOrderByWithRelationInput = {
  ProductMovementGroup?: InputMaybe<ProductMovementGroupOrderByRelationAggregateInput>;
  blameUser?: InputMaybe<UserOrderByWithRelationInput>;
  blameUserId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  document?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<ProductOrderByRelationAggregateInput>;
  saleItems?: InputMaybe<SaleItemOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  whatsapp?: InputMaybe<SortOrder>;
};

export type ProviderOrderCount = {
  __typename?: 'ProviderOrderCount';
  financialMovements: Scalars['Int']['output'];
  providerOrderItems: Scalars['Int']['output'];
};

export type ProviderOrderCountAggregate = {
  __typename?: 'ProviderOrderCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  date: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  itemsValue: Scalars['Int']['output'];
  otherValue: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ProviderOrderCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  financialMovements?: InputMaybe<FinancialMovementCreateNestedManyWithoutProviderOrderInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  itemsValue?: InputMaybe<Scalars['Int']['input']>;
  otherValue?: InputMaybe<Scalars['Int']['input']>;
  providerOrderItems?: InputMaybe<ProviderOrderItemCreateNestedManyWithoutProviderOrderInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProviderOrderCreateNestedOneWithoutFinancialMovementsInput = {
  connect?: InputMaybe<ProviderOrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProviderOrderCreateOrConnectWithoutFinancialMovementsInput>;
  create?: InputMaybe<ProviderOrderCreateWithoutFinancialMovementsInput>;
};

export type ProviderOrderCreateNestedOneWithoutProviderOrderItemsInput = {
  connect?: InputMaybe<ProviderOrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProviderOrderCreateOrConnectWithoutProviderOrderItemsInput>;
  create?: InputMaybe<ProviderOrderCreateWithoutProviderOrderItemsInput>;
};

export type ProviderOrderCreateOrConnectWithoutFinancialMovementsInput = {
  create: ProviderOrderCreateWithoutFinancialMovementsInput;
  where: ProviderOrderWhereUniqueInput;
};

export type ProviderOrderCreateOrConnectWithoutProviderOrderItemsInput = {
  create: ProviderOrderCreateWithoutProviderOrderItemsInput;
  where: ProviderOrderWhereUniqueInput;
};

export type ProviderOrderCreateWithoutFinancialMovementsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  itemsValue?: InputMaybe<Scalars['Int']['input']>;
  otherValue?: InputMaybe<Scalars['Int']['input']>;
  providerOrderItems?: InputMaybe<ProviderOrderItemCreateNestedManyWithoutProviderOrderInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProviderOrderCreateWithoutProviderOrderItemsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  financialMovements?: InputMaybe<FinancialMovementCreateNestedManyWithoutProviderOrderInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  itemsValue?: InputMaybe<Scalars['Int']['input']>;
  otherValue?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProviderOrderItem = {
  __typename?: 'ProviderOrderItem';
  _count: ProviderOrderItemCount;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  moveQty: Scalars['Boolean']['output'];
  product: Product;
  productId: Scalars['String']['output'];
  provider?: Maybe<Provider>;
  providerId: Scalars['String']['output'];
  providerOrderId: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  totalValue: Scalars['Int']['output'];
  totalValueDecimal: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProviderOrderItemAvgAggregate = {
  __typename?: 'ProviderOrderItemAvgAggregate';
  quantity?: Maybe<Scalars['Float']['output']>;
  totalValue?: Maybe<Scalars['Float']['output']>;
};

export type ProviderOrderItemCount = {
  __typename?: 'ProviderOrderItemCount';
  productMovements: Scalars['Int']['output'];
};

export type ProviderOrderItemCountAggregate = {
  __typename?: 'ProviderOrderItemCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  moveQty: Scalars['Int']['output'];
  productId: Scalars['Int']['output'];
  providerId: Scalars['Int']['output'];
  providerOrderId: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  totalValue: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ProviderOrderItemCreateManyProductInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  moveQty?: InputMaybe<Scalars['Boolean']['input']>;
  providerId: Scalars['String']['input'];
  providerOrderId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
  totalValue: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProviderOrderItemCreateManyProductInputEnvelope = {
  data: Array<ProviderOrderItemCreateManyProductInput>;
};

export type ProviderOrderItemCreateManyProviderOrderInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  moveQty?: InputMaybe<Scalars['Boolean']['input']>;
  productId: Scalars['String']['input'];
  providerId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
  totalValue: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProviderOrderItemCreateManyProviderOrderInputEnvelope = {
  data: Array<ProviderOrderItemCreateManyProviderOrderInput>;
};

export type ProviderOrderItemCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<ProviderOrderItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProviderOrderItemCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProviderOrderItemCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProviderOrderItemCreateManyProductInputEnvelope>;
};

export type ProviderOrderItemCreateNestedManyWithoutProviderOrderInput = {
  connect?: InputMaybe<Array<ProviderOrderItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProviderOrderItemCreateOrConnectWithoutProviderOrderInput>>;
  create?: InputMaybe<Array<ProviderOrderItemCreateWithoutProviderOrderInput>>;
  createMany?: InputMaybe<ProviderOrderItemCreateManyProviderOrderInputEnvelope>;
};

export type ProviderOrderItemCreateNestedOneWithoutProductMovementsInput = {
  connect?: InputMaybe<ProviderOrderItemWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProviderOrderItemCreateOrConnectWithoutProductMovementsInput>;
  create?: InputMaybe<ProviderOrderItemCreateWithoutProductMovementsInput>;
};

export type ProviderOrderItemCreateOrConnectWithoutProductInput = {
  create: ProviderOrderItemCreateWithoutProductInput;
  where: ProviderOrderItemWhereUniqueInput;
};

export type ProviderOrderItemCreateOrConnectWithoutProductMovementsInput = {
  create: ProviderOrderItemCreateWithoutProductMovementsInput;
  where: ProviderOrderItemWhereUniqueInput;
};

export type ProviderOrderItemCreateOrConnectWithoutProviderOrderInput = {
  create: ProviderOrderItemCreateWithoutProviderOrderInput;
  where: ProviderOrderItemWhereUniqueInput;
};

export type ProviderOrderItemCreateWithoutProductInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  moveQty?: InputMaybe<Scalars['Boolean']['input']>;
  productMovements?: InputMaybe<ProductMovementCreateNestedManyWithoutProviderOrderItemInput>;
  providerId: Scalars['String']['input'];
  providerOrder: ProviderOrderCreateNestedOneWithoutProviderOrderItemsInput;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  totalValue: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProviderOrderItemCreateWithoutProductMovementsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  moveQty?: InputMaybe<Scalars['Boolean']['input']>;
  product: ProductCreateNestedOneWithoutProviderOrderItemInput;
  providerId: Scalars['String']['input'];
  providerOrder: ProviderOrderCreateNestedOneWithoutProviderOrderItemsInput;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  totalValue: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProviderOrderItemCreateWithoutProviderOrderInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  moveQty?: InputMaybe<Scalars['Boolean']['input']>;
  product: ProductCreateNestedOneWithoutProviderOrderItemInput;
  productMovements?: InputMaybe<ProductMovementCreateNestedManyWithoutProviderOrderItemInput>;
  providerId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
  totalValue: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProviderOrderItemListRelationFilter = {
  every?: InputMaybe<ProviderOrderItemWhereInput>;
  none?: InputMaybe<ProviderOrderItemWhereInput>;
  some?: InputMaybe<ProviderOrderItemWhereInput>;
};

export type ProviderOrderItemMaxAggregate = {
  __typename?: 'ProviderOrderItemMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  moveQty?: Maybe<Scalars['Boolean']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  providerOrderId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  totalValue?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProviderOrderItemMinAggregate = {
  __typename?: 'ProviderOrderItemMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  moveQty?: Maybe<Scalars['Boolean']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  providerOrderId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  totalValue?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProviderOrderItemNullableScalarRelationFilter = {
  is?: InputMaybe<ProviderOrderItemWhereInput>;
  isNot?: InputMaybe<ProviderOrderItemWhereInput>;
};

export type ProviderOrderItemOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProviderOrderItemOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moveQty?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  productMovements?: InputMaybe<ProductMovementOrderByRelationAggregateInput>;
  providerId?: InputMaybe<SortOrder>;
  providerOrder?: InputMaybe<ProviderOrderOrderByWithRelationInput>;
  providerOrderId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  totalValue?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProviderOrderItemPaginated = {
  __typename?: 'ProviderOrderItemPaginated';
  /** Number of current page */
  currentPage?: Maybe<Scalars['Int']['output']>;
  /** Boolean to use on a cursor-based pagination. E.g: Mobile scroll */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** Number of last page */
  lastPage?: Maybe<Scalars['Int']['output']>;
  nextCursor?: Maybe<Scalars['Int']['output']>;
  /** Count for query results without skip, take and cursor */
  total?: Maybe<Scalars['Int']['output']>;
};

export type ProviderOrderItemProviderOrderIdProductIdCompoundUniqueInput = {
  productId: Scalars['String']['input'];
  providerOrderId: Scalars['String']['input'];
};

export enum ProviderOrderItemScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  MoveQty = 'moveQty',
  ProductId = 'productId',
  ProviderId = 'providerId',
  ProviderOrderId = 'providerOrderId',
  Quantity = 'quantity',
  TotalValue = 'totalValue',
  UpdatedAt = 'updatedAt'
}

export type ProviderOrderItemScalarWhereInput = {
  AND?: InputMaybe<Array<ProviderOrderItemScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProviderOrderItemScalarWhereInput>>;
  OR?: InputMaybe<Array<ProviderOrderItemScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  moveQty?: InputMaybe<BoolFilter>;
  productId?: InputMaybe<StringFilter>;
  providerId?: InputMaybe<StringFilter>;
  providerOrderId?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  totalValue?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProviderOrderItemSumAggregate = {
  __typename?: 'ProviderOrderItemSumAggregate';
  quantity?: Maybe<Scalars['Int']['output']>;
  totalValue?: Maybe<Scalars['Int']['output']>;
};

export type ProviderOrderItemUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  moveQty?: InputMaybe<BoolFieldUpdateOperationsInput>;
  providerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProviderOrderItemUpdateManyWithWhereWithoutProductInput = {
  data: ProviderOrderItemUpdateManyMutationInput;
  where: ProviderOrderItemScalarWhereInput;
};

export type ProviderOrderItemUpdateManyWithWhereWithoutProviderOrderInput = {
  data: ProviderOrderItemUpdateManyMutationInput;
  where: ProviderOrderItemScalarWhereInput;
};

export type ProviderOrderItemUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<ProviderOrderItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProviderOrderItemCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProviderOrderItemCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProviderOrderItemCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<ProviderOrderItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProviderOrderItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProviderOrderItemWhereUniqueInput>>;
  set?: InputMaybe<Array<ProviderOrderItemWhereUniqueInput>>;
  update?: InputMaybe<Array<ProviderOrderItemUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<ProviderOrderItemUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<ProviderOrderItemUpsertWithWhereUniqueWithoutProductInput>>;
};

export type ProviderOrderItemUpdateManyWithoutProviderOrderNestedInput = {
  connect?: InputMaybe<Array<ProviderOrderItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProviderOrderItemCreateOrConnectWithoutProviderOrderInput>>;
  create?: InputMaybe<Array<ProviderOrderItemCreateWithoutProviderOrderInput>>;
  createMany?: InputMaybe<ProviderOrderItemCreateManyProviderOrderInputEnvelope>;
  delete?: InputMaybe<Array<ProviderOrderItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProviderOrderItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProviderOrderItemWhereUniqueInput>>;
  set?: InputMaybe<Array<ProviderOrderItemWhereUniqueInput>>;
  update?: InputMaybe<Array<ProviderOrderItemUpdateWithWhereUniqueWithoutProviderOrderInput>>;
  updateMany?: InputMaybe<Array<ProviderOrderItemUpdateManyWithWhereWithoutProviderOrderInput>>;
  upsert?: InputMaybe<Array<ProviderOrderItemUpsertWithWhereUniqueWithoutProviderOrderInput>>;
};

export type ProviderOrderItemUpdateOneWithoutProductMovementsNestedInput = {
  connect?: InputMaybe<ProviderOrderItemWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProviderOrderItemCreateOrConnectWithoutProductMovementsInput>;
  create?: InputMaybe<ProviderOrderItemCreateWithoutProductMovementsInput>;
  delete?: InputMaybe<ProviderOrderItemWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<ProviderOrderItemUpdateToOneWithWhereWithoutProductMovementsInput>;
  upsert?: InputMaybe<ProviderOrderItemUpsertWithoutProductMovementsInput>;
};

export type ProviderOrderItemUpdateToOneWithWhereWithoutProductMovementsInput = {
  data: ProviderOrderItemUpdateWithoutProductMovementsInput;
  where?: InputMaybe<ProviderOrderItemWhereInput>;
};

export type ProviderOrderItemUpdateWithWhereUniqueWithoutProductInput = {
  data: ProviderOrderItemUpdateWithoutProductInput;
  where: ProviderOrderItemWhereUniqueInput;
};

export type ProviderOrderItemUpdateWithWhereUniqueWithoutProviderOrderInput = {
  data: ProviderOrderItemUpdateWithoutProviderOrderInput;
  where: ProviderOrderItemWhereUniqueInput;
};

export type ProviderOrderItemUpdateWithoutProductInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  moveQty?: InputMaybe<BoolFieldUpdateOperationsInput>;
  productMovements?: InputMaybe<ProductMovementUpdateManyWithoutProviderOrderItemNestedInput>;
  providerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerOrder?: InputMaybe<ProviderOrderUpdateOneRequiredWithoutProviderOrderItemsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProviderOrderItemUpdateWithoutProductMovementsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  moveQty?: InputMaybe<BoolFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutProviderOrderItemNestedInput>;
  providerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerOrder?: InputMaybe<ProviderOrderUpdateOneRequiredWithoutProviderOrderItemsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProviderOrderItemUpdateWithoutProviderOrderInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  moveQty?: InputMaybe<BoolFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutProviderOrderItemNestedInput>;
  productMovements?: InputMaybe<ProductMovementUpdateManyWithoutProviderOrderItemNestedInput>;
  providerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProviderOrderItemUpsertWithWhereUniqueWithoutProductInput = {
  create: ProviderOrderItemCreateWithoutProductInput;
  update: ProviderOrderItemUpdateWithoutProductInput;
  where: ProviderOrderItemWhereUniqueInput;
};

export type ProviderOrderItemUpsertWithWhereUniqueWithoutProviderOrderInput = {
  create: ProviderOrderItemCreateWithoutProviderOrderInput;
  update: ProviderOrderItemUpdateWithoutProviderOrderInput;
  where: ProviderOrderItemWhereUniqueInput;
};

export type ProviderOrderItemUpsertWithoutProductMovementsInput = {
  create: ProviderOrderItemCreateWithoutProductMovementsInput;
  update: ProviderOrderItemUpdateWithoutProductMovementsInput;
  where?: InputMaybe<ProviderOrderItemWhereInput>;
};

export type ProviderOrderItemWhereInput = {
  AND?: InputMaybe<Array<ProviderOrderItemWhereInput>>;
  NOT?: InputMaybe<Array<ProviderOrderItemWhereInput>>;
  OR?: InputMaybe<Array<ProviderOrderItemWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  moveQty?: InputMaybe<BoolFilter>;
  product?: InputMaybe<ProductScalarRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  productMovements?: InputMaybe<ProductMovementListRelationFilter>;
  providerId?: InputMaybe<StringFilter>;
  providerOrder?: InputMaybe<ProviderOrderScalarRelationFilter>;
  providerOrderId?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  totalValue?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProviderOrderItemWhereUniqueInput = {
  AND?: InputMaybe<Array<ProviderOrderItemWhereInput>>;
  NOT?: InputMaybe<Array<ProviderOrderItemWhereInput>>;
  OR?: InputMaybe<Array<ProviderOrderItemWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  moveQty?: InputMaybe<BoolFilter>;
  product?: InputMaybe<ProductScalarRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  productMovements?: InputMaybe<ProductMovementListRelationFilter>;
  providerId?: InputMaybe<StringFilter>;
  providerOrder?: InputMaybe<ProviderOrderScalarRelationFilter>;
  providerOrderId?: InputMaybe<StringFilter>;
  providerOrderId_productId?: InputMaybe<ProviderOrderItemProviderOrderIdProductIdCompoundUniqueInput>;
  quantity?: InputMaybe<IntFilter>;
  totalValue?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProviderOrderItemsOutput = {
  __typename?: 'ProviderOrderItemsOutput';
  nodes: Array<ProviderOrderItem>;
  /** Pagination info for findMany requests */
  pageInfo?: Maybe<ProviderOrderItemPaginated>;
};

export type ProviderOrderMaxAggregate = {
  __typename?: 'ProviderOrderMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  itemsValue?: Maybe<Scalars['Int']['output']>;
  otherValue?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProviderOrderMinAggregate = {
  __typename?: 'ProviderOrderMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  itemsValue?: Maybe<Scalars['Int']['output']>;
  otherValue?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProviderOrderNullableScalarRelationFilter = {
  is?: InputMaybe<ProviderOrderWhereInput>;
  isNot?: InputMaybe<ProviderOrderWhereInput>;
};

export type ProviderOrderOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  financialMovements?: InputMaybe<FinancialMovementOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  itemsValue?: InputMaybe<SortOrder>;
  otherValue?: InputMaybe<SortOrder>;
  providerOrderItems?: InputMaybe<ProviderOrderItemOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProviderOrderPaginated = {
  __typename?: 'ProviderOrderPaginated';
  /** Number of current page */
  currentPage?: Maybe<Scalars['Int']['output']>;
  /** Boolean to use on a cursor-based pagination. E.g: Mobile scroll */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** Number of last page */
  lastPage?: Maybe<Scalars['Int']['output']>;
  nextCursor?: Maybe<Scalars['Int']['output']>;
  /** Count for query results without skip, take and cursor */
  total?: Maybe<Scalars['Int']['output']>;
};

export enum ProviderOrderScalarFieldEnum {
  CreatedAt = 'createdAt',
  Date = 'date',
  Id = 'id',
  ItemsValue = 'itemsValue',
  OtherValue = 'otherValue',
  UpdatedAt = 'updatedAt'
}

export type ProviderOrderScalarRelationFilter = {
  is?: InputMaybe<ProviderOrderWhereInput>;
  isNot?: InputMaybe<ProviderOrderWhereInput>;
};

export type ProviderOrderSumAggregate = {
  __typename?: 'ProviderOrderSumAggregate';
  itemsValue?: Maybe<Scalars['Int']['output']>;
  otherValue?: Maybe<Scalars['Int']['output']>;
};

export type ProviderOrderUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  financialMovements?: InputMaybe<FinancialMovementUpdateManyWithoutProviderOrderNestedInput>;
  itemsValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  otherValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  providerOrderItems?: InputMaybe<ProviderOrderItemUpdateManyWithoutProviderOrderNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProviderOrderUpdateOneRequiredWithoutProviderOrderItemsNestedInput = {
  connect?: InputMaybe<ProviderOrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProviderOrderCreateOrConnectWithoutProviderOrderItemsInput>;
  create?: InputMaybe<ProviderOrderCreateWithoutProviderOrderItemsInput>;
  update?: InputMaybe<ProviderOrderUpdateToOneWithWhereWithoutProviderOrderItemsInput>;
  upsert?: InputMaybe<ProviderOrderUpsertWithoutProviderOrderItemsInput>;
};

export type ProviderOrderUpdateOneWithoutFinancialMovementsNestedInput = {
  connect?: InputMaybe<ProviderOrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProviderOrderCreateOrConnectWithoutFinancialMovementsInput>;
  create?: InputMaybe<ProviderOrderCreateWithoutFinancialMovementsInput>;
  delete?: InputMaybe<ProviderOrderWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<ProviderOrderUpdateToOneWithWhereWithoutFinancialMovementsInput>;
  upsert?: InputMaybe<ProviderOrderUpsertWithoutFinancialMovementsInput>;
};

export type ProviderOrderUpdateToOneWithWhereWithoutFinancialMovementsInput = {
  data: ProviderOrderUpdateWithoutFinancialMovementsInput;
  where?: InputMaybe<ProviderOrderWhereInput>;
};

export type ProviderOrderUpdateToOneWithWhereWithoutProviderOrderItemsInput = {
  data: ProviderOrderUpdateWithoutProviderOrderItemsInput;
  where?: InputMaybe<ProviderOrderWhereInput>;
};

export type ProviderOrderUpdateWithoutFinancialMovementsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  itemsValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  otherValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  providerOrderItems?: InputMaybe<ProviderOrderItemUpdateManyWithoutProviderOrderNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProviderOrderUpdateWithoutProviderOrderItemsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  financialMovements?: InputMaybe<FinancialMovementUpdateManyWithoutProviderOrderNestedInput>;
  itemsValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  otherValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProviderOrderUpsertWithoutFinancialMovementsInput = {
  create: ProviderOrderCreateWithoutFinancialMovementsInput;
  update: ProviderOrderUpdateWithoutFinancialMovementsInput;
  where?: InputMaybe<ProviderOrderWhereInput>;
};

export type ProviderOrderUpsertWithoutProviderOrderItemsInput = {
  create: ProviderOrderCreateWithoutProviderOrderItemsInput;
  update: ProviderOrderUpdateWithoutProviderOrderItemsInput;
  where?: InputMaybe<ProviderOrderWhereInput>;
};

export type ProviderOrderWhereInput = {
  AND?: InputMaybe<Array<ProviderOrderWhereInput>>;
  NOT?: InputMaybe<Array<ProviderOrderWhereInput>>;
  OR?: InputMaybe<Array<ProviderOrderWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  financialMovements?: InputMaybe<FinancialMovementListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  itemsValue?: InputMaybe<IntFilter>;
  otherValue?: InputMaybe<IntFilter>;
  providerOrderItems?: InputMaybe<ProviderOrderItemListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProviderOrderWhereUniqueInput = {
  AND?: InputMaybe<Array<ProviderOrderWhereInput>>;
  NOT?: InputMaybe<Array<ProviderOrderWhereInput>>;
  OR?: InputMaybe<Array<ProviderOrderWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  financialMovements?: InputMaybe<FinancialMovementListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  itemsValue?: InputMaybe<IntFilter>;
  otherValue?: InputMaybe<IntFilter>;
  providerOrderItems?: InputMaybe<ProviderOrderItemListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProviderOrdersOutput = {
  __typename?: 'ProviderOrdersOutput';
  nodes: Array<ProviderOrder>;
  /** Pagination info for findMany requests */
  pageInfo?: Maybe<ProviderOrderPaginated>;
};

export type ProviderPaginated = {
  __typename?: 'ProviderPaginated';
  /** Number of current page */
  currentPage?: Maybe<Scalars['Int']['output']>;
  /** Boolean to use on a cursor-based pagination. E.g: Mobile scroll */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** Number of last page */
  lastPage?: Maybe<Scalars['Int']['output']>;
  nextCursor?: Maybe<Scalars['Int']['output']>;
  /** Count for query results without skip, take and cursor */
  total?: Maybe<Scalars['Int']['output']>;
};

export enum ProviderScalarFieldEnum {
  BlameUserId = 'blameUserId',
  CreatedAt = 'createdAt',
  Document = 'document',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  Whatsapp = 'whatsapp'
}

export type ProviderScalarWhereInput = {
  AND?: InputMaybe<Array<ProviderScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProviderScalarWhereInput>>;
  OR?: InputMaybe<Array<ProviderScalarWhereInput>>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  document?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  whatsapp?: InputMaybe<StringNullableFilter>;
};

export type ProviderUpdateInput = {
  ProductMovementGroup?: InputMaybe<ProductMovementGroupUpdateManyWithoutProviderNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneWithoutProvidersNestedInput>;
  document?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutProviderNestedInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutProviderNestedInput>;
  whatsapp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProviderUpdateManyMutationInput = {
  document?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  whatsapp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProviderUpdateManyWithWhereWithoutBlameUserInput = {
  data: ProviderUpdateManyMutationInput;
  where: ProviderScalarWhereInput;
};

export type ProviderUpdateManyWithoutBlameUserNestedInput = {
  connect?: InputMaybe<Array<ProviderWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProviderCreateOrConnectWithoutBlameUserInput>>;
  create?: InputMaybe<Array<ProviderCreateWithoutBlameUserInput>>;
  createMany?: InputMaybe<ProviderCreateManyBlameUserInputEnvelope>;
  delete?: InputMaybe<Array<ProviderWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProviderScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProviderWhereUniqueInput>>;
  set?: InputMaybe<Array<ProviderWhereUniqueInput>>;
  update?: InputMaybe<Array<ProviderUpdateWithWhereUniqueWithoutBlameUserInput>>;
  updateMany?: InputMaybe<Array<ProviderUpdateManyWithWhereWithoutBlameUserInput>>;
  upsert?: InputMaybe<Array<ProviderUpsertWithWhereUniqueWithoutBlameUserInput>>;
};

export type ProviderUpdateOneWithoutProductMovementGroupNestedInput = {
  connect?: InputMaybe<ProviderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProviderCreateOrConnectWithoutProductMovementGroupInput>;
  create?: InputMaybe<ProviderCreateWithoutProductMovementGroupInput>;
  delete?: InputMaybe<ProviderWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<ProviderUpdateToOneWithWhereWithoutProductMovementGroupInput>;
  upsert?: InputMaybe<ProviderUpsertWithoutProductMovementGroupInput>;
};

export type ProviderUpdateOneWithoutProductsNestedInput = {
  connect?: InputMaybe<ProviderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProviderCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<ProviderCreateWithoutProductsInput>;
  delete?: InputMaybe<ProviderWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<ProviderUpdateToOneWithWhereWithoutProductsInput>;
  upsert?: InputMaybe<ProviderUpsertWithoutProductsInput>;
};

export type ProviderUpdateOneWithoutSaleItemsNestedInput = {
  connect?: InputMaybe<ProviderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProviderCreateOrConnectWithoutSaleItemsInput>;
  create?: InputMaybe<ProviderCreateWithoutSaleItemsInput>;
  delete?: InputMaybe<ProviderWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<ProviderUpdateToOneWithWhereWithoutSaleItemsInput>;
  upsert?: InputMaybe<ProviderUpsertWithoutSaleItemsInput>;
};

export type ProviderUpdateToOneWithWhereWithoutProductMovementGroupInput = {
  data: ProviderUpdateWithoutProductMovementGroupInput;
  where?: InputMaybe<ProviderWhereInput>;
};

export type ProviderUpdateToOneWithWhereWithoutProductsInput = {
  data: ProviderUpdateWithoutProductsInput;
  where?: InputMaybe<ProviderWhereInput>;
};

export type ProviderUpdateToOneWithWhereWithoutSaleItemsInput = {
  data: ProviderUpdateWithoutSaleItemsInput;
  where?: InputMaybe<ProviderWhereInput>;
};

export type ProviderUpdateWithWhereUniqueWithoutBlameUserInput = {
  data: ProviderUpdateWithoutBlameUserInput;
  where: ProviderWhereUniqueInput;
};

export type ProviderUpdateWithoutBlameUserInput = {
  ProductMovementGroup?: InputMaybe<ProductMovementGroupUpdateManyWithoutProviderNestedInput>;
  document?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutProviderNestedInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutProviderNestedInput>;
  whatsapp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProviderUpdateWithoutProductMovementGroupInput = {
  blameUser?: InputMaybe<UserUpdateOneWithoutProvidersNestedInput>;
  document?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutProviderNestedInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutProviderNestedInput>;
  whatsapp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProviderUpdateWithoutProductsInput = {
  ProductMovementGroup?: InputMaybe<ProductMovementGroupUpdateManyWithoutProviderNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneWithoutProvidersNestedInput>;
  document?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutProviderNestedInput>;
  whatsapp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProviderUpdateWithoutSaleItemsInput = {
  ProductMovementGroup?: InputMaybe<ProductMovementGroupUpdateManyWithoutProviderNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneWithoutProvidersNestedInput>;
  document?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutProviderNestedInput>;
  whatsapp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProviderUpsertWithWhereUniqueWithoutBlameUserInput = {
  create: ProviderCreateWithoutBlameUserInput;
  update: ProviderUpdateWithoutBlameUserInput;
  where: ProviderWhereUniqueInput;
};

export type ProviderUpsertWithoutProductMovementGroupInput = {
  create: ProviderCreateWithoutProductMovementGroupInput;
  update: ProviderUpdateWithoutProductMovementGroupInput;
  where?: InputMaybe<ProviderWhereInput>;
};

export type ProviderUpsertWithoutProductsInput = {
  create: ProviderCreateWithoutProductsInput;
  update: ProviderUpdateWithoutProductsInput;
  where?: InputMaybe<ProviderWhereInput>;
};

export type ProviderUpsertWithoutSaleItemsInput = {
  create: ProviderCreateWithoutSaleItemsInput;
  update: ProviderUpdateWithoutSaleItemsInput;
  where?: InputMaybe<ProviderWhereInput>;
};

export type ProviderWhereInput = {
  AND?: InputMaybe<Array<ProviderWhereInput>>;
  NOT?: InputMaybe<Array<ProviderWhereInput>>;
  OR?: InputMaybe<Array<ProviderWhereInput>>;
  ProductMovementGroup?: InputMaybe<ProductMovementGroupListRelationFilter>;
  blameUser?: InputMaybe<UserNullableScalarRelationFilter>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  document?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
  saleItems?: InputMaybe<SaleItemListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  whatsapp?: InputMaybe<StringNullableFilter>;
};

export type ProviderWhereUniqueInput = {
  AND?: InputMaybe<Array<ProviderWhereInput>>;
  NOT?: InputMaybe<Array<ProviderWhereInput>>;
  OR?: InputMaybe<Array<ProviderWhereInput>>;
  ProductMovementGroup?: InputMaybe<ProductMovementGroupListRelationFilter>;
  blameUser?: InputMaybe<UserNullableScalarRelationFilter>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  document?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<ProductListRelationFilter>;
  saleItems?: InputMaybe<SaleItemListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  whatsapp?: InputMaybe<StringNullableFilter>;
};

export type ProvidersOutput = {
  __typename?: 'ProvidersOutput';
  nodes: Array<Provider>;
  /** Pagination info for findMany requests */
  pageInfo?: Maybe<ProviderPaginated>;
};

export type Query = {
  __typename?: 'Query';
  financialMovement: FinancialMovement;
  financialMovementAggregate: AggregateFinancialMovement;
  financialMovements: FinancialMovementsOutput;
  product: Product;
  productAggregate: AggregateProduct;
  products: ProductsOutput;
  provider: Provider;
  providerOrder: ProviderOrder;
  providerOrderItems: ProviderOrderItemsOutput;
  providerOrders: ProviderOrdersOutput;
  providers: ProvidersOutput;
  sale: Sale;
  saleAggregate: AggregateSale;
  saleItem: SaleItem;
  saleItems: SaleItemsOutput;
  sales: SalesOutput;
  user: User;
  users: UsersOutput;
};


export type QueryFinancialMovementArgs = {
  where: FinancialMovementWhereUniqueInput;
};


export type QueryFinancialMovementsArgs = {
  cursor?: InputMaybe<FinancialMovementWhereUniqueInput>;
  distinct?: InputMaybe<Array<FinancialMovementScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FinancialMovementOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FinancialMovementWhereInput>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryProviderArgs = {
  where: ProviderWhereUniqueInput;
};


export type QueryProviderOrderArgs = {
  where: ProviderOrderWhereUniqueInput;
};


export type QueryProviderOrderItemsArgs = {
  cursor?: InputMaybe<ProviderOrderItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProviderOrderItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProviderOrderItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProviderOrderItemWhereInput>;
};


export type QueryProviderOrdersArgs = {
  cursor?: InputMaybe<ProviderOrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProviderOrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProviderOrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProviderOrderWhereInput>;
};


export type QueryProvidersArgs = {
  cursor?: InputMaybe<ProviderWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProviderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProviderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProviderWhereInput>;
};


export type QuerySaleArgs = {
  where: SaleWhereUniqueInput;
};


export type QuerySaleAggregateArgs = {
  where?: InputMaybe<SaleWhereInputCustom>;
};


export type QuerySaleItemArgs = {
  where: SaleItemWhereUniqueInput;
};


export type QuerySaleItemsArgs = {
  cursor?: InputMaybe<SaleItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<SaleItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SaleItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SaleItemWhereInput>;
};


export type QuerySalesArgs = {
  cursor?: InputMaybe<SaleWhereUniqueInput>;
  distinct?: InputMaybe<Array<SaleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SaleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SaleWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Sale = {
  __typename?: 'Sale';
  _count: SaleCount;
  blameUser?: Maybe<User>;
  /** FK: User.id - User to blame for */
  blameUserId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** Date Time */
  date: Scalars['DateTime']['output'];
  /** ID */
  id: Scalars['ID']['output'];
  netMarginPercent: Scalars['Float']['output'];
  netMarginValue: Scalars['Float']['output'];
  saleItems: SaleItemsOutput;
  /** Total Cost */
  totalCostValue: Scalars['Int']['output'];
  totalCostValueDecimal: Scalars['Float']['output'];
  /** Grand Total */
  totalValue: Scalars['Int']['output'];
  totalValueDecimal: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type SaleSaleItemsArgs = {
  cursor?: InputMaybe<SaleItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<SaleItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SaleItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SaleItemWhereInput>;
};

export type SaleAvgAggregate = {
  __typename?: 'SaleAvgAggregate';
  totalCostValue?: Maybe<Scalars['Float']['output']>;
  totalValue?: Maybe<Scalars['Float']['output']>;
};

export type SaleCount = {
  __typename?: 'SaleCount';
  FinancialMovement: Scalars['Int']['output'];
  saleItems: Scalars['Int']['output'];
};

export type SaleCountAggregate = {
  __typename?: 'SaleCountAggregate';
  _all: Scalars['Int']['output'];
  blameUserId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  date: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  totalCostValue: Scalars['Int']['output'];
  totalValue: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type SaleCreateInputCustom = {
  FinancialMovement?: InputMaybe<FinancialMovementCreateNestedManyWithoutSaleInput>;
  blameUser?: InputMaybe<UserCreateNestedOneWithoutSalesInput>;
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  saleItems: SaleItemCreateNestedManyWithoutSaleInputCustom;
};

export type SaleCreateManyBlameUserInput = {
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type SaleCreateManyBlameUserInputEnvelope = {
  data: Array<SaleCreateManyBlameUserInput>;
};

export type SaleCreateNestedManyWithoutBlameUserInput = {
  connect?: InputMaybe<Array<SaleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SaleCreateOrConnectWithoutBlameUserInput>>;
  create?: InputMaybe<Array<SaleCreateWithoutBlameUserInput>>;
  createMany?: InputMaybe<SaleCreateManyBlameUserInputEnvelope>;
};

export type SaleCreateNestedOneWithoutFinancialMovementInput = {
  connect?: InputMaybe<SaleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SaleCreateOrConnectWithoutFinancialMovementInput>;
  create?: InputMaybe<SaleCreateWithoutFinancialMovementInput>;
};

export type SaleCreateNestedOneWithoutSaleItemsInput = {
  connect?: InputMaybe<SaleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SaleCreateOrConnectWithoutSaleItemsInput>;
  create?: InputMaybe<SaleCreateWithoutSaleItemsInput>;
};

export type SaleCreateOrConnectWithoutBlameUserInput = {
  create: SaleCreateWithoutBlameUserInput;
  where: SaleWhereUniqueInput;
};

export type SaleCreateOrConnectWithoutFinancialMovementInput = {
  create: SaleCreateWithoutFinancialMovementInput;
  where: SaleWhereUniqueInput;
};

export type SaleCreateOrConnectWithoutSaleItemsInput = {
  create: SaleCreateWithoutSaleItemsInput;
  where: SaleWhereUniqueInput;
};

export type SaleCreateWithoutBlameUserInput = {
  FinancialMovement?: InputMaybe<FinancialMovementCreateNestedManyWithoutSaleInput>;
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutSaleInput>;
};

export type SaleCreateWithoutFinancialMovementInput = {
  blameUser?: InputMaybe<UserCreateNestedOneWithoutSalesInput>;
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutSaleInput>;
};

export type SaleCreateWithoutSaleItemsInput = {
  FinancialMovement?: InputMaybe<FinancialMovementCreateNestedManyWithoutSaleInput>;
  blameUser?: InputMaybe<UserCreateNestedOneWithoutSalesInput>;
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type SaleItem = {
  __typename?: 'SaleItem';
  _count: SaleItemCount;
  blameUser?: Maybe<User>;
  /** FK: User.id - User to blame for */
  blameUserId?: Maybe<Scalars['String']['output']>;
  /** isPostPaid (usually the same as Product.isPostPaid) */
  costIsPostPaid: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** ID */
  id: Scalars['ID']['output'];
  netMarginPercent: Scalars['Float']['output'];
  netMarginValue: Scalars['Float']['output'];
  product: Product;
  /** FK: Product.id */
  productId: Scalars['String']['output'];
  provider?: Maybe<Provider>;
  /** FK: Provider.id (usually the same as Product.providerId) */
  providerId?: Maybe<Scalars['String']['output']>;
  /** Quantity */
  quantity: Scalars['Int']['output'];
  /** Related salePaidCostId payment were made */
  saleCostIsPaid: Scalars['Boolean']['output'];
  /** Related salePaidCostId payment marked this one to be paid */
  saleCostIsSelected: Scalars['Boolean']['output'];
  /** FK: Sale.id */
  saleId: Scalars['String']['output'];
  /** FK: SalePaidCost.id */
  salePaidCostId?: Maybe<Scalars['String']['output']>;
  /** Cost value (the same from Product.costValue) */
  totalCostValue: Scalars['Int']['output'];
  totalCostValueDecimal: Scalars['Float']['output'];
  /** Sold Price (usually the same as Product.priceValue) */
  totalValue: Scalars['Int']['output'];
  totalValueDecimal: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SaleItemAvgAggregate = {
  __typename?: 'SaleItemAvgAggregate';
  quantity?: Maybe<Scalars['Float']['output']>;
  totalCostValue?: Maybe<Scalars['Float']['output']>;
  totalValue?: Maybe<Scalars['Float']['output']>;
};

export type SaleItemCostIsPostPaidProductIdSaleIdCompoundUniqueInput = {
  costIsPostPaid: Scalars['Boolean']['input'];
  productId: Scalars['String']['input'];
  saleId: Scalars['String']['input'];
};

export type SaleItemCount = {
  __typename?: 'SaleItemCount';
  productMovements: Scalars['Int']['output'];
};

export type SaleItemCountAggregate = {
  __typename?: 'SaleItemCountAggregate';
  _all: Scalars['Int']['output'];
  blameUserId: Scalars['Int']['output'];
  costIsPostPaid: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  productId: Scalars['Int']['output'];
  providerId: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  saleCostIsPaid: Scalars['Int']['output'];
  saleCostIsSelected: Scalars['Int']['output'];
  saleId: Scalars['Int']['output'];
  salePaidCostId: Scalars['Int']['output'];
  totalCostValue: Scalars['Int']['output'];
  totalValue: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type SaleItemCreateManyBlameUserInput = {
  costIsPostPaid: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
  providerId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  saleCostIsPaid?: InputMaybe<Scalars['Boolean']['input']>;
  saleCostIsSelected?: InputMaybe<Scalars['Boolean']['input']>;
  saleId: Scalars['String']['input'];
  salePaidCostId?: InputMaybe<Scalars['String']['input']>;
  totalValue: Scalars['Int']['input'];
};

export type SaleItemCreateManyBlameUserInputEnvelope = {
  data: Array<SaleItemCreateManyBlameUserInput>;
};

export type SaleItemCreateManyProductInput = {
  blameUserId?: InputMaybe<Scalars['String']['input']>;
  costIsPostPaid: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  saleCostIsPaid?: InputMaybe<Scalars['Boolean']['input']>;
  saleCostIsSelected?: InputMaybe<Scalars['Boolean']['input']>;
  saleId: Scalars['String']['input'];
  salePaidCostId?: InputMaybe<Scalars['String']['input']>;
  totalValue: Scalars['Int']['input'];
};

export type SaleItemCreateManyProductInputEnvelope = {
  data: Array<SaleItemCreateManyProductInput>;
};

export type SaleItemCreateManyProviderInput = {
  blameUserId?: InputMaybe<Scalars['String']['input']>;
  costIsPostPaid: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  saleCostIsPaid?: InputMaybe<Scalars['Boolean']['input']>;
  saleCostIsSelected?: InputMaybe<Scalars['Boolean']['input']>;
  saleId: Scalars['String']['input'];
  salePaidCostId?: InputMaybe<Scalars['String']['input']>;
  totalValue: Scalars['Int']['input'];
};

export type SaleItemCreateManyProviderInputEnvelope = {
  data: Array<SaleItemCreateManyProviderInput>;
};

export type SaleItemCreateManySaleInput = {
  blameUserId?: InputMaybe<Scalars['String']['input']>;
  costIsPostPaid: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
  providerId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  saleCostIsPaid?: InputMaybe<Scalars['Boolean']['input']>;
  saleCostIsSelected?: InputMaybe<Scalars['Boolean']['input']>;
  salePaidCostId?: InputMaybe<Scalars['String']['input']>;
  totalValue: Scalars['Int']['input'];
};

export type SaleItemCreateManySaleInputEnvelope = {
  data: Array<SaleItemCreateManySaleInput>;
};

export type SaleItemCreateNestedManyWithoutBlameUserInput = {
  connect?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SaleItemCreateOrConnectWithoutBlameUserInput>>;
  create?: InputMaybe<Array<SaleItemCreateWithoutBlameUserInput>>;
  createMany?: InputMaybe<SaleItemCreateManyBlameUserInputEnvelope>;
};

export type SaleItemCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SaleItemCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<SaleItemCreateWithoutProductInput>>;
  createMany?: InputMaybe<SaleItemCreateManyProductInputEnvelope>;
};

export type SaleItemCreateNestedManyWithoutProviderInput = {
  connect?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SaleItemCreateOrConnectWithoutProviderInput>>;
  create?: InputMaybe<Array<SaleItemCreateWithoutProviderInput>>;
  createMany?: InputMaybe<SaleItemCreateManyProviderInputEnvelope>;
};

export type SaleItemCreateNestedManyWithoutSaleInput = {
  connect?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SaleItemCreateOrConnectWithoutSaleInput>>;
  create?: InputMaybe<Array<SaleItemCreateWithoutSaleInput>>;
  createMany?: InputMaybe<SaleItemCreateManySaleInputEnvelope>;
};

export type SaleItemCreateNestedManyWithoutSaleInputCustom = {
  create?: InputMaybe<Array<SaleItemCreateWithoutSaleInput>>;
};

export type SaleItemCreateNestedOneWithoutProductMovementsInput = {
  connect?: InputMaybe<SaleItemWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SaleItemCreateOrConnectWithoutProductMovementsInput>;
  create?: InputMaybe<SaleItemCreateWithoutProductMovementsInput>;
};

export type SaleItemCreateOrConnectWithoutBlameUserInput = {
  create: SaleItemCreateWithoutBlameUserInput;
  where: SaleItemWhereUniqueInput;
};

export type SaleItemCreateOrConnectWithoutProductInput = {
  create: SaleItemCreateWithoutProductInput;
  where: SaleItemWhereUniqueInput;
};

export type SaleItemCreateOrConnectWithoutProductMovementsInput = {
  create: SaleItemCreateWithoutProductMovementsInput;
  where: SaleItemWhereUniqueInput;
};

export type SaleItemCreateOrConnectWithoutProviderInput = {
  create: SaleItemCreateWithoutProviderInput;
  where: SaleItemWhereUniqueInput;
};

export type SaleItemCreateOrConnectWithoutSaleInput = {
  create: SaleItemCreateWithoutSaleInput;
  where: SaleItemWhereUniqueInput;
};

export type SaleItemCreateWithoutBlameUserInput = {
  costIsPostPaid: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  product: ProductCreateNestedOneWithoutSaleItemsInput;
  productMovements?: InputMaybe<ProductMovementCreateNestedManyWithoutSaleItemInput>;
  provider?: InputMaybe<ProviderCreateNestedOneWithoutSaleItemsInput>;
  quantity: Scalars['Int']['input'];
  sale?: InputMaybe<SaleCreateNestedOneWithoutSaleItemsInput>;
  saleCostIsPaid?: InputMaybe<Scalars['Boolean']['input']>;
  saleCostIsSelected?: InputMaybe<Scalars['Boolean']['input']>;
  salePaidCostId?: InputMaybe<Scalars['String']['input']>;
  totalValue: Scalars['Int']['input'];
};

export type SaleItemCreateWithoutProductInput = {
  blameUser?: InputMaybe<UserCreateNestedOneWithoutSaleItemsInput>;
  costIsPostPaid: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  productMovements?: InputMaybe<ProductMovementCreateNestedManyWithoutSaleItemInput>;
  provider?: InputMaybe<ProviderCreateNestedOneWithoutSaleItemsInput>;
  quantity: Scalars['Int']['input'];
  sale?: InputMaybe<SaleCreateNestedOneWithoutSaleItemsInput>;
  saleCostIsPaid?: InputMaybe<Scalars['Boolean']['input']>;
  saleCostIsSelected?: InputMaybe<Scalars['Boolean']['input']>;
  salePaidCostId?: InputMaybe<Scalars['String']['input']>;
  totalValue: Scalars['Int']['input'];
};

export type SaleItemCreateWithoutProductMovementsInput = {
  blameUser?: InputMaybe<UserCreateNestedOneWithoutSaleItemsInput>;
  costIsPostPaid: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  product: ProductCreateNestedOneWithoutSaleItemsInput;
  provider?: InputMaybe<ProviderCreateNestedOneWithoutSaleItemsInput>;
  quantity: Scalars['Int']['input'];
  sale?: InputMaybe<SaleCreateNestedOneWithoutSaleItemsInput>;
  saleCostIsPaid?: InputMaybe<Scalars['Boolean']['input']>;
  saleCostIsSelected?: InputMaybe<Scalars['Boolean']['input']>;
  salePaidCostId?: InputMaybe<Scalars['String']['input']>;
  totalValue: Scalars['Int']['input'];
};

export type SaleItemCreateWithoutProviderInput = {
  blameUser?: InputMaybe<UserCreateNestedOneWithoutSaleItemsInput>;
  costIsPostPaid: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  product: ProductCreateNestedOneWithoutSaleItemsInput;
  productMovements?: InputMaybe<ProductMovementCreateNestedManyWithoutSaleItemInput>;
  quantity: Scalars['Int']['input'];
  sale?: InputMaybe<SaleCreateNestedOneWithoutSaleItemsInput>;
  saleCostIsPaid?: InputMaybe<Scalars['Boolean']['input']>;
  saleCostIsSelected?: InputMaybe<Scalars['Boolean']['input']>;
  salePaidCostId?: InputMaybe<Scalars['String']['input']>;
  totalValue: Scalars['Int']['input'];
};

export type SaleItemCreateWithoutSaleInput = {
  blameUser?: InputMaybe<UserCreateNestedOneWithoutSaleItemsInput>;
  costIsPostPaid: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  product: ProductCreateNestedOneWithoutSaleItemsInput;
  productMovements?: InputMaybe<ProductMovementCreateNestedManyWithoutSaleItemInput>;
  provider?: InputMaybe<ProviderCreateNestedOneWithoutSaleItemsInput>;
  quantity: Scalars['Int']['input'];
  saleCostIsPaid?: InputMaybe<Scalars['Boolean']['input']>;
  saleCostIsSelected?: InputMaybe<Scalars['Boolean']['input']>;
  salePaidCostId?: InputMaybe<Scalars['String']['input']>;
  totalValue: Scalars['Int']['input'];
};

export type SaleItemListRelationFilter = {
  every?: InputMaybe<SaleItemWhereInput>;
  none?: InputMaybe<SaleItemWhereInput>;
  some?: InputMaybe<SaleItemWhereInput>;
};

export type SaleItemMaxAggregate = {
  __typename?: 'SaleItemMaxAggregate';
  blameUserId?: Maybe<Scalars['String']['output']>;
  costIsPostPaid?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  saleCostIsPaid?: Maybe<Scalars['Boolean']['output']>;
  saleCostIsSelected?: Maybe<Scalars['Boolean']['output']>;
  saleId?: Maybe<Scalars['String']['output']>;
  salePaidCostId?: Maybe<Scalars['String']['output']>;
  totalCostValue?: Maybe<Scalars['Int']['output']>;
  totalValue?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SaleItemMinAggregate = {
  __typename?: 'SaleItemMinAggregate';
  blameUserId?: Maybe<Scalars['String']['output']>;
  costIsPostPaid?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  saleCostIsPaid?: Maybe<Scalars['Boolean']['output']>;
  saleCostIsSelected?: Maybe<Scalars['Boolean']['output']>;
  saleId?: Maybe<Scalars['String']['output']>;
  salePaidCostId?: Maybe<Scalars['String']['output']>;
  totalCostValue?: Maybe<Scalars['Int']['output']>;
  totalValue?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SaleItemNullableScalarRelationFilter = {
  is?: InputMaybe<SaleItemWhereInput>;
  isNot?: InputMaybe<SaleItemWhereInput>;
};

export type SaleItemOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SaleItemOrderByWithRelationInput = {
  blameUser?: InputMaybe<UserOrderByWithRelationInput>;
  blameUserId?: InputMaybe<SortOrder>;
  costIsPostPaid?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  productMovements?: InputMaybe<ProductMovementOrderByRelationAggregateInput>;
  provider?: InputMaybe<ProviderOrderByWithRelationInput>;
  providerId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  sale?: InputMaybe<SaleOrderByWithRelationInput>;
  saleCostIsPaid?: InputMaybe<SortOrder>;
  saleCostIsSelected?: InputMaybe<SortOrder>;
  saleId?: InputMaybe<SortOrder>;
  salePaidCostId?: InputMaybe<SortOrder>;
  totalCostValue?: InputMaybe<SortOrder>;
  totalValue?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SaleItemPaginated = {
  __typename?: 'SaleItemPaginated';
  /** Number of current page */
  currentPage?: Maybe<Scalars['Int']['output']>;
  /** Boolean to use on a cursor-based pagination. E.g: Mobile scroll */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** Number of last page */
  lastPage?: Maybe<Scalars['Int']['output']>;
  nextCursor?: Maybe<Scalars['Int']['output']>;
  /** Count for query results without skip, take and cursor */
  total?: Maybe<Scalars['Int']['output']>;
};

export enum SaleItemScalarFieldEnum {
  BlameUserId = 'blameUserId',
  CostIsPostPaid = 'costIsPostPaid',
  CreatedAt = 'createdAt',
  Id = 'id',
  ProductId = 'productId',
  ProviderId = 'providerId',
  Quantity = 'quantity',
  SaleCostIsPaid = 'saleCostIsPaid',
  SaleCostIsSelected = 'saleCostIsSelected',
  SaleId = 'saleId',
  SalePaidCostId = 'salePaidCostId',
  TotalCostValue = 'totalCostValue',
  TotalValue = 'totalValue',
  UpdatedAt = 'updatedAt'
}

export type SaleItemScalarWhereInput = {
  AND?: InputMaybe<Array<SaleItemScalarWhereInput>>;
  NOT?: InputMaybe<Array<SaleItemScalarWhereInput>>;
  OR?: InputMaybe<Array<SaleItemScalarWhereInput>>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  costIsPostPaid?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
  providerId?: InputMaybe<StringNullableFilter>;
  quantity?: InputMaybe<IntFilter>;
  saleCostIsPaid?: InputMaybe<BoolFilter>;
  saleCostIsSelected?: InputMaybe<BoolFilter>;
  saleId?: InputMaybe<StringFilter>;
  salePaidCostId?: InputMaybe<StringNullableFilter>;
  totalCostValue?: InputMaybe<IntFilter>;
  totalValue?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SaleItemSumAggregate = {
  __typename?: 'SaleItemSumAggregate';
  quantity?: Maybe<Scalars['Int']['output']>;
  totalCostValue?: Maybe<Scalars['Int']['output']>;
  totalValue?: Maybe<Scalars['Int']['output']>;
};

export type SaleItemUpdateManyMutationInput = {
  costIsPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  saleCostIsPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  saleCostIsSelected?: InputMaybe<BoolFieldUpdateOperationsInput>;
  salePaidCostId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SaleItemUpdateManyWithWhereWithoutBlameUserInput = {
  data: SaleItemUpdateManyMutationInput;
  where: SaleItemScalarWhereInput;
};

export type SaleItemUpdateManyWithWhereWithoutProductInput = {
  data: SaleItemUpdateManyMutationInput;
  where: SaleItemScalarWhereInput;
};

export type SaleItemUpdateManyWithWhereWithoutProviderInput = {
  data: SaleItemUpdateManyMutationInput;
  where: SaleItemScalarWhereInput;
};

export type SaleItemUpdateManyWithWhereWithoutSaleInput = {
  data: SaleItemUpdateManyMutationInput;
  where: SaleItemScalarWhereInput;
};

export type SaleItemUpdateManyWithoutBlameUserNestedInput = {
  connect?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SaleItemCreateOrConnectWithoutBlameUserInput>>;
  create?: InputMaybe<Array<SaleItemCreateWithoutBlameUserInput>>;
  createMany?: InputMaybe<SaleItemCreateManyBlameUserInputEnvelope>;
  delete?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SaleItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  set?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  update?: InputMaybe<Array<SaleItemUpdateWithWhereUniqueWithoutBlameUserInput>>;
  updateMany?: InputMaybe<Array<SaleItemUpdateManyWithWhereWithoutBlameUserInput>>;
  upsert?: InputMaybe<Array<SaleItemUpsertWithWhereUniqueWithoutBlameUserInput>>;
};

export type SaleItemUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SaleItemCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<SaleItemCreateWithoutProductInput>>;
  createMany?: InputMaybe<SaleItemCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SaleItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  set?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  update?: InputMaybe<Array<SaleItemUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<SaleItemUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<SaleItemUpsertWithWhereUniqueWithoutProductInput>>;
};

export type SaleItemUpdateManyWithoutProviderNestedInput = {
  connect?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SaleItemCreateOrConnectWithoutProviderInput>>;
  create?: InputMaybe<Array<SaleItemCreateWithoutProviderInput>>;
  createMany?: InputMaybe<SaleItemCreateManyProviderInputEnvelope>;
  delete?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SaleItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  set?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  update?: InputMaybe<Array<SaleItemUpdateWithWhereUniqueWithoutProviderInput>>;
  updateMany?: InputMaybe<Array<SaleItemUpdateManyWithWhereWithoutProviderInput>>;
  upsert?: InputMaybe<Array<SaleItemUpsertWithWhereUniqueWithoutProviderInput>>;
};

export type SaleItemUpdateManyWithoutSaleNestedInput = {
  connect?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SaleItemCreateOrConnectWithoutSaleInput>>;
  create?: InputMaybe<Array<SaleItemCreateWithoutSaleInput>>;
  createMany?: InputMaybe<SaleItemCreateManySaleInputEnvelope>;
  delete?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SaleItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  set?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  update?: InputMaybe<Array<SaleItemUpdateWithWhereUniqueWithoutSaleInput>>;
  updateMany?: InputMaybe<Array<SaleItemUpdateManyWithWhereWithoutSaleInput>>;
  upsert?: InputMaybe<Array<SaleItemUpsertWithWhereUniqueWithoutSaleInput>>;
};

export type SaleItemUpdateManyWithoutSaleNestedInputCustom = {
  create?: InputMaybe<Array<SaleItemCreateWithoutSaleInput>>;
  deleteMany?: InputMaybe<Array<SaleItemScalarWhereInput>>;
  update?: InputMaybe<Array<SaleItemUpdateWithWhereUniqueWithoutSaleInput>>;
};

export type SaleItemUpdateOneWithoutProductMovementsNestedInput = {
  connect?: InputMaybe<SaleItemWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SaleItemCreateOrConnectWithoutProductMovementsInput>;
  create?: InputMaybe<SaleItemCreateWithoutProductMovementsInput>;
  delete?: InputMaybe<SaleItemWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<SaleItemUpdateToOneWithWhereWithoutProductMovementsInput>;
  upsert?: InputMaybe<SaleItemUpsertWithoutProductMovementsInput>;
};

export type SaleItemUpdateToOneWithWhereWithoutProductMovementsInput = {
  data: SaleItemUpdateWithoutProductMovementsInput;
  where?: InputMaybe<SaleItemWhereInput>;
};

export type SaleItemUpdateWithWhereUniqueWithoutBlameUserInput = {
  data: SaleItemUpdateWithoutBlameUserInput;
  where: SaleItemWhereUniqueInput;
};

export type SaleItemUpdateWithWhereUniqueWithoutProductInput = {
  data: SaleItemUpdateWithoutProductInput;
  where: SaleItemWhereUniqueInput;
};

export type SaleItemUpdateWithWhereUniqueWithoutProviderInput = {
  data: SaleItemUpdateWithoutProviderInput;
  where: SaleItemWhereUniqueInput;
};

export type SaleItemUpdateWithWhereUniqueWithoutSaleInput = {
  data: SaleItemUpdateWithoutSaleInput;
  where: SaleItemWhereUniqueInput;
};

export type SaleItemUpdateWithoutBlameUserInput = {
  costIsPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutSaleItemsNestedInput>;
  productMovements?: InputMaybe<ProductMovementUpdateManyWithoutSaleItemNestedInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutSaleItemsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  sale?: InputMaybe<SaleUpdateOneWithoutSaleItemsNestedInput>;
  saleCostIsPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  saleCostIsSelected?: InputMaybe<BoolFieldUpdateOperationsInput>;
  salePaidCostId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SaleItemUpdateWithoutProductInput = {
  blameUser?: InputMaybe<UserUpdateOneWithoutSaleItemsNestedInput>;
  costIsPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  productMovements?: InputMaybe<ProductMovementUpdateManyWithoutSaleItemNestedInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutSaleItemsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  sale?: InputMaybe<SaleUpdateOneWithoutSaleItemsNestedInput>;
  saleCostIsPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  saleCostIsSelected?: InputMaybe<BoolFieldUpdateOperationsInput>;
  salePaidCostId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SaleItemUpdateWithoutProductMovementsInput = {
  blameUser?: InputMaybe<UserUpdateOneWithoutSaleItemsNestedInput>;
  costIsPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutSaleItemsNestedInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutSaleItemsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  sale?: InputMaybe<SaleUpdateOneWithoutSaleItemsNestedInput>;
  saleCostIsPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  saleCostIsSelected?: InputMaybe<BoolFieldUpdateOperationsInput>;
  salePaidCostId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SaleItemUpdateWithoutProviderInput = {
  blameUser?: InputMaybe<UserUpdateOneWithoutSaleItemsNestedInput>;
  costIsPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutSaleItemsNestedInput>;
  productMovements?: InputMaybe<ProductMovementUpdateManyWithoutSaleItemNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  sale?: InputMaybe<SaleUpdateOneWithoutSaleItemsNestedInput>;
  saleCostIsPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  saleCostIsSelected?: InputMaybe<BoolFieldUpdateOperationsInput>;
  salePaidCostId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SaleItemUpdateWithoutSaleInput = {
  blameUser?: InputMaybe<UserUpdateOneWithoutSaleItemsNestedInput>;
  costIsPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutSaleItemsNestedInput>;
  productMovements?: InputMaybe<ProductMovementUpdateManyWithoutSaleItemNestedInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutSaleItemsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  saleCostIsPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  saleCostIsSelected?: InputMaybe<BoolFieldUpdateOperationsInput>;
  salePaidCostId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SaleItemUpsertWithWhereUniqueWithoutBlameUserInput = {
  create: SaleItemCreateWithoutBlameUserInput;
  update: SaleItemUpdateWithoutBlameUserInput;
  where: SaleItemWhereUniqueInput;
};

export type SaleItemUpsertWithWhereUniqueWithoutProductInput = {
  create: SaleItemCreateWithoutProductInput;
  update: SaleItemUpdateWithoutProductInput;
  where: SaleItemWhereUniqueInput;
};

export type SaleItemUpsertWithWhereUniqueWithoutProviderInput = {
  create: SaleItemCreateWithoutProviderInput;
  update: SaleItemUpdateWithoutProviderInput;
  where: SaleItemWhereUniqueInput;
};

export type SaleItemUpsertWithWhereUniqueWithoutSaleInput = {
  create: SaleItemCreateWithoutSaleInput;
  update: SaleItemUpdateWithoutSaleInput;
  where: SaleItemWhereUniqueInput;
};

export type SaleItemUpsertWithoutProductMovementsInput = {
  create: SaleItemCreateWithoutProductMovementsInput;
  update: SaleItemUpdateWithoutProductMovementsInput;
  where?: InputMaybe<SaleItemWhereInput>;
};

export type SaleItemWhereInput = {
  AND?: InputMaybe<Array<SaleItemWhereInput>>;
  NOT?: InputMaybe<Array<SaleItemWhereInput>>;
  OR?: InputMaybe<Array<SaleItemWhereInput>>;
  blameUser?: InputMaybe<UserNullableScalarRelationFilter>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  costIsPostPaid?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductScalarRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  productMovements?: InputMaybe<ProductMovementListRelationFilter>;
  provider?: InputMaybe<ProviderNullableScalarRelationFilter>;
  providerId?: InputMaybe<StringNullableFilter>;
  quantity?: InputMaybe<IntFilter>;
  sale?: InputMaybe<SaleNullableScalarRelationFilter>;
  saleCostIsPaid?: InputMaybe<BoolFilter>;
  saleCostIsSelected?: InputMaybe<BoolFilter>;
  saleId?: InputMaybe<StringFilter>;
  salePaidCostId?: InputMaybe<StringNullableFilter>;
  totalCostValue?: InputMaybe<IntFilter>;
  totalValue?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SaleItemWhereUniqueInput = {
  AND?: InputMaybe<Array<SaleItemWhereInput>>;
  NOT?: InputMaybe<Array<SaleItemWhereInput>>;
  OR?: InputMaybe<Array<SaleItemWhereInput>>;
  blameUser?: InputMaybe<UserNullableScalarRelationFilter>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  costIsPostPaid?: InputMaybe<BoolFilter>;
  costIsPostPaid_productId_saleId?: InputMaybe<SaleItemCostIsPostPaidProductIdSaleIdCompoundUniqueInput>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<ProductScalarRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  productMovements?: InputMaybe<ProductMovementListRelationFilter>;
  provider?: InputMaybe<ProviderNullableScalarRelationFilter>;
  providerId?: InputMaybe<StringNullableFilter>;
  quantity?: InputMaybe<IntFilter>;
  sale?: InputMaybe<SaleNullableScalarRelationFilter>;
  saleCostIsPaid?: InputMaybe<BoolFilter>;
  saleCostIsSelected?: InputMaybe<BoolFilter>;
  saleId?: InputMaybe<StringFilter>;
  salePaidCostId?: InputMaybe<StringNullableFilter>;
  totalCostValue?: InputMaybe<IntFilter>;
  totalValue?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SaleItemsOutput = {
  __typename?: 'SaleItemsOutput';
  nodes: Array<SaleItem>;
  /** Pagination info for findMany requests */
  pageInfo?: Maybe<SaleItemPaginated>;
};

export type SaleListRelationFilter = {
  every?: InputMaybe<SaleWhereInput>;
  none?: InputMaybe<SaleWhereInput>;
  some?: InputMaybe<SaleWhereInput>;
};

export type SaleMaxAggregate = {
  __typename?: 'SaleMaxAggregate';
  blameUserId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  totalCostValue?: Maybe<Scalars['Int']['output']>;
  totalValue?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SaleMinAggregate = {
  __typename?: 'SaleMinAggregate';
  blameUserId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  totalCostValue?: Maybe<Scalars['Int']['output']>;
  totalValue?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SaleNullableScalarRelationFilter = {
  is?: InputMaybe<SaleWhereInput>;
  isNot?: InputMaybe<SaleWhereInput>;
};

export type SaleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SaleOrderByWithRelationInput = {
  FinancialMovement?: InputMaybe<FinancialMovementOrderByRelationAggregateInput>;
  blameUser?: InputMaybe<UserOrderByWithRelationInput>;
  blameUserId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  saleItems?: InputMaybe<SaleItemOrderByRelationAggregateInput>;
  totalCostValue?: InputMaybe<SortOrder>;
  totalValue?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SalePaginated = {
  __typename?: 'SalePaginated';
  /** Number of current page */
  currentPage?: Maybe<Scalars['Int']['output']>;
  /** Boolean to use on a cursor-based pagination. E.g: Mobile scroll */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** Number of last page */
  lastPage?: Maybe<Scalars['Int']['output']>;
  nextCursor?: Maybe<Scalars['Int']['output']>;
  /** Count for query results without skip, take and cursor */
  total?: Maybe<Scalars['Int']['output']>;
};

export enum SaleScalarFieldEnum {
  BlameUserId = 'blameUserId',
  CreatedAt = 'createdAt',
  Date = 'date',
  Id = 'id',
  TotalCostValue = 'totalCostValue',
  TotalValue = 'totalValue',
  UpdatedAt = 'updatedAt'
}

export type SaleScalarWhereInput = {
  AND?: InputMaybe<Array<SaleScalarWhereInput>>;
  NOT?: InputMaybe<Array<SaleScalarWhereInput>>;
  OR?: InputMaybe<Array<SaleScalarWhereInput>>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  totalCostValue?: InputMaybe<IntFilter>;
  totalValue?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SaleSumAggregate = {
  __typename?: 'SaleSumAggregate';
  totalCostValue?: Maybe<Scalars['Int']['output']>;
  totalValue?: Maybe<Scalars['Int']['output']>;
};

export type SaleUpdateInputCustom = {
  FinancialMovement?: InputMaybe<FinancialMovementUpdateManyWithoutSaleNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneWithoutSalesNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  saleItems: SaleItemUpdateManyWithoutSaleNestedInputCustom;
};

export type SaleUpdateManyMutationInput = {
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SaleUpdateManyWithWhereWithoutBlameUserInput = {
  data: SaleUpdateManyMutationInput;
  where: SaleScalarWhereInput;
};

export type SaleUpdateManyWithoutBlameUserNestedInput = {
  connect?: InputMaybe<Array<SaleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SaleCreateOrConnectWithoutBlameUserInput>>;
  create?: InputMaybe<Array<SaleCreateWithoutBlameUserInput>>;
  createMany?: InputMaybe<SaleCreateManyBlameUserInputEnvelope>;
  delete?: InputMaybe<Array<SaleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SaleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SaleWhereUniqueInput>>;
  set?: InputMaybe<Array<SaleWhereUniqueInput>>;
  update?: InputMaybe<Array<SaleUpdateWithWhereUniqueWithoutBlameUserInput>>;
  updateMany?: InputMaybe<Array<SaleUpdateManyWithWhereWithoutBlameUserInput>>;
  upsert?: InputMaybe<Array<SaleUpsertWithWhereUniqueWithoutBlameUserInput>>;
};

export type SaleUpdateOneWithoutFinancialMovementNestedInput = {
  connect?: InputMaybe<SaleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SaleCreateOrConnectWithoutFinancialMovementInput>;
  create?: InputMaybe<SaleCreateWithoutFinancialMovementInput>;
  delete?: InputMaybe<SaleWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<SaleUpdateToOneWithWhereWithoutFinancialMovementInput>;
  upsert?: InputMaybe<SaleUpsertWithoutFinancialMovementInput>;
};

export type SaleUpdateOneWithoutSaleItemsNestedInput = {
  connect?: InputMaybe<SaleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SaleCreateOrConnectWithoutSaleItemsInput>;
  create?: InputMaybe<SaleCreateWithoutSaleItemsInput>;
  delete?: InputMaybe<SaleWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<SaleUpdateToOneWithWhereWithoutSaleItemsInput>;
  upsert?: InputMaybe<SaleUpsertWithoutSaleItemsInput>;
};

export type SaleUpdateToOneWithWhereWithoutFinancialMovementInput = {
  data: SaleUpdateWithoutFinancialMovementInput;
  where?: InputMaybe<SaleWhereInput>;
};

export type SaleUpdateToOneWithWhereWithoutSaleItemsInput = {
  data: SaleUpdateWithoutSaleItemsInput;
  where?: InputMaybe<SaleWhereInput>;
};

export type SaleUpdateWithWhereUniqueWithoutBlameUserInput = {
  data: SaleUpdateWithoutBlameUserInput;
  where: SaleWhereUniqueInput;
};

export type SaleUpdateWithoutBlameUserInput = {
  FinancialMovement?: InputMaybe<FinancialMovementUpdateManyWithoutSaleNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutSaleNestedInput>;
};

export type SaleUpdateWithoutFinancialMovementInput = {
  blameUser?: InputMaybe<UserUpdateOneWithoutSalesNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutSaleNestedInput>;
};

export type SaleUpdateWithoutSaleItemsInput = {
  FinancialMovement?: InputMaybe<FinancialMovementUpdateManyWithoutSaleNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneWithoutSalesNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SaleUpsertWithWhereUniqueWithoutBlameUserInput = {
  create: SaleCreateWithoutBlameUserInput;
  update: SaleUpdateWithoutBlameUserInput;
  where: SaleWhereUniqueInput;
};

export type SaleUpsertWithoutFinancialMovementInput = {
  create: SaleCreateWithoutFinancialMovementInput;
  update: SaleUpdateWithoutFinancialMovementInput;
  where?: InputMaybe<SaleWhereInput>;
};

export type SaleUpsertWithoutSaleItemsInput = {
  create: SaleCreateWithoutSaleItemsInput;
  update: SaleUpdateWithoutSaleItemsInput;
  where?: InputMaybe<SaleWhereInput>;
};

export type SaleWhereInput = {
  AND?: InputMaybe<Array<SaleWhereInput>>;
  FinancialMovement?: InputMaybe<FinancialMovementListRelationFilter>;
  NOT?: InputMaybe<Array<SaleWhereInput>>;
  OR?: InputMaybe<Array<SaleWhereInput>>;
  blameUser?: InputMaybe<UserNullableScalarRelationFilter>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  saleItems?: InputMaybe<SaleItemListRelationFilter>;
  totalCostValue?: InputMaybe<IntFilter>;
  totalValue?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SaleWhereInputCustom = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SaleWhereUniqueInput = {
  AND?: InputMaybe<Array<SaleWhereInput>>;
  FinancialMovement?: InputMaybe<FinancialMovementListRelationFilter>;
  NOT?: InputMaybe<Array<SaleWhereInput>>;
  OR?: InputMaybe<Array<SaleWhereInput>>;
  blameUser?: InputMaybe<UserNullableScalarRelationFilter>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  saleItems?: InputMaybe<SaleItemListRelationFilter>;
  totalCostValue?: InputMaybe<IntFilter>;
  totalValue?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SalesOutput = {
  __typename?: 'SalesOutput';
  nodes: Array<Sale>;
  /** Pagination info for findMany requests */
  pageInfo?: Maybe<SalePaginated>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  /** ID */
  id: Scalars['ID']['output'];
  /** Name */
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UserCount = {
  __typename?: 'UserCount';
  ProductMovements: Scalars['Int']['output'];
  products: Scalars['Int']['output'];
  providers: Scalars['Int']['output'];
  saleItems: Scalars['Int']['output'];
  sales: Scalars['Int']['output'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type UserCreateNestedOneWithoutProductMovementsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductMovementsInput>;
  create?: InputMaybe<UserCreateWithoutProductMovementsInput>;
};

export type UserCreateNestedOneWithoutProductsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<UserCreateWithoutProductsInput>;
};

export type UserCreateNestedOneWithoutProvidersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProvidersInput>;
  create?: InputMaybe<UserCreateWithoutProvidersInput>;
};

export type UserCreateNestedOneWithoutSaleItemsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSaleItemsInput>;
  create?: InputMaybe<UserCreateWithoutSaleItemsInput>;
};

export type UserCreateNestedOneWithoutSalesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSalesInput>;
  create?: InputMaybe<UserCreateWithoutSalesInput>;
};

export type UserCreateOrConnectWithoutProductMovementsInput = {
  create: UserCreateWithoutProductMovementsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProductsInput = {
  create: UserCreateWithoutProductsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProvidersInput = {
  create: UserCreateWithoutProvidersInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSaleItemsInput = {
  create: UserCreateWithoutSaleItemsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSalesInput = {
  create: UserCreateWithoutSalesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutProductMovementsInput = {
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutBlameUserInput>;
  providers?: InputMaybe<ProviderCreateNestedManyWithoutBlameUserInput>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutBlameUserInput>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutBlameUserInput>;
};

export type UserCreateWithoutProductsInput = {
  ProductMovements?: InputMaybe<ProductMovementCreateNestedManyWithoutBlameUserInput>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  providers?: InputMaybe<ProviderCreateNestedManyWithoutBlameUserInput>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutBlameUserInput>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutBlameUserInput>;
};

export type UserCreateWithoutProvidersInput = {
  ProductMovements?: InputMaybe<ProductMovementCreateNestedManyWithoutBlameUserInput>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutBlameUserInput>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutBlameUserInput>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutBlameUserInput>;
};

export type UserCreateWithoutSaleItemsInput = {
  ProductMovements?: InputMaybe<ProductMovementCreateNestedManyWithoutBlameUserInput>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutBlameUserInput>;
  providers?: InputMaybe<ProviderCreateNestedManyWithoutBlameUserInput>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutBlameUserInput>;
};

export type UserCreateWithoutSalesInput = {
  ProductMovements?: InputMaybe<ProductMovementCreateNestedManyWithoutBlameUserInput>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutBlameUserInput>;
  providers?: InputMaybe<ProviderCreateNestedManyWithoutBlameUserInput>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutBlameUserInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserNullableScalarRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserOrderByWithRelationInput = {
  ProductMovements?: InputMaybe<ProductMovementOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<ProductOrderByRelationAggregateInput>;
  providers?: InputMaybe<ProviderOrderByRelationAggregateInput>;
  saleItems?: InputMaybe<SaleItemOrderByRelationAggregateInput>;
  sales?: InputMaybe<SaleOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserPaginated = {
  __typename?: 'UserPaginated';
  /** Number of current page */
  currentPage?: Maybe<Scalars['Int']['output']>;
  /** Boolean to use on a cursor-based pagination. E.g: Mobile scroll */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** Number of last page */
  lastPage?: Maybe<Scalars['Int']['output']>;
  nextCursor?: Maybe<Scalars['Int']['output']>;
  /** Count for query results without skip, take and cursor */
  total?: Maybe<Scalars['Int']['output']>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type UserUpdateOneWithoutProductMovementsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductMovementsInput>;
  create?: InputMaybe<UserCreateWithoutProductMovementsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutProductMovementsInput>;
  upsert?: InputMaybe<UserUpsertWithoutProductMovementsInput>;
};

export type UserUpdateOneWithoutProductsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<UserCreateWithoutProductsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutProductsInput>;
  upsert?: InputMaybe<UserUpsertWithoutProductsInput>;
};

export type UserUpdateOneWithoutProvidersNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProvidersInput>;
  create?: InputMaybe<UserCreateWithoutProvidersInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutProvidersInput>;
  upsert?: InputMaybe<UserUpsertWithoutProvidersInput>;
};

export type UserUpdateOneWithoutSaleItemsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSaleItemsInput>;
  create?: InputMaybe<UserCreateWithoutSaleItemsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutSaleItemsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSaleItemsInput>;
};

export type UserUpdateOneWithoutSalesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSalesInput>;
  create?: InputMaybe<UserCreateWithoutSalesInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutSalesInput>;
  upsert?: InputMaybe<UserUpsertWithoutSalesInput>;
};

export type UserUpdateToOneWithWhereWithoutProductMovementsInput = {
  data: UserUpdateWithoutProductMovementsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutProductsInput = {
  data: UserUpdateWithoutProductsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutProvidersInput = {
  data: UserUpdateWithoutProvidersInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutSaleItemsInput = {
  data: UserUpdateWithoutSaleItemsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutSalesInput = {
  data: UserUpdateWithoutSalesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutProductMovementsInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutBlameUserNestedInput>;
  providers?: InputMaybe<ProviderUpdateManyWithoutBlameUserNestedInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutBlameUserNestedInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutBlameUserNestedInput>;
};

export type UserUpdateWithoutProductsInput = {
  ProductMovements?: InputMaybe<ProductMovementUpdateManyWithoutBlameUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  providers?: InputMaybe<ProviderUpdateManyWithoutBlameUserNestedInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutBlameUserNestedInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutBlameUserNestedInput>;
};

export type UserUpdateWithoutProvidersInput = {
  ProductMovements?: InputMaybe<ProductMovementUpdateManyWithoutBlameUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutBlameUserNestedInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutBlameUserNestedInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutBlameUserNestedInput>;
};

export type UserUpdateWithoutSaleItemsInput = {
  ProductMovements?: InputMaybe<ProductMovementUpdateManyWithoutBlameUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutBlameUserNestedInput>;
  providers?: InputMaybe<ProviderUpdateManyWithoutBlameUserNestedInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutBlameUserNestedInput>;
};

export type UserUpdateWithoutSalesInput = {
  ProductMovements?: InputMaybe<ProductMovementUpdateManyWithoutBlameUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutBlameUserNestedInput>;
  providers?: InputMaybe<ProviderUpdateManyWithoutBlameUserNestedInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutBlameUserNestedInput>;
};

export type UserUpsertWithoutProductMovementsInput = {
  create: UserCreateWithoutProductMovementsInput;
  update: UserUpdateWithoutProductMovementsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutProductsInput = {
  create: UserCreateWithoutProductsInput;
  update: UserUpdateWithoutProductsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutProvidersInput = {
  create: UserCreateWithoutProvidersInput;
  update: UserUpdateWithoutProvidersInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutSaleItemsInput = {
  create: UserCreateWithoutSaleItemsInput;
  update: UserUpdateWithoutSaleItemsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutSalesInput = {
  create: UserCreateWithoutSalesInput;
  update: UserUpdateWithoutSalesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  ProductMovements?: InputMaybe<ProductMovementListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
  providers?: InputMaybe<ProviderListRelationFilter>;
  saleItems?: InputMaybe<SaleItemListRelationFilter>;
  sales?: InputMaybe<SaleListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  ProductMovements?: InputMaybe<ProductMovementListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
  providers?: InputMaybe<ProviderListRelationFilter>;
  saleItems?: InputMaybe<SaleItemListRelationFilter>;
  sales?: InputMaybe<SaleListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UsersOutput = {
  __typename?: 'UsersOutput';
  nodes: Array<User>;
  /** Pagination info for findMany requests */
  pageInfo?: Maybe<UserPaginated>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AggregateFinancialMovement: ResolverTypeWrapper<AggregateFinancialMovement>;
  AggregateProduct: ResolverTypeWrapper<AggregateProduct>;
  AggregateSale: ResolverTypeWrapper<AggregateSale>;
  BoolFieldUpdateOperationsInput: BoolFieldUpdateOperationsInput;
  BoolFilter: BoolFilter;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  EnumFinancialMovementTypeFieldUpdateOperationsInput: EnumFinancialMovementTypeFieldUpdateOperationsInput;
  EnumFinancialMovementTypeFilter: EnumFinancialMovementTypeFilter;
  EnumProductMovementGroupTypeFieldUpdateOperationsInput: EnumProductMovementGroupTypeFieldUpdateOperationsInput;
  EnumProductMovementGroupTypeFilter: EnumProductMovementGroupTypeFilter;
  EnumProductMovementTypeFieldUpdateOperationsInput: EnumProductMovementTypeFieldUpdateOperationsInput;
  EnumProductMovementTypeFilter: EnumProductMovementTypeFilter;
  FinancialMovement: ResolverTypeWrapper<FinancialMovement>;
  FinancialMovementAvgAggregate: ResolverTypeWrapper<FinancialMovementAvgAggregate>;
  FinancialMovementCountAggregate: ResolverTypeWrapper<FinancialMovementCountAggregate>;
  FinancialMovementCreateInput: FinancialMovementCreateInput;
  FinancialMovementCreateManyProviderOrderInput: FinancialMovementCreateManyProviderOrderInput;
  FinancialMovementCreateManyProviderOrderInputEnvelope: FinancialMovementCreateManyProviderOrderInputEnvelope;
  FinancialMovementCreateManySaleInput: FinancialMovementCreateManySaleInput;
  FinancialMovementCreateManySaleInputEnvelope: FinancialMovementCreateManySaleInputEnvelope;
  FinancialMovementCreateNestedManyWithoutProviderOrderInput: FinancialMovementCreateNestedManyWithoutProviderOrderInput;
  FinancialMovementCreateNestedManyWithoutSaleInput: FinancialMovementCreateNestedManyWithoutSaleInput;
  FinancialMovementCreateOrConnectWithoutProviderOrderInput: FinancialMovementCreateOrConnectWithoutProviderOrderInput;
  FinancialMovementCreateOrConnectWithoutSaleInput: FinancialMovementCreateOrConnectWithoutSaleInput;
  FinancialMovementCreateWithoutProviderOrderInput: FinancialMovementCreateWithoutProviderOrderInput;
  FinancialMovementCreateWithoutSaleInput: FinancialMovementCreateWithoutSaleInput;
  FinancialMovementListRelationFilter: FinancialMovementListRelationFilter;
  FinancialMovementMaxAggregate: ResolverTypeWrapper<FinancialMovementMaxAggregate>;
  FinancialMovementMinAggregate: ResolverTypeWrapper<FinancialMovementMinAggregate>;
  FinancialMovementOrderByRelationAggregateInput: FinancialMovementOrderByRelationAggregateInput;
  FinancialMovementOrderByWithRelationInput: FinancialMovementOrderByWithRelationInput;
  FinancialMovementPaginated: ResolverTypeWrapper<FinancialMovementPaginated>;
  FinancialMovementScalarFieldEnum: FinancialMovementScalarFieldEnum;
  FinancialMovementScalarWhereInput: FinancialMovementScalarWhereInput;
  FinancialMovementSumAggregate: ResolverTypeWrapper<FinancialMovementSumAggregate>;
  FinancialMovementType: FinancialMovementType;
  FinancialMovementUpdateInput: FinancialMovementUpdateInput;
  FinancialMovementUpdateManyMutationInput: FinancialMovementUpdateManyMutationInput;
  FinancialMovementUpdateManyWithWhereWithoutProviderOrderInput: FinancialMovementUpdateManyWithWhereWithoutProviderOrderInput;
  FinancialMovementUpdateManyWithWhereWithoutSaleInput: FinancialMovementUpdateManyWithWhereWithoutSaleInput;
  FinancialMovementUpdateManyWithoutProviderOrderNestedInput: FinancialMovementUpdateManyWithoutProviderOrderNestedInput;
  FinancialMovementUpdateManyWithoutSaleNestedInput: FinancialMovementUpdateManyWithoutSaleNestedInput;
  FinancialMovementUpdateWithWhereUniqueWithoutProviderOrderInput: FinancialMovementUpdateWithWhereUniqueWithoutProviderOrderInput;
  FinancialMovementUpdateWithWhereUniqueWithoutSaleInput: FinancialMovementUpdateWithWhereUniqueWithoutSaleInput;
  FinancialMovementUpdateWithoutProviderOrderInput: FinancialMovementUpdateWithoutProviderOrderInput;
  FinancialMovementUpdateWithoutSaleInput: FinancialMovementUpdateWithoutSaleInput;
  FinancialMovementUpsertWithWhereUniqueWithoutProviderOrderInput: FinancialMovementUpsertWithWhereUniqueWithoutProviderOrderInput;
  FinancialMovementUpsertWithWhereUniqueWithoutSaleInput: FinancialMovementUpsertWithWhereUniqueWithoutSaleInput;
  FinancialMovementWhereInput: FinancialMovementWhereInput;
  FinancialMovementWhereUniqueInput: FinancialMovementWhereUniqueInput;
  FinancialMovementsOutput: ResolverTypeWrapper<FinancialMovementsOutput>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  IntFilter: IntFilter;
  MainExceptionKeys: MainExceptionKeys;
  Mutation: ResolverTypeWrapper<{}>;
  NestedBoolFilter: NestedBoolFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedEnumFinancialMovementTypeFilter: NestedEnumFinancialMovementTypeFilter;
  NestedEnumProductMovementGroupTypeFilter: NestedEnumProductMovementGroupTypeFilter;
  NestedEnumProductMovementTypeFilter: NestedEnumProductMovementTypeFilter;
  NestedIntFilter: NestedIntFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  NullableStringFieldUpdateOperationsInput: NullableStringFieldUpdateOperationsInput;
  Product: ResolverTypeWrapper<Product>;
  ProductAvgAggregate: ResolverTypeWrapper<ProductAvgAggregate>;
  ProductCount: ResolverTypeWrapper<ProductCount>;
  ProductCountAggregate: ResolverTypeWrapper<ProductCountAggregate>;
  ProductCreateInput: ProductCreateInput;
  ProductCreateManyBlameUserInput: ProductCreateManyBlameUserInput;
  ProductCreateManyBlameUserInputEnvelope: ProductCreateManyBlameUserInputEnvelope;
  ProductCreateManyProviderInput: ProductCreateManyProviderInput;
  ProductCreateManyProviderInputEnvelope: ProductCreateManyProviderInputEnvelope;
  ProductCreateNestedManyWithoutBlameUserInput: ProductCreateNestedManyWithoutBlameUserInput;
  ProductCreateNestedManyWithoutProviderInput: ProductCreateNestedManyWithoutProviderInput;
  ProductCreateNestedOneWithoutProductMovementsInput: ProductCreateNestedOneWithoutProductMovementsInput;
  ProductCreateNestedOneWithoutProviderOrderItemInput: ProductCreateNestedOneWithoutProviderOrderItemInput;
  ProductCreateNestedOneWithoutSaleItemsInput: ProductCreateNestedOneWithoutSaleItemsInput;
  ProductCreateOrConnectWithoutBlameUserInput: ProductCreateOrConnectWithoutBlameUserInput;
  ProductCreateOrConnectWithoutProductMovementsInput: ProductCreateOrConnectWithoutProductMovementsInput;
  ProductCreateOrConnectWithoutProviderInput: ProductCreateOrConnectWithoutProviderInput;
  ProductCreateOrConnectWithoutProviderOrderItemInput: ProductCreateOrConnectWithoutProviderOrderItemInput;
  ProductCreateOrConnectWithoutSaleItemsInput: ProductCreateOrConnectWithoutSaleItemsInput;
  ProductCreateWithoutBlameUserInput: ProductCreateWithoutBlameUserInput;
  ProductCreateWithoutProductMovementsInput: ProductCreateWithoutProductMovementsInput;
  ProductCreateWithoutProviderInput: ProductCreateWithoutProviderInput;
  ProductCreateWithoutProviderOrderItemInput: ProductCreateWithoutProviderOrderItemInput;
  ProductCreateWithoutSaleItemsInput: ProductCreateWithoutSaleItemsInput;
  ProductListRelationFilter: ProductListRelationFilter;
  ProductMaxAggregate: ResolverTypeWrapper<ProductMaxAggregate>;
  ProductMinAggregate: ResolverTypeWrapper<ProductMinAggregate>;
  ProductMovementAvgAggregate: ResolverTypeWrapper<ProductMovementAvgAggregate>;
  ProductMovementCountAggregate: ResolverTypeWrapper<ProductMovementCountAggregate>;
  ProductMovementCreateManyBlameUserInput: ProductMovementCreateManyBlameUserInput;
  ProductMovementCreateManyBlameUserInputEnvelope: ProductMovementCreateManyBlameUserInputEnvelope;
  ProductMovementCreateManyProductInput: ProductMovementCreateManyProductInput;
  ProductMovementCreateManyProductInputEnvelope: ProductMovementCreateManyProductInputEnvelope;
  ProductMovementCreateManyProductMovementGroupInput: ProductMovementCreateManyProductMovementGroupInput;
  ProductMovementCreateManyProductMovementGroupInputEnvelope: ProductMovementCreateManyProductMovementGroupInputEnvelope;
  ProductMovementCreateManyProviderOrderItemInput: ProductMovementCreateManyProviderOrderItemInput;
  ProductMovementCreateManyProviderOrderItemInputEnvelope: ProductMovementCreateManyProviderOrderItemInputEnvelope;
  ProductMovementCreateManySaleItemInput: ProductMovementCreateManySaleItemInput;
  ProductMovementCreateManySaleItemInputEnvelope: ProductMovementCreateManySaleItemInputEnvelope;
  ProductMovementCreateNestedManyWithoutBlameUserInput: ProductMovementCreateNestedManyWithoutBlameUserInput;
  ProductMovementCreateNestedManyWithoutProductInput: ProductMovementCreateNestedManyWithoutProductInput;
  ProductMovementCreateNestedManyWithoutProductMovementGroupInput: ProductMovementCreateNestedManyWithoutProductMovementGroupInput;
  ProductMovementCreateNestedManyWithoutProviderOrderItemInput: ProductMovementCreateNestedManyWithoutProviderOrderItemInput;
  ProductMovementCreateNestedManyWithoutSaleItemInput: ProductMovementCreateNestedManyWithoutSaleItemInput;
  ProductMovementCreateOrConnectWithoutBlameUserInput: ProductMovementCreateOrConnectWithoutBlameUserInput;
  ProductMovementCreateOrConnectWithoutProductInput: ProductMovementCreateOrConnectWithoutProductInput;
  ProductMovementCreateOrConnectWithoutProductMovementGroupInput: ProductMovementCreateOrConnectWithoutProductMovementGroupInput;
  ProductMovementCreateOrConnectWithoutProviderOrderItemInput: ProductMovementCreateOrConnectWithoutProviderOrderItemInput;
  ProductMovementCreateOrConnectWithoutSaleItemInput: ProductMovementCreateOrConnectWithoutSaleItemInput;
  ProductMovementCreateWithoutBlameUserInput: ProductMovementCreateWithoutBlameUserInput;
  ProductMovementCreateWithoutProductInput: ProductMovementCreateWithoutProductInput;
  ProductMovementCreateWithoutProductMovementGroupInput: ProductMovementCreateWithoutProductMovementGroupInput;
  ProductMovementCreateWithoutProviderOrderItemInput: ProductMovementCreateWithoutProviderOrderItemInput;
  ProductMovementCreateWithoutSaleItemInput: ProductMovementCreateWithoutSaleItemInput;
  ProductMovementGroupCount: ResolverTypeWrapper<ProductMovementGroupCount>;
  ProductMovementGroupCountAggregate: ResolverTypeWrapper<ProductMovementGroupCountAggregate>;
  ProductMovementGroupCreateManyProviderInput: ProductMovementGroupCreateManyProviderInput;
  ProductMovementGroupCreateManyProviderInputEnvelope: ProductMovementGroupCreateManyProviderInputEnvelope;
  ProductMovementGroupCreateNestedManyWithoutProviderInput: ProductMovementGroupCreateNestedManyWithoutProviderInput;
  ProductMovementGroupCreateNestedOneWithoutProductMovementsInput: ProductMovementGroupCreateNestedOneWithoutProductMovementsInput;
  ProductMovementGroupCreateOrConnectWithoutProductMovementsInput: ProductMovementGroupCreateOrConnectWithoutProductMovementsInput;
  ProductMovementGroupCreateOrConnectWithoutProviderInput: ProductMovementGroupCreateOrConnectWithoutProviderInput;
  ProductMovementGroupCreateWithoutProductMovementsInput: ProductMovementGroupCreateWithoutProductMovementsInput;
  ProductMovementGroupCreateWithoutProviderInput: ProductMovementGroupCreateWithoutProviderInput;
  ProductMovementGroupListRelationFilter: ProductMovementGroupListRelationFilter;
  ProductMovementGroupMaxAggregate: ResolverTypeWrapper<ProductMovementGroupMaxAggregate>;
  ProductMovementGroupMinAggregate: ResolverTypeWrapper<ProductMovementGroupMinAggregate>;
  ProductMovementGroupNullableScalarRelationFilter: ProductMovementGroupNullableScalarRelationFilter;
  ProductMovementGroupOrderByRelationAggregateInput: ProductMovementGroupOrderByRelationAggregateInput;
  ProductMovementGroupScalarWhereInput: ProductMovementGroupScalarWhereInput;
  ProductMovementGroupType: ProductMovementGroupType;
  ProductMovementGroupTypeProviderIdDocumentIdCompoundUniqueInput: ProductMovementGroupTypeProviderIdDocumentIdCompoundUniqueInput;
  ProductMovementGroupUpdateManyMutationInput: ProductMovementGroupUpdateManyMutationInput;
  ProductMovementGroupUpdateManyWithWhereWithoutProviderInput: ProductMovementGroupUpdateManyWithWhereWithoutProviderInput;
  ProductMovementGroupUpdateManyWithoutProviderNestedInput: ProductMovementGroupUpdateManyWithoutProviderNestedInput;
  ProductMovementGroupUpdateOneWithoutProductMovementsNestedInput: ProductMovementGroupUpdateOneWithoutProductMovementsNestedInput;
  ProductMovementGroupUpdateToOneWithWhereWithoutProductMovementsInput: ProductMovementGroupUpdateToOneWithWhereWithoutProductMovementsInput;
  ProductMovementGroupUpdateWithWhereUniqueWithoutProviderInput: ProductMovementGroupUpdateWithWhereUniqueWithoutProviderInput;
  ProductMovementGroupUpdateWithoutProductMovementsInput: ProductMovementGroupUpdateWithoutProductMovementsInput;
  ProductMovementGroupUpdateWithoutProviderInput: ProductMovementGroupUpdateWithoutProviderInput;
  ProductMovementGroupUpsertWithWhereUniqueWithoutProviderInput: ProductMovementGroupUpsertWithWhereUniqueWithoutProviderInput;
  ProductMovementGroupUpsertWithoutProductMovementsInput: ProductMovementGroupUpsertWithoutProductMovementsInput;
  ProductMovementGroupWhereInput: ProductMovementGroupWhereInput;
  ProductMovementGroupWhereUniqueInput: ProductMovementGroupWhereUniqueInput;
  ProductMovementListRelationFilter: ProductMovementListRelationFilter;
  ProductMovementMaxAggregate: ResolverTypeWrapper<ProductMovementMaxAggregate>;
  ProductMovementMinAggregate: ResolverTypeWrapper<ProductMovementMinAggregate>;
  ProductMovementOrderByRelationAggregateInput: ProductMovementOrderByRelationAggregateInput;
  ProductMovementScalarWhereInput: ProductMovementScalarWhereInput;
  ProductMovementSumAggregate: ResolverTypeWrapper<ProductMovementSumAggregate>;
  ProductMovementType: ProductMovementType;
  ProductMovementUpdateManyMutationInput: ProductMovementUpdateManyMutationInput;
  ProductMovementUpdateManyWithWhereWithoutBlameUserInput: ProductMovementUpdateManyWithWhereWithoutBlameUserInput;
  ProductMovementUpdateManyWithWhereWithoutProductInput: ProductMovementUpdateManyWithWhereWithoutProductInput;
  ProductMovementUpdateManyWithWhereWithoutProductMovementGroupInput: ProductMovementUpdateManyWithWhereWithoutProductMovementGroupInput;
  ProductMovementUpdateManyWithWhereWithoutProviderOrderItemInput: ProductMovementUpdateManyWithWhereWithoutProviderOrderItemInput;
  ProductMovementUpdateManyWithWhereWithoutSaleItemInput: ProductMovementUpdateManyWithWhereWithoutSaleItemInput;
  ProductMovementUpdateManyWithoutBlameUserNestedInput: ProductMovementUpdateManyWithoutBlameUserNestedInput;
  ProductMovementUpdateManyWithoutProductMovementGroupNestedInput: ProductMovementUpdateManyWithoutProductMovementGroupNestedInput;
  ProductMovementUpdateManyWithoutProductNestedInput: ProductMovementUpdateManyWithoutProductNestedInput;
  ProductMovementUpdateManyWithoutProviderOrderItemNestedInput: ProductMovementUpdateManyWithoutProviderOrderItemNestedInput;
  ProductMovementUpdateManyWithoutSaleItemNestedInput: ProductMovementUpdateManyWithoutSaleItemNestedInput;
  ProductMovementUpdateWithWhereUniqueWithoutBlameUserInput: ProductMovementUpdateWithWhereUniqueWithoutBlameUserInput;
  ProductMovementUpdateWithWhereUniqueWithoutProductInput: ProductMovementUpdateWithWhereUniqueWithoutProductInput;
  ProductMovementUpdateWithWhereUniqueWithoutProductMovementGroupInput: ProductMovementUpdateWithWhereUniqueWithoutProductMovementGroupInput;
  ProductMovementUpdateWithWhereUniqueWithoutProviderOrderItemInput: ProductMovementUpdateWithWhereUniqueWithoutProviderOrderItemInput;
  ProductMovementUpdateWithWhereUniqueWithoutSaleItemInput: ProductMovementUpdateWithWhereUniqueWithoutSaleItemInput;
  ProductMovementUpdateWithoutBlameUserInput: ProductMovementUpdateWithoutBlameUserInput;
  ProductMovementUpdateWithoutProductInput: ProductMovementUpdateWithoutProductInput;
  ProductMovementUpdateWithoutProductMovementGroupInput: ProductMovementUpdateWithoutProductMovementGroupInput;
  ProductMovementUpdateWithoutProviderOrderItemInput: ProductMovementUpdateWithoutProviderOrderItemInput;
  ProductMovementUpdateWithoutSaleItemInput: ProductMovementUpdateWithoutSaleItemInput;
  ProductMovementUpsertWithWhereUniqueWithoutBlameUserInput: ProductMovementUpsertWithWhereUniqueWithoutBlameUserInput;
  ProductMovementUpsertWithWhereUniqueWithoutProductInput: ProductMovementUpsertWithWhereUniqueWithoutProductInput;
  ProductMovementUpsertWithWhereUniqueWithoutProductMovementGroupInput: ProductMovementUpsertWithWhereUniqueWithoutProductMovementGroupInput;
  ProductMovementUpsertWithWhereUniqueWithoutProviderOrderItemInput: ProductMovementUpsertWithWhereUniqueWithoutProviderOrderItemInput;
  ProductMovementUpsertWithWhereUniqueWithoutSaleItemInput: ProductMovementUpsertWithWhereUniqueWithoutSaleItemInput;
  ProductMovementWhereInput: ProductMovementWhereInput;
  ProductMovementWhereUniqueInput: ProductMovementWhereUniqueInput;
  ProductOrderByRelationAggregateInput: ProductOrderByRelationAggregateInput;
  ProductOrderByWithRelationInput: ProductOrderByWithRelationInput;
  ProductPaginated: ResolverTypeWrapper<ProductPaginated>;
  ProductScalarFieldEnum: ProductScalarFieldEnum;
  ProductScalarRelationFilter: ProductScalarRelationFilter;
  ProductScalarWhereInput: ProductScalarWhereInput;
  ProductSumAggregate: ResolverTypeWrapper<ProductSumAggregate>;
  ProductUpdateInput: ProductUpdateInput;
  ProductUpdateManyMutationInput: ProductUpdateManyMutationInput;
  ProductUpdateManyWithWhereWithoutBlameUserInput: ProductUpdateManyWithWhereWithoutBlameUserInput;
  ProductUpdateManyWithWhereWithoutProviderInput: ProductUpdateManyWithWhereWithoutProviderInput;
  ProductUpdateManyWithoutBlameUserNestedInput: ProductUpdateManyWithoutBlameUserNestedInput;
  ProductUpdateManyWithoutProviderNestedInput: ProductUpdateManyWithoutProviderNestedInput;
  ProductUpdateOneRequiredWithoutProductMovementsNestedInput: ProductUpdateOneRequiredWithoutProductMovementsNestedInput;
  ProductUpdateOneRequiredWithoutProviderOrderItemNestedInput: ProductUpdateOneRequiredWithoutProviderOrderItemNestedInput;
  ProductUpdateOneRequiredWithoutSaleItemsNestedInput: ProductUpdateOneRequiredWithoutSaleItemsNestedInput;
  ProductUpdateToOneWithWhereWithoutProductMovementsInput: ProductUpdateToOneWithWhereWithoutProductMovementsInput;
  ProductUpdateToOneWithWhereWithoutProviderOrderItemInput: ProductUpdateToOneWithWhereWithoutProviderOrderItemInput;
  ProductUpdateToOneWithWhereWithoutSaleItemsInput: ProductUpdateToOneWithWhereWithoutSaleItemsInput;
  ProductUpdateWithWhereUniqueWithoutBlameUserInput: ProductUpdateWithWhereUniqueWithoutBlameUserInput;
  ProductUpdateWithWhereUniqueWithoutProviderInput: ProductUpdateWithWhereUniqueWithoutProviderInput;
  ProductUpdateWithoutBlameUserInput: ProductUpdateWithoutBlameUserInput;
  ProductUpdateWithoutProductMovementsInput: ProductUpdateWithoutProductMovementsInput;
  ProductUpdateWithoutProviderInput: ProductUpdateWithoutProviderInput;
  ProductUpdateWithoutProviderOrderItemInput: ProductUpdateWithoutProviderOrderItemInput;
  ProductUpdateWithoutSaleItemsInput: ProductUpdateWithoutSaleItemsInput;
  ProductUpsertWithWhereUniqueWithoutBlameUserInput: ProductUpsertWithWhereUniqueWithoutBlameUserInput;
  ProductUpsertWithWhereUniqueWithoutProviderInput: ProductUpsertWithWhereUniqueWithoutProviderInput;
  ProductUpsertWithoutProductMovementsInput: ProductUpsertWithoutProductMovementsInput;
  ProductUpsertWithoutProviderOrderItemInput: ProductUpsertWithoutProviderOrderItemInput;
  ProductUpsertWithoutSaleItemsInput: ProductUpsertWithoutSaleItemsInput;
  ProductWhereInput: ProductWhereInput;
  ProductWhereUniqueInput: ProductWhereUniqueInput;
  ProductsOutput: ResolverTypeWrapper<ProductsOutput>;
  Provider: ResolverTypeWrapper<Provider>;
  ProviderCount: ResolverTypeWrapper<ProviderCount>;
  ProviderCountAggregate: ResolverTypeWrapper<ProviderCountAggregate>;
  ProviderCreateInput: ProviderCreateInput;
  ProviderCreateManyBlameUserInput: ProviderCreateManyBlameUserInput;
  ProviderCreateManyBlameUserInputEnvelope: ProviderCreateManyBlameUserInputEnvelope;
  ProviderCreateManyInput: ProviderCreateManyInput;
  ProviderCreateNestedManyWithoutBlameUserInput: ProviderCreateNestedManyWithoutBlameUserInput;
  ProviderCreateNestedOneWithoutProductMovementGroupInput: ProviderCreateNestedOneWithoutProductMovementGroupInput;
  ProviderCreateNestedOneWithoutProductsInput: ProviderCreateNestedOneWithoutProductsInput;
  ProviderCreateNestedOneWithoutSaleItemsInput: ProviderCreateNestedOneWithoutSaleItemsInput;
  ProviderCreateOrConnectWithoutBlameUserInput: ProviderCreateOrConnectWithoutBlameUserInput;
  ProviderCreateOrConnectWithoutProductMovementGroupInput: ProviderCreateOrConnectWithoutProductMovementGroupInput;
  ProviderCreateOrConnectWithoutProductsInput: ProviderCreateOrConnectWithoutProductsInput;
  ProviderCreateOrConnectWithoutSaleItemsInput: ProviderCreateOrConnectWithoutSaleItemsInput;
  ProviderCreateWithoutBlameUserInput: ProviderCreateWithoutBlameUserInput;
  ProviderCreateWithoutProductMovementGroupInput: ProviderCreateWithoutProductMovementGroupInput;
  ProviderCreateWithoutProductsInput: ProviderCreateWithoutProductsInput;
  ProviderCreateWithoutSaleItemsInput: ProviderCreateWithoutSaleItemsInput;
  ProviderListRelationFilter: ProviderListRelationFilter;
  ProviderMaxAggregate: ResolverTypeWrapper<ProviderMaxAggregate>;
  ProviderMinAggregate: ResolverTypeWrapper<ProviderMinAggregate>;
  ProviderNullableScalarRelationFilter: ProviderNullableScalarRelationFilter;
  ProviderOrder: ResolverTypeWrapper<ProviderOrder>;
  ProviderOrderAvgAggregate: ResolverTypeWrapper<ProviderOrderAvgAggregate>;
  ProviderOrderByRelationAggregateInput: ProviderOrderByRelationAggregateInput;
  ProviderOrderByWithRelationInput: ProviderOrderByWithRelationInput;
  ProviderOrderCount: ResolverTypeWrapper<ProviderOrderCount>;
  ProviderOrderCountAggregate: ResolverTypeWrapper<ProviderOrderCountAggregate>;
  ProviderOrderCreateInput: ProviderOrderCreateInput;
  ProviderOrderCreateNestedOneWithoutFinancialMovementsInput: ProviderOrderCreateNestedOneWithoutFinancialMovementsInput;
  ProviderOrderCreateNestedOneWithoutProviderOrderItemsInput: ProviderOrderCreateNestedOneWithoutProviderOrderItemsInput;
  ProviderOrderCreateOrConnectWithoutFinancialMovementsInput: ProviderOrderCreateOrConnectWithoutFinancialMovementsInput;
  ProviderOrderCreateOrConnectWithoutProviderOrderItemsInput: ProviderOrderCreateOrConnectWithoutProviderOrderItemsInput;
  ProviderOrderCreateWithoutFinancialMovementsInput: ProviderOrderCreateWithoutFinancialMovementsInput;
  ProviderOrderCreateWithoutProviderOrderItemsInput: ProviderOrderCreateWithoutProviderOrderItemsInput;
  ProviderOrderItem: ResolverTypeWrapper<ProviderOrderItem>;
  ProviderOrderItemAvgAggregate: ResolverTypeWrapper<ProviderOrderItemAvgAggregate>;
  ProviderOrderItemCount: ResolverTypeWrapper<ProviderOrderItemCount>;
  ProviderOrderItemCountAggregate: ResolverTypeWrapper<ProviderOrderItemCountAggregate>;
  ProviderOrderItemCreateManyProductInput: ProviderOrderItemCreateManyProductInput;
  ProviderOrderItemCreateManyProductInputEnvelope: ProviderOrderItemCreateManyProductInputEnvelope;
  ProviderOrderItemCreateManyProviderOrderInput: ProviderOrderItemCreateManyProviderOrderInput;
  ProviderOrderItemCreateManyProviderOrderInputEnvelope: ProviderOrderItemCreateManyProviderOrderInputEnvelope;
  ProviderOrderItemCreateNestedManyWithoutProductInput: ProviderOrderItemCreateNestedManyWithoutProductInput;
  ProviderOrderItemCreateNestedManyWithoutProviderOrderInput: ProviderOrderItemCreateNestedManyWithoutProviderOrderInput;
  ProviderOrderItemCreateNestedOneWithoutProductMovementsInput: ProviderOrderItemCreateNestedOneWithoutProductMovementsInput;
  ProviderOrderItemCreateOrConnectWithoutProductInput: ProviderOrderItemCreateOrConnectWithoutProductInput;
  ProviderOrderItemCreateOrConnectWithoutProductMovementsInput: ProviderOrderItemCreateOrConnectWithoutProductMovementsInput;
  ProviderOrderItemCreateOrConnectWithoutProviderOrderInput: ProviderOrderItemCreateOrConnectWithoutProviderOrderInput;
  ProviderOrderItemCreateWithoutProductInput: ProviderOrderItemCreateWithoutProductInput;
  ProviderOrderItemCreateWithoutProductMovementsInput: ProviderOrderItemCreateWithoutProductMovementsInput;
  ProviderOrderItemCreateWithoutProviderOrderInput: ProviderOrderItemCreateWithoutProviderOrderInput;
  ProviderOrderItemListRelationFilter: ProviderOrderItemListRelationFilter;
  ProviderOrderItemMaxAggregate: ResolverTypeWrapper<ProviderOrderItemMaxAggregate>;
  ProviderOrderItemMinAggregate: ResolverTypeWrapper<ProviderOrderItemMinAggregate>;
  ProviderOrderItemNullableScalarRelationFilter: ProviderOrderItemNullableScalarRelationFilter;
  ProviderOrderItemOrderByRelationAggregateInput: ProviderOrderItemOrderByRelationAggregateInput;
  ProviderOrderItemOrderByWithRelationInput: ProviderOrderItemOrderByWithRelationInput;
  ProviderOrderItemPaginated: ResolverTypeWrapper<ProviderOrderItemPaginated>;
  ProviderOrderItemProviderOrderIdProductIdCompoundUniqueInput: ProviderOrderItemProviderOrderIdProductIdCompoundUniqueInput;
  ProviderOrderItemScalarFieldEnum: ProviderOrderItemScalarFieldEnum;
  ProviderOrderItemScalarWhereInput: ProviderOrderItemScalarWhereInput;
  ProviderOrderItemSumAggregate: ResolverTypeWrapper<ProviderOrderItemSumAggregate>;
  ProviderOrderItemUpdateManyMutationInput: ProviderOrderItemUpdateManyMutationInput;
  ProviderOrderItemUpdateManyWithWhereWithoutProductInput: ProviderOrderItemUpdateManyWithWhereWithoutProductInput;
  ProviderOrderItemUpdateManyWithWhereWithoutProviderOrderInput: ProviderOrderItemUpdateManyWithWhereWithoutProviderOrderInput;
  ProviderOrderItemUpdateManyWithoutProductNestedInput: ProviderOrderItemUpdateManyWithoutProductNestedInput;
  ProviderOrderItemUpdateManyWithoutProviderOrderNestedInput: ProviderOrderItemUpdateManyWithoutProviderOrderNestedInput;
  ProviderOrderItemUpdateOneWithoutProductMovementsNestedInput: ProviderOrderItemUpdateOneWithoutProductMovementsNestedInput;
  ProviderOrderItemUpdateToOneWithWhereWithoutProductMovementsInput: ProviderOrderItemUpdateToOneWithWhereWithoutProductMovementsInput;
  ProviderOrderItemUpdateWithWhereUniqueWithoutProductInput: ProviderOrderItemUpdateWithWhereUniqueWithoutProductInput;
  ProviderOrderItemUpdateWithWhereUniqueWithoutProviderOrderInput: ProviderOrderItemUpdateWithWhereUniqueWithoutProviderOrderInput;
  ProviderOrderItemUpdateWithoutProductInput: ProviderOrderItemUpdateWithoutProductInput;
  ProviderOrderItemUpdateWithoutProductMovementsInput: ProviderOrderItemUpdateWithoutProductMovementsInput;
  ProviderOrderItemUpdateWithoutProviderOrderInput: ProviderOrderItemUpdateWithoutProviderOrderInput;
  ProviderOrderItemUpsertWithWhereUniqueWithoutProductInput: ProviderOrderItemUpsertWithWhereUniqueWithoutProductInput;
  ProviderOrderItemUpsertWithWhereUniqueWithoutProviderOrderInput: ProviderOrderItemUpsertWithWhereUniqueWithoutProviderOrderInput;
  ProviderOrderItemUpsertWithoutProductMovementsInput: ProviderOrderItemUpsertWithoutProductMovementsInput;
  ProviderOrderItemWhereInput: ProviderOrderItemWhereInput;
  ProviderOrderItemWhereUniqueInput: ProviderOrderItemWhereUniqueInput;
  ProviderOrderItemsOutput: ResolverTypeWrapper<ProviderOrderItemsOutput>;
  ProviderOrderMaxAggregate: ResolverTypeWrapper<ProviderOrderMaxAggregate>;
  ProviderOrderMinAggregate: ResolverTypeWrapper<ProviderOrderMinAggregate>;
  ProviderOrderNullableScalarRelationFilter: ProviderOrderNullableScalarRelationFilter;
  ProviderOrderOrderByWithRelationInput: ProviderOrderOrderByWithRelationInput;
  ProviderOrderPaginated: ResolverTypeWrapper<ProviderOrderPaginated>;
  ProviderOrderScalarFieldEnum: ProviderOrderScalarFieldEnum;
  ProviderOrderScalarRelationFilter: ProviderOrderScalarRelationFilter;
  ProviderOrderSumAggregate: ResolverTypeWrapper<ProviderOrderSumAggregate>;
  ProviderOrderUpdateInput: ProviderOrderUpdateInput;
  ProviderOrderUpdateOneRequiredWithoutProviderOrderItemsNestedInput: ProviderOrderUpdateOneRequiredWithoutProviderOrderItemsNestedInput;
  ProviderOrderUpdateOneWithoutFinancialMovementsNestedInput: ProviderOrderUpdateOneWithoutFinancialMovementsNestedInput;
  ProviderOrderUpdateToOneWithWhereWithoutFinancialMovementsInput: ProviderOrderUpdateToOneWithWhereWithoutFinancialMovementsInput;
  ProviderOrderUpdateToOneWithWhereWithoutProviderOrderItemsInput: ProviderOrderUpdateToOneWithWhereWithoutProviderOrderItemsInput;
  ProviderOrderUpdateWithoutFinancialMovementsInput: ProviderOrderUpdateWithoutFinancialMovementsInput;
  ProviderOrderUpdateWithoutProviderOrderItemsInput: ProviderOrderUpdateWithoutProviderOrderItemsInput;
  ProviderOrderUpsertWithoutFinancialMovementsInput: ProviderOrderUpsertWithoutFinancialMovementsInput;
  ProviderOrderUpsertWithoutProviderOrderItemsInput: ProviderOrderUpsertWithoutProviderOrderItemsInput;
  ProviderOrderWhereInput: ProviderOrderWhereInput;
  ProviderOrderWhereUniqueInput: ProviderOrderWhereUniqueInput;
  ProviderOrdersOutput: ResolverTypeWrapper<ProviderOrdersOutput>;
  ProviderPaginated: ResolverTypeWrapper<ProviderPaginated>;
  ProviderScalarFieldEnum: ProviderScalarFieldEnum;
  ProviderScalarWhereInput: ProviderScalarWhereInput;
  ProviderUpdateInput: ProviderUpdateInput;
  ProviderUpdateManyMutationInput: ProviderUpdateManyMutationInput;
  ProviderUpdateManyWithWhereWithoutBlameUserInput: ProviderUpdateManyWithWhereWithoutBlameUserInput;
  ProviderUpdateManyWithoutBlameUserNestedInput: ProviderUpdateManyWithoutBlameUserNestedInput;
  ProviderUpdateOneWithoutProductMovementGroupNestedInput: ProviderUpdateOneWithoutProductMovementGroupNestedInput;
  ProviderUpdateOneWithoutProductsNestedInput: ProviderUpdateOneWithoutProductsNestedInput;
  ProviderUpdateOneWithoutSaleItemsNestedInput: ProviderUpdateOneWithoutSaleItemsNestedInput;
  ProviderUpdateToOneWithWhereWithoutProductMovementGroupInput: ProviderUpdateToOneWithWhereWithoutProductMovementGroupInput;
  ProviderUpdateToOneWithWhereWithoutProductsInput: ProviderUpdateToOneWithWhereWithoutProductsInput;
  ProviderUpdateToOneWithWhereWithoutSaleItemsInput: ProviderUpdateToOneWithWhereWithoutSaleItemsInput;
  ProviderUpdateWithWhereUniqueWithoutBlameUserInput: ProviderUpdateWithWhereUniqueWithoutBlameUserInput;
  ProviderUpdateWithoutBlameUserInput: ProviderUpdateWithoutBlameUserInput;
  ProviderUpdateWithoutProductMovementGroupInput: ProviderUpdateWithoutProductMovementGroupInput;
  ProviderUpdateWithoutProductsInput: ProviderUpdateWithoutProductsInput;
  ProviderUpdateWithoutSaleItemsInput: ProviderUpdateWithoutSaleItemsInput;
  ProviderUpsertWithWhereUniqueWithoutBlameUserInput: ProviderUpsertWithWhereUniqueWithoutBlameUserInput;
  ProviderUpsertWithoutProductMovementGroupInput: ProviderUpsertWithoutProductMovementGroupInput;
  ProviderUpsertWithoutProductsInput: ProviderUpsertWithoutProductsInput;
  ProviderUpsertWithoutSaleItemsInput: ProviderUpsertWithoutSaleItemsInput;
  ProviderWhereInput: ProviderWhereInput;
  ProviderWhereUniqueInput: ProviderWhereUniqueInput;
  ProvidersOutput: ResolverTypeWrapper<ProvidersOutput>;
  Query: ResolverTypeWrapper<{}>;
  QueryMode: QueryMode;
  Sale: ResolverTypeWrapper<Sale>;
  SaleAvgAggregate: ResolverTypeWrapper<SaleAvgAggregate>;
  SaleCount: ResolverTypeWrapper<SaleCount>;
  SaleCountAggregate: ResolverTypeWrapper<SaleCountAggregate>;
  SaleCreateInputCustom: SaleCreateInputCustom;
  SaleCreateManyBlameUserInput: SaleCreateManyBlameUserInput;
  SaleCreateManyBlameUserInputEnvelope: SaleCreateManyBlameUserInputEnvelope;
  SaleCreateNestedManyWithoutBlameUserInput: SaleCreateNestedManyWithoutBlameUserInput;
  SaleCreateNestedOneWithoutFinancialMovementInput: SaleCreateNestedOneWithoutFinancialMovementInput;
  SaleCreateNestedOneWithoutSaleItemsInput: SaleCreateNestedOneWithoutSaleItemsInput;
  SaleCreateOrConnectWithoutBlameUserInput: SaleCreateOrConnectWithoutBlameUserInput;
  SaleCreateOrConnectWithoutFinancialMovementInput: SaleCreateOrConnectWithoutFinancialMovementInput;
  SaleCreateOrConnectWithoutSaleItemsInput: SaleCreateOrConnectWithoutSaleItemsInput;
  SaleCreateWithoutBlameUserInput: SaleCreateWithoutBlameUserInput;
  SaleCreateWithoutFinancialMovementInput: SaleCreateWithoutFinancialMovementInput;
  SaleCreateWithoutSaleItemsInput: SaleCreateWithoutSaleItemsInput;
  SaleItem: ResolverTypeWrapper<SaleItem>;
  SaleItemAvgAggregate: ResolverTypeWrapper<SaleItemAvgAggregate>;
  SaleItemCostIsPostPaidProductIdSaleIdCompoundUniqueInput: SaleItemCostIsPostPaidProductIdSaleIdCompoundUniqueInput;
  SaleItemCount: ResolverTypeWrapper<SaleItemCount>;
  SaleItemCountAggregate: ResolverTypeWrapper<SaleItemCountAggregate>;
  SaleItemCreateManyBlameUserInput: SaleItemCreateManyBlameUserInput;
  SaleItemCreateManyBlameUserInputEnvelope: SaleItemCreateManyBlameUserInputEnvelope;
  SaleItemCreateManyProductInput: SaleItemCreateManyProductInput;
  SaleItemCreateManyProductInputEnvelope: SaleItemCreateManyProductInputEnvelope;
  SaleItemCreateManyProviderInput: SaleItemCreateManyProviderInput;
  SaleItemCreateManyProviderInputEnvelope: SaleItemCreateManyProviderInputEnvelope;
  SaleItemCreateManySaleInput: SaleItemCreateManySaleInput;
  SaleItemCreateManySaleInputEnvelope: SaleItemCreateManySaleInputEnvelope;
  SaleItemCreateNestedManyWithoutBlameUserInput: SaleItemCreateNestedManyWithoutBlameUserInput;
  SaleItemCreateNestedManyWithoutProductInput: SaleItemCreateNestedManyWithoutProductInput;
  SaleItemCreateNestedManyWithoutProviderInput: SaleItemCreateNestedManyWithoutProviderInput;
  SaleItemCreateNestedManyWithoutSaleInput: SaleItemCreateNestedManyWithoutSaleInput;
  SaleItemCreateNestedManyWithoutSaleInputCustom: SaleItemCreateNestedManyWithoutSaleInputCustom;
  SaleItemCreateNestedOneWithoutProductMovementsInput: SaleItemCreateNestedOneWithoutProductMovementsInput;
  SaleItemCreateOrConnectWithoutBlameUserInput: SaleItemCreateOrConnectWithoutBlameUserInput;
  SaleItemCreateOrConnectWithoutProductInput: SaleItemCreateOrConnectWithoutProductInput;
  SaleItemCreateOrConnectWithoutProductMovementsInput: SaleItemCreateOrConnectWithoutProductMovementsInput;
  SaleItemCreateOrConnectWithoutProviderInput: SaleItemCreateOrConnectWithoutProviderInput;
  SaleItemCreateOrConnectWithoutSaleInput: SaleItemCreateOrConnectWithoutSaleInput;
  SaleItemCreateWithoutBlameUserInput: SaleItemCreateWithoutBlameUserInput;
  SaleItemCreateWithoutProductInput: SaleItemCreateWithoutProductInput;
  SaleItemCreateWithoutProductMovementsInput: SaleItemCreateWithoutProductMovementsInput;
  SaleItemCreateWithoutProviderInput: SaleItemCreateWithoutProviderInput;
  SaleItemCreateWithoutSaleInput: SaleItemCreateWithoutSaleInput;
  SaleItemListRelationFilter: SaleItemListRelationFilter;
  SaleItemMaxAggregate: ResolverTypeWrapper<SaleItemMaxAggregate>;
  SaleItemMinAggregate: ResolverTypeWrapper<SaleItemMinAggregate>;
  SaleItemNullableScalarRelationFilter: SaleItemNullableScalarRelationFilter;
  SaleItemOrderByRelationAggregateInput: SaleItemOrderByRelationAggregateInput;
  SaleItemOrderByWithRelationInput: SaleItemOrderByWithRelationInput;
  SaleItemPaginated: ResolverTypeWrapper<SaleItemPaginated>;
  SaleItemScalarFieldEnum: SaleItemScalarFieldEnum;
  SaleItemScalarWhereInput: SaleItemScalarWhereInput;
  SaleItemSumAggregate: ResolverTypeWrapper<SaleItemSumAggregate>;
  SaleItemUpdateManyMutationInput: SaleItemUpdateManyMutationInput;
  SaleItemUpdateManyWithWhereWithoutBlameUserInput: SaleItemUpdateManyWithWhereWithoutBlameUserInput;
  SaleItemUpdateManyWithWhereWithoutProductInput: SaleItemUpdateManyWithWhereWithoutProductInput;
  SaleItemUpdateManyWithWhereWithoutProviderInput: SaleItemUpdateManyWithWhereWithoutProviderInput;
  SaleItemUpdateManyWithWhereWithoutSaleInput: SaleItemUpdateManyWithWhereWithoutSaleInput;
  SaleItemUpdateManyWithoutBlameUserNestedInput: SaleItemUpdateManyWithoutBlameUserNestedInput;
  SaleItemUpdateManyWithoutProductNestedInput: SaleItemUpdateManyWithoutProductNestedInput;
  SaleItemUpdateManyWithoutProviderNestedInput: SaleItemUpdateManyWithoutProviderNestedInput;
  SaleItemUpdateManyWithoutSaleNestedInput: SaleItemUpdateManyWithoutSaleNestedInput;
  SaleItemUpdateManyWithoutSaleNestedInputCustom: SaleItemUpdateManyWithoutSaleNestedInputCustom;
  SaleItemUpdateOneWithoutProductMovementsNestedInput: SaleItemUpdateOneWithoutProductMovementsNestedInput;
  SaleItemUpdateToOneWithWhereWithoutProductMovementsInput: SaleItemUpdateToOneWithWhereWithoutProductMovementsInput;
  SaleItemUpdateWithWhereUniqueWithoutBlameUserInput: SaleItemUpdateWithWhereUniqueWithoutBlameUserInput;
  SaleItemUpdateWithWhereUniqueWithoutProductInput: SaleItemUpdateWithWhereUniqueWithoutProductInput;
  SaleItemUpdateWithWhereUniqueWithoutProviderInput: SaleItemUpdateWithWhereUniqueWithoutProviderInput;
  SaleItemUpdateWithWhereUniqueWithoutSaleInput: SaleItemUpdateWithWhereUniqueWithoutSaleInput;
  SaleItemUpdateWithoutBlameUserInput: SaleItemUpdateWithoutBlameUserInput;
  SaleItemUpdateWithoutProductInput: SaleItemUpdateWithoutProductInput;
  SaleItemUpdateWithoutProductMovementsInput: SaleItemUpdateWithoutProductMovementsInput;
  SaleItemUpdateWithoutProviderInput: SaleItemUpdateWithoutProviderInput;
  SaleItemUpdateWithoutSaleInput: SaleItemUpdateWithoutSaleInput;
  SaleItemUpsertWithWhereUniqueWithoutBlameUserInput: SaleItemUpsertWithWhereUniqueWithoutBlameUserInput;
  SaleItemUpsertWithWhereUniqueWithoutProductInput: SaleItemUpsertWithWhereUniqueWithoutProductInput;
  SaleItemUpsertWithWhereUniqueWithoutProviderInput: SaleItemUpsertWithWhereUniqueWithoutProviderInput;
  SaleItemUpsertWithWhereUniqueWithoutSaleInput: SaleItemUpsertWithWhereUniqueWithoutSaleInput;
  SaleItemUpsertWithoutProductMovementsInput: SaleItemUpsertWithoutProductMovementsInput;
  SaleItemWhereInput: SaleItemWhereInput;
  SaleItemWhereUniqueInput: SaleItemWhereUniqueInput;
  SaleItemsOutput: ResolverTypeWrapper<SaleItemsOutput>;
  SaleListRelationFilter: SaleListRelationFilter;
  SaleMaxAggregate: ResolverTypeWrapper<SaleMaxAggregate>;
  SaleMinAggregate: ResolverTypeWrapper<SaleMinAggregate>;
  SaleNullableScalarRelationFilter: SaleNullableScalarRelationFilter;
  SaleOrderByRelationAggregateInput: SaleOrderByRelationAggregateInput;
  SaleOrderByWithRelationInput: SaleOrderByWithRelationInput;
  SalePaginated: ResolverTypeWrapper<SalePaginated>;
  SaleScalarFieldEnum: SaleScalarFieldEnum;
  SaleScalarWhereInput: SaleScalarWhereInput;
  SaleSumAggregate: ResolverTypeWrapper<SaleSumAggregate>;
  SaleUpdateInputCustom: SaleUpdateInputCustom;
  SaleUpdateManyMutationInput: SaleUpdateManyMutationInput;
  SaleUpdateManyWithWhereWithoutBlameUserInput: SaleUpdateManyWithWhereWithoutBlameUserInput;
  SaleUpdateManyWithoutBlameUserNestedInput: SaleUpdateManyWithoutBlameUserNestedInput;
  SaleUpdateOneWithoutFinancialMovementNestedInput: SaleUpdateOneWithoutFinancialMovementNestedInput;
  SaleUpdateOneWithoutSaleItemsNestedInput: SaleUpdateOneWithoutSaleItemsNestedInput;
  SaleUpdateToOneWithWhereWithoutFinancialMovementInput: SaleUpdateToOneWithWhereWithoutFinancialMovementInput;
  SaleUpdateToOneWithWhereWithoutSaleItemsInput: SaleUpdateToOneWithWhereWithoutSaleItemsInput;
  SaleUpdateWithWhereUniqueWithoutBlameUserInput: SaleUpdateWithWhereUniqueWithoutBlameUserInput;
  SaleUpdateWithoutBlameUserInput: SaleUpdateWithoutBlameUserInput;
  SaleUpdateWithoutFinancialMovementInput: SaleUpdateWithoutFinancialMovementInput;
  SaleUpdateWithoutSaleItemsInput: SaleUpdateWithoutSaleItemsInput;
  SaleUpsertWithWhereUniqueWithoutBlameUserInput: SaleUpsertWithWhereUniqueWithoutBlameUserInput;
  SaleUpsertWithoutFinancialMovementInput: SaleUpsertWithoutFinancialMovementInput;
  SaleUpsertWithoutSaleItemsInput: SaleUpsertWithoutSaleItemsInput;
  SaleWhereInput: SaleWhereInput;
  SaleWhereInputCustom: SaleWhereInputCustom;
  SaleWhereUniqueInput: SaleWhereUniqueInput;
  SalesOutput: ResolverTypeWrapper<SalesOutput>;
  SortOrder: SortOrder;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  User: ResolverTypeWrapper<User>;
  UserCount: ResolverTypeWrapper<UserCount>;
  UserCountAggregate: ResolverTypeWrapper<UserCountAggregate>;
  UserCreateNestedOneWithoutProductMovementsInput: UserCreateNestedOneWithoutProductMovementsInput;
  UserCreateNestedOneWithoutProductsInput: UserCreateNestedOneWithoutProductsInput;
  UserCreateNestedOneWithoutProvidersInput: UserCreateNestedOneWithoutProvidersInput;
  UserCreateNestedOneWithoutSaleItemsInput: UserCreateNestedOneWithoutSaleItemsInput;
  UserCreateNestedOneWithoutSalesInput: UserCreateNestedOneWithoutSalesInput;
  UserCreateOrConnectWithoutProductMovementsInput: UserCreateOrConnectWithoutProductMovementsInput;
  UserCreateOrConnectWithoutProductsInput: UserCreateOrConnectWithoutProductsInput;
  UserCreateOrConnectWithoutProvidersInput: UserCreateOrConnectWithoutProvidersInput;
  UserCreateOrConnectWithoutSaleItemsInput: UserCreateOrConnectWithoutSaleItemsInput;
  UserCreateOrConnectWithoutSalesInput: UserCreateOrConnectWithoutSalesInput;
  UserCreateWithoutProductMovementsInput: UserCreateWithoutProductMovementsInput;
  UserCreateWithoutProductsInput: UserCreateWithoutProductsInput;
  UserCreateWithoutProvidersInput: UserCreateWithoutProvidersInput;
  UserCreateWithoutSaleItemsInput: UserCreateWithoutSaleItemsInput;
  UserCreateWithoutSalesInput: UserCreateWithoutSalesInput;
  UserMaxAggregate: ResolverTypeWrapper<UserMaxAggregate>;
  UserMinAggregate: ResolverTypeWrapper<UserMinAggregate>;
  UserNullableScalarRelationFilter: UserNullableScalarRelationFilter;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserPaginated: ResolverTypeWrapper<UserPaginated>;
  UserScalarFieldEnum: UserScalarFieldEnum;
  UserUpdateOneWithoutProductMovementsNestedInput: UserUpdateOneWithoutProductMovementsNestedInput;
  UserUpdateOneWithoutProductsNestedInput: UserUpdateOneWithoutProductsNestedInput;
  UserUpdateOneWithoutProvidersNestedInput: UserUpdateOneWithoutProvidersNestedInput;
  UserUpdateOneWithoutSaleItemsNestedInput: UserUpdateOneWithoutSaleItemsNestedInput;
  UserUpdateOneWithoutSalesNestedInput: UserUpdateOneWithoutSalesNestedInput;
  UserUpdateToOneWithWhereWithoutProductMovementsInput: UserUpdateToOneWithWhereWithoutProductMovementsInput;
  UserUpdateToOneWithWhereWithoutProductsInput: UserUpdateToOneWithWhereWithoutProductsInput;
  UserUpdateToOneWithWhereWithoutProvidersInput: UserUpdateToOneWithWhereWithoutProvidersInput;
  UserUpdateToOneWithWhereWithoutSaleItemsInput: UserUpdateToOneWithWhereWithoutSaleItemsInput;
  UserUpdateToOneWithWhereWithoutSalesInput: UserUpdateToOneWithWhereWithoutSalesInput;
  UserUpdateWithoutProductMovementsInput: UserUpdateWithoutProductMovementsInput;
  UserUpdateWithoutProductsInput: UserUpdateWithoutProductsInput;
  UserUpdateWithoutProvidersInput: UserUpdateWithoutProvidersInput;
  UserUpdateWithoutSaleItemsInput: UserUpdateWithoutSaleItemsInput;
  UserUpdateWithoutSalesInput: UserUpdateWithoutSalesInput;
  UserUpsertWithoutProductMovementsInput: UserUpsertWithoutProductMovementsInput;
  UserUpsertWithoutProductsInput: UserUpsertWithoutProductsInput;
  UserUpsertWithoutProvidersInput: UserUpsertWithoutProvidersInput;
  UserUpsertWithoutSaleItemsInput: UserUpsertWithoutSaleItemsInput;
  UserUpsertWithoutSalesInput: UserUpsertWithoutSalesInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  UsersOutput: ResolverTypeWrapper<UsersOutput>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AggregateFinancialMovement: AggregateFinancialMovement;
  AggregateProduct: AggregateProduct;
  AggregateSale: AggregateSale;
  BoolFieldUpdateOperationsInput: BoolFieldUpdateOperationsInput;
  BoolFilter: BoolFilter;
  Boolean: Scalars['Boolean']['output'];
  DateTime: Scalars['DateTime']['output'];
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  EnumFinancialMovementTypeFieldUpdateOperationsInput: EnumFinancialMovementTypeFieldUpdateOperationsInput;
  EnumFinancialMovementTypeFilter: EnumFinancialMovementTypeFilter;
  EnumProductMovementGroupTypeFieldUpdateOperationsInput: EnumProductMovementGroupTypeFieldUpdateOperationsInput;
  EnumProductMovementGroupTypeFilter: EnumProductMovementGroupTypeFilter;
  EnumProductMovementTypeFieldUpdateOperationsInput: EnumProductMovementTypeFieldUpdateOperationsInput;
  EnumProductMovementTypeFilter: EnumProductMovementTypeFilter;
  FinancialMovement: FinancialMovement;
  FinancialMovementAvgAggregate: FinancialMovementAvgAggregate;
  FinancialMovementCountAggregate: FinancialMovementCountAggregate;
  FinancialMovementCreateInput: FinancialMovementCreateInput;
  FinancialMovementCreateManyProviderOrderInput: FinancialMovementCreateManyProviderOrderInput;
  FinancialMovementCreateManyProviderOrderInputEnvelope: FinancialMovementCreateManyProviderOrderInputEnvelope;
  FinancialMovementCreateManySaleInput: FinancialMovementCreateManySaleInput;
  FinancialMovementCreateManySaleInputEnvelope: FinancialMovementCreateManySaleInputEnvelope;
  FinancialMovementCreateNestedManyWithoutProviderOrderInput: FinancialMovementCreateNestedManyWithoutProviderOrderInput;
  FinancialMovementCreateNestedManyWithoutSaleInput: FinancialMovementCreateNestedManyWithoutSaleInput;
  FinancialMovementCreateOrConnectWithoutProviderOrderInput: FinancialMovementCreateOrConnectWithoutProviderOrderInput;
  FinancialMovementCreateOrConnectWithoutSaleInput: FinancialMovementCreateOrConnectWithoutSaleInput;
  FinancialMovementCreateWithoutProviderOrderInput: FinancialMovementCreateWithoutProviderOrderInput;
  FinancialMovementCreateWithoutSaleInput: FinancialMovementCreateWithoutSaleInput;
  FinancialMovementListRelationFilter: FinancialMovementListRelationFilter;
  FinancialMovementMaxAggregate: FinancialMovementMaxAggregate;
  FinancialMovementMinAggregate: FinancialMovementMinAggregate;
  FinancialMovementOrderByRelationAggregateInput: FinancialMovementOrderByRelationAggregateInput;
  FinancialMovementOrderByWithRelationInput: FinancialMovementOrderByWithRelationInput;
  FinancialMovementPaginated: FinancialMovementPaginated;
  FinancialMovementScalarWhereInput: FinancialMovementScalarWhereInput;
  FinancialMovementSumAggregate: FinancialMovementSumAggregate;
  FinancialMovementUpdateInput: FinancialMovementUpdateInput;
  FinancialMovementUpdateManyMutationInput: FinancialMovementUpdateManyMutationInput;
  FinancialMovementUpdateManyWithWhereWithoutProviderOrderInput: FinancialMovementUpdateManyWithWhereWithoutProviderOrderInput;
  FinancialMovementUpdateManyWithWhereWithoutSaleInput: FinancialMovementUpdateManyWithWhereWithoutSaleInput;
  FinancialMovementUpdateManyWithoutProviderOrderNestedInput: FinancialMovementUpdateManyWithoutProviderOrderNestedInput;
  FinancialMovementUpdateManyWithoutSaleNestedInput: FinancialMovementUpdateManyWithoutSaleNestedInput;
  FinancialMovementUpdateWithWhereUniqueWithoutProviderOrderInput: FinancialMovementUpdateWithWhereUniqueWithoutProviderOrderInput;
  FinancialMovementUpdateWithWhereUniqueWithoutSaleInput: FinancialMovementUpdateWithWhereUniqueWithoutSaleInput;
  FinancialMovementUpdateWithoutProviderOrderInput: FinancialMovementUpdateWithoutProviderOrderInput;
  FinancialMovementUpdateWithoutSaleInput: FinancialMovementUpdateWithoutSaleInput;
  FinancialMovementUpsertWithWhereUniqueWithoutProviderOrderInput: FinancialMovementUpsertWithWhereUniqueWithoutProviderOrderInput;
  FinancialMovementUpsertWithWhereUniqueWithoutSaleInput: FinancialMovementUpsertWithWhereUniqueWithoutSaleInput;
  FinancialMovementWhereInput: FinancialMovementWhereInput;
  FinancialMovementWhereUniqueInput: FinancialMovementWhereUniqueInput;
  FinancialMovementsOutput: FinancialMovementsOutput;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  IntFilter: IntFilter;
  Mutation: {};
  NestedBoolFilter: NestedBoolFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedEnumFinancialMovementTypeFilter: NestedEnumFinancialMovementTypeFilter;
  NestedEnumProductMovementGroupTypeFilter: NestedEnumProductMovementGroupTypeFilter;
  NestedEnumProductMovementTypeFilter: NestedEnumProductMovementTypeFilter;
  NestedIntFilter: NestedIntFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  NullableStringFieldUpdateOperationsInput: NullableStringFieldUpdateOperationsInput;
  Product: Product;
  ProductAvgAggregate: ProductAvgAggregate;
  ProductCount: ProductCount;
  ProductCountAggregate: ProductCountAggregate;
  ProductCreateInput: ProductCreateInput;
  ProductCreateManyBlameUserInput: ProductCreateManyBlameUserInput;
  ProductCreateManyBlameUserInputEnvelope: ProductCreateManyBlameUserInputEnvelope;
  ProductCreateManyProviderInput: ProductCreateManyProviderInput;
  ProductCreateManyProviderInputEnvelope: ProductCreateManyProviderInputEnvelope;
  ProductCreateNestedManyWithoutBlameUserInput: ProductCreateNestedManyWithoutBlameUserInput;
  ProductCreateNestedManyWithoutProviderInput: ProductCreateNestedManyWithoutProviderInput;
  ProductCreateNestedOneWithoutProductMovementsInput: ProductCreateNestedOneWithoutProductMovementsInput;
  ProductCreateNestedOneWithoutProviderOrderItemInput: ProductCreateNestedOneWithoutProviderOrderItemInput;
  ProductCreateNestedOneWithoutSaleItemsInput: ProductCreateNestedOneWithoutSaleItemsInput;
  ProductCreateOrConnectWithoutBlameUserInput: ProductCreateOrConnectWithoutBlameUserInput;
  ProductCreateOrConnectWithoutProductMovementsInput: ProductCreateOrConnectWithoutProductMovementsInput;
  ProductCreateOrConnectWithoutProviderInput: ProductCreateOrConnectWithoutProviderInput;
  ProductCreateOrConnectWithoutProviderOrderItemInput: ProductCreateOrConnectWithoutProviderOrderItemInput;
  ProductCreateOrConnectWithoutSaleItemsInput: ProductCreateOrConnectWithoutSaleItemsInput;
  ProductCreateWithoutBlameUserInput: ProductCreateWithoutBlameUserInput;
  ProductCreateWithoutProductMovementsInput: ProductCreateWithoutProductMovementsInput;
  ProductCreateWithoutProviderInput: ProductCreateWithoutProviderInput;
  ProductCreateWithoutProviderOrderItemInput: ProductCreateWithoutProviderOrderItemInput;
  ProductCreateWithoutSaleItemsInput: ProductCreateWithoutSaleItemsInput;
  ProductListRelationFilter: ProductListRelationFilter;
  ProductMaxAggregate: ProductMaxAggregate;
  ProductMinAggregate: ProductMinAggregate;
  ProductMovementAvgAggregate: ProductMovementAvgAggregate;
  ProductMovementCountAggregate: ProductMovementCountAggregate;
  ProductMovementCreateManyBlameUserInput: ProductMovementCreateManyBlameUserInput;
  ProductMovementCreateManyBlameUserInputEnvelope: ProductMovementCreateManyBlameUserInputEnvelope;
  ProductMovementCreateManyProductInput: ProductMovementCreateManyProductInput;
  ProductMovementCreateManyProductInputEnvelope: ProductMovementCreateManyProductInputEnvelope;
  ProductMovementCreateManyProductMovementGroupInput: ProductMovementCreateManyProductMovementGroupInput;
  ProductMovementCreateManyProductMovementGroupInputEnvelope: ProductMovementCreateManyProductMovementGroupInputEnvelope;
  ProductMovementCreateManyProviderOrderItemInput: ProductMovementCreateManyProviderOrderItemInput;
  ProductMovementCreateManyProviderOrderItemInputEnvelope: ProductMovementCreateManyProviderOrderItemInputEnvelope;
  ProductMovementCreateManySaleItemInput: ProductMovementCreateManySaleItemInput;
  ProductMovementCreateManySaleItemInputEnvelope: ProductMovementCreateManySaleItemInputEnvelope;
  ProductMovementCreateNestedManyWithoutBlameUserInput: ProductMovementCreateNestedManyWithoutBlameUserInput;
  ProductMovementCreateNestedManyWithoutProductInput: ProductMovementCreateNestedManyWithoutProductInput;
  ProductMovementCreateNestedManyWithoutProductMovementGroupInput: ProductMovementCreateNestedManyWithoutProductMovementGroupInput;
  ProductMovementCreateNestedManyWithoutProviderOrderItemInput: ProductMovementCreateNestedManyWithoutProviderOrderItemInput;
  ProductMovementCreateNestedManyWithoutSaleItemInput: ProductMovementCreateNestedManyWithoutSaleItemInput;
  ProductMovementCreateOrConnectWithoutBlameUserInput: ProductMovementCreateOrConnectWithoutBlameUserInput;
  ProductMovementCreateOrConnectWithoutProductInput: ProductMovementCreateOrConnectWithoutProductInput;
  ProductMovementCreateOrConnectWithoutProductMovementGroupInput: ProductMovementCreateOrConnectWithoutProductMovementGroupInput;
  ProductMovementCreateOrConnectWithoutProviderOrderItemInput: ProductMovementCreateOrConnectWithoutProviderOrderItemInput;
  ProductMovementCreateOrConnectWithoutSaleItemInput: ProductMovementCreateOrConnectWithoutSaleItemInput;
  ProductMovementCreateWithoutBlameUserInput: ProductMovementCreateWithoutBlameUserInput;
  ProductMovementCreateWithoutProductInput: ProductMovementCreateWithoutProductInput;
  ProductMovementCreateWithoutProductMovementGroupInput: ProductMovementCreateWithoutProductMovementGroupInput;
  ProductMovementCreateWithoutProviderOrderItemInput: ProductMovementCreateWithoutProviderOrderItemInput;
  ProductMovementCreateWithoutSaleItemInput: ProductMovementCreateWithoutSaleItemInput;
  ProductMovementGroupCount: ProductMovementGroupCount;
  ProductMovementGroupCountAggregate: ProductMovementGroupCountAggregate;
  ProductMovementGroupCreateManyProviderInput: ProductMovementGroupCreateManyProviderInput;
  ProductMovementGroupCreateManyProviderInputEnvelope: ProductMovementGroupCreateManyProviderInputEnvelope;
  ProductMovementGroupCreateNestedManyWithoutProviderInput: ProductMovementGroupCreateNestedManyWithoutProviderInput;
  ProductMovementGroupCreateNestedOneWithoutProductMovementsInput: ProductMovementGroupCreateNestedOneWithoutProductMovementsInput;
  ProductMovementGroupCreateOrConnectWithoutProductMovementsInput: ProductMovementGroupCreateOrConnectWithoutProductMovementsInput;
  ProductMovementGroupCreateOrConnectWithoutProviderInput: ProductMovementGroupCreateOrConnectWithoutProviderInput;
  ProductMovementGroupCreateWithoutProductMovementsInput: ProductMovementGroupCreateWithoutProductMovementsInput;
  ProductMovementGroupCreateWithoutProviderInput: ProductMovementGroupCreateWithoutProviderInput;
  ProductMovementGroupListRelationFilter: ProductMovementGroupListRelationFilter;
  ProductMovementGroupMaxAggregate: ProductMovementGroupMaxAggregate;
  ProductMovementGroupMinAggregate: ProductMovementGroupMinAggregate;
  ProductMovementGroupNullableScalarRelationFilter: ProductMovementGroupNullableScalarRelationFilter;
  ProductMovementGroupOrderByRelationAggregateInput: ProductMovementGroupOrderByRelationAggregateInput;
  ProductMovementGroupScalarWhereInput: ProductMovementGroupScalarWhereInput;
  ProductMovementGroupTypeProviderIdDocumentIdCompoundUniqueInput: ProductMovementGroupTypeProviderIdDocumentIdCompoundUniqueInput;
  ProductMovementGroupUpdateManyMutationInput: ProductMovementGroupUpdateManyMutationInput;
  ProductMovementGroupUpdateManyWithWhereWithoutProviderInput: ProductMovementGroupUpdateManyWithWhereWithoutProviderInput;
  ProductMovementGroupUpdateManyWithoutProviderNestedInput: ProductMovementGroupUpdateManyWithoutProviderNestedInput;
  ProductMovementGroupUpdateOneWithoutProductMovementsNestedInput: ProductMovementGroupUpdateOneWithoutProductMovementsNestedInput;
  ProductMovementGroupUpdateToOneWithWhereWithoutProductMovementsInput: ProductMovementGroupUpdateToOneWithWhereWithoutProductMovementsInput;
  ProductMovementGroupUpdateWithWhereUniqueWithoutProviderInput: ProductMovementGroupUpdateWithWhereUniqueWithoutProviderInput;
  ProductMovementGroupUpdateWithoutProductMovementsInput: ProductMovementGroupUpdateWithoutProductMovementsInput;
  ProductMovementGroupUpdateWithoutProviderInput: ProductMovementGroupUpdateWithoutProviderInput;
  ProductMovementGroupUpsertWithWhereUniqueWithoutProviderInput: ProductMovementGroupUpsertWithWhereUniqueWithoutProviderInput;
  ProductMovementGroupUpsertWithoutProductMovementsInput: ProductMovementGroupUpsertWithoutProductMovementsInput;
  ProductMovementGroupWhereInput: ProductMovementGroupWhereInput;
  ProductMovementGroupWhereUniqueInput: ProductMovementGroupWhereUniqueInput;
  ProductMovementListRelationFilter: ProductMovementListRelationFilter;
  ProductMovementMaxAggregate: ProductMovementMaxAggregate;
  ProductMovementMinAggregate: ProductMovementMinAggregate;
  ProductMovementOrderByRelationAggregateInput: ProductMovementOrderByRelationAggregateInput;
  ProductMovementScalarWhereInput: ProductMovementScalarWhereInput;
  ProductMovementSumAggregate: ProductMovementSumAggregate;
  ProductMovementUpdateManyMutationInput: ProductMovementUpdateManyMutationInput;
  ProductMovementUpdateManyWithWhereWithoutBlameUserInput: ProductMovementUpdateManyWithWhereWithoutBlameUserInput;
  ProductMovementUpdateManyWithWhereWithoutProductInput: ProductMovementUpdateManyWithWhereWithoutProductInput;
  ProductMovementUpdateManyWithWhereWithoutProductMovementGroupInput: ProductMovementUpdateManyWithWhereWithoutProductMovementGroupInput;
  ProductMovementUpdateManyWithWhereWithoutProviderOrderItemInput: ProductMovementUpdateManyWithWhereWithoutProviderOrderItemInput;
  ProductMovementUpdateManyWithWhereWithoutSaleItemInput: ProductMovementUpdateManyWithWhereWithoutSaleItemInput;
  ProductMovementUpdateManyWithoutBlameUserNestedInput: ProductMovementUpdateManyWithoutBlameUserNestedInput;
  ProductMovementUpdateManyWithoutProductMovementGroupNestedInput: ProductMovementUpdateManyWithoutProductMovementGroupNestedInput;
  ProductMovementUpdateManyWithoutProductNestedInput: ProductMovementUpdateManyWithoutProductNestedInput;
  ProductMovementUpdateManyWithoutProviderOrderItemNestedInput: ProductMovementUpdateManyWithoutProviderOrderItemNestedInput;
  ProductMovementUpdateManyWithoutSaleItemNestedInput: ProductMovementUpdateManyWithoutSaleItemNestedInput;
  ProductMovementUpdateWithWhereUniqueWithoutBlameUserInput: ProductMovementUpdateWithWhereUniqueWithoutBlameUserInput;
  ProductMovementUpdateWithWhereUniqueWithoutProductInput: ProductMovementUpdateWithWhereUniqueWithoutProductInput;
  ProductMovementUpdateWithWhereUniqueWithoutProductMovementGroupInput: ProductMovementUpdateWithWhereUniqueWithoutProductMovementGroupInput;
  ProductMovementUpdateWithWhereUniqueWithoutProviderOrderItemInput: ProductMovementUpdateWithWhereUniqueWithoutProviderOrderItemInput;
  ProductMovementUpdateWithWhereUniqueWithoutSaleItemInput: ProductMovementUpdateWithWhereUniqueWithoutSaleItemInput;
  ProductMovementUpdateWithoutBlameUserInput: ProductMovementUpdateWithoutBlameUserInput;
  ProductMovementUpdateWithoutProductInput: ProductMovementUpdateWithoutProductInput;
  ProductMovementUpdateWithoutProductMovementGroupInput: ProductMovementUpdateWithoutProductMovementGroupInput;
  ProductMovementUpdateWithoutProviderOrderItemInput: ProductMovementUpdateWithoutProviderOrderItemInput;
  ProductMovementUpdateWithoutSaleItemInput: ProductMovementUpdateWithoutSaleItemInput;
  ProductMovementUpsertWithWhereUniqueWithoutBlameUserInput: ProductMovementUpsertWithWhereUniqueWithoutBlameUserInput;
  ProductMovementUpsertWithWhereUniqueWithoutProductInput: ProductMovementUpsertWithWhereUniqueWithoutProductInput;
  ProductMovementUpsertWithWhereUniqueWithoutProductMovementGroupInput: ProductMovementUpsertWithWhereUniqueWithoutProductMovementGroupInput;
  ProductMovementUpsertWithWhereUniqueWithoutProviderOrderItemInput: ProductMovementUpsertWithWhereUniqueWithoutProviderOrderItemInput;
  ProductMovementUpsertWithWhereUniqueWithoutSaleItemInput: ProductMovementUpsertWithWhereUniqueWithoutSaleItemInput;
  ProductMovementWhereInput: ProductMovementWhereInput;
  ProductMovementWhereUniqueInput: ProductMovementWhereUniqueInput;
  ProductOrderByRelationAggregateInput: ProductOrderByRelationAggregateInput;
  ProductOrderByWithRelationInput: ProductOrderByWithRelationInput;
  ProductPaginated: ProductPaginated;
  ProductScalarRelationFilter: ProductScalarRelationFilter;
  ProductScalarWhereInput: ProductScalarWhereInput;
  ProductSumAggregate: ProductSumAggregate;
  ProductUpdateInput: ProductUpdateInput;
  ProductUpdateManyMutationInput: ProductUpdateManyMutationInput;
  ProductUpdateManyWithWhereWithoutBlameUserInput: ProductUpdateManyWithWhereWithoutBlameUserInput;
  ProductUpdateManyWithWhereWithoutProviderInput: ProductUpdateManyWithWhereWithoutProviderInput;
  ProductUpdateManyWithoutBlameUserNestedInput: ProductUpdateManyWithoutBlameUserNestedInput;
  ProductUpdateManyWithoutProviderNestedInput: ProductUpdateManyWithoutProviderNestedInput;
  ProductUpdateOneRequiredWithoutProductMovementsNestedInput: ProductUpdateOneRequiredWithoutProductMovementsNestedInput;
  ProductUpdateOneRequiredWithoutProviderOrderItemNestedInput: ProductUpdateOneRequiredWithoutProviderOrderItemNestedInput;
  ProductUpdateOneRequiredWithoutSaleItemsNestedInput: ProductUpdateOneRequiredWithoutSaleItemsNestedInput;
  ProductUpdateToOneWithWhereWithoutProductMovementsInput: ProductUpdateToOneWithWhereWithoutProductMovementsInput;
  ProductUpdateToOneWithWhereWithoutProviderOrderItemInput: ProductUpdateToOneWithWhereWithoutProviderOrderItemInput;
  ProductUpdateToOneWithWhereWithoutSaleItemsInput: ProductUpdateToOneWithWhereWithoutSaleItemsInput;
  ProductUpdateWithWhereUniqueWithoutBlameUserInput: ProductUpdateWithWhereUniqueWithoutBlameUserInput;
  ProductUpdateWithWhereUniqueWithoutProviderInput: ProductUpdateWithWhereUniqueWithoutProviderInput;
  ProductUpdateWithoutBlameUserInput: ProductUpdateWithoutBlameUserInput;
  ProductUpdateWithoutProductMovementsInput: ProductUpdateWithoutProductMovementsInput;
  ProductUpdateWithoutProviderInput: ProductUpdateWithoutProviderInput;
  ProductUpdateWithoutProviderOrderItemInput: ProductUpdateWithoutProviderOrderItemInput;
  ProductUpdateWithoutSaleItemsInput: ProductUpdateWithoutSaleItemsInput;
  ProductUpsertWithWhereUniqueWithoutBlameUserInput: ProductUpsertWithWhereUniqueWithoutBlameUserInput;
  ProductUpsertWithWhereUniqueWithoutProviderInput: ProductUpsertWithWhereUniqueWithoutProviderInput;
  ProductUpsertWithoutProductMovementsInput: ProductUpsertWithoutProductMovementsInput;
  ProductUpsertWithoutProviderOrderItemInput: ProductUpsertWithoutProviderOrderItemInput;
  ProductUpsertWithoutSaleItemsInput: ProductUpsertWithoutSaleItemsInput;
  ProductWhereInput: ProductWhereInput;
  ProductWhereUniqueInput: ProductWhereUniqueInput;
  ProductsOutput: ProductsOutput;
  Provider: Provider;
  ProviderCount: ProviderCount;
  ProviderCountAggregate: ProviderCountAggregate;
  ProviderCreateInput: ProviderCreateInput;
  ProviderCreateManyBlameUserInput: ProviderCreateManyBlameUserInput;
  ProviderCreateManyBlameUserInputEnvelope: ProviderCreateManyBlameUserInputEnvelope;
  ProviderCreateManyInput: ProviderCreateManyInput;
  ProviderCreateNestedManyWithoutBlameUserInput: ProviderCreateNestedManyWithoutBlameUserInput;
  ProviderCreateNestedOneWithoutProductMovementGroupInput: ProviderCreateNestedOneWithoutProductMovementGroupInput;
  ProviderCreateNestedOneWithoutProductsInput: ProviderCreateNestedOneWithoutProductsInput;
  ProviderCreateNestedOneWithoutSaleItemsInput: ProviderCreateNestedOneWithoutSaleItemsInput;
  ProviderCreateOrConnectWithoutBlameUserInput: ProviderCreateOrConnectWithoutBlameUserInput;
  ProviderCreateOrConnectWithoutProductMovementGroupInput: ProviderCreateOrConnectWithoutProductMovementGroupInput;
  ProviderCreateOrConnectWithoutProductsInput: ProviderCreateOrConnectWithoutProductsInput;
  ProviderCreateOrConnectWithoutSaleItemsInput: ProviderCreateOrConnectWithoutSaleItemsInput;
  ProviderCreateWithoutBlameUserInput: ProviderCreateWithoutBlameUserInput;
  ProviderCreateWithoutProductMovementGroupInput: ProviderCreateWithoutProductMovementGroupInput;
  ProviderCreateWithoutProductsInput: ProviderCreateWithoutProductsInput;
  ProviderCreateWithoutSaleItemsInput: ProviderCreateWithoutSaleItemsInput;
  ProviderListRelationFilter: ProviderListRelationFilter;
  ProviderMaxAggregate: ProviderMaxAggregate;
  ProviderMinAggregate: ProviderMinAggregate;
  ProviderNullableScalarRelationFilter: ProviderNullableScalarRelationFilter;
  ProviderOrder: ProviderOrder;
  ProviderOrderAvgAggregate: ProviderOrderAvgAggregate;
  ProviderOrderByRelationAggregateInput: ProviderOrderByRelationAggregateInput;
  ProviderOrderByWithRelationInput: ProviderOrderByWithRelationInput;
  ProviderOrderCount: ProviderOrderCount;
  ProviderOrderCountAggregate: ProviderOrderCountAggregate;
  ProviderOrderCreateInput: ProviderOrderCreateInput;
  ProviderOrderCreateNestedOneWithoutFinancialMovementsInput: ProviderOrderCreateNestedOneWithoutFinancialMovementsInput;
  ProviderOrderCreateNestedOneWithoutProviderOrderItemsInput: ProviderOrderCreateNestedOneWithoutProviderOrderItemsInput;
  ProviderOrderCreateOrConnectWithoutFinancialMovementsInput: ProviderOrderCreateOrConnectWithoutFinancialMovementsInput;
  ProviderOrderCreateOrConnectWithoutProviderOrderItemsInput: ProviderOrderCreateOrConnectWithoutProviderOrderItemsInput;
  ProviderOrderCreateWithoutFinancialMovementsInput: ProviderOrderCreateWithoutFinancialMovementsInput;
  ProviderOrderCreateWithoutProviderOrderItemsInput: ProviderOrderCreateWithoutProviderOrderItemsInput;
  ProviderOrderItem: ProviderOrderItem;
  ProviderOrderItemAvgAggregate: ProviderOrderItemAvgAggregate;
  ProviderOrderItemCount: ProviderOrderItemCount;
  ProviderOrderItemCountAggregate: ProviderOrderItemCountAggregate;
  ProviderOrderItemCreateManyProductInput: ProviderOrderItemCreateManyProductInput;
  ProviderOrderItemCreateManyProductInputEnvelope: ProviderOrderItemCreateManyProductInputEnvelope;
  ProviderOrderItemCreateManyProviderOrderInput: ProviderOrderItemCreateManyProviderOrderInput;
  ProviderOrderItemCreateManyProviderOrderInputEnvelope: ProviderOrderItemCreateManyProviderOrderInputEnvelope;
  ProviderOrderItemCreateNestedManyWithoutProductInput: ProviderOrderItemCreateNestedManyWithoutProductInput;
  ProviderOrderItemCreateNestedManyWithoutProviderOrderInput: ProviderOrderItemCreateNestedManyWithoutProviderOrderInput;
  ProviderOrderItemCreateNestedOneWithoutProductMovementsInput: ProviderOrderItemCreateNestedOneWithoutProductMovementsInput;
  ProviderOrderItemCreateOrConnectWithoutProductInput: ProviderOrderItemCreateOrConnectWithoutProductInput;
  ProviderOrderItemCreateOrConnectWithoutProductMovementsInput: ProviderOrderItemCreateOrConnectWithoutProductMovementsInput;
  ProviderOrderItemCreateOrConnectWithoutProviderOrderInput: ProviderOrderItemCreateOrConnectWithoutProviderOrderInput;
  ProviderOrderItemCreateWithoutProductInput: ProviderOrderItemCreateWithoutProductInput;
  ProviderOrderItemCreateWithoutProductMovementsInput: ProviderOrderItemCreateWithoutProductMovementsInput;
  ProviderOrderItemCreateWithoutProviderOrderInput: ProviderOrderItemCreateWithoutProviderOrderInput;
  ProviderOrderItemListRelationFilter: ProviderOrderItemListRelationFilter;
  ProviderOrderItemMaxAggregate: ProviderOrderItemMaxAggregate;
  ProviderOrderItemMinAggregate: ProviderOrderItemMinAggregate;
  ProviderOrderItemNullableScalarRelationFilter: ProviderOrderItemNullableScalarRelationFilter;
  ProviderOrderItemOrderByRelationAggregateInput: ProviderOrderItemOrderByRelationAggregateInput;
  ProviderOrderItemOrderByWithRelationInput: ProviderOrderItemOrderByWithRelationInput;
  ProviderOrderItemPaginated: ProviderOrderItemPaginated;
  ProviderOrderItemProviderOrderIdProductIdCompoundUniqueInput: ProviderOrderItemProviderOrderIdProductIdCompoundUniqueInput;
  ProviderOrderItemScalarWhereInput: ProviderOrderItemScalarWhereInput;
  ProviderOrderItemSumAggregate: ProviderOrderItemSumAggregate;
  ProviderOrderItemUpdateManyMutationInput: ProviderOrderItemUpdateManyMutationInput;
  ProviderOrderItemUpdateManyWithWhereWithoutProductInput: ProviderOrderItemUpdateManyWithWhereWithoutProductInput;
  ProviderOrderItemUpdateManyWithWhereWithoutProviderOrderInput: ProviderOrderItemUpdateManyWithWhereWithoutProviderOrderInput;
  ProviderOrderItemUpdateManyWithoutProductNestedInput: ProviderOrderItemUpdateManyWithoutProductNestedInput;
  ProviderOrderItemUpdateManyWithoutProviderOrderNestedInput: ProviderOrderItemUpdateManyWithoutProviderOrderNestedInput;
  ProviderOrderItemUpdateOneWithoutProductMovementsNestedInput: ProviderOrderItemUpdateOneWithoutProductMovementsNestedInput;
  ProviderOrderItemUpdateToOneWithWhereWithoutProductMovementsInput: ProviderOrderItemUpdateToOneWithWhereWithoutProductMovementsInput;
  ProviderOrderItemUpdateWithWhereUniqueWithoutProductInput: ProviderOrderItemUpdateWithWhereUniqueWithoutProductInput;
  ProviderOrderItemUpdateWithWhereUniqueWithoutProviderOrderInput: ProviderOrderItemUpdateWithWhereUniqueWithoutProviderOrderInput;
  ProviderOrderItemUpdateWithoutProductInput: ProviderOrderItemUpdateWithoutProductInput;
  ProviderOrderItemUpdateWithoutProductMovementsInput: ProviderOrderItemUpdateWithoutProductMovementsInput;
  ProviderOrderItemUpdateWithoutProviderOrderInput: ProviderOrderItemUpdateWithoutProviderOrderInput;
  ProviderOrderItemUpsertWithWhereUniqueWithoutProductInput: ProviderOrderItemUpsertWithWhereUniqueWithoutProductInput;
  ProviderOrderItemUpsertWithWhereUniqueWithoutProviderOrderInput: ProviderOrderItemUpsertWithWhereUniqueWithoutProviderOrderInput;
  ProviderOrderItemUpsertWithoutProductMovementsInput: ProviderOrderItemUpsertWithoutProductMovementsInput;
  ProviderOrderItemWhereInput: ProviderOrderItemWhereInput;
  ProviderOrderItemWhereUniqueInput: ProviderOrderItemWhereUniqueInput;
  ProviderOrderItemsOutput: ProviderOrderItemsOutput;
  ProviderOrderMaxAggregate: ProviderOrderMaxAggregate;
  ProviderOrderMinAggregate: ProviderOrderMinAggregate;
  ProviderOrderNullableScalarRelationFilter: ProviderOrderNullableScalarRelationFilter;
  ProviderOrderOrderByWithRelationInput: ProviderOrderOrderByWithRelationInput;
  ProviderOrderPaginated: ProviderOrderPaginated;
  ProviderOrderScalarRelationFilter: ProviderOrderScalarRelationFilter;
  ProviderOrderSumAggregate: ProviderOrderSumAggregate;
  ProviderOrderUpdateInput: ProviderOrderUpdateInput;
  ProviderOrderUpdateOneRequiredWithoutProviderOrderItemsNestedInput: ProviderOrderUpdateOneRequiredWithoutProviderOrderItemsNestedInput;
  ProviderOrderUpdateOneWithoutFinancialMovementsNestedInput: ProviderOrderUpdateOneWithoutFinancialMovementsNestedInput;
  ProviderOrderUpdateToOneWithWhereWithoutFinancialMovementsInput: ProviderOrderUpdateToOneWithWhereWithoutFinancialMovementsInput;
  ProviderOrderUpdateToOneWithWhereWithoutProviderOrderItemsInput: ProviderOrderUpdateToOneWithWhereWithoutProviderOrderItemsInput;
  ProviderOrderUpdateWithoutFinancialMovementsInput: ProviderOrderUpdateWithoutFinancialMovementsInput;
  ProviderOrderUpdateWithoutProviderOrderItemsInput: ProviderOrderUpdateWithoutProviderOrderItemsInput;
  ProviderOrderUpsertWithoutFinancialMovementsInput: ProviderOrderUpsertWithoutFinancialMovementsInput;
  ProviderOrderUpsertWithoutProviderOrderItemsInput: ProviderOrderUpsertWithoutProviderOrderItemsInput;
  ProviderOrderWhereInput: ProviderOrderWhereInput;
  ProviderOrderWhereUniqueInput: ProviderOrderWhereUniqueInput;
  ProviderOrdersOutput: ProviderOrdersOutput;
  ProviderPaginated: ProviderPaginated;
  ProviderScalarWhereInput: ProviderScalarWhereInput;
  ProviderUpdateInput: ProviderUpdateInput;
  ProviderUpdateManyMutationInput: ProviderUpdateManyMutationInput;
  ProviderUpdateManyWithWhereWithoutBlameUserInput: ProviderUpdateManyWithWhereWithoutBlameUserInput;
  ProviderUpdateManyWithoutBlameUserNestedInput: ProviderUpdateManyWithoutBlameUserNestedInput;
  ProviderUpdateOneWithoutProductMovementGroupNestedInput: ProviderUpdateOneWithoutProductMovementGroupNestedInput;
  ProviderUpdateOneWithoutProductsNestedInput: ProviderUpdateOneWithoutProductsNestedInput;
  ProviderUpdateOneWithoutSaleItemsNestedInput: ProviderUpdateOneWithoutSaleItemsNestedInput;
  ProviderUpdateToOneWithWhereWithoutProductMovementGroupInput: ProviderUpdateToOneWithWhereWithoutProductMovementGroupInput;
  ProviderUpdateToOneWithWhereWithoutProductsInput: ProviderUpdateToOneWithWhereWithoutProductsInput;
  ProviderUpdateToOneWithWhereWithoutSaleItemsInput: ProviderUpdateToOneWithWhereWithoutSaleItemsInput;
  ProviderUpdateWithWhereUniqueWithoutBlameUserInput: ProviderUpdateWithWhereUniqueWithoutBlameUserInput;
  ProviderUpdateWithoutBlameUserInput: ProviderUpdateWithoutBlameUserInput;
  ProviderUpdateWithoutProductMovementGroupInput: ProviderUpdateWithoutProductMovementGroupInput;
  ProviderUpdateWithoutProductsInput: ProviderUpdateWithoutProductsInput;
  ProviderUpdateWithoutSaleItemsInput: ProviderUpdateWithoutSaleItemsInput;
  ProviderUpsertWithWhereUniqueWithoutBlameUserInput: ProviderUpsertWithWhereUniqueWithoutBlameUserInput;
  ProviderUpsertWithoutProductMovementGroupInput: ProviderUpsertWithoutProductMovementGroupInput;
  ProviderUpsertWithoutProductsInput: ProviderUpsertWithoutProductsInput;
  ProviderUpsertWithoutSaleItemsInput: ProviderUpsertWithoutSaleItemsInput;
  ProviderWhereInput: ProviderWhereInput;
  ProviderWhereUniqueInput: ProviderWhereUniqueInput;
  ProvidersOutput: ProvidersOutput;
  Query: {};
  Sale: Sale;
  SaleAvgAggregate: SaleAvgAggregate;
  SaleCount: SaleCount;
  SaleCountAggregate: SaleCountAggregate;
  SaleCreateInputCustom: SaleCreateInputCustom;
  SaleCreateManyBlameUserInput: SaleCreateManyBlameUserInput;
  SaleCreateManyBlameUserInputEnvelope: SaleCreateManyBlameUserInputEnvelope;
  SaleCreateNestedManyWithoutBlameUserInput: SaleCreateNestedManyWithoutBlameUserInput;
  SaleCreateNestedOneWithoutFinancialMovementInput: SaleCreateNestedOneWithoutFinancialMovementInput;
  SaleCreateNestedOneWithoutSaleItemsInput: SaleCreateNestedOneWithoutSaleItemsInput;
  SaleCreateOrConnectWithoutBlameUserInput: SaleCreateOrConnectWithoutBlameUserInput;
  SaleCreateOrConnectWithoutFinancialMovementInput: SaleCreateOrConnectWithoutFinancialMovementInput;
  SaleCreateOrConnectWithoutSaleItemsInput: SaleCreateOrConnectWithoutSaleItemsInput;
  SaleCreateWithoutBlameUserInput: SaleCreateWithoutBlameUserInput;
  SaleCreateWithoutFinancialMovementInput: SaleCreateWithoutFinancialMovementInput;
  SaleCreateWithoutSaleItemsInput: SaleCreateWithoutSaleItemsInput;
  SaleItem: SaleItem;
  SaleItemAvgAggregate: SaleItemAvgAggregate;
  SaleItemCostIsPostPaidProductIdSaleIdCompoundUniqueInput: SaleItemCostIsPostPaidProductIdSaleIdCompoundUniqueInput;
  SaleItemCount: SaleItemCount;
  SaleItemCountAggregate: SaleItemCountAggregate;
  SaleItemCreateManyBlameUserInput: SaleItemCreateManyBlameUserInput;
  SaleItemCreateManyBlameUserInputEnvelope: SaleItemCreateManyBlameUserInputEnvelope;
  SaleItemCreateManyProductInput: SaleItemCreateManyProductInput;
  SaleItemCreateManyProductInputEnvelope: SaleItemCreateManyProductInputEnvelope;
  SaleItemCreateManyProviderInput: SaleItemCreateManyProviderInput;
  SaleItemCreateManyProviderInputEnvelope: SaleItemCreateManyProviderInputEnvelope;
  SaleItemCreateManySaleInput: SaleItemCreateManySaleInput;
  SaleItemCreateManySaleInputEnvelope: SaleItemCreateManySaleInputEnvelope;
  SaleItemCreateNestedManyWithoutBlameUserInput: SaleItemCreateNestedManyWithoutBlameUserInput;
  SaleItemCreateNestedManyWithoutProductInput: SaleItemCreateNestedManyWithoutProductInput;
  SaleItemCreateNestedManyWithoutProviderInput: SaleItemCreateNestedManyWithoutProviderInput;
  SaleItemCreateNestedManyWithoutSaleInput: SaleItemCreateNestedManyWithoutSaleInput;
  SaleItemCreateNestedManyWithoutSaleInputCustom: SaleItemCreateNestedManyWithoutSaleInputCustom;
  SaleItemCreateNestedOneWithoutProductMovementsInput: SaleItemCreateNestedOneWithoutProductMovementsInput;
  SaleItemCreateOrConnectWithoutBlameUserInput: SaleItemCreateOrConnectWithoutBlameUserInput;
  SaleItemCreateOrConnectWithoutProductInput: SaleItemCreateOrConnectWithoutProductInput;
  SaleItemCreateOrConnectWithoutProductMovementsInput: SaleItemCreateOrConnectWithoutProductMovementsInput;
  SaleItemCreateOrConnectWithoutProviderInput: SaleItemCreateOrConnectWithoutProviderInput;
  SaleItemCreateOrConnectWithoutSaleInput: SaleItemCreateOrConnectWithoutSaleInput;
  SaleItemCreateWithoutBlameUserInput: SaleItemCreateWithoutBlameUserInput;
  SaleItemCreateWithoutProductInput: SaleItemCreateWithoutProductInput;
  SaleItemCreateWithoutProductMovementsInput: SaleItemCreateWithoutProductMovementsInput;
  SaleItemCreateWithoutProviderInput: SaleItemCreateWithoutProviderInput;
  SaleItemCreateWithoutSaleInput: SaleItemCreateWithoutSaleInput;
  SaleItemListRelationFilter: SaleItemListRelationFilter;
  SaleItemMaxAggregate: SaleItemMaxAggregate;
  SaleItemMinAggregate: SaleItemMinAggregate;
  SaleItemNullableScalarRelationFilter: SaleItemNullableScalarRelationFilter;
  SaleItemOrderByRelationAggregateInput: SaleItemOrderByRelationAggregateInput;
  SaleItemOrderByWithRelationInput: SaleItemOrderByWithRelationInput;
  SaleItemPaginated: SaleItemPaginated;
  SaleItemScalarWhereInput: SaleItemScalarWhereInput;
  SaleItemSumAggregate: SaleItemSumAggregate;
  SaleItemUpdateManyMutationInput: SaleItemUpdateManyMutationInput;
  SaleItemUpdateManyWithWhereWithoutBlameUserInput: SaleItemUpdateManyWithWhereWithoutBlameUserInput;
  SaleItemUpdateManyWithWhereWithoutProductInput: SaleItemUpdateManyWithWhereWithoutProductInput;
  SaleItemUpdateManyWithWhereWithoutProviderInput: SaleItemUpdateManyWithWhereWithoutProviderInput;
  SaleItemUpdateManyWithWhereWithoutSaleInput: SaleItemUpdateManyWithWhereWithoutSaleInput;
  SaleItemUpdateManyWithoutBlameUserNestedInput: SaleItemUpdateManyWithoutBlameUserNestedInput;
  SaleItemUpdateManyWithoutProductNestedInput: SaleItemUpdateManyWithoutProductNestedInput;
  SaleItemUpdateManyWithoutProviderNestedInput: SaleItemUpdateManyWithoutProviderNestedInput;
  SaleItemUpdateManyWithoutSaleNestedInput: SaleItemUpdateManyWithoutSaleNestedInput;
  SaleItemUpdateManyWithoutSaleNestedInputCustom: SaleItemUpdateManyWithoutSaleNestedInputCustom;
  SaleItemUpdateOneWithoutProductMovementsNestedInput: SaleItemUpdateOneWithoutProductMovementsNestedInput;
  SaleItemUpdateToOneWithWhereWithoutProductMovementsInput: SaleItemUpdateToOneWithWhereWithoutProductMovementsInput;
  SaleItemUpdateWithWhereUniqueWithoutBlameUserInput: SaleItemUpdateWithWhereUniqueWithoutBlameUserInput;
  SaleItemUpdateWithWhereUniqueWithoutProductInput: SaleItemUpdateWithWhereUniqueWithoutProductInput;
  SaleItemUpdateWithWhereUniqueWithoutProviderInput: SaleItemUpdateWithWhereUniqueWithoutProviderInput;
  SaleItemUpdateWithWhereUniqueWithoutSaleInput: SaleItemUpdateWithWhereUniqueWithoutSaleInput;
  SaleItemUpdateWithoutBlameUserInput: SaleItemUpdateWithoutBlameUserInput;
  SaleItemUpdateWithoutProductInput: SaleItemUpdateWithoutProductInput;
  SaleItemUpdateWithoutProductMovementsInput: SaleItemUpdateWithoutProductMovementsInput;
  SaleItemUpdateWithoutProviderInput: SaleItemUpdateWithoutProviderInput;
  SaleItemUpdateWithoutSaleInput: SaleItemUpdateWithoutSaleInput;
  SaleItemUpsertWithWhereUniqueWithoutBlameUserInput: SaleItemUpsertWithWhereUniqueWithoutBlameUserInput;
  SaleItemUpsertWithWhereUniqueWithoutProductInput: SaleItemUpsertWithWhereUniqueWithoutProductInput;
  SaleItemUpsertWithWhereUniqueWithoutProviderInput: SaleItemUpsertWithWhereUniqueWithoutProviderInput;
  SaleItemUpsertWithWhereUniqueWithoutSaleInput: SaleItemUpsertWithWhereUniqueWithoutSaleInput;
  SaleItemUpsertWithoutProductMovementsInput: SaleItemUpsertWithoutProductMovementsInput;
  SaleItemWhereInput: SaleItemWhereInput;
  SaleItemWhereUniqueInput: SaleItemWhereUniqueInput;
  SaleItemsOutput: SaleItemsOutput;
  SaleListRelationFilter: SaleListRelationFilter;
  SaleMaxAggregate: SaleMaxAggregate;
  SaleMinAggregate: SaleMinAggregate;
  SaleNullableScalarRelationFilter: SaleNullableScalarRelationFilter;
  SaleOrderByRelationAggregateInput: SaleOrderByRelationAggregateInput;
  SaleOrderByWithRelationInput: SaleOrderByWithRelationInput;
  SalePaginated: SalePaginated;
  SaleScalarWhereInput: SaleScalarWhereInput;
  SaleSumAggregate: SaleSumAggregate;
  SaleUpdateInputCustom: SaleUpdateInputCustom;
  SaleUpdateManyMutationInput: SaleUpdateManyMutationInput;
  SaleUpdateManyWithWhereWithoutBlameUserInput: SaleUpdateManyWithWhereWithoutBlameUserInput;
  SaleUpdateManyWithoutBlameUserNestedInput: SaleUpdateManyWithoutBlameUserNestedInput;
  SaleUpdateOneWithoutFinancialMovementNestedInput: SaleUpdateOneWithoutFinancialMovementNestedInput;
  SaleUpdateOneWithoutSaleItemsNestedInput: SaleUpdateOneWithoutSaleItemsNestedInput;
  SaleUpdateToOneWithWhereWithoutFinancialMovementInput: SaleUpdateToOneWithWhereWithoutFinancialMovementInput;
  SaleUpdateToOneWithWhereWithoutSaleItemsInput: SaleUpdateToOneWithWhereWithoutSaleItemsInput;
  SaleUpdateWithWhereUniqueWithoutBlameUserInput: SaleUpdateWithWhereUniqueWithoutBlameUserInput;
  SaleUpdateWithoutBlameUserInput: SaleUpdateWithoutBlameUserInput;
  SaleUpdateWithoutFinancialMovementInput: SaleUpdateWithoutFinancialMovementInput;
  SaleUpdateWithoutSaleItemsInput: SaleUpdateWithoutSaleItemsInput;
  SaleUpsertWithWhereUniqueWithoutBlameUserInput: SaleUpsertWithWhereUniqueWithoutBlameUserInput;
  SaleUpsertWithoutFinancialMovementInput: SaleUpsertWithoutFinancialMovementInput;
  SaleUpsertWithoutSaleItemsInput: SaleUpsertWithoutSaleItemsInput;
  SaleWhereInput: SaleWhereInput;
  SaleWhereInputCustom: SaleWhereInputCustom;
  SaleWhereUniqueInput: SaleWhereUniqueInput;
  SalesOutput: SalesOutput;
  String: Scalars['String']['output'];
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  User: User;
  UserCount: UserCount;
  UserCountAggregate: UserCountAggregate;
  UserCreateNestedOneWithoutProductMovementsInput: UserCreateNestedOneWithoutProductMovementsInput;
  UserCreateNestedOneWithoutProductsInput: UserCreateNestedOneWithoutProductsInput;
  UserCreateNestedOneWithoutProvidersInput: UserCreateNestedOneWithoutProvidersInput;
  UserCreateNestedOneWithoutSaleItemsInput: UserCreateNestedOneWithoutSaleItemsInput;
  UserCreateNestedOneWithoutSalesInput: UserCreateNestedOneWithoutSalesInput;
  UserCreateOrConnectWithoutProductMovementsInput: UserCreateOrConnectWithoutProductMovementsInput;
  UserCreateOrConnectWithoutProductsInput: UserCreateOrConnectWithoutProductsInput;
  UserCreateOrConnectWithoutProvidersInput: UserCreateOrConnectWithoutProvidersInput;
  UserCreateOrConnectWithoutSaleItemsInput: UserCreateOrConnectWithoutSaleItemsInput;
  UserCreateOrConnectWithoutSalesInput: UserCreateOrConnectWithoutSalesInput;
  UserCreateWithoutProductMovementsInput: UserCreateWithoutProductMovementsInput;
  UserCreateWithoutProductsInput: UserCreateWithoutProductsInput;
  UserCreateWithoutProvidersInput: UserCreateWithoutProvidersInput;
  UserCreateWithoutSaleItemsInput: UserCreateWithoutSaleItemsInput;
  UserCreateWithoutSalesInput: UserCreateWithoutSalesInput;
  UserMaxAggregate: UserMaxAggregate;
  UserMinAggregate: UserMinAggregate;
  UserNullableScalarRelationFilter: UserNullableScalarRelationFilter;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserPaginated: UserPaginated;
  UserUpdateOneWithoutProductMovementsNestedInput: UserUpdateOneWithoutProductMovementsNestedInput;
  UserUpdateOneWithoutProductsNestedInput: UserUpdateOneWithoutProductsNestedInput;
  UserUpdateOneWithoutProvidersNestedInput: UserUpdateOneWithoutProvidersNestedInput;
  UserUpdateOneWithoutSaleItemsNestedInput: UserUpdateOneWithoutSaleItemsNestedInput;
  UserUpdateOneWithoutSalesNestedInput: UserUpdateOneWithoutSalesNestedInput;
  UserUpdateToOneWithWhereWithoutProductMovementsInput: UserUpdateToOneWithWhereWithoutProductMovementsInput;
  UserUpdateToOneWithWhereWithoutProductsInput: UserUpdateToOneWithWhereWithoutProductsInput;
  UserUpdateToOneWithWhereWithoutProvidersInput: UserUpdateToOneWithWhereWithoutProvidersInput;
  UserUpdateToOneWithWhereWithoutSaleItemsInput: UserUpdateToOneWithWhereWithoutSaleItemsInput;
  UserUpdateToOneWithWhereWithoutSalesInput: UserUpdateToOneWithWhereWithoutSalesInput;
  UserUpdateWithoutProductMovementsInput: UserUpdateWithoutProductMovementsInput;
  UserUpdateWithoutProductsInput: UserUpdateWithoutProductsInput;
  UserUpdateWithoutProvidersInput: UserUpdateWithoutProvidersInput;
  UserUpdateWithoutSaleItemsInput: UserUpdateWithoutSaleItemsInput;
  UserUpdateWithoutSalesInput: UserUpdateWithoutSalesInput;
  UserUpsertWithoutProductMovementsInput: UserUpsertWithoutProductMovementsInput;
  UserUpsertWithoutProductsInput: UserUpsertWithoutProductsInput;
  UserUpsertWithoutProvidersInput: UserUpsertWithoutProvidersInput;
  UserUpsertWithoutSaleItemsInput: UserUpsertWithoutSaleItemsInput;
  UserUpsertWithoutSalesInput: UserUpsertWithoutSalesInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  UsersOutput: UsersOutput;
};

export type AggregateFinancialMovementResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateFinancialMovement'] = ResolversParentTypes['AggregateFinancialMovement']> = {
  count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregateProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateProduct'] = ResolversParentTypes['AggregateProduct']> = {
  costValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  priceValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  qty?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregateSaleResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateSale'] = ResolversParentTypes['AggregateSale']> = {
  count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, Partial<AggregateSaleCountArgs>>;
  netValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalCostValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type FinancialMovementResolvers<ContextType = any, ParentType extends ResolversParentTypes['FinancialMovement'] = ResolversParentTypes['FinancialMovement']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  providerOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  saleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['FinancialMovementType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  valueDecimal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FinancialMovementAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['FinancialMovementAvgAggregate'] = ResolversParentTypes['FinancialMovementAvgAggregate']> = {
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FinancialMovementCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['FinancialMovementCountAggregate'] = ResolversParentTypes['FinancialMovementCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  providerOrderId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  saleId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FinancialMovementMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['FinancialMovementMaxAggregate'] = ResolversParentTypes['FinancialMovementMaxAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  saleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['FinancialMovementType']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FinancialMovementMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['FinancialMovementMinAggregate'] = ResolversParentTypes['FinancialMovementMinAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  saleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['FinancialMovementType']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FinancialMovementPaginatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['FinancialMovementPaginated'] = ResolversParentTypes['FinancialMovementPaginated']> = {
  currentPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FinancialMovementSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['FinancialMovementSumAggregate'] = ResolversParentTypes['FinancialMovementSumAggregate']> = {
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FinancialMovementsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['FinancialMovementsOutput'] = ResolversParentTypes['FinancialMovementsOutput']> = {
  nodes?: Resolver<Array<ResolversTypes['FinancialMovement']>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['FinancialMovementPaginated']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createFinancialMovement?: Resolver<ResolversTypes['FinancialMovement'], ParentType, ContextType, RequireFields<MutationCreateFinancialMovementArgs, 'data'>>;
  createProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'data'>>;
  createProvider?: Resolver<ResolversTypes['Provider'], ParentType, ContextType, RequireFields<MutationCreateProviderArgs, 'data'>>;
  createProviderOrder?: Resolver<ResolversTypes['ProviderOrder'], ParentType, ContextType, RequireFields<MutationCreateProviderOrderArgs, 'data'>>;
  createProviders?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateProvidersArgs, 'data'>>;
  createSale?: Resolver<Maybe<ResolversTypes['Sale']>, ParentType, ContextType, RequireFields<MutationCreateSaleArgs, 'data'>>;
  deleteFinancialMovement?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteFinancialMovementArgs, 'where'>>;
  deleteProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'where'>>;
  deleteProvider?: Resolver<ResolversTypes['Provider'], ParentType, ContextType, RequireFields<MutationDeleteProviderArgs, 'where'>>;
  deleteProviderOrder?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteProviderOrderArgs, 'where'>>;
  deleteSale?: Resolver<Maybe<ResolversTypes['Sale']>, ParentType, ContextType, RequireFields<MutationDeleteSaleArgs, 'where'>>;
  updateFinancialMovement?: Resolver<ResolversTypes['FinancialMovement'], ParentType, ContextType, RequireFields<MutationUpdateFinancialMovementArgs, 'data' | 'where'>>;
  updateProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'data' | 'where'>>;
  updateProvider?: Resolver<ResolversTypes['Provider'], ParentType, ContextType, RequireFields<MutationUpdateProviderArgs, 'data' | 'where'>>;
  updateProviderOrder?: Resolver<ResolversTypes['ProviderOrder'], ParentType, ContextType, RequireFields<MutationUpdateProviderOrderArgs, 'data' | 'where'>>;
  updateSale?: Resolver<Maybe<ResolversTypes['Sale']>, ParentType, ContextType, RequireFields<MutationUpdateSaleArgs, 'data' | 'where'>>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  _count?: Resolver<ResolversTypes['ProductCount'], ParentType, ContextType>;
  blameUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  brandName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  controlsQty?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  costValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  costValueDecimal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  errors?: Resolver<Maybe<ResolversTypes['MainExceptionKeys']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isPostPaid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  netMarginPercent?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  netMarginValue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  priceValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  priceValueDecimal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['Provider']>, ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qty?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductAvgAggregate'] = ResolversParentTypes['ProductAvgAggregate']> = {
  costValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCount'] = ResolversParentTypes['ProductCount']> = {
  ProductMovements?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ProviderOrderItem?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  SaleItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCountAggregate'] = ResolversParentTypes['ProductCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blameUserId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  brandName?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  controlsQty?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  costValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isPostPaid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  priceValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  providerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  qty?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMaxAggregate'] = ResolversParentTypes['ProductMaxAggregate']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  brandName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  controlsQty?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  costValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isPostPaid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priceValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMinAggregate'] = ResolversParentTypes['ProductMinAggregate']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  brandName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  controlsQty?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  costValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isPostPaid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priceValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductMovementAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMovementAvgAggregate'] = ResolversParentTypes['ProductMovementAvgAggregate']> = {
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductMovementCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMovementCountAggregate'] = ResolversParentTypes['ProductMovementCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blameUserId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productMovementGroupId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  providerOrderItemId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  saleItemId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductMovementGroupCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMovementGroupCount'] = ResolversParentTypes['ProductMovementGroupCount']> = {
  ProductMovements?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductMovementGroupCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMovementGroupCountAggregate'] = ResolversParentTypes['ProductMovementGroupCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  providerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductMovementGroupMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMovementGroupMaxAggregate'] = ResolversParentTypes['ProductMovementGroupMaxAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  documentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ProductMovementGroupType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductMovementGroupMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMovementGroupMinAggregate'] = ResolversParentTypes['ProductMovementGroupMinAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  documentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ProductMovementGroupType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductMovementMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMovementMaxAggregate'] = ResolversParentTypes['ProductMovementMaxAggregate']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productMovementGroupId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerOrderItemId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  saleItemId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ProductMovementType']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductMovementMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMovementMinAggregate'] = ResolversParentTypes['ProductMovementMinAggregate']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productMovementGroupId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerOrderItemId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  saleItemId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ProductMovementType']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductMovementSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMovementSumAggregate'] = ResolversParentTypes['ProductMovementSumAggregate']> = {
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductPaginatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPaginated'] = ResolversParentTypes['ProductPaginated']> = {
  currentPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductSumAggregate'] = ResolversParentTypes['ProductSumAggregate']> = {
  costValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  priceValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  qty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsOutput'] = ResolversParentTypes['ProductsOutput']> = {
  nodes?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['ProductPaginated']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Provider'] = ResolversParentTypes['Provider']> = {
  _count?: Resolver<ResolversTypes['ProviderCount'], ParentType, ContextType>;
  blameUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<ResolversTypes['ProductsOutput'], ParentType, ContextType, Partial<ProviderProductsArgs>>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  whatsapp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderCount'] = ResolversParentTypes['ProviderCount']> = {
  ProductMovementGroup?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  products?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  saleItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderCountAggregate'] = ResolversParentTypes['ProviderCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blameUserId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  document?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  whatsapp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderMaxAggregate'] = ResolversParentTypes['ProviderMaxAggregate']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  whatsapp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderMinAggregate'] = ResolversParentTypes['ProviderMinAggregate']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  whatsapp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderOrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderOrder'] = ResolversParentTypes['ProviderOrder']> = {
  _count?: Resolver<ResolversTypes['ProviderOrderCount'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  itemsValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemsValueDecimal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  otherValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  providerOrderItems?: Resolver<ResolversTypes['ProviderOrderItemsOutput'], ParentType, ContextType, Partial<ProviderOrderProviderOrderItemsArgs>>;
  totalValue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalValueDecimal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderOrderAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderOrderAvgAggregate'] = ResolversParentTypes['ProviderOrderAvgAggregate']> = {
  itemsValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  otherValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderOrderCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderOrderCount'] = ResolversParentTypes['ProviderOrderCount']> = {
  financialMovements?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  providerOrderItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderOrderCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderOrderCountAggregate'] = ResolversParentTypes['ProviderOrderCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemsValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  otherValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderOrderItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderOrderItem'] = ResolversParentTypes['ProviderOrderItem']> = {
  _count?: Resolver<ResolversTypes['ProviderOrderItemCount'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  moveQty?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['Provider']>, ParentType, ContextType>;
  providerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  providerOrderId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalValueDecimal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderOrderItemAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderOrderItemAvgAggregate'] = ResolversParentTypes['ProviderOrderItemAvgAggregate']> = {
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderOrderItemCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderOrderItemCount'] = ResolversParentTypes['ProviderOrderItemCount']> = {
  productMovements?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderOrderItemCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderOrderItemCountAggregate'] = ResolversParentTypes['ProviderOrderItemCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  moveQty?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  providerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  providerOrderId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderOrderItemMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderOrderItemMaxAggregate'] = ResolversParentTypes['ProviderOrderItemMaxAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  moveQty?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderOrderItemMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderOrderItemMinAggregate'] = ResolversParentTypes['ProviderOrderItemMinAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  moveQty?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderOrderItemPaginatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderOrderItemPaginated'] = ResolversParentTypes['ProviderOrderItemPaginated']> = {
  currentPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderOrderItemSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderOrderItemSumAggregate'] = ResolversParentTypes['ProviderOrderItemSumAggregate']> = {
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderOrderItemsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderOrderItemsOutput'] = ResolversParentTypes['ProviderOrderItemsOutput']> = {
  nodes?: Resolver<Array<ResolversTypes['ProviderOrderItem']>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['ProviderOrderItemPaginated']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderOrderMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderOrderMaxAggregate'] = ResolversParentTypes['ProviderOrderMaxAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemsValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  otherValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderOrderMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderOrderMinAggregate'] = ResolversParentTypes['ProviderOrderMinAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemsValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  otherValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderOrderPaginatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderOrderPaginated'] = ResolversParentTypes['ProviderOrderPaginated']> = {
  currentPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderOrderSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderOrderSumAggregate'] = ResolversParentTypes['ProviderOrderSumAggregate']> = {
  itemsValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  otherValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderOrdersOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderOrdersOutput'] = ResolversParentTypes['ProviderOrdersOutput']> = {
  nodes?: Resolver<Array<ResolversTypes['ProviderOrder']>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['ProviderOrderPaginated']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderPaginatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderPaginated'] = ResolversParentTypes['ProviderPaginated']> = {
  currentPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProvidersOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProvidersOutput'] = ResolversParentTypes['ProvidersOutput']> = {
  nodes?: Resolver<Array<ResolversTypes['Provider']>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['ProviderPaginated']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  financialMovement?: Resolver<ResolversTypes['FinancialMovement'], ParentType, ContextType, RequireFields<QueryFinancialMovementArgs, 'where'>>;
  financialMovementAggregate?: Resolver<ResolversTypes['AggregateFinancialMovement'], ParentType, ContextType>;
  financialMovements?: Resolver<ResolversTypes['FinancialMovementsOutput'], ParentType, ContextType, Partial<QueryFinancialMovementsArgs>>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<QueryProductArgs, 'where'>>;
  productAggregate?: Resolver<ResolversTypes['AggregateProduct'], ParentType, ContextType>;
  products?: Resolver<ResolversTypes['ProductsOutput'], ParentType, ContextType, Partial<QueryProductsArgs>>;
  provider?: Resolver<ResolversTypes['Provider'], ParentType, ContextType, RequireFields<QueryProviderArgs, 'where'>>;
  providerOrder?: Resolver<ResolversTypes['ProviderOrder'], ParentType, ContextType, RequireFields<QueryProviderOrderArgs, 'where'>>;
  providerOrderItems?: Resolver<ResolversTypes['ProviderOrderItemsOutput'], ParentType, ContextType, Partial<QueryProviderOrderItemsArgs>>;
  providerOrders?: Resolver<ResolversTypes['ProviderOrdersOutput'], ParentType, ContextType, Partial<QueryProviderOrdersArgs>>;
  providers?: Resolver<ResolversTypes['ProvidersOutput'], ParentType, ContextType, Partial<QueryProvidersArgs>>;
  sale?: Resolver<ResolversTypes['Sale'], ParentType, ContextType, RequireFields<QuerySaleArgs, 'where'>>;
  saleAggregate?: Resolver<ResolversTypes['AggregateSale'], ParentType, ContextType, Partial<QuerySaleAggregateArgs>>;
  saleItem?: Resolver<ResolversTypes['SaleItem'], ParentType, ContextType, RequireFields<QuerySaleItemArgs, 'where'>>;
  saleItems?: Resolver<ResolversTypes['SaleItemsOutput'], ParentType, ContextType, Partial<QuerySaleItemsArgs>>;
  sales?: Resolver<ResolversTypes['SalesOutput'], ParentType, ContextType, Partial<QuerySalesArgs>>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryUserArgs, 'where'>>;
  users?: Resolver<ResolversTypes['UsersOutput'], ParentType, ContextType, Partial<QueryUsersArgs>>;
};

export type SaleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sale'] = ResolversParentTypes['Sale']> = {
  _count?: Resolver<ResolversTypes['SaleCount'], ParentType, ContextType>;
  blameUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  netMarginPercent?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  netMarginValue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  saleItems?: Resolver<ResolversTypes['SaleItemsOutput'], ParentType, ContextType, Partial<SaleSaleItemsArgs>>;
  totalCostValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalCostValueDecimal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalValueDecimal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleAvgAggregate'] = ResolversParentTypes['SaleAvgAggregate']> = {
  totalCostValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleCount'] = ResolversParentTypes['SaleCount']> = {
  FinancialMovement?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  saleItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleCountAggregate'] = ResolversParentTypes['SaleCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blameUserId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalCostValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleItem'] = ResolversParentTypes['SaleItem']> = {
  _count?: Resolver<ResolversTypes['SaleItemCount'], ParentType, ContextType>;
  blameUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costIsPostPaid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  netMarginPercent?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  netMarginValue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['Provider']>, ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  saleCostIsPaid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  saleCostIsSelected?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  saleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  salePaidCostId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalCostValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalCostValueDecimal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalValueDecimal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleItemAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleItemAvgAggregate'] = ResolversParentTypes['SaleItemAvgAggregate']> = {
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalCostValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleItemCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleItemCount'] = ResolversParentTypes['SaleItemCount']> = {
  productMovements?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleItemCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleItemCountAggregate'] = ResolversParentTypes['SaleItemCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blameUserId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  costIsPostPaid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  providerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  saleCostIsPaid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  saleCostIsSelected?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  saleId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  salePaidCostId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalCostValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleItemMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleItemMaxAggregate'] = ResolversParentTypes['SaleItemMaxAggregate']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costIsPostPaid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  saleCostIsPaid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  saleCostIsSelected?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  saleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  salePaidCostId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalCostValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleItemMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleItemMinAggregate'] = ResolversParentTypes['SaleItemMinAggregate']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costIsPostPaid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  saleCostIsPaid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  saleCostIsSelected?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  saleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  salePaidCostId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalCostValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleItemPaginatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleItemPaginated'] = ResolversParentTypes['SaleItemPaginated']> = {
  currentPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleItemSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleItemSumAggregate'] = ResolversParentTypes['SaleItemSumAggregate']> = {
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCostValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleItemsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleItemsOutput'] = ResolversParentTypes['SaleItemsOutput']> = {
  nodes?: Resolver<Array<ResolversTypes['SaleItem']>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['SaleItemPaginated']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleMaxAggregate'] = ResolversParentTypes['SaleMaxAggregate']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalCostValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleMinAggregate'] = ResolversParentTypes['SaleMinAggregate']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalCostValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalePaginatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['SalePaginated'] = ResolversParentTypes['SalePaginated']> = {
  currentPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleSumAggregate'] = ResolversParentTypes['SaleSumAggregate']> = {
  totalCostValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalesOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['SalesOutput'] = ResolversParentTypes['SalesOutput']> = {
  nodes?: Resolver<Array<ResolversTypes['Sale']>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['SalePaginated']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _count?: Resolver<ResolversTypes['UserCount'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCount'] = ResolversParentTypes['UserCount']> = {
  ProductMovements?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  products?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  providers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  saleItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sales?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCountAggregate'] = ResolversParentTypes['UserCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMaxAggregate'] = ResolversParentTypes['UserMaxAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMinAggregate'] = ResolversParentTypes['UserMinAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPaginatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPaginated'] = ResolversParentTypes['UserPaginated']> = {
  currentPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersOutput'] = ResolversParentTypes['UsersOutput']> = {
  nodes?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['UserPaginated']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AggregateFinancialMovement?: AggregateFinancialMovementResolvers<ContextType>;
  AggregateProduct?: AggregateProductResolvers<ContextType>;
  AggregateSale?: AggregateSaleResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  FinancialMovement?: FinancialMovementResolvers<ContextType>;
  FinancialMovementAvgAggregate?: FinancialMovementAvgAggregateResolvers<ContextType>;
  FinancialMovementCountAggregate?: FinancialMovementCountAggregateResolvers<ContextType>;
  FinancialMovementMaxAggregate?: FinancialMovementMaxAggregateResolvers<ContextType>;
  FinancialMovementMinAggregate?: FinancialMovementMinAggregateResolvers<ContextType>;
  FinancialMovementPaginated?: FinancialMovementPaginatedResolvers<ContextType>;
  FinancialMovementSumAggregate?: FinancialMovementSumAggregateResolvers<ContextType>;
  FinancialMovementsOutput?: FinancialMovementsOutputResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductAvgAggregate?: ProductAvgAggregateResolvers<ContextType>;
  ProductCount?: ProductCountResolvers<ContextType>;
  ProductCountAggregate?: ProductCountAggregateResolvers<ContextType>;
  ProductMaxAggregate?: ProductMaxAggregateResolvers<ContextType>;
  ProductMinAggregate?: ProductMinAggregateResolvers<ContextType>;
  ProductMovementAvgAggregate?: ProductMovementAvgAggregateResolvers<ContextType>;
  ProductMovementCountAggregate?: ProductMovementCountAggregateResolvers<ContextType>;
  ProductMovementGroupCount?: ProductMovementGroupCountResolvers<ContextType>;
  ProductMovementGroupCountAggregate?: ProductMovementGroupCountAggregateResolvers<ContextType>;
  ProductMovementGroupMaxAggregate?: ProductMovementGroupMaxAggregateResolvers<ContextType>;
  ProductMovementGroupMinAggregate?: ProductMovementGroupMinAggregateResolvers<ContextType>;
  ProductMovementMaxAggregate?: ProductMovementMaxAggregateResolvers<ContextType>;
  ProductMovementMinAggregate?: ProductMovementMinAggregateResolvers<ContextType>;
  ProductMovementSumAggregate?: ProductMovementSumAggregateResolvers<ContextType>;
  ProductPaginated?: ProductPaginatedResolvers<ContextType>;
  ProductSumAggregate?: ProductSumAggregateResolvers<ContextType>;
  ProductsOutput?: ProductsOutputResolvers<ContextType>;
  Provider?: ProviderResolvers<ContextType>;
  ProviderCount?: ProviderCountResolvers<ContextType>;
  ProviderCountAggregate?: ProviderCountAggregateResolvers<ContextType>;
  ProviderMaxAggregate?: ProviderMaxAggregateResolvers<ContextType>;
  ProviderMinAggregate?: ProviderMinAggregateResolvers<ContextType>;
  ProviderOrder?: ProviderOrderResolvers<ContextType>;
  ProviderOrderAvgAggregate?: ProviderOrderAvgAggregateResolvers<ContextType>;
  ProviderOrderCount?: ProviderOrderCountResolvers<ContextType>;
  ProviderOrderCountAggregate?: ProviderOrderCountAggregateResolvers<ContextType>;
  ProviderOrderItem?: ProviderOrderItemResolvers<ContextType>;
  ProviderOrderItemAvgAggregate?: ProviderOrderItemAvgAggregateResolvers<ContextType>;
  ProviderOrderItemCount?: ProviderOrderItemCountResolvers<ContextType>;
  ProviderOrderItemCountAggregate?: ProviderOrderItemCountAggregateResolvers<ContextType>;
  ProviderOrderItemMaxAggregate?: ProviderOrderItemMaxAggregateResolvers<ContextType>;
  ProviderOrderItemMinAggregate?: ProviderOrderItemMinAggregateResolvers<ContextType>;
  ProviderOrderItemPaginated?: ProviderOrderItemPaginatedResolvers<ContextType>;
  ProviderOrderItemSumAggregate?: ProviderOrderItemSumAggregateResolvers<ContextType>;
  ProviderOrderItemsOutput?: ProviderOrderItemsOutputResolvers<ContextType>;
  ProviderOrderMaxAggregate?: ProviderOrderMaxAggregateResolvers<ContextType>;
  ProviderOrderMinAggregate?: ProviderOrderMinAggregateResolvers<ContextType>;
  ProviderOrderPaginated?: ProviderOrderPaginatedResolvers<ContextType>;
  ProviderOrderSumAggregate?: ProviderOrderSumAggregateResolvers<ContextType>;
  ProviderOrdersOutput?: ProviderOrdersOutputResolvers<ContextType>;
  ProviderPaginated?: ProviderPaginatedResolvers<ContextType>;
  ProvidersOutput?: ProvidersOutputResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Sale?: SaleResolvers<ContextType>;
  SaleAvgAggregate?: SaleAvgAggregateResolvers<ContextType>;
  SaleCount?: SaleCountResolvers<ContextType>;
  SaleCountAggregate?: SaleCountAggregateResolvers<ContextType>;
  SaleItem?: SaleItemResolvers<ContextType>;
  SaleItemAvgAggregate?: SaleItemAvgAggregateResolvers<ContextType>;
  SaleItemCount?: SaleItemCountResolvers<ContextType>;
  SaleItemCountAggregate?: SaleItemCountAggregateResolvers<ContextType>;
  SaleItemMaxAggregate?: SaleItemMaxAggregateResolvers<ContextType>;
  SaleItemMinAggregate?: SaleItemMinAggregateResolvers<ContextType>;
  SaleItemPaginated?: SaleItemPaginatedResolvers<ContextType>;
  SaleItemSumAggregate?: SaleItemSumAggregateResolvers<ContextType>;
  SaleItemsOutput?: SaleItemsOutputResolvers<ContextType>;
  SaleMaxAggregate?: SaleMaxAggregateResolvers<ContextType>;
  SaleMinAggregate?: SaleMinAggregateResolvers<ContextType>;
  SalePaginated?: SalePaginatedResolvers<ContextType>;
  SaleSumAggregate?: SaleSumAggregateResolvers<ContextType>;
  SalesOutput?: SalesOutputResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserCount?: UserCountResolvers<ContextType>;
  UserCountAggregate?: UserCountAggregateResolvers<ContextType>;
  UserMaxAggregate?: UserMaxAggregateResolvers<ContextType>;
  UserMinAggregate?: UserMinAggregateResolvers<ContextType>;
  UserPaginated?: UserPaginatedResolvers<ContextType>;
  UsersOutput?: UsersOutputResolvers<ContextType>;
};

