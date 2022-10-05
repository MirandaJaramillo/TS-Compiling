
//For libraries that use ts
import { subDays, format } from "date-fns";

//SubDays has type

const date = new Date(1998,1,18);
const res = subDays(date, 30);
const srt = format(res,'yyyy/MM/dd');

console.log(srt);
console.log(res);

