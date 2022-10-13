
export class MyDate {

  constructor(

    public year: number = 1993,
    public month: number = 7,
    private _day:number = 9){}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  add(amount:number, type:"days" | "months" | "years"){
    if(type === "days") this._day += amount;
    if(type === "months") this.month += amount;
    if(type === "years") this.year += amount;
  }

  private addPadding ( value:number){
    if(value < 10) return `0${value}`;
    return `${value}`;
  }

  // if we define a prop as private and then a method with the same name
  // it will throw an error
  // get is a function that access the prop
  get day() {
    return this._day;
  }
// GET ACCESSOR WORKS AS PROPERTY // GET ACCESSOR WORKS AS PROPERTY // GET ACCESSOR WORKS AS PROPERTY
// A GETTER MUST RETURN SOMETHING!! UWUW
  get isLeapYear():boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
};


const myDate = new MyDate(1993,7,9);
console.log(myDate.printFormat());
//console.log(myDate.getDay());

console.log(myDate.day);
console.log(myDate.isLeapYear)

const myDate2 = new MyDate(2000,7,9);
console.log(myDate2.isLeapYear)

const myDate3 = new MyDate(2001,7,9);
console.log(myDate3.isLeapYear)

const myDate4 = new MyDate(2004,7,9);
console.log(myDate4.isLeapYear)
