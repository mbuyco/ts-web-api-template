import { Inject, Service } from "typedi";
import { IProduct, Product } from "../models/Product";

@Service()
export default class ProductRepository {
  constructor(
    @Inject("logger") private logger: any
  ) {
  }

  public async create(data: any): Promise<IProduct> {
    return Product.create(data);
  }

  public async delete(id: string): Promise<any> {
    return Product.remove({ _id: id });
  }

  public async findAll(): Promise<IProduct[]> {
    this.logger.info("Finding all products...");
    return Product.find({});
  }

  public async findById(id: string): Promise<IProduct | null> {
    return Product.findById(id);
  }

  public async update(id: string, data: any): Promise<IProduct> {
    return Product.updateOne({ _id: id }, data);
  }
}
