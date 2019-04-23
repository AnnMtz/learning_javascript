var number_array =[1,2,3,4,5]

var new_number_array = number_array.map(function(element, index, array) {
    return element * 3
})
    var new_elements = new_number_array.filter(function(element) {
    return element % 2 === 0
})

console.log(new_number_array);
console.log(new_elements);

var new_number_array = number_array.map(function(element, index, array) { 
    return element * 3
})
    var new_elements_1 = new_number_array.filter(function(element, index) { //así devuelve el indice y no el elemento
    return index % 2 === 0
})

console.log(new_elements_1);

//OBJETOS

var koders_obj = {
    //llave: valor
    'one': 'Diana',
    'two': 'Carlos',
    'three': 'Emma'
}

console.log(koders_obj.one);
console.log(koders_obj['one']);

var koders_array = [
    {
      'nombre': 'David',
      'edad': 22,
      'genero': 'M',
      'hobbies': [
        'Fotografia',
        'Viajar'
      ]
    },
    {
      'nombre': 'Jorge',
      'edad': 23,
      'genero': 'M',
      'hobbies': [
        'Videojuegos',
        'Lectura',
        'Dibujar'
      ]
    },
    {
      'nombre': 'Erick',
      'edad': 25,
      'genero': 'M',
      'hobbies': [
        'Caligrafia',
        'Videojuegos'
      ]
    },
    {
      'nombre': 'Diana',
      'edad': 27,
      'genero': 'F',
      'hobbies': [
        'Hardware',
        'Videojuegos'
      ]
    },
    {
      'nombre': 'Rodo',
      'edad': 32,
      'genero': 'M',
      'hobbies': [
        'Musica',
        'Programacion'
      ]
    }
  ]

// console.log(koders_array[0]);

  
// var koder = koders_array[0]
// console.log(koder.nombre);
//imprimir todos los nombres de los koders
var nombres = new Array();
var i = 0;
koders_array.forEach(function(element, index) {
    console.log(element.nombre);
  //   nombre[i] = element.nombre

  //   // nombre = ["Juan" , "daviad" ," Jorge"]
  //  i++;
})
//obtener los hobbies
koders_array.forEach(function(element, index) {
    console.log('Hola, mi nombre es ' + element.nombre);
    element.hobbies.forEach(function(element) {
        console.log('Mis hobbies son ' + element);
        
    })
})
//filtrar a los koders que les gusten los videojuegos

// koders_array.forEach(function(element) {
//     console.log('Hola, mi nombre es ' + element.nombre);
//     element.hobbies.forEach(function(element) {
//         console.log('Mis hobbies son ' + element);
//     element.filter(function(element) {

  //     })
          
  //     })
  // })

function videojuegos(element) {
    return Videojuegos
}

// var filtrado = element.hobbies.filter(videojuegos) {
//     return true
// }

// koders_array.filter(function(element) {
//     var filter_elements = element.hobbies.map(function(element) {
//         return
//     })
// })

// console.log(filter_elements);

var new_koders_array_videojuegos = koders_array.filter(function(element) {
  return element.hobbies.indexOf('Videojuegos') !== -1
}).forEach(function(element) {
  console.log(element.nombre);
  
})











