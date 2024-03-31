(() => {
  const calculationTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach( item => {
      total += item;
    })
    return total.toString();
  }

  const printTotal = (prices: number[]) => {
    const response = calculationTotal(prices);
    console.log(`The total is: ${response}`)
  }

  printTotal([3,12,4,21,5]);

})();
