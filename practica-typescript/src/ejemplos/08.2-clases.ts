export class Persona{
    constructor( public apellidos: string, public nombre: string, public direccion: string = 'default' ){}
}

export class Policia {
    constructor(
        public comisaria: string, 
        public edad: string,
        public persona: Persona ){
    }
}


const personaN = new Persona('wilverX','1aveX');
const personaN2 = new Persona('Mencos','Carlos');
console.log(personaN)
console.log(personaN2)

const policiaN = new Policia('1011','45', personaN);
console.log(policiaN)
