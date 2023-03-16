import express from "express";
import myModel from "../model/product-model.js";
import { addProduct, deleteProduct } from "../services/product-service.js";

const Router = express.Router();

//product get
Router.get("/product", async (req, res) => {
  const result = await myModel.findOne({});
  console.log(result);
  res.status(200).send(result);
});
//product post
Router.post("/products", async (req, res) => {
  const result = await addProduct(req.body.products);
  console.log(req.body);
  res.status(200).send(result);
});
//product delete
Router.delete("/products", async (req, res) => {
  const result = await deleteProduct(req.body);
  console.log();
  res.status(200).send(result);
});
//product put
Router.put("/products", async (req, res) => {
  const upProduct = req.body;
  const result = await myModel.updateOne(upProduct, {
    $set: { name: "uurchluluuu" },
  });
  console.log(req.body);
  res.status(200).send(result);
});

export default Router;
