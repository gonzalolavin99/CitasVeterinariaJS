const fs = require("fs");

const registrarCita = (
  nombreMascota,
  edad,
  tipoDeMascota,
  colorMascota,
  enfermedad
) => {
  const cita = {
    nombreMascota: nombreMascota,
    edad: edad,
    tipoDeMascota: tipoDeMascota,
    colorMascota: colorMascota,
    enfermedad: enfermedad,
  };

  const contenidoCita = fs.readFileSync("citas.json", "utf-8");
  const citasCreadas = JSON.parse(contenidoCita);
  citasCreadas.push(cita);

  fs.writeFileSync("citas.json", JSON.stringify(citasCreadas));
  console.log("Cita creada exitosamente");
};

const leerCita = () =>{

    const contenidoCita=fs.readFileSync('./citas.json', 'utf-8')
console.log((JSON.parse(contenidoCita)));
};

module.exports={registrarCita,leerCita};
