import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    address: String,
    phone: String,
    userId: String,
    date: { type: Date, default: Date.now },
    orderProducts: [{ id: String, stock: Number }],
  },
  { collection: "orders" }
);
const orderModel = mongoose.model("orderModel", schema, "orders");

export default orderModel;
