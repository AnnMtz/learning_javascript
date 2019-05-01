// function listStyle(element) {
//     element.classlist.toggle('myStyle')
// }

//  function myFunction(element) {
//      var elementList = document.querySelectorAll('.item');
//      console.log(elementList);
     
//      elementList.forEach(function(e) { 
//          e.classList.remove('on')
//      })
//      element.classList.add('on');
//  }

var elementList = document.querySelectorAll('item')
console.log(elementList);

function addEvents() {
    var elementList = document.querySelectorAll('.item')
    elementList.forEach(function(node) {
      node.addEventListener('click', function() {
        changes(node, elementList)
      } true)
    })
  }
  
  function changes(element, elementList) {
    elementList.forEach(function(e) {
      e.classList.remove('on')
    })
    element.classList.add('on')
  }
  
  window.onload = function() {
    addEvents()
  }


