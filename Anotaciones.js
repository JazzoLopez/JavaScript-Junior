// {//*VARIABLES BASICAS
// //*INSTALA BETTER COMMENT PARA VER COMO DIVIDO LOS COMENTARIOS EN COLORES PARA SABER CUALES SON Y CUALES ERAN PARTE DE CODIGO QUE PUEDES PROBAR
// num1 = 10
// //*ELEVARLO 
// num1 **2
// //?console.log(num1**2)

// //*PEDIR UN DATO POR UN ALERT Y PARSEARLO PARA ADAPTARLO

// //?let peticion = prompt("ingresa un numero");
// //?peticion = parseInt(peticion);

// //*DECREMENTO O INCREMENTO

// num1--
// num1++
// //*ASI SON PUROS VAR *//

// //*ARREGLOS
// //*DECLARACION DE ARREGLO UNIDIMENCIONAL

// frutas = ["Mangos", "Manzanas", "Physalis"];
// //?document.write(frutas[0])
// //? document.write(frutas[2])
// //? document.write(frutas[10]) //*NO TIENE UN VALOR PERO PARA LOS ARREGLOS ESA POSICION YA ESTA DECLARADA PERO SIN VALOR 
// //? console.log(frutas)

// //*ARRAYS ASOCIATIVOS, UN ARRAY ASOCIATIVO TIENE MAS DATA DENTRO, COMO LA COMUNICACION JSON QUE VEREMOS DESPUES
// let data = {
//     nombre: "JazzielPC",
//     procesador: "Intel Core i5",
//     ram: "8GB",
//     espacio: "500GB"
// }

// //?let ram = data.ram //*AQUI ASIGNAMOS DEL OBJETO DATA SU PROPIEDAD DE RAM A UNA VARIABLE INDEPENDIENTE
// // PODEMOS DESESTRUCTURAR
// let {nombre, procesador, ram, espacio} =  data

// //?document.writeln(data) //*NOS DICE QUE ES UN OBJETO PORQUE ES UN OBJETO LMAO
// //?document.writeln(data[0]) //*NOS DICE UNDEFINED PORQUE NO ES UN ARREGLO NORMAL, Y SU CLAVE ES LAS QUE HEMOS PUESTO
// //?document.writeln(data.nombre) //AQUI MOSTRAMOS UN DATO

// let frase = `El nombre de mi pc es: <b>${data.nombre}</b> <br>
//              El procesador es: ${data.procesador} <br>
//              La ram que tengo es: ${ram}`
// document.writeln(frase +"<br>")

// //*BUCLES E ITERACIONES
// //*WHILE PRIMERO PREGUNTA Y DESPUES LO REALIZA

// let contador = 0;
// while(contador != 10) {
//     contador++
//     document.writeln(contador + "<br>")
// }
// document.write("<br>")
// contador = 0

// //*DO WHILE PRIMERO EJECUTA Y ALMENOS LO HACE UNA VEZ
// do{
//     contador++;
//     document.writeln(contador+"<br>" )
// }while (contador!=10);

// //BREAK
// contador = 0
// while(contador < 1000){
//     contador++
//     document.writeln("<br>" + contador)
//     if(contador == 10){
//         break; //*SI LLEGA A 10, PARTIMOS AHI Y DEJAMOS DE EJECUTAR Y SOLO IMPRIMIMOS HASTA EL 10
//     }
// }
// document.writeln("<br> Fin")

// //FOR LO DETERMINAMOS
// //DECLARAMOS; INICIALIZAMOS; ITERAMOS

// for(let i = 1; i < 10; i++){
//     document.writeln("<br>"+i)
// }
// document.writeln("<br> Fin")

// for(let i = 1; i <=10; i++){
    
//     if(i == 5){
//         continue; //*EXCLUIMOS ESE DATO Y CONTINUA
//     }
//     document.writeln("<br>"+i)
// }
// document.writeln("<br> Fin")

// //*FOR IN Y FOR OF

// let animales = ["gato", "perro", "dinosaurio"];
// animales.edad = 20;
// //*AUTOMATICAMENTE SABE QUE LA PRIMER VARIABLE, ESTE NOS DA LA POSICION Y PODEMOS USAR ESA POSICION
// for(let animal in animales){
//     document.writeln("El animal es: "+animales[animal]);
//     document.writeln(animal)
// }
// document.write("<br>")

// for (let animal of animales){
//     document.writeln(animal+"<br>")
// }

// //*SENTENCIA LABEL, ESTE  ES UN POCO CONFUSO
// array1 = ["maria", "josefa", "roberta"]
// array2 = ["pedro", "carlos", array1, "josefina"]
// forRancio: //*TODITO EL FOR INCLUIDO LOS ANIDADOS ES EL RANCIO
// for (let arr in array2){
//     if(arr == 2){
//         for(let arreglo of array1){
//             if (arreglo == "maria"){
//                 continue forRancio;
//             }
//             document.writeln(arreglo + "<br>")
//                 continue ; 
//         }
//     }
//     else{
//         document.writeln(array2[arr] + "<br>")
//     }
// }

// //*FUNCIONES
// function saludar(){ //function declaration
//     respuesta = prompt("Hola como fue tu dia");
//     if(respuesta == "bien"){
//         alert("Genial que te fue bien");
//     }else {
//         alert("Una pena");
//     }
// }
// //? saludar()

// saludo = function(){ //function expression
//     respuesta = prompt("Hola como fue tu dia");
//     if(respuesta == "bien"){
//         alert("Genial que te fue bien");
//     }else {
//         alert("Una pena");
//     }
// }
// //? saludo()

// //*USO DEL RETURN, PARA REGRESAR UN VALOR Y DEVUELVE UN TIPO DE DATO

// function ejemplo(){
//     alert("Hola")
//     return `La funcion se ejecutó correctamente` //Retornamos este dato y ese es el tipo de dato
// }
// //*EL RETURN FINALIZA LA FUNCION, COMO EL BREAK, AHI DICE EPAAA FIN
// document.writeln("<br>" +typeof (ejemplo()))

// //*LAS FUNCIONES NO SON FUNCIONES SIN PARAMETROS PORQUE SIN ELLOS NO VARIAN SUS DATOS

// function suma(val1, val2){
//     let resultado = val1+val2;
//     document.write("<br>")
//     return resultado;
    
// }

// document.write(suma(10)) //*LOS PARAMETROS DEBEN LLEVAR UN VALOR SI NO NOS ARROJA UN NAN
// document.write(suma(1222,12))
// document.write(suma(10,21))
// document.write(suma(4,12))
// document.write(suma(20,12))

//     let frasesaludo = (nombre) =>{
//     let frase = `Hola ${nombre}`
//     return frase;
// }

// document.write("<br>" + frasesaludo("Jazziel"))

// const salut = () => {
//     return "Hao"
// }

// document.write(frasesaludo("jasdasd"))

// const valores = () => document.write("<br> Hola")

// valores()}


/*CAPITULO 4*/

let test = "abc "
let test2 = "cadena"

//CONCATENAR UNA CADENA
resultado = test.concat(" hola mano")

//EVALUAR SI INICIA CON UNA CADENA ESPECIFICA, DEVUELVE TRUE O FALSE
// resultado = test.startsWith(test2)

//INCLUDES PAR VER SI INCLUYE UNA CADENA QUE HAGA MATCH
resultado = test.includes("de") //*ESTO DARIA UN TRUE

//DEVUELVE LA POSICION EN DONDE SE ENCUENTGRA, ESTO ES indexOf, SOLO DE CARACTERES, DONDE MUESTRA EL PRIMERO QUE HAGA MATCH
resultado = test.indexOf("n") //si nos devuelve -1 es que no existe
resultado = test.lastIndexOf("s")


//RELENA EL LIMITE  QUE PONES EL SEGUNDO PARAMETRO ES CON QUE LO RELLENARA

// resultado = test.padEnd(20,"aeiou ")
// resultado = test.repeat(30)

// document.write(resultado)

let testDividido = "hola como estas" //CAMBIA EL "COMO" DIVIDIENDOLO Y CREANDO UN ARRAY
resultado = testDividido.split("como")
document.write(resultado)
