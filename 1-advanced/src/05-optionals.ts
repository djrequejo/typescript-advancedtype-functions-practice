export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
    stock: stock ?? 10, // stock || 10
    isNew: isNew ?? true, // isNew || true
  }
}

const product1 = createProduct(1, false, 12);
console.log(product1);

const product2 = createProduct(1);
console.log(product2);

const product3 = createProduct(1, false, 0);
console.log(product3);
