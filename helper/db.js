import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://Hasan:Hasan_abm7@webproject.huvor.mongodb.net/auth-uniProject?retryWrites=true&w=majority"
  );
  return client;
}
