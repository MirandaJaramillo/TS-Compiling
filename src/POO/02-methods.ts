import { isAfter } from "date-fns";

export class MyDate {
  year: number;
  month: number;
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
console.log(myDate.printFormat());
myDate.add(3, "days");
console.log(myDate.printFormat());
myDate.add(7, "months");
console.log(myDate.printFormat());
console.log(myDate.day);


