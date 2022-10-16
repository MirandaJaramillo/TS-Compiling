// SIngleton allow us to only create one instance and 1 access point

export class MyService {

  static instance: MyService | null = null;
//private const allow us to just access it inside of the class with create
//So this creates the singleton
  private constructor(private name: string) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    //check if we havent created an instance
    if (MyService.instance === null) {
      console.log('debería entrar una vez');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }

}


//Will be the same instance!!1 :)
const myService1 = MyService.create('service 1');
console.log(myService1.getName());
const myService2 = MyService.create('service 2');
console.log(myService2.getName());
const myService3 = MyService.create('service 3');
console.log(myService3.getName());


console.log(myService1 === myService2);
