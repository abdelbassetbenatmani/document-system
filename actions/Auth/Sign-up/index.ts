// "use server";
// import { ID, account, avatars, databases } from "@/config/appwrite";
// import { INewUser } from "@/types";

// export async function createUserAccount(user: INewUser) {
//   try {
//     const newAccount = await account.create(
//       ID.unique(),
//       user.email,
//       user.password,
//       user.name
//     );

//     if (!newAccount){
//       return {
//         error: 'Error creating account',
//         status:400
//       }
//     };

//     const avatarUrl = avatars.getInitials(user.name);

//     const newUser = await saveUserToDB({
//       accountId: newAccount.$id,
//       name: newAccount.name,
//       email: newAccount.email,
//       username: user.username,
//       imageUrl: avatarUrl,
//     });
    

//     return {
//       status:200,
//       data: newUser,
//     };
//   } catch (error:any) {
//     console.log(error.message);
//     return {
//       status: error.code,
//       error: error.message,
//     };
//   }
// }

// // ============================== SAVE USER TO DB
// export async function saveUserToDB(user: {
//   accountId: string;
//   email: string;
//   name: string;
//   imageUrl: URL;
//   username?: string;
// }) {
//   try {
//     const newUser = await databases.createDocument(
//       process.env.NEXT_PUBLIC_APPWRITE_DATABASE as string,
//       process.env.NEXT_PUBLIC_USER_COLLECTION as string,
//       ID.unique(),
//       user
//     );
    

//     return newUser;
//   } catch (error) {
//     console.log(error);
//   }
// }


// // ============================== SIGN OUT
// export async function signOutAccount() {
//   try {
//     const session = await account.deleteSession("current");

//     return session;
//   } catch (error) {
//     console.log(error);
//   }
// }