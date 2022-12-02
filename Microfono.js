const Persona = require("./Persona");

class Microfono{
    //estado/característica/campo
    modelo =" no tengo nombre";
    micEncendido = false;

/* muestra el resultado del Micrófono cuando se habla, 
dependiendo de si está encendido 
 */
    //comportamiento/método

    /** 
     * muestra el resultado del Micrófono al hablar
     * dependiendo del estado micEncendido
    @param {Persona} unaPersona que está hablando al Micrófono
     */

    queModeloSos(){
        return " canto con " +this.modelo;
    }    
    soyModelo(nuevoModelo){
        this.modelo=nuevoModelo;
    }




    /**
     * muestra en consola si el microfono está sonando o no
     */
    estanHablando (){
        console.log(this.modelo, "está sonando?");
       
        if (this.micEncendido) {
            console.log("se escucha");
        } else {
            console.log("no se escucha");
        }
    }

    cambioDeMicrofono(){
        return "yo canto con " +this.modelo
    }



    /** //cambia el estado de micEncendido al Microfono
    @param {boolean} nuevoEstado //para el Micrófono
     */
    
   /*  cambioDeEstado(){
        this.micEncendido=true;
    } */
 /*    cambiaTuEstado(nuevoEstado){
        this.micEncendido=nuevoEstado;
    } */
    /**
     * muestra la presentacion del Microfono
    @returns //la presentancion de microfono
    */
            
 /*    comoTeLlamas (){
        return this.nombre;
    } */

    /**
    @param {string} nuevoNombre //para el microfono
    */ 
 
   /*  ahoraTeLlamas (nuevoNombre){
        this.nombre =  nuevoNombre;
    } */
}
//exsporta la definicion de la clase Microfono
module.exports = Microfono;