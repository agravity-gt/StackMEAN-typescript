export function funcionGenerica<T>( argumento:T): T{
    return argumento
}

const soyUnIntentoDeString= funcionGenerica('hola mundo')
const soyUnString= funcionGenerica<string>('hola mundo')
const soyUnArrayN= funcionGenerica<number[]>([1,2,3,4,5])
const soyUnNumero= funcionGenerica<number>(10)



console.log(soyUnIntentoDeString)
console.log(soyUnString)
console.log(soyUnArrayN.join('-'))
console.log(soyUnNumero.toFixed())

