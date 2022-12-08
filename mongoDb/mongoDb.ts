import { Collection, Db, MongoClient } from "mongodb";
import { Student } from "../interfaces/student.interface";

const connectionString = "mongodb://localhost:27017";
const client = new MongoClient(connectionString);

export let students: Collection<Student>;

export const connect = async () => {
  await client.connect();
  const db = client.db("zionet");
  students = db.collection<Student>("students");
};
