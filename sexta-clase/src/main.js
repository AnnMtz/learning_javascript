// var koders_array = ['Augus', 'Ale'];

// koders_array.forEach(function(element) {
//     var koder = element + 'Tiene el número de lista: ' + String(index + 1)
//     console.log(koder);
    
// })

 var koders_array = ['Augus', 'Ale']

 koders_array.forEach(function(element, index) {
   var koder = element + ' tiene el numero de lista: ' + String(index + 1)
   console.log(koder);
 })

 // nececistan el koders array de ayer
koders_array.forEach(function(element, index, array) {
    element.edad = element.edad + 1
  })

  var number_array = [1,2,3,4,5]

  var new_number_array = number_array.map(function(element) {
    if (element % 2 === 0) {
      return element * 2
    } else {
      return element
    }
  })

  console.log(new_number_array);
  

  var car = {
      'color': 'red',
      'model': 'Rio'
  }

  //for in es para iterar en objetos

//   for(key in car) {
//       console.log(car[key]);
//   }

  var car_obj = {
        'color': {
            'galaxy': {
                'primaryColor': 'red',
                'secundaryColor': 'orange'
            }
        },
        'model': 'Rio'
    }

    var car_obj = {
        'color': {
          'galaxy': {
            'primaryColor': 'red',
            'secondaryColor': 'orange'
          }
        },
        'model': 'Rio',
      }
    
    
    for(property in car_obj) {
      if (property === 'color') {
        for(color_property in car_obj[property]) {
          if( color_property === 'galaxy') {
            for(galaxy_property in car_obj[property][color_property]) {
                console.log(car_obj[property][color_property][galaxy_property])
            }
          }
        }
      }
    }

    var car_objt = {
        'color': 'red',
        'brand': 'Kia',
        'model': 'Rio',
        getCar: function() {
            return this.brand + ' ' + this.model 
        }
    }
    console.log(car_objt.getCar());
    
    // console.log('Hola, te vendo un '  car_objt.brand + ' ' + car_objt.model + ' ' + car_objt.color);

    //escribir el nombre completo con las propiedades de un objeto

    var persona_obj = {
        'nombre': 'John',
        'apellidoPaterno': 'Ruffles',
        'apellidoMaterno': 'Vitao',
        getPersona: function() {
            return 'Hola, yo soy ' + this.nombre + ' ' + this.apellidoPaterno + ' ' + this.apellidoMaterno
        }
    }

    console.log(persona_obj.getPersona());

    //arreglo de objetos de ayer, hacer metodo que funcione que el ejercicio 2.1

    var koders_array = [
        {
          'nombre': 'David',
          'edad': 22,
          'genero': 'M',
          'hobbies': [
            'Fotografia',
            'Viajar'
          ],
        //   'saludo': function() {
        //       return 'Hola, soy ' + this.nombre + ' y mis hobbies son  ' + this.hobbies.join(' ')
        //   }
        },
        {
          'nombre': 'Jorge',
          'edad': 23,
          'genero': 'M',
          'hobbies': [
            'Videojuegos',
            'Lectura',
            'Dibujar'
          ],
        //   'saludo': function() {
        //     return 'Hola, soy ' + this.nombre + ' y mis hobbies son  ' + this.hobbies.join(' ')
        // }
        },
        {
          'nombre': 'Erick',
          'edad': 25,
          'genero': 'M',
          'hobbies': [
            'Caligrafia',
            'Videojuegos'
          ],
        //   'saludo': function() {
        //     return 'Hola, soy ' + this.nombre + ' y mis hobbies son  ' + this.hobbies.join(' ')
        // }
        },
        {
          'nombre': 'Diana',
          'edad': 27,
          'genero': 'F',
          'hobbies': [
            'Hardware',
            'Videojuegos'
          ],
        //   'saludo': function() {
        //     return 'Hola, soy ' + this.nombre + ' y mis hobbies son  ' + this.hobbies.join(' ')
        // }
        },
        {
          'nombre': 'Rodo',
          'edad': 32,
          'genero': 'M',
          'hobbies': [
            'Musica',
            'Programacion'
          ],
        //   'saludo': function() {
        //     return 'Hola, soy ' + this.nombre + ' y mis hobbies son  ' + this.hobbies.join(' ')
        // }
        },
      ]

    //   console.log(koders_array[0].saludo());

    //   koders_array.forEach(function(element) {
    //       console.log(element.saludo());
          
    //   })
      
    //   koders_array.forEach(function(element) {
    //       console.log('Hola, mi nombre es ' + element.nombre + ' y mis hobbies son ' + element.hobbies);
          
    //   })

    function Car(color, brand, model, year) {
        this.color = color
        this.brand = brand
        this.model = model
        this.year = year
    }

    var first_car = new Car('blue', 'Kia', 'Forte', '2019')
    console.log(first_car);

    function Koders(nombre, hobbies) {
        this.nombre = nombre
        // this.edad = edad
        // this.genero = genero
        this.hobbies = hobbies
        this.saludo = function() {
            return this.nombre + this.hobbies
        }
    }
    
    var koders_object = []
    

    koders_array.forEach(function(element) {
        var obj = new Koders(element.nombre, element.hobbies)
        console.log(obj.saludo());
        
    })

    // console.log(koders_object);
    
    
    