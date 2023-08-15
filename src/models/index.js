// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserToFood, Food, User } = initSchema(schema);

export {
  UserToFood,
  Food,
  User
};