import { Query, databases } from "@/config/appwrite";


const useGetProfileByUserId = async (accountId: string) => {
    try {
        const response = await databases.listDocuments(
            String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE), 
            String(process.env.NEXT_PUBLIC_USER_COLLECTION), 
            [ 
                Query.equal('accountId', accountId) 
            ]
        );
        const documents = response.documents;
        return {
            id: documents[0]?.$id,
            accountId: documents[0]?.accountId,
            name: documents[0]?.name,
            email: documents[0]?.email
        }
      } catch (error) {
          throw error
      }
}

export default useGetProfileByUserId