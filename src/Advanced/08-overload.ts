// Miranda is a string  => [M,i,r,a,n,d,a]
//  [M,i,r,a,n,d,a] => Miranda => strinng[] => string

function parseStr(input:string | string[]):string | string[] {
  if(Array.isArray(input)) return input.join("");
  return input.split("");
}

const resArr = parseStr("Miranda");
//resArr.reverse();
//Once it checks is an array, allows me to use array methods!! :=)
if(Array.isArray(resArr)){
  resArr.reverse();
}
const resArr2 = parseStr(["M","i","r","a","n","d","a"]);

console.log(resArr);
console.log(resArr2);
