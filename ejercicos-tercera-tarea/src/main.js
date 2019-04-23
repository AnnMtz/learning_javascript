//piramide invertida
var size = parseInt(prompt('¿De que tamaño quieres la pirámide?'));
var string_pyramid = '';

for (var i = 0; i < size; i++) {
    var pyramid = ' ';
    for (var j = 0; j < size; j++) {
        if (j === size-(i+1)){
            pyramid = '#';
            //console.log(pyramid); solo imprime el #
        }
        string_pyramid += pyramid
        //console.log(pyramid_str); aquí se empieza a crear la pirámide invertida
    }
    string_pyramid += '\n'
}
console.log(string_pyramid);


