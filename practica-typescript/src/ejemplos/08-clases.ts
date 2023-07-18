export class Persona{
    public nombre: string;
    public direccion: string;
    constructor(nombre: string, direccion: string ){
        this.nombre= nombre;
        this.direccion= direccion;
    }
}


const personaN = new Persona('wilverX','1aveX');
const personaN2 = new Persona('Carlos','2aveX');
console.log(personaN)
console.log(personaN2)
console.log('direccion',personaN2.direccion)
console.log('nombre',personaN2.nombre)