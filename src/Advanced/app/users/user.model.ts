import { BaseModel } from "../base.model";

export enum ROLES {
  //ADMIN ->
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",

}
  // Alias Type here
 export interface User extends BaseModel  {
    username: string;
    role: ROLES;
  }
