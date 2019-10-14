import mongoose from "mongoose";

export interface IProduct extends mongoose.Document {
  name: string;
  price: number;
  inStock: boolean;
  photoUrl?: string;
  weight?: number;
}

const productSchema = new mongoose.Schema({
  inStock: Boolean,
  name: String,
  photoUrl: String,
  price: Number,
  weight: Number
});

export const Product = mongoose.model<IProduct>("Product", productSchema);
