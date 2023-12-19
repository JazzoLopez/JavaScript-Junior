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

//*INSTANCIAMOS

let perro = new animal("Pug",22,"Gris")
let gato = new animal("gato",15,"Negro")
let pajaro = new animal("Loro",12,"Verde")
 
//*ES UN OBJETO ASI QUE PARA ACCEDER A LAS PROPIEDADES ES CON UN '.'

// document.write(pajaro.informacion+"<br>")

// document.write(perro.informacion+"<br>")

// document.write(gato.informacion+"<br>")

/*SI LA PONEMOS FUERA ES FUNCION, SI LA TENEMOS DENTRO DEL OBJETO SE CONOCE COMO METODO*/

perro.verInformacion();//USO DEL METODO
gato.verInformacion();
pajaro.verInformacion();