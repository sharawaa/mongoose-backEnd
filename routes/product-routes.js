import express from "express";
import myModel from "../model/product-model.js";

const Router = express.Router();

Router.get("/product", async (req, res) => {
  const result = await myModel.findOne({});
  console.log(result);
  res.status(200).send(result);
});

// Router.post("/product", async (request, res)=>{
//   //const dugnelt = await myModel.insertOne(request.body);
//   console.log(request.body)
// })

Router.post("/products", async (req, res) => {
  const newProduct = req.body
  
  const result = await myModel.create({name:newProduct.name,image:newProduct.image,stock:newProduct.stock,sale:newProduct.sale,});
  console.log(newProduct.sale);
  res.status(200).send(result);
});
Router.delete("/products", async (req, res)=>{
  const result = await myModel.deleteOne(req.body);
  console.log(req.body);
  res.status(200).send(result);
});

Router.put("/products", async (req, res)=>{
  const upProduct = req.body
  const result = await myModel.updateOne(upProduct,{$set:{name:"namkaa minidee"}});
  console.log(req.body);
  res.status(200).send(result);
})

export default Router;
