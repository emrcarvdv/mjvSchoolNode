import express from "express";
import { Request, Response, Router } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const router = Router();

const port = 3000;

app.listen(port, () => {
  console.log("Aplicação online na porta: ", port);
});

router.get("/", (req: Request, res: Response) => {
  const helloWorld = { message: "Hello World!" };
  res.send(helloWorld);
});

app.use(router);
