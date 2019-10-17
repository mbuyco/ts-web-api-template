import { Request, Response } from "express";
import { Container } from "typedi";

import ProductService from "../services/ProductService";

export default class ProductsController {
  public static findAll(req: Request, res: Response): void {
    const service = Container.get(ProductService);
    res.json({ products: service.findAll() });
  }

  public static findById(req: Request, res: Response): void {
    const service = Container.get(ProductService);
    res.json({ product: service.findById(req.params.id) });
  }

  public static create(req: Request, res: Response): void {
    const service = Container.get(ProductService);
    res.json({ product: service.create(req.body) });
  }

  public static update(req: Request, res: Response): void {
    const service = Container.get(ProductService);
    res.json({ product: service.update(req.params.id, req.body) });
  }

  public static delete(req: Request, res: Response): void {
    const service = Container.get(ProductService);
    res.json({ product: service.delete(req.params.id) });
  }
}
