import { GraphQLResolveInfo } from 'graphql';
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
};

export type CreateManyInvestmentGoalInput = {
  data: Array<InvestmentGoalCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type EnumGoalLevelFieldUpdateOperationsInput = {
  set?: InputMaybe<GoalLevel>;
};

export type EnumGoalLevelFilter = {
  equals?: InputMaybe<GoalLevel>;
  in?: InputMaybe<Array<GoalLevel>>;
  not?: InputMaybe<NestedEnumGoalLevelFilter>;
  notIn?: InputMaybe<Array<GoalLevel>>;
};

export type EnumGoalTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<GoalType>;
};

export type EnumGoalTypeFilter = {
  equals?: InputMaybe<GoalType>;
  in?: InputMaybe<Array<GoalType>>;
  not?: InputMaybe<NestedEnumGoalTypeFilter>;
  notIn?: InputMaybe<Array<GoalType>>;
};

export enum GoalLevel {
  Optimist = 'optimist',
  Pessimist = 'pessimist',
  Realist = 'realist'
}

export enum GoalType {
  Value = 'value'
}

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

export type InvestmentGoal = {
  __typename?: 'InvestmentGoal';
  /** ID */
  id: Scalars['ID'];
  /** Level */
  level: GoalLevel;
  /** Montly value to apport (in cents) */
  monthlyApportValue: Scalars['Int'];
  /** Yearly rentability tax (percentage * 100, allowing 2 decimal places) */
  rentabilityTax: Scalars['Int'];
  /** Type */
  type: GoalType;
  /** Value to be reached (in cents) */
  value: Scalars['Int'];
};

export type InvestmentGoalAvgAggregate = {
  __typename?: 'InvestmentGoalAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  monthlyApportValue?: Maybe<Scalars['Float']>;
  rentabilityTax?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

export type InvestmentGoalCountAggregate = {
  __typename?: 'InvestmentGoalCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  level: Scalars['Int'];
  monthlyApportValue: Scalars['Int'];
  rentabilityTax: Scalars['Int'];
  type: Scalars['Int'];
  value: Scalars['Int'];
};

export type InvestmentGoalCreateInput = {
  level: GoalLevel;
  monthlyApportValue: Scalars['Int'];
  rentabilityTax: Scalars['Int'];
  type: GoalType;
  value: Scalars['Int'];
};

export type InvestmentGoalCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  level: GoalLevel;
  monthlyApportValue: Scalars['Int'];
  rentabilityTax: Scalars['Int'];
  type: GoalType;
  value: Scalars['Int'];
};

export type InvestmentGoalMaxAggregate = {
  __typename?: 'InvestmentGoalMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<GoalLevel>;
  monthlyApportValue?: Maybe<Scalars['Int']>;
  rentabilityTax?: Maybe<Scalars['Int']>;
  type?: Maybe<GoalType>;
  value?: Maybe<Scalars['Int']>;
};

export type InvestmentGoalMinAggregate = {
  __typename?: 'InvestmentGoalMinAggregate';
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<GoalLevel>;
  monthlyApportValue?: Maybe<Scalars['Int']>;
  rentabilityTax?: Maybe<Scalars['Int']>;
  type?: Maybe<GoalType>;
  value?: Maybe<Scalars['Int']>;
};

export type InvestmentGoalOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  monthlyApportValue?: InputMaybe<SortOrder>;
  rentabilityTax?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum InvestmentGoalScalarFieldEnum {
  Id = 'id',
  Level = 'level',
  MonthlyApportValue = 'monthlyApportValue',
  RentabilityTax = 'rentabilityTax',
  Type = 'type',
  Value = 'value'
}

export type InvestmentGoalSumAggregate = {
  __typename?: 'InvestmentGoalSumAggregate';
  id?: Maybe<Scalars['Int']>;
  monthlyApportValue?: Maybe<Scalars['Int']>;
  rentabilityTax?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type InvestmentGoalTypeLevelCompoundUniqueInput = {
  level: GoalLevel;
  type: GoalType;
};

export type InvestmentGoalUpdateInput = {
  level?: InputMaybe<EnumGoalLevelFieldUpdateOperationsInput>;
  monthlyApportValue?: InputMaybe<IntFieldUpdateOperationsInput>;
  rentabilityTax?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumGoalTypeFieldUpdateOperationsInput>;
  value?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type InvestmentGoalWhereInput = {
  AND?: InputMaybe<Array<InvestmentGoalWhereInput>>;
  NOT?: InputMaybe<Array<InvestmentGoalWhereInput>>;
  OR?: InputMaybe<Array<InvestmentGoalWhereInput>>;
  id?: InputMaybe<IntFilter>;
  level?: InputMaybe<EnumGoalLevelFilter>;
  monthlyApportValue?: InputMaybe<IntFilter>;
  rentabilityTax?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumGoalTypeFilter>;
  value?: InputMaybe<IntFilter>;
};

export type InvestmentGoalWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  type_level?: InputMaybe<InvestmentGoalTypeLevelCompoundUniqueInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createInvestmentGoal: InvestmentGoal;
  createInvestmentGoals: Scalars['Boolean'];
  createUpdateInvestmentGoals: Scalars['Boolean'];
  createUser: User;
  createUsers: Scalars['Boolean'];
  deleteInvestmentGoal: InvestmentGoal;
  deleteUser: User;
  deleteUsers: Scalars['Boolean'];
  updateInvestmentGoal: InvestmentGoal;
  updateInvestmentGoals: Array<InvestmentGoal>;
  updateUser: User;
  updateUsers: Array<User>;
};


export type MutationCreateInvestmentGoalArgs = {
  data: InvestmentGoalCreateInput;
};


export type MutationCreateInvestmentGoalsArgs = {
  data: Array<InvestmentGoalCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateUpdateInvestmentGoalsArgs = {
  createMany?: InputMaybe<CreateManyInvestmentGoalInput>;
  updateMany?: InputMaybe<UpdateManyInvestmentGoalInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteInvestmentGoalArgs = {
  where: InvestmentGoalWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateInvestmentGoalArgs = {
  data: InvestmentGoalUpdateInput;
  where: InvestmentGoalWhereUniqueInput;
};


export type MutationUpdateInvestmentGoalsArgs = {
  updateMany: Array<UpdateOneInvestmentGoalInput>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  updateMany: Array<UpdateOneUserInput>;
};

export type NestedEnumGoalLevelFilter = {
  equals?: InputMaybe<GoalLevel>;
  in?: InputMaybe<Array<GoalLevel>>;
  not?: InputMaybe<NestedEnumGoalLevelFilter>;
  notIn?: InputMaybe<Array<GoalLevel>>;
};

export type NestedEnumGoalTypeFilter = {
  equals?: InputMaybe<GoalType>;
  in?: InputMaybe<Array<GoalType>>;
  not?: InputMaybe<NestedEnumGoalTypeFilter>;
  notIn?: InputMaybe<Array<GoalType>>;
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

export type Query = {
  __typename?: 'Query';
  investmentGoal: InvestmentGoal;
  investmentGoals: Array<InvestmentGoal>;
  user: User;
  users: Array<User>;
};


export type QueryInvestmentGoalArgs = {
  where: InvestmentGoalWhereUniqueInput;
};


export type QueryInvestmentGoalsArgs = {
  cursor?: InputMaybe<InvestmentGoalWhereUniqueInput>;
  distinct?: InputMaybe<Array<InvestmentGoalScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InvestmentGoalOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InvestmentGoalWhereInput>;
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

export type UpdateManyInvestmentGoalInput = {
  updateMany: Array<UpdateOneInvestmentGoalInput>;
};

export type UpdateOneInvestmentGoalInput = {
  data: InvestmentGoalUpdateInput;
  where: InvestmentGoalWhereUniqueInput;
};

export type UpdateOneUserInput = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  /** ID */
  id: Scalars['ID'];
  /** Name */
  name: Scalars['String'];
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type UserCreateInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type UserCreateManyInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type UserOrderByWithRelationInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  Email = 'email',
  Id = 'id',
  Name = 'name'
}

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type UserUpdateInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateManyInvestmentGoalInput: CreateManyInvestmentGoalInput;
  EnumGoalLevelFieldUpdateOperationsInput: EnumGoalLevelFieldUpdateOperationsInput;
  EnumGoalLevelFilter: EnumGoalLevelFilter;
  EnumGoalTypeFieldUpdateOperationsInput: EnumGoalTypeFieldUpdateOperationsInput;
  EnumGoalTypeFilter: EnumGoalTypeFilter;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GoalLevel: GoalLevel;
  GoalType: GoalType;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  IntFilter: IntFilter;
  InvestmentGoal: ResolverTypeWrapper<InvestmentGoal>;
  InvestmentGoalAvgAggregate: ResolverTypeWrapper<InvestmentGoalAvgAggregate>;
  InvestmentGoalCountAggregate: ResolverTypeWrapper<InvestmentGoalCountAggregate>;
  InvestmentGoalCreateInput: InvestmentGoalCreateInput;
  InvestmentGoalCreateManyInput: InvestmentGoalCreateManyInput;
  InvestmentGoalMaxAggregate: ResolverTypeWrapper<InvestmentGoalMaxAggregate>;
  InvestmentGoalMinAggregate: ResolverTypeWrapper<InvestmentGoalMinAggregate>;
  InvestmentGoalOrderByWithRelationInput: InvestmentGoalOrderByWithRelationInput;
  InvestmentGoalScalarFieldEnum: InvestmentGoalScalarFieldEnum;
  InvestmentGoalSumAggregate: ResolverTypeWrapper<InvestmentGoalSumAggregate>;
  InvestmentGoalTypeLevelCompoundUniqueInput: InvestmentGoalTypeLevelCompoundUniqueInput;
  InvestmentGoalUpdateInput: InvestmentGoalUpdateInput;
  InvestmentGoalWhereInput: InvestmentGoalWhereInput;
  InvestmentGoalWhereUniqueInput: InvestmentGoalWhereUniqueInput;
  Mutation: ResolverTypeWrapper<{}>;
  NestedEnumGoalLevelFilter: NestedEnumGoalLevelFilter;
  NestedEnumGoalTypeFilter: NestedEnumGoalTypeFilter;
  NestedIntFilter: NestedIntFilter;
  NestedStringFilter: NestedStringFilter;
  Query: ResolverTypeWrapper<{}>;
  QueryMode: QueryMode;
  SortOrder: SortOrder;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  UpdateManyInvestmentGoalInput: UpdateManyInvestmentGoalInput;
  UpdateOneInvestmentGoalInput: UpdateOneInvestmentGoalInput;
  UpdateOneUserInput: UpdateOneUserInput;
  User: ResolverTypeWrapper<User>;
  UserAvgAggregate: ResolverTypeWrapper<UserAvgAggregate>;
  UserCountAggregate: ResolverTypeWrapper<UserCountAggregate>;
  UserCreateInput: UserCreateInput;
  UserCreateManyInput: UserCreateManyInput;
  UserMaxAggregate: ResolverTypeWrapper<UserMaxAggregate>;
  UserMinAggregate: ResolverTypeWrapper<UserMinAggregate>;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserScalarFieldEnum: UserScalarFieldEnum;
  UserSumAggregate: ResolverTypeWrapper<UserSumAggregate>;
  UserUpdateInput: UserUpdateInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CreateManyInvestmentGoalInput: CreateManyInvestmentGoalInput;
  EnumGoalLevelFieldUpdateOperationsInput: EnumGoalLevelFieldUpdateOperationsInput;
  EnumGoalLevelFilter: EnumGoalLevelFilter;
  EnumGoalTypeFieldUpdateOperationsInput: EnumGoalTypeFieldUpdateOperationsInput;
  EnumGoalTypeFilter: EnumGoalTypeFilter;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  IntFilter: IntFilter;
  InvestmentGoal: InvestmentGoal;
  InvestmentGoalAvgAggregate: InvestmentGoalAvgAggregate;
  InvestmentGoalCountAggregate: InvestmentGoalCountAggregate;
  InvestmentGoalCreateInput: InvestmentGoalCreateInput;
  InvestmentGoalCreateManyInput: InvestmentGoalCreateManyInput;
  InvestmentGoalMaxAggregate: InvestmentGoalMaxAggregate;
  InvestmentGoalMinAggregate: InvestmentGoalMinAggregate;
  InvestmentGoalOrderByWithRelationInput: InvestmentGoalOrderByWithRelationInput;
  InvestmentGoalSumAggregate: InvestmentGoalSumAggregate;
  InvestmentGoalTypeLevelCompoundUniqueInput: InvestmentGoalTypeLevelCompoundUniqueInput;
  InvestmentGoalUpdateInput: InvestmentGoalUpdateInput;
  InvestmentGoalWhereInput: InvestmentGoalWhereInput;
  InvestmentGoalWhereUniqueInput: InvestmentGoalWhereUniqueInput;
  Mutation: {};
  NestedEnumGoalLevelFilter: NestedEnumGoalLevelFilter;
  NestedEnumGoalTypeFilter: NestedEnumGoalTypeFilter;
  NestedIntFilter: NestedIntFilter;
  NestedStringFilter: NestedStringFilter;
  Query: {};
  String: Scalars['String'];
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  UpdateManyInvestmentGoalInput: UpdateManyInvestmentGoalInput;
  UpdateOneInvestmentGoalInput: UpdateOneInvestmentGoalInput;
  UpdateOneUserInput: UpdateOneUserInput;
  User: User;
  UserAvgAggregate: UserAvgAggregate;
  UserCountAggregate: UserCountAggregate;
  UserCreateInput: UserCreateInput;
  UserCreateManyInput: UserCreateManyInput;
  UserMaxAggregate: UserMaxAggregate;
  UserMinAggregate: UserMinAggregate;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserSumAggregate: UserSumAggregate;
  UserUpdateInput: UserUpdateInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
};

export type InvestmentGoalResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvestmentGoal'] = ResolversParentTypes['InvestmentGoal']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['GoalLevel'], ParentType, ContextType>;
  monthlyApportValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rentabilityTax?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['GoalType'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvestmentGoalAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvestmentGoalAvgAggregate'] = ResolversParentTypes['InvestmentGoalAvgAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  monthlyApportValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rentabilityTax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvestmentGoalCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvestmentGoalCountAggregate'] = ResolversParentTypes['InvestmentGoalCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  monthlyApportValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rentabilityTax?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvestmentGoalMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvestmentGoalMaxAggregate'] = ResolversParentTypes['InvestmentGoalMaxAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['GoalLevel']>, ParentType, ContextType>;
  monthlyApportValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rentabilityTax?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['GoalType']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvestmentGoalMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvestmentGoalMinAggregate'] = ResolversParentTypes['InvestmentGoalMinAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['GoalLevel']>, ParentType, ContextType>;
  monthlyApportValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rentabilityTax?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['GoalType']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvestmentGoalSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvestmentGoalSumAggregate'] = ResolversParentTypes['InvestmentGoalSumAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  monthlyApportValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rentabilityTax?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createInvestmentGoal?: Resolver<ResolversTypes['InvestmentGoal'], ParentType, ContextType, RequireFields<MutationCreateInvestmentGoalArgs, 'data'>>;
  createInvestmentGoals?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateInvestmentGoalsArgs, 'data'>>;
  createUpdateInvestmentGoals?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<MutationCreateUpdateInvestmentGoalsArgs>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'data'>>;
  createUsers?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateUsersArgs, 'data'>>;
  deleteInvestmentGoal?: Resolver<ResolversTypes['InvestmentGoal'], ParentType, ContextType, RequireFields<MutationDeleteInvestmentGoalArgs, 'where'>>;
  deleteUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'where'>>;
  deleteUsers?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<MutationDeleteUsersArgs>>;
  updateInvestmentGoal?: Resolver<ResolversTypes['InvestmentGoal'], ParentType, ContextType, RequireFields<MutationUpdateInvestmentGoalArgs, 'data' | 'where'>>;
  updateInvestmentGoals?: Resolver<Array<ResolversTypes['InvestmentGoal']>, ParentType, ContextType, RequireFields<MutationUpdateInvestmentGoalsArgs, 'updateMany'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'data' | 'where'>>;
  updateUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUsersArgs, 'updateMany'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  investmentGoal?: Resolver<ResolversTypes['InvestmentGoal'], ParentType, ContextType, RequireFields<QueryInvestmentGoalArgs, 'where'>>;
  investmentGoals?: Resolver<Array<ResolversTypes['InvestmentGoal']>, ParentType, ContextType, Partial<QueryInvestmentGoalsArgs>>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryUserArgs, 'where'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryUsersArgs>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAvgAggregate'] = ResolversParentTypes['UserAvgAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
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
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMinAggregate'] = ResolversParentTypes['UserMinAggregate']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserSumAggregate'] = ResolversParentTypes['UserSumAggregate']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  InvestmentGoal?: InvestmentGoalResolvers<ContextType>;
  InvestmentGoalAvgAggregate?: InvestmentGoalAvgAggregateResolvers<ContextType>;
  InvestmentGoalCountAggregate?: InvestmentGoalCountAggregateResolvers<ContextType>;
  InvestmentGoalMaxAggregate?: InvestmentGoalMaxAggregateResolvers<ContextType>;
  InvestmentGoalMinAggregate?: InvestmentGoalMinAggregateResolvers<ContextType>;
  InvestmentGoalSumAggregate?: InvestmentGoalSumAggregateResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAvgAggregate?: UserAvgAggregateResolvers<ContextType>;
  UserCountAggregate?: UserCountAggregateResolvers<ContextType>;
  UserMaxAggregate?: UserMaxAggregateResolvers<ContextType>;
  UserMinAggregate?: UserMinAggregateResolvers<ContextType>;
  UserSumAggregate?: UserSumAggregateResolvers<ContextType>;
};

