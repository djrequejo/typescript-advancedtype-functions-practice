import { groupBy } from "lodash";

const data = [
  {
    username: "diego",
    role: "admin"
  },
  {
    username: "ana",
    role: "buyer"
  },
  {
    username: "milagro",
    role: "buyer"
  },
  {
    username: "joel",
    role: "customer"
  }
]

const response = groupBy(data, (item) => item.role);

console.log(response);

