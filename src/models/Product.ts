import mongoose from 'mongoose';

export interface IProductData {
  name: string;
  price: number;
  inStock: boolean;
  photoUrl?: string;
  weight?: number;
}

export type ProductDocument = mongoose.Document & IProductData;

const productSchema = new mongoose.Schema({
  inStock: Boolean,
  name: String,
  photoUrl: String,
  price: Number,
  weight: Number,
});

export const Product = mongoose.model<ProductDocument>('Product', productSchema);
