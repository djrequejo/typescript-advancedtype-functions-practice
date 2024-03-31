let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;

let isNew: boolean = anyVar;

anyVar.doSomething();
anyVar.touppercase();

let unknownVar: unknown;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;

// unknownVar.toUpperCase();

if(typeof unknownVar === "string") {
  unknownVar.toUpperCase();
}

if(typeof unknownVar === "boolean") {
  let isNew2: boolean = unknownVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}

