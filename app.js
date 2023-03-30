import cors from "cors";
import express from "express";
import "./config/mongoose-config.js";
import orderRouter from "./routes/order-api.js";
import Router from "./routes/product-api.js";
import userRouter from "./routes/user-api.js";
const app = express();
const port = 2000;
app.use(express.json());
app.use(cors());
app.use(Router);
app.use(userRouter);
app.use(orderRouter);

app.listen(port, () => {
  console.log(`start ${port}`);
});
