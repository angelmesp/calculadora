const mousetrap = require("mousetrap");

mousetrap.bind("1", clicUno)
mousetrap.bind("2", clicDos)
mousetrap.bind("3", clicTres)
mousetrap.bind("4", clicCuatro)
mousetrap.bind("5", clicCinco)
mousetrap.bind("6", clicSeis)
mousetrap.bind("7", clicSiete)
mousetrap.bind("8", clicOcho)
mousetrap.bind("9", clicNueve)
mousetrap.bind("0", clicCero)
mousetrap.bind("+", clicSuma)
mousetrap.bind("-", clicResta)
mousetrap.bind("*", clicMult)
mousetrap.bind("/", clicDiv)
mousetrap.bind("del", clicBorrar)

mousetrap.bind("backspace", clicRetro)
mousetrap.bind("enter", clicTotal)



document.getElementById("botonUno").addEventListener("click", clicUno)
document.getElementById("botonDos").addEventListener("click", clicDos)
document.getElementById("botonTres").addEventListener("click", clicTres)
document.getElementById("botonCuatro").addEventListener("click", clicCuatro)
document.getElementById("botonCinco").addEventListener("click", clicCinco)
document.getElementById("botonSeis").addEventListener("click", clicSeis)
document.getElementById("botonSiete").addEventListener("click", clicSiete)
document.getElementById("botonOcho").addEventListener("click", clicOcho)
document.getElementById("botonNueve").addEventListener("click", clicNueve)
document.getElementById("botonCero").addEventListener("click", clicCero)
document.getElementById("suma").addEventListener("click", clicSuma)
document.getElementById("resta").addEventListener("click", clicResta)
document.getElementById("mult").addEventListener("click", clicMult)
document.getElementById("division").addEventListener("click", clicDiv)


document.getElementById("botonRetro").addEventListener("click", clicRetro)


document.getElementById("botonBorrar").addEventListener("click", clicBorrar)

document.getElementById("total").addEventListener("click", clicTotal)


var actualElemento = document.getElementById("numeroActual");
var resultadoElemento = document.getElementById("resultado");
var actual = ""
var resultado = 0
function clicUno(){
    actual+="1";
    actualElemento.innerHTML = actual;
}
function clicDos(){
    actual+="2";
    actualElemento.innerHTML = actual;
}

function clicTres(){
    actual+="3";
    actualElemento.innerHTML = actual;
}

function clicCuatro(){
    actual+="4";
    actualElemento.innerHTML = actual;
}

function clicCinco(){
    actual+="5";
    actualElemento.innerHTML = actual;
}
function clicSeis(){
    actual+="6";
    actualElemento.innerHTML = actual;
}
function clicSiete(){
    actual+="7";
    actualElemento.innerHTML = actual;
}
function clicOcho(){
    actual+="8";
    actualElemento.innerHTML = actual;
}
function clicNueve(){
    actual+="9";
    actualElemento.innerHTML = actual;
}
function clicCero(){
    actual+="0";
    actualElemento.innerHTML = actual;
}
function clicSuma(){
    if(actual != ""){
        resultado+= parseFloat(actual)
        actual = ""
        actualElemento.innerHTML = "0"
        resultadoElemento.innerHTML = resultado
    }

    
}

function clicResta(){
    if(actual != ""){
        console.log(resultado)
        if( resultado == 0){
            resultado= parseFloat(actual)
            actual = ""
            actualElemento.innerHTML = "0"
            resultadoElemento.innerHTML = resultado
        }else{
            resultado= resultado - parseFloat(actual)
            actual = ""
            actualElemento.innerHTML = "0"
            resultadoElemento.innerHTML = resultado
        }
        
    }

    
}

function clicMult(){
    if(actual != ""){
        console.log(resultado)
        if( resultado == 0){
            resultado= parseFloat(actual)
            actual = ""
            actualElemento.innerHTML = "0"
            resultadoElemento.innerHTML = resultado
        }else{
            resultado= resultado * parseFloat(actual)
            actual = ""
            actualElemento.innerHTML = "0"
            resultadoElemento.innerHTML = resultado
        }
        
    }

    
}

function clicTotal(){
    console.log(resultado)
    actualElemento.innerHTML = resultado
    resultadoElemento.innerHTML = resultado
}
function clicDiv(){
    if(actual != ""){
        console.log(resultado)
        if( resultado == 0){
            resultado= parseFloat(actual)
            actual = ""
            actualElemento.innerHTML = "0"
            resultadoElemento.innerHTML = resultado
        }else{
            resultado= resultado / parseFloat(actual)
            actual = ""
            actualElemento.innerHTML = "0"
            resultadoElemento.innerHTML = resultado
        }
        
    }


    
}


function clicRetro(){
    
    actualElemento.innerHTML = "0"
    actual = 0
    
}


function clicBorrar(){
        resultado = 0
        actual = 0
        actualElemento.innerHTML = "0"
        resultadoElemento.innerHTML = "0"


    
}