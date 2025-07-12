"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
// Test cases for validarRut function
const rutEjemplo1 = "5.821.050-1";
if ((0, index_1.validarRut)(rutEjemplo1)) {
    console.log(`El RUT ${rutEjemplo1} es válido.`);
}
else {
    console.log(`El RUT ${rutEjemplo1} es inválido.`);
}
const rutEjemplo2 = "58210501";
if ((0, index_1.validarRutSinPuntos)(rutEjemplo2)) {
    console.log(`El RUT ${rutEjemplo2} es válido.`);
}
else {
    console.log(`El RUT ${rutEjemplo2} es inválido.`);
}
const rutEjemplo3 = "5821050-1";
if ((0, index_1.validarRutConGuion)(rutEjemplo3)) {
    console.log(`El RUT ${rutEjemplo3} es válido.`);
}
else {
    console.log(`El RUT ${rutEjemplo3} es inválido.`);
}
