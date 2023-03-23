import express from "express";
import userModel from "../model/user-model.js";
import { addUser } from "../services/user-service.js";
import bcrypt from "bcrypt";

const userRouter = express.Router();

userRouter.get("/users", async (req, res) => {
  const result = await userModel.find({});
  res.status(200).send(result);
});

// userRouter.post("/loginHandler", async (req, res) => {
//   const user = req.body;

//   const result = await userModel.find({
//     $and: [
//       { password: user.userPassword },
//       { $or: [{ userName: user.userName }, { phone: user.userName }] },
//     ],
//   });
//   res.status(200).send(result);
// });

userRouter.post("/loginHandler", async (req, res) => {
  try {
    const { userName, userPassword } = req.body;
    if (!(userName, userPassword)) {
      res.status(400).json({
        status: "user name passwordoo oruulna uu",
      });
      return;
    }
    const user = await userModel.find({ userName: user.userName });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        "mysuperduperprivatekey",
        { expiresIn: "24h" }
      );
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
