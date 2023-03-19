import express from "express";
import myModel from "../model/product-model.js";
import { addProduct, deleteProduct } from "../services/product-service.js";

const Router = express.Router();

//product get
Router.get("/product", async (req, res) => {
  const result = await myModel.find({});
  console.log(result);
  res.status(200).send(result);
});
//product post
Router.post("/products", async (req, res) => {
  const result = await addProduct(req.body.products);
  console.log(req.body.products);
  res.status(200).send(result);
});

// app.post("/products", (request, response) => {
//   fs.readFile("./data/products.json", (error, data) => {
//     if (error) {
//       response.status(500).send({ messege: error });
//     } else {
//       let product = JSON.parse(data);
//       product.push({ ...request.body, id: uuidv4() });
//       fs.writeFile("./data/products.json", JSON.stringify(product), (err) => {
//         if (err) {
//           response.status(500).send[{ messege: err }];
//         } else {
//           response.status(200).send[{ messege: "product successfuly added" }];
//         }
//       });
//     }
//   });
// });




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
