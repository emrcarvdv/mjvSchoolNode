import { Request, Response, Router } from "express";
import ProductsService from "../services/products.service";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const products = ProductsService.getAll();
  res.send(products);
});

router.get("/:id", (req: Request, res: Response) => {
  const product = ProductsService.getByID(parseInt(req.params.id));
  if (!product)
    return res.status(400).send({ message: "Produto não encontrado!" });
  res.status(200).send(product);
});

router.post("/", (req: Request, res: Response) => {
  if (req.body.quantity < 1) {
    return res
      .status(400)
      .send({ message: "A quantidade é menor ou igual a zero." });
  } else if (req.body.price < 0) {
    return res.status(400).send({ message: "O preço não pode ser negativo." });
  }
  ProductsService.create(req.body);
  res.send({ message: "Produto Cadastrado com Sucesso!" });
});

router.delete("/:id", (req: Request, res: Response) => {
  try {
    ProductsService.remove(parseInt(req.params.id));
    res.status(200).send({ message: "Produto removido com sucesso!" });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/:id", (req: Request, res: Response) => {
  try {
    ProductsService.update(parseInt(req.params.id), req.body);
    res.status(200).send({ message: "Produto atualizado com sucesso!" });
  } catch (error) {
    res.status(400).send(error);
  }
});
export default router;
