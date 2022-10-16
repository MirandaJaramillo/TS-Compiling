//En conclusión, cada vez que implementamos una
//clase abstracta, no podemos crear instancias de esa
//clase, si no solo de las clases hijas.
import { Animal, Dog } from './09-protected';

// new instance of Animal
// if we add "abstract" on the other file, TS wont allow me
//to create instances from parent obj

//export abstract class Animal {
const animal = new Animal('elite');
//elkte to say hi
animal.greeting();

// subClass that can bark and has an owner
const cheis = new Dog('cheis', 'nico');
cheis.greeting();
cheis.woof(2);
