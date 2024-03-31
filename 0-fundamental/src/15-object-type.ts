(() => {
  type Sizes = "S" | "M" | "L" | "XL";
  type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  };

  const products: Product[] = [];

  const addProduct = (data : Product) => {
    products.push(data);
  }

  addProduct({
    title: "Product 1",
    createAt: new Date(1998,0, 19),
    stock: 123
  });

  addProduct({
    title: "Product 1",
    createAt: new Date(1998,9, 19),
    stock: 431231,
    size: "M"
  });

  console.log(products);
})();
