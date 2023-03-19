import myModel from "../model/product-model.js";

export async function addProduct(product) {
    return await myModel.create({
      name: product.name,
      image: product.image,
      stock: product.stock,
      sale: product.sale,
      category: product.category,
    });
}

export async function deleteProduct(id) {
  return await myModel.deleteOne({id:id});
}
//