import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const healthCheck = { message: "Aplicacao funcionando com sucesso!" };
  res.send(healthCheck);
});

router.get("/check", (req: Request, res: Response) => {
  const healthCheck = { message: "Aplicacao funcionando com normalmente!" };
  res.send(healthCheck);
});

export default router;
