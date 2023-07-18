export class Persona{
    constructor( public nombre: string, public direccion: string = 'default' ){}
}

export class policia extends Persona{
    constructor(public comisaria: string, public edad: string, nombre:string, direccion: string){
    super(nombre, direccion);
    }
}


const personaN = new Persona('wilverX','1aveX');
const personaN2 = new Persona('Carlos');
 const policiaN1 = new policia('comisariaX', '22', 'carlos','1av');
console.log(personaN)
console.log(personaN2)
console.log(policiaN1)
console.log(policiaN1.nombre)
// console.log('direccion',personaN2.direccion)
// console.log('nombre',personaN2.nombre)