// nullish-coalescing

export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return {
    id,
    stock,
    isNew
  }
}

// 0 === false
// '' === false
// false === false

const p1 = createProduct(1, true, 12);
console.log(p1);
// If we dont send anything it will automatically used the
// predetermined ones as true and 10, for example.
const p2 = createProduct(1);
console.log(p2);

const p3 = createProduct(1, false, 0);
console.log(p3);

const p4 = createProduct(1, true, 100);
console.log(p4);


// { id: 1, stock: 12, isNew: true }
// { id: 1, stock: 10, isNew: true }
// { id: 1, stock: 0, isNew: false }
// { id: 1, stock: 100, isNew: true }
