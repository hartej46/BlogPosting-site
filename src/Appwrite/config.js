import conf from '../conf/conf.js';
import { Client, ID, TablesDB, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);
        this.databases = new TablesDB(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredimage, status, userid }) {
        try {
            return await this.databases.createRow({
                databaseId: conf.appwriteDatabaseID,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredimage,
                    status,
                    userid
                }
            });
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug, { title, content, featuredimage, status }) {
        try {
            return await this.databases.updateRow({
                databaseId: conf.appwriteDatabaseID,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredimage,
                    status,
                }
            })
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            return await this.databases.deleteRow({
                databaseId: conf.appwriteDatabaseID,
                tableId: conf.appwriteCollectionId,
                rowId: slug
            })
        } catch (error) {
            throw error;

        }
    }


    async getPost(slug) {
        try {
            return await this.databases.getRow({
                databaseId: conf.appwriteDatabaseID,
                tableId: conf.appwriteCollectionId,
                rowId: slug
            })
        } catch (error) {
            console.log("Appwritevserive :: getPost :: error ", error)
            // throw error;
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listRows({
                databaseId: conf.appwriteDatabaseID,
                tableId: conf.appwriteCollectionId,
                queries: queries,
            })
        } catch (error) {
            console.log("Appwritevserive :: getPost :: error ", error)
            // throw error;
            return false
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique(),
                file: file,
            })
        } catch (error) {
            console.log("Appwritevserive :: getPost :: error ", error)
            // throw error;
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId: fileId
            })
        } catch (error) {
            console.log("Appwritevserive :: getPost :: error ", error)
            // throw error;
            return false
        }
    }

    getPreview(fileId) {
        try {
            return this.bucket.getFilePreview({
                bucketId: conf.appwriteBucketId,
                fileId: fileId,
            })
        } catch (error) {
            console.log("Appwritevserive :: getPost :: error ", error)
            // throw error;
            return false
        }
    }

    getView(fileId) {
        try {
            return this.bucket.getFileView({
                bucketId: conf.appwriteBucketId,
                fileId: fileId,
            })
        } catch (error) {
            console.log("Appwritevserive :: getPost :: error ", error)
            // throw error;
            return false
        }
    }
}

const service = new Service()

export default service