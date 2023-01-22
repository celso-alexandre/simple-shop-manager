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
  blameUser: User;
  /** FK: User.id - User to blame for */
  blameUserId: Scalars['String'];
  /** Brand name */
  brandName?: Maybe<Scalars['String']>;
  /** Cost value */
  costValue: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  /** ID */
  id: Scalars['ID'];
  /** Cost is post paid? (consigned) */
  isPostPaid: Scalars['Boolean'];
  /** Name */
  name: Scalars['String'];
  /** Retail price */
  priceValue: Scalars['Int'];
  provider: Provider;
  /** FK: Provider.id */
  providerId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  costValue?: Maybe<Scalars['Float']>;
  priceValue?: Maybe<Scalars['Float']>;
};

export type ProductCount = {
  __typename?: 'ProductCount';
  saleItems: Scalars['Int'];
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  _all: Scalars['Int'];
  blameUserId: Scalars['Int'];
  brandName: Scalars['Int'];
  costValue: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  isPostPaid: Scalars['Int'];
  name: Scalars['Int'];
  priceValue: Scalars['Int'];
  providerId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ProductCreateInput = {
  blameUser: UserCreateNestedOneWithoutProductsInput;
  brandName?: InputMaybe<Scalars['String']>;
  costValue: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  isPostPaid: Scalars['Boolean'];
  name: Scalars['String'];
  priceValue: Scalars['Int'];
  provider?: InputMaybe<ProviderCreateNestedOneWithoutProductsInput>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutProductInput>;
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

export type ProductCreateNestedOneWithoutSaleItemsInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutSaleItemsInput>;
  create?: InputMaybe<ProductCreateWithoutSaleItemsInput>;
};

export type ProductCreateOrConnectWithoutBlameUserInput = {
  create: ProductCreateWithoutBlameUserInput;
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
  brandName?: InputMaybe<Scalars['String']>;
  costValue: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  isPostPaid: Scalars['Boolean'];
  name: Scalars['String'];
  priceValue: Scalars['Int'];
  provider?: InputMaybe<ProviderCreateNestedOneWithoutProductsInput>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutProviderInput = {
  blameUser: UserCreateNestedOneWithoutProductsInput;
  brandName?: InputMaybe<Scalars['String']>;
  costValue: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  isPostPaid: Scalars['Boolean'];
  name: Scalars['String'];
  priceValue: Scalars['Int'];
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutProductInput>;
};

export type ProductCreateWithoutSaleItemsInput = {
  blameUser: UserCreateNestedOneWithoutProductsInput;
  brandName?: InputMaybe<Scalars['String']>;
  costValue: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  isPostPaid: Scalars['Boolean'];
  name: Scalars['String'];
  priceValue: Scalars['Int'];
  provider?: InputMaybe<ProviderCreateNestedOneWithoutProductsInput>;
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
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  isPostPaid?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  priceValue?: Maybe<Scalars['Int']>;
  providerId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  blameUserId?: Maybe<Scalars['String']>;
  brandName?: Maybe<Scalars['String']>;
  costValue?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  isPostPaid?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  priceValue?: Maybe<Scalars['Int']>;
  providerId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  blameUser?: InputMaybe<UserOrderByWithRelationInput>;
  blameUserId?: InputMaybe<SortOrder>;
  brandName?: InputMaybe<SortOrder>;
  costValue?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPostPaid?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  priceValue?: InputMaybe<SortOrder>;
  provider?: InputMaybe<ProviderOrderByWithRelationInput>;
  providerId?: InputMaybe<SortOrder>;
  saleItems?: InputMaybe<SaleItemOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductPaginated = {
  __typename?: 'ProductPaginated';
  /** Number of current page */
  currentPage?: Maybe<Scalars['Int']>;
  /** Boolean to use on a cursor-based pagination. E.g: Mobile scroll */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** Number of last page */
  lastPage?: Maybe<Scalars['Int']>;
  nextCursor?: Maybe<Scalars['Int']>;
  /** Count for query results without skip, take and cursor */
  total?: Maybe<Scalars['Int']>;
};

export type ProductRelationFilter = {
  is?: InputMaybe<ProductWhereInput>;
  isNot?: InputMaybe<ProductWhereInput>;
};

export enum ProductScalarFieldEnum {
  BlameUserId = 'blameUserId',
  BrandName = 'brandName',
  CostValue = 'costValue',
  CreatedAt = 'createdAt',
  Id = 'id',
  IsPostPaid = 'isPostPaid',
  Name = 'name',
  PriceValue = 'priceValue',
  ProviderId = 'providerId',
  UpdatedAt = 'updatedAt'
}

export type ProductScalarWhereInput = {
  AND?: InputMaybe<Array<ProductScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereInput>>;
  blameUserId?: InputMaybe<StringFilter>;
  brandName?: InputMaybe<StringNullableFilter>;
  costValue?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isPostPaid?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  priceValue?: InputMaybe<IntFilter>;
  providerId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  costValue?: Maybe<Scalars['Int']>;
  priceValue?: Maybe<Scalars['Int']>;
};

export type ProductUpdateInput = {
  blameUser?: InputMaybe<UserUpdateOneRequiredWithoutProductsNestedInput>;
  brandName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  costValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  isPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutProductsNestedInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutProductNestedInput>;
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

export type ProductUpdateOneRequiredWithoutSaleItemsNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutSaleItemsInput>;
  create?: InputMaybe<ProductCreateWithoutSaleItemsInput>;
  update?: InputMaybe<ProductUpdateWithoutSaleItemsInput>;
  upsert?: InputMaybe<ProductUpsertWithoutSaleItemsInput>;
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
  provider?: InputMaybe<ProviderUpdateOneWithoutProductsNestedInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutProductNestedInput>;
};

export type ProductUpdateWithoutProviderInput = {
  blameUser?: InputMaybe<UserUpdateOneRequiredWithoutProductsNestedInput>;
  brandName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  costValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  isPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutProductNestedInput>;
};

export type ProductUpdateWithoutSaleItemsInput = {
  blameUser?: InputMaybe<UserUpdateOneRequiredWithoutProductsNestedInput>;
  brandName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  costValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  isPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutProductsNestedInput>;
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

export type ProductUpsertWithoutSaleItemsInput = {
  create: ProductCreateWithoutSaleItemsInput;
  update: ProductUpdateWithoutSaleItemsInput;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  blameUser?: InputMaybe<UserRelationFilter>;
  blameUserId?: InputMaybe<StringFilter>;
  brandName?: InputMaybe<StringNullableFilter>;
  costValue?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isPostPaid?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  priceValue?: InputMaybe<IntFilter>;
  provider?: InputMaybe<ProviderRelationFilter>;
  providerId?: InputMaybe<StringNullableFilter>;
  saleItems?: InputMaybe<SaleItemListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ProductsOutput = {
  __typename?: 'ProductsOutput';
  /** Grouped ObjectType for findManyrequests */
  nodes: Array<Product>;
  /** Pagination info for findMany requests */
  pageInfo?: Maybe<ProductPaginated>;
};

export type Provider = {
  __typename?: 'Provider';
  _count: ProviderCount;
  blameUser: User;
  /** FK: User.id - User to blame for */
  blameUserId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  /** Document */
  document?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** ID */
  id: Scalars['ID'];
  /** Name */
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  /** Whatsapp */
  whatsapp?: Maybe<Scalars['String']>;
};

export type ProviderCount = {
  __typename?: 'ProviderCount';
  products: Scalars['Int'];
  saleItems: Scalars['Int'];
};

export type ProviderCountAggregate = {
  __typename?: 'ProviderCountAggregate';
  _all: Scalars['Int'];
  blameUserId: Scalars['Int'];
  createdAt: Scalars['Int'];
  document: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
  whatsapp: Scalars['Int'];
};

export type ProviderCreateInput = {
  blameUser: UserCreateNestedOneWithoutProvidersInput;
  document?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  products?: InputMaybe<ProductCreateNestedManyWithoutProviderInput>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutProviderInput>;
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
  document?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  products?: InputMaybe<ProductCreateNestedManyWithoutProviderInput>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutProviderInput>;
  whatsapp?: InputMaybe<Scalars['String']>;
};

export type ProviderCreateWithoutProductsInput = {
  blameUser: UserCreateNestedOneWithoutProvidersInput;
  document?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutProviderInput>;
  whatsapp?: InputMaybe<Scalars['String']>;
};

export type ProviderCreateWithoutSaleItemsInput = {
  blameUser: UserCreateNestedOneWithoutProvidersInput;
  document?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  products?: InputMaybe<ProductCreateNestedManyWithoutProviderInput>;
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
  createdAt?: Maybe<Scalars['DateTime']>;
  document?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  whatsapp?: Maybe<Scalars['String']>;
};

export type ProviderMinAggregate = {
  __typename?: 'ProviderMinAggregate';
  blameUserId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  document?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  whatsapp?: Maybe<Scalars['String']>;
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
  currentPage?: Maybe<Scalars['Int']>;
  /** Boolean to use on a cursor-based pagination. E.g: Mobile scroll */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** Number of last page */
  lastPage?: Maybe<Scalars['Int']>;
  nextCursor?: Maybe<Scalars['Int']>;
  /** Count for query results without skip, take and cursor */
  total?: Maybe<Scalars['Int']>;
};

export type ProviderRelationFilter = {
  is?: InputMaybe<ProviderWhereInput>;
  isNot?: InputMaybe<ProviderWhereInput>;
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
  blameUserId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  document?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  whatsapp?: InputMaybe<StringNullableFilter>;
};

export type ProviderUpdateInput = {
  blameUser?: InputMaybe<UserUpdateOneRequiredWithoutProvidersNestedInput>;
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
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ProviderUpdateWithoutProductsInput>;
  upsert?: InputMaybe<ProviderUpsertWithoutProductsInput>;
};

export type ProviderUpdateOneWithoutSaleItemsNestedInput = {
  connect?: InputMaybe<ProviderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProviderCreateOrConnectWithoutSaleItemsInput>;
  create?: InputMaybe<ProviderCreateWithoutSaleItemsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ProviderUpdateWithoutSaleItemsInput>;
  upsert?: InputMaybe<ProviderUpsertWithoutSaleItemsInput>;
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
  blameUser?: InputMaybe<UserUpdateOneRequiredWithoutProvidersNestedInput>;
  document?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutProviderNestedInput>;
  whatsapp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProviderUpdateWithoutSaleItemsInput = {
  blameUser?: InputMaybe<UserUpdateOneRequiredWithoutProvidersNestedInput>;
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
};

export type ProviderUpsertWithoutSaleItemsInput = {
  create: ProviderCreateWithoutSaleItemsInput;
  update: ProviderUpdateWithoutSaleItemsInput;
};

export type ProviderWhereInput = {
  AND?: InputMaybe<Array<ProviderWhereInput>>;
  NOT?: InputMaybe<Array<ProviderWhereInput>>;
  OR?: InputMaybe<Array<ProviderWhereInput>>;
  blameUser?: InputMaybe<UserRelationFilter>;
  blameUserId?: InputMaybe<StringFilter>;
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
  document?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ProvidersOutput = {
  __typename?: 'ProvidersOutput';
  /** Grouped ObjectType for findManyrequests */
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


export type QuerySaleItemArgs = {
  where: SaleItemWhereUniqueInput;
};


export type QuerySaleItemsArgs = {
  cursor?: InputMaybe<SaleItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<SaleItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SaleItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SaleItemWhereInput>;
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
  _count: SaleCount;
  blameUser: User;
  /** FK: User.id - User to blame for */
  blameUserId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  /** Date Time */
  date: Scalars['DateTime'];
  /** ID */
  id: Scalars['ID'];
  netMarginPercent: Scalars['Float'];
  netMarginValue: Scalars['Float'];
  saleItems: SaleItemsOutput;
  /** Total Cost */
  totalCostValue: Scalars['Int'];
  /** Grand Total */
  totalValue: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};


export type SaleSaleItemsArgs = {
  cursor?: InputMaybe<SaleItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<SaleItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SaleItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SaleItemWhereInput>;
};

export type SaleAvgAggregate = {
  __typename?: 'SaleAvgAggregate';
  totalCostValue?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
};

export type SaleCount = {
  __typename?: 'SaleCount';
  saleItems: Scalars['Int'];
};

export type SaleCountAggregate = {
  __typename?: 'SaleCountAggregate';
  _all: Scalars['Int'];
  blameUserId: Scalars['Int'];
  createdAt: Scalars['Int'];
  date: Scalars['Int'];
  id: Scalars['Int'];
  totalCostValue: Scalars['Int'];
  totalValue: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type SaleCreateInput = {
  blameUser: UserCreateNestedOneWithoutSalesInput;
  date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutSaleInput>;
  totalCostValue: Scalars['Int'];
  totalValue: Scalars['Int'];
};

export type SaleCreateManyBlameUserInput = {
  date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  totalCostValue: Scalars['Int'];
  totalValue: Scalars['Int'];
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
  date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutSaleInput>;
  totalCostValue: Scalars['Int'];
  totalValue: Scalars['Int'];
};

export type SaleCreateWithoutSaleItemsInput = {
  blameUser: UserCreateNestedOneWithoutSalesInput;
  date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  totalCostValue: Scalars['Int'];
  totalValue: Scalars['Int'];
};

export type SaleItem = {
  __typename?: 'SaleItem';
  blameUser: User;
  /** FK: User.id - User to blame for */
  blameUserId: Scalars['String'];
  /** isPostPaid (usually the same as Product.isPostPaid) */
  costIsPostPaid: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  /** ID */
  id: Scalars['ID'];
  product: Product;
  /** FK: Product.id */
  productId: Scalars['String'];
  provider: Provider;
  /** FK: Provider.id (usually the same as Product.providerId) */
  providerId?: Maybe<Scalars['String']>;
  /** Quantity */
  quantity: Scalars['Int'];
  /** FK: Sale.id */
  saleId: Scalars['String'];
  /** Cost value (the same from Product.costValue) */
  totalCostValue: Scalars['Int'];
  /** Sold Price (usually the same as Product.priceValue) */
  totalValue: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type SaleItemAvgAggregate = {
  __typename?: 'SaleItemAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
  totalCostValue?: Maybe<Scalars['Float']>;
  totalValue?: Maybe<Scalars['Float']>;
};

export type SaleItemCountAggregate = {
  __typename?: 'SaleItemCountAggregate';
  _all: Scalars['Int'];
  blameUserId: Scalars['Int'];
  costIsPostPaid: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  productId: Scalars['Int'];
  providerId: Scalars['Int'];
  quantity: Scalars['Int'];
  saleId: Scalars['Int'];
  totalCostValue: Scalars['Int'];
  totalValue: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type SaleItemCreateManyBlameUserInput = {
  costIsPostPaid: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
  providerId?: InputMaybe<Scalars['String']>;
  quantity: Scalars['Int'];
  saleId: Scalars['String'];
  totalCostValue: Scalars['Int'];
  totalValue: Scalars['Int'];
};

export type SaleItemCreateManyBlameUserInputEnvelope = {
  data: Array<SaleItemCreateManyBlameUserInput>;
};

export type SaleItemCreateManyProductInput = {
  blameUserId: Scalars['String'];
  costIsPostPaid: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  providerId?: InputMaybe<Scalars['String']>;
  quantity: Scalars['Int'];
  saleId: Scalars['String'];
  totalCostValue: Scalars['Int'];
  totalValue: Scalars['Int'];
};

export type SaleItemCreateManyProductInputEnvelope = {
  data: Array<SaleItemCreateManyProductInput>;
};

export type SaleItemCreateManyProviderInput = {
  blameUserId: Scalars['String'];
  costIsPostPaid: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
  quantity: Scalars['Int'];
  saleId: Scalars['String'];
  totalCostValue: Scalars['Int'];
  totalValue: Scalars['Int'];
};

export type SaleItemCreateManyProviderInputEnvelope = {
  data: Array<SaleItemCreateManyProviderInput>;
};

export type SaleItemCreateManySaleInput = {
  blameUserId: Scalars['String'];
  costIsPostPaid: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
  providerId?: InputMaybe<Scalars['String']>;
  quantity: Scalars['Int'];
  totalCostValue: Scalars['Int'];
  totalValue: Scalars['Int'];
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

export type SaleItemCreateOrConnectWithoutBlameUserInput = {
  create: SaleItemCreateWithoutBlameUserInput;
  where: SaleItemWhereUniqueInput;
};

export type SaleItemCreateOrConnectWithoutProductInput = {
  create: SaleItemCreateWithoutProductInput;
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
  costIsPostPaid: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutSaleItemsInput;
  provider?: InputMaybe<ProviderCreateNestedOneWithoutSaleItemsInput>;
  quantity: Scalars['Int'];
  sale?: InputMaybe<SaleCreateNestedOneWithoutSaleItemsInput>;
  totalCostValue: Scalars['Int'];
  totalValue: Scalars['Int'];
};

export type SaleItemCreateWithoutProductInput = {
  blameUser: UserCreateNestedOneWithoutSaleItemsInput;
  costIsPostPaid: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<ProviderCreateNestedOneWithoutSaleItemsInput>;
  quantity: Scalars['Int'];
  sale?: InputMaybe<SaleCreateNestedOneWithoutSaleItemsInput>;
  totalCostValue: Scalars['Int'];
  totalValue: Scalars['Int'];
};

export type SaleItemCreateWithoutProviderInput = {
  blameUser: UserCreateNestedOneWithoutSaleItemsInput;
  costIsPostPaid: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutSaleItemsInput;
  quantity: Scalars['Int'];
  sale?: InputMaybe<SaleCreateNestedOneWithoutSaleItemsInput>;
  totalCostValue: Scalars['Int'];
  totalValue: Scalars['Int'];
};

export type SaleItemCreateWithoutSaleInput = {
  blameUser: UserCreateNestedOneWithoutSaleItemsInput;
  costIsPostPaid: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  product: ProductCreateNestedOneWithoutSaleItemsInput;
  provider?: InputMaybe<ProviderCreateNestedOneWithoutSaleItemsInput>;
  quantity: Scalars['Int'];
  totalCostValue: Scalars['Int'];
  totalValue: Scalars['Int'];
};

export type SaleItemListRelationFilter = {
  every?: InputMaybe<SaleItemWhereInput>;
  none?: InputMaybe<SaleItemWhereInput>;
  some?: InputMaybe<SaleItemWhereInput>;
};

export type SaleItemMaxAggregate = {
  __typename?: 'SaleItemMaxAggregate';
  blameUserId?: Maybe<Scalars['String']>;
  costIsPostPaid?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  saleId?: Maybe<Scalars['String']>;
  totalCostValue?: Maybe<Scalars['Int']>;
  totalValue?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SaleItemMinAggregate = {
  __typename?: 'SaleItemMinAggregate';
  blameUserId?: Maybe<Scalars['String']>;
  costIsPostPaid?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  saleId?: Maybe<Scalars['String']>;
  totalCostValue?: Maybe<Scalars['Int']>;
  totalValue?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  provider?: InputMaybe<ProviderOrderByWithRelationInput>;
  providerId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  sale?: InputMaybe<SaleOrderByWithRelationInput>;
  saleId?: InputMaybe<SortOrder>;
  totalCostValue?: InputMaybe<SortOrder>;
  totalValue?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SaleItemPaginated = {
  __typename?: 'SaleItemPaginated';
  /** Number of current page */
  currentPage?: Maybe<Scalars['Int']>;
  /** Boolean to use on a cursor-based pagination. E.g: Mobile scroll */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** Number of last page */
  lastPage?: Maybe<Scalars['Int']>;
  nextCursor?: Maybe<Scalars['Int']>;
  /** Count for query results without skip, take and cursor */
  total?: Maybe<Scalars['Int']>;
};

export type SaleItemSaleIdProductIdCostIsPostPaidCompoundUniqueInput = {
  costIsPostPaid: Scalars['Boolean'];
  productId: Scalars['String'];
  saleId: Scalars['String'];
};

export enum SaleItemScalarFieldEnum {
  BlameUserId = 'blameUserId',
  CostIsPostPaid = 'costIsPostPaid',
  CreatedAt = 'createdAt',
  Id = 'id',
  ProductId = 'productId',
  ProviderId = 'providerId',
  Quantity = 'quantity',
  SaleId = 'saleId',
  TotalCostValue = 'totalCostValue',
  TotalValue = 'totalValue',
  UpdatedAt = 'updatedAt'
}

export type SaleItemScalarWhereInput = {
  AND?: InputMaybe<Array<SaleItemScalarWhereInput>>;
  NOT?: InputMaybe<Array<SaleItemScalarWhereInput>>;
  OR?: InputMaybe<Array<SaleItemScalarWhereInput>>;
  blameUserId?: InputMaybe<StringFilter>;
  costIsPostPaid?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
  providerId?: InputMaybe<StringNullableFilter>;
  quantity?: InputMaybe<IntFilter>;
  saleId?: InputMaybe<StringFilter>;
  totalCostValue?: InputMaybe<IntFilter>;
  totalValue?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SaleItemSumAggregate = {
  __typename?: 'SaleItemSumAggregate';
  quantity?: Maybe<Scalars['Int']>;
  totalCostValue?: Maybe<Scalars['Int']>;
  totalValue?: Maybe<Scalars['Int']>;
};

export type SaleItemUpdateManyMutationInput = {
  costIsPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalCostValue?: InputMaybe<IntFieldUpdateOperationsInput>;
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
  provider?: InputMaybe<ProviderUpdateOneWithoutSaleItemsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  sale?: InputMaybe<SaleUpdateOneWithoutSaleItemsNestedInput>;
  totalCostValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SaleItemUpdateWithoutProductInput = {
  blameUser?: InputMaybe<UserUpdateOneRequiredWithoutSaleItemsNestedInput>;
  costIsPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutSaleItemsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  sale?: InputMaybe<SaleUpdateOneWithoutSaleItemsNestedInput>;
  totalCostValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SaleItemUpdateWithoutProviderInput = {
  blameUser?: InputMaybe<UserUpdateOneRequiredWithoutSaleItemsNestedInput>;
  costIsPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutSaleItemsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  sale?: InputMaybe<SaleUpdateOneWithoutSaleItemsNestedInput>;
  totalCostValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SaleItemUpdateWithoutSaleInput = {
  blameUser?: InputMaybe<UserUpdateOneRequiredWithoutSaleItemsNestedInput>;
  costIsPostPaid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutSaleItemsNestedInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutSaleItemsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalCostValue?: InputMaybe<IntFieldUpdateOperationsInput>;
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

export type SaleItemWhereInput = {
  AND?: InputMaybe<Array<SaleItemWhereInput>>;
  NOT?: InputMaybe<Array<SaleItemWhereInput>>;
  OR?: InputMaybe<Array<SaleItemWhereInput>>;
  blameUser?: InputMaybe<UserRelationFilter>;
  blameUserId?: InputMaybe<StringFilter>;
  costIsPostPaid?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  provider?: InputMaybe<ProviderRelationFilter>;
  providerId?: InputMaybe<StringNullableFilter>;
  quantity?: InputMaybe<IntFilter>;
  sale?: InputMaybe<SaleRelationFilter>;
  saleId?: InputMaybe<StringFilter>;
  totalCostValue?: InputMaybe<IntFilter>;
  totalValue?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SaleItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  saleId_productId_costIsPostPaid?: InputMaybe<SaleItemSaleIdProductIdCostIsPostPaidCompoundUniqueInput>;
};

export type SaleItemsOutput = {
  __typename?: 'SaleItemsOutput';
  /** Grouped ObjectType for findManyrequests */
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
  blameUserId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  totalCostValue?: Maybe<Scalars['Int']>;
  totalValue?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SaleMinAggregate = {
  __typename?: 'SaleMinAggregate';
  blameUserId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  totalCostValue?: Maybe<Scalars['Int']>;
  totalValue?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  currentPage?: Maybe<Scalars['Int']>;
  /** Boolean to use on a cursor-based pagination. E.g: Mobile scroll */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** Number of last page */
  lastPage?: Maybe<Scalars['Int']>;
  nextCursor?: Maybe<Scalars['Int']>;
  /** Count for query results without skip, take and cursor */
  total?: Maybe<Scalars['Int']>;
};

export type SaleRelationFilter = {
  is?: InputMaybe<SaleWhereInput>;
  isNot?: InputMaybe<SaleWhereInput>;
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
  blameUserId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  totalCostValue?: InputMaybe<IntFilter>;
  totalValue?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SaleSumAggregate = {
  __typename?: 'SaleSumAggregate';
  totalCostValue?: Maybe<Scalars['Int']>;
  totalValue?: Maybe<Scalars['Int']>;
};

export type SaleUpdateInput = {
  blameUser?: InputMaybe<UserUpdateOneRequiredWithoutSalesNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutSaleNestedInput>;
  totalCostValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SaleUpdateManyMutationInput = {
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  totalCostValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
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
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<SaleUpdateWithoutSaleItemsInput>;
  upsert?: InputMaybe<SaleUpsertWithoutSaleItemsInput>;
};

export type SaleUpdateWithWhereUniqueWithoutBlameUserInput = {
  data: SaleUpdateWithoutBlameUserInput;
  where: SaleWhereUniqueInput;
};

export type SaleUpdateWithoutBlameUserInput = {
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutSaleNestedInput>;
  totalCostValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SaleUpdateWithoutSaleItemsInput = {
  blameUser?: InputMaybe<UserUpdateOneRequiredWithoutSalesNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  totalCostValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalValue?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SaleUpsertWithWhereUniqueWithoutBlameUserInput = {
  create: SaleCreateWithoutBlameUserInput;
  update: SaleUpdateWithoutBlameUserInput;
  where: SaleWhereUniqueInput;
};

export type SaleUpsertWithoutSaleItemsInput = {
  create: SaleCreateWithoutSaleItemsInput;
  update: SaleUpdateWithoutSaleItemsInput;
};

export type SaleWhereInput = {
  AND?: InputMaybe<Array<SaleWhereInput>>;
  NOT?: InputMaybe<Array<SaleWhereInput>>;
  OR?: InputMaybe<Array<SaleWhereInput>>;
  blameUser?: InputMaybe<UserRelationFilter>;
  blameUserId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  saleItems?: InputMaybe<SaleItemListRelationFilter>;
  totalCostValue?: InputMaybe<IntFilter>;
  totalValue?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SaleWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type SalesOutput = {
  __typename?: 'SalesOutput';
  /** Grouped ObjectType for findManyrequests */
  nodes: Array<Sale>;
  /** Pagination info for findMany requests */
  pageInfo?: Maybe<SalePaginated>;
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
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  /** ID */
  id: Scalars['ID'];
  /** Name */
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserCount = {
  __typename?: 'UserCount';
  products: Scalars['Int'];
  providers: Scalars['Int'];
  saleItems: Scalars['Int'];
  sales: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCreateInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  products?: InputMaybe<ProductCreateNestedManyWithoutBlameUserInput>;
  providers?: InputMaybe<ProviderCreateNestedManyWithoutBlameUserInput>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutBlameUserInput>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutBlameUserInput>;
};

export type UserCreateManyInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
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

export type UserCreateWithoutProductsInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  providers?: InputMaybe<ProviderCreateNestedManyWithoutBlameUserInput>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutBlameUserInput>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutBlameUserInput>;
};

export type UserCreateWithoutProvidersInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  products?: InputMaybe<ProductCreateNestedManyWithoutBlameUserInput>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutBlameUserInput>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutBlameUserInput>;
};

export type UserCreateWithoutSaleItemsInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  products?: InputMaybe<ProductCreateNestedManyWithoutBlameUserInput>;
  providers?: InputMaybe<ProviderCreateNestedManyWithoutBlameUserInput>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutBlameUserInput>;
};

export type UserCreateWithoutSalesInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  products?: InputMaybe<ProductCreateNestedManyWithoutBlameUserInput>;
  providers?: InputMaybe<ProviderCreateNestedManyWithoutBlameUserInput>;
  saleItems?: InputMaybe<SaleItemCreateNestedManyWithoutBlameUserInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserOrderByWithRelationInput = {
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
  currentPage?: Maybe<Scalars['Int']>;
  /** Boolean to use on a cursor-based pagination. E.g: Mobile scroll */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** Number of last page */
  lastPage?: Maybe<Scalars['Int']>;
  nextCursor?: Maybe<Scalars['Int']>;
  /** Count for query results without skip, take and cursor */
  total?: Maybe<Scalars['Int']>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type UserUpdateInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutBlameUserNestedInput>;
  providers?: InputMaybe<ProviderUpdateManyWithoutBlameUserNestedInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutBlameUserNestedInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutBlameUserNestedInput>;
};

export type UserUpdateOneRequiredWithoutProductsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<UserCreateWithoutProductsInput>;
  update?: InputMaybe<UserUpdateWithoutProductsInput>;
  upsert?: InputMaybe<UserUpsertWithoutProductsInput>;
};

export type UserUpdateOneRequiredWithoutProvidersNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProvidersInput>;
  create?: InputMaybe<UserCreateWithoutProvidersInput>;
  update?: InputMaybe<UserUpdateWithoutProvidersInput>;
  upsert?: InputMaybe<UserUpsertWithoutProvidersInput>;
};

export type UserUpdateOneRequiredWithoutSaleItemsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSaleItemsInput>;
  create?: InputMaybe<UserCreateWithoutSaleItemsInput>;
  update?: InputMaybe<UserUpdateWithoutSaleItemsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSaleItemsInput>;
};

export type UserUpdateOneRequiredWithoutSalesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSalesInput>;
  create?: InputMaybe<UserCreateWithoutSalesInput>;
  update?: InputMaybe<UserUpdateWithoutSalesInput>;
  upsert?: InputMaybe<UserUpsertWithoutSalesInput>;
};

export type UserUpdateWithoutProductsInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  providers?: InputMaybe<ProviderUpdateManyWithoutBlameUserNestedInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutBlameUserNestedInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutBlameUserNestedInput>;
};

export type UserUpdateWithoutProvidersInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutBlameUserNestedInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutBlameUserNestedInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutBlameUserNestedInput>;
};

export type UserUpdateWithoutSaleItemsInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutBlameUserNestedInput>;
  providers?: InputMaybe<ProviderUpdateManyWithoutBlameUserNestedInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutBlameUserNestedInput>;
};

export type UserUpdateWithoutSalesInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutBlameUserNestedInput>;
  providers?: InputMaybe<ProviderUpdateManyWithoutBlameUserNestedInput>;
  saleItems?: InputMaybe<SaleItemUpdateManyWithoutBlameUserNestedInput>;
};

export type UserUpsertWithoutProductsInput = {
  create: UserCreateWithoutProductsInput;
  update: UserUpdateWithoutProductsInput;
};

export type UserUpsertWithoutProvidersInput = {
  create: UserCreateWithoutProvidersInput;
  update: UserUpdateWithoutProvidersInput;
};

export type UserUpsertWithoutSaleItemsInput = {
  create: UserCreateWithoutSaleItemsInput;
  update: UserUpdateWithoutSaleItemsInput;
};

export type UserUpsertWithoutSalesInput = {
  create: UserCreateWithoutSalesInput;
  update: UserUpdateWithoutSalesInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
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
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type UsersOutput = {
  __typename?: 'UsersOutput';
  /** Grouped ObjectType for findManyrequests */
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
  ProductCreateNestedOneWithoutSaleItemsInput: ProductCreateNestedOneWithoutSaleItemsInput;
  ProductCreateOrConnectWithoutBlameUserInput: ProductCreateOrConnectWithoutBlameUserInput;
  ProductCreateOrConnectWithoutProviderInput: ProductCreateOrConnectWithoutProviderInput;
  ProductCreateOrConnectWithoutSaleItemsInput: ProductCreateOrConnectWithoutSaleItemsInput;
  ProductCreateWithoutBlameUserInput: ProductCreateWithoutBlameUserInput;
  ProductCreateWithoutProviderInput: ProductCreateWithoutProviderInput;
  ProductCreateWithoutSaleItemsInput: ProductCreateWithoutSaleItemsInput;
  ProductListRelationFilter: ProductListRelationFilter;
  ProductMaxAggregate: ResolverTypeWrapper<ProductMaxAggregate>;
  ProductMinAggregate: ResolverTypeWrapper<ProductMinAggregate>;
  ProductOrderByRelationAggregateInput: ProductOrderByRelationAggregateInput;
  ProductOrderByWithRelationInput: ProductOrderByWithRelationInput;
  ProductPaginated: ResolverTypeWrapper<ProductPaginated>;
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
  ProductUpdateOneRequiredWithoutSaleItemsNestedInput: ProductUpdateOneRequiredWithoutSaleItemsNestedInput;
  ProductUpdateWithWhereUniqueWithoutBlameUserInput: ProductUpdateWithWhereUniqueWithoutBlameUserInput;
  ProductUpdateWithWhereUniqueWithoutProviderInput: ProductUpdateWithWhereUniqueWithoutProviderInput;
  ProductUpdateWithoutBlameUserInput: ProductUpdateWithoutBlameUserInput;
  ProductUpdateWithoutProviderInput: ProductUpdateWithoutProviderInput;
  ProductUpdateWithoutSaleItemsInput: ProductUpdateWithoutSaleItemsInput;
  ProductUpsertWithWhereUniqueWithoutBlameUserInput: ProductUpsertWithWhereUniqueWithoutBlameUserInput;
  ProductUpsertWithWhereUniqueWithoutProviderInput: ProductUpsertWithWhereUniqueWithoutProviderInput;
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
  ProviderOrderByRelationAggregateInput: ProviderOrderByRelationAggregateInput;
  ProviderOrderByWithRelationInput: ProviderOrderByWithRelationInput;
  ProviderPaginated: ResolverTypeWrapper<ProviderPaginated>;
  ProviderRelationFilter: ProviderRelationFilter;
  ProviderScalarFieldEnum: ProviderScalarFieldEnum;
  ProviderScalarWhereInput: ProviderScalarWhereInput;
  ProviderUpdateInput: ProviderUpdateInput;
  ProviderUpdateManyMutationInput: ProviderUpdateManyMutationInput;
  ProviderUpdateManyWithWhereWithoutBlameUserInput: ProviderUpdateManyWithWhereWithoutBlameUserInput;
  ProviderUpdateManyWithoutBlameUserNestedInput: ProviderUpdateManyWithoutBlameUserNestedInput;
  ProviderUpdateOneWithoutProductsNestedInput: ProviderUpdateOneWithoutProductsNestedInput;
  ProviderUpdateOneWithoutSaleItemsNestedInput: ProviderUpdateOneWithoutSaleItemsNestedInput;
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
  SaleCreateInput: SaleCreateInput;
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
  SaleItemCreateOrConnectWithoutBlameUserInput: SaleItemCreateOrConnectWithoutBlameUserInput;
  SaleItemCreateOrConnectWithoutProductInput: SaleItemCreateOrConnectWithoutProductInput;
  SaleItemCreateOrConnectWithoutProviderInput: SaleItemCreateOrConnectWithoutProviderInput;
  SaleItemCreateOrConnectWithoutSaleInput: SaleItemCreateOrConnectWithoutSaleInput;
  SaleItemCreateWithoutBlameUserInput: SaleItemCreateWithoutBlameUserInput;
  SaleItemCreateWithoutProductInput: SaleItemCreateWithoutProductInput;
  SaleItemCreateWithoutProviderInput: SaleItemCreateWithoutProviderInput;
  SaleItemCreateWithoutSaleInput: SaleItemCreateWithoutSaleInput;
  SaleItemListRelationFilter: SaleItemListRelationFilter;
  SaleItemMaxAggregate: ResolverTypeWrapper<SaleItemMaxAggregate>;
  SaleItemMinAggregate: ResolverTypeWrapper<SaleItemMinAggregate>;
  SaleItemOrderByRelationAggregateInput: SaleItemOrderByRelationAggregateInput;
  SaleItemOrderByWithRelationInput: SaleItemOrderByWithRelationInput;
  SaleItemPaginated: ResolverTypeWrapper<SaleItemPaginated>;
  SaleItemSaleIdProductIdCostIsPostPaidCompoundUniqueInput: SaleItemSaleIdProductIdCostIsPostPaidCompoundUniqueInput;
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
  SaleItemUpdateWithWhereUniqueWithoutBlameUserInput: SaleItemUpdateWithWhereUniqueWithoutBlameUserInput;
  SaleItemUpdateWithWhereUniqueWithoutProductInput: SaleItemUpdateWithWhereUniqueWithoutProductInput;
  SaleItemUpdateWithWhereUniqueWithoutProviderInput: SaleItemUpdateWithWhereUniqueWithoutProviderInput;
  SaleItemUpdateWithWhereUniqueWithoutSaleInput: SaleItemUpdateWithWhereUniqueWithoutSaleInput;
  SaleItemUpdateWithoutBlameUserInput: SaleItemUpdateWithoutBlameUserInput;
  SaleItemUpdateWithoutProductInput: SaleItemUpdateWithoutProductInput;
  SaleItemUpdateWithoutProviderInput: SaleItemUpdateWithoutProviderInput;
  SaleItemUpdateWithoutSaleInput: SaleItemUpdateWithoutSaleInput;
  SaleItemUpsertWithWhereUniqueWithoutBlameUserInput: SaleItemUpsertWithWhereUniqueWithoutBlameUserInput;
  SaleItemUpsertWithWhereUniqueWithoutProductInput: SaleItemUpsertWithWhereUniqueWithoutProductInput;
  SaleItemUpsertWithWhereUniqueWithoutProviderInput: SaleItemUpsertWithWhereUniqueWithoutProviderInput;
  SaleItemUpsertWithWhereUniqueWithoutSaleInput: SaleItemUpsertWithWhereUniqueWithoutSaleInput;
  SaleItemWhereInput: SaleItemWhereInput;
  SaleItemWhereUniqueInput: SaleItemWhereUniqueInput;
  SaleItemsOutput: ResolverTypeWrapper<SaleItemsOutput>;
  SaleListRelationFilter: SaleListRelationFilter;
  SaleMaxAggregate: ResolverTypeWrapper<SaleMaxAggregate>;
  SaleMinAggregate: ResolverTypeWrapper<SaleMinAggregate>;
  SaleOrderByRelationAggregateInput: SaleOrderByRelationAggregateInput;
  SaleOrderByWithRelationInput: SaleOrderByWithRelationInput;
  SalePaginated: ResolverTypeWrapper<SalePaginated>;
  SaleRelationFilter: SaleRelationFilter;
  SaleScalarFieldEnum: SaleScalarFieldEnum;
  SaleScalarWhereInput: SaleScalarWhereInput;
  SaleSumAggregate: ResolverTypeWrapper<SaleSumAggregate>;
  SaleUpdateInput: SaleUpdateInput;
  SaleUpdateManyMutationInput: SaleUpdateManyMutationInput;
  SaleUpdateManyWithWhereWithoutBlameUserInput: SaleUpdateManyWithWhereWithoutBlameUserInput;
  SaleUpdateManyWithoutBlameUserNestedInput: SaleUpdateManyWithoutBlameUserNestedInput;
  SaleUpdateOneWithoutSaleItemsNestedInput: SaleUpdateOneWithoutSaleItemsNestedInput;
  SaleUpdateWithWhereUniqueWithoutBlameUserInput: SaleUpdateWithWhereUniqueWithoutBlameUserInput;
  SaleUpdateWithoutBlameUserInput: SaleUpdateWithoutBlameUserInput;
  SaleUpdateWithoutSaleItemsInput: SaleUpdateWithoutSaleItemsInput;
  SaleUpsertWithWhereUniqueWithoutBlameUserInput: SaleUpsertWithWhereUniqueWithoutBlameUserInput;
  SaleUpsertWithoutSaleItemsInput: SaleUpsertWithoutSaleItemsInput;
  SaleWhereInput: SaleWhereInput;
  SaleWhereUniqueInput: SaleWhereUniqueInput;
  SalesOutput: ResolverTypeWrapper<SalesOutput>;
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
  UserCreateNestedOneWithoutProductsInput: UserCreateNestedOneWithoutProductsInput;
  UserCreateNestedOneWithoutProvidersInput: UserCreateNestedOneWithoutProvidersInput;
  UserCreateNestedOneWithoutSaleItemsInput: UserCreateNestedOneWithoutSaleItemsInput;
  UserCreateNestedOneWithoutSalesInput: UserCreateNestedOneWithoutSalesInput;
  UserCreateOrConnectWithoutProductsInput: UserCreateOrConnectWithoutProductsInput;
  UserCreateOrConnectWithoutProvidersInput: UserCreateOrConnectWithoutProvidersInput;
  UserCreateOrConnectWithoutSaleItemsInput: UserCreateOrConnectWithoutSaleItemsInput;
  UserCreateOrConnectWithoutSalesInput: UserCreateOrConnectWithoutSalesInput;
  UserCreateWithoutProductsInput: UserCreateWithoutProductsInput;
  UserCreateWithoutProvidersInput: UserCreateWithoutProvidersInput;
  UserCreateWithoutSaleItemsInput: UserCreateWithoutSaleItemsInput;
  UserCreateWithoutSalesInput: UserCreateWithoutSalesInput;
  UserMaxAggregate: ResolverTypeWrapper<UserMaxAggregate>;
  UserMinAggregate: ResolverTypeWrapper<UserMinAggregate>;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserPaginated: ResolverTypeWrapper<UserPaginated>;
  UserRelationFilter: UserRelationFilter;
  UserScalarFieldEnum: UserScalarFieldEnum;
  UserUpdateInput: UserUpdateInput;
  UserUpdateOneRequiredWithoutProductsNestedInput: UserUpdateOneRequiredWithoutProductsNestedInput;
  UserUpdateOneRequiredWithoutProvidersNestedInput: UserUpdateOneRequiredWithoutProvidersNestedInput;
  UserUpdateOneRequiredWithoutSaleItemsNestedInput: UserUpdateOneRequiredWithoutSaleItemsNestedInput;
  UserUpdateOneRequiredWithoutSalesNestedInput: UserUpdateOneRequiredWithoutSalesNestedInput;
  UserUpdateWithoutProductsInput: UserUpdateWithoutProductsInput;
  UserUpdateWithoutProvidersInput: UserUpdateWithoutProvidersInput;
  UserUpdateWithoutSaleItemsInput: UserUpdateWithoutSaleItemsInput;
  UserUpdateWithoutSalesInput: UserUpdateWithoutSalesInput;
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
  ProductCreateNestedOneWithoutSaleItemsInput: ProductCreateNestedOneWithoutSaleItemsInput;
  ProductCreateOrConnectWithoutBlameUserInput: ProductCreateOrConnectWithoutBlameUserInput;
  ProductCreateOrConnectWithoutProviderInput: ProductCreateOrConnectWithoutProviderInput;
  ProductCreateOrConnectWithoutSaleItemsInput: ProductCreateOrConnectWithoutSaleItemsInput;
  ProductCreateWithoutBlameUserInput: ProductCreateWithoutBlameUserInput;
  ProductCreateWithoutProviderInput: ProductCreateWithoutProviderInput;
  ProductCreateWithoutSaleItemsInput: ProductCreateWithoutSaleItemsInput;
  ProductListRelationFilter: ProductListRelationFilter;
  ProductMaxAggregate: ProductMaxAggregate;
  ProductMinAggregate: ProductMinAggregate;
  ProductOrderByRelationAggregateInput: ProductOrderByRelationAggregateInput;
  ProductOrderByWithRelationInput: ProductOrderByWithRelationInput;
  ProductPaginated: ProductPaginated;
  ProductRelationFilter: ProductRelationFilter;
  ProductScalarWhereInput: ProductScalarWhereInput;
  ProductSumAggregate: ProductSumAggregate;
  ProductUpdateInput: ProductUpdateInput;
  ProductUpdateManyMutationInput: ProductUpdateManyMutationInput;
  ProductUpdateManyWithWhereWithoutBlameUserInput: ProductUpdateManyWithWhereWithoutBlameUserInput;
  ProductUpdateManyWithWhereWithoutProviderInput: ProductUpdateManyWithWhereWithoutProviderInput;
  ProductUpdateManyWithoutBlameUserNestedInput: ProductUpdateManyWithoutBlameUserNestedInput;
  ProductUpdateManyWithoutProviderNestedInput: ProductUpdateManyWithoutProviderNestedInput;
  ProductUpdateOneRequiredWithoutSaleItemsNestedInput: ProductUpdateOneRequiredWithoutSaleItemsNestedInput;
  ProductUpdateWithWhereUniqueWithoutBlameUserInput: ProductUpdateWithWhereUniqueWithoutBlameUserInput;
  ProductUpdateWithWhereUniqueWithoutProviderInput: ProductUpdateWithWhereUniqueWithoutProviderInput;
  ProductUpdateWithoutBlameUserInput: ProductUpdateWithoutBlameUserInput;
  ProductUpdateWithoutProviderInput: ProductUpdateWithoutProviderInput;
  ProductUpdateWithoutSaleItemsInput: ProductUpdateWithoutSaleItemsInput;
  ProductUpsertWithWhereUniqueWithoutBlameUserInput: ProductUpsertWithWhereUniqueWithoutBlameUserInput;
  ProductUpsertWithWhereUniqueWithoutProviderInput: ProductUpsertWithWhereUniqueWithoutProviderInput;
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
  ProviderOrderByRelationAggregateInput: ProviderOrderByRelationAggregateInput;
  ProviderOrderByWithRelationInput: ProviderOrderByWithRelationInput;
  ProviderPaginated: ProviderPaginated;
  ProviderRelationFilter: ProviderRelationFilter;
  ProviderScalarWhereInput: ProviderScalarWhereInput;
  ProviderUpdateInput: ProviderUpdateInput;
  ProviderUpdateManyMutationInput: ProviderUpdateManyMutationInput;
  ProviderUpdateManyWithWhereWithoutBlameUserInput: ProviderUpdateManyWithWhereWithoutBlameUserInput;
  ProviderUpdateManyWithoutBlameUserNestedInput: ProviderUpdateManyWithoutBlameUserNestedInput;
  ProviderUpdateOneWithoutProductsNestedInput: ProviderUpdateOneWithoutProductsNestedInput;
  ProviderUpdateOneWithoutSaleItemsNestedInput: ProviderUpdateOneWithoutSaleItemsNestedInput;
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
  SaleCreateInput: SaleCreateInput;
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
  SaleItemCreateOrConnectWithoutBlameUserInput: SaleItemCreateOrConnectWithoutBlameUserInput;
  SaleItemCreateOrConnectWithoutProductInput: SaleItemCreateOrConnectWithoutProductInput;
  SaleItemCreateOrConnectWithoutProviderInput: SaleItemCreateOrConnectWithoutProviderInput;
  SaleItemCreateOrConnectWithoutSaleInput: SaleItemCreateOrConnectWithoutSaleInput;
  SaleItemCreateWithoutBlameUserInput: SaleItemCreateWithoutBlameUserInput;
  SaleItemCreateWithoutProductInput: SaleItemCreateWithoutProductInput;
  SaleItemCreateWithoutProviderInput: SaleItemCreateWithoutProviderInput;
  SaleItemCreateWithoutSaleInput: SaleItemCreateWithoutSaleInput;
  SaleItemListRelationFilter: SaleItemListRelationFilter;
  SaleItemMaxAggregate: SaleItemMaxAggregate;
  SaleItemMinAggregate: SaleItemMinAggregate;
  SaleItemOrderByRelationAggregateInput: SaleItemOrderByRelationAggregateInput;
  SaleItemOrderByWithRelationInput: SaleItemOrderByWithRelationInput;
  SaleItemPaginated: SaleItemPaginated;
  SaleItemSaleIdProductIdCostIsPostPaidCompoundUniqueInput: SaleItemSaleIdProductIdCostIsPostPaidCompoundUniqueInput;
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
  SaleItemUpdateWithWhereUniqueWithoutBlameUserInput: SaleItemUpdateWithWhereUniqueWithoutBlameUserInput;
  SaleItemUpdateWithWhereUniqueWithoutProductInput: SaleItemUpdateWithWhereUniqueWithoutProductInput;
  SaleItemUpdateWithWhereUniqueWithoutProviderInput: SaleItemUpdateWithWhereUniqueWithoutProviderInput;
  SaleItemUpdateWithWhereUniqueWithoutSaleInput: SaleItemUpdateWithWhereUniqueWithoutSaleInput;
  SaleItemUpdateWithoutBlameUserInput: SaleItemUpdateWithoutBlameUserInput;
  SaleItemUpdateWithoutProductInput: SaleItemUpdateWithoutProductInput;
  SaleItemUpdateWithoutProviderInput: SaleItemUpdateWithoutProviderInput;
  SaleItemUpdateWithoutSaleInput: SaleItemUpdateWithoutSaleInput;
  SaleItemUpsertWithWhereUniqueWithoutBlameUserInput: SaleItemUpsertWithWhereUniqueWithoutBlameUserInput;
  SaleItemUpsertWithWhereUniqueWithoutProductInput: SaleItemUpsertWithWhereUniqueWithoutProductInput;
  SaleItemUpsertWithWhereUniqueWithoutProviderInput: SaleItemUpsertWithWhereUniqueWithoutProviderInput;
  SaleItemUpsertWithWhereUniqueWithoutSaleInput: SaleItemUpsertWithWhereUniqueWithoutSaleInput;
  SaleItemWhereInput: SaleItemWhereInput;
  SaleItemWhereUniqueInput: SaleItemWhereUniqueInput;
  SaleItemsOutput: SaleItemsOutput;
  SaleListRelationFilter: SaleListRelationFilter;
  SaleMaxAggregate: SaleMaxAggregate;
  SaleMinAggregate: SaleMinAggregate;
  SaleOrderByRelationAggregateInput: SaleOrderByRelationAggregateInput;
  SaleOrderByWithRelationInput: SaleOrderByWithRelationInput;
  SalePaginated: SalePaginated;
  SaleRelationFilter: SaleRelationFilter;
  SaleScalarWhereInput: SaleScalarWhereInput;
  SaleSumAggregate: SaleSumAggregate;
  SaleUpdateInput: SaleUpdateInput;
  SaleUpdateManyMutationInput: SaleUpdateManyMutationInput;
  SaleUpdateManyWithWhereWithoutBlameUserInput: SaleUpdateManyWithWhereWithoutBlameUserInput;
  SaleUpdateManyWithoutBlameUserNestedInput: SaleUpdateManyWithoutBlameUserNestedInput;
  SaleUpdateOneWithoutSaleItemsNestedInput: SaleUpdateOneWithoutSaleItemsNestedInput;
  SaleUpdateWithWhereUniqueWithoutBlameUserInput: SaleUpdateWithWhereUniqueWithoutBlameUserInput;
  SaleUpdateWithoutBlameUserInput: SaleUpdateWithoutBlameUserInput;
  SaleUpdateWithoutSaleItemsInput: SaleUpdateWithoutSaleItemsInput;
  SaleUpsertWithWhereUniqueWithoutBlameUserInput: SaleUpsertWithWhereUniqueWithoutBlameUserInput;
  SaleUpsertWithoutSaleItemsInput: SaleUpsertWithoutSaleItemsInput;
  SaleWhereInput: SaleWhereInput;
  SaleWhereUniqueInput: SaleWhereUniqueInput;
  SalesOutput: SalesOutput;
  String: Scalars['String'];
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  User: User;
  UserCount: UserCount;
  UserCountAggregate: UserCountAggregate;
  UserCreateInput: UserCreateInput;
  UserCreateManyInput: UserCreateManyInput;
  UserCreateNestedOneWithoutProductsInput: UserCreateNestedOneWithoutProductsInput;
  UserCreateNestedOneWithoutProvidersInput: UserCreateNestedOneWithoutProvidersInput;
  UserCreateNestedOneWithoutSaleItemsInput: UserCreateNestedOneWithoutSaleItemsInput;
  UserCreateNestedOneWithoutSalesInput: UserCreateNestedOneWithoutSalesInput;
  UserCreateOrConnectWithoutProductsInput: UserCreateOrConnectWithoutProductsInput;
  UserCreateOrConnectWithoutProvidersInput: UserCreateOrConnectWithoutProvidersInput;
  UserCreateOrConnectWithoutSaleItemsInput: UserCreateOrConnectWithoutSaleItemsInput;
  UserCreateOrConnectWithoutSalesInput: UserCreateOrConnectWithoutSalesInput;
  UserCreateWithoutProductsInput: UserCreateWithoutProductsInput;
  UserCreateWithoutProvidersInput: UserCreateWithoutProvidersInput;
  UserCreateWithoutSaleItemsInput: UserCreateWithoutSaleItemsInput;
  UserCreateWithoutSalesInput: UserCreateWithoutSalesInput;
  UserMaxAggregate: UserMaxAggregate;
  UserMinAggregate: UserMinAggregate;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserPaginated: UserPaginated;
  UserRelationFilter: UserRelationFilter;
  UserUpdateInput: UserUpdateInput;
  UserUpdateOneRequiredWithoutProductsNestedInput: UserUpdateOneRequiredWithoutProductsNestedInput;
  UserUpdateOneRequiredWithoutProvidersNestedInput: UserUpdateOneRequiredWithoutProvidersNestedInput;
  UserUpdateOneRequiredWithoutSaleItemsNestedInput: UserUpdateOneRequiredWithoutSaleItemsNestedInput;
  UserUpdateOneRequiredWithoutSalesNestedInput: UserUpdateOneRequiredWithoutSalesNestedInput;
  UserUpdateWithoutProductsInput: UserUpdateWithoutProductsInput;
  UserUpdateWithoutProvidersInput: UserUpdateWithoutProvidersInput;
  UserUpdateWithoutSaleItemsInput: UserUpdateWithoutSaleItemsInput;
  UserUpdateWithoutSalesInput: UserUpdateWithoutSalesInput;
  UserUpsertWithoutProductsInput: UserUpsertWithoutProductsInput;
  UserUpsertWithoutProvidersInput: UserUpsertWithoutProvidersInput;
  UserUpsertWithoutSaleItemsInput: UserUpsertWithoutSaleItemsInput;
  UserUpsertWithoutSalesInput: UserUpsertWithoutSalesInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  UsersOutput: UsersOutput;
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
  blameUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  blameUserId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  brandName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isPostPaid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priceValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['Provider'], ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductAvgAggregate'] = ResolversParentTypes['ProductAvgAggregate']> = {
  costValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCount'] = ResolversParentTypes['ProductCount']> = {
  saleItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCountAggregate'] = ResolversParentTypes['ProductCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blameUserId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  brandName?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  costValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isPostPaid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  priceValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  providerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMaxAggregate'] = ResolversParentTypes['ProductMaxAggregate']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  brandName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isPostPaid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priceValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMinAggregate'] = ResolversParentTypes['ProductMinAggregate']> = {
  blameUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  brandName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isPostPaid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priceValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
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
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsOutput'] = ResolversParentTypes['ProductsOutput']> = {
  nodes?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['ProductPaginated']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProviderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Provider'] = ResolversParentTypes['Provider']> = {
  _count?: Resolver<ResolversTypes['ProviderCount'], ParentType, ContextType>;
  blameUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  blameUserId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  sales?: Resolver<ResolversTypes['SalesOutput'], ParentType, ContextType, Partial<QuerySalesArgs>>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryUserArgs, 'where'>>;
  users?: Resolver<ResolversTypes['UsersOutput'], ParentType, ContextType, Partial<QueryUsersArgs>>;
};

export type SaleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sale'] = ResolversParentTypes['Sale']> = {
  _count?: Resolver<ResolversTypes['SaleCount'], ParentType, ContextType>;
  blameUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  blameUserId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  netMarginPercent?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  netMarginValue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  saleItems?: Resolver<ResolversTypes['SaleItemsOutput'], ParentType, ContextType, Partial<SaleSaleItemsArgs>>;
  totalCostValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  blameUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  blameUserId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  costIsPostPaid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['Provider'], ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  saleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalCostValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleItemAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleItemAvgAggregate'] = ResolversParentTypes['SaleItemAvgAggregate']> = {
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalCostValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
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
  saleId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  saleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  saleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

