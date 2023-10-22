import { connectToDatabase } from "../services/MongoService.js";

export async function insertComment(comment) {
    const db = await connectToDatabase();
    const collection = db.collection('comments');
    const result = await collection.insertOne(comment);
    return result
}
  
export async function getComments() {
    const db = await connectToDatabase();
    const collection = db.collection('comments');
    const comments = await collection.find({}).toArray();
    return comments;
  }