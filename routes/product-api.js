import express from "express";
import cloudinary from "../config/cloudinary.js";
import productModel from "../model/product-model.js";
import { addProduct, deleteProduct, searchProduct } from "../services/product-service.js";
import upload from "../util/multer-handler.js";

const Router = express.Router();

//product get
Router.get("/product", async (req, res) => {
  const result = await productModel.find({});
  //console.log(result);
  res.status(200).send(result);
});

//product post
Router.post("/product", upload.single("file"), async (req, res) => {
  let product = JSON.parse(req.body.product);
  const responsive = await cloudinary.v2.uploader.upload(`${req.file.path}`, {
    folder: `${req.file.filename}`,
  });
  product = await { ...product, image: responsive?.secure_url };
  const result = await addProduct(product);

  res.status(200).send(result);
  console.log("response", responsive);
});

//product delete
Router.delete("/products/:id", async (req, res) => {
  const result = await deleteProduct(req.params.id);
  console.log("ustgah", req.params.id);
  res.status(200).send(result);
});


//product search 
Router.post("/search",async (req, res)=>{
  const params = req.body
  const result = await searchProduct(params)
  res.status(200).send(result)
})



  // let dat = products.filter((product) =>
  //  product.name.toLowerCase().includes(test.product.toLowerCase())
  //  );



//product put
// Router.put("/products", async (req, res) => {
//   const upProduct = req.body;
//   const result = await productModel.updateOne(upProduct, {
//     $set: { name: "uurchluluuu" },
//   });
//   console.log(req.body);
//   res.status(200).send(result);
// });

export default Router;
