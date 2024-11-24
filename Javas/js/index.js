'use strict'

//var boton = document.querySelector("#boton")

function cambiarColor() {

    var bg = boton.style.background;

    if(bg == "green"){
        boton.style.background = "red"
    }
    else{
        boton.style.background = "green"
    }
    boton.style.padding = "30px";

    boton.style.border = "1px solid #ccc";
    
}

function lanzarAlerta(texto){
    let confm = confirm(texto)
    if(v == true){
        alert('Aceptar')
    }
    else{
        alert('Cancelar')
    }
}


function infoNavegador(){
    console.log(window.navigator.language)    
    console.log(window.navigator.cookieEnabled)
}
document.getElementsByTagName



var boton = document.querySelector("#boton2")

boton.addEventListener('click', function(){

    cambiarColor();
});

boton.addEventListener('mouseover', function(){

    boton.style.background = "yellow";
});

boton.addEventListener('mouseout', function(){

    boton.style.background = "#ccc";
});


////////////////////////////////

var input = document.querySelector("#nombre")

input.addEventListener('focus', function(){
    console.log("Estas dentro del evento - Focus");
});


input.addEventListener('blur', function(){
    console.log("Estas fuera del evento - Blur");
});

input.addEventListener('keydown', function(){
    console.log("Estas pulsando una tecla - Keydown");
});


input.addEventListener('keypress', function(){
    console.log("Has puslado una tecla - Keypress");
});

input.addEventListener('keyup', function(){
    console.log("Has soltado una tecla - Keyup");
});