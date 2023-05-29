
// interface prGame{
//     name: string;
//     Consolas: {
//       ps1:number;
//       ps5: number;
//       xbox: number;
//       };
//      mostrar:() => void;
//   }

 interface prGame{
     nombre: string;
     Consolas: Consolas;
      mostrar:() => void;  
     }

  interface Consolas{
    ps1:number;
    ps5: number;
    xbox: number;
  }

const persona: prGame = {
    nombre: 'Harry Potter',
    Consolas:{
        ps1:3,
        ps5:3,
        xbox:1
    },
    mostrar(){
        return ' Nombre' +this.nombre + ' ps1: ' + this.Consolas.ps1 + ' ps5: ' + this.Consolas.ps5 + ' Xbox ' + this.Consolas.xbox 
    }
}

// Desustructuracion
const { nombre , Consolas} = persona
const {ps1, ps5, xbox} = Consolas
const {} = ps1


console.log(nombre , ps1 , ps5, xbox)

export {}

