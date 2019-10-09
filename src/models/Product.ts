import mongoose from "mongoose";

export type ProductDocument = mongoose.Document & {
  name: string,
  price: number,
  inStock: boolean,
  photoUrl: string
};

const productSchema = new mongoose.Schema({
  inStock: Boolean,
  name: String,
  photoUrl: String,
  price: Number
});

export const Product = mongoose.model<ProductDocument>("Product", productSchema);
