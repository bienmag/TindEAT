import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUserToUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserToUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId_1?: string | null;
  readonly userId_2?: string | null;
  readonly food?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserToUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserToUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId_1?: string | null;
  readonly userId_2?: string | null;
  readonly food?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserToUser = LazyLoading extends LazyLoadingDisabled ? EagerUserToUser : LazyUserToUser

export declare const UserToUser: (new (init: ModelInit<UserToUser>) => UserToUser) & {
  copyOf(source: UserToUser, mutator: (draft: MutableModel<UserToUser>) => MutableModel<UserToUser> | void): UserToUser;
}

type EagerUserToFood = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserToFood, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly foodId?: string | null;
  readonly userId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserToFood = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserToFood, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly foodId?: string | null;
  readonly userId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserToFood = LazyLoading extends LazyLoadingDisabled ? EagerUserToFood : LazyUserToFood

export declare const UserToFood: (new (init: ModelInit<UserToFood>) => UserToFood) & {
  copyOf(source: UserToFood, mutator: (draft: MutableModel<UserToFood>) => MutableModel<UserToFood> | void): UserToFood;
}

type EagerFood = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Food, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly img?: string | null;
  readonly name?: string | null;
  readonly dsc?: string | null;
  readonly price?: string | null;
  readonly rate?: string | null;
  readonly country?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFood = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Food, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly img?: string | null;
  readonly name?: string | null;
  readonly dsc?: string | null;
  readonly price?: string | null;
  readonly rate?: string | null;
  readonly country?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Food = LazyLoading extends LazyLoadingDisabled ? EagerFood : LazyFood

export declare const Food: (new (init: ModelInit<Food>) => Food) & {
  copyOf(source: Food, mutator: (draft: MutableModel<Food>) => MutableModel<Food> | void): Food;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly bio?: string | null;
  readonly sub: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly bio?: string | null;
  readonly sub: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}