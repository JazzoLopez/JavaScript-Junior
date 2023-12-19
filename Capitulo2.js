//* HISTORIA DE COFLA 2
//* UN JOVEN MUY AFORTUNADO LOGRO GANAR EL PRIMER PREMIO DE LA LOTERIA.. 
//* EXACTO, ESTAMOS HABLANDO DEL PROBRE AL QUE COFLA LE DIO UNA MANO
//* ESTE POBRE DECIDE HACER UNA FIESTA PARA FESTEJAR QUE SALIO DE LA POBREZA 
//* CON ESTE MILLONARIO, COMPRÓ UNA MAQUINA QUE DEJA PASAR SOLAMENTE A LOS MAYORES DE EDAD
//* ENTRE OTRAS COSAS...

//*DEJAR PASAR SOLO A LOS MAYORES DE EDAD
//* LA PRIMER PERSONA QUE ENTRE DESPUES DE LAS 2 AM NO PAGA
//*OTRA OPCION ES TOMAR LA HORA DE ACUERDO AL TIEMPO DEL SISTEMA


// let free = false
// const validateClient = (time) => {
//     let age = prompt("Cual es tu edad");
//     if(age < 18){
//         alert("Eres menor de edad lo siento")
//     }
//     else{
//         if(time >= 2 && time < 7 && free == false){
//             alert("Pasa es gratis para ti porque eres la primer persona despues de las 2:00 AM")
//             free = true;
//         }
//         else{
//             alert(`Puedes pasar pero debes de pagar la entrada pues ya son las ${time}:00 Horas`)
//         }
//     }
// }

//validateClient(2)
//validateClient(3)
//validateClient(4)
//validateClient(5)

// //* CREAR UN MINISISTEMA QUE NOS PERMITA REGISTRAR LOS ALUMNOS PRESENTES Y AUSENTES EN CLASE.
// //* PASADOS DE LOS 30 DIAS MOSTRAR LA SITUACION FINAL DE TODOS LOS ALUMNOS (NUMERO DE PRESENTES Y NUMERO DE AUSENTES)
// //*SE PUEDE TENER UN MAXIMO DE 10% DE AUSENCIA POR SEMESTRE SI SE TIENEN MAS ACLARAR QUE ESTANN REPROBADOS
//  //? let cantidad = prompt("Cuantos alumnos son")
 
//  let alumnosTotales = []
//  for (i = 0; i < cantidad; i++){
//     alumnosTotales[i] = [prompt(`Nombre del alumno ${i+1}`),0]  
//  }


//  const tomarAsistencia = (nombre, p) => {
//     let presente = prompt(nombre);
//     //A O P
//     if(presente == "P" || presente == "p"){
//         alumnosTotales[p][1]++;
//     }
//  }

//  for(i = 0; i <30 ; i++){
//     for (alumno in alumnosTotales){
//         tomarAsistencia(alumnosTotales[alumno][0],alumno)
//     }
//  }

//  for(alumno in alumnosTotales){
//     let resultado = `${alumnosTotales[alumno][0]}:<br>
//     ______Presentes:${alumnosTotales[alumno][1]}<br>
//     ------Ausentes:${30 -parseInt(alumnosTotales[alumno][1])}
//     <br>
//     `
//     if((30 - alumnosTotales[alumno][1]) > 18){
//         resultado+= `<br><p style="background:red;">Reprobado por inasistencia</p>`
//     }   
//     else{`<br><br>`}
//     document.write(resultado)
//  }

 //*CREAR CALCULADORA QUE SIMPLIFIQUE EL TRABAJO CON FUNCIONES

 const suma = (num1, num2) =>{
    return parseInt(num1) + parseInt(num2);
 }

 const resta = (num1, num2) =>{
    return parseInt(num1) - parseInt(num2);
 }

 const multiplicacion = (num1, num2) =>{
    return parseInt(num1) * parseInt(num2);
 }

 const division = (num1, num2) =>{
    return parseFloat(num1) / parseFloat(num2);
 }

 let op = prompt("Que operacion deseas realizar¿? \n1.- Suma \n2.- Resta \n3.- Multiplicacion \n4.-Division")
op = parseInt(op)

 switch (op) {
    case 1:
            num1 = prompt("Ingresa el valor del numero 1")
            num2 = prompt("Ingresa el valor del numero 2")
            alert(`El resultado de la suma es: ${suma(num1,num2)}`)
        break;
    case 2:
            num1 = prompt("Ingresa el valor del numero 1")
            num2 = prompt("Ingresa el valor del numero 2")
            alert(`El resultado de la resta es: ${resta(num1,num2)}`)
        break;
    case 3:
            num1 = prompt("Ingresa el valor del numero 1")
            num2 = prompt("Ingresa el valor del numero 2") 
            alert(`El resultado de la multiplicacion es: ${multiplicacion(num1,num2)}`)
        break;
    case 4:
            num1 = prompt("Ingresa el valor del numero 1")
            num2 = prompt("Ingresa el valor del numero 2")
            alert(`El resultado de la division es: ${division(num1,num2)}`)
        break;
    default:
        break;
 }