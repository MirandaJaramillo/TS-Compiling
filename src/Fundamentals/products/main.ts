//MOdular programming
//The one that executes!
import {addProduct, calcStock, products} from "./product.service";

addProduct({
  title:'Project2',
  createdAt: new Date,
  stock:200
});

addProduct({
  title:'Project3',
  createdAt: new Date,
  stock:27494,
  size: 'L'
});

console.log(products);
//invoke our function
const total = calcStock();
// print the total
console.log(total);

