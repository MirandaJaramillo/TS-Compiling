//EXECUTION
import {faker} from '@faker-js/faker';
import { addProduct, findProducts, products, updateProduct } from "./products/products.service";



for(let i = 0; i < 50 ;i++){

  addProduct({
    description: faker.commerce.productDescription(),
    image:faker.image.imageUrl(),
    color:faker.color.human(),
    // we can populate with some options that we already typed.
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    price: parseInt(faker.commerce.price(),10),
    isNew:faker.datatype.boolean(),
    tags:faker.helpers.arrayElements(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({min:10, max:100}),
    categoryId:faker.datatype.uuid(),
  });
}

// If we only want one product, we can just  call the function,
// but we want more, so we are iterating to create a list

// this is the empty array that we defined at product service
console.log(products);

const product = products[0];

updateProduct(product.id,{
  title:"New title",
  stock:80,
})

findProducts({
  stock:10,
  color:"red",
  createdAt: new  Date(),
  tags:["as", "aooos"],
})


