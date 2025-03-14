'use strict';
/*oef1
const calculate = (a: number, b: number, c?: unknown): number => c === "subtract" ? a - b : a + b;


console.log(calculate(9, 5));
console.log(calculate(5, 1, "subtract"));
console.log(calculate(2, 3, 8)); */
/*oef2
const introduce = (naam: string, leeftijd: number = 30) :string => `Hallo mijn naam is ${naam} en ik ben ${leeftijd} jaar oud`;

console.log(introduce("Helena"));
console.log(introduce("Helena", 26));*/
//oef3
const user = {
    name: "Helena",
    age: 26,
    describe() {
        return `Mijn naam is ${this.name} en ik ben ${this.age} jaar`;
    }
};
console.log(user.describe());
//# sourceMappingURL=oefLes2.js.map