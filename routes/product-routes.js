import express from "express";
import myModel from "../model/product-model.js";

const Router = express.Router();

Router.get("/movie", async (req, res) => {
  const result = await myModel.findOne({});
  console.log(result);
  res.status(200).send(result);
});

export default Router;
