const Microfono = require("./Microfono");


class Persona {
    nombre="no tengo un nombre";
    hablando= true;


   
    /* ahoraTeLlamas(nuevoNombre){
        this.nombre= nuevoNombre;
    }

    comoTeLlamas(){
        return this.nombre;  
    }
 */

    /**
     * devuelve la presentacion del cantante
     * @returns la presentacion del cantante
     */
    comoTeLlamas(){
        return "me llamo " +this.nombre;
    }

    miNombreEs(nuevoNombre){
        this.nombre=nuevoNombre;
    }
    /**
     * 
     * @returns un mensaje con el nombre del cantante
     */
    estaCantando(){
        return  this.nombre+ ", el cantante";  
    }

    cambioDeCantante(){
        return "ahora soy " +this.nombre +", otra cantante";
    }
    miNombreEs(otroNombre){
        this.nombre=otroNombre;
    }

    
   /*  estanHablando (){
        if (this.micEncendido) {
            console.log("se escucha");
        } else {
            console.log("no se escucha");
        }
    } */
    /**
     * 
     * @param {Microfono} unMicrofono para hablar
     */

    /* hablarA(unMicrofono){
        console.log("intento hablar a ", unMicrofono.comoTeLlamas ());
        unMicrofono.estanHablando(this);
    } */
}


module.exports = Persona;