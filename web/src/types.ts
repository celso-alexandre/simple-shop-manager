import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: Product;
  createProducts: Scalars['Boolean'];
  createProvider: Provider;
  createProviders: Scalars['Boolean'];
  createSale: Sale;
  createSales: Scalars['Boolean'];
  createUser: User;
  createUsers: Scalars['Boolean'];
  deleteProduct: Product;
  deleteProvider: Provider;
  deleteSale: Sale;
  deleteUser: User;
  updateProduct: Product;
  updateProvider: Provider;
  updateSale: Sale;
  updateUser: User;
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
  data: SaleCreateInput;
};


export type MutationCreateSalesArgs = {
  data: Array<SaleCreateManyInput>;
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
  data: SaleUpdateInput;
  where: SaleWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
  unset?: InputMaybe<Scalars['Boolean']>;
};

export type Product = {
  __typename?: 'Product';
  _count: ProductCount;
  /** FK: User.id - User to blame for */
  blameUserId: Scalars['String'];
  /** Brand name */
  brandName?: Maybe<Scalars['String']>;
  /** Cost value */
  costValue: Scalars['Int'];
  /** ID */
  id: Scalars['ID'];
  /** Cost is post paid? (consigned) */
  isPostPaid: Scalars['Boolean'];
  /** Name */
  name: Scalars['String'];
  /** Retail price */
  priceValue: Scalars['Int'];
  /** FK: Provider.id */
  providerId?: Maybe<Scalars['String']>;
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  costValue?: Maybe<Scalars['Float']>;
  priceValue?: Maybe<Scalars['Float']>;
};

export type ProductCount = {
  __typename?: 'ProductCount';
  sales: Scalars['Int'];
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  _all: Scalars['Int'];
  blameUserId: Scalars['Int'];
  brandName: Scalars['Int'];
  costValue: Scalars['Int'];
  id: Scalars['Int'];
  isPostPaid: Scalars['Int'];
  name: Scalars['Int'];
  priceValue: Scalars['Int'];
  providerId: Scalars['Int'];
};

export type ProductCreateInput = {
  blameUser: UserCreateNestedOneWithoutProductInput;
  brandName?: InputMaybe<Scalars['String']>;
  costValue: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  isPostPaid: Scalars['Boolean'];
  name: Scalars['String'];
  priceValue: Scalars['Int'];
  provider?: InputMaybe<ProviderCreateNestedOneWithoutProductInput>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutProductInput>;
};

export type ProductCreateManyBlameUserInput = {
  brandName?: InputMaybe<Scalars['String']>;
  costValue: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  isPostPaid: Scalars['Boolean'];
  name: Scalars['String'];
  priceValue: Scalars['Int'];
  providerId?: InputMaybe<Scalars['String']>;
};

export type ProductCreateManyBlameUserInputEnvelope = {
  data: Array<ProductCreateManyBlameUserInput>;
};

export type ProductCreateManyInput = {
  blameUserId: Scalars['String'];
  brandName?: InputMaybe<Scalars['String']>;
  costValue: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  isPostPaid: Scalars['Boolean'];
  name: Scalars['String'];
  priceValue: Scalars['Int'];
  providerId?: InputMaybe<Scalars['String']>;
};

export type ProductCreateManyProviderInput = {
  blameUserId: Scalars['String'];
  brandName?: InputMaybe<Scalars['String']>;
  costValue: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  isPostPaid: Scalars['Boolean'];
  name: Scalars['String'];
  priceValue: Scalars['Int'];
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

export type ProductCreateNestedOneWithoutSalesInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutSalesInput>;
  create?: InputMaybe<ProductCreateWithoutSalesInput>;
};

export type ProductCreateOrConnectWithoutBlameUserInput = {
  create: ProductCreateWithoutBlameUserInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutProviderInput = {
  create: ProductCreateWithoutProviderInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutSalesInput = {
  create: ProductCreateWithoutSalesInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutBlameUserInput = {
  brandName?: InputMaybe<Scalars['String']>;
  costValue: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  isPostPaid: Scalars['Boolean'];
  name: Scalars['String'];
  priceValue: Scalars['Int'];
  provider?: InputMaybe<ProviderCreateNestedOneWithoutProductInput>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutProviderInput = {
  blameUser: UserCreateNestedOneWithoutProductInput;
  brandName?: InputMaybe<Scalars['String']>;
  costValue: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  isPostPaid: Scalars['Boolean'];
  name: Scalars['String'];
  priceValue: Scalars['Int'];
  sales?: InputMaybe<SaleCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutSalesInput = {
  blameUser: UserCreateNestedOneWithoutProductInput;
  brandName?: InputMaybe<Scalars['String']>;
  costValue: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  isPostPaid: Scalars['Boolean'];
  name: Scalars['String'];
  priceValue: Scalars['Int'];
  provider?: InputMaybe<ProviderCreateNestedOneWithoutProductInput>;
};

export type ProductListRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  blameUserId?: Maybe<Scalars['String']>;
  brandName?: Maybe<Scalars['String']>;
  costValue?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  isPostPaid?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  priceValue?: Maybe<Scalars['Int']>;
  providerId?: Maybe<Scalars['String']>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  blameUserId?: Maybe<Scalars['String']>;
  brandName?: Maybe<Scalars['String']>;
  costValue?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  isPostPaid?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  priceValue?: Maybe<Scalars['Int']>;
  providerId?: Maybe<Scalars['String']>;
};

export type ProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  blameUser?: InputMaybe<UserOrderByWithRelationInput>;
  blameUserId?: InputMaybe<SortOrder>;
  brandName?: InputMaybe<SortOrder>;
  costValue?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPostPaid?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  priceValue?: InputMaybe<SortOrder>;
  provider?: InputMaybe<ProviderOrderByWithRelationInput>;
  providerId?: InputMaybe<SortOrder>;
  sales?: InputMaybe<SaleOrderByRelationAggregateInput>;
};

export type ProductRelationFilter = {
  is?: InputMaybe<ProductWhereInput>;
  isNot?: InputMaybe<ProductWhereInput>;
};

export enum ProductScalarFieldEnum {
  BlameUserId = 'blameUserId',
  BrandName = 'brandName',
  CostValue = 'costValue',
  Id = 'id',
  IsPostPaid = 'isPostPaid',
  Name = 'name',
  PriceValue = 'priceValue',
  ProviderId = 'providerId'
}

export type ProductScalarWhereInput = {
  AND?: InputMaybe<Array<ProductScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereInput>>;
  blameUserId?: InputMaybe<StringFilter>;
  brandName?: InputMaybe<StringNullableFilter>;
  costValue?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  isPostPaid?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  priceValue?: InputMaybe<IntFilter>;
  providerId?: InputMaybe<StringNullableFilter>;
};

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  costValue?: Maybe<Scalars['Int']>;
  priceValue?: Maybe<Scalars['Int']>;
};

export type ProductUpdateInput = {
  blameUser?: InputMaybe<UserUpdateOneRequiredWithoutProductNestedInput>;
  brandName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  costValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  isPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutProductNestedInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutProductNestedInput>;
};

export type ProductUpdateManyMutationInput = {
  brandName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  costValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  isPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceValue?: InputMaybe<IntFieldUpdateOperationsInput>;
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

export type ProductUpdateOneRequiredWithoutSalesNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutSalesInput>;
  create?: InputMaybe<ProductCreateWithoutSalesInput>;
  update?: InputMaybe<ProductUpdateWithoutSalesInput>;
  upsert?: InputMaybe<ProductUpsertWithoutSalesInput>;
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
  brandName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  costValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  isPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutProductNestedInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutProductNestedInput>;
};

export type ProductUpdateWithoutProviderInput = {
  blameUser?: InputMaybe<UserUpdateOneRequiredWithoutProductNestedInput>;
  brandName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  costValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  isPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutProductNestedInput>;
};

export type ProductUpdateWithoutSalesInput = {
  blameUser?: InputMaybe<UserUpdateOneRequiredWithoutProductNestedInput>;
  brandName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  costValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  isPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutProductNestedInput>;
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

export type ProductUpsertWithoutSalesInput = {
  create: ProductCreateWithoutSalesInput;
  update: ProductUpdateWithoutSalesInput;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  blameUser?: InputMaybe<UserRelationFilter>;
  blameUserId?: InputMaybe<StringFilter>;
  brandName?: InputMaybe<StringNullableFilter>;
  costValue?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  isPostPaid?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  priceValue?: InputMaybe<IntFilter>;
  provider?: InputMaybe<ProviderRelationFilter>;
  providerId?: InputMaybe<StringNullableFilter>;
  sales?: InputMaybe<SaleListRelationFilter>;
};

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Provider = {
  __typename?: 'Provider';
  _count: ProviderCount;
  /** FK: User.id - User to blame for */
  blameUserId: Scalars['String'];
  /** Document */
  document?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** ID */
  id: Scalars['ID'];
  /** Name */
  name: Scalars['String'];
  /** Whatsapp */
  whatsapp?: Maybe<Scalars['String']>;
};

export type ProviderCount = {
  __typename?: 'ProviderCount';
  Product: Scalars['Int'];
  Sale: Scalars['Int'];
};

export type ProviderCountAggregate = {
  __typename?: 'ProviderCountAggregate';
  _all: Scalars['Int'];
  blameUserId: Scalars['Int'];
  document: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  whatsapp: Scalars['Int'];
};

export type ProviderCreateInput = {
  Product?: InputMaybe<ProductCreateNestedManyWithoutProviderInput>;
  Sale?: InputMaybe<SaleCreateNestedManyWithoutProviderInput>;
  blameUser: UserCreateNestedOneWithoutProviderInput;
  document?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  whatsapp?: InputMaybe<Scalars['String']>;
};

export type ProviderCreateManyBlameUserInput = {
  document?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  whatsapp?: InputMaybe<Scalars['String']>;
};

export type ProviderCreateManyBlameUserInputEnvelope = {
  data: Array<ProviderCreateManyBlameUserInput>;
};

export type ProviderCreateManyInput = {
  blameUserId: Scalars['String'];
  document?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  whatsapp?: InputMaybe<Scalars['String']>;
};

export type ProviderCreateNestedManyWithoutBlameUserInput = {
  connect?: InputMaybe<Array<ProviderWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProviderCreateOrConnectWithoutBlameUserInput>>;
  create?: InputMaybe<Array<ProviderCreateWithoutBlameUserInput>>;
  createMany?: InputMaybe<ProviderCreateManyBlameUserInputEnvelope>;
};

export type ProviderCreateNestedOneWithoutProductInput = {
  connect?: InputMaybe<ProviderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProviderCreateOrConnectWithoutProductInput>;
  create?: InputMaybe<ProviderCreateWithoutProductInput>;
};

export type ProviderCreateNestedOneWithoutSaleInput = {
  connect?: InputMaybe<ProviderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProviderCreateOrConnectWithoutSaleInput>;
  create?: InputMaybe<ProviderCreateWithoutSaleInput>;
};

export type ProviderCreateOrConnectWithoutBlameUserInput = {
  create: ProviderCreateWithoutBlameUserInput;
  where: ProviderWhereUniqueInput;
};

export type ProviderCreateOrConnectWithoutProductInput = {
  create: ProviderCreateWithoutProductInput;
  where: ProviderWhereUniqueInput;
};

export type ProviderCreateOrConnectWithoutSaleInput = {
  create: ProviderCreateWithoutSaleInput;
  where: ProviderWhereUniqueInput;
};

export type ProviderCreateWithoutBlameUserInput = {
  Product?: InputMaybe<ProductCreateNestedManyWithoutProviderInput>;
  Sale?: InputMaybe<SaleCreateNestedManyWithoutProviderInput>;
  document?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  whatsapp?: InputMaybe<Scalars['String']>;
};

export type ProviderCreateWithoutProductInput = {
  Sale?: InputMaybe<SaleCreateNestedManyWithoutProviderInput>;
  blameUser: UserCreateNestedOneWithoutProviderInput;
  document?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  whatsapp?: InputMaybe<Scalars['String']>;
};

export type ProviderCreateWithoutSaleInput = {
  Product?: InputMaybe<ProductCreateNestedManyWithoutProviderInput>;
  blameUser: UserCreateNestedOneWithoutProviderInput;
  document?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  whatsapp?: InputMaybe<Scalars['String']>;
};

export type ProviderListRelationFilter = {
  every?: InputMaybe<ProviderWhereInput>;
  none?: InputMaybe<ProviderWhereInput>;
  some?: InputMaybe<ProviderWhereInput>;
};

export type ProviderMaxAggregate = {
  __typename?: 'ProviderMaxAggregate';
  blameUserId?: Maybe<Scalars['String']>;
  document?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  whatsapp?: Maybe<Scalars['String']>;
};

export type ProviderMinAggregate = {
  __typename?: 'ProviderMinAggregate';
  blameUserId?: Maybe<Scalars['String']>;
  document?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  whatsapp?: Maybe<Scalars['String']>;
};

export type ProviderOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProviderOrderByWithRelationInput = {
  Product?: InputMaybe<ProductOrderByRelationAggregateInput>;
  Sale?: InputMaybe<SaleOrderByRelationAggregateInput>;
  blameUser?: InputMaybe<UserOrderByWithRelationInput>;
  blameUserId?: InputMaybe<SortOrder>;
  document?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  whatsapp?: InputMaybe<SortOrder>;
};

export type ProviderRelationFilter = {
  is?: InputMaybe<ProviderWhereInput>;
  isNot?: InputMaybe<ProviderWhereInput>;
};

export enum ProviderScalarFieldEnum {
  BlameUserId = 'blameUserId',
  Document = 'document',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Whatsapp = 'whatsapp'
}

export type ProviderScalarWhereInput = {
  AND?: InputMaybe<Array<ProviderScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProviderScalarWhereInput>>;
  OR?: InputMaybe<Array<ProviderScalarWhereInput>>;
  blameUserId?: InputMaybe<StringFilter>;
  document?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  whatsapp?: InputMaybe<StringNullableFilter>;
};

export type ProviderUpdateInput = {
  Product?: InputMaybe<ProductUpdateManyWithoutProviderNestedInput>;
  Sale?: InputMaybe<SaleUpdateManyWithoutProviderNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneRequiredWithoutProviderNestedInput>;
  document?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
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

export type ProviderUpdateOneWithoutProductNestedInput = {
  connect?: InputMaybe<ProviderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProviderCreateOrConnectWithoutProductInput>;
  create?: InputMaybe<ProviderCreateWithoutProductInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ProviderUpdateWithoutProductInput>;
  upsert?: InputMaybe<ProviderUpsertWithoutProductInput>;
};

export type ProviderUpdateOneWithoutSaleNestedInput = {
  connect?: InputMaybe<ProviderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProviderCreateOrConnectWithoutSaleInput>;
  create?: InputMaybe<ProviderCreateWithoutSaleInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ProviderUpdateWithoutSaleInput>;
  upsert?: InputMaybe<ProviderUpsertWithoutSaleInput>;
};

export type ProviderUpdateWithWhereUniqueWithoutBlameUserInput = {
  data: ProviderUpdateWithoutBlameUserInput;
  where: ProviderWhereUniqueInput;
};

export type ProviderUpdateWithoutBlameUserInput = {
  Product?: InputMaybe<ProductUpdateManyWithoutProviderNestedInput>;
  Sale?: InputMaybe<SaleUpdateManyWithoutProviderNestedInput>;
  document?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  whatsapp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProviderUpdateWithoutProductInput = {
  Sale?: InputMaybe<SaleUpdateManyWithoutProviderNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneRequiredWithoutProviderNestedInput>;
  document?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  whatsapp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProviderUpdateWithoutSaleInput = {
  Product?: InputMaybe<ProductUpdateManyWithoutProviderNestedInput>;
  blameUser?: InputMaybe<UserUpdateOneRequiredWithoutProviderNestedInput>;
  document?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  whatsapp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProviderUpsertWithWhereUniqueWithoutBlameUserInput = {
  create: ProviderCreateWithoutBlameUserInput;
  update: ProviderUpdateWithoutBlameUserInput;
  where: ProviderWhereUniqueInput;
};

export type ProviderUpsertWithoutProductInput = {
  create: ProviderCreateWithoutProductInput;
  update: ProviderUpdateWithoutProductInput;
};

export type ProviderUpsertWithoutSaleInput = {
  create: ProviderCreateWithoutSaleInput;
  update: ProviderUpdateWithoutSaleInput;
};

export type ProviderWhereInput = {
  AND?: InputMaybe<Array<ProviderWhereInput>>;
  NOT?: InputMaybe<Array<ProviderWhereInput>>;
  OR?: InputMaybe<Array<ProviderWhereInput>>;
  Product?: InputMaybe<ProductListRelationFilter>;
  Sale?: InputMaybe<SaleListRelationFilter>;
  blameUser?: InputMaybe<UserRelationFilter>;
  blameUserId?: InputMaybe<StringFilter>;
  document?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  whatsapp?: InputMaybe<StringNullableFilter>;
};

export type ProviderWhereUniqueInput = {
  document?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  product: Product;
  products: Array<Product>;
  provider: Provider;
  providers: Array<Provider>;
  sale: Sale;
  sales: Array<Sale>;
  user: User;
  users: Array<User>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryProviderArgs = {
  where: ProviderWhereUniqueInput;
};


export type QueryProvidersArgs = {
  cursor?: InputMaybe<ProviderWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProviderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProviderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProviderWhereInput>;
};


export type QuerySaleArgs = {
  where: SaleWhereUniqueInput;
};


export type QuerySalesArgs = {
  cursor?: InputMaybe<SaleWhereUniqueInput>;
  distinct?: InputMaybe<Array<SaleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SaleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SaleWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Sale = {
  __typename?: 'Sale';
  /** FK: User.id - User to blame for */
  blameUserId: Scalars['String'];
  /** Cost value (the same from Product.costValue) */
  costValue: Scalars['Int'];
  /** Date Time */
  date: Scalars['DateTime'];
  /** ID */
  id: Scalars['ID'];
  /** isPostPaid (usually the same as Product.isPostPaid) */
  isPostPaid: Scalars['Boolean'];
  /** Sold Price (usually the same as Product.priceValue) */
  priceValue: Scalars['Int'];
  /** FK: Product.id */
  productId: Scalars['String'];
  /** Provider (usually the same as Product.providerId) */
  providerId?: Maybe<Scalars['String']>;
};

export type SaleAvgAggregate = {
  __typename?: 'SaleAvgAggregate';
  costValue?: Maybe<Scalars['Float']>;
  priceValue?: Maybe<Scalars['Float']>;
};

export type SaleCountAggregate = {
  __typename?: 'SaleCountAggregate';
  _all: Scalars['Int'];
  blameUserId: Scalars['Int'];
  costValue: Scalars['Int'];
  date: Scalars['Int'];
  id: Scalars['Int'];
  isPostPaid: Scalars['Int'];
  priceValue: Scalars['Int'];
  productId: Scalars['Int'];
  providerId: Scalars['Int'];
};

export type SaleCreateInput = {
  blameUser: UserCreateNestedOneWithoutSaleInput;
  costValue: Scalars['Int'];
  date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  isPostPaid: Scalars['Boolean'];
  priceValue: Scalars['Int'];
  product: ProductCreateNestedOneWithoutSalesInput;
  provider?: InputMaybe<ProviderCreateNestedOneWithoutSaleInput>;
};

export type SaleCreateManyBlameUserInput = {
  costValue: Scalars['Int'];
  date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  isPostPaid: Scalars['Boolean'];
  priceValue: Scalars['Int'];
  productId: Scalars['String'];
  providerId?: InputMaybe<Scalars['String']>;
};

export type SaleCreateManyBlameUserInputEnvelope = {
  data: Array<SaleCreateManyBlameUserInput>;
};

export type SaleCreateManyInput = {
  blameUserId: Scalars['String'];
  costValue: Scalars['Int'];
  date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  isPostPaid: Scalars['Boolean'];
  priceValue: Scalars['Int'];
  productId: Scalars['String'];
  providerId?: InputMaybe<Scalars['String']>;
};

export type SaleCreateManyProductInput = {
  blameUserId: Scalars['String'];
  costValue: Scalars['Int'];
  date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  isPostPaid: Scalars['Boolean'];
  priceValue: Scalars['Int'];
  providerId?: InputMaybe<Scalars['String']>;
};

export type SaleCreateManyProductInputEnvelope = {
  data: Array<SaleCreateManyProductInput>;
};

export type SaleCreateManyProviderInput = {
  blameUserId: Scalars['String'];
  costValue: Scalars['Int'];
  date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  isPostPaid: Scalars['Boolean'];
  priceValue: Scalars['Int'];
  productId: Scalars['String'];
};

export type SaleCreateManyProviderInputEnvelope = {
  data: Array<SaleCreateManyProviderInput>;
};

export type SaleCreateNestedManyWithoutBlameUserInput = {
  connect?: InputMaybe<Array<SaleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SaleCreateOrConnectWithoutBlameUserInput>>;
  create?: InputMaybe<Array<SaleCreateWithoutBlameUserInput>>;
  createMany?: InputMaybe<SaleCreateManyBlameUserInputEnvelope>;
};

export type SaleCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<SaleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SaleCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<SaleCreateWithoutProductInput>>;
  createMany?: InputMaybe<SaleCreateManyProductInputEnvelope>;
};

export type SaleCreateNestedManyWithoutProviderInput = {
  connect?: InputMaybe<Array<SaleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SaleCreateOrConnectWithoutProviderInput>>;
  create?: InputMaybe<Array<SaleCreateWithoutProviderInput>>;
  createMany?: InputMaybe<SaleCreateManyProviderInputEnvelope>;
};

export type SaleCreateOrConnectWithoutBlameUserInput = {
  create: SaleCreateWithoutBlameUserInput;
  where: SaleWhereUniqueInput;
};

export type SaleCreateOrConnectWithoutProductInput = {
  create: SaleCreateWithoutProductInput;
  where: SaleWhereUniqueInput;
};

export type SaleCreateOrConnectWithoutProviderInput = {
  create: SaleCreateWithoutProviderInput;
  where: SaleWhereUniqueInput;
};

export type SaleCreateWithoutBlameUserInput = {
  costValue: Scalars['Int'];
  date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  isPostPaid: Scalars['Boolean'];
  priceValue: Scalars['Int'];
  product: ProductCreateNestedOneWithoutSalesInput;
  provider?: InputMaybe<ProviderCreateNestedOneWithoutSaleInput>;
};

export type SaleCreateWithoutProductInput = {
  blameUser: UserCreateNestedOneWithoutSaleInput;
  costValue: Scalars['Int'];
  date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  isPostPaid: Scalars['Boolean'];
  priceValue: Scalars['Int'];
  provider?: InputMaybe<ProviderCreateNestedOneWithoutSaleInput>;
};

export type SaleCreateWithoutProviderInput = {
  blameUser: UserCreateNestedOneWithoutSaleInput;
  costValue: Scalars['Int'];
  date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  isPostPaid: Scalars['Boolean'];
  priceValue: Scalars['Int'];
  product: ProductCreateNestedOneWithoutSalesInput;
};

export type SaleListRelationFilter = {
  every?: InputMaybe<SaleWhereInput>;
  none?: InputMaybe<SaleWhereInput>;
  some?: InputMaybe<SaleWhereInput>;
};

export type SaleMaxAggregate = {
  __typename?: 'SaleMaxAggregate';
  blameUserId?: Maybe<Scalars['String']>;
  costValue?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  isPostPaid?: Maybe<Scalars['Boolean']>;
  priceValue?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['String']>;
};

export type SaleMinAggregate = {
  __typename?: 'SaleMinAggregate';
  blameUserId?: Maybe<Scalars['String']>;
  costValue?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  isPostPaid?: Maybe<Scalars['Boolean']>;
  priceValue?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['String']>;
};

export type SaleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SaleOrderByWithRelationInput = {
  blameUser?: InputMaybe<UserOrderByWithRelationInput>;
  blameUserId?: InputMaybe<SortOrder>;
  costValue?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPostPaid?: InputMaybe<SortOrder>;
  priceValue?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  provider?: InputMaybe<ProviderOrderByWithRelationInput>;
  providerId?: InputMaybe<SortOrder>;
};

export enum SaleScalarFieldEnum {
  BlameUserId = 'blameUserId',
  CostValue = 'costValue',
  Date = 'date',
  Id = 'id',
  IsPostPaid = 'isPostPaid',
  PriceValue = 'priceValue',
  ProductId = 'productId',
  ProviderId = 'providerId'
}

export type SaleScalarWhereInput = {
  AND?: InputMaybe<Array<SaleScalarWhereInput>>;
  NOT?: InputMaybe<Array<SaleScalarWhereInput>>;
  OR?: InputMaybe<Array<SaleScalarWhereInput>>;
  blameUserId?: InputMaybe<StringFilter>;
  costValue?: InputMaybe<IntFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isPostPaid?: InputMaybe<BoolFilter>;
  priceValue?: InputMaybe<IntFilter>;
  productId?: InputMaybe<StringFilter>;
  providerId?: InputMaybe<StringNullableFilter>;
};

export type SaleSumAggregate = {
  __typename?: 'SaleSumAggregate';
  costValue?: Maybe<Scalars['Int']>;
  priceValue?: Maybe<Scalars['Int']>;
};

export type SaleUpdateInput = {
  blameUser?: InputMaybe<UserUpdateOneRequiredWithoutSaleNestedInput>;
  costValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  isPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  priceValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutSalesNestedInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutSaleNestedInput>;
};

export type SaleUpdateManyMutationInput = {
  costValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  isPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  priceValue?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SaleUpdateManyWithWhereWithoutBlameUserInput = {
  data: SaleUpdateManyMutationInput;
  where: SaleScalarWhereInput;
};

export type SaleUpdateManyWithWhereWithoutProductInput = {
  data: SaleUpdateManyMutationInput;
  where: SaleScalarWhereInput;
};

export type SaleUpdateManyWithWhereWithoutProviderInput = {
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

export type SaleUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<SaleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SaleCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<SaleCreateWithoutProductInput>>;
  createMany?: InputMaybe<SaleCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<SaleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SaleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SaleWhereUniqueInput>>;
  set?: InputMaybe<Array<SaleWhereUniqueInput>>;
  update?: InputMaybe<Array<SaleUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<SaleUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<SaleUpsertWithWhereUniqueWithoutProductInput>>;
};

export type SaleUpdateManyWithoutProviderNestedInput = {
  connect?: InputMaybe<Array<SaleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SaleCreateOrConnectWithoutProviderInput>>;
  create?: InputMaybe<Array<SaleCreateWithoutProviderInput>>;
  createMany?: InputMaybe<SaleCreateManyProviderInputEnvelope>;
  delete?: InputMaybe<Array<SaleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SaleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SaleWhereUniqueInput>>;
  set?: InputMaybe<Array<SaleWhereUniqueInput>>;
  update?: InputMaybe<Array<SaleUpdateWithWhereUniqueWithoutProviderInput>>;
  updateMany?: InputMaybe<Array<SaleUpdateManyWithWhereWithoutProviderInput>>;
  upsert?: InputMaybe<Array<SaleUpsertWithWhereUniqueWithoutProviderInput>>;
};

export type SaleUpdateWithWhereUniqueWithoutBlameUserInput = {
  data: SaleUpdateWithoutBlameUserInput;
  where: SaleWhereUniqueInput;
};

export type SaleUpdateWithWhereUniqueWithoutProductInput = {
  data: SaleUpdateWithoutProductInput;
  where: SaleWhereUniqueInput;
};

export type SaleUpdateWithWhereUniqueWithoutProviderInput = {
  data: SaleUpdateWithoutProviderInput;
  where: SaleWhereUniqueInput;
};

export type SaleUpdateWithoutBlameUserInput = {
  costValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  isPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  priceValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutSalesNestedInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutSaleNestedInput>;
};

export type SaleUpdateWithoutProductInput = {
  blameUser?: InputMaybe<UserUpdateOneRequiredWithoutSaleNestedInput>;
  costValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  isPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  priceValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutSaleNestedInput>;
};

export type SaleUpdateWithoutProviderInput = {
  blameUser?: InputMaybe<UserUpdateOneRequiredWithoutSaleNestedInput>;
  costValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  isPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  priceValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutSalesNestedInput>;
};

export type SaleUpsertWithWhereUniqueWithoutBlameUserInput = {
  create: SaleCreateWithoutBlameUserInput;
  update: SaleUpdateWithoutBlameUserInput;
  where: SaleWhereUniqueInput;
};

export type SaleUpsertWithWhereUniqueWithoutProductInput = {
  create: SaleCreateWithoutProductInput;
  update: SaleUpdateWithoutProductInput;
  where: SaleWhereUniqueInput;
};

export type SaleUpsertWithWhereUniqueWithoutProviderInput = {
  create: SaleCreateWithoutProviderInput;
  update: SaleUpdateWithoutProviderInput;
  where: SaleWhereUniqueInput;
};

export type SaleWhereInput = {
  AND?: InputMaybe<Array<SaleWhereInput>>;
  NOT?: InputMaybe<Array<SaleWhereInput>>;
  OR?: InputMaybe<Array<SaleWhereInput>>;
  blameUser?: InputMaybe<UserRelationFilter>;
  blameUserId?: InputMaybe<StringFilter>;
  costValue?: InputMaybe<IntFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isPostPaid?: InputMaybe<BoolFilter>;
  priceValue?: InputMaybe<IntFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  provider?: InputMaybe<ProviderRelationFilter>;
  providerId?: InputMaybe<StringNullableFilter>;
};

export type SaleWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  email: Scalars['String'];
  /** ID */
  id: Scalars['ID'];
  /** Name */
  name: Scalars['String'];
};

export type UserCount = {
  __typename?: 'UserCount';
  Product: Scalars['Int'];
  Provider: Scalars['Int'];
  Sale: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type UserCreateInput = {
  Product?: InputMaybe<ProductCreateNestedManyWithoutBlameUserInput>;
  Provider?: InputMaybe<ProviderCreateNestedManyWithoutBlameUserInput>;
  Sale?: InputMaybe<SaleCreateNestedManyWithoutBlameUserInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type UserCreateManyInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type UserCreateNestedOneWithoutProductInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductInput>;
  create?: InputMaybe<UserCreateWithoutProductInput>;
};

export type UserCreateNestedOneWithoutProviderInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProviderInput>;
  create?: InputMaybe<UserCreateWithoutProviderInput>;
};

export type UserCreateNestedOneWithoutSaleInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSaleInput>;
  create?: InputMaybe<UserCreateWithoutSaleInput>;
};

export type UserCreateOrConnectWithoutProductInput = {
  create: UserCreateWithoutProductInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProviderInput = {
  create: UserCreateWithoutProviderInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSaleInput = {
  create: UserCreateWithoutSaleInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutProductInput = {
  Provider?: InputMaybe<ProviderCreateNestedManyWithoutBlameUserInput>;
  Sale?: InputMaybe<SaleCreateNestedManyWithoutBlameUserInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type UserCreateWithoutProviderInput = {
  Product?: InputMaybe<ProductCreateNestedManyWithoutBlameUserInput>;
  Sale?: InputMaybe<SaleCreateNestedManyWithoutBlameUserInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type UserCreateWithoutSaleInput = {
  Product?: InputMaybe<ProductCreateNestedManyWithoutBlameUserInput>;
  Provider?: InputMaybe<ProviderCreateNestedManyWithoutBlameUserInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserOrderByWithRelationInput = {
  Product?: InputMaybe<ProductOrderByRelationAggregateInput>;
  Provider?: InputMaybe<ProviderOrderByRelationAggregateInput>;
  Sale?: InputMaybe<SaleOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Email = 'email',
  Id = 'id',
  Name = 'name'
}

export type UserUpdateInput = {
  Product?: InputMaybe<ProductUpdateManyWithoutBlameUserNestedInput>;
  Provider?: InputMaybe<ProviderUpdateManyWithoutBlameUserNestedInput>;
  Sale?: InputMaybe<SaleUpdateManyWithoutBlameUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutProductNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductInput>;
  create?: InputMaybe<UserCreateWithoutProductInput>;
  update?: InputMaybe<UserUpdateWithoutProductInput>;
  upsert?: InputMaybe<UserUpsertWithoutProductInput>;
};

export type UserUpdateOneRequiredWithoutProviderNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProviderInput>;
  create?: InputMaybe<UserCreateWithoutProviderInput>;
  update?: InputMaybe<UserUpdateWithoutProviderInput>;
  upsert?: InputMaybe<UserUpsertWithoutProviderInput>;
};

export type UserUpdateOneRequiredWithoutSaleNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSaleInput>;
  create?: InputMaybe<UserCreateWithoutSaleInput>;
  update?: InputMaybe<UserUpdateWithoutSaleInput>;
  upsert?: InputMaybe<UserUpsertWithoutSaleInput>;
};

export type UserUpdateWithoutProductInput = {
  Provider?: InputMaybe<ProviderUpdateManyWithoutBlameUserNestedInput>;
  Sale?: InputMaybe<SaleUpdateManyWithoutBlameUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutProviderInput = {
  Product?: InputMaybe<ProductUpdateManyWithoutBlameUserNestedInput>;
  Sale?: InputMaybe<SaleUpdateManyWithoutBlameUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSaleInput = {
  Product?: InputMaybe<ProductUpdateManyWithoutBlameUserNestedInput>;
  Provider?: InputMaybe<ProviderUpdateManyWithoutBlameUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutProductInput = {
  create: UserCreateWithoutProductInput;
  update: UserUpdateWithoutProductInput;
};

export type UserUpsertWithoutProviderInput = {
  create: UserCreateWithoutProviderInput;
  update: UserUpdateWithoutProviderInput;
};

export type UserUpsertWithoutSaleInput = {
  create: UserCreateWithoutSaleInput;
  update: UserUpdateWithoutSaleInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  Product?: InputMaybe<ProductListRelationFilter>;
  Provider?: InputMaybe<ProviderListRelationFilter>;
  Sale?: InputMaybe<SaleListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  IntFilter: IntFilter;
  Mutation: ResolverTypeWrapper<{}>;
  NestedBoolFilter: NestedBoolFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
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
  ProductCreateNestedOneWithoutSalesInput: ProductCreateNestedOneWithoutSalesInput;
  ProductCreateOrConnectWithoutBlameUserInput: ProductCreateOrConnectWithoutBlameUserInput;
  ProductCreateOrConnectWithoutProviderInput: ProductCreateOrConnectWithoutProviderInput;
  ProductCreateOrConnectWithoutSalesInput: ProductCreateOrConnectWithoutSalesInput;
  ProductCreateWithoutBlameUserInput: ProductCreateWithoutBlameUserInput;
  ProductCreateWithoutProviderInput: ProductCreateWithoutProviderInput;
  ProductCreateWithoutSalesInput: ProductCreateWithoutSalesInput;
  ProductListRelationFilter: ProductListRelationFilter;
  ProductMaxAggregate: ResolverTypeWrapper<ProductMaxAggregate>;
  ProductMinAggregate: ResolverTypeWrapper<ProductMinAggregate>;
  ProductOrderByRelationAggregateInput: ProductOrderByRelationAggregateInput;
  ProductOrderByWithRelationInput: ProductOrderByWithRelationInput;
  ProductRelationFilter: ProductRelationFilter;
  ProductScalarFieldEnum: ProductScalarFieldEnum;
  ProductScalarWhereInput: ProductScalarWhereInput;
  ProductSumAggregate: ResolverTypeWrapper<ProductSumAggregate>;
  ProductUpdateInput: ProductUpdateInput;
  ProductUpdateManyMutationInput: ProductUpdateManyMutationInput;
  ProductUpdateManyWithWhereWithoutBlameUserInput: ProductUpdateManyWithWhereWithoutBlameUserInput;
  ProductUpdateManyWithWhereWithoutProviderInput: ProductUpdateManyWithWhereWithoutProviderInput;
  ProductUpdateManyWithoutBlameUserNestedInput: ProductUpdateManyWithoutBlameUserNestedInput;
  ProductUpdateManyWithoutProviderNestedInput: ProductUpdateManyWithoutProviderNestedInput;
  ProductUpdateOneRequiredWithoutSalesNestedInput: ProductUpdateOneRequiredWithoutSalesNestedInput;
  ProductUpdateWithWhereUniqueWithoutBlameUserInput: ProductUpdateWithWhereUniqueWithoutBlameUserInput;
  ProductUpdateWithWhereUniqueWithoutProviderInput: ProductUpdateWithWhereUniqueWithoutProviderInput;
  ProductUpdateWithoutBlameUserInput: ProductUpdateWithoutBlameUserInput;
  ProductUpdateWithoutProviderInput: ProductUpdateWithoutProviderInput;
  ProductUpdateWithoutSalesInput: ProductUpdateWithoutSalesInput;
  ProductUpsertWithWhereUniqueWithoutBlameUserInput: ProductUpsertWithWhereUniqueWithoutBlameUserInput;
  ProductUpsertWithWhereUniqueWithoutProviderInput: ProductUpsertWithWhereUniqueWithoutProviderInput;
  ProductUpsertWithoutSalesInput: ProductUpsertWithoutSalesInput;
  ProductWhereInput: ProductWhereInput;
  ProductWhereUniqueInput: ProductWhereUniqueInput;
  Provider: ResolverTypeWrapper<Provider>;
  ProviderCount: ResolverTypeWrapper<ProviderCount>;
  ProviderCountAggregate: ResolverTypeWrapper<ProviderCountAggregate>;
  ProviderCreateInput: ProviderCreateInput;
  ProviderCreateManyBlameUserInput: ProviderCreateManyBlameUserInput;
  ProviderCreateManyBlameUserInputEnvelope: ProviderCreateManyBlameUserInputEnvelope;
  ProviderCreateManyInput: ProviderCreateManyInput;
  ProviderCreateNestedManyWithoutBlameUserInput: ProviderCreateNestedManyWithoutBlameUserInput;
  ProviderCreateNestedOneWithoutProductInput: ProviderCreateNestedOneWithoutProductInput;
  ProviderCreateNestedOneWithoutSaleInput: ProviderCreateNestedOneWithoutSaleInput;
  ProviderCreateOrConnectWithoutBlameUserInput: ProviderCreateOrConnectWithoutBlameUserInput;
  ProviderCreateOrConnectWithoutProductInput: ProviderCreateOrConnectWithoutProductInput;
  ProviderCreateOrConnectWithoutSaleInput: ProviderCreateOrConnectWithoutSaleInput;
  ProviderCreateWithoutBlameUserInput: ProviderCreateWithoutBlameUserInput;
  ProviderCreateWithoutProductInput: ProviderCreateWithoutProductInput;
  ProviderCreateWithoutSaleInput: ProviderCreateWithoutSaleInput;
  ProviderListRelationFilter: ProviderListRelationFilter;
  ProviderMaxAggregate: ResolverTypeWrapper<ProviderMaxAggregate>;
  ProviderMinAggregate: ResolverTypeWrapper<ProviderMinAggregate>;
  ProviderOrderByRelationAggregateInput: ProviderOrderByRelationAggregateInput;
  ProviderOrderByWithRelationInput: ProviderOrderByWithRelationInput;
  ProviderRelationFilter: ProviderRelationFilter;
  ProviderScalarFieldEnum: ProviderScalarFieldEnum;
  ProviderScalarWhereInput: ProviderScalarWhereInput;
  ProviderUpdateInput: ProviderUpdateInput;
  ProviderUpdateManyMutationInput: ProviderUpdateManyMutationInput;
  ProviderUpdateManyWithWhereWithoutBlameUserInput: ProviderUpdateManyWithWhereWithoutBlameUserInput;
  ProviderUpdateManyWithoutBlameUserNestedInput: ProviderUpdateManyWithoutBlameUserNestedInput;
  ProviderUpdateOneWithoutProductNestedInput: ProviderUpdateOneWithoutProductNestedInput;
  ProviderUpdateOneWithoutSaleNestedInput: ProviderUpdateOneWithoutSaleNestedInput;
  ProviderUpdateWithWhereUniqueWithoutBlameUserInput: ProviderUpdateWithWhereUniqueWithoutBlameUserInput;
  ProviderUpdateWithoutBlameUserInput: ProviderUpdateWithoutBlameUserInput;
  ProviderUpdateWithoutProductInput: ProviderUpdateWithoutProductInput;
  ProviderUpdateWithoutSaleInput: ProviderUpdateWithoutSaleInput;
  ProviderUpsertWithWhereUniqueWithoutBlameUserInput: ProviderUpsertWithWhereUniqueWithoutBlameUserInput;
  ProviderUpsertWithoutProductInput: ProviderUpsertWithoutProductInput;
  ProviderUpsertWithoutSaleInput: ProviderUpsertWithoutSaleInput;
  ProviderWhereInput: ProviderWhereInput;
  ProviderWhereUniqueInput: ProviderWhereUniqueInput;
  Query: ResolverTypeWrapper<{}>;
  QueryMode: QueryMode;
  Sale: ResolverTypeWrapper<Sale>;
  SaleAvgAggregate: ResolverTypeWrapper<SaleAvgAggregate>;
  SaleCountAggregate: ResolverTypeWrapper<SaleCountAggregate>;
  SaleCreateInput: SaleCreateInput;
  SaleCreateManyBlameUserInput: SaleCreateManyBlameUserInput;
  SaleCreateManyBlameUserInputEnvelope: SaleCreateManyBlameUserInputEnvelope;
  SaleCreateManyInput: SaleCreateManyInput;
  SaleCreateManyProductInput: SaleCreateManyProductInput;
  SaleCreateManyProductInputEnvelope: SaleCreateManyProductInputEnvelope;
  SaleCreateManyProviderInput: SaleCreateManyProviderInput;
  SaleCreateManyProviderInputEnvelope: SaleCreateManyProviderInputEnvelope;
  SaleCreateNestedManyWithoutBlameUserInput: SaleCreateNestedManyWithoutBlameUserInput;
  SaleCreateNestedManyWithoutProductInput: SaleCreateNestedManyWithoutProductInput;
  SaleCreateNestedManyWithoutProviderInput: SaleCreateNestedManyWithoutProviderInput;
  SaleCreateOrConnectWithoutBlameUserInput: SaleCreateOrConnectWithoutBlameUserInput;
  SaleCreateOrConnectWithoutProductInput: SaleCreateOrConnectWithoutProductInput;
  SaleCreateOrConnectWithoutProviderInput: SaleCreateOrConnectWithoutProviderInput;
  SaleCreateWithoutBlameUserInput: SaleCreateWithoutBlameUserInput;
  SaleCreateWithoutProductInput: SaleCreateWithoutProductInput;
  SaleCreateWithoutProviderInput: SaleCreateWithoutProviderInput;
  SaleListRelationFilter: SaleListRelationFilter;
  SaleMaxAggregate: ResolverTypeWrapper<SaleMaxAggregate>;
  SaleMinAggregate: ResolverTypeWrapper<SaleMinAggregate>;
  SaleOrderByRelationAggregateInput: SaleOrderByRelationAggregateInput;
  SaleOrderByWithRelationInput: SaleOrderByWithRelationInput;
  SaleScalarFieldEnum: SaleScalarFieldEnum;
  SaleScalarWhereInput: SaleScalarWhereInput;
  SaleSumAggregate: ResolverTypeWrapper<SaleSumAggregate>;
  SaleUpdateInput: SaleUpdateInput;
  SaleUpdateManyMutationInput: SaleUpdateManyMutationInput;
  SaleUpdateManyWithWhereWithoutBlameUserInput: SaleUpdateManyWithWhereWithoutBlameUserInput;
  SaleUpdateManyWithWhereWithoutProductInput: SaleUpdateManyWithWhereWithoutProductInput;
  SaleUpdateManyWithWhereWithoutProviderInput: SaleUpdateManyWithWhereWithoutProviderInput;
  SaleUpdateManyWithoutBlameUserNestedInput: SaleUpdateManyWithoutBlameUserNestedInput;
  SaleUpdateManyWithoutProductNestedInput: SaleUpdateManyWithoutProductNestedInput;
  SaleUpdateManyWithoutProviderNestedInput: SaleUpdateManyWithoutProviderNestedInput;
  SaleUpdateWithWhereUniqueWithoutBlameUserInput: SaleUpdateWithWhereUniqueWithoutBlameUserInput;
  SaleUpdateWithWhereUniqueWithoutProductInput: SaleUpdateWithWhereUniqueWithoutProductInput;
  SaleUpdateWithWhereUniqueWithoutProviderInput: SaleUpdateWithWhereUniqueWithoutProviderInput;
  SaleUpdateWithoutBlameUserInput: SaleUpdateWithoutBlameUserInput;
  SaleUpdateWithoutProductInput: SaleUpdateWithoutProductInput;
  SaleUpdateWithoutProviderInput: SaleUpdateWithoutProviderInput;
  SaleUpsertWithWhereUniqueWithoutBlameUserInput: SaleUpsertWithWhereUniqueWithoutBlameUserInput;
  SaleUpsertWithWhereUniqueWithoutProductInput: SaleUpsertWithWhereUniqueWithoutProductInput;
  SaleUpsertWithWhereUniqueWithoutProviderInput: SaleUpsertWithWhereUniqueWithoutProviderInput;
  SaleWhereInput: SaleWhereInput;
  SaleWhereUniqueInput: SaleWhereUniqueInput;
  SortOrder: SortOrder;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  User: ResolverTypeWrapper<User>;
  UserCount: ResolverTypeWrapper<UserCount>;
  UserCountAggregate: ResolverTypeWrapper<UserCountAggregate>;
  UserCreateInput: UserCreateInput;
  UserCreateManyInput: UserCreateManyInput;
  UserCreateNestedOneWithoutProductInput: UserCreateNestedOneWithoutProductInput;
  UserCreateNestedOneWithoutProviderInput: UserCreateNestedOneWithoutProviderInput;
  UserCreateNestedOneWithoutSaleInput: UserCreateNestedOneWithoutSaleInput;
  UserCreateOrConnectWithoutProductInput: UserCreateOrConnectWithoutProductInput;
  UserCreateOrConnectWithoutProviderInput: UserCreateOrConnectWithoutProviderInput;
  UserCreateOrConnectWithoutSaleInput: UserCreateOrConnectWithoutSaleInput;
  UserCreateWithoutProductInput: UserCreateWithoutProductInput;
  UserCreateWithoutProviderInput: UserCreateWithoutProviderInput;
  UserCreateWithoutSaleInput: UserCreateWithoutSaleInput;
  UserMaxAggregate: ResolverTypeWrapper<UserMaxAggregate>;
  UserMinAggregate: ResolverTypeWrapper<UserMinAggregate>;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserRelationFilter: UserRelationFilter;
  UserScalarFieldEnum: UserScalarFieldEnum;
  UserUpdateInput: UserUpdateInput;
  UserUpdateOneRequiredWithoutProductNestedInput: UserUpdateOneRequiredWithoutProductNestedInput;
  UserUpdateOneRequiredWithoutProviderNestedInput: UserUpdateOneRequiredWithoutProviderNestedInput;
  UserUpdateOneRequiredWithoutSaleNestedInput: UserUpdateOneRequiredWithoutSaleNestedInput;
  UserUpdateWithoutProductInput: UserUpdateWithoutProductInput;
  UserUpdateWithoutProviderInput: UserUpdateWithoutProviderInput;
  UserUpdateWithoutSaleInput: UserUpdateWithoutSaleInput;
  UserUpsertWithoutProductInput: UserUpsertWithoutProductInput;
  UserUpsertWithoutProviderInput: UserUpsertWithoutProviderInput;
  UserUpsertWithoutSaleInput: UserUpsertWithoutSaleInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BoolFieldUpdateOperationsInput: BoolFieldUpdateOperationsInput;
  BoolFilter: BoolFilter;
  Boolean: Scalars['Boolean'];
  DateTime: Scalars['DateTime'];
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  IntFilter: IntFilter;
  Mutation: {};
  NestedBoolFilter: NestedBoolFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
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
  ProductCreateNestedOneWithoutSalesInput: ProductCreateNestedOneWithoutSalesInput;
  ProductCreateOrConnectWithoutBlameUserInput: ProductCreateOrConnectWithoutBlameUserInput;
  ProductCreateOrConnectWithoutProviderInput: ProductCreateOrConnectWithoutProviderInput;
  ProductCreateOrConnectWithoutSalesInput: ProductCreateOrConnectWithoutSalesInput;
  ProductCreateWithoutBlameUserInput: ProductCreateWithoutBlameUserInput;
  ProductCreateWithoutProviderInput: ProductCreateWithoutProviderInput;
  ProductCreateWithoutSalesInput: ProductCreateWithoutSalesInput;
  ProductListRelationFilter: ProductListRelationFilter;
  ProductMaxAggregate: ProductMaxAggregate;
  ProductMinAggregate: ProductMinAggregate;
  ProductOrderByRelationAggregateInput: ProductOrderByRelationAggregateInput;
  ProductOrderByWithRelationInput: ProductOrderByWithRelationInput;
  ProductRelationFilter: ProductRelationFilter;
  ProductScalarWhereInput: ProductScalarWhereInput;
  ProductSumAggregate: ProductSumAggregate;
  ProductUpdateInput: ProductUpdateInput;
  ProductUpdateManyMutationInput: ProductUpdateManyMutationInput;
  ProductUpdateManyWithWhereWithoutBlameUserInput: ProductUpdateManyWithWhereWithoutBlameUserInput;
  ProductUpdateManyWithWhereWithoutProviderInput: ProductUpdateManyWithWhereWithoutProviderInput;
  ProductUpdateManyWithoutBlameUserNestedInput: ProductUpdateManyWithoutBlameUserNestedInput;
  ProductUpdateManyWithoutProviderNestedInput: ProductUpdateManyWithoutProviderNestedInput;
  ProductUpdateOneRequiredWithoutSalesNestedInput: ProductUpdateOneRequiredWithoutSalesNestedInput;
  ProductUpdateWithWhereUniqueWithoutBlameUserInput: ProductUpdateWithWhereUniqueWithoutBlameUserInput;
  ProductUpdateWithWhereUniqueWithoutProviderInput: ProductUpdateWithWhereUniqueWithoutProviderInput;
  ProductUpdateWithoutBlameUserInput: ProductUpdateWithoutBlameUserInput;
  ProductUpdateWithoutProviderInput: ProductUpdateWithoutProviderInput;
  ProductUpdateWithoutSalesInput: ProductUpdateWithoutSalesInput;
  ProductUpsertWithWhereUniqueWithoutBlameUserInput: ProductUpsertWithWhereUniqueWithoutBlameUserInput;
  ProductUpsertWithWhereUniqueWithoutProviderInput: ProductUpsertWithWhereUniqueWithoutProviderInput;
  ProductUpsertWithoutSalesInput: ProductUpsertWithoutSalesInput;
  ProductWhereInput: ProductWhereInput;
  ProductWhereUniqueInput: ProductWhereUniqueInput;
  Provider: Provider;
  ProviderCount: ProviderCount;
  ProviderCountAggregate: ProviderCountAggregate;
  ProviderCreateInput: ProviderCreateInput;
  ProviderCreateManyBlameUserInput: ProviderCreateManyBlameUserInput;
  ProviderCreateManyBlameUserInputEnvelope: ProviderCreateManyBlameUserInputEnvelope;
  ProviderCreateManyInput: ProviderCreateManyInput;
  ProviderCreateNestedManyWithoutBlameUserInput: ProviderCreateNestedManyWithoutBlameUserInput;
  ProviderCreateNestedOneWithoutProductInput: ProviderCreateNestedOneWithoutProductInput;
  ProviderCreateNestedOneWithoutSaleInput: ProviderCreateNestedOneWithoutSaleInput;
  ProviderCreateOrConnectWithoutBlameUserInput: ProviderCreateOrConnectWithoutBlameUserInput;
  ProviderCreateOrConnectWithoutProductInput: ProviderCreateOrConnectWithoutProductInput;
  ProviderCreateOrConnectWithoutSaleInput: ProviderCreateOrConnectWithoutSaleInput;
  ProviderCreateWithoutBlameUserInput: ProviderCreateWithoutBlameUserInput;
  ProviderCreateWithoutProductInput: ProviderCreateWithoutProductInput;
  ProviderCreateWithoutSaleInput: ProviderCreateWithoutSaleInput;
  ProviderListRelationFilter: ProviderListRelationFilter;
  ProviderMaxAggregate: ProviderMaxAggregate;
  ProviderMinAggregate: ProviderMinAggregate;
  ProviderOrderByRelationAggregateInput: ProviderOrderByRelationAggregateInput;
  ProviderOrderByWithRelationInput: ProviderOrderByWithRelationInput;
  ProviderRelationFilter: ProviderRelationFilter;
  ProviderScalarWhereInput: ProviderScalarWhereInput;
  ProviderUpdateInput: ProviderUpdateInput;
  ProviderUpdateManyMutationInput: ProviderUpdateManyMutationInput;
  ProviderUpdateManyWithWhereWithoutBlameUserInput: ProviderUpdateManyWithWhereWithoutBlameUserInput;
  ProviderUpdateManyWithoutBlameUserNestedInput: ProviderUpdateManyWithoutBlameUserNestedInput;
  ProviderUpdateOneWithoutProductNestedInput: ProviderUpdateOneWithoutProductNestedInput;
  ProviderUpdateOneWithoutSaleNestedInput: ProviderUpdateOneWithoutSaleNestedInput;
  ProviderUpdateWithWhereUniqueWithoutBlameUserInput: ProviderUpdateWithWhereUniqueWithoutBlameUserInput;
  ProviderUpdateWithoutBlameUserInput: ProviderUpdateWithoutBlameUserInput;
  ProviderUpdateWithoutProductInput: ProviderUpdateWithoutProductInput;
  ProviderUpdateWithoutSaleInput: ProviderUpdateWithoutSaleInput;
  ProviderUpsertWithWhereUniqueWithoutBlameUserInput: ProviderUpsertWithWhereUniqueWithoutBlameUserInput;
  ProviderUpsertWithoutProductInput: ProviderUpsertWithoutProductInput;
  ProviderUpsertWithoutSaleInput: ProviderUpsertWithoutSaleInput;
  ProviderWhereInput: ProviderWhereInput;
  ProviderWhereUniqueInput: ProviderWhereUniqueInput;
  Query: {};
  Sale: Sale;
  SaleAvgAggregate: SaleAvgAggregate;
  SaleCountAggregate: SaleCountAggregate;
  SaleCreateInput: SaleCreateInput;
  SaleCreateManyBlameUserInput: SaleCreateManyBlameUserInput;
  SaleCreateManyBlameUserInputEnvelope: SaleCreateManyBlameUserInputEnvelope;
  SaleCreateManyInput: SaleCreateManyInput;
  SaleCreateManyProductInput: SaleCreateManyProductInput;
  SaleCreateManyProductInputEnvelope: SaleCreateManyProductInputEnvelope;
  SaleCreateManyProviderInput: SaleCreateManyProviderInput;
  SaleCreateManyProviderInputEnvelope: SaleCreateManyProviderInputEnvelope;
  SaleCreateNestedManyWithoutBlameUserInput: SaleCreateNestedManyWithoutBlameUserInput;
  SaleCreateNestedManyWithoutProductInput: SaleCreateNestedManyWithoutProductInput;
  SaleCreateNestedManyWithoutProviderInput: SaleCreateNestedManyWithoutProviderInput;
  SaleCreateOrConnectWithoutBlameUserInput: SaleCreateOrConnectWithoutBlameUserInput;
  SaleCreateOrConnectWithoutProductInput: SaleCreateOrConnectWithoutProductInput;
  SaleCreateOrConnectWithoutProviderInput: SaleCreateOrConnectWithoutProviderInput;
  SaleCreateWithoutBlameUserInput: SaleCreateWithoutBlameUserInput;
  SaleCreateWithoutProductInput: SaleCreateWithoutProductInput;
  SaleCreateWithoutProviderInput: SaleCreateWithoutProviderInput;
  SaleListRelationFilter: SaleListRelationFilter;
  SaleMaxAggregate: SaleMaxAggregate;
  SaleMinAggregate: SaleMinAggregate;
  SaleOrderByRelationAggregateInput: SaleOrderByRelationAggregateInput;
  SaleOrderByWithRelationInput: SaleOrderByWithRelationInput;
  SaleScalarWhereInput: SaleScalarWhereInput;
  SaleSumAggregate: SaleSumAggregate;
  SaleUpdateInput: SaleUpdateInput;
  SaleUpdateManyMutationInput: SaleUpdateManyMutationInput;
  SaleUpdateManyWithWhereWithoutBlameUserInput: SaleUpdateManyWithWhereWithoutBlameUserInput;
  SaleUpdateManyWithWhereWithoutProductInput: SaleUpdateManyWithWhereWithoutProductInput;
  SaleUpdateManyWithWhereWithoutProviderInput: SaleUpdateManyWithWhereWithoutProviderInput;
  SaleUpdateManyWithoutBlameUserNestedInput: SaleUpdateManyWithoutBlameUserNestedInput;
  SaleUpdateManyWithoutProductNestedInput: SaleUpdateManyWithoutProductNestedInput;
  SaleUpdateManyWithoutProviderNestedInput: SaleUpdateManyWithoutProviderNestedInput;
  SaleUpdateWithWhereUniqueWithoutBlameUserInput: SaleUpdateWithWhereUniqueWithoutBlameUserInput;
  SaleUpdateWithWhereUniqueWithoutProductInput: SaleUpdateWithWhereUniqueWithoutProductInput;
  SaleUpdateWithWhereUniqueWithoutProviderInput: SaleUpdateWithWhereUniqueWithoutProviderInput;
  SaleUpdateWithoutBlameUserInput: SaleUpdateWithoutBlameUserInput;
  SaleUpdateWithoutProductInput: SaleUpdateWithoutProductInput;
  SaleUpdateWithoutProviderInput: SaleUpdateWithoutProviderInput;
  SaleUpsertWithWhereUniqueWithoutBlameUserInput: SaleUpsertWithWhereUniqueWithoutBlameUserInput;
  SaleUpsertWithWhereUniqueWithoutProductInput: SaleUpsertWithWhereUniqueWithoutProductInput;
  SaleUpsertWithWhereUniqueWithoutProviderInput: SaleUpsertWithWhereUniqueWithoutProviderInput;
  SaleWhereInput: SaleWhereInput;
  SaleWhereUniqueInput: SaleWhereUniqueInput;
  String: Scalars['String'];
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  User: User;
  UserCount: UserCount;
  UserCountAggregate: UserCountAggregate;
  UserCreateInput: UserCreateInput;
  UserCreateManyInput: UserCreateManyInput;
  UserCreateNestedOneWithoutProductInput: UserCreateNestedOneWithoutProductInput;
  UserCreateNestedOneWithoutProviderInput: UserCreateNestedOneWithoutProviderInput;
  UserCreateNestedOneWithoutSaleInput: UserCreateNestedOneWithoutSaleInput;
  UserCreateOrConnectWithoutProductInput: UserCreateOrConnectWithoutProductInput;
  UserCreateOrConnectWithoutProviderInput: UserCreateOrConnectWithoutProviderInput;
  UserCreateOrConnectWithoutSaleInput: UserCreateOrConnectWithoutSaleInput;
  UserCreateWithoutProductInput: UserCreateWithoutProductInput;
  UserCreateWithoutProviderInput: UserCreateWithoutProviderInput;
  UserCreateWithoutSaleInput: UserCreateWithoutSaleInput;
  UserMaxAggregate: UserMaxAggregate;
  UserMinAggregate: UserMinAggregate;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserRelationFilter: UserRelationFilter;
  UserUpdateInput: UserUpdateInput;
  UserUpdateOneRequiredWithoutProductNestedInput: UserUpdateOneRequiredWithoutProductNestedInput;
  UserUpdateOneRequiredWithoutProviderNestedInput: UserUpdateOneRequiredWithoutProviderNestedInput;
  UserUpdateOneRequiredWithoutSaleNestedInput: UserUpdateOneRequiredWithoutSaleNestedInput;
  UserUpdateWithoutProductInput: UserUpdateWithoutProductInput;
  UserUpdateWithoutProviderInput: UserUpdateWithoutProviderInput;
  UserUpdateWithoutSaleInput: UserUpdateWithoutSaleInput;
  UserUpsertWithoutProductInput: UserUpsertWithoutProductInput;
  UserUpsertWithoutProviderInput: UserUpsertWithoutProviderInput;
  UserUpsertWithoutSaleInput: UserUpsertWithoutSaleInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'data'>>;
  createProducts?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateProductsArgs, 'data'>>;
  createProvider?: Resolver<ResolversTypes['Provider'], ParentType, ContextType, RequireFields<MutationCreateProviderArgs, 'data'>>;
  createProviders?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateProvidersArgs, 'data'>>;
  createSale?: Resolver<ResolversTypes['Sale'], ParentType, ContextType, RequireFields<MutationCreateSaleArgs, 'data'>>;
  createSales?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateSalesArgs, 'data'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'data'>>;
  createUsers?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateUsersArgs, 'data'>>;
  deleteProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'where'>>;
  deleteProvider?: Resolver<ResolversTypes['Provider'], ParentType, ContextType, RequireFields<MutationDeleteProviderArgs, 'where'>>;
  deleteSale?: Resolver<ResolversTypes['Sale'], ParentType, ContextType, RequireFields<MutationDeleteSaleArgs, 'where'>>;
  deleteUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'where'>>;
  updateProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'data' | 'where'>>;
  updateProvider?: Resolver<ResolversTypes['Provider'], ParentType, ContextType, RequireFields<MutationUpdateProviderArgs, 'data' | 'where'>>;
  updateSale?: Resolver<ResolversTypes['Sale'], ParentType, ContextType, RequireFields<MutationUpdateSaleArgs, 'data' | 'where'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'data' | 'where'>>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  _count?: Resolver<ResolversTypes['ProductCount'], ParentType, ContextType>;
  blameUserId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  brandName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isPostPaid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priceValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductAvgAggregate'] = ResolversParentTypes['ProductAvgAggregate']> = {
  costValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCount'] = ResolversParentTypes['ProductCount']> = {
  sales?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCountAggregate'] = ResolversParentTypes['ProductCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blameUserId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  brandName?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  costValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isPostPaid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  priceValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  providerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMaxAggregate'] = ResolversParentTypes['ProductMaxAggregate']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  brandName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isPostPaid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priceValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMinAggregate'] = ResolversParentTypes['ProductMinAggregate']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  brandName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isPostPaid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priceValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductSumAggregate'] = ResolversParentTypes['ProductSumAggregate']> = {
  costValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  priceValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Provider'] = ResolversParentTypes['Provider']> = {
  _count?: Resolver<ResolversTypes['ProviderCount'], ParentType, ContextType>;
  blameUserId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  whatsapp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderCount'] = ResolversParentTypes['ProviderCount']> = {
  Product?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Sale?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderCountAggregate'] = ResolversParentTypes['ProviderCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blameUserId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  document?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  whatsapp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderMaxAggregate'] = ResolversParentTypes['ProviderMaxAggregate']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  whatsapp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProviderMinAggregate'] = ResolversParentTypes['ProviderMinAggregate']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  whatsapp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<QueryProductArgs, 'where'>>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, Partial<QueryProductsArgs>>;
  provider?: Resolver<ResolversTypes['Provider'], ParentType, ContextType, RequireFields<QueryProviderArgs, 'where'>>;
  providers?: Resolver<Array<ResolversTypes['Provider']>, ParentType, ContextType, Partial<QueryProvidersArgs>>;
  sale?: Resolver<ResolversTypes['Sale'], ParentType, ContextType, RequireFields<QuerySaleArgs, 'where'>>;
  sales?: Resolver<Array<ResolversTypes['Sale']>, ParentType, ContextType, Partial<QuerySalesArgs>>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryUserArgs, 'where'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryUsersArgs>>;
};

export type SaleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sale'] = ResolversParentTypes['Sale']> = {
  blameUserId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  costValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isPostPaid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  priceValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleAvgAggregate'] = ResolversParentTypes['SaleAvgAggregate']> = {
  costValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleCountAggregate'] = ResolversParentTypes['SaleCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blameUserId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  costValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isPostPaid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  priceValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  providerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleMaxAggregate'] = ResolversParentTypes['SaleMaxAggregate']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isPostPaid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  priceValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleMinAggregate'] = ResolversParentTypes['SaleMinAggregate']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isPostPaid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  priceValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleSumAggregate'] = ResolversParentTypes['SaleSumAggregate']> = {
  costValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  priceValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _count?: Resolver<ResolversTypes['UserCount'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCount'] = ResolversParentTypes['UserCount']> = {
  Product?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Provider?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Sale?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCountAggregate'] = ResolversParentTypes['UserCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMaxAggregate'] = ResolversParentTypes['UserMaxAggregate']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMinAggregate'] = ResolversParentTypes['UserMinAggregate']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  ProductSumAggregate?: ProductSumAggregateResolvers<ContextType>;
  Provider?: ProviderResolvers<ContextType>;
  ProviderCount?: ProviderCountResolvers<ContextType>;
  ProviderCountAggregate?: ProviderCountAggregateResolvers<ContextType>;
  ProviderMaxAggregate?: ProviderMaxAggregateResolvers<ContextType>;
  ProviderMinAggregate?: ProviderMinAggregateResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Sale?: SaleResolvers<ContextType>;
  SaleAvgAggregate?: SaleAvgAggregateResolvers<ContextType>;
  SaleCountAggregate?: SaleCountAggregateResolvers<ContextType>;
  SaleMaxAggregate?: SaleMaxAggregateResolvers<ContextType>;
  SaleMinAggregate?: SaleMinAggregateResolvers<ContextType>;
  SaleSumAggregate?: SaleSumAggregateResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserCount?: UserCountResolvers<ContextType>;
  UserCountAggregate?: UserCountAggregateResolvers<ContextType>;
  UserMaxAggregate?: UserMaxAggregateResolvers<ContextType>;
  UserMinAggregate?: UserMinAggregateResolvers<ContextType>;
};

