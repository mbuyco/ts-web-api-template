import { expect } from "chai";
import { Container } from "typedi";

import ProductService from "../../src/api/services/ProductService";

describe("ProductService", () => {
  let productService: ProductService;

  // Load product service
  beforeEach(() => productService = Container.get(ProductService));

  describe("#findAll", () => {
    test("Should return a list of products", (done) => {
      return productService.findAll()
        .then((response: any) => {
          expect(response.body).to.have.property("products");
          expect(response.body.products).to.have.be("array");
          done();
        })
        .catch(done);
    });
  });
});
