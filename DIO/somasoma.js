const prompt = require('prompt-sync')();



const a = parseInt(prompt("Digite o primeiro número: "));
const b = parseInt(prompt("Digite o segundo número: "));

function soma(a, b) {
return a + b;
}



console.log(soma(a, b));