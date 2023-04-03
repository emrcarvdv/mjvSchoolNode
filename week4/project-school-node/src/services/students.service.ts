import { Student } from "../models/student.model";

class StudentsService {
  students: Array<Student> = [
    {
      name: "John Wick",
      email: "john@gmail.com",
      document: "12312312344",
      password: "123456",
      age: 35,
    },
    {
      name: "Harry Potter",
      email: "hp@gmail.com",
      document: "32132132144",
      password: "123456",
      age: 19,
    },
    {
      name: "Capitão Nascimento",
      email: "cap.nascimento@gmail.com",
      document: "22233344455",
      password: "333222555",
      age: 45,
    },
    {
      name: "Bilbo Baggins",
      email: "bilbobagg@gmail.com",
      document: "11122233344",
      password: "343434",
      age: 50,
    },
  ];

  getAll() {
    return this.students;
  }

  getByDocument(document: string) {
    const student = this.students.find((std) => std.document === document);
    return student;
  }

  create(student: Student) {
    this.students.push(student);
  }

  remove(document: string) {
    const studentIndex = this.students.findIndex(
      (student) => student.document === document
    );
    if (studentIndex === -1) {
      throw new Error("Estudante não encontrado!");
    }
    this.students.splice(studentIndex, 1);
  }

  update(document: string, student: Student) {
    const studentIndex = this.students.findIndex(
      (student) => student.document === document
    );
    if (studentIndex === -1) {
      throw new Error("Estudante não encontrado!");
    }
    this.students[studentIndex] = student;
  }
}

export default new StudentsService();
