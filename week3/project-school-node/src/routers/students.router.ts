import { Request, Response, Router } from "express";

const router = Router();

const students = [
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

router.get("/", (req: Request, res: Response) => {
  res.send(students);
});

router.get("/:document", (req: Request, res: Response) => {
  const student = students.find((std) => std.document === req.params.document);
  if (!student)
    return res.status(400).send({ message: "Estudante não encontrado!" });
  res.status(200).send(student);
});

router.post("/", (req: Request, res: Response) => {
  if (req.body.age < 18) {
    return res
      .status(400)
      .send({ message: "Estudante não tem a idade mímina" });
  }
  students.push(req.body);
  res.send({ message: "Estudante Criado com Sucesso!" });
});

router.delete("/remove/:document", (req: Request, res: Response) => {
  const studentIndex = students.findIndex(
    (student) => student.document === req.params.document
  );
  if (studentIndex === -1) {
    return res.status(400).send({ message: "Estudante não encontrado!" });
  }
  students.splice(studentIndex, 1);
  res.status(200).send({ message: "Estudante removido com sucesso!" });
});

router.put("/:document", (req: Request, res: Response) => {
  const studentIndex = students.findIndex(
    (student) => student.document === req.params.document
  );
  if (studentIndex === -1) {
    return res.status(400).send({ message: "Estudante não encontrado!" });
  }
  students[studentIndex] = req.body;
  res.status(200).send({ message: "Estudante atualizado com sucesso!" });
});

export default router;
