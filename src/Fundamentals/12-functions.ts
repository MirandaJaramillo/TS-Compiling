(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function productJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ){
  return {
    title,
    createdAt,
    stock,
    size
  }
  }

  const product1 = productJson('P1', new Date(), 12, 'XL')
  console.log(product1);
  console.log(product1.title);


  const productJson2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
  return  {
    title,
    createdAt,
    stock,
    size
  }
  }
  const product2 = productJson2('P1', new Date(), 12);
  console.log(product2);
  console.log(product2.size);

})();
