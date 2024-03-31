const withoudEnd = () => {
  while (true) {
    console.log("Never stop learning!");
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if(typeof input === "string") {
    return "It's a string";
  } else if(Array.isArray(input)) {
    return "It's an array";
  }
  return fail("not match");
}

console.log(example("Hello"));
console.log(example([1,23,145,6,4]));
console.log(example(12345)); // stopping
console.log(example("Hello after fail"));
console.log(example("Hello after fail"));
console.log(example("Hello after fail"));
