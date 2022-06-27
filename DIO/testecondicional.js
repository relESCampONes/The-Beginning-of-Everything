const prompt = require('prompt-sync')();


let ini = parseInt(prompt("Digite o valor inicial: "));
let fim = parseInt(prompt("Digite o valor final: "));
let aux = fim / 2;

let x = parseInt(ini);
let y = parseInt(fim);
let a = 0;
let b = 0;

function resultado(x, y) {
    while (x<=aux && y>=aux) {
        x=x+1;
        y=y-1;
        a=a+x;
        b=b+y;
    }
    return a+b;

}

console.log(resultado(x, y));