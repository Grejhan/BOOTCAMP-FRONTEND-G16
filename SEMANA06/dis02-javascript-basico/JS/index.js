console.log('Hola JS')

// Arrays

const numero = 399
const cadena = 'Victor'
const esMayor = 39


// Un areglo tiene elemento como cualquier tipo de dato : cadena numero
// boolean underfined null arrays objetos etc.

const listaDeValores = [1, 2, 3, 'Victor', 'Fernandez', true]

console.log(listaDeValores)

// Lectura de los elementos de un areglo

console.log(listaDeValores[0])//1
console.log(listaDeValores[4])//Fernandez
console.log(listaDeValores[5])// true
console.log(listaDeValores[100])// undefined si no se encuentra en la lista 

//Escritura en un areglo

listaDeValores[2] = 99

console.log(listaDeValores)

// insertar nuevos elementos en un areglo

listaDeValores.push('javascript')
console.log(listaDeValores)

// Remover elementos de un arreglo el ultimo elemento tb se puede usar .splace() se elimina agregando el elemento que deceas eliminar

listaDeValores.pop()
console.log(listaDeValores)

console.log('bienvenido',length)
console.log(listaDeValores.length)

//OBJETOS 

const miObjeto = {
    nombre:'victor',
    apellido:'fernandez',
    colorFavorito:'azul',
    'mi edad': 35,
    coloresFavoritos:['negro','rojo','azul'],
    cursos:[
        {
            nomnre:'matematica',
            nota:18
        }
    ]
}

console.log(miObjeto)

//LEER 

console.log(miObjeto.apellido)
console.log(miObjeto.nombre)
console.log(miObjeto.edad) // undefined


console.log(miObjeto['mi edad'])

console.log(miObjeto.colorFavorito)

console.log(miObjeto.cursos[0].nomnre)

delete miObjeto.colorFavorito

console.log(miObjeto)

//insertar una nueva propiedad a un objeto

miObjeto.platoFavorito = 'lomo saltado'
console.log(miObjeto)

//destructuring

const nombreValue = miObjeto.nombre
console.log(nombreValue)

const{nombre,apellido} = miObjeto

console.log(nombre,apellido)

// destructuring para areglos

const amigos = ['pedro','carlos','luciana','adriana','cynthia']
const[amigo1, amigo2] = amigos

console.log(amigo1)
console.log(amigo2)
console.log(amigos)

//spread operator


const producto = {
    nombre:'laptop',
    precio:6800,
    categoria:'tech'
}

const cliente = {
    nombre:'claudia',
    isVip: true

}

console.log(producto+cliente)
const nuevoObjeto = {...producto,...cliente}

console.log(nuevoObjeto)

// spread operator sin coliciones

const nuevoObjetoSinColisiones = {
    producto:{...producto},
    cliente:{...cliente}
}

console.log(nuevoObjetoSinColisiones)

// OTROS METODOS DE OBJETOS

console.log(Object.keys(producto))// obtenemos solo las claves key del objeto
console.log(Object.values(producto))// obtenemos solo los valores del objeto
console.log(Object.entries(producto))// convertimos un objeto en areglo