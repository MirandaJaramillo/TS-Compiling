import { isAfter } from "date-fns";

export class MyDate {
// The constructor params allow us to initialize class with values
  constructor(
    // if we declare it in the constructor, we DO need to specify
    // the access as public or private or readonly
    public year: number = 1993,
    public month: number = 7,
    public day:number = 9){}

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

const myDate2 = new MyDate(2022);
console.log("(2022) => ", myDate2.printFormat());

const myDate3 = new MyDate(2022,3);
console.log("(2022,3) => ",myDate3.printFormat());

const myDate4 = new MyDate();
console.log("() => ",myDate4.printFormat());
