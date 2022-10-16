import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService();

productService.create({
  title: 'Producto 1',
  price: 100,
  description: 'bla bla bla',
  categoryId: 12,
  images: []
});

const products = productService.getAll();
const productId = products[0].id;
console.log(productId);


productService.update(productId, {
  title: 'cambiar nombre'
});


const res = productService.findOne(productId);
console.log(res);


// products is private to we cannot access from outside
