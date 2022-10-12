// enums are like list where we can add keys and values, so  we can
//have a predefined set

// enum --> specify descriptive constants and associate

export enum ROLES {
  //ADMIN ->
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",

}
  // Alias Type here
 export type User = {
    username: string;
    role: ROLES;
  }

  const nicoUser: User = {
    username: 'nicobytes',
    role: ROLES.SELLER
  }

  // we will be using capacitor
  // https://capacitorjs.com/
