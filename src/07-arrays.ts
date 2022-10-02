(() => {
  let prices = [1,2,3,4,5, 'hola', true];
  // prices.push('asas');
  // prices.push(true)
  // prices.push({12})
  prices.push(111);
  console.log(prices);

  let products:any = ['hola', true];
  products.push(12);
  console.log(products);

  let products1:(number | string|boolean |Object)[] = ['hola', true];
  products1.push({12:2});
  console.log(products1);

//ANY uwu
  products = 'Hola';
  console.log(products);
  // CAST FROM A TYPE TO ANOTHER
  const rta = (products as string).toLowerCase();
  console.log(rta);


  products = 1212;
  console.log(products);
  const rta1 = (<number>products).toFixed();
  console.log(rta1);
})()
