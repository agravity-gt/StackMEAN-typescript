// interface producto{
//     descripcion: string;
//     precio: number;
// }

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

// interface calcular{
//     impuesto: number;
//     producto: producto[]; 
// }

// function calcular( datos:calcular): number[]{

//     let total=0

//     datos.producto.forEach( prodcuto => {
//         // total = total + prodcuto.precio
//         total += prodcuto.precio
//     })
// return [ total, total * datos.impuesto ]

// }


// const resultados = calcular({
//     producto: carritoDeCompras,
//     impuesto
// })

// console.log(resultados)
// console.log('Total ', resultados[0])
// console.log('Impuestos ', resultados[1])