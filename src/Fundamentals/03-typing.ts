
//funci'on anonima autoejecutada
//Lo metemos dentro de un scope diferente y no choca con otros files

(() => {
  let myProductName = 'Product 1';

  myProductName = 'ChAnge';

  myProductName.toLowerCase();

  console.log(myProductName)

})();

