// This function never stops
const withoutEnd = () => {
  while (true)
  console.log("You dont wanna stop!");
};

//Function that stops the programm bc of error
const failingFunc = (message:string) => {
  throw new Error (message);
};


const example = (input: unknown) => {
  //In  here, we used unknown but we are checking types
  if (typeof input === 'string') {
    return 'its a string';
    //in order to check if its an array
  } else if (Array.isArray(input)) {
    return 'its an array';
  }
  return failingFunc('not match');
}

console.log(example('Hola'));
console.log(example([1,1,1,1]));
//The one that stops bc its a number enters into the func
// and goes to never type
console.log(example(1212));
console.log(example('Hola despues del fail'));
//console.log(example('Hola despues del fail'));
//console.log(example('Hola despues del fail'));
