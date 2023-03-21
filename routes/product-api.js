import express from "express";
import cloudinary from "../config/cloudinary.js";
import productModel from "../model/product-model.js";
import { addProduct, deleteProduct } from "../services/product-service.js";
import multer from "multer";
import { nanoid } from "nanoid";

const Router = express.Router();

//product get
Router.get("/product", async (req, res) => {
  const result = await productModel.find({});
  //console.log(result);
  res.status(200).send(result);
});
//product post

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/tmp");
  },

  filename: (req, file, cb) => {
    const ext = extractExtension(file.originalname);
    console.log("ext: ", ext);
    const newName = nanoid() + "." + ext;
    cb(null, newName);
  },
});
const extractExtension = (name) => {
  const splitted = name.split(".");
  return splitted[splitted.length - 1];
};

const upload = multer({ storage: storage });

// Router.post("/products", async (req, res) => {
//   // const result = await addProduct(req.body);
//   const data = await req.body;

// });

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
