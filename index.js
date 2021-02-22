const mousetrap = require("mousetrap");

mousetrap.bind("1", clicUno)
mousetrap.bind("2", clicDos)
mousetrap.bind("+", clicSuma)
document.getElementById("botonUno").addEventListener("click", clicUno)
document.getElementById("botonDos").addEventListener("click", clicDos)
document.getElementById("suma").addEventListener("click", clicSuma)




var actualElemento = document.getElementById("numeroActual");
var resultadoElemento = document.getElementById("resultado");
var actual = ""
var resultado = 0
function clicUno(){
    actual+=1;
    actualElemento.innerHTML = actual;
}
function clicDos(){
    actual+=2;
    actualElemento.innerHTML = actual;
}
function clicSuma(){
    if(actual != ""){
        resultado+= parseInt(actual)
        actual = ""
        actualElemento.innerHTML = "0"
        resultadoElemento.innerHTML = resultado
    }

    function clicDiv(){

    }
    
}