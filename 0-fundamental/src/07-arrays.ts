(() => {
  let prices = [1, 2, 3, 4, 5, 6, 7, "Hola", true];
  prices.push("push");
  prices.push(true);
  prices.push(121212);

  let products = ["Hola", true];
  products.push(false);

  let mixed: (number | string | boolean | Object)[] = [];
  mixed.push(123);
  mixed.push("abc");
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1, 2, 3, 4, 12];
  numbers.map(item => item * 2);

})();
