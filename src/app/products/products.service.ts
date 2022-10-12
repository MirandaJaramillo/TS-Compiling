// ALL THE MANIPULATION
import {faker} from '@faker-js/faker';
import { Product } from "./products.model";
import { CreateProductDto , UpdateProductDto, FindProductDto} from "./product.dto";

export const products : Product[] = [];

//With Product we are sending all the Products
export const addProduct = (data: CreateProductDto) => {
  const newProduct = {
    //other data from model
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
}

// you need id and changes associated to  Product
////////////////////////////with id: Product["id"] we are getting
// ///////////////////// The current type of the attribute
export const updateProduct = (id: Product["id"], changes:UpdateProductDto):Product => {
  //we need to get the index of the array (products) by the id
  const index = products.findIndex(ele => ele.id === id);
  //This trows the index
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  };
  return products[index];
}

//Returns an array of products that it found
export const findProducts = (dto:FindProductDto):Product[] => {
  //dto.tags = [];
  //dto.tags?.pop();
  //dto.tags?.push();
  return  products;
}

//Only need the id to delete product
export const deleteProduct = (id: string) => {
  //code
}
