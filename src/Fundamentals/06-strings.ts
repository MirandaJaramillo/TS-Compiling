(() => {

  let productTitle = 'My amazing product';
  // productTitle = null;
  // productTitle = () => {}
  // productTitle = 123;
  productTitle = 'Newest amazing product'

  let productDescription: string = 'Awesome description'
  productDescription = "I'm a description (?"


  // let productTitle:string = 'Newest amazing product';
  // let productDescription: string = 'Awesome description';
  let productPrice: number = 123;

  let summary:string = `
  title: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}`

  console.log('summary', summary)

})()
