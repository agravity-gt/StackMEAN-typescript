interface madre{
nombre:string;
hijos?:string[];
}

const madre1:madre = {
 nombre: "Fernanda"
}

const madre2:madre = {
    nombre: "Alejandra",
    hijos: ["juan", "Pedro"]
   }


const cantidadHijos= (madreVar: madre)=> {
    const resultado = madreVar.hijos!.length || 0
    console.log(madreVar.nombre, resultado)
}

cantidadHijos(madre1)



