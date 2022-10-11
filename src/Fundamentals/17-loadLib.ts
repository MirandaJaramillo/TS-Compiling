//doesnt have ts config

import { intervalToDuration } from "date-fns";
import _ from "lodash";
//Doesnt recognize the types on the lib, but if you hover on it
// it gives you another npm install code!!!!

const data = [
  {
    username:'nico',
    role:'admin'
  },
  {
    username:'nala',
    role:'seller'
  },
  {
    username:'santi',
    role:'seller'
  },
  {
    username:'miranda',
    role:'customer'
  }
];
//Whith _. we can use the library
// invoking the lib in gruop by
const res = _.groupBy(data,(item) => item.role);
console.log(res)


