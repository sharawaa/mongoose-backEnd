import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: String,
    image: String,
    stock: Number,
    price: Number,
    sale: Number,
    id: String,
    spec: Array,
    description: String,
    category: String,
  },
  { collection: "products" }
);

const productModel = mongoose.model("myModel", schema, "products");
export default productModel;
