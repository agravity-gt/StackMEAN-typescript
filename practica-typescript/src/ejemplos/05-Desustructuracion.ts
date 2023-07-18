interface persona{
    nombre: string;
    edad: number;
    telefonos:telefonos
}

interface telefonos {
    telefonoCasa: number;
    telefonoTrabajo: number;
    TelefonoPersonal: number;
}


const personaN: persona = {
    nombre: 'Carlos',
    edad: 30,
    telefonos: {
        telefonoCasa: 256,
        telefonoTrabajo: 30,
        TelefonoPersonal: 30
    }
}

const {nombre, edad, telefonos} =personaN
const {telefonoCasa:telefonoDomicilio} =telefonos

console.log('nombre ', personaN.nombre)
console.log('telefono Domicilio ', telefonoDomicilio )


const equipos: string[] =['Barsa','Milan','PSG']
console.log('Equipo 2', equipos[1])
console.log('Equipo 3', equipos[3] || 'El equipo no existe')

const equipoExiste=  equipos[3] || 'El equipo no existe'

console.error('Equipo 3', equipoExiste)


const [,,, valda='no viene']: string[] =['Barsa','Milan','PSG']
console.error('Equipo 3', valda)




export{}