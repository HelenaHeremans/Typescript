'use strict';
//oef1
const leeftijdStudent = 25;
const achternaam = "Heremans";
const isStudent = true;
console.log(`Student: ${achternaam}, Leeftijd: ${leeftijdStudent}, Student: ${isStudent ? 'ja' : 'nee'}`);
//oef2
const dagenVanDeWeek = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];
console.log(dagenVanDeWeek[4]);
let persoonInfo;
persoonInfo = [26, "Helena"];
console.log(`Persoon: ${persoonInfo[1]}, Leeftijd: ${persoonInfo[0]}`);
var Windrichting;
(function (Windrichting) {
    Windrichting[Windrichting["Noord"] = 0] = "Noord";
    Windrichting[Windrichting["Oost"] = 1] = "Oost";
    Windrichting[Windrichting["Zuid"] = 2] = "Zuid";
    Windrichting[Windrichting["West"] = 3] = "West";
})(Windrichting || (Windrichting = {}));
let huidigeRichting = Windrichting.Zuid;
console.log(huidigeRichting);
//oef3
var Seasons;
(function (Seasons) {
    Seasons[Seasons["Spring"] = 0] = "Spring";
    Seasons[Seasons["Summer"] = 1] = "Summer";
    Seasons[Seasons["Autumn"] = 2] = "Autumn";
    Seasons[Seasons["Winter"] = 3] = "Winter";
})(Seasons || (Seasons = {}));
let currentSeason = Seasons.Autumn;
console.log(currentSeason);
//oef4
var Planets;
(function (Planets) {
    Planets["Mercury"] = "Small and close to the Sun";
    Planets["Venus"] = "Similar in size to Earth, but very hot";
    Planets["Earth"] = "Our home planet";
    Planets["Mars"] = "The red planet";
    Planets["Jupiter"] = "The largest planet";
    Planets["Saturn"] = "Known for its rings";
    Planets["Uranus"] = "An ice giant";
    Planets["Neptune"] = "A distant blue world";
})(Planets || (Planets = {}));
let favoritePlanetInfo = Planets.Venus;
console.log(favoritePlanetInfo);
//oef5
let mijnData = "het is 2025";
let externeInput = "Hallo wereld,";
console.log(externeInput, mijnData);
