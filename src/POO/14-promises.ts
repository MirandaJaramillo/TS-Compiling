import axios from "axios";

//async and await!!!

(async () => {

  function delay (time: number) {
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve("string");
      }, time);
    });
    return promise;
  }

  function getProducts(){
    const promise = axios.get("https://api.escuelajs.co/api/v1/products")
    // axios returns other info from the req, so we need to access data
    //products.data
    return promise;

  }

  async function getProductsAsync(){
    const res = await axios.get("https://api.escuelajs.co/api/v1/products")
    return res.data;

  }

  const res = await delay(3000);
  console.log(res);
  const products = await getProducts();
  console.log(products);
  const products2 = await getProductsAsync();
  console.log(products);


})()
