import { Student } from "../models/student.model";

class StudentRepository {
  getAll() {
    return Student.find();
  }

  getByDocument(document: String) {
    return Student.findOne({ document: document });
  }

  create(student: typeof Student) {
    return Student.create(student);
  }

  update(document: String, student: Partial<typeof Student>) {
    return Student.updateOne({ document: document }, { $set: student });
  }

  remove(document: String) {
    return Student.deleteOne({ document: document });
  }
}

export default new StudentRepository();
