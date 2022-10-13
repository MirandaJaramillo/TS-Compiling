import { isAfter } from "date-fns";

export class MyDate {
  year: number;
  month: number;
  //PRIVATE KEYWORD//PRIVATE KEYWORD//PRIVATE KEYWORD//PRIVATE KEYWORD//PRIVATE KEYWORD//PRIVATE KEYWORD//PRIVATE KEYWORD//PRIVATE KEYWORD
  //PRIVATE KEYWORD//PRIVATE KEYWORD//PRIVATE KEYWORD//PRIVATE KEYWORD//PRIVATE KEYWORD//PRIVATE KEYWORD//PRIVATE KEYWORD//PRIVATE KEYWORD

  //cannot print, read or modify externally
  private day:number;
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
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  add(amount:number, type:"days" | "months" | "years"){
    if(type === "days") this.day += amount;
    if(type === "months") this.month += amount;
    if(type === "years") this.year += amount;
  }
//Only the class can access this method!! :))) WOHOOO uywuwuwuw
  private addPadding ( value:number){
    if(value < 10) return `0${value}`;
    return `${value}`;
  }
  getDay() {
    return this.day;
  }

};


const myDate = new MyDate(1993,7,9);
console.log(myDate.printFormat());
console.log(myDate.getDay());



