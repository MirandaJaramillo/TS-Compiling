(() => {

      type Sizes = 'S' | 'M' | 'L' | 'XL';
      //type but as an object
      type Product = {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
      };

      // const products:any[] =  [];
      //An array of objects that needs to have types of Product
      const products:Product[] = [];

      const addProduct = (data:Product) => {
        products.push(data);
      }

    addProduct({
      title:'Product1',
      createdAt:new Date(1993,1,1),
      stock:12
    })

    console.log(products)

    })();
