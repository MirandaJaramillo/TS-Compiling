// DECLARATIONS OF THE TYPES
import { Category } from "../categories/category.model";
import { BaseModel } from "../base.model";

export type Sizes = "S" | "M" | "L" |"XL" ;

//We are adding the base model inderectly, that containsid, created and updated
export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color:string;
  price:number;
  category: Category;
  isNew:boolean;
  tags: string[];
};


