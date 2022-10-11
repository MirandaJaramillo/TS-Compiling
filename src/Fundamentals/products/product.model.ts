//MData Model goes here!

//This can be eexported, when we use the keyword export, that allows us to use it without
//the autoinvoked function with an implicit scope

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product = {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
};
