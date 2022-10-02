(()=> {
//When we have multuple parameters, we can instead send an object as parameter with all of the data uwu
  const login = (data:{email:string, pass:number}) => {
    console.log(data.email, data.pass);
  };

  // console.log('hell@gmail.com', 'hey')

  console.log(login({
    email:'nico@gmail.com',
    pass: 121212
  }));

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products:any =  [];
  const addProduct = (data:{
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

addProduct({
  title:'Product1',
  createdAt:new Date(1993,1,1),
  stock:12
})

console.log(products)

})();
