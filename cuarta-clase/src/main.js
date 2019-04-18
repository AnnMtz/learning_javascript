// console.log('Hola');

//dolares a pesos, mxn -> litros de petróleo

//

// function dollaraPesos (dollar) {
//     var pesos = dollar * 18.87
// }
// function litrosaPesos (pesos) {
//     return pesos * 16.74
// }

// console.log(litrosaPesos(10));

function toMXN(USD) {
    return toGasolineLiters(USD * 18.88)
}
function toGasolineLiters(MXN) {
    
}

var num1 = [3,0,9,2,0]
var str = num1.toString();
console.log();

function reverseWord(word) {
    return word.split('').reverse().join('')
}

console.log(reverseWord('hola'));

//IMPUT -> 'holi a todos'
//OUTPUT -> 'Holi A Todos'

function capitalize(word) {
    return word.split(' ').map(function(element) {
        var wordArray = element.split('')
        wordArray[0] = wordArray[0].toUpperCase()
        return wordArray.join('')
    }).join(' ')
}

console.log(capitalize('holi a todos'));

var numbers_array = [1,2,3,4,5,6,7,8,9,10]
var even_array = numbers_array.filter(function(element) {
    return element % 2 === 0
})

console.log(even_array);






