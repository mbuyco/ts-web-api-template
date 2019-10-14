import { Request, Response } from "express";
import { Container } from "typedi";

import ProductService from "../services/ProductService";

export default class ProductsController {
  public static findAll(req: Request, res: Response): void {
    const service = Container.get(ProductService);
    res.json({ product: service.findAll() });
  }
}
