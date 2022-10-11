(() => {
  //THIS IS NOT RIGHT!!!
  // let myNumber: number = undefined;
  // let myString: string = null;

    let myNull:null = null;
    let myUnd: undefined = undefined;

    //Maybe you need null when everything is initializing
    //and then change into the other value
    let myNumber : number | null = null;
    myNumber = 12;

    let myString : string | undefined = undefined;
    myString = 'hey!';


console.log(myString)

  function hello(name:string | null){
    let hello = 'Hola! ';

    if(name)return hello += name;
    return hello += 'nobody'
    // hello += name?.toLowerCase() || 'nobody'
  }
  console.log(hello(null))
  console.log(hello('Mima'))

})()
