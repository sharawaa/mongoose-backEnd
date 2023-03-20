import mongoose from "mongoose";

const schema = new mongoose.Schema({}, { collection: "users" });

const userModel = mongoose.model("userModel", schema, "users");
export default userModel;
