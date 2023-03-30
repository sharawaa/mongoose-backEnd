import express from "express";
import userModel from "../model/user-model.js";
import { addUser } from "../services/user-service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userRouter = express.Router();

userRouter.get("/users", async (req, res) => {
  const result = await userModel.find({});
  res.status(200).send(result);
});

userRouter.post("/loginHandler", async (req, res) => {
  try {
    const { userName, userPassword } = req.body;
    if (!(userName, userPassword)) {
      res.status(400).json({
        status: "user name passwordoo oruulna uu",
      });
      return;
    }
    const user = await userModel.findOne({ userName: userName });
    if (user && bcrypt.compare(user.password, userPassword)) {
      const token = jwt.sign({ user_id: user._id }, "mysuperduperprivatekey", {
        expiresIn: "24h",
      });
      res.status(200).json({
        success: true,
        status: "amjilttai nevterlee",
        token: token,
        data: user,
      });
      return;
    }
    res.status(400).json({ succes: false, status: "nuuts ug buruu" });
    return;
  } catch (err) {
    console.log(err);
  }
});

userRouter.post("/register", async (req, res) => {
  const result = await addUser(req.body);
  console.log(req.body);
  return result;
});
export default userRouter;
