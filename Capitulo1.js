//*HISTORIA DE COFLA 1
//*DEL CURSO DE JAVASCRIPT NIVEL JUNIOR IMPARTIDO POR SOY DALTO
//*3 chicos de 23 años perfectamente normales entran a una heladeria a comprar un helado pero hay un problema:
//*Los precios no estan al lado de cada estante con su respectivo helado
//*Ellos quieren comprar el helado mas caro
//*los precios son los siguientes
//*Helado de agua: 0.6
//*Helado de crema: 1
//+Helado de marca heladix: 1.6
//*elado de marca heladovich: 1.7
//*Helado de marca helardo: 1.8
//*Helado con confites: 2.9
//*bole de 1/4 kg: 2.9

//*Pedirles que ingresen el monto y mostrarles el helado que que les alcanza
//*Si hay mas de 2 con el mismo precio, mostrar a ambos
//*Cofla quiere saber cuanto es el cambio devuelto

let roberto = prompt('Ingresa el monto que tiene Roberto');
let pedro = prompt('Ingresa el monto que tiene Pedro');
let cofla = prompt('Ingresa el monto que tiene Cofla');
cofla = parseInt(cofla); //Convertimos a numero

//Cofla
if(cofla >= 0.6 && cofla < 1){
    alert("Cofla, compra el helado de agua");
    alert("y te sobran " + (cofla - 0.6)) //SE SEPARA ENTRE PARENTESIS PORQUE VA DE IZQUIERDA A DERECHA
}
else if(cofla >= 1 && cofla < 1.6){
    alert("Cofla, compra el helado de crema");
    alert("y te sobran " + (cofla - 1))
}
else if(cofla >= 1.6 && cofla < 1.7){
    alert("Cofla, compra el helado de marca heladix");
    alert("y te sobran " + (cofla - 1.6))
}
else if(cofla >= 1.7 && (cofla < 1.8)){
    alert("Cofla, compra el helado de marca heladovich");
    alert("y te sobran " + (cofla - 1.7))
}
else if(cofla >= 1.8 && cofla < 2.9){
    alert("Cofla, compra el helado de marca helardo");
    alert("y te sobran " + (cofla - 1.8))
}
else if(cofla >= 2.9){
    alert("Cofla, compra el helado con confites o el pote de 1/4kg");
    alert("y te sobran " + (cofla - 2.9))
}
else{
    alert("Lo siento Cofla, no te alcanza para ningun helado");
}

//Roberto

if(roberto >= 0.6 && roberto < 1){
    alert("Roberto, compra el helado de agua");
}
else if(roberto >= 1 && roberto < 1.6){
    alert("Roberto, compra el helado de crema");
}
else if(roberto >= 1.6 && roberto < 1.7){
    alert("Roberto, compra el helado de marca heladix");
}
else if(roberto >= 1.7 && roberto < 1.8){
    alert("Roberto, compra el helado de marca heladovich");
}
else if(roberto >= 1.8 && roberto < 2.9){
    alert("Roberto, compra el helado de marca helardo");
}
else if(roberto >= 2.9){
    alert("Roberto, compra el helado con confites o el pote de 1/4kg");
}
else{
    alert("Lo siento Roberto, no te alcanza para ningun helado");
}

//Pedro

if(pedro >= 0.6 && pedro < 1){
    alert("Pedro, compra el helado de agua");
}
else if(pedro >= 1 && pedro < 1.6){
    alert("Pedro, compra el helado de crema");
}
else if(pedro >= 1.6 && pedro < 1.7){
    alert("Pedro, compra el helado de marca heladix");
}
else if(pedro >= 1.7 && pedro < 1.8){
    alert("Pedro, compra el helado de marca heladovich");
}
else if(pedro >= 1.8 && pedro < 2.9){
    alert("Pedro, compra el helado de marca helardo");
}
else if(pedro >= 2.9){
    alert("Pedro, compra el helado con confites o el pote de 1/4kg");
}
else{
    alert("Lo siento Pedro, no te alcanza para ningun helado");
}
