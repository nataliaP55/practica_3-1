const Microfono = require("./Microfono");
const Persona= require("./Persona");

const unCantante = new Persona ();
const nuevoCantante = new Persona ();
const smCincuentaYocho= new Microfono ();
const smCincuentaYsiete = new Microfono();

/* nati.ahoraTeLlamas("juana");
smCincuentaYocho.ahoraTeLlamas("smCincuentaYocho");
smCincuentaYocho.cambiaTuEstado(false);
nati.hablarA(smCincuentaYocho);
 */

unCantante.miNombreEs("Juan");
//unCantante.estaCantando (smCincuentaYocho);
unCantante.comoTeLlamas();

console.log(unCantante.comoTeLlamas());
console.log(unCantante.estaCantando());

smCincuentaYocho.soyModelo("sm58");
smCincuentaYocho.queModeloSos();

console.log(smCincuentaYocho.queModeloSos());

smCincuentaYocho.estanHablando();

nuevoCantante.cambioDeCantante();
nuevoCantante.miNombreEs("Ana");
console.log(nuevoCantante.cambioDeCantante());

smCincuentaYsiete.cambioDeMicrofono("sm57");
smCincuentaYsiete.soyModelo ("sm57");
console.log(smCincuentaYsiete.queModeloSos());



//smCincuentaYsiete.estanHablando();

//smCincuentaYocho.cambioDeEstado(true);

//console.log(unCantante.estaCantando());
console.log(smCincuentaYsiete.cambioDeMicrofono());
/* comoTeLlamas(){
    return "me llamo " +this.nombre;
}

miNombreEs(nuevoNombre){
    this.nombre=nuevoNombre;
}
 */