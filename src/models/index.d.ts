import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerUserToUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserToUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId_1?: string | null;
  readonly userId_2?: string | null;
  readonly Users?: (UserToUserUser | null)[] | null;
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
  readonly Users: AsyncCollection<UserToUserUser>;
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
  readonly Users?: (UserToFoodUser | null)[] | null;
  readonly Food?: Food | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userToFoodFoodId?: string | null;
}

type LazyUserToFood = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserToFood, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Users: AsyncCollection<UserToFoodUser>;
  readonly Food: AsyncItem<Food | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userToFoodFoodId?: string | null;
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
  readonly pric?: string | null;
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
  readonly pric?: string | null;
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
  readonly usertofoods?: (UserToFoodUser | null)[] | null;
  readonly usertousers?: (UserToUserUser | null)[] | null;
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
  readonly usertofoods: AsyncCollection<UserToFoodUser>;
  readonly usertousers: AsyncCollection<UserToUserUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerUserToUserUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserToUserUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userToUserId?: string | null;
  readonly userId?: string | null;
  readonly userToUser: UserToUser;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserToUserUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserToUserUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userToUserId?: string | null;
  readonly userId?: string | null;
  readonly userToUser: AsyncItem<UserToUser>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserToUserUser = LazyLoading extends LazyLoadingDisabled ? EagerUserToUserUser : LazyUserToUserUser

export declare const UserToUserUser: (new (init: ModelInit<UserToUserUser>) => UserToUserUser) & {
  copyOf(source: UserToUserUser, mutator: (draft: MutableModel<UserToUserUser>) => MutableModel<UserToUserUser> | void): UserToUserUser;
}

type EagerUserToFoodUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserToFoodUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userToFoodId?: string | null;
  readonly userId?: string | null;
  readonly userToFood: UserToFood;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserToFoodUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserToFoodUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userToFoodId?: string | null;
  readonly userId?: string | null;
  readonly userToFood: AsyncItem<UserToFood>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserToFoodUser = LazyLoading extends LazyLoadingDisabled ? EagerUserToFoodUser : LazyUserToFoodUser

export declare const UserToFoodUser: (new (init: ModelInit<UserToFoodUser>) => UserToFoodUser) & {
  copyOf(source: UserToFoodUser, mutator: (draft: MutableModel<UserToFoodUser>) => MutableModel<UserToFoodUser> | void): UserToFoodUser;
}