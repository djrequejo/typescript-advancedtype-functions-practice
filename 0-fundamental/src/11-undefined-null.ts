(() => {
  // let myNumber: number = undefined;
  // let myString: string = null;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 123;

  let myString: string | undefined = undefined;
  myString = "World!";

  function hi(name: string | null) {
    let hello = "Hello ";
    if (name) {
      hello += name;
    } else {
      hello += "nobody";
    }
    console.log(hello);
  }

  function hi2(name: string | null) {
    let hello = "Hello v2 ";
    hello += name?.toLowerCase() || "nobody";
    console.log(hello);
  }

  hi("Diego");
  hi(null);

  hi2("Ana Milagro");
  hi2(null);

})();
