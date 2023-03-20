import express from "express";
import userModel from "../model/user-model.js";

const Router = express.Router();

Router.get("users", async (req, res) => {
  const result = await userModel.find({});
  res.status(200).send(result);
});
