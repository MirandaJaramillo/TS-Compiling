import { isAfter } from "date-fns";

export class MyDate {
  year: number;
  month: number;
  //with readonly cannot edit internally and externally
  //readonly day:number;
  day:number;
// The constructor params allow us to initialize class with values
  constructor(year: number, month: number, day:number){
    //this is a property of the class
    this.year = year;
    this.month = month;
    this.day = day;
  }

  //With classes, the methods (functions inside obj)
  // dont look like this ->function printFormat(){} but like...
  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount:number, type:"days" | "months" | "years"){
    if(type === "days") this.day += amount;
    if(type === "months") this.month += amount;
    if(type === "years") this.year += amount;
  }

};


const myDate = new MyDate(1993,7,7);

//PUBLIC ACCESS
// You can put public keyword before every property and method
//known as "public access"
//accessing to properties
console.log(myDate.day);
myDate.day = 12;
console.log(myDate.day);


