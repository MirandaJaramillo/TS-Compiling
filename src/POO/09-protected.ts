

export class Animal {

 // If we use PRIVATE, wont allow us to use it as inheritance
 // or with extended in Dog, so we use PROTECTED instead
 // constructor(private name: string) {}
  constructor(protected name: string) {}

//Methods
  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething(){
    console.log("hohohooy")
  }


}


// INHERITANCE!!! OMG // INHERITANCE!!!// INHERITANCE!!!// INHERITANCE!!!// INHERITANCE!!!// INHERITANCE!!!// INHERITANCE!!!
// IT HAS THE METHODS FROM ANIMAL
export class Dog extends Animal {

   constructor (
    name:string,
    public owner:string,
    ){
      //sending this to the parent Class to call props and methods
      // we are calling parent constructor
      super(name)}


  woof(times:number):void{
    for(let i = 0; i<times;i++)
      console.log(`Woof ${this.name}`);
      this.doSomething();
  }

  move (){
    console.log("moving as a doggo");
    //calling method move in parents constructor if we want both
    super.move();
  }
};

const muchacho = new Dog("Muchacho 🐕", "Adrián");
//muchacho.name = "something else";
muchacho.woof(1);
muchacho.move();
