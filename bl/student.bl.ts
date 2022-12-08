import { Student } from "../interfaces/student.interface";
import { students } from "../mongoDb/mongoDb";

export const getAllStudents = async () => {
  let result = await students.find();
  return result;
};

export const addStudent = async (student: Student) => {
  let id = await students.insertOne(student);
  return id;
};
