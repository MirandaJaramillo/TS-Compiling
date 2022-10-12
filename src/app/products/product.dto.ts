import { Product } from "./products.model";


//in ordeer to use the "extends" we use an innterface instead of type
export interface CreateProductDto extends Omit<Product, "id" | "createdAt" | "updatedAt"| "category"> {
  categoryId: string;
}

////???//////PICK////???////PICK//???////PICK//???///PICK//////////PICK
//Will only  have color and description
type example = Pick<Product, 'color' | 'description'>;

//We can have this DTO with optional params
//PARTIAL puts all the attributes as optional!!1!
// we are doing Partial of the CreateProductDto instead of Product
// because we dont want to modify the id, createdAt attributes
export interface UpdateProductDto extends Partial<CreateProductDto>{}


//////REQUIRED //////REQUIRED //////REQUIRED //////REQUIRED //////REQUIRED
type example2 = Required<Product>


// in order to not change  any attribute that the user sent
// you want to hve it as Readonly that is nested
// readOnly to avoid mutations
export interface FindProductDto extends Readonly<Partial<Omit<Product, "tags">>>{
  readonly tags: ReadonlyArray<string>
}

