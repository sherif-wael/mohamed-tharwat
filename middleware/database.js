import { MongoClient } from 'mongodb';

const client = new MongoClient("mongodb+srv://sherifwael:mohamedtharwat@cluster0.2tuo0.mongodb.net/clinic?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function setUpDb(db) {
  db.collection("register");
}

export default async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("clinic");
  await setUpDb(req.db);
  return next();
}