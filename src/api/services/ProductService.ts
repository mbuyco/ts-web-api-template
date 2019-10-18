import { Inject, Service } from "typedi";

import { IProduct } from "../models/Product";
import ProductRepository from "../repositories/ProductRepository";

@Service()
export default class ProductService {
  constructor(
    @Inject((type) => ProductRepository) private productRepository: ProductRepository
  ) {
  }

  public async findAll(): Promise<IProduct[]> {
    console.log(this.productRepository);
    return this.productRepository.findAll();
  }

  public async findById(id: string) {
    return this.productRepository.findById(id);
  }

  public async create(data: IProduct): Promise<IProduct | null> {
    return this.productRepository.create(data);
  }

  public async update(id: string, data: IProduct): Promise<IProduct> {
    return this.productRepository.update(id, data);
  }

  public async delete(id: string): Promise<any> {
    return this.productRepository.delete(id);
  }
}
