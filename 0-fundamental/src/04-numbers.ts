(() => {
  let productPrice = 100;
  productPrice = 123;
  console.log("productPrice", productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + 1;

  let productInStock: number;
  console.log("productInStock", productInStock);

  if(productInStock > 10) {
    console.log("Is greater");
  }

  let discount = parseInt("123");
  console.log("discount", discount);
  if(discount <= 200) {
    console.log("apply");
  } else {
    console.log("not apply");
  }

  let hex = 0xfff;
  console.log("hex", hex);
  let bin = 0b0111010;
  console.log("bin", bin)

  const myNumber: Number = 10;

})();
