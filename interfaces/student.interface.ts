import { ObjectId } from "mongodb";

export interface Student {
  _id?: ObjectId;
  firstName: string;
  lastName: string;
  age: number;
}
