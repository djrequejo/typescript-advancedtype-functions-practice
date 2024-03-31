(() => {
  const login = (data: { email: string, password: string }) => {
    console.log(data.email, data.password);
  }

  // login("djrequejo@email.com", "123123123");
  login({
    email: "djrequejo@email.com",
    password: "121231232"
  });

  type Sizes = "S" | "M" | "L" | "XL";

  const products: any[] = [];

  const addProduct = (data : {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }) => {
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
