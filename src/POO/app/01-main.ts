import axios from "axios";

//async and await!!!
import { Product } from "./models/product.model";

(async () => {
// from any to an array ob obj
/////////////////////////////// THIS TYPING APPLIES AT THE OUTPUT ONLY
  async function getProductsAsync():Promise<Product[]>{
    const res = await axios.get("https://api.escuelajs.co/api/v1/products")
    return res.data;
  }
///////////////////////////////// IF WE CHANGE IT IN THE GET (BC OF AXIOS, WE CAN GET THE  TYPING BEFORE)
  async function getProductsAsync2(){
    // Axios library supports the inside typing else we can force the typing with AS
    const {data} = await axios.get<Product[]>("https://api.escuelajs.co/api/v1/products")
   //const data = res.data
    //const data = obj.data // const {data} = obj
    data.map(ele => `${ele.id} - ${ele.title} HEHE`)
    return data;

  }



// with :Promise<Product[] we get that is an array of products instead of any
// and we can map!!!
  const products = await getProductsAsync2();
  console.log(products);


})()


//Made some slight changes
