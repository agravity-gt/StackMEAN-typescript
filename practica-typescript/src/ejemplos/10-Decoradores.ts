function pruebaDecorador<T extends {new(...args:any[]):{}}>(Constructor: T){
    return class extends Constructor{
        propierdadDecorador='Guatemala'
        propierdadDecorador1='El Salvador'
    }
}

function soyUnServicio(Constructor: any):any{
    return class extends Constructor{
        propierdadDecorador='Soy un Servicio'

    }
}




@pruebaDecorador
class pruebaClass {
    public miPropiedad: string='123456'
    print(){
        console.log('hola mundo')
    }
}

console.log(pruebaClass)

const objPruebaClass = new pruebaClass();

console.log(objPruebaClass)