console.log('Hello World from index.js ')
// esto es un comentario //

/* esto es un 
comentario 
en 
multi lineas */

// tipos de datos //

// Primitivos : Number , string, boolean ( true, false ) , underfined 

// Number
const numero1 = 20
const numero2 = 20.50
const number3 = -36

console.log(numero1)
console.log(numero2)
console.log(number3)

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof number3)

// STRING  cadenas de textos

const alumna = 'claudia'
const alumno = 'jose'

const numero4 = '200'
const numero5 = 200

console.log (typeof alumna)
console.log (typeof alumno)
console.log (typeof numero4)
console.log (typeof numero5)

// bolean verdadero o falso False o verdadero

const tieneDescuento= false

console.log (tieneDescuento)
console.log ( typeof tieneDescuento)

// UNDEFIEND = objetos

let nombre

console.log (nombre)
console.log (typeof nombre)

// NULL

let apellidos = null

console.log (apellidos)
console.log (typeof apellidos)

// Objetos
//Funtion
//BigInt

// VARIABLES Y CONTANTES

// ECMASCRIPT 5 = ES5
// ECMASCRIPT 6 = ES6 MUCHO MEJOR QUE LA 5

// var ----> ES5 (forma de declarar una variable)

var nombreDemiVariable = 'un valor'

// const let --> (el uso de const y let es lo recomendado)

const edad = 35
const _edad = 35
const edadDeMiHija = 35

console.log (edad)

// LET --> es6 El uso de let no lo recomiendan 

// con let si se puede reasingnar su valor 

let edad2 = 36
edad2 = 37
edad2 = 22

console.log(edad2)
console.log(typeof edad2)

edad2 = 'hola'
console.log (typeof edad2)

// operadores matematicos

console.log(1+2)
console.log(3-2)
console.log(2*2)
console.log(1/2)
console.log(1%2) // residuo
console.log(1**2) // dos elevado al cubo

// operadores de asignacion

const genero = 'femenino'

console.log(genero + '*')

// operadores de comparacion
// Operadores de igualdad y desigualdad no estricta

console.log(-1 == 1)
console.log(1 == '1')

// Operador de igualdad y desigualdad estricta ( SE RECOMIENDA USAR)
// Devuelven un valor booleano frue o false
// este operador si toma en cuenta el tipo de dato y sus valores al comparar 

console.log(1 === 1) // true
console.log(1 === '1') // false
console.log(1 !== 1) // false

//OTROS OPERADORES SIEMPRE DEVUELVEN UN BOOLEANO

console.log (8>5) // true
console.log (5>8) // false
console.log (8 >= 5) // true

// operador logico and or negation 

console.log(true&&false) // and

// operadores de cadena

const saludo = 'hola'
const nombreCompleto = 'victor' + ' ' + 'villazon'
const miEdad = 37

const saludoAmigo = saludo + nombreCompleto  + 'Tengo' + miEdad  + 'años'

console.log(nombreCompleto)
console.log(saludoAmigo)

//EJERCICIOS

// 1.Retornar true si dos string tienen la misma longitud si no debolver false

const cadena1 = 'codigo'
const cadena2 = 'cadaga'

console.log(cadena1.length)
console.log(cadena2.length)

console.log(cadena1.length === cadena2.length) // true

// Retornar true si un numero es menor que 40 si no ddevolver false

const nume1 = 40
console.log(41 >= nume1)

// retornar true si un numero es par sino devolver false

const nume2 = 5
const nume3 = 6

console.log (nume2 %2 !== 0) // true
console.log (nume3 %2 !== 0) // false

// calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura 

const base = 10
const altura = 5

const area = (base * altura) /2

console.log (area) // resultado 25

// 7 ( TODO ) Almacenar en una constante un numero de 3 cifras y mostrar la suma de sus cifras elevado al cubo 

const nume10 = 123
const conte = nume10.toString()

// 8 Almacenart en una constante un monto de dinero luego muestra cuanto le toca a cada socio segun la siguiente tabla .

const montoDeDinero = 2000
const socioA = 0.30
const socioB = 0.20
const socioC = 0.60

console.log(montoDeDinero * socioA)
console.log(montoDeDinero * socioB)
console.log( montoDeDinero * socioC)

// condicionales

if(true) {
    //verdadero
}

const esPar = true

if(esPar){
    console.log('Este numero es par')
}

// Condicionales ( IF ELSE)

if(true){

    // verdadero
}else{
    //falso
}

if(esPar){
    console.log('Este Numero es par')
}else{
    console.log('Este Numero es Impar')
}

// condicionales IF ELSE IFF ELSE



// estructuras repetitivas

//FOR

//WHILE

let j = 0

while(j < 10){
    console.log(j)
    j = j + 1
}

// do while

// EJERCICIOS

// 1. Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'
const mayorDeEdad = edad
const mayoriaDeEdad = 18

if(edad >= mayoriaDeEdad){
    console.log('Mayor de edad')
} else{
    console.log ('Menor de edad')
}

// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'

const word = "ingles"
if(word === "español"){
    console.log("Hola")
}else if (word === "ingles"){
    console.log("Hello")
}else if(word === "aimara"){
    console.log("Kamisaraki")
}



// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número

let fizzBuzz = (numero) => {
    if (numero % 3 === 0 && numero % 5 === 0) {
    return 'fizzbuzz';
    } else if (numero % 3 === 0) {
     return 'fizz';
    } else if (numero % 5 === 0) {
      return 'buzz';
    } else {
      return numero;
    }
  }


// 4. REtornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1


// 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10

//FUNCIONES

function nombreDelaFuncion() {
    //cuerpo de la funcion aqui va la logica a ejecutar
}

nombreDelaFuncion() 

//funsiones sin parametros

function imprimirMiNombre(){
    console.log('hola soy victor')
    console.log('y soy Frontend')
}

imprimirMiNombre()

// Funcion con parametros

function imprimirUnNombre(nombre1) {
    console.log('hola soy '+ nombre1)
}

imprimirUnNombre('claudia')

function imprimirMiNombreYApellido(nombre,apellido,edad6 ){
    console.log('hola soy ' + nombre + ' ' + apellido + ' y tengo ' + edad6 + ' anios' )
    // console.log(`Hola soy ${nombre} ${apellido} y tengo ${edad}  años.`)
}

imprimirMiNombreYApellido('victor', 'fernandez', 37)

// Ejercicios