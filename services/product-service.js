import productModel from "../model/product-model.js";

export async function addProduct(product) {
  return await productModel.create({
    name: product.name,
    image: product.image,
    stock: product.stock,
    sale: product.sale,
    category: product.category,
  });
}

export async function deleteProduct(id) {
  return await productModel.deleteMany({ _id: id });
}
