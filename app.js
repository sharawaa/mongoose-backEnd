import cors from "cors";
import express from "express";
import "./config/mongoose-config.js";
import Router from "./routes/product-api.js";
import userRouter from "./routes/user-api.js";
const app = express();
const port = 2000;
app.use(express.json());
app.use(cors());
app.use(Router);
app.use(userRouter);

app.listen(port, () => {
  console.log(`start ${port}`);
});
