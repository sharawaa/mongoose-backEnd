import express from "express";
import orderModel from "../model/order-model.js";

const orderRouter = express.Router();

orderRouter.get("/order", async (req, res) => {
  const result = await orderModel.find({});
  res.status(200).send(result);
});

orderRouter.post("/order", async (req, res) => {
  console.log(req.body);
  const result = await orderModel.create({ ...req.body });
  res.status(200).send(result);
});
export default orderRouter;
