import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  { timestamps: true }
);

const Product = model("Product", ProductSchema);

export default Product;
