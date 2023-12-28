console.log('Hola Javascript')

let numeroActual = '0'
let operador = ''
let operando = ''

const inputDisplay = document.querySelector('.inputDisplay')

//console.log(inputDisplay)

const buttons = document.querySelectorAll('.button')

//console.log(buttons)

//eventos

buttons.forEach(function(button){

    button.addEventListener('click', function(event){
        //console.log('Me hicieron click, auxilio!')
        //console.log(event)

        const button = event.target
        const buttonText = button.textContent

        //console.log(buttonText)

        if('+-*'.includes(buttonText)){
        operador = buttonText
        operando = Number(numeroActual)
        numeroActual = '0'
        } else if (buttonText === '='){
        // aqui realizo las operaciones matematicas en base al numero actual y al operando
        if(operador ==='+'){
            numeroActual = Number(operando) + Number(numeroActual)
        }else if (operador ==='*'){
            numeroActual = Number(operando) * Number(numeroActual)
        } else if (operador === '-'){
            numeroActual = Number(operando) - Number(numeroActual)
        }
        
        
        } else if (buttonText === 'AC') {
        numeroActual = '0'
        operador = ''
        operando = ''
        } else{ // se presiono algun numero
            numeroActual = Number(numeroActual + buttonText)
        }

        inputDisplay.value = numeroActual
    })
} )