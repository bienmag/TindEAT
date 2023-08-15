// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserToUser, UserToFood, Food, User, UserToUserUser, UserToFoodUser } = initSchema(schema);

export {
  UserToUser,
  UserToFood,
  Food,
  User,
  UserToUserUser,
  UserToFoodUser
};