export interface producto{
    descripcion: string;
    precio: number;
}

// const celular: producto = {
//     descripcion: 'Iphone',
//     precio: 1400
// }

// const tablet: producto = {
//     descripcion: 'Samsung tablet',
//     precio: 1500
// }

// const carritoDeCompras = [celular, tablet]
// const impuesto = 0.12


interface calcular{
    impuesto: number;
    producto: producto[]; 
}

export function calcular( datos:calcular): [number, number]{
    const { impuesto,  producto } = datos
    let total=0
    producto.forEach( ({precio}) => {
        total += precio
    })
return [ total, total * impuesto ]
}


// const [ totalx , totlImpuestox] = calcular({
//     producto: carritoDeCompras,
//     impuesto,
    
// })

// console.log('Total ',totalx)
// console.log('Impuestos ',totlImpuestox)

// console.log(resultados)
// console.log('Total ', resultados[0])
// console.log('Impuestos ', resultados[1])