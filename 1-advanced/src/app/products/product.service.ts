import { faker } from "@faker-js/faker";
import { CreateProductDto, FindProductDto, UpdateProductDto } from "./product.dto";
import { Product } from "./products.model";

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto) => {
  // data.id = "asdsa"; // id is readonly
  const newProduct: Product = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  }
  products.push(newProduct);
  return newProduct;
}

export const updateProduct = (id: Product["id"], changes: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  }
  return products[index];
}

export const findProduct = (data: FindProductDto): Product[] => {
  // data.color = "blue";
  // data.price = 100;
  // data.tags = [];
  // data.tags?.pop();
  // data.tags?.push();
  return products;
}
