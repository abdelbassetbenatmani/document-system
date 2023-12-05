import { Client, Account, Databases, Avatars, Storage,Query } from "appwrite";

// export const appwriteConfig = {
//   url: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
//   projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_KEY,
//   databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
//   storageId: process.env.NEXT_PUBLIC_APPWRITE_STORAGE,
//   userCollectionId: process.env.NEXT_PUBLIC_USER_COLLECTION,
// };

const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_KEY as string);

export const account = new Account(client);
export const databases = new Databases(client);
export const storages = new Storage(client);
export const avatars = new Avatars(client);

export { ID ,Query} from "appwrite";
