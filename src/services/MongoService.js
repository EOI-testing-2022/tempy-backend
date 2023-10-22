import { MongoClient , ServerApiVersion} from 'mongodb';

let db;
export async function connectToDatabase() {
    try {
        const dbName = 'test';
        const url = 'mongodb://127.0.0.1:27017';
        const client = new MongoClient(url, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        await client.connect();
        console.log('Connected to database');
        db = client.db(dbName)
        return db;
    } catch (err) {
        console.error('Error connecting to database:', err);
        throw err;
    }
}