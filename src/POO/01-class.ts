// object Date is a Class, and with  new we create a new instance of it
const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(1993, 1, 12); // 0 enero 11 dic
//date2.getHours();
//date2.getTime();
console.log(date2.getTime());

console.log(date);
console.log(date2);

// date constructor has methods like to ISO

// Inside of a class, TS ask us to declare our variables
// classes internally are prototypes
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
}
//We create our first object and instance of that class
const myDate = new MyDate(2021,2,13);
console.log(typeof myDate, myDate);
