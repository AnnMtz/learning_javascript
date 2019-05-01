//codificando string
var string = prompt('Ingresa una palabra');
var arr = []

for (var i = 0; i < string.length; i++) {
    var character = String.fromCharCode((string[i].charCodeAt()-65+7%26+65));
    arr.push(character)
}

var joinLetter = arr.join('')

console.log(joinLetter);

//decodificando la palabra encriptada

var decode = []

for (var j = 0; j <joinLetter.length; j++) {
    var character2 = String.fromCharCode((joinLetter[j].charCodeAt()+65-7%26-65));
    decode.push(character2)
}

var decode_letter = decode.join('')

console.log(decode_letter);
