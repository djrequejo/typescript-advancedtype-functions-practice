export function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join("");
  } else {
    return input.split("");
  }
}

const responseArray = parseString("Diego");
// responseArray.reverse();
if (Array.isArray(responseArray)) {
  responseArray.reverse();
}
console.log("responseArray", "Diego =>", responseArray);

const responseString = parseString(["D", "i", "e", "g", "o"]);
// responseString.toLowerCase();
if (typeof responseString === "string") {
  responseString.toUpperCase();
}
console.log("responseString", '["D", "i", "e", "g", "o"] =>', responseString);

