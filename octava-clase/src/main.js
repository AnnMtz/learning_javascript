//imprimir todos los números del numeros hasta 100

// var num = 1; //se cumple mientras una funcion sea cierta, retorna un boolean
// while (x <= 100) {
//      console.log(num);
//      num ++
// }

// var numbers_array = [1,2,3,4,5]

// for (element in number_array) {
//     console.log(element);
    
// }

// //ternario

// var x = 2;
// var y = '2';

// var result = (x === y) ? 'Si son iguales': 'No son iguales'  //es como el if, es comparativo, se debe crear una variable

// //return

// function greeting() {
//     console.log('Hola');
// }
// function returnGreeting() {
//     return 'Hola'
// }

// function suma(a,b) {
//     return a + b
// }
// function resta(a,b) {
//     return a - b
// }

// function calculadora(numero_uno, numero_dos, operador) {
//     var resultado;
//     if (operador == 'suma') {
//         resultado = suma(numero_uno, numero_dos)
//     } else if (operador == 'resta') {
//         resultado = resta(numero_uno, numero_dos)
//     } else {
//         return 'No te lo manejo'
//     }
//     return resultado
// }

// var obj = {
//     'name': 'Daniel',
//     'age': 30
// }

// obj.name
// obj['name'] //se usa para iterar en ciclos

// var test_array = [
//     {
//         'name': 'Daniel',
//         'age': 30
//     },
//     {
//         'name': 'Ana',
//         'age': 14
//     },
//     {
//         'name': 'Juan',
//         'age': 30
//     }
// ]

// test_array[0]
// // retorna
// {
//     'name': 'Daniel',
//     'age': 30
// }

// test_array[1]
// //retorna
// {
//     'name': 'Ana',
//     'age': 14,
//     'hobbies': [
//         'foto',
//         'beber'
//     ]
// }

// test_array[2]['age'][1]    //se accede a los arrays con la posición
// test_array[2].age[1]

//función constructora

var person = {
    'name': 'Daniel',
    'age': 30
}

//ejercicio funcion constructora

var car_array = [
    [  
        'Kia',
        'Plateado',
        'Automatico',
        98800,
        2017
    ],
    [  
      'Ibisa',
      'Negro',
      'Estandar',
      100000,
      2018
    ],
    [   
      'Leon',
      'Azul',
      'Automatico',
      110000,
      2019    
    ]
]

function Car(modelo, transmicion, precio, year) {
    this.modelo = modelo
    this.transmicion = transmicion
    this.precio = precio
    this.year = year
    this.getModelo = function() {
        return this.modelo
    }
    this.getTransmicion = function() {
        return this.transmicion
    }
    this.getPrecio = function() {
        return this.precio
    }
    this.getYear = function() {
        return this.year
    }
    this.getAllInformation = function() {
        return 'El modelo del carro es ' + this.getModelo() + ', la transmicion es ' + this.getTransmicion() + ' y el precio es $' + this.getPrecio() + ' '+ this.getYear()
    }
}

// var car=new Car(car_array[0][0], car_array[0][2], car_array[0][3])
// console.log(car);


car_array.forEach(function(element, index) {
    var car = new Car(element[0], element[2], element[3])
    console.log(car.getAllInformation())
}
)
