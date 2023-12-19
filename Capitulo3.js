/**HISTORIA DE COFLA 3 
 * CREAR UN SISTEMA PARA MOSTRARLE A COFLA LAS PARTICULARIDADES E LOS 3 CELULARES.
 * CADA CELULAR DEBE TENER COLOR, PESO, RESOLUCION DE PANTALLA, RESOLUCION DE CAMARA Y MEMORIA RAM, CADA CELULAR DEBE PODER PRENDER, REINICIAR, APAGAR , TOMAR FOTOS Y GRABAR
*/

class celphone{
    constructor(color, peso, tamaño, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    encenderPantalla(){
        if(this.encendido == false){
            alert("celular prendido")
            this.encendido = true;
        }else{
            alert("el celular ya esta prendido")
        }
    }

    apagar(){
        if(this.encendido == true){
            alert("celular apagado")
            this.encendido = false;
        }else{
            alert("el celular ya esta apagado")
        }
    }

    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando celular")
        }else{
            alert("el celular esta apagado")
        }
    }
    
    tomarFotos(){
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
    }

    grabarVideo(){
        alert(`grabando video en una resolucion de: ${this.resolucionDeCamara}`)
    }

    mostrarInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolucion de Pantalla: <b>${this.tamaño}</b><br>
        Resolucion de Camara: <b>${this.resolucionDeCamara}</b><br>
        Memoria Ram: <b>${this.memoriaRam}</b><br>
        `
    }

}


class celphonePlus extends celphone{
    constructor(color, peso, tamaño, ram, rdce){
        super(color, peso, tamaño, tamaño, ram);
        this.rdce = rdce
    }

    grabarVideoLento(){
        alert('Estas grabando en camara lenta');
    }

    reconocimiento(){
        alert('Vamos a iniciar un reconocimiento facial')
    }

    mobileinfo(){
        return this.mostrarInfo() + `Resolucion de Camara Extra:<b> ${this.rdce} </b><br>`
    }
}




// const celular1 = new celphone("Rojo", "150g", "5'", "4k", "3GB");
 const celular2 = new celphone("Azul", "160g", "6'", "1080p", "4GB");
const celular3 = new celphone("Negro", "140g", "5.5'", "720p", "2GB");
const celular1 = new celphonePlus("Blanco","500g", "8.5'", "4gb", "10B","4K")

// celular1.encenderPantalla();
// celular1.tomarFotos();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.encenderPantalla()


document.write(`
    ${celular1.mobileinfo()}<br> 
    ${celular2.mostrarInfo()}<br> 
    ${celular3.mostrarInfo()}<br> `
)

