(()=> {
  type Sizes = "S" | "M" | "L" | "XL";

  function createProductToJson(
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const product1 = createProductToJson("P1", new Date(), 12, "S");
  console.log(product1);
  console.log(product1.title);
  console.log(product1.stock);
  console.log(product1.size);

  const createProductToJsonv2 = (
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const product2 = createProductToJsonv2("P1", new Date(), 12);
  console.log(product2);
  console.log(product2.title);
  console.log(product2.stock);
  console.log(product2.size);
})();
