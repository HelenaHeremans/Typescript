'use strict'
//oef1
const leeftijdStudent: number = 25;
const achternaam: string = "Heremans";
const isStudent: boolean = true;
console.log(`Student: ${achternaam}, Leeftijd: ${leeftijdStudent}, Student: ${isStudent ? 'ja' : 'nee'}`);

//oef2
const dagenVanDeWeek: string[] = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];
console.log(dagenVanDeWeek[4]);

let persoonInfo: [number, string];
persoonInfo = [26, "Helena"];
console.log(`Persoon: ${persoonInfo[1]}, Leeftijd: ${persoonInfo[0]}`);

enum Windrichting {
    Noord,
    Oost,
    Zuid,
    West
}
let huidigeRichting: Windrichting = Windrichting.Zuid;
console.log(huidigeRichting);

//oef3
enum Seasons {
    Spring,
    Summer,
    Autumn,
    Winter
}
let currentSeason: Seasons = Seasons.Autumn;
console.log(currentSeason);

//oef4
enum Planets {
    Mercury = "Small and close to the Sun",
    Venus = "Similar in size to Earth, but very hot",
    Earth = "Our home planet",
    Mars = "The red planet",
    Jupiter = "The largest planet",
    Saturn = "Known for its rings",
    Uranus = "An ice giant",
    Neptune = "A distant blue world"
}
let favoritePlanetInfo: Planets = Planets.Venus;
console.log(favoritePlanetInfo);

//oef5
let mijnData: any = "het is 2025";
let externeInput: unknown = "Hallo wereld,";
console.log(externeInput, mijnData);
