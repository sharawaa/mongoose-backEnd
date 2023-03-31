import express from "express";
import orderModel from "../model/order-model.js";
import productModel from "../model/product-model.js";

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

orderRouter.post("/profileOrder", async (req, res) => {
  try {
    const userId = req.body.userId;
    const order = await orderModel.findOne({ userId: userId });

    const orderProducts = order.orderProducts;

    const product = await productModel.find({ _id: orderProducts[0]._id });
    console.log("product", orderProducts);

    res.status(200).json({ product: product, stock: orderProducts[0].stock });
  } catch (err) {
    console.log("zahialga oldsongui");
  }
});

export default orderRouter;
