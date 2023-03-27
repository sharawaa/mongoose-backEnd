import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    address: String,
    phone: String,
    userId: String,
    date: String,
    order: [],
  },
  { collection: "orders" }
);
const orderModel = mongoose.model("userModel", schema, "orders");
