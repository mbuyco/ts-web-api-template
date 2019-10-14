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
    return this.productRepository.findAll();
  }
}
