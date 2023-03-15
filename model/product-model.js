import mongoose from "mongoose";

const schema = new mongoose.Schema({}, { collection: "movies" });

const myModel = mongoose.model("myModel", schema, "movies");
export default myModel;
