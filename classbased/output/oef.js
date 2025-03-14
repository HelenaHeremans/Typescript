"use strict";
/*oef1
class Auto {
    merk: string;
    model: string;
    bouwjaar: number;

    constructor(merk: string, model: string, bouwjaar: number) {
        this.merk = merk;
        this.model = model;
        this.bouwjaar = bouwjaar;
    }

    get beschrijving(): string {
        return this.merk + this.model;
    }

    set jaarInstellen(value: number) {
        value > 2000 ? console.log("Dit is geen geldig bouwjaar") : this.bouwjaar = value;
    }

    get jaarInstellen() {
        return this.bouwjaar;
    }

    toonDetails() {
        console.log(`${this.merk} ${this.model} (Bouwjaar: ${this.bouwjaar})`)
    }
}
//oef2
const mijnAuto = new Auto("Toyota", "Corolla", 2020);
const jouwAuto = new Auto("Honda", "Civic", 2019);

/*oef3
console.log(mijnAuto.merk);

mijnAuto.bouwjaar = 2021;
console.log(mijnAuto.bouwjaar);

mijnAuto.toonDetails();

//oef4
console.log(mijnAuto.beschrijving);
mijnAuto.jaarInstellen = 2020;
console.log(mijnAuto.jaarInstellen);*/
//oef5
class Student {
    constructor(naam, studentNummer) {
        this._cijfers = [];
        this._naam = naam;
        this._studentNummer = studentNummer;
    }
    get getNaam() {
        return this._naam;
    }
    get getGemiddelde() {
        if (this._cijfers.length == 0)
            return 0;
        const som = this._cijfers.reduce((huidigeOptelling, huidigGetal) => {
            return huidigeOptelling + huidigGetal;
        });
        return parseFloat((som / (this._cijfers.length)).toFixed(2));
    }
    set setNaam(value) {
        if (value.trim() === "") {
            console.log("Voer een geldige naam in");
        }
        else {
            this._naam = value;
        }
    }
    voegCijferToe(cijfer) {
        this._cijfers.push(cijfer);
    }
}
const student1 = new Student("John", 12345);
const student2 = new Student("Jane", 23456);
student1.voegCijferToe(3.5);
student1.voegCijferToe(8);
student2.voegCijferToe(5.2);
student2.voegCijferToe(7.8);
console.log(student1.getGemiddelde);
console.log(student2.getGemiddelde);
student1.setNaam = "Bob";
console.log(student1.getNaam);
student2.setNaam = "Sara";
console.log(student2.getNaam);
