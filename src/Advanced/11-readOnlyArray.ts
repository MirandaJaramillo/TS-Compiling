//export const numbers : number[] = [1,2,3,4];
export const numbers : ReadonlyArray<number> = [1,2,3,4];


//You dont want to mutate the array
//numbers.push(9);
////numbers.pop();
//numbers.unshift(588);
numbers.filter(() => {});
numbers.map(() => {});
numbers.reduce(() => 0);

// It only allow us to do the methods that do not change the state

