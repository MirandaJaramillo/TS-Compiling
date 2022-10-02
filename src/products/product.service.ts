//Service and methods to modify data
import {Sizes, Product} from './product.model';

export const products:Product[] = [];

export const addProduct = (data:Product) => {
          products.push(data);
        };

export  const calcStock = ():number=> {
  let total = 0;
  products.forEach((ele) => {
    total += ele.stock;
  })
  return total;
}

