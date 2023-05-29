

let paises: string[] = ['guatemala', 'salvador', 'nicaragua']


interface persona {
    nombre: string,
    apellidos: string,
    paisesVisitados: string[],
    direccion: string,
    direccionTrabajo?: string,
}


const personaX: persona = {
    nombre: 'Carlos',
    apellidos: 'Robledo',
    paisesVisitados: paises,
    direccion: '1ave Zona 11'
}

personaX.direccionTrabajo='zona 10'

console.table(personaX)

export {}