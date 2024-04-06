import { Db, MongoClient } from 'mongodb';
async function connect(): Promise<Db | undefined> {
  const connectionString = process.env.MONGODB_URI!;
  console.log(connectionString);
  try {
    const client = new MongoClient(connectionString);
    const conn = await client.connect();
    let db = conn?.db('cleanASF');
    return db;
  } catch (e) {
    console.error(e);
  }
}
export default connect;
