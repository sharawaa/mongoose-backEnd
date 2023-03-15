import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    image: String,
    stock: Number,
    price: Number,
    sale: Number,
    id: String,
    spec: Array,
    description: String

}, { collection: "products" });

const myModel = mongoose.model("myModel", schema, "products");
export default myModel;
