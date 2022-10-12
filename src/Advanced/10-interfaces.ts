//LITERAL TYPES
type Sizes = "S" | "M" | "L" |"XL" ;
type userID = string | number;
// type Product = {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size?: Sizes;
// };

////HERE COMES THE INTERFACE but without the equal sign
interface Product  {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
};

const products : Product[] = [];

products.push({
  id: "1",
  title: "p1",
  createdAt: new Date(),
  stock: 90,
});

// Iterfaces are just like our type but its ony for objects
// The types cannot extend and interfaces CAN

const addProduct = (data: Product) => {
  products.push(data);
}
