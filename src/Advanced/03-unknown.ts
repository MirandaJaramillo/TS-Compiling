let anyVar : any;
anyVar = true;
anyVar = 400;
anyVar = {};
// Whatever with any


// This throws an error bc, it kiiinda works thanks to the nature of any
// But at the end it will be very confusing and dangerous to implement
let isNew: boolean = anyVar;

anyVar.doSomething();
anyVar.touppercase();
//WITH ANY, IT ALLOW US TO DO ANYTHING JUST LIKE JS



// Now using unknown type
//also allow us to define as any type
let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {};

//Wont let me do this call
// unknowVar.doSomething();

 if (typeof unknowVar === 'string') {
  //it catches any misleading syntax!!
   unknowVar.toUpperCase();
 }


 if (typeof unknowVar === 'boolean') {
  let isNewV2: boolean = unknowVar;
 }


//we can return it in functions and instead of any, we can have unkwokn

//const parse = (str: string) => {
const parse = (str: string): unknown => {
  return JSON.parse(str);
 }

