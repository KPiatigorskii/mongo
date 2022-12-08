import { addStudent, getAllStudents } from "./bl/student.bl";
import { connect } from "./mongoDb/mongoDb";

connect().then(async () => {
  let userId = await addStudent({
    age: 32,
    firstName: "Dmitriy",
    lastName: "sss",
  });

  let students = await getAllStudents();
  students.forEach((element) => {
    console.log(element);
  });
});
