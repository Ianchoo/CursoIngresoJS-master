/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo,ancho;
    var perimetro; // perimetro es 2 * ancho + 2 * largo
    var resultado; // resultado = perimetro * 3(hay 3 alambres)
    largo=document.getElementById("Largo").value;
    largo=parseInt(largo)
    ancho=document.getElementById("Ancho").value;
    ancho=parseInt(ancho)
    perimetro = 2*ancho +2*largo
    resultado = perimetro * 3
    console.log("Se necesitarian: "+resultado+" metros de alambre")
}
function Circulo () 
{
    var radio; // perimetro es 2 * ancho + 2 * largo
    var resultado; // resultado = perimetro * 3(hay 3 alambres)
    radio=document.getElementById("Radio").value;
    radio=parseInt(radio);
    resultado=2 * 3.14 * radio
    console.log("Se necesitarian: "+resultado+" metros de alambre")
}
function Materiales () 
{
    var largo,ancho;
    largo=document.getElementById("Largo").value;
    largo=parseInt(largo)
    largo=console.log("Se vana a necesitar "+largo*2+"Kg de cemento")
    ancho=document.getElementById("Ancho").value;
    ancho=parseInt(ancho)
    largo=console.log("Se vana a necesitar "+ancho*3+"Kg de cemento")
}