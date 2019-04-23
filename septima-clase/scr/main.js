//Dado un objeto sacar la primera parte del CURP
//GULJ960211

var person_array = [ 
    {
    'nombre': 'Juan',
    'aPaterno': 'Guzman',
    'aMaterno': 'Linares',
    'fechaNacimiento': '1996-02-11',
    'genero': 'hombre'
}, 
{
    'nombre': 'Rodolfo',
    'aPaterno': 'Olmedo',
    'aMaterno': 'Jimenez',
    'fechaNacimiento': '1986-11-14',
    'genero': 'hombre'
},
{
   'nombre': 'Ana',
   'aPaterno': 'Martinez',
   'aMaterno': 'Romero',
   'fechaNacimiento': '1987-04-16',
   'genero': 'mujer'
}
]

function Curp(nombre, aPaterno, aMaterno, fechaNacimiento, genero) {
    this.nombre = nombre
    this.aPaterno = aPaterno
    this.aMaterno = aMaterno
    this.fechaNacimiento = fechaNacimiento
    this.genero = genero    
    this.getShortName = function() {
        return (
           this.aPaterno.toUpperCase().slice(0,2) + 
           this.aMaterno.toUpperCase().charAt(0) + 
           this.nombre.toUpperCase().charAt(0)
           )
    }
    this.getDate = function() {
        return (
           this.fechaNacimiento.slice(2,4) + 
           this.fechaNacimiento.slice(5,7) + 
           this.fechaNacimiento.slice(8)
           )
    }
    this.getGender = function(){
        return this.genero.charAt(0).toUpperCase()
    }
    this.getCurp = function() {
        return this.getShortName() + this.getDate() + this.getGender()
    }
}

// var new_Obj = new Curp(nombre, aPaterno, aMaterno)
//  console.log(new_Obj.getShortName());

person_array.forEach(function(object) {
    var new_person = new Curp(object.nombre, object.aPaterno, object.aMaterno, object.fechaNacimiento, object.genero)
    console.log(new_person.getCurp());
});

 var divs_array = [
     {
         'height': '100px',
         'width': '30px',
         'backgroundColor': 'red'
     },
     {
        'height': '100px',
        'width': '30px',
        'backgroundColor': 'peru'
     },
     {
        'height': '100px',
        'width': '30px',
        'backgroundColor': 'slatergray'
     },
     {
        'height': '100px',
        'width': '30px',
        'backgroundColor': 'gray'
     },
     {
        'height': '100px',
        'width': '30px',
        'backgroundColor': 'green'
     }
 ]

 var divs = document.getElementsByTagName('div')

 divs_array.forEach(function(element, index) { 
     divs[index].style.height = element.height
     divs[index].style.width = element.width
     divs[index].style.backgroundColor = element.backgroundColor
    //  document.getElementsByTagName('divs')[indice].style.width=element.width;
    //  document.getElementsByTagName('divs')[indice].style.height=element.height;
    //  document.getElementsByTagName('divs')[indice].style.backgroundColor=elemet.backgroundColor;
 })
 
 
