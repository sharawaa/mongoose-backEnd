import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    userName: String,
    email: String,
    phone: String,
    sureName: String,
    role: String,
    password: String,
    orderProduct: Array,
  },
  { collection: "users" }
);

const userModel = mongoose.model("userModel", schema, "users");
export default userModel;
