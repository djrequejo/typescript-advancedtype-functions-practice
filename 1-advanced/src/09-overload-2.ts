
export function parseString(input: string): string[];
export function parseString(input: string[]): string;
export function parseString(input: number): boolean;

// export function parseString(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join("");
//   } else {
//     return input.split("");
//   }
// }

export function parseString(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join("");
  } else if (typeof input === "string") {
    return input.split("");
  } else if(typeof input === "number") {
    return true;
  }
}

const responseArray = parseString("Diego");
responseArray.reverse();
// if (Array.isArray(responseArray)) {
//   responseArray.reverse();
// }
console.log("responseArray", "Diego =>", responseArray);

const responseString = parseString(["D", "i", "e", "g", "o"]);
responseString.toLowerCase();
// if (typeof responseString === "string") {
//   responseString.toUpperCase();
// }
console.log("responseString", '["D", "i", "e", "g", "o"] =>', responseString);

