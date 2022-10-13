import { isAfter } from "date-fns";

export class MyDate {

  constructor(

    public year: number = 1993,
    public month: number = 7,
    public day:number = 9){}

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
