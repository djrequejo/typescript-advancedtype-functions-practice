(() => {
  let userId: string | number;
  userId = 1212;
  userId = "123hdy312";

  function greeting(myText: string | number) {
    if(typeof myText === "string") {
      console.log(`string ${myText.toUpperCase()}`);
    } else {
      console.log(`number ${myText.toFixed()}`);
    }
  }
  greeting("Hello");
  greeting(432.2342343);
})();
