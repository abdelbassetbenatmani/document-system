import { ID, databases } from "@/config/appwrite";

const useCreateProfile = async (user: {
  accountId: string;
  email: string;
  name: string;
  imageUrl?: URL;
  username?: string;
}) => {
  try {
    await databases.createDocument(
      String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE),
      String(process.env.NEXT_PUBLIC_USER_COLLECTION),
      ID.unique(),
      user
    );
  } catch (error) {
    throw error;
  }
};

export default useCreateProfile;
