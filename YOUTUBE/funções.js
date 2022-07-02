




// Função para verificar se o navegador é Internet Explorer
function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

// Função para verificar se o navegador é Chrome   
function isChrome() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('chrome') != -1) ? true : false;
}

// Funções iniciais
$(document).ready(function () {
    // Verifica se o navegador é Internet Explorer
    if (isIE()) {
        // Se for, exibe mensagem de aviso
        alert("Para melhor visualização do site, utilize o navegador Google Chrome.");
    }
    // Verifica se o navegador é Chrome
    if (isChrome()) {
        // Se for, exibe mensagem de aviso
        alert("Para melhor visualização do site, utilize o navegador Google Chrome.");
    }
}

// Função para abrir o menu lateral
function abrirMenu() {
    // Se o menu estiver fechado, exibe o menu
    if ($("#menu").css("display") == "none") {
        $("#menu").css("display", "block");
    }
    // Se o menu estiver aberto, esconde o menu
    else {

        $("#menu").css("display", "none");
    }
}

// Funções 
function abrirMenu1() {
    // Se o menu estiver fechado, exibe o menu
    if ($("#menu").css("display") == "none") {
        $("#menu").css("display", "block"); // Exibe o menu
        $("#menu").css("left", "0"); // Posiciona o menu na esquerda
        $("#menu").css("top", "0"); // Posiciona o menu na parte superior
        $("#menu").css("width", "100%"); // Define o tamanho do menu
        $("#menu").css("height", "100%"); // Define o tamanho do menu
        $("#menu").css("background-color", "rgba(0,0,0,0.5)"); // Define a cor de fundo do menu
        $("#menu").css("z-index", "1"); // Define o z-index do menu
        $("#menu").css("position", "fixed"); // Define a posição do menu
        $("#menu").css("transition", "left 0.5s"); // Define a transição do menu
    }
}
