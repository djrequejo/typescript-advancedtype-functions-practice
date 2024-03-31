import { addProduct, findProduct, products, updateProduct } from "./products/product.service";
import { faker } from "@faker-js/faker";

for(let index = 0; index < 20; index++)
addProduct({
  title: faker.commerce.productName(),
  image: faker.image.url(),
  description: faker.commerce.productDescription(),
  stock: faker.number.int({ min: 10, max: 100 }),
  size: faker.helpers.arrayElement(["M", "S", "XL", "L"]),
  color: faker.color.human(),
  price: parseFloat(faker.commerce.price()),
  categoryId: faker.string.uuid(),
  isNew: faker.datatype.boolean(),
  tags: faker.word.words(3).split(" ")
});

console.log(products);
const product = products[0];
updateProduct(product.id, {
  title: "New Title",
  stock: 36
})

console.log(products);

findProduct({
  stock: 10,
  color: "red",
});
