import nextConnect from "next-connect";
import database from "./database";

const handler = nextConnect();


handler.use(database)

export default handler