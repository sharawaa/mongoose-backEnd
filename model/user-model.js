import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    userName: String,
    eMail: String,
    phone: String,
  },
  { collection: "users" }
);

const userModel = mongoose.model("userModel", schema, "users");
export default userModel;
