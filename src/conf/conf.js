const conf = {
    appwriteURL: import.meta.env.VITE_APPWRITE_URL,
    appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    appwriteBucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
    appwriteCollectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
    appwriteDatabaseID: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tinymceApiKey: String(import.meta.env.VITE_TINYMCE_API_KEY),
    adSenseClientId: String(import.meta.env.VITE_ADSENSE_CLIENT_ID),
    adSenseSlotId: String(import.meta.env.VITE_ADSENSE_SLOT_ID),
}

export default conf