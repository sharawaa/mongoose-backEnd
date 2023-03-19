import myModel from "../model/product-model.js";

export async function addProduct(products) {
  return await products && products.map((product) => {
    return myModel.create({
      name: product.name,
      image: product.image,
      stock: product.stock,
      sale: product.sale,
      category: product.category,
    });
  });
}

export async function deleteProduct(product) {
  return await myModel.deleteMany(product);
}
