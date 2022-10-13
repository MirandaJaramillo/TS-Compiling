

export class Animal {
  constructor(public name: string) {}

//Methods
  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
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
      super(name)}


  woof(times:number){
    for(let i = 0; i<times;i++)
      console.log("woof");
  }
};


const lavanda = new Animal("Lavanda 🐕");
lavanda.move();
console.log(lavanda.greeting());

const muchacho = new Dog("Muchacho 🐕", "Adrián");
muchacho.move();
console.log(muchacho.greeting());
muchacho.woof(10);
console.log(muchacho.owner);


