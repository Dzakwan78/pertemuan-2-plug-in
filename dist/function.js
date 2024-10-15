"use strict";
// Function Declaration
function sapa(nama, umur) {
    console.log("Halo, aku" + nama + "umurku " + umur);
}
sapa("yasir ", 20);
// Anonymous function
const pcikers = function (name, role) {
    console.log("Halo, aku" + name + "roleaku" + role);
};
pcikers(' Dzakwan ', ' frond end');
// Arrow Function
let multiplication = (a, b) => {
    return a * b;
};
let result = multiplication(8, 7);
console.log(result);
