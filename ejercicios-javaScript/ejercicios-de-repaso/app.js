//const input = document.getElementById('color')  solo ID
//const input = document.querySelector('.color')  en casos de class

const accesoInput = document.querySelector('#color')

//console.log(input);

accesoInput.addEventListener('input',function(event){
    console.log(event.target.value);
    document.body.style.backgroundColor = event.target.value

})




