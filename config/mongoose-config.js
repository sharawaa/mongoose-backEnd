import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://sharawnyambuu:Amjilt%402023@sharavaa.a8vvi2r.mongodb.net/sample_mflix"
  )
  .then((res) => {
    console.log("connect");
  })
  .catch((err) => console.error(err));
export default mongoose.connection;
