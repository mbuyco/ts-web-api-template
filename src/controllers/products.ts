import { NextFunction, Request, Response } from "express";

// Controller for handling Products API
class Products {
  public static list(req: Request, res: Response, next: NextFunction): void {
    res.json({ test: true });
  }
}

export default Products;
