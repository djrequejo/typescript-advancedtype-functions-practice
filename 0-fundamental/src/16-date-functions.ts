import { subDays, format, format } from "date-fns";

const date = new Date(1988, 2, 5);
const response = subDays(date, 30);
const formatDate = format(response, "yyy/MM/dd");

console.log(formatDate);
