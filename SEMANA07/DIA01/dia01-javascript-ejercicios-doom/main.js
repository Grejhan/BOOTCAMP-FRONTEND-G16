
const inputPeso = document.querySelector('#inputPeso')
const inputAltura = document.querySelector('#inputAltura')

const btnCalcular = document.querySelector('#btnCalcular')
const divresultado = document.querySelector('#resultado')

btnCalcular.addEventListener('click', function (event){
    //console.log(event.target)
    const peso = inputPeso.value
    const altura = inputAltura.value

    console.log(peso,altura)

    const indiceDeMasaCorporal = peso / (altura/100 * altura/100)

    console.log(indiceDeMasaCorporal)

    let resultado = ''

    if(indiceDeMasaCorporal < 18.5) {
        resultado = 'Baja'
        
    } else if (indiceDeMasaCorporal >= 18.8 && indiceDeMasaCorporal<= 24.9){
        resultado = 'normal'
    }else if (indiceDeMasaCorporal > 25 && indiceDeMasaCorporal <= 29.9){
        resultado = 'sobre peso'
    }else if (indiceDeMasaCorporal >30){
        resultado = 'obeso'
    }else {
        resultado = 'datos incorrectos'
    }

    console.log(resultado)

    divresultado.textContent = 'Tu indice de Masa Corporal es'  +  resultado +  'con'  + indiceDeMasaCorporal

})