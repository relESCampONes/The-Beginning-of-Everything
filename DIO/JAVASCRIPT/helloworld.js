function clicar(){
// const prompt = require('prompt-sync')();
let ini = document.querySelector(".ini").value;
let fim = document.querySelector(".fim").value;
let auxFim = fim / 2;
let x = parseInt(ini);
let y = parseInt(fim);
let a = 0;
let b = 0;

function resultado(x, y) {
    while (x<=auxFim && y>=auxFim)
    {
        x=x+1;
        y=y-1;
        a=a+x;
        b=b+y;


    }
    return a + b;
}

document.querySelector(".resultado").innerHTML = resultado(x, y);

return resultado(x, y);
}







function amarelo(color){
    document.body.style.backgroundColor = "yellow";
}
function verde(color){
    document.body.style.backgroundColor = "green";
}
function azul(color){
    document.body.style.backgroundColor = "blue";
}
function vermelho(color){
    document.body.style.backgroundColor = "red";
}
 function rosa(color){
    document.body.style.backgroundColor = "pink";
}
    function cinza(color){ 
    document.body.style.backgroundColor = "gray";
}
    function marrom(color){
    document.body.style.backgroundColor = "brown";
}
    function preto(color){ 
    document.body.style.backgroundColor = "black";
}   
    function branco(color){
    document.body.style.backgroundColor = "white";
}   
    function laranja(color){ 
    document.body.style.backgroundColor = "orange";
}
    function roxo(color){
    document.body.style.backgroundColor = "purple";
}
