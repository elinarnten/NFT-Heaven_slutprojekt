import mongoose, { ObjectId, Schema, Types } from "mongoose";

export interface Product {
  categories: Types.ObjectId[];
  name: String;
  description: String;
  image: String; // beacause image was not working...
  price: Number;
  stock?: Number;
  quantity?: Number;
}

const ProductSchema = new mongoose.Schema(
  {
    categories: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: Image, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    strict: "throw",
  }
);

export const ProductModel = mongoose.model<Product>("product", ProductSchema);
