// ALL THE MANIPULATION

import { Product } from "./products.model";

export const products : Product[] = [];


export const addProduct = (data: Product) => {
  //if we dont want to overwrite we use read
// data.id = "jndjkdnsc";
//data.createdAt = new Date(1998,1,1);
  products.push(data);
}
