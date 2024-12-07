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

export type EnumProductMovementTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<ProductMovementType>;
};

export type EnumProductMovementTypeFilter = {
  equals?: InputMaybe<ProductMovementType>;
  in?: InputMaybe<Array<ProductMovementType>>;
  not?: InputMaybe<NestedEnumProductMovementTypeFilter>;
  notIn?: InputMaybe<Array<ProductMovementType>>;
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
  confirmSalePaidCost: SalePaidCost;
  createProduct: Product;
  createProducts: Scalars['Boolean']['output'];
  createProvider: Provider;
  createProviders: Scalars['Boolean']['output'];
  createSale: Sale;
  createSalePaidCost: SalePaidCost;
  createUser: User;
  createUsers: Scalars['Boolean']['output'];
  deleteProduct: Product;
  deleteProvider: Provider;
  deleteSale: Sale;
  deleteSalePaidCost: SalePaidCost;
  deleteUser: User;
  updateProduct: Product;
  updateProvider: Provider;
  updateSale: Sale;
  updateUser: User;
};


export type MutationConfirmSalePaidCostArgs = {
  data: SalePaidCostUpdateInput;
  where: SalePaidCostWhereUniqueInput;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateProductsArgs = {
  data: Array<ProductCreateManyInput>;
};


export type MutationCreateProviderArgs = {
  data: ProviderCreateInput;
};


export type MutationCreateProvidersArgs = {
  data: Array<ProviderCreateManyInput>;
};


export type MutationCreateSaleArgs = {
  data: SaleCreateInputCustom;
};


export type MutationCreateSalePaidCostArgs = {
  data: SalePaidCostCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateManyInput>;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteProviderArgs = {
  where: ProviderWhereUniqueInput;
};


export type MutationDeleteSaleArgs = {
  where: SaleWhereUniqueInput;
};


export type MutationDeleteSalePaidCostArgs = {
  where: SalePaidCostWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateProviderArgs = {
  data: ProviderUpdateInput;
  where: ProviderWhereUniqueInput;
};


export type MutationUpdateSaleArgs = {
  data: SaleUpdateInputCustom;
  where: SaleWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
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
  ProductMovement: Scalars['Int']['output'];
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
  ProductMovement?: InputMaybe<ProductMovementCreateNestedManyWithoutProductInput>;
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

export type ProductCreateManyInput = {
  blameUserId?: InputMaybe<Scalars['String']['input']>;
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

export type ProductCreateNestedOneWithoutProductMovementInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductMovementInput>;
  create?: InputMaybe<ProductCreateWithoutProductMovementInput>;
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

export type ProductCreateOrConnectWithoutProductMovementInput = {
  create: ProductCreateWithoutProductMovementInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutProviderInput = {
  create: ProductCreateWithoutProviderInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutSaleItemsInput = {
  create: ProductCreateWithoutSaleItemsInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutBlameUserInput = {
  ProductMovement?: InputMaybe<ProductMovementCreateNestedManyWithoutProductInput>;
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

export type ProductCreateWithoutProductMovementInput = {
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
  ProductMovement?: InputMaybe<ProductMovementCreateNestedManyWithoutProductInput>;
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

export type ProductCreateWithoutSaleItemsInput = {
  ProductMovement?: InputMaybe<ProductMovementCreateNestedManyWithoutProductInput>;
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

export type ProductMovement = {
  __typename?: 'ProductMovement';
  /** FK: User.id - User to blame for */
  blameUserId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** ID */
  id: Scalars['ID']['output'];
  /** Movement type */
  movement: Scalars['String']['output'];
  /** FK: Product.id */
  productId: Scalars['String']['output'];
  /** Quantity (positive for input, negative for output) */
  quantity: Scalars['Int']['output'];
  /** Sale */
  saleItemId?: Maybe<Scalars['String']['output']>;
  /** Type of movement */
  type: ProductMovementType;
  updatedAt: Scalars['DateTime']['output'];
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
  movement: Scalars['Int']['output'];
  productId: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  saleItemId: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ProductMovementCreateManyBlameUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  movement: Scalars['String']['input'];
  productId: Scalars['String']['input'];
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
  movement: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  saleItemId?: InputMaybe<Scalars['String']['input']>;
  type: ProductMovementType;
};

export type ProductMovementCreateManyProductInputEnvelope = {
  data: Array<ProductMovementCreateManyProductInput>;
};

export type ProductMovementCreateManySaleItemInput = {
  blameUserId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  movement: Scalars['String']['input'];
  productId: Scalars['String']['input'];
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

export type ProductMovementCreateOrConnectWithoutSaleItemInput = {
  create: ProductMovementCreateWithoutSaleItemInput;
  where: ProductMovementWhereUniqueInput;
};

export type ProductMovementCreateWithoutBlameUserInput = {
  Product: ProductCreateNestedOneWithoutProductMovementInput;
  SaleItem?: InputMaybe<SaleItemCreateNestedOneWithoutProductMovementInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  movement: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  type: ProductMovementType;
};

export type ProductMovementCreateWithoutProductInput = {
  SaleItem?: InputMaybe<SaleItemCreateNestedOneWithoutProductMovementInput>;
  blameUser?: InputMaybe<UserCreateNestedOneWithoutProductMovementInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  movement: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  type: ProductMovementType;
};

export type ProductMovementCreateWithoutSaleItemInput = {
  Product: ProductCreateNestedOneWithoutProductMovementInput;
  blameUser?: InputMaybe<UserCreateNestedOneWithoutProductMovementInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  movement: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  type: ProductMovementType;
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
  movement?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
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
  movement?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
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
  movement?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
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
  Manual = 'MANUAL',
  Sale = 'SALE'
}

export type ProductMovementUpdateManyMutationInput = {
  movement?: InputMaybe<StringFieldUpdateOperationsInput>;
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

export type ProductMovementUpdateWithWhereUniqueWithoutSaleItemInput = {
  data: ProductMovementUpdateWithoutSaleItemInput;
  where: ProductMovementWhereUniqueInput;
};

export type ProductMovementUpdateWithoutBlameUserInput = {
  Product?: InputMaybe<ProductUpdateOneRequiredWithoutProductMovementNestedInput>;
  SaleItem?: InputMaybe<SaleItemUpdateOneWithoutProductMovementNestedInput>;
  movement?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductMovementTypeFieldUpdateOperationsInput>;
};

export type ProductMovementUpdateWithoutProductInput = {
  SaleItem?: InputMaybe<SaleItemUpdateOneWithoutProductMovementNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneWithoutProductMovementNestedInput>;
  movement?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductMovementTypeFieldUpdateOperationsInput>;
};

export type ProductMovementUpdateWithoutSaleItemInput = {
  Product?: InputMaybe<ProductUpdateOneRequiredWithoutProductMovementNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneWithoutProductMovementNestedInput>;
  movement?: InputMaybe<StringFieldUpdateOperationsInput>;
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
  SaleItem?: InputMaybe<SaleItemNullableScalarRelationFilter>;
  blameUser?: InputMaybe<UserNullableScalarRelationFilter>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  movement?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
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
  SaleItem?: InputMaybe<SaleItemNullableScalarRelationFilter>;
  blameUser?: InputMaybe<UserNullableScalarRelationFilter>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  movement?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  saleItemId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumProductMovementTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  ProductMovement?: InputMaybe<ProductMovementOrderByRelationAggregateInput>;
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
  ProductMovement?: InputMaybe<ProductMovementUpdateManyWithoutProductNestedInput>;
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

export type ProductUpdateOneRequiredWithoutProductMovementNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductMovementInput>;
  create?: InputMaybe<ProductCreateWithoutProductMovementInput>;
  update?: InputMaybe<ProductUpdateToOneWithWhereWithoutProductMovementInput>;
  upsert?: InputMaybe<ProductUpsertWithoutProductMovementInput>;
};

export type ProductUpdateOneRequiredWithoutSaleItemsNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutSaleItemsInput>;
  create?: InputMaybe<ProductCreateWithoutSaleItemsInput>;
  update?: InputMaybe<ProductUpdateToOneWithWhereWithoutSaleItemsInput>;
  upsert?: InputMaybe<ProductUpsertWithoutSaleItemsInput>;
};

export type ProductUpdateToOneWithWhereWithoutProductMovementInput = {
  data: ProductUpdateWithoutProductMovementInput;
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
  ProductMovement?: InputMaybe<ProductMovementUpdateManyWithoutProductNestedInput>;
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

export type ProductUpdateWithoutProductMovementInput = {
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
  ProductMovement?: InputMaybe<ProductMovementUpdateManyWithoutProductNestedInput>;
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

export type ProductUpdateWithoutSaleItemsInput = {
  ProductMovement?: InputMaybe<ProductMovementUpdateManyWithoutProductNestedInput>;
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

export type ProductUpsertWithoutProductMovementInput = {
  create: ProductCreateWithoutProductMovementInput;
  update: ProductUpdateWithoutProductMovementInput;
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
  ProductMovement?: InputMaybe<ProductMovementListRelationFilter>;
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
  ProductMovement?: InputMaybe<ProductMovementListRelationFilter>;
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

export type ProviderCreateOrConnectWithoutProductsInput = {
  create: ProviderCreateWithoutProductsInput;
  where: ProviderWhereUniqueInput;
};

export type ProviderCreateOrConnectWithoutSaleItemsInput = {
  create: ProviderCreateWithoutSaleItemsInput;
  where: ProviderWhereUniqueInput;
};

export type ProviderCreateWithoutBlameUserInput = {
  document?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutProviderInput>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutProviderInput>;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
};

export type ProviderCreateWithoutProductsInput = {
  blameUser?: InputMaybe<UserCreateNestedOneWithoutProvidersInput>;
  document?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutProviderInput>;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
};

export type ProviderCreateWithoutSaleItemsInput = {
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

export type ProviderOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProviderOrderByWithRelationInput = {
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
  document?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutProviderNestedInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutProviderNestedInput>;
  whatsapp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProviderUpdateWithoutProductsInput = {
  blameUser?: InputMaybe<UserUpdateOneWithoutProvidersNestedInput>;
  document?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutProviderNestedInput>;
  whatsapp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProviderUpdateWithoutSaleItemsInput = {
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
  product: Product;
  products: ProductsOutput;
  provider: Provider;
  providers: ProvidersOutput;
  sale: Sale;
  saleItem: SaleItem;
  saleItems: SaleItemsOutput;
  salePaidCost: SalePaidCostOutput;
  sales: SalesOutput;
  user: User;
  users: UsersOutput;
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


export type QuerySalePaidCostArgs = {
  cursor?: InputMaybe<SalePaidCostWhereUniqueInput>;
  distinct?: InputMaybe<Array<SalePaidCostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SalePaidCostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SalePaidCostWhereInput>;
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

export type SaleCreateNestedOneWithoutSaleItemsInput = {
  connect?: InputMaybe<SaleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SaleCreateOrConnectWithoutSaleItemsInput>;
  create?: InputMaybe<SaleCreateWithoutSaleItemsInput>;
};

export type SaleCreateOrConnectWithoutBlameUserInput = {
  create: SaleCreateWithoutBlameUserInput;
  where: SaleWhereUniqueInput;
};

export type SaleCreateOrConnectWithoutSaleItemsInput = {
  create: SaleCreateWithoutSaleItemsInput;
  where: SaleWhereUniqueInput;
};

export type SaleCreateWithoutBlameUserInput = {
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutSaleInput>;
};

export type SaleCreateWithoutSaleItemsInput = {
  blameUser?: InputMaybe<UserCreateNestedOneWithoutSalesInput>;
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type SaleItem = {
  __typename?: 'SaleItem';
  ProductMovement?: Maybe<Array<ProductMovement>>;
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
  ProductMovement: Scalars['Int']['output'];
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

export type SaleItemCreateManySalePaidCostInput = {
  blameUserId?: InputMaybe<Scalars['String']['input']>;
  costIsPostPaid: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
  providerId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  saleCostIsPaid?: InputMaybe<Scalars['Boolean']['input']>;
  saleCostIsSelected?: InputMaybe<Scalars['Boolean']['input']>;
  saleId: Scalars['String']['input'];
  totalValue: Scalars['Int']['input'];
};

export type SaleItemCreateManySalePaidCostInputEnvelope = {
  data: Array<SaleItemCreateManySalePaidCostInput>;
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

export type SaleItemCreateNestedManyWithoutSalePaidCostInput = {
  connect?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SaleItemCreateOrConnectWithoutSalePaidCostInput>>;
  create?: InputMaybe<Array<SaleItemCreateWithoutSalePaidCostInput>>;
  createMany?: InputMaybe<SaleItemCreateManySalePaidCostInputEnvelope>;
};

export type SaleItemCreateNestedOneWithoutProductMovementInput = {
  connect?: InputMaybe<SaleItemWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SaleItemCreateOrConnectWithoutProductMovementInput>;
  create?: InputMaybe<SaleItemCreateWithoutProductMovementInput>;
};

export type SaleItemCreateOrConnectWithoutBlameUserInput = {
  create: SaleItemCreateWithoutBlameUserInput;
  where: SaleItemWhereUniqueInput;
};

export type SaleItemCreateOrConnectWithoutProductInput = {
  create: SaleItemCreateWithoutProductInput;
  where: SaleItemWhereUniqueInput;
};

export type SaleItemCreateOrConnectWithoutProductMovementInput = {
  create: SaleItemCreateWithoutProductMovementInput;
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

export type SaleItemCreateOrConnectWithoutSalePaidCostInput = {
  create: SaleItemCreateWithoutSalePaidCostInput;
  where: SaleItemWhereUniqueInput;
};

export type SaleItemCreateWithoutBlameUserInput = {
  ProductMovement?: InputMaybe<ProductMovementCreateNestedManyWithoutSaleItemInput>;
  costIsPostPaid: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  product: ProductCreateNestedOneWithoutSaleItemsInput;
  provider?: InputMaybe<ProviderCreateNestedOneWithoutSaleItemsInput>;
  quantity: Scalars['Int']['input'];
  sale?: InputMaybe<SaleCreateNestedOneWithoutSaleItemsInput>;
  saleCostIsPaid?: InputMaybe<Scalars['Boolean']['input']>;
  saleCostIsSelected?: InputMaybe<Scalars['Boolean']['input']>;
  salePaidCost?: InputMaybe<SalePaidCostCreateNestedOneWithoutSaleItemInput>;
  totalValue: Scalars['Int']['input'];
};

export type SaleItemCreateWithoutProductInput = {
  ProductMovement?: InputMaybe<ProductMovementCreateNestedManyWithoutSaleItemInput>;
  blameUser?: InputMaybe<UserCreateNestedOneWithoutSaleItemsInput>;
  costIsPostPaid: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<ProviderCreateNestedOneWithoutSaleItemsInput>;
  quantity: Scalars['Int']['input'];
  sale?: InputMaybe<SaleCreateNestedOneWithoutSaleItemsInput>;
  saleCostIsPaid?: InputMaybe<Scalars['Boolean']['input']>;
  saleCostIsSelected?: InputMaybe<Scalars['Boolean']['input']>;
  salePaidCost?: InputMaybe<SalePaidCostCreateNestedOneWithoutSaleItemInput>;
  totalValue: Scalars['Int']['input'];
};

export type SaleItemCreateWithoutProductMovementInput = {
  blameUser?: InputMaybe<UserCreateNestedOneWithoutSaleItemsInput>;
  costIsPostPaid: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  product: ProductCreateNestedOneWithoutSaleItemsInput;
  provider?: InputMaybe<ProviderCreateNestedOneWithoutSaleItemsInput>;
  quantity: Scalars['Int']['input'];
  sale?: InputMaybe<SaleCreateNestedOneWithoutSaleItemsInput>;
  saleCostIsPaid?: InputMaybe<Scalars['Boolean']['input']>;
  saleCostIsSelected?: InputMaybe<Scalars['Boolean']['input']>;
  salePaidCost?: InputMaybe<SalePaidCostCreateNestedOneWithoutSaleItemInput>;
  totalValue: Scalars['Int']['input'];
};

export type SaleItemCreateWithoutProviderInput = {
  ProductMovement?: InputMaybe<ProductMovementCreateNestedManyWithoutSaleItemInput>;
  blameUser?: InputMaybe<UserCreateNestedOneWithoutSaleItemsInput>;
  costIsPostPaid: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  product: ProductCreateNestedOneWithoutSaleItemsInput;
  quantity: Scalars['Int']['input'];
  sale?: InputMaybe<SaleCreateNestedOneWithoutSaleItemsInput>;
  saleCostIsPaid?: InputMaybe<Scalars['Boolean']['input']>;
  saleCostIsSelected?: InputMaybe<Scalars['Boolean']['input']>;
  salePaidCost?: InputMaybe<SalePaidCostCreateNestedOneWithoutSaleItemInput>;
  totalValue: Scalars['Int']['input'];
};

export type SaleItemCreateWithoutSaleInput = {
  ProductMovement?: InputMaybe<ProductMovementCreateNestedManyWithoutSaleItemInput>;
  blameUser?: InputMaybe<UserCreateNestedOneWithoutSaleItemsInput>;
  costIsPostPaid: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  product: ProductCreateNestedOneWithoutSaleItemsInput;
  provider?: InputMaybe<ProviderCreateNestedOneWithoutSaleItemsInput>;
  quantity: Scalars['Int']['input'];
  saleCostIsPaid?: InputMaybe<Scalars['Boolean']['input']>;
  saleCostIsSelected?: InputMaybe<Scalars['Boolean']['input']>;
  salePaidCost?: InputMaybe<SalePaidCostCreateNestedOneWithoutSaleItemInput>;
  totalValue: Scalars['Int']['input'];
};

export type SaleItemCreateWithoutSalePaidCostInput = {
  ProductMovement?: InputMaybe<ProductMovementCreateNestedManyWithoutSaleItemInput>;
  blameUser?: InputMaybe<UserCreateNestedOneWithoutSaleItemsInput>;
  costIsPostPaid: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  product: ProductCreateNestedOneWithoutSaleItemsInput;
  provider?: InputMaybe<ProviderCreateNestedOneWithoutSaleItemsInput>;
  quantity: Scalars['Int']['input'];
  sale?: InputMaybe<SaleCreateNestedOneWithoutSaleItemsInput>;
  saleCostIsPaid?: InputMaybe<Scalars['Boolean']['input']>;
  saleCostIsSelected?: InputMaybe<Scalars['Boolean']['input']>;
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
  ProductMovement?: InputMaybe<ProductMovementOrderByRelationAggregateInput>;
  blameUser?: InputMaybe<UserOrderByWithRelationInput>;
  blameUserId?: InputMaybe<SortOrder>;
  costIsPostPaid?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  provider?: InputMaybe<ProviderOrderByWithRelationInput>;
  providerId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  sale?: InputMaybe<SaleOrderByWithRelationInput>;
  saleCostIsPaid?: InputMaybe<SortOrder>;
  saleCostIsSelected?: InputMaybe<SortOrder>;
  saleId?: InputMaybe<SortOrder>;
  salePaidCost?: InputMaybe<SalePaidCostOrderByWithRelationInput>;
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

export type SaleItemUpdateManyWithWhereWithoutSalePaidCostInput = {
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

export type SaleItemUpdateManyWithoutSalePaidCostNestedInput = {
  connect?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SaleItemCreateOrConnectWithoutSalePaidCostInput>>;
  create?: InputMaybe<Array<SaleItemCreateWithoutSalePaidCostInput>>;
  createMany?: InputMaybe<SaleItemCreateManySalePaidCostInputEnvelope>;
  delete?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SaleItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  set?: InputMaybe<Array<SaleItemWhereUniqueInput>>;
  update?: InputMaybe<Array<SaleItemUpdateWithWhereUniqueWithoutSalePaidCostInput>>;
  updateMany?: InputMaybe<Array<SaleItemUpdateManyWithWhereWithoutSalePaidCostInput>>;
  upsert?: InputMaybe<Array<SaleItemUpsertWithWhereUniqueWithoutSalePaidCostInput>>;
};

export type SaleItemUpdateOneWithoutProductMovementNestedInput = {
  connect?: InputMaybe<SaleItemWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SaleItemCreateOrConnectWithoutProductMovementInput>;
  create?: InputMaybe<SaleItemCreateWithoutProductMovementInput>;
  delete?: InputMaybe<SaleItemWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<SaleItemUpdateToOneWithWhereWithoutProductMovementInput>;
  upsert?: InputMaybe<SaleItemUpsertWithoutProductMovementInput>;
};

export type SaleItemUpdateToOneWithWhereWithoutProductMovementInput = {
  data: SaleItemUpdateWithoutProductMovementInput;
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

export type SaleItemUpdateWithWhereUniqueWithoutSalePaidCostInput = {
  data: SaleItemUpdateWithoutSalePaidCostInput;
  where: SaleItemWhereUniqueInput;
};

export type SaleItemUpdateWithoutBlameUserInput = {
  ProductMovement?: InputMaybe<ProductMovementUpdateManyWithoutSaleItemNestedInput>;
  costIsPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutSaleItemsNestedInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutSaleItemsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  sale?: InputMaybe<SaleUpdateOneWithoutSaleItemsNestedInput>;
  saleCostIsPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  saleCostIsSelected?: InputMaybe<BoolFieldUpdateOperationsInput>;
  salePaidCost?: InputMaybe<SalePaidCostUpdateOneWithoutSaleItemNestedInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SaleItemUpdateWithoutProductInput = {
  ProductMovement?: InputMaybe<ProductMovementUpdateManyWithoutSaleItemNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneWithoutSaleItemsNestedInput>;
  costIsPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutSaleItemsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  sale?: InputMaybe<SaleUpdateOneWithoutSaleItemsNestedInput>;
  saleCostIsPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  saleCostIsSelected?: InputMaybe<BoolFieldUpdateOperationsInput>;
  salePaidCost?: InputMaybe<SalePaidCostUpdateOneWithoutSaleItemNestedInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SaleItemUpdateWithoutProductMovementInput = {
  blameUser?: InputMaybe<UserUpdateOneWithoutSaleItemsNestedInput>;
  costIsPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutSaleItemsNestedInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutSaleItemsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  sale?: InputMaybe<SaleUpdateOneWithoutSaleItemsNestedInput>;
  saleCostIsPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  saleCostIsSelected?: InputMaybe<BoolFieldUpdateOperationsInput>;
  salePaidCost?: InputMaybe<SalePaidCostUpdateOneWithoutSaleItemNestedInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SaleItemUpdateWithoutProviderInput = {
  ProductMovement?: InputMaybe<ProductMovementUpdateManyWithoutSaleItemNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneWithoutSaleItemsNestedInput>;
  costIsPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutSaleItemsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  sale?: InputMaybe<SaleUpdateOneWithoutSaleItemsNestedInput>;
  saleCostIsPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  saleCostIsSelected?: InputMaybe<BoolFieldUpdateOperationsInput>;
  salePaidCost?: InputMaybe<SalePaidCostUpdateOneWithoutSaleItemNestedInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SaleItemUpdateWithoutSaleInput = {
  ProductMovement?: InputMaybe<ProductMovementUpdateManyWithoutSaleItemNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneWithoutSaleItemsNestedInput>;
  costIsPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutSaleItemsNestedInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutSaleItemsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  saleCostIsPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  saleCostIsSelected?: InputMaybe<BoolFieldUpdateOperationsInput>;
  salePaidCost?: InputMaybe<SalePaidCostUpdateOneWithoutSaleItemNestedInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SaleItemUpdateWithoutSalePaidCostInput = {
  ProductMovement?: InputMaybe<ProductMovementUpdateManyWithoutSaleItemNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneWithoutSaleItemsNestedInput>;
  costIsPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutSaleItemsNestedInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutSaleItemsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  sale?: InputMaybe<SaleUpdateOneWithoutSaleItemsNestedInput>;
  saleCostIsPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  saleCostIsSelected?: InputMaybe<BoolFieldUpdateOperationsInput>;
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

export type SaleItemUpsertWithWhereUniqueWithoutSalePaidCostInput = {
  create: SaleItemCreateWithoutSalePaidCostInput;
  update: SaleItemUpdateWithoutSalePaidCostInput;
  where: SaleItemWhereUniqueInput;
};

export type SaleItemUpsertWithoutProductMovementInput = {
  create: SaleItemCreateWithoutProductMovementInput;
  update: SaleItemUpdateWithoutProductMovementInput;
  where?: InputMaybe<SaleItemWhereInput>;
};

export type SaleItemWhereInput = {
  AND?: InputMaybe<Array<SaleItemWhereInput>>;
  NOT?: InputMaybe<Array<SaleItemWhereInput>>;
  OR?: InputMaybe<Array<SaleItemWhereInput>>;
  ProductMovement?: InputMaybe<ProductMovementListRelationFilter>;
  blameUser?: InputMaybe<UserNullableScalarRelationFilter>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  costIsPostPaid?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductScalarRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  provider?: InputMaybe<ProviderNullableScalarRelationFilter>;
  providerId?: InputMaybe<StringNullableFilter>;
  quantity?: InputMaybe<IntFilter>;
  sale?: InputMaybe<SaleNullableScalarRelationFilter>;
  saleCostIsPaid?: InputMaybe<BoolFilter>;
  saleCostIsSelected?: InputMaybe<BoolFilter>;
  saleId?: InputMaybe<StringFilter>;
  salePaidCost?: InputMaybe<SalePaidCostNullableScalarRelationFilter>;
  salePaidCostId?: InputMaybe<StringNullableFilter>;
  totalCostValue?: InputMaybe<IntFilter>;
  totalValue?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SaleItemWhereUniqueInput = {
  AND?: InputMaybe<Array<SaleItemWhereInput>>;
  NOT?: InputMaybe<Array<SaleItemWhereInput>>;
  OR?: InputMaybe<Array<SaleItemWhereInput>>;
  ProductMovement?: InputMaybe<ProductMovementListRelationFilter>;
  blameUser?: InputMaybe<UserNullableScalarRelationFilter>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  costIsPostPaid?: InputMaybe<BoolFilter>;
  costIsPostPaid_productId_saleId?: InputMaybe<SaleItemCostIsPostPaidProductIdSaleIdCompoundUniqueInput>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<ProductScalarRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  provider?: InputMaybe<ProviderNullableScalarRelationFilter>;
  providerId?: InputMaybe<StringNullableFilter>;
  quantity?: InputMaybe<IntFilter>;
  sale?: InputMaybe<SaleNullableScalarRelationFilter>;
  saleCostIsPaid?: InputMaybe<BoolFilter>;
  saleCostIsSelected?: InputMaybe<BoolFilter>;
  saleId?: InputMaybe<StringFilter>;
  salePaidCost?: InputMaybe<SalePaidCostNullableScalarRelationFilter>;
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

export type SalePaidCost = {
  __typename?: 'SalePaidCost';
  _count: SalePaidCostCount;
  /** FK: User.id - User to blame for */
  blameUserId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** Sales from that date and backward */
  endDate: Scalars['DateTime']['output'];
  /** ID */
  id: Scalars['ID']['output'];
  /** Paid Value */
  paidValue: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  /** Value */
  value: Scalars['Int']['output'];
};

export type SalePaidCostAvgAggregate = {
  __typename?: 'SalePaidCostAvgAggregate';
  paidValue?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type SalePaidCostCount = {
  __typename?: 'SalePaidCostCount';
  SaleItem: Scalars['Int']['output'];
};

export type SalePaidCostCountAggregate = {
  __typename?: 'SalePaidCostCountAggregate';
  _all: Scalars['Int']['output'];
  blameUserId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  endDate: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  paidValue: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type SalePaidCostCreateInput = {
  SaleItem?: InputMaybe<SaleItemCreateNestedManyWithoutSalePaidCostInput>;
  blameUser?: InputMaybe<UserCreateNestedOneWithoutSalePaidCostInput>;
  endDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  paidValue: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
};

export type SalePaidCostCreateManyBlameUserInput = {
  endDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  paidValue: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
};

export type SalePaidCostCreateManyBlameUserInputEnvelope = {
  data: Array<SalePaidCostCreateManyBlameUserInput>;
};

export type SalePaidCostCreateNestedManyWithoutBlameUserInput = {
  connect?: InputMaybe<Array<SalePaidCostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SalePaidCostCreateOrConnectWithoutBlameUserInput>>;
  create?: InputMaybe<Array<SalePaidCostCreateWithoutBlameUserInput>>;
  createMany?: InputMaybe<SalePaidCostCreateManyBlameUserInputEnvelope>;
};

export type SalePaidCostCreateNestedOneWithoutSaleItemInput = {
  connect?: InputMaybe<SalePaidCostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SalePaidCostCreateOrConnectWithoutSaleItemInput>;
  create?: InputMaybe<SalePaidCostCreateWithoutSaleItemInput>;
};

export type SalePaidCostCreateOrConnectWithoutBlameUserInput = {
  create: SalePaidCostCreateWithoutBlameUserInput;
  where: SalePaidCostWhereUniqueInput;
};

export type SalePaidCostCreateOrConnectWithoutSaleItemInput = {
  create: SalePaidCostCreateWithoutSaleItemInput;
  where: SalePaidCostWhereUniqueInput;
};

export type SalePaidCostCreateWithoutBlameUserInput = {
  SaleItem?: InputMaybe<SaleItemCreateNestedManyWithoutSalePaidCostInput>;
  endDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  paidValue: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
};

export type SalePaidCostCreateWithoutSaleItemInput = {
  blameUser?: InputMaybe<UserCreateNestedOneWithoutSalePaidCostInput>;
  endDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  paidValue: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
};

export type SalePaidCostListRelationFilter = {
  every?: InputMaybe<SalePaidCostWhereInput>;
  none?: InputMaybe<SalePaidCostWhereInput>;
  some?: InputMaybe<SalePaidCostWhereInput>;
};

export type SalePaidCostMaxAggregate = {
  __typename?: 'SalePaidCostMaxAggregate';
  blameUserId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  paidValue?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type SalePaidCostMinAggregate = {
  __typename?: 'SalePaidCostMinAggregate';
  blameUserId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  paidValue?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type SalePaidCostNullableScalarRelationFilter = {
  is?: InputMaybe<SalePaidCostWhereInput>;
  isNot?: InputMaybe<SalePaidCostWhereInput>;
};

export type SalePaidCostOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SalePaidCostOrderByWithRelationInput = {
  SaleItem?: InputMaybe<SaleItemOrderByRelationAggregateInput>;
  blameUser?: InputMaybe<UserOrderByWithRelationInput>;
  blameUserId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  endDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  paidValue?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type SalePaidCostOutput = {
  __typename?: 'SalePaidCostOutput';
  nodes: Array<SalePaidCost>;
  /** Pagination info for findMany requests */
  pageInfo?: Maybe<SalePaidCostPaginated>;
};

export type SalePaidCostPaginated = {
  __typename?: 'SalePaidCostPaginated';
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

export enum SalePaidCostScalarFieldEnum {
  BlameUserId = 'blameUserId',
  CreatedAt = 'createdAt',
  EndDate = 'endDate',
  Id = 'id',
  PaidValue = 'paidValue',
  UpdatedAt = 'updatedAt',
  Value = 'value'
}

export type SalePaidCostScalarWhereInput = {
  AND?: InputMaybe<Array<SalePaidCostScalarWhereInput>>;
  NOT?: InputMaybe<Array<SalePaidCostScalarWhereInput>>;
  OR?: InputMaybe<Array<SalePaidCostScalarWhereInput>>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  endDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  paidValue?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<IntFilter>;
};

export type SalePaidCostSumAggregate = {
  __typename?: 'SalePaidCostSumAggregate';
  paidValue?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type SalePaidCostUpdateInput = {
  SaleItem?: InputMaybe<SaleItemUpdateManyWithoutSalePaidCostNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneWithoutSalePaidCostNestedInput>;
  endDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  paidValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  value?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SalePaidCostUpdateManyMutationInput = {
  endDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  paidValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  value?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SalePaidCostUpdateManyWithWhereWithoutBlameUserInput = {
  data: SalePaidCostUpdateManyMutationInput;
  where: SalePaidCostScalarWhereInput;
};

export type SalePaidCostUpdateManyWithoutBlameUserNestedInput = {
  connect?: InputMaybe<Array<SalePaidCostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SalePaidCostCreateOrConnectWithoutBlameUserInput>>;
  create?: InputMaybe<Array<SalePaidCostCreateWithoutBlameUserInput>>;
  createMany?: InputMaybe<SalePaidCostCreateManyBlameUserInputEnvelope>;
  delete?: InputMaybe<Array<SalePaidCostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SalePaidCostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SalePaidCostWhereUniqueInput>>;
  set?: InputMaybe<Array<SalePaidCostWhereUniqueInput>>;
  update?: InputMaybe<Array<SalePaidCostUpdateWithWhereUniqueWithoutBlameUserInput>>;
  updateMany?: InputMaybe<Array<SalePaidCostUpdateManyWithWhereWithoutBlameUserInput>>;
  upsert?: InputMaybe<Array<SalePaidCostUpsertWithWhereUniqueWithoutBlameUserInput>>;
};

export type SalePaidCostUpdateOneWithoutSaleItemNestedInput = {
  connect?: InputMaybe<SalePaidCostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SalePaidCostCreateOrConnectWithoutSaleItemInput>;
  create?: InputMaybe<SalePaidCostCreateWithoutSaleItemInput>;
  delete?: InputMaybe<SalePaidCostWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<SalePaidCostUpdateToOneWithWhereWithoutSaleItemInput>;
  upsert?: InputMaybe<SalePaidCostUpsertWithoutSaleItemInput>;
};

export type SalePaidCostUpdateToOneWithWhereWithoutSaleItemInput = {
  data: SalePaidCostUpdateWithoutSaleItemInput;
  where?: InputMaybe<SalePaidCostWhereInput>;
};

export type SalePaidCostUpdateWithWhereUniqueWithoutBlameUserInput = {
  data: SalePaidCostUpdateWithoutBlameUserInput;
  where: SalePaidCostWhereUniqueInput;
};

export type SalePaidCostUpdateWithoutBlameUserInput = {
  SaleItem?: InputMaybe<SaleItemUpdateManyWithoutSalePaidCostNestedInput>;
  endDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  paidValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  value?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SalePaidCostUpdateWithoutSaleItemInput = {
  blameUser?: InputMaybe<UserUpdateOneWithoutSalePaidCostNestedInput>;
  endDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  paidValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  value?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SalePaidCostUpsertWithWhereUniqueWithoutBlameUserInput = {
  create: SalePaidCostCreateWithoutBlameUserInput;
  update: SalePaidCostUpdateWithoutBlameUserInput;
  where: SalePaidCostWhereUniqueInput;
};

export type SalePaidCostUpsertWithoutSaleItemInput = {
  create: SalePaidCostCreateWithoutSaleItemInput;
  update: SalePaidCostUpdateWithoutSaleItemInput;
  where?: InputMaybe<SalePaidCostWhereInput>;
};

export type SalePaidCostWhereInput = {
  AND?: InputMaybe<Array<SalePaidCostWhereInput>>;
  NOT?: InputMaybe<Array<SalePaidCostWhereInput>>;
  OR?: InputMaybe<Array<SalePaidCostWhereInput>>;
  SaleItem?: InputMaybe<SaleItemListRelationFilter>;
  blameUser?: InputMaybe<UserNullableScalarRelationFilter>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  endDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  paidValue?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<IntFilter>;
};

export type SalePaidCostWhereUniqueInput = {
  AND?: InputMaybe<Array<SalePaidCostWhereInput>>;
  NOT?: InputMaybe<Array<SalePaidCostWhereInput>>;
  OR?: InputMaybe<Array<SalePaidCostWhereInput>>;
  SaleItem?: InputMaybe<SaleItemListRelationFilter>;
  blameUser?: InputMaybe<UserNullableScalarRelationFilter>;
  blameUserId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  endDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  paidValue?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<IntFilter>;
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

export type SaleUpdateOneWithoutSaleItemsNestedInput = {
  connect?: InputMaybe<SaleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SaleCreateOrConnectWithoutSaleItemsInput>;
  create?: InputMaybe<SaleCreateWithoutSaleItemsInput>;
  delete?: InputMaybe<SaleWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<SaleUpdateToOneWithWhereWithoutSaleItemsInput>;
  upsert?: InputMaybe<SaleUpsertWithoutSaleItemsInput>;
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
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutSaleNestedInput>;
};

export type SaleUpdateWithoutSaleItemsInput = {
  blameUser?: InputMaybe<UserUpdateOneWithoutSalesNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SaleUpsertWithWhereUniqueWithoutBlameUserInput = {
  create: SaleCreateWithoutBlameUserInput;
  update: SaleUpdateWithoutBlameUserInput;
  where: SaleWhereUniqueInput;
};

export type SaleUpsertWithoutSaleItemsInput = {
  create: SaleCreateWithoutSaleItemsInput;
  update: SaleUpdateWithoutSaleItemsInput;
  where?: InputMaybe<SaleWhereInput>;
};

export type SaleWhereInput = {
  AND?: InputMaybe<Array<SaleWhereInput>>;
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

export type SaleWhereUniqueInput = {
  AND?: InputMaybe<Array<SaleWhereInput>>;
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
  ProductMovement?: Maybe<Array<ProductMovement>>;
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
  ProductMovement: Scalars['Int']['output'];
  SalePaidCost: Scalars['Int']['output'];
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

export type UserCreateInput = {
  ProductMovement?: InputMaybe<ProductMovementCreateNestedManyWithoutBlameUserInput>;
  SalePaidCost?: InputMaybe<SalePaidCostCreateNestedManyWithoutBlameUserInput>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutBlameUserInput>;
  providers?: InputMaybe<ProviderCreateNestedManyWithoutBlameUserInput>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutBlameUserInput>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutBlameUserInput>;
};

export type UserCreateManyInput = {
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type UserCreateNestedOneWithoutProductMovementInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductMovementInput>;
  create?: InputMaybe<UserCreateWithoutProductMovementInput>;
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

export type UserCreateNestedOneWithoutSalePaidCostInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSalePaidCostInput>;
  create?: InputMaybe<UserCreateWithoutSalePaidCostInput>;
};

export type UserCreateNestedOneWithoutSalesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSalesInput>;
  create?: InputMaybe<UserCreateWithoutSalesInput>;
};

export type UserCreateOrConnectWithoutProductMovementInput = {
  create: UserCreateWithoutProductMovementInput;
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

export type UserCreateOrConnectWithoutSalePaidCostInput = {
  create: UserCreateWithoutSalePaidCostInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSalesInput = {
  create: UserCreateWithoutSalesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutProductMovementInput = {
  SalePaidCost?: InputMaybe<SalePaidCostCreateNestedManyWithoutBlameUserInput>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutBlameUserInput>;
  providers?: InputMaybe<ProviderCreateNestedManyWithoutBlameUserInput>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutBlameUserInput>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutBlameUserInput>;
};

export type UserCreateWithoutProductsInput = {
  ProductMovement?: InputMaybe<ProductMovementCreateNestedManyWithoutBlameUserInput>;
  SalePaidCost?: InputMaybe<SalePaidCostCreateNestedManyWithoutBlameUserInput>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  providers?: InputMaybe<ProviderCreateNestedManyWithoutBlameUserInput>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutBlameUserInput>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutBlameUserInput>;
};

export type UserCreateWithoutProvidersInput = {
  ProductMovement?: InputMaybe<ProductMovementCreateNestedManyWithoutBlameUserInput>;
  SalePaidCost?: InputMaybe<SalePaidCostCreateNestedManyWithoutBlameUserInput>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutBlameUserInput>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutBlameUserInput>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutBlameUserInput>;
};

export type UserCreateWithoutSaleItemsInput = {
  ProductMovement?: InputMaybe<ProductMovementCreateNestedManyWithoutBlameUserInput>;
  SalePaidCost?: InputMaybe<SalePaidCostCreateNestedManyWithoutBlameUserInput>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutBlameUserInput>;
  providers?: InputMaybe<ProviderCreateNestedManyWithoutBlameUserInput>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutBlameUserInput>;
};

export type UserCreateWithoutSalePaidCostInput = {
  ProductMovement?: InputMaybe<ProductMovementCreateNestedManyWithoutBlameUserInput>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutBlameUserInput>;
  providers?: InputMaybe<ProviderCreateNestedManyWithoutBlameUserInput>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutBlameUserInput>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutBlameUserInput>;
};

export type UserCreateWithoutSalesInput = {
  ProductMovement?: InputMaybe<ProductMovementCreateNestedManyWithoutBlameUserInput>;
  SalePaidCost?: InputMaybe<SalePaidCostCreateNestedManyWithoutBlameUserInput>;
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
  ProductMovement?: InputMaybe<ProductMovementOrderByRelationAggregateInput>;
  SalePaidCost?: InputMaybe<SalePaidCostOrderByRelationAggregateInput>;
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

export type UserUpdateInput = {
  ProductMovement?: InputMaybe<ProductMovementUpdateManyWithoutBlameUserNestedInput>;
  SalePaidCost?: InputMaybe<SalePaidCostUpdateManyWithoutBlameUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutBlameUserNestedInput>;
  providers?: InputMaybe<ProviderUpdateManyWithoutBlameUserNestedInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutBlameUserNestedInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutBlameUserNestedInput>;
};

export type UserUpdateOneWithoutProductMovementNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductMovementInput>;
  create?: InputMaybe<UserCreateWithoutProductMovementInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutProductMovementInput>;
  upsert?: InputMaybe<UserUpsertWithoutProductMovementInput>;
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

export type UserUpdateOneWithoutSalePaidCostNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSalePaidCostInput>;
  create?: InputMaybe<UserCreateWithoutSalePaidCostInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutSalePaidCostInput>;
  upsert?: InputMaybe<UserUpsertWithoutSalePaidCostInput>;
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

export type UserUpdateToOneWithWhereWithoutProductMovementInput = {
  data: UserUpdateWithoutProductMovementInput;
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

export type UserUpdateToOneWithWhereWithoutSalePaidCostInput = {
  data: UserUpdateWithoutSalePaidCostInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutSalesInput = {
  data: UserUpdateWithoutSalesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutProductMovementInput = {
  SalePaidCost?: InputMaybe<SalePaidCostUpdateManyWithoutBlameUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutBlameUserNestedInput>;
  providers?: InputMaybe<ProviderUpdateManyWithoutBlameUserNestedInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutBlameUserNestedInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutBlameUserNestedInput>;
};

export type UserUpdateWithoutProductsInput = {
  ProductMovement?: InputMaybe<ProductMovementUpdateManyWithoutBlameUserNestedInput>;
  SalePaidCost?: InputMaybe<SalePaidCostUpdateManyWithoutBlameUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  providers?: InputMaybe<ProviderUpdateManyWithoutBlameUserNestedInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutBlameUserNestedInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutBlameUserNestedInput>;
};

export type UserUpdateWithoutProvidersInput = {
  ProductMovement?: InputMaybe<ProductMovementUpdateManyWithoutBlameUserNestedInput>;
  SalePaidCost?: InputMaybe<SalePaidCostUpdateManyWithoutBlameUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutBlameUserNestedInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutBlameUserNestedInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutBlameUserNestedInput>;
};

export type UserUpdateWithoutSaleItemsInput = {
  ProductMovement?: InputMaybe<ProductMovementUpdateManyWithoutBlameUserNestedInput>;
  SalePaidCost?: InputMaybe<SalePaidCostUpdateManyWithoutBlameUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutBlameUserNestedInput>;
  providers?: InputMaybe<ProviderUpdateManyWithoutBlameUserNestedInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutBlameUserNestedInput>;
};

export type UserUpdateWithoutSalePaidCostInput = {
  ProductMovement?: InputMaybe<ProductMovementUpdateManyWithoutBlameUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutBlameUserNestedInput>;
  providers?: InputMaybe<ProviderUpdateManyWithoutBlameUserNestedInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutBlameUserNestedInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutBlameUserNestedInput>;
};

export type UserUpdateWithoutSalesInput = {
  ProductMovement?: InputMaybe<ProductMovementUpdateManyWithoutBlameUserNestedInput>;
  SalePaidCost?: InputMaybe<SalePaidCostUpdateManyWithoutBlameUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutBlameUserNestedInput>;
  providers?: InputMaybe<ProviderUpdateManyWithoutBlameUserNestedInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutBlameUserNestedInput>;
};

export type UserUpsertWithoutProductMovementInput = {
  create: UserCreateWithoutProductMovementInput;
  update: UserUpdateWithoutProductMovementInput;
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

export type UserUpsertWithoutSalePaidCostInput = {
  create: UserCreateWithoutSalePaidCostInput;
  update: UserUpdateWithoutSalePaidCostInput;
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
  ProductMovement?: InputMaybe<ProductMovementListRelationFilter>;
  SalePaidCost?: InputMaybe<SalePaidCostListRelationFilter>;
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
  ProductMovement?: InputMaybe<ProductMovementListRelationFilter>;
  SalePaidCost?: InputMaybe<SalePaidCostListRelationFilter>;
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
  BoolFieldUpdateOperationsInput: BoolFieldUpdateOperationsInput;
  BoolFilter: BoolFilter;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  EnumProductMovementTypeFieldUpdateOperationsInput: EnumProductMovementTypeFieldUpdateOperationsInput;
  EnumProductMovementTypeFilter: EnumProductMovementTypeFilter;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  IntFilter: IntFilter;
  MainExceptionKeys: MainExceptionKeys;
  Mutation: ResolverTypeWrapper<{}>;
  NestedBoolFilter: NestedBoolFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
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
  ProductCreateManyInput: ProductCreateManyInput;
  ProductCreateManyProviderInput: ProductCreateManyProviderInput;
  ProductCreateManyProviderInputEnvelope: ProductCreateManyProviderInputEnvelope;
  ProductCreateNestedManyWithoutBlameUserInput: ProductCreateNestedManyWithoutBlameUserInput;
  ProductCreateNestedManyWithoutProviderInput: ProductCreateNestedManyWithoutProviderInput;
  ProductCreateNestedOneWithoutProductMovementInput: ProductCreateNestedOneWithoutProductMovementInput;
  ProductCreateNestedOneWithoutSaleItemsInput: ProductCreateNestedOneWithoutSaleItemsInput;
  ProductCreateOrConnectWithoutBlameUserInput: ProductCreateOrConnectWithoutBlameUserInput;
  ProductCreateOrConnectWithoutProductMovementInput: ProductCreateOrConnectWithoutProductMovementInput;
  ProductCreateOrConnectWithoutProviderInput: ProductCreateOrConnectWithoutProviderInput;
  ProductCreateOrConnectWithoutSaleItemsInput: ProductCreateOrConnectWithoutSaleItemsInput;
  ProductCreateWithoutBlameUserInput: ProductCreateWithoutBlameUserInput;
  ProductCreateWithoutProductMovementInput: ProductCreateWithoutProductMovementInput;
  ProductCreateWithoutProviderInput: ProductCreateWithoutProviderInput;
  ProductCreateWithoutSaleItemsInput: ProductCreateWithoutSaleItemsInput;
  ProductListRelationFilter: ProductListRelationFilter;
  ProductMaxAggregate: ResolverTypeWrapper<ProductMaxAggregate>;
  ProductMinAggregate: ResolverTypeWrapper<ProductMinAggregate>;
  ProductMovement: ResolverTypeWrapper<ProductMovement>;
  ProductMovementAvgAggregate: ResolverTypeWrapper<ProductMovementAvgAggregate>;
  ProductMovementCountAggregate: ResolverTypeWrapper<ProductMovementCountAggregate>;
  ProductMovementCreateManyBlameUserInput: ProductMovementCreateManyBlameUserInput;
  ProductMovementCreateManyBlameUserInputEnvelope: ProductMovementCreateManyBlameUserInputEnvelope;
  ProductMovementCreateManyProductInput: ProductMovementCreateManyProductInput;
  ProductMovementCreateManyProductInputEnvelope: ProductMovementCreateManyProductInputEnvelope;
  ProductMovementCreateManySaleItemInput: ProductMovementCreateManySaleItemInput;
  ProductMovementCreateManySaleItemInputEnvelope: ProductMovementCreateManySaleItemInputEnvelope;
  ProductMovementCreateNestedManyWithoutBlameUserInput: ProductMovementCreateNestedManyWithoutBlameUserInput;
  ProductMovementCreateNestedManyWithoutProductInput: ProductMovementCreateNestedManyWithoutProductInput;
  ProductMovementCreateNestedManyWithoutSaleItemInput: ProductMovementCreateNestedManyWithoutSaleItemInput;
  ProductMovementCreateOrConnectWithoutBlameUserInput: ProductMovementCreateOrConnectWithoutBlameUserInput;
  ProductMovementCreateOrConnectWithoutProductInput: ProductMovementCreateOrConnectWithoutProductInput;
  ProductMovementCreateOrConnectWithoutSaleItemInput: ProductMovementCreateOrConnectWithoutSaleItemInput;
  ProductMovementCreateWithoutBlameUserInput: ProductMovementCreateWithoutBlameUserInput;
  ProductMovementCreateWithoutProductInput: ProductMovementCreateWithoutProductInput;
  ProductMovementCreateWithoutSaleItemInput: ProductMovementCreateWithoutSaleItemInput;
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
  ProductMovementUpdateManyWithWhereWithoutSaleItemInput: ProductMovementUpdateManyWithWhereWithoutSaleItemInput;
  ProductMovementUpdateManyWithoutBlameUserNestedInput: ProductMovementUpdateManyWithoutBlameUserNestedInput;
  ProductMovementUpdateManyWithoutProductNestedInput: ProductMovementUpdateManyWithoutProductNestedInput;
  ProductMovementUpdateManyWithoutSaleItemNestedInput: ProductMovementUpdateManyWithoutSaleItemNestedInput;
  ProductMovementUpdateWithWhereUniqueWithoutBlameUserInput: ProductMovementUpdateWithWhereUniqueWithoutBlameUserInput;
  ProductMovementUpdateWithWhereUniqueWithoutProductInput: ProductMovementUpdateWithWhereUniqueWithoutProductInput;
  ProductMovementUpdateWithWhereUniqueWithoutSaleItemInput: ProductMovementUpdateWithWhereUniqueWithoutSaleItemInput;
  ProductMovementUpdateWithoutBlameUserInput: ProductMovementUpdateWithoutBlameUserInput;
  ProductMovementUpdateWithoutProductInput: ProductMovementUpdateWithoutProductInput;
  ProductMovementUpdateWithoutSaleItemInput: ProductMovementUpdateWithoutSaleItemInput;
  ProductMovementUpsertWithWhereUniqueWithoutBlameUserInput: ProductMovementUpsertWithWhereUniqueWithoutBlameUserInput;
  ProductMovementUpsertWithWhereUniqueWithoutProductInput: ProductMovementUpsertWithWhereUniqueWithoutProductInput;
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
  ProductUpdateOneRequiredWithoutProductMovementNestedInput: ProductUpdateOneRequiredWithoutProductMovementNestedInput;
  ProductUpdateOneRequiredWithoutSaleItemsNestedInput: ProductUpdateOneRequiredWithoutSaleItemsNestedInput;
  ProductUpdateToOneWithWhereWithoutProductMovementInput: ProductUpdateToOneWithWhereWithoutProductMovementInput;
  ProductUpdateToOneWithWhereWithoutSaleItemsInput: ProductUpdateToOneWithWhereWithoutSaleItemsInput;
  ProductUpdateWithWhereUniqueWithoutBlameUserInput: ProductUpdateWithWhereUniqueWithoutBlameUserInput;
  ProductUpdateWithWhereUniqueWithoutProviderInput: ProductUpdateWithWhereUniqueWithoutProviderInput;
  ProductUpdateWithoutBlameUserInput: ProductUpdateWithoutBlameUserInput;
  ProductUpdateWithoutProductMovementInput: ProductUpdateWithoutProductMovementInput;
  ProductUpdateWithoutProviderInput: ProductUpdateWithoutProviderInput;
  ProductUpdateWithoutSaleItemsInput: ProductUpdateWithoutSaleItemsInput;
  ProductUpsertWithWhereUniqueWithoutBlameUserInput: ProductUpsertWithWhereUniqueWithoutBlameUserInput;
  ProductUpsertWithWhereUniqueWithoutProviderInput: ProductUpsertWithWhereUniqueWithoutProviderInput;
  ProductUpsertWithoutProductMovementInput: ProductUpsertWithoutProductMovementInput;
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
  ProviderCreateNestedOneWithoutProductsInput: ProviderCreateNestedOneWithoutProductsInput;
  ProviderCreateNestedOneWithoutSaleItemsInput: ProviderCreateNestedOneWithoutSaleItemsInput;
  ProviderCreateOrConnectWithoutBlameUserInput: ProviderCreateOrConnectWithoutBlameUserInput;
  ProviderCreateOrConnectWithoutProductsInput: ProviderCreateOrConnectWithoutProductsInput;
  ProviderCreateOrConnectWithoutSaleItemsInput: ProviderCreateOrConnectWithoutSaleItemsInput;
  ProviderCreateWithoutBlameUserInput: ProviderCreateWithoutBlameUserInput;
  ProviderCreateWithoutProductsInput: ProviderCreateWithoutProductsInput;
  ProviderCreateWithoutSaleItemsInput: ProviderCreateWithoutSaleItemsInput;
  ProviderListRelationFilter: ProviderListRelationFilter;
  ProviderMaxAggregate: ResolverTypeWrapper<ProviderMaxAggregate>;
  ProviderMinAggregate: ResolverTypeWrapper<ProviderMinAggregate>;
  ProviderNullableScalarRelationFilter: ProviderNullableScalarRelationFilter;
  ProviderOrderByRelationAggregateInput: ProviderOrderByRelationAggregateInput;
  ProviderOrderByWithRelationInput: ProviderOrderByWithRelationInput;
  ProviderPaginated: ResolverTypeWrapper<ProviderPaginated>;
  ProviderScalarFieldEnum: ProviderScalarFieldEnum;
  ProviderScalarWhereInput: ProviderScalarWhereInput;
  ProviderUpdateInput: ProviderUpdateInput;
  ProviderUpdateManyMutationInput: ProviderUpdateManyMutationInput;
  ProviderUpdateManyWithWhereWithoutBlameUserInput: ProviderUpdateManyWithWhereWithoutBlameUserInput;
  ProviderUpdateManyWithoutBlameUserNestedInput: ProviderUpdateManyWithoutBlameUserNestedInput;
  ProviderUpdateOneWithoutProductsNestedInput: ProviderUpdateOneWithoutProductsNestedInput;
  ProviderUpdateOneWithoutSaleItemsNestedInput: ProviderUpdateOneWithoutSaleItemsNestedInput;
  ProviderUpdateToOneWithWhereWithoutProductsInput: ProviderUpdateToOneWithWhereWithoutProductsInput;
  ProviderUpdateToOneWithWhereWithoutSaleItemsInput: ProviderUpdateToOneWithWhereWithoutSaleItemsInput;
  ProviderUpdateWithWhereUniqueWithoutBlameUserInput: ProviderUpdateWithWhereUniqueWithoutBlameUserInput;
  ProviderUpdateWithoutBlameUserInput: ProviderUpdateWithoutBlameUserInput;
  ProviderUpdateWithoutProductsInput: ProviderUpdateWithoutProductsInput;
  ProviderUpdateWithoutSaleItemsInput: ProviderUpdateWithoutSaleItemsInput;
  ProviderUpsertWithWhereUniqueWithoutBlameUserInput: ProviderUpsertWithWhereUniqueWithoutBlameUserInput;
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
  SaleCreateNestedOneWithoutSaleItemsInput: SaleCreateNestedOneWithoutSaleItemsInput;
  SaleCreateOrConnectWithoutBlameUserInput: SaleCreateOrConnectWithoutBlameUserInput;
  SaleCreateOrConnectWithoutSaleItemsInput: SaleCreateOrConnectWithoutSaleItemsInput;
  SaleCreateWithoutBlameUserInput: SaleCreateWithoutBlameUserInput;
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
  SaleItemCreateManySalePaidCostInput: SaleItemCreateManySalePaidCostInput;
  SaleItemCreateManySalePaidCostInputEnvelope: SaleItemCreateManySalePaidCostInputEnvelope;
  SaleItemCreateNestedManyWithoutBlameUserInput: SaleItemCreateNestedManyWithoutBlameUserInput;
  SaleItemCreateNestedManyWithoutProductInput: SaleItemCreateNestedManyWithoutProductInput;
  SaleItemCreateNestedManyWithoutProviderInput: SaleItemCreateNestedManyWithoutProviderInput;
  SaleItemCreateNestedManyWithoutSaleInput: SaleItemCreateNestedManyWithoutSaleInput;
  SaleItemCreateNestedManyWithoutSaleInputCustom: SaleItemCreateNestedManyWithoutSaleInputCustom;
  SaleItemCreateNestedManyWithoutSalePaidCostInput: SaleItemCreateNestedManyWithoutSalePaidCostInput;
  SaleItemCreateNestedOneWithoutProductMovementInput: SaleItemCreateNestedOneWithoutProductMovementInput;
  SaleItemCreateOrConnectWithoutBlameUserInput: SaleItemCreateOrConnectWithoutBlameUserInput;
  SaleItemCreateOrConnectWithoutProductInput: SaleItemCreateOrConnectWithoutProductInput;
  SaleItemCreateOrConnectWithoutProductMovementInput: SaleItemCreateOrConnectWithoutProductMovementInput;
  SaleItemCreateOrConnectWithoutProviderInput: SaleItemCreateOrConnectWithoutProviderInput;
  SaleItemCreateOrConnectWithoutSaleInput: SaleItemCreateOrConnectWithoutSaleInput;
  SaleItemCreateOrConnectWithoutSalePaidCostInput: SaleItemCreateOrConnectWithoutSalePaidCostInput;
  SaleItemCreateWithoutBlameUserInput: SaleItemCreateWithoutBlameUserInput;
  SaleItemCreateWithoutProductInput: SaleItemCreateWithoutProductInput;
  SaleItemCreateWithoutProductMovementInput: SaleItemCreateWithoutProductMovementInput;
  SaleItemCreateWithoutProviderInput: SaleItemCreateWithoutProviderInput;
  SaleItemCreateWithoutSaleInput: SaleItemCreateWithoutSaleInput;
  SaleItemCreateWithoutSalePaidCostInput: SaleItemCreateWithoutSalePaidCostInput;
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
  SaleItemUpdateManyWithWhereWithoutSalePaidCostInput: SaleItemUpdateManyWithWhereWithoutSalePaidCostInput;
  SaleItemUpdateManyWithoutBlameUserNestedInput: SaleItemUpdateManyWithoutBlameUserNestedInput;
  SaleItemUpdateManyWithoutProductNestedInput: SaleItemUpdateManyWithoutProductNestedInput;
  SaleItemUpdateManyWithoutProviderNestedInput: SaleItemUpdateManyWithoutProviderNestedInput;
  SaleItemUpdateManyWithoutSaleNestedInput: SaleItemUpdateManyWithoutSaleNestedInput;
  SaleItemUpdateManyWithoutSaleNestedInputCustom: SaleItemUpdateManyWithoutSaleNestedInputCustom;
  SaleItemUpdateManyWithoutSalePaidCostNestedInput: SaleItemUpdateManyWithoutSalePaidCostNestedInput;
  SaleItemUpdateOneWithoutProductMovementNestedInput: SaleItemUpdateOneWithoutProductMovementNestedInput;
  SaleItemUpdateToOneWithWhereWithoutProductMovementInput: SaleItemUpdateToOneWithWhereWithoutProductMovementInput;
  SaleItemUpdateWithWhereUniqueWithoutBlameUserInput: SaleItemUpdateWithWhereUniqueWithoutBlameUserInput;
  SaleItemUpdateWithWhereUniqueWithoutProductInput: SaleItemUpdateWithWhereUniqueWithoutProductInput;
  SaleItemUpdateWithWhereUniqueWithoutProviderInput: SaleItemUpdateWithWhereUniqueWithoutProviderInput;
  SaleItemUpdateWithWhereUniqueWithoutSaleInput: SaleItemUpdateWithWhereUniqueWithoutSaleInput;
  SaleItemUpdateWithWhereUniqueWithoutSalePaidCostInput: SaleItemUpdateWithWhereUniqueWithoutSalePaidCostInput;
  SaleItemUpdateWithoutBlameUserInput: SaleItemUpdateWithoutBlameUserInput;
  SaleItemUpdateWithoutProductInput: SaleItemUpdateWithoutProductInput;
  SaleItemUpdateWithoutProductMovementInput: SaleItemUpdateWithoutProductMovementInput;
  SaleItemUpdateWithoutProviderInput: SaleItemUpdateWithoutProviderInput;
  SaleItemUpdateWithoutSaleInput: SaleItemUpdateWithoutSaleInput;
  SaleItemUpdateWithoutSalePaidCostInput: SaleItemUpdateWithoutSalePaidCostInput;
  SaleItemUpsertWithWhereUniqueWithoutBlameUserInput: SaleItemUpsertWithWhereUniqueWithoutBlameUserInput;
  SaleItemUpsertWithWhereUniqueWithoutProductInput: SaleItemUpsertWithWhereUniqueWithoutProductInput;
  SaleItemUpsertWithWhereUniqueWithoutProviderInput: SaleItemUpsertWithWhereUniqueWithoutProviderInput;
  SaleItemUpsertWithWhereUniqueWithoutSaleInput: SaleItemUpsertWithWhereUniqueWithoutSaleInput;
  SaleItemUpsertWithWhereUniqueWithoutSalePaidCostInput: SaleItemUpsertWithWhereUniqueWithoutSalePaidCostInput;
  SaleItemUpsertWithoutProductMovementInput: SaleItemUpsertWithoutProductMovementInput;
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
  SalePaidCost: ResolverTypeWrapper<SalePaidCost>;
  SalePaidCostAvgAggregate: ResolverTypeWrapper<SalePaidCostAvgAggregate>;
  SalePaidCostCount: ResolverTypeWrapper<SalePaidCostCount>;
  SalePaidCostCountAggregate: ResolverTypeWrapper<SalePaidCostCountAggregate>;
  SalePaidCostCreateInput: SalePaidCostCreateInput;
  SalePaidCostCreateManyBlameUserInput: SalePaidCostCreateManyBlameUserInput;
  SalePaidCostCreateManyBlameUserInputEnvelope: SalePaidCostCreateManyBlameUserInputEnvelope;
  SalePaidCostCreateNestedManyWithoutBlameUserInput: SalePaidCostCreateNestedManyWithoutBlameUserInput;
  SalePaidCostCreateNestedOneWithoutSaleItemInput: SalePaidCostCreateNestedOneWithoutSaleItemInput;
  SalePaidCostCreateOrConnectWithoutBlameUserInput: SalePaidCostCreateOrConnectWithoutBlameUserInput;
  SalePaidCostCreateOrConnectWithoutSaleItemInput: SalePaidCostCreateOrConnectWithoutSaleItemInput;
  SalePaidCostCreateWithoutBlameUserInput: SalePaidCostCreateWithoutBlameUserInput;
  SalePaidCostCreateWithoutSaleItemInput: SalePaidCostCreateWithoutSaleItemInput;
  SalePaidCostListRelationFilter: SalePaidCostListRelationFilter;
  SalePaidCostMaxAggregate: ResolverTypeWrapper<SalePaidCostMaxAggregate>;
  SalePaidCostMinAggregate: ResolverTypeWrapper<SalePaidCostMinAggregate>;
  SalePaidCostNullableScalarRelationFilter: SalePaidCostNullableScalarRelationFilter;
  SalePaidCostOrderByRelationAggregateInput: SalePaidCostOrderByRelationAggregateInput;
  SalePaidCostOrderByWithRelationInput: SalePaidCostOrderByWithRelationInput;
  SalePaidCostOutput: ResolverTypeWrapper<SalePaidCostOutput>;
  SalePaidCostPaginated: ResolverTypeWrapper<SalePaidCostPaginated>;
  SalePaidCostScalarFieldEnum: SalePaidCostScalarFieldEnum;
  SalePaidCostScalarWhereInput: SalePaidCostScalarWhereInput;
  SalePaidCostSumAggregate: ResolverTypeWrapper<SalePaidCostSumAggregate>;
  SalePaidCostUpdateInput: SalePaidCostUpdateInput;
  SalePaidCostUpdateManyMutationInput: SalePaidCostUpdateManyMutationInput;
  SalePaidCostUpdateManyWithWhereWithoutBlameUserInput: SalePaidCostUpdateManyWithWhereWithoutBlameUserInput;
  SalePaidCostUpdateManyWithoutBlameUserNestedInput: SalePaidCostUpdateManyWithoutBlameUserNestedInput;
  SalePaidCostUpdateOneWithoutSaleItemNestedInput: SalePaidCostUpdateOneWithoutSaleItemNestedInput;
  SalePaidCostUpdateToOneWithWhereWithoutSaleItemInput: SalePaidCostUpdateToOneWithWhereWithoutSaleItemInput;
  SalePaidCostUpdateWithWhereUniqueWithoutBlameUserInput: SalePaidCostUpdateWithWhereUniqueWithoutBlameUserInput;
  SalePaidCostUpdateWithoutBlameUserInput: SalePaidCostUpdateWithoutBlameUserInput;
  SalePaidCostUpdateWithoutSaleItemInput: SalePaidCostUpdateWithoutSaleItemInput;
  SalePaidCostUpsertWithWhereUniqueWithoutBlameUserInput: SalePaidCostUpsertWithWhereUniqueWithoutBlameUserInput;
  SalePaidCostUpsertWithoutSaleItemInput: SalePaidCostUpsertWithoutSaleItemInput;
  SalePaidCostWhereInput: SalePaidCostWhereInput;
  SalePaidCostWhereUniqueInput: SalePaidCostWhereUniqueInput;
  SaleScalarFieldEnum: SaleScalarFieldEnum;
  SaleScalarWhereInput: SaleScalarWhereInput;
  SaleSumAggregate: ResolverTypeWrapper<SaleSumAggregate>;
  SaleUpdateInputCustom: SaleUpdateInputCustom;
  SaleUpdateManyMutationInput: SaleUpdateManyMutationInput;
  SaleUpdateManyWithWhereWithoutBlameUserInput: SaleUpdateManyWithWhereWithoutBlameUserInput;
  SaleUpdateManyWithoutBlameUserNestedInput: SaleUpdateManyWithoutBlameUserNestedInput;
  SaleUpdateOneWithoutSaleItemsNestedInput: SaleUpdateOneWithoutSaleItemsNestedInput;
  SaleUpdateToOneWithWhereWithoutSaleItemsInput: SaleUpdateToOneWithWhereWithoutSaleItemsInput;
  SaleUpdateWithWhereUniqueWithoutBlameUserInput: SaleUpdateWithWhereUniqueWithoutBlameUserInput;
  SaleUpdateWithoutBlameUserInput: SaleUpdateWithoutBlameUserInput;
  SaleUpdateWithoutSaleItemsInput: SaleUpdateWithoutSaleItemsInput;
  SaleUpsertWithWhereUniqueWithoutBlameUserInput: SaleUpsertWithWhereUniqueWithoutBlameUserInput;
  SaleUpsertWithoutSaleItemsInput: SaleUpsertWithoutSaleItemsInput;
  SaleWhereInput: SaleWhereInput;
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
  UserCreateInput: UserCreateInput;
  UserCreateManyInput: UserCreateManyInput;
  UserCreateNestedOneWithoutProductMovementInput: UserCreateNestedOneWithoutProductMovementInput;
  UserCreateNestedOneWithoutProductsInput: UserCreateNestedOneWithoutProductsInput;
  UserCreateNestedOneWithoutProvidersInput: UserCreateNestedOneWithoutProvidersInput;
  UserCreateNestedOneWithoutSaleItemsInput: UserCreateNestedOneWithoutSaleItemsInput;
  UserCreateNestedOneWithoutSalePaidCostInput: UserCreateNestedOneWithoutSalePaidCostInput;
  UserCreateNestedOneWithoutSalesInput: UserCreateNestedOneWithoutSalesInput;
  UserCreateOrConnectWithoutProductMovementInput: UserCreateOrConnectWithoutProductMovementInput;
  UserCreateOrConnectWithoutProductsInput: UserCreateOrConnectWithoutProductsInput;
  UserCreateOrConnectWithoutProvidersInput: UserCreateOrConnectWithoutProvidersInput;
  UserCreateOrConnectWithoutSaleItemsInput: UserCreateOrConnectWithoutSaleItemsInput;
  UserCreateOrConnectWithoutSalePaidCostInput: UserCreateOrConnectWithoutSalePaidCostInput;
  UserCreateOrConnectWithoutSalesInput: UserCreateOrConnectWithoutSalesInput;
  UserCreateWithoutProductMovementInput: UserCreateWithoutProductMovementInput;
  UserCreateWithoutProductsInput: UserCreateWithoutProductsInput;
  UserCreateWithoutProvidersInput: UserCreateWithoutProvidersInput;
  UserCreateWithoutSaleItemsInput: UserCreateWithoutSaleItemsInput;
  UserCreateWithoutSalePaidCostInput: UserCreateWithoutSalePaidCostInput;
  UserCreateWithoutSalesInput: UserCreateWithoutSalesInput;
  UserMaxAggregate: ResolverTypeWrapper<UserMaxAggregate>;
  UserMinAggregate: ResolverTypeWrapper<UserMinAggregate>;
  UserNullableScalarRelationFilter: UserNullableScalarRelationFilter;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserPaginated: ResolverTypeWrapper<UserPaginated>;
  UserScalarFieldEnum: UserScalarFieldEnum;
  UserUpdateInput: UserUpdateInput;
  UserUpdateOneWithoutProductMovementNestedInput: UserUpdateOneWithoutProductMovementNestedInput;
  UserUpdateOneWithoutProductsNestedInput: UserUpdateOneWithoutProductsNestedInput;
  UserUpdateOneWithoutProvidersNestedInput: UserUpdateOneWithoutProvidersNestedInput;
  UserUpdateOneWithoutSaleItemsNestedInput: UserUpdateOneWithoutSaleItemsNestedInput;
  UserUpdateOneWithoutSalePaidCostNestedInput: UserUpdateOneWithoutSalePaidCostNestedInput;
  UserUpdateOneWithoutSalesNestedInput: UserUpdateOneWithoutSalesNestedInput;
  UserUpdateToOneWithWhereWithoutProductMovementInput: UserUpdateToOneWithWhereWithoutProductMovementInput;
  UserUpdateToOneWithWhereWithoutProductsInput: UserUpdateToOneWithWhereWithoutProductsInput;
  UserUpdateToOneWithWhereWithoutProvidersInput: UserUpdateToOneWithWhereWithoutProvidersInput;
  UserUpdateToOneWithWhereWithoutSaleItemsInput: UserUpdateToOneWithWhereWithoutSaleItemsInput;
  UserUpdateToOneWithWhereWithoutSalePaidCostInput: UserUpdateToOneWithWhereWithoutSalePaidCostInput;
  UserUpdateToOneWithWhereWithoutSalesInput: UserUpdateToOneWithWhereWithoutSalesInput;
  UserUpdateWithoutProductMovementInput: UserUpdateWithoutProductMovementInput;
  UserUpdateWithoutProductsInput: UserUpdateWithoutProductsInput;
  UserUpdateWithoutProvidersInput: UserUpdateWithoutProvidersInput;
  UserUpdateWithoutSaleItemsInput: UserUpdateWithoutSaleItemsInput;
  UserUpdateWithoutSalePaidCostInput: UserUpdateWithoutSalePaidCostInput;
  UserUpdateWithoutSalesInput: UserUpdateWithoutSalesInput;
  UserUpsertWithoutProductMovementInput: UserUpsertWithoutProductMovementInput;
  UserUpsertWithoutProductsInput: UserUpsertWithoutProductsInput;
  UserUpsertWithoutProvidersInput: UserUpsertWithoutProvidersInput;
  UserUpsertWithoutSaleItemsInput: UserUpsertWithoutSaleItemsInput;
  UserUpsertWithoutSalePaidCostInput: UserUpsertWithoutSalePaidCostInput;
  UserUpsertWithoutSalesInput: UserUpsertWithoutSalesInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  UsersOutput: ResolverTypeWrapper<UsersOutput>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BoolFieldUpdateOperationsInput: BoolFieldUpdateOperationsInput;
  BoolFilter: BoolFilter;
  Boolean: Scalars['Boolean']['output'];
  DateTime: Scalars['DateTime']['output'];
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  EnumProductMovementTypeFieldUpdateOperationsInput: EnumProductMovementTypeFieldUpdateOperationsInput;
  EnumProductMovementTypeFilter: EnumProductMovementTypeFilter;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  IntFilter: IntFilter;
  Mutation: {};
  NestedBoolFilter: NestedBoolFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
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
  ProductCreateManyInput: ProductCreateManyInput;
  ProductCreateManyProviderInput: ProductCreateManyProviderInput;
  ProductCreateManyProviderInputEnvelope: ProductCreateManyProviderInputEnvelope;
  ProductCreateNestedManyWithoutBlameUserInput: ProductCreateNestedManyWithoutBlameUserInput;
  ProductCreateNestedManyWithoutProviderInput: ProductCreateNestedManyWithoutProviderInput;
  ProductCreateNestedOneWithoutProductMovementInput: ProductCreateNestedOneWithoutProductMovementInput;
  ProductCreateNestedOneWithoutSaleItemsInput: ProductCreateNestedOneWithoutSaleItemsInput;
  ProductCreateOrConnectWithoutBlameUserInput: ProductCreateOrConnectWithoutBlameUserInput;
  ProductCreateOrConnectWithoutProductMovementInput: ProductCreateOrConnectWithoutProductMovementInput;
  ProductCreateOrConnectWithoutProviderInput: ProductCreateOrConnectWithoutProviderInput;
  ProductCreateOrConnectWithoutSaleItemsInput: ProductCreateOrConnectWithoutSaleItemsInput;
  ProductCreateWithoutBlameUserInput: ProductCreateWithoutBlameUserInput;
  ProductCreateWithoutProductMovementInput: ProductCreateWithoutProductMovementInput;
  ProductCreateWithoutProviderInput: ProductCreateWithoutProviderInput;
  ProductCreateWithoutSaleItemsInput: ProductCreateWithoutSaleItemsInput;
  ProductListRelationFilter: ProductListRelationFilter;
  ProductMaxAggregate: ProductMaxAggregate;
  ProductMinAggregate: ProductMinAggregate;
  ProductMovement: ProductMovement;
  ProductMovementAvgAggregate: ProductMovementAvgAggregate;
  ProductMovementCountAggregate: ProductMovementCountAggregate;
  ProductMovementCreateManyBlameUserInput: ProductMovementCreateManyBlameUserInput;
  ProductMovementCreateManyBlameUserInputEnvelope: ProductMovementCreateManyBlameUserInputEnvelope;
  ProductMovementCreateManyProductInput: ProductMovementCreateManyProductInput;
  ProductMovementCreateManyProductInputEnvelope: ProductMovementCreateManyProductInputEnvelope;
  ProductMovementCreateManySaleItemInput: ProductMovementCreateManySaleItemInput;
  ProductMovementCreateManySaleItemInputEnvelope: ProductMovementCreateManySaleItemInputEnvelope;
  ProductMovementCreateNestedManyWithoutBlameUserInput: ProductMovementCreateNestedManyWithoutBlameUserInput;
  ProductMovementCreateNestedManyWithoutProductInput: ProductMovementCreateNestedManyWithoutProductInput;
  ProductMovementCreateNestedManyWithoutSaleItemInput: ProductMovementCreateNestedManyWithoutSaleItemInput;
  ProductMovementCreateOrConnectWithoutBlameUserInput: ProductMovementCreateOrConnectWithoutBlameUserInput;
  ProductMovementCreateOrConnectWithoutProductInput: ProductMovementCreateOrConnectWithoutProductInput;
  ProductMovementCreateOrConnectWithoutSaleItemInput: ProductMovementCreateOrConnectWithoutSaleItemInput;
  ProductMovementCreateWithoutBlameUserInput: ProductMovementCreateWithoutBlameUserInput;
  ProductMovementCreateWithoutProductInput: ProductMovementCreateWithoutProductInput;
  ProductMovementCreateWithoutSaleItemInput: ProductMovementCreateWithoutSaleItemInput;
  ProductMovementListRelationFilter: ProductMovementListRelationFilter;
  ProductMovementMaxAggregate: ProductMovementMaxAggregate;
  ProductMovementMinAggregate: ProductMovementMinAggregate;
  ProductMovementOrderByRelationAggregateInput: ProductMovementOrderByRelationAggregateInput;
  ProductMovementScalarWhereInput: ProductMovementScalarWhereInput;
  ProductMovementSumAggregate: ProductMovementSumAggregate;
  ProductMovementUpdateManyMutationInput: ProductMovementUpdateManyMutationInput;
  ProductMovementUpdateManyWithWhereWithoutBlameUserInput: ProductMovementUpdateManyWithWhereWithoutBlameUserInput;
  ProductMovementUpdateManyWithWhereWithoutProductInput: ProductMovementUpdateManyWithWhereWithoutProductInput;
  ProductMovementUpdateManyWithWhereWithoutSaleItemInput: ProductMovementUpdateManyWithWhereWithoutSaleItemInput;
  ProductMovementUpdateManyWithoutBlameUserNestedInput: ProductMovementUpdateManyWithoutBlameUserNestedInput;
  ProductMovementUpdateManyWithoutProductNestedInput: ProductMovementUpdateManyWithoutProductNestedInput;
  ProductMovementUpdateManyWithoutSaleItemNestedInput: ProductMovementUpdateManyWithoutSaleItemNestedInput;
  ProductMovementUpdateWithWhereUniqueWithoutBlameUserInput: ProductMovementUpdateWithWhereUniqueWithoutBlameUserInput;
  ProductMovementUpdateWithWhereUniqueWithoutProductInput: ProductMovementUpdateWithWhereUniqueWithoutProductInput;
  ProductMovementUpdateWithWhereUniqueWithoutSaleItemInput: ProductMovementUpdateWithWhereUniqueWithoutSaleItemInput;
  ProductMovementUpdateWithoutBlameUserInput: ProductMovementUpdateWithoutBlameUserInput;
  ProductMovementUpdateWithoutProductInput: ProductMovementUpdateWithoutProductInput;
  ProductMovementUpdateWithoutSaleItemInput: ProductMovementUpdateWithoutSaleItemInput;
  ProductMovementUpsertWithWhereUniqueWithoutBlameUserInput: ProductMovementUpsertWithWhereUniqueWithoutBlameUserInput;
  ProductMovementUpsertWithWhereUniqueWithoutProductInput: ProductMovementUpsertWithWhereUniqueWithoutProductInput;
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
  ProductUpdateOneRequiredWithoutProductMovementNestedInput: ProductUpdateOneRequiredWithoutProductMovementNestedInput;
  ProductUpdateOneRequiredWithoutSaleItemsNestedInput: ProductUpdateOneRequiredWithoutSaleItemsNestedInput;
  ProductUpdateToOneWithWhereWithoutProductMovementInput: ProductUpdateToOneWithWhereWithoutProductMovementInput;
  ProductUpdateToOneWithWhereWithoutSaleItemsInput: ProductUpdateToOneWithWhereWithoutSaleItemsInput;
  ProductUpdateWithWhereUniqueWithoutBlameUserInput: ProductUpdateWithWhereUniqueWithoutBlameUserInput;
  ProductUpdateWithWhereUniqueWithoutProviderInput: ProductUpdateWithWhereUniqueWithoutProviderInput;
  ProductUpdateWithoutBlameUserInput: ProductUpdateWithoutBlameUserInput;
  ProductUpdateWithoutProductMovementInput: ProductUpdateWithoutProductMovementInput;
  ProductUpdateWithoutProviderInput: ProductUpdateWithoutProviderInput;
  ProductUpdateWithoutSaleItemsInput: ProductUpdateWithoutSaleItemsInput;
  ProductUpsertWithWhereUniqueWithoutBlameUserInput: ProductUpsertWithWhereUniqueWithoutBlameUserInput;
  ProductUpsertWithWhereUniqueWithoutProviderInput: ProductUpsertWithWhereUniqueWithoutProviderInput;
  ProductUpsertWithoutProductMovementInput: ProductUpsertWithoutProductMovementInput;
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
  ProviderCreateNestedOneWithoutProductsInput: ProviderCreateNestedOneWithoutProductsInput;
  ProviderCreateNestedOneWithoutSaleItemsInput: ProviderCreateNestedOneWithoutSaleItemsInput;
  ProviderCreateOrConnectWithoutBlameUserInput: ProviderCreateOrConnectWithoutBlameUserInput;
  ProviderCreateOrConnectWithoutProductsInput: ProviderCreateOrConnectWithoutProductsInput;
  ProviderCreateOrConnectWithoutSaleItemsInput: ProviderCreateOrConnectWithoutSaleItemsInput;
  ProviderCreateWithoutBlameUserInput: ProviderCreateWithoutBlameUserInput;
  ProviderCreateWithoutProductsInput: ProviderCreateWithoutProductsInput;
  ProviderCreateWithoutSaleItemsInput: ProviderCreateWithoutSaleItemsInput;
  ProviderListRelationFilter: ProviderListRelationFilter;
  ProviderMaxAggregate: ProviderMaxAggregate;
  ProviderMinAggregate: ProviderMinAggregate;
  ProviderNullableScalarRelationFilter: ProviderNullableScalarRelationFilter;
  ProviderOrderByRelationAggregateInput: ProviderOrderByRelationAggregateInput;
  ProviderOrderByWithRelationInput: ProviderOrderByWithRelationInput;
  ProviderPaginated: ProviderPaginated;
  ProviderScalarWhereInput: ProviderScalarWhereInput;
  ProviderUpdateInput: ProviderUpdateInput;
  ProviderUpdateManyMutationInput: ProviderUpdateManyMutationInput;
  ProviderUpdateManyWithWhereWithoutBlameUserInput: ProviderUpdateManyWithWhereWithoutBlameUserInput;
  ProviderUpdateManyWithoutBlameUserNestedInput: ProviderUpdateManyWithoutBlameUserNestedInput;
  ProviderUpdateOneWithoutProductsNestedInput: ProviderUpdateOneWithoutProductsNestedInput;
  ProviderUpdateOneWithoutSaleItemsNestedInput: ProviderUpdateOneWithoutSaleItemsNestedInput;
  ProviderUpdateToOneWithWhereWithoutProductsInput: ProviderUpdateToOneWithWhereWithoutProductsInput;
  ProviderUpdateToOneWithWhereWithoutSaleItemsInput: ProviderUpdateToOneWithWhereWithoutSaleItemsInput;
  ProviderUpdateWithWhereUniqueWithoutBlameUserInput: ProviderUpdateWithWhereUniqueWithoutBlameUserInput;
  ProviderUpdateWithoutBlameUserInput: ProviderUpdateWithoutBlameUserInput;
  ProviderUpdateWithoutProductsInput: ProviderUpdateWithoutProductsInput;
  ProviderUpdateWithoutSaleItemsInput: ProviderUpdateWithoutSaleItemsInput;
  ProviderUpsertWithWhereUniqueWithoutBlameUserInput: ProviderUpsertWithWhereUniqueWithoutBlameUserInput;
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
  SaleCreateNestedOneWithoutSaleItemsInput: SaleCreateNestedOneWithoutSaleItemsInput;
  SaleCreateOrConnectWithoutBlameUserInput: SaleCreateOrConnectWithoutBlameUserInput;
  SaleCreateOrConnectWithoutSaleItemsInput: SaleCreateOrConnectWithoutSaleItemsInput;
  SaleCreateWithoutBlameUserInput: SaleCreateWithoutBlameUserInput;
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
  SaleItemCreateManySalePaidCostInput: SaleItemCreateManySalePaidCostInput;
  SaleItemCreateManySalePaidCostInputEnvelope: SaleItemCreateManySalePaidCostInputEnvelope;
  SaleItemCreateNestedManyWithoutBlameUserInput: SaleItemCreateNestedManyWithoutBlameUserInput;
  SaleItemCreateNestedManyWithoutProductInput: SaleItemCreateNestedManyWithoutProductInput;
  SaleItemCreateNestedManyWithoutProviderInput: SaleItemCreateNestedManyWithoutProviderInput;
  SaleItemCreateNestedManyWithoutSaleInput: SaleItemCreateNestedManyWithoutSaleInput;
  SaleItemCreateNestedManyWithoutSaleInputCustom: SaleItemCreateNestedManyWithoutSaleInputCustom;
  SaleItemCreateNestedManyWithoutSalePaidCostInput: SaleItemCreateNestedManyWithoutSalePaidCostInput;
  SaleItemCreateNestedOneWithoutProductMovementInput: SaleItemCreateNestedOneWithoutProductMovementInput;
  SaleItemCreateOrConnectWithoutBlameUserInput: SaleItemCreateOrConnectWithoutBlameUserInput;
  SaleItemCreateOrConnectWithoutProductInput: SaleItemCreateOrConnectWithoutProductInput;
  SaleItemCreateOrConnectWithoutProductMovementInput: SaleItemCreateOrConnectWithoutProductMovementInput;
  SaleItemCreateOrConnectWithoutProviderInput: SaleItemCreateOrConnectWithoutProviderInput;
  SaleItemCreateOrConnectWithoutSaleInput: SaleItemCreateOrConnectWithoutSaleInput;
  SaleItemCreateOrConnectWithoutSalePaidCostInput: SaleItemCreateOrConnectWithoutSalePaidCostInput;
  SaleItemCreateWithoutBlameUserInput: SaleItemCreateWithoutBlameUserInput;
  SaleItemCreateWithoutProductInput: SaleItemCreateWithoutProductInput;
  SaleItemCreateWithoutProductMovementInput: SaleItemCreateWithoutProductMovementInput;
  SaleItemCreateWithoutProviderInput: SaleItemCreateWithoutProviderInput;
  SaleItemCreateWithoutSaleInput: SaleItemCreateWithoutSaleInput;
  SaleItemCreateWithoutSalePaidCostInput: SaleItemCreateWithoutSalePaidCostInput;
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
  SaleItemUpdateManyWithWhereWithoutSalePaidCostInput: SaleItemUpdateManyWithWhereWithoutSalePaidCostInput;
  SaleItemUpdateManyWithoutBlameUserNestedInput: SaleItemUpdateManyWithoutBlameUserNestedInput;
  SaleItemUpdateManyWithoutProductNestedInput: SaleItemUpdateManyWithoutProductNestedInput;
  SaleItemUpdateManyWithoutProviderNestedInput: SaleItemUpdateManyWithoutProviderNestedInput;
  SaleItemUpdateManyWithoutSaleNestedInput: SaleItemUpdateManyWithoutSaleNestedInput;
  SaleItemUpdateManyWithoutSaleNestedInputCustom: SaleItemUpdateManyWithoutSaleNestedInputCustom;
  SaleItemUpdateManyWithoutSalePaidCostNestedInput: SaleItemUpdateManyWithoutSalePaidCostNestedInput;
  SaleItemUpdateOneWithoutProductMovementNestedInput: SaleItemUpdateOneWithoutProductMovementNestedInput;
  SaleItemUpdateToOneWithWhereWithoutProductMovementInput: SaleItemUpdateToOneWithWhereWithoutProductMovementInput;
  SaleItemUpdateWithWhereUniqueWithoutBlameUserInput: SaleItemUpdateWithWhereUniqueWithoutBlameUserInput;
  SaleItemUpdateWithWhereUniqueWithoutProductInput: SaleItemUpdateWithWhereUniqueWithoutProductInput;
  SaleItemUpdateWithWhereUniqueWithoutProviderInput: SaleItemUpdateWithWhereUniqueWithoutProviderInput;
  SaleItemUpdateWithWhereUniqueWithoutSaleInput: SaleItemUpdateWithWhereUniqueWithoutSaleInput;
  SaleItemUpdateWithWhereUniqueWithoutSalePaidCostInput: SaleItemUpdateWithWhereUniqueWithoutSalePaidCostInput;
  SaleItemUpdateWithoutBlameUserInput: SaleItemUpdateWithoutBlameUserInput;
  SaleItemUpdateWithoutProductInput: SaleItemUpdateWithoutProductInput;
  SaleItemUpdateWithoutProductMovementInput: SaleItemUpdateWithoutProductMovementInput;
  SaleItemUpdateWithoutProviderInput: SaleItemUpdateWithoutProviderInput;
  SaleItemUpdateWithoutSaleInput: SaleItemUpdateWithoutSaleInput;
  SaleItemUpdateWithoutSalePaidCostInput: SaleItemUpdateWithoutSalePaidCostInput;
  SaleItemUpsertWithWhereUniqueWithoutBlameUserInput: SaleItemUpsertWithWhereUniqueWithoutBlameUserInput;
  SaleItemUpsertWithWhereUniqueWithoutProductInput: SaleItemUpsertWithWhereUniqueWithoutProductInput;
  SaleItemUpsertWithWhereUniqueWithoutProviderInput: SaleItemUpsertWithWhereUniqueWithoutProviderInput;
  SaleItemUpsertWithWhereUniqueWithoutSaleInput: SaleItemUpsertWithWhereUniqueWithoutSaleInput;
  SaleItemUpsertWithWhereUniqueWithoutSalePaidCostInput: SaleItemUpsertWithWhereUniqueWithoutSalePaidCostInput;
  SaleItemUpsertWithoutProductMovementInput: SaleItemUpsertWithoutProductMovementInput;
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
  SalePaidCost: SalePaidCost;
  SalePaidCostAvgAggregate: SalePaidCostAvgAggregate;
  SalePaidCostCount: SalePaidCostCount;
  SalePaidCostCountAggregate: SalePaidCostCountAggregate;
  SalePaidCostCreateInput: SalePaidCostCreateInput;
  SalePaidCostCreateManyBlameUserInput: SalePaidCostCreateManyBlameUserInput;
  SalePaidCostCreateManyBlameUserInputEnvelope: SalePaidCostCreateManyBlameUserInputEnvelope;
  SalePaidCostCreateNestedManyWithoutBlameUserInput: SalePaidCostCreateNestedManyWithoutBlameUserInput;
  SalePaidCostCreateNestedOneWithoutSaleItemInput: SalePaidCostCreateNestedOneWithoutSaleItemInput;
  SalePaidCostCreateOrConnectWithoutBlameUserInput: SalePaidCostCreateOrConnectWithoutBlameUserInput;
  SalePaidCostCreateOrConnectWithoutSaleItemInput: SalePaidCostCreateOrConnectWithoutSaleItemInput;
  SalePaidCostCreateWithoutBlameUserInput: SalePaidCostCreateWithoutBlameUserInput;
  SalePaidCostCreateWithoutSaleItemInput: SalePaidCostCreateWithoutSaleItemInput;
  SalePaidCostListRelationFilter: SalePaidCostListRelationFilter;
  SalePaidCostMaxAggregate: SalePaidCostMaxAggregate;
  SalePaidCostMinAggregate: SalePaidCostMinAggregate;
  SalePaidCostNullableScalarRelationFilter: SalePaidCostNullableScalarRelationFilter;
  SalePaidCostOrderByRelationAggregateInput: SalePaidCostOrderByRelationAggregateInput;
  SalePaidCostOrderByWithRelationInput: SalePaidCostOrderByWithRelationInput;
  SalePaidCostOutput: SalePaidCostOutput;
  SalePaidCostPaginated: SalePaidCostPaginated;
  SalePaidCostScalarWhereInput: SalePaidCostScalarWhereInput;
  SalePaidCostSumAggregate: SalePaidCostSumAggregate;
  SalePaidCostUpdateInput: SalePaidCostUpdateInput;
  SalePaidCostUpdateManyMutationInput: SalePaidCostUpdateManyMutationInput;
  SalePaidCostUpdateManyWithWhereWithoutBlameUserInput: SalePaidCostUpdateManyWithWhereWithoutBlameUserInput;
  SalePaidCostUpdateManyWithoutBlameUserNestedInput: SalePaidCostUpdateManyWithoutBlameUserNestedInput;
  SalePaidCostUpdateOneWithoutSaleItemNestedInput: SalePaidCostUpdateOneWithoutSaleItemNestedInput;
  SalePaidCostUpdateToOneWithWhereWithoutSaleItemInput: SalePaidCostUpdateToOneWithWhereWithoutSaleItemInput;
  SalePaidCostUpdateWithWhereUniqueWithoutBlameUserInput: SalePaidCostUpdateWithWhereUniqueWithoutBlameUserInput;
  SalePaidCostUpdateWithoutBlameUserInput: SalePaidCostUpdateWithoutBlameUserInput;
  SalePaidCostUpdateWithoutSaleItemInput: SalePaidCostUpdateWithoutSaleItemInput;
  SalePaidCostUpsertWithWhereUniqueWithoutBlameUserInput: SalePaidCostUpsertWithWhereUniqueWithoutBlameUserInput;
  SalePaidCostUpsertWithoutSaleItemInput: SalePaidCostUpsertWithoutSaleItemInput;
  SalePaidCostWhereInput: SalePaidCostWhereInput;
  SalePaidCostWhereUniqueInput: SalePaidCostWhereUniqueInput;
  SaleScalarWhereInput: SaleScalarWhereInput;
  SaleSumAggregate: SaleSumAggregate;
  SaleUpdateInputCustom: SaleUpdateInputCustom;
  SaleUpdateManyMutationInput: SaleUpdateManyMutationInput;
  SaleUpdateManyWithWhereWithoutBlameUserInput: SaleUpdateManyWithWhereWithoutBlameUserInput;
  SaleUpdateManyWithoutBlameUserNestedInput: SaleUpdateManyWithoutBlameUserNestedInput;
  SaleUpdateOneWithoutSaleItemsNestedInput: SaleUpdateOneWithoutSaleItemsNestedInput;
  SaleUpdateToOneWithWhereWithoutSaleItemsInput: SaleUpdateToOneWithWhereWithoutSaleItemsInput;
  SaleUpdateWithWhereUniqueWithoutBlameUserInput: SaleUpdateWithWhereUniqueWithoutBlameUserInput;
  SaleUpdateWithoutBlameUserInput: SaleUpdateWithoutBlameUserInput;
  SaleUpdateWithoutSaleItemsInput: SaleUpdateWithoutSaleItemsInput;
  SaleUpsertWithWhereUniqueWithoutBlameUserInput: SaleUpsertWithWhereUniqueWithoutBlameUserInput;
  SaleUpsertWithoutSaleItemsInput: SaleUpsertWithoutSaleItemsInput;
  SaleWhereInput: SaleWhereInput;
  SaleWhereUniqueInput: SaleWhereUniqueInput;
  SalesOutput: SalesOutput;
  String: Scalars['String']['output'];
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  User: User;
  UserCount: UserCount;
  UserCountAggregate: UserCountAggregate;
  UserCreateInput: UserCreateInput;
  UserCreateManyInput: UserCreateManyInput;
  UserCreateNestedOneWithoutProductMovementInput: UserCreateNestedOneWithoutProductMovementInput;
  UserCreateNestedOneWithoutProductsInput: UserCreateNestedOneWithoutProductsInput;
  UserCreateNestedOneWithoutProvidersInput: UserCreateNestedOneWithoutProvidersInput;
  UserCreateNestedOneWithoutSaleItemsInput: UserCreateNestedOneWithoutSaleItemsInput;
  UserCreateNestedOneWithoutSalePaidCostInput: UserCreateNestedOneWithoutSalePaidCostInput;
  UserCreateNestedOneWithoutSalesInput: UserCreateNestedOneWithoutSalesInput;
  UserCreateOrConnectWithoutProductMovementInput: UserCreateOrConnectWithoutProductMovementInput;
  UserCreateOrConnectWithoutProductsInput: UserCreateOrConnectWithoutProductsInput;
  UserCreateOrConnectWithoutProvidersInput: UserCreateOrConnectWithoutProvidersInput;
  UserCreateOrConnectWithoutSaleItemsInput: UserCreateOrConnectWithoutSaleItemsInput;
  UserCreateOrConnectWithoutSalePaidCostInput: UserCreateOrConnectWithoutSalePaidCostInput;
  UserCreateOrConnectWithoutSalesInput: UserCreateOrConnectWithoutSalesInput;
  UserCreateWithoutProductMovementInput: UserCreateWithoutProductMovementInput;
  UserCreateWithoutProductsInput: UserCreateWithoutProductsInput;
  UserCreateWithoutProvidersInput: UserCreateWithoutProvidersInput;
  UserCreateWithoutSaleItemsInput: UserCreateWithoutSaleItemsInput;
  UserCreateWithoutSalePaidCostInput: UserCreateWithoutSalePaidCostInput;
  UserCreateWithoutSalesInput: UserCreateWithoutSalesInput;
  UserMaxAggregate: UserMaxAggregate;
  UserMinAggregate: UserMinAggregate;
  UserNullableScalarRelationFilter: UserNullableScalarRelationFilter;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserPaginated: UserPaginated;
  UserUpdateInput: UserUpdateInput;
  UserUpdateOneWithoutProductMovementNestedInput: UserUpdateOneWithoutProductMovementNestedInput;
  UserUpdateOneWithoutProductsNestedInput: UserUpdateOneWithoutProductsNestedInput;
  UserUpdateOneWithoutProvidersNestedInput: UserUpdateOneWithoutProvidersNestedInput;
  UserUpdateOneWithoutSaleItemsNestedInput: UserUpdateOneWithoutSaleItemsNestedInput;
  UserUpdateOneWithoutSalePaidCostNestedInput: UserUpdateOneWithoutSalePaidCostNestedInput;
  UserUpdateOneWithoutSalesNestedInput: UserUpdateOneWithoutSalesNestedInput;
  UserUpdateToOneWithWhereWithoutProductMovementInput: UserUpdateToOneWithWhereWithoutProductMovementInput;
  UserUpdateToOneWithWhereWithoutProductsInput: UserUpdateToOneWithWhereWithoutProductsInput;
  UserUpdateToOneWithWhereWithoutProvidersInput: UserUpdateToOneWithWhereWithoutProvidersInput;
  UserUpdateToOneWithWhereWithoutSaleItemsInput: UserUpdateToOneWithWhereWithoutSaleItemsInput;
  UserUpdateToOneWithWhereWithoutSalePaidCostInput: UserUpdateToOneWithWhereWithoutSalePaidCostInput;
  UserUpdateToOneWithWhereWithoutSalesInput: UserUpdateToOneWithWhereWithoutSalesInput;
  UserUpdateWithoutProductMovementInput: UserUpdateWithoutProductMovementInput;
  UserUpdateWithoutProductsInput: UserUpdateWithoutProductsInput;
  UserUpdateWithoutProvidersInput: UserUpdateWithoutProvidersInput;
  UserUpdateWithoutSaleItemsInput: UserUpdateWithoutSaleItemsInput;
  UserUpdateWithoutSalePaidCostInput: UserUpdateWithoutSalePaidCostInput;
  UserUpdateWithoutSalesInput: UserUpdateWithoutSalesInput;
  UserUpsertWithoutProductMovementInput: UserUpsertWithoutProductMovementInput;
  UserUpsertWithoutProductsInput: UserUpsertWithoutProductsInput;
  UserUpsertWithoutProvidersInput: UserUpsertWithoutProvidersInput;
  UserUpsertWithoutSaleItemsInput: UserUpsertWithoutSaleItemsInput;
  UserUpsertWithoutSalePaidCostInput: UserUpsertWithoutSalePaidCostInput;
  UserUpsertWithoutSalesInput: UserUpsertWithoutSalesInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  UsersOutput: UsersOutput;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  confirmSalePaidCost?: Resolver<ResolversTypes['SalePaidCost'], ParentType, ContextType, RequireFields<MutationConfirmSalePaidCostArgs, 'data' | 'where'>>;
  createProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'data'>>;
  createProducts?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateProductsArgs, 'data'>>;
  createProvider?: Resolver<ResolversTypes['Provider'], ParentType, ContextType, RequireFields<MutationCreateProviderArgs, 'data'>>;
  createProviders?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateProvidersArgs, 'data'>>;
  createSale?: Resolver<ResolversTypes['Sale'], ParentType, ContextType, RequireFields<MutationCreateSaleArgs, 'data'>>;
  createSalePaidCost?: Resolver<ResolversTypes['SalePaidCost'], ParentType, ContextType, RequireFields<MutationCreateSalePaidCostArgs, 'data'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'data'>>;
  createUsers?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateUsersArgs, 'data'>>;
  deleteProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'where'>>;
  deleteProvider?: Resolver<ResolversTypes['Provider'], ParentType, ContextType, RequireFields<MutationDeleteProviderArgs, 'where'>>;
  deleteSale?: Resolver<ResolversTypes['Sale'], ParentType, ContextType, RequireFields<MutationDeleteSaleArgs, 'where'>>;
  deleteSalePaidCost?: Resolver<ResolversTypes['SalePaidCost'], ParentType, ContextType, RequireFields<MutationDeleteSalePaidCostArgs, 'where'>>;
  deleteUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'where'>>;
  updateProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'data' | 'where'>>;
  updateProvider?: Resolver<ResolversTypes['Provider'], ParentType, ContextType, RequireFields<MutationUpdateProviderArgs, 'data' | 'where'>>;
  updateSale?: Resolver<ResolversTypes['Sale'], ParentType, ContextType, RequireFields<MutationUpdateSaleArgs, 'data' | 'where'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'data' | 'where'>>;
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
  ProductMovement?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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

export type ProductMovementResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMovement'] = ResolversParentTypes['ProductMovement']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  movement?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  saleItemId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ProductMovementType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
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
  movement?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  saleItemId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductMovementMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMovementMaxAggregate'] = ResolversParentTypes['ProductMovementMaxAggregate']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  movement?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  movement?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<QueryProductArgs, 'where'>>;
  products?: Resolver<ResolversTypes['ProductsOutput'], ParentType, ContextType, Partial<QueryProductsArgs>>;
  provider?: Resolver<ResolversTypes['Provider'], ParentType, ContextType, RequireFields<QueryProviderArgs, 'where'>>;
  providers?: Resolver<ResolversTypes['ProvidersOutput'], ParentType, ContextType, Partial<QueryProvidersArgs>>;
  sale?: Resolver<ResolversTypes['Sale'], ParentType, ContextType, RequireFields<QuerySaleArgs, 'where'>>;
  saleItem?: Resolver<ResolversTypes['SaleItem'], ParentType, ContextType, RequireFields<QuerySaleItemArgs, 'where'>>;
  saleItems?: Resolver<ResolversTypes['SaleItemsOutput'], ParentType, ContextType, Partial<QuerySaleItemsArgs>>;
  salePaidCost?: Resolver<ResolversTypes['SalePaidCostOutput'], ParentType, ContextType, Partial<QuerySalePaidCostArgs>>;
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
  ProductMovement?: Resolver<Maybe<Array<ResolversTypes['ProductMovement']>>, ParentType, ContextType>;
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
  ProductMovement?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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

export type SalePaidCostResolvers<ContextType = any, ParentType extends ResolversParentTypes['SalePaidCost'] = ResolversParentTypes['SalePaidCost']> = {
  _count?: Resolver<ResolversTypes['SalePaidCostCount'], ParentType, ContextType>;
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  paidValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalePaidCostAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SalePaidCostAvgAggregate'] = ResolversParentTypes['SalePaidCostAvgAggregate']> = {
  paidValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalePaidCostCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['SalePaidCostCount'] = ResolversParentTypes['SalePaidCostCount']> = {
  SaleItem?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalePaidCostCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SalePaidCostCountAggregate'] = ResolversParentTypes['SalePaidCostCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blameUserId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  paidValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalePaidCostMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SalePaidCostMaxAggregate'] = ResolversParentTypes['SalePaidCostMaxAggregate']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paidValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalePaidCostMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SalePaidCostMinAggregate'] = ResolversParentTypes['SalePaidCostMinAggregate']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paidValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalePaidCostOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['SalePaidCostOutput'] = ResolversParentTypes['SalePaidCostOutput']> = {
  nodes?: Resolver<Array<ResolversTypes['SalePaidCost']>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['SalePaidCostPaginated']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalePaidCostPaginatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['SalePaidCostPaginated'] = ResolversParentTypes['SalePaidCostPaginated']> = {
  currentPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SalePaidCostSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SalePaidCostSumAggregate'] = ResolversParentTypes['SalePaidCostSumAggregate']> = {
  paidValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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
  ProductMovement?: Resolver<Maybe<Array<ResolversTypes['ProductMovement']>>, ParentType, ContextType>;
  _count?: Resolver<ResolversTypes['UserCount'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCount'] = ResolversParentTypes['UserCount']> = {
  ProductMovement?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  SalePaidCost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductAvgAggregate?: ProductAvgAggregateResolvers<ContextType>;
  ProductCount?: ProductCountResolvers<ContextType>;
  ProductCountAggregate?: ProductCountAggregateResolvers<ContextType>;
  ProductMaxAggregate?: ProductMaxAggregateResolvers<ContextType>;
  ProductMinAggregate?: ProductMinAggregateResolvers<ContextType>;
  ProductMovement?: ProductMovementResolvers<ContextType>;
  ProductMovementAvgAggregate?: ProductMovementAvgAggregateResolvers<ContextType>;
  ProductMovementCountAggregate?: ProductMovementCountAggregateResolvers<ContextType>;
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
  SalePaidCost?: SalePaidCostResolvers<ContextType>;
  SalePaidCostAvgAggregate?: SalePaidCostAvgAggregateResolvers<ContextType>;
  SalePaidCostCount?: SalePaidCostCountResolvers<ContextType>;
  SalePaidCostCountAggregate?: SalePaidCostCountAggregateResolvers<ContextType>;
  SalePaidCostMaxAggregate?: SalePaidCostMaxAggregateResolvers<ContextType>;
  SalePaidCostMinAggregate?: SalePaidCostMinAggregateResolvers<ContextType>;
  SalePaidCostOutput?: SalePaidCostOutputResolvers<ContextType>;
  SalePaidCostPaginated?: SalePaidCostPaginatedResolvers<ContextType>;
  SalePaidCostSumAggregate?: SalePaidCostSumAggregateResolvers<ContextType>;
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

