// nullish-coalescing

export const createProduct = (
  //The typed parameters
  id: string | number,
  //remember this are optional ?
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
  //INSTEAD OF THE || OPERATOR WE WILL USE  ?? (// nullish-coalescing OPERATOR)
    //stock: stock || 10,
    //isNew: isNew || true
    stock: stock ?? 10,
    isNew: isNew ?? true
  }
}

// 0 === false
// '' === false
// false === false

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(1);
console.log(p2);

const p3 = createProduct(1, false, 0);
console.log(p3);
