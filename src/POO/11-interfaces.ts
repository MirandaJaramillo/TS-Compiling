export interface Driver{
  //attributes
  database: string;
  password: string;
  port: number;

  //Typing from interface
  // And then the other classes must follow this
  connect():void;
  disconnect():void;
  isConnected(name:string):boolean;

}

// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 23
// }

class PostgresDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number,
    //in the classes we can add more! :)
    private host: number,
  ){}
  isConnected(name: string): boolean {
    return true;
  }
  connect():void{

  }
  disconnect(): void {

  }
}

class OracleDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number,
  ){}
  disconnect(): void {

  }
  isConnected(name: string): boolean {
    return true;
  }
  connect():void{

  }
}
