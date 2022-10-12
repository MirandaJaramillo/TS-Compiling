import { User, ROLES } from "./01-enum";

//rest operator
const myFunc = (...args:number[]) => console.log(args);
myFunc(1,2,3)

/////////////////////
////////////////////////////////////////

const currentUser: User = {
  username: "Miranda",
  role: ROLES.CUSTOMER
};

export const checkAdminRole = () => {
  if(currentUser.role === ROLES.ADMIN){
    return true;
  }
    return false;
};
const res = checkAdminRole();
console.log("checkAdminRole", res);



/////////////////////
////////////////////////////////////////
export const checkRole = (role1:string, role2:string) => {
  if(currentUser.role === role1){
    return true;
  }
  if(currentUser.role === role2){
    return true;
  }
    return false;
};
const res2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log("checkRole", res2);

/////////////////////
////////////////////////////////////////



export const checkRole2 = (...roles:string[]) => {
  if(roles.includes(currentUser.role)){
    return true;
  }
    return false;
};
const res3 = checkRole2(ROLES.CUSTOMER, ROLES.SELLER);
console.log("checkRole2", res3);

