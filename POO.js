//*ABSTRACCION
/**
 * TENGO UN AUTO, EL AUTO ES EL OBJETO NO?
 * TRATAMOS DE REDUCIR O RESUMIR COMO 
 * MARCA, MODELO, COLOR Y ASI AL IGUAL LOS METODOS COMO AVANZAR, RETROCEDER
 */

//*ENCAPSULAMIENTO

/**ENCAPSULAR DATOS PARA QUE NO SALGA DE AHI, DIGAMOS QUE ES MAS SEGURIDAD
 * EL USUARIO NO TIENE CONECCION DIRECTA A LOS DATOS O NO TIENE NADA
 */

//*POLIMORFISMO

/**
 * MUCHAS FORMAS, DIGAMOS JAJA
 */

//*HERENCIA
/**HAY UNA CLASE PADRE LA CUAL HEREDA, PROPIEDADES Y METODOS A LOS HIJOS.
 * UTILIZAMOS EXTENDS
 */

//*ES UN OBJETO ASI QUE PARA ACCEDER A LAS PROPIEDADES ES CON UN '.'

//*

class animal {
    constructor(especie, edad, color){ /*DENTRO VAN LOS PARAMETROS*/
        this.especie = especie; //*CREAMOS UNA PROPIEDAD LLAMADA ESPECIE Y SERA GUAL AL VALOR QUE LLEGA DE PARAMETRO
        this.edad = edad;
        this.color = color
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
        //*METODO
       
    }
    verInformacion(){
        document.write(this.informacion+"<br>")
    }
}
class perro extends animal{
    constructor(especie, edad, color, raza){
        super(especie,edad,color);
        this.raza = raza
    }
    static ladrar(){
        alert("waaaw")
    }

    set modificarRaza(newName){
        this.raza = newName
    }

    get getRaza(){
        return this.raza;
    }
}

let perrote = new perro("perro",22,"Gris","doberman") //*NO PUEDES TENER EL MISMO NOMBRE EN CLASE Y UN OBJETO
let gato = new animal("gato",15,"Negro")
let pajaro = new animal("Loro",12,"Verde")
 


// document.write(pajaro.informacion+"<br>")

// document.write(perro.informacion+"<br>")

// document.write(gato.informacion+"<br>")

/*SI LA PONEMOS FUERA ES FUNCION, SI LA TENEMOS DENTRO DEL OBJETO SE CONOCE COMO METODO*/

perrote.verInformacion();//USO DEL METODO
gato.verInformacion();
pajaro.verInformacion();
perrote.modificarRaza = "pato"

document.write(perrote.getRaza)