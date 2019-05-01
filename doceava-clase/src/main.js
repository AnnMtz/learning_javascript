// var carro = {
//     'modelo': 'kia',
//     'color': 'negro',
//     'año': '2018',
//     'asientos': 4,
//     'volante': 1
// }

function myFunction(element) {
    // var element = document.getElementById('container');
    element.classList.toggle('myStyle');
}

var dollar = document.getElementById('USD').value
var pesos = document.getElementById('MXN').value 

function cambioPesos(dollar){
    dollar = 1 * 19.03
    console.log(dollar);
    document.getElementById('MXN').value = element.value*19.03
}

// function change(element) {
//     console.log(element);
    
// }

function toMXN(value) {
    var element = document.getElementById('number_one')
    var result = value * 19.03
    element.value = result
  }
  
  function toUSD(value) {
    var element = document.getElementById('number_two')
    var result = value / 19.03
    element.value = result
  }
  
  function changes(moneda, element) {
    var value = element.value
    if(moneda === 'MXN') {
      toUSD(value)
    } else {
      toMXN(value)
    }
  }