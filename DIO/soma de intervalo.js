const prompt = require("prompt-sync")();



let ini = parseInt(prompt("DIGITE O INICIO DO INTERVALO:"));
let fim = parseInt(prompt("DIGITE O FIM DO INTERVALO:"));
let intervalo = ini + fim;
let result = intervalo * (fim / 2);
console.log("SOMA DOS INTERVALOS: " + result);