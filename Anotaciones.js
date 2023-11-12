//*VARIABLES BASICAS
//*INSTALA BETTER COMMENT PARA VER COMO DIVIDO LOS COMENTARIOS EN COLORES PARA SABER CUALES SON Y CUALES ERAN PARTE DE CODIGO QUE PUEDES PROBAR
num1 = 10
//*ELEVARLO 
num1 **2
//?console.log(num1**2)

//*PEDIR UN DATO POR UN ALERT Y PARSEARLO PARA ADAPTARLO

//?let peticion = prompt("ingresa un numero");
//?peticion = parseInt(peticion);

//*DECREMENTO O INCREMENTO

num1--
num1++
//*ASI SON PUROS VAR *//

//*ARREGLOS
//*DECLARACION DE ARREGLO UNIDIMENCIONAL

frutas = ["Mangos", "Manzanas", "Physalis"];
//?document.write(frutas[0])
//? document.write(frutas[2])
//? document.write(frutas[10]) //*NO TIENE UN VALOR PERO PARA LOS ARREGLOS ESA POSICION YA ESTA DECLARADA PERO SIN VALOR 
//? console.log(frutas)

//*ARRAYS ASOCIATIVOS, UN ARRAY ASOCIATIVO TIENE MAS DATA DENTRO, COMO LA COMUNICACION JSON QUE VEREMOS DESPUES
let data = {
    nombre: "JazzielPC",
    procesador: "Intel Core i5",
    ram: "8GB",
    espacio: "500GB"
}

//?let ram = data.ram //*AQUI ASIGNAMOS DEL OBJETO DATA SU PROPIEDAD DE RAM A UNA VARIABLE INDEPENDIENTE
// PODEMOS DESESTRUCTURAR
let {nombre, procesador, ram, espacio} =  data

//?document.writeln(data) //*NOS DICE QUE ES UN OBJETO PORQUE ES UN OBJETO LMAO
//?document.writeln(data[0]) //*NOS DICE UNDEFINED PORQUE NO ES UN ARREGLO NORMAL, Y SU CLAVE ES LAS QUE HEMOS PUESTO
//?document.writeln(data.nombre) //AQUI MOSTRAMOS UN DATO

let frase = `El nombre de mi pc es: <b>${data.nombre}</b> <br>
             El procesador es: ${data.procesador} <br>
             La ram que tengo es: ${ram}`
document.writeln(frase +"<br>")

//*BUCLES E ITERACIONES
//*WHILE PRIMERO PREGUNTA Y DESPUES LO REALIZA

let contador = 0;
while(contador != 10) {
    contador++
    document.writeln(contador + "<br>")
}
document.write("<br>")
contador = 0

//*DO WHILE PRIMERO EJECUTA Y ALMENOS LO HACE UNA VEZ
do{
    contador++;
    document.writeln(contador+"<br>" )
}while (contador!=10);

//BREAK
contador = 0
while(contador < 1000){
    contador++
    document.writeln("<br>" + contador)
    if(contador == 10){
        break; //*SI LLEGA A 10, PARTIMOS AHI Y DEJAMOS DE EJECUTAR Y SOLO IMPRIMIMOS HASTA EL 10
    }
}
document.writeln("<br> Fin")

//FOR LO DETERMINAMOS
//DECLARAMOS; INICIALIZAMOS; ITERAMOS

for(let i = 1; i < 10; i++){
    document.writeln("<br>"+i)
}
document.writeln("<br> Fin")

for(let i = 1; i <=10; i++){
    
    if(i == 5){
        continue; //*EXCLUIMOS ESE DATO Y CONTINUA
    }
    document.writeln("<br>"+i)
}
document.writeln("<br> Fin")

//*FOR IN Y FOR OF

let animales = ["gato", "perro", "dinosaurio"];
animales.edad = 20;
//*AUTOMATICAMENTE SABE QUE LA PRIMER VARIABLE, ESTE NOS DA LA POSICION Y PODEMOS USAR ESA POSICION
for(let animal in animales){
    document.writeln("El animal es: "+animales[animal]);
    document.writeln(animal)
}
document.write("<br>")

for (let animal of animales){
    document.writeln(animal+"<br>")
}

//*SENTENCIA LABEL, ESTE  ES UN POCO CONFUSO
array1 = ["maria", "josefa", "roberta"]
array2 = ["pedro", "carlos", array1, "josefina"]
forRancio: //*TODITO EL FOR INCLUIDO LOS ANIDADOS ES EL RANCIO
for (let arr in array2){
    if(arr == 2){
        for(let arreglo of array1){
            if (arreglo == "maria"){
                continue forRancio;
            }
            document.writeln(arreglo + "<br>")
                continue ; 
        }
    }
    else{
        document.writeln(array2[arr] + "<br>")
    }
}