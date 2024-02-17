const {registrarCita,leerCita} = require('./operaciones');

const datosMascota = process.argv.slice(2);

const operacion = datosMascota[0];

const nombre  =  datosMascota[1];
const edad = datosMascota[2];
const animal = datosMascota[3];
const color = datosMascota[4];
const enfermedad = datosMascota[5];



if(operacion === "registrar"){
    registrarCita(nombre, edad, animal, color, enfermedad)
    }
    if(operacion === "leer"){
    leerCita()
    }else{console.log(
    "Elija si quiere registrar una cita o leer las citas creadas"
    )};

  