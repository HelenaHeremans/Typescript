class Animal {
    // Eigenschappen
    name: string;
 
    // Constructor
    constructor(name: string) {
        this.name = name;
    }
 
    // Methode
    makeSound() {
        console.log(`${this.name} makes a sound`);
    }
  
  // dit is de juiste manier van GET
    get animalName(): string {
        return `De naam is: ${this.name}`;
    }
  // juiste manier SET
    set animalNameInstellen(value: string) {
        if (value.length > 0) {
            this.name = value;
        } else {
            console.log("Voer een geldige naam in.");
        }
    }
 
 
 }

const myAnimal = new Animal("Dog");
console.log(myAnimal.name);
console.log(myAnimal.animalName); 
myAnimal.animalNameInstellen = "Cat";
console.log(myAnimal.animalName); 


class Dier {
    naam: string;
    constructor(naam: string) {
      this.naam = naam;
    }
    maakGeluid(): string {
      return `${this.naam} maakt een geluid.`;
    }
  }
   class Hond extends Dier {
    maakGeluid(): string {
      return `${this.naam} blaft!`;
    }
  }
  const mijnHond = new Hond("Rex");
  console.log(mijnHond.maakGeluid()); // Output: "Rex blaft!"
 