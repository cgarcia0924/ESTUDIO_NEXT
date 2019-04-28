/*function TeclaTextBox(event) {
    var tecla = event.which || event.keycode;
    document.querySelector('#display').innerHTML = String.fromCharCode(tecla)
}
document.onkeypress = TeclaTextBox

*/
var operandoa;
var operandob;
var operacion;
var valor_longitud = 10;
var contadorpunto = 0;

function init() {
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var punto = document.getElementById('punto');
    var sign = document.getElementById('sign');
}

//Eventos de click


sign.onclick = function(e) {
    pantalla = resultado.textContent
    var a = pantalla.charAt(0);
    if (a == "-") {
        resultado.textContent = pantalla.substring(1);
    } else {
        resultado.textContent = "-" + resultado.textContent;
    }
}

uno.onclick = function(e) {
    pantalla = resultado.textContent
    var a = pantalla.length;
    if (a < valor_longitud) {
        resultado.textContent = resultado.textContent + "1";
    }
}
dos.onclick = function(e) {
    pantalla = resultado.textContent
    var a = pantalla.length;
    if (a < valor_longitud) {
        resultado.textContent = resultado.textContent + "2";
    }
}
tres.onclick = function(e) {
    pantalla = resultado.textContent
    var a = pantalla.length;
    if (a < valor_longitud) {
        resultado.textContent = resultado.textContent + "3";
    }
}
cuatro.onclick = function(e) {
    pantalla = resultado.textContent
    var a = pantalla.length;
    if (a < valor_longitud) {
        resultado.textContent = resultado.textContent + "4";
    }
}
cinco.onclick = function(e) {
    pantalla = resultado.textContent
    var a = pantalla.length;
    if (a < valor_longitud) {
        resultado.textContent = resultado.textContent + "5";
    }
}
seis.onclick = function(e) {
    pantalla = resultado.textContent
    var a = pantalla.length;
    if (a < valor_longitud) {
        resultado.textContent = resultado.textContent + "6";
    }
}
siete.onclick = function(e) {
    pantalla = resultado.textContent
    var a = pantalla.length;
    if (a < valor_longitud) {
        resultado.textContent = resultado.textContent + "7";
    }
}
ocho.onclick = function(e) {
    pantalla = resultado.textContent
    var a = pantalla.length;
    if (a < valor_longitud) {
        resultado.textContent = resultado.textContent + "8";
    }
}
nueve.onclick = function(e) {
    pantalla = resultado.textContent
    var a = pantalla.length;
    if (a < valor_longitud) {
        resultado.textContent = resultado.textContent + "9";
    }
}
punto.onclick = function(e) {

    if (contadorpunto == 0) {
        resultado.textContent = resultado.textContent + ".";
        contadorpunto = contadorpunto + 1;
    }
}
var pantalla;
pantalla = resultado.textContent

cero.onclick = function(e) {
    if (resultado.textContent == 0 && pantalla.length == 1) { /*no se hace nada aqui*/ } else {
        resultado.textContent = resultado.textContent + "0";
    }
}

reset.onclick = function(e) {
    resetear();
    resultado.textContent = resultado.textContent + "0"
}
suma.onclick = function(e) {
    operandoa = resultado.textContent;
    operacion = "+";
    contadorpunto = 0;
    limpiar();
}
resta.onclick = function(e) {
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e) {
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e) {
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e) {
    operandob = resultado.textContent;
    resolver();
}

function limpiar() {

    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
    contadorpunto = 0;
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
}

function Longitud(a) {
    pantalla = resultado.textContent
    var a = pantalla.length;
    if (a < 10) {} else {
        alert("No puede ingresar màs de 10 caracteres" + a);
    }
}