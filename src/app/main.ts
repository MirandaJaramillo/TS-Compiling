//EXECUTION

import { addProduct } from "./products/products.service";

addProduct({
  id: "1",
  title: "p1",
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 90,
  category:{
    id:"hello",
    name:"name",
    createdAt:new Date,
    updatedAt:new Date,
  }
});
