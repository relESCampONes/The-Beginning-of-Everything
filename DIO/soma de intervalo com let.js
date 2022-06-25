const prompt = require("prompt-sync")();

let x = parseInt(prompt("DIGITE O INICIO DO INTERVALO:"));
let y = parseInt(prompt("DIGITE O FIM DO INTERVALO:"));
let total = y / 2
let resultadoParcial = x + y;
let final = total * resultadoParcial;
console.log("SOMA DOS INTERVALOS: " + final);