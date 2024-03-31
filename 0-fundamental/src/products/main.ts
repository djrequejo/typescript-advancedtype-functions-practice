import { addProduct, calculationStock, products } from "./product.service";


addProduct({
  title: "Product 1",
  createAt: new Date(1998, 0, 19),
  stock: 5
});

addProduct({
  title: "Product 1",
  createAt: new Date(1998, 9, 19),
  stock: 6,
  size: "M"
});

console.log(products);

const total = calculationStock();
console.log(total);

