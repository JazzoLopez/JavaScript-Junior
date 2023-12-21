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



class app {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir() {
        if (this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert('App iniciada')
        }
    }

    cerrar() {
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert('App cerrada')
        }
    }

    instalar() {
        if(this.instalada == false){
            this.instalada = true;
          if(this.instalada == true){
              alert('App instalada correctamente');
          }else{
                alert('No se pudo instalar la app');
          }
        }
    }

    desinstalar() {
        if(this.instalada == true){
            this.instalada = false;
            alert('App desisntalada correctamente')
        }
    }

    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `
    }
}

const app1 = new app("1.000", "5 estrellas", "900mb");
const app2 = new app("500", "4.5 estrellas", "800mb");
const app3 = new app("700", "3 estrellas", "700mb");
const app4 = new app("300", "2.5 estrellas", "600mb");
const app5 = new app("1.500", "1 estrella", "500mb");
const app6 = new app("800", "4 estrellas", "400mb");
const app7 = new app("1.200", "4.5 estrellas", "300mb");



// app1.instalar();
// app1.desinstalar();
// app1.abrir();
// app1.cerrar();
document.write(`
    ${app1.appInfo()}<br>
    ${app2.appInfo()}<br>   
    ${app3.appInfo()}<br>   
    ${app4.appInfo()}<br>   
    ${app5.appInfo()}<br>   
    ${app6.appInfo()}<br>   
    ${app7.appInfo()}<br>   
    `)
