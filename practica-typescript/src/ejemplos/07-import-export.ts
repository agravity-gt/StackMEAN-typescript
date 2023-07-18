import {producto, calcular} from './06.1-DesestructuracionArgumentos'

const nuevoCarritoCompras: producto[] = [
    {
        descripcion: 'Iphone',
        precio: 1400

    },
    {
        descripcion: 'Samsung tablet',
        precio: 1500
    }
]

const [ total, totalImpuesto] = calcular({
    producto: nuevoCarritoCompras,
    impuesto: 0.12
})


console.log('total', total)
console.log('Impuestos', totalImpuesto)
