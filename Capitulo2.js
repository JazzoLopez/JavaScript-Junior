//* HISTORIA DE COFLA 2
//* UN JOVEN MUY AFORTUNADO LOGRO GANAR EL PRIMER PREMIO DE LA LOTERIA.. 
//* EXACTO, ESTAMOS HABLANDO DEL PROBRE AL QUE COFLA LE DIO UNA MANO
//* ESTE POBRE DECIDE HACER UNA FIESTA PARA FESTEJAR QUE SALIO DE LA POBREZA 
//* CON ESTE MILLONARIO, COMPRÓ UNA MAQUINA QUE DEJA PASAR SOLAMENTE A LOS MAYORES DE EDAD
//* ENTRE OTRAS COSAS...

//*DEJAR PASAR SOLO A LOS MAYORES DE EDAD
//* LA PRIMER PERSONA QUE ENTRE DESPUES DE LAS 2 AM NO PAGA
//*OTRA OPCION ES TOMAR LA HORA DE ACUERDO AL TIEMPO DEL SISTEMA


let free = false
const validateClient = (time) => {
    let age = prompt("Cual es tu edad");
    if(age < 18){
        alert("Eres menor de edad lo siento")
    }
    else{
        if(time >= 2 && time < 7 && free == false){
            alert("Pasa es gratis para ti")
            free = true;
        }
        else{
            alert("Puedes pasar pero debes de pagar la entrada")
        }
    }
}

validateClient(2)
validateClient(3)
validateClient(4)
validateClient(5)