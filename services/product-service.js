import productModel from "../model/product-model.js";

export async function addProduct(product) {
  // const image = await addImage();
  // console.log("tset", image);
  const result = await productModel.create({
    ...product,
  });
  return result;
}

export async function deleteProduct(id) {
  return await productModel.deleteMany({ _id: id });
}
