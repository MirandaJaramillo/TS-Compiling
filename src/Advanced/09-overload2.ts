


//Overload with export allowed in TS
/////////////////////////////// OVERLOAD HERE!!! ////////////////////////////////////////
export function parseStr (input:string): string[];
export function parseStr (input:string[]): string;
export function parseStr (input:number): boolean;

// export function parseStr(input:string | string[]):string | string[] {
//   if(Array.isArray(input)) return input.join("");
//   return input.split("");
// }

export function parseStr(input:unknown):unknown  {
  ///////////////////////// ASSERTIONS RIGHT HERE!!!!!////////////////////////////////////////
  if(Array.isArray(input)){
    return input.join("");
  } else if(typeof input === "string"){
    return input.split("");
  } else if(typeof input === "number"){
    return true;
  }
}

const resArr = parseStr("Miranda");
//Now we can use this!
resArr.reverse();
//Once it checks is an array, allows me to use array methods!! :=)
//if(Array.isArray(resArr)){
//  resArr.reverse();
//}
const resArr2 = parseStr(["M","i","r","a","n","d","a"]);
const resArr3 = parseStr(3443);


console.log(resArr);
console.log(resArr2);
console.log(resArr3);
