"use strict";
//boolean
const member = true;
//array
const getallen = [1, 2, 3];
const namen = ["Anna", "Bob", "Charlie"];
//any vermijden indien mogelijk
let data;
data = 42; // toegestaan
data = "Hello"; // toegestaan
data = [1, 2, 3]; // toegestaan
// data.myMethod();     // Geen typefout, ook al bestaat deze methode mogelijk niet.
//unknown veiliger alternatief voor any
let dataUnknown;
dataUnknown = 42; // toegestaan
dataUnknown = "Hello"; // toegestaan
dataUnknown = [1, 2, 3]; // toegestaan
// dataUnknown.myMethod(); // Typefout! TypeScript staat dit niet toe zonder een typecheck.
if (typeof data === "string") {
    console.log(data.toUpperCase()); // Nu toegestaan, want we hebben gecontroleerd dat data een string is.
}
//tuple
let point;
point = [10, 20]; // toegestaan
// point = [10, 20, 30]; // Fout, te veel elementen
// point = ["10", 20];   // Fout, verkeerd type voor het eerste element
let complexTuple = [1, "one", true];
//enum
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days || (Days = {}));
const today = Days.Friday;
console.log(today); // Outputs: 4 (omdat Friday het vijfde item is, beginnend vanaf 0)
var Colors;
(function (Colors) {
    Colors["Red"] = "#FF0000";
    Colors["Green"] = "#00FF00";
    Colors["Blue"] = "#0000FF";
})(Colors || (Colors = {}));
//# sourceMappingURL=index.js.map