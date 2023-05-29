// function addSuma(a:any, b:any){
//     return a + b;
// }

function addSuma(a:number, b:number): number {
    return a + b;
}


addSuma(1, 2)

const resultado: string =  addSuma(1, 2).toString();


const addSumaFlecha1 = (a:number, b:number):number => {
    return a + b;
}
const addSumaFlecha2 = (a:number, b:number):string => {
    return  `${a + b}`;
}


function triangulo(lado1:number, lado2?:number, radio:number = 1.5) {
    return lado1 * radio
}


const resultado1=  addSuma(1,2)
const resultado2=  addSumaFlecha1(1,5)
const resultado3=  addSumaFlecha2(1,8)
const resultado4=  triangulo(1)
 

console.log({resultado})

console.log(resultado1,resultado2, resultado3, resultado4 )



interface prGame{
    name:string;
    edad: number;
    puntos: number;
    casa: String;
    verPuntos:() => void;
}

const aumentarEdad = ( personaGame: prGame, puntosSumar:number) => {
    personaGame.puntos += puntosSumar;
    }


    const Zelda: prGame = {
        name: 'Link',
        edad: 33,
        puntos: 10,
        verPuntos(){
            console.log(`Puntos recaudados en el juego ${ this.puntos }`)
        }
    }

    aumentarEdad(Zelda, 10)
    aumentarEdad(Zelda, 30)
    aumentarEdad(Zelda, 50)
    aumentarEdad(Zelda, 7)
    Zelda.verPuntos();

export {}


