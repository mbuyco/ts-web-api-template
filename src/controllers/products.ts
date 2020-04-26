import { Request, Response } from 'express';
import { IProductData, Product, ProductDocument } from '../models/Product';

// Controller for handling Products API
class Products {
  public static async get(req: Request, res: Response): Promise<void> {
    const product = await Product.findOne({ _id: req.params.id });
    res.json({ product });
  }

  public static async list(req: Request, res: Response): Promise<void> {
    const products: ProductDocument[] = await Product.find({});
    res.json({ products });
  }

  public static async create(req: Request, res: Response): Promise<void> {
    const productData: IProductData = req.body;
    const product: ProductDocument = await Product.create(productData);
    res.json({ product });
  }

  public static async update(req: Request, res: Response): Promise<void> {
    const productData: IProductData = req.body;
    const product: ProductDocument | null = await Product.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      productData,
      {
        new: true,
      },
    );

    res.json({ product });
  }

  public static async destroy(req: Request, res: Response): Promise<void> {
    const product: any | null = await Product.deleteOne({ _id: req.params.id });
    res.json({ product });
  }
}

export default Products;
