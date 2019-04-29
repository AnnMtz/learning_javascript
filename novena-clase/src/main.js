 //document.write('Hello world')escribe en el DOM, es como console.log

//document.getElementsByTagName('body')[0].innerText = 'Hello World' esta es la forma de poner un método

//document.getElementsByTagName('body')[0].innerHTML = '<h1>Hello Wold</h1>' sirve para ingresar un h1, pone texto html

// console.log(document.getElementsByTagName('div')[0]);

// console.log(document.getElementsByClassName('even'));

// console.log(document.getElementsByTagName('li')[3]);

document.querySelectorAll('.even') //arroja un nodo

console.log(document.querySelectorAll('div>ul')) //accede a los hijos

console.log(document.querySelectorAll('div > ul > .even'))

console.log(document.querySelectorAll('div > ul > li')[3]);

//document.getElementById('container').className = 'cont' para setear 

document.querySelectorAll('div>ul').forEach(function(element) {
    element.style.border = '2px solid rgba(255,0,1,0.6)'
    console.log(element);
    
})
var li = document.getElementsByTagName('li')
for (var i = 0; i < li.length; i++) {
    li[i].style.border = '1px solid blue'
}

var node = document.createElement('h1') //crea elementos

var txt = document.createTextNode('Create world') //crea texto sin elemento

node.appendChild(txt) //unir nodos

document.getElementsByTagName('body')[0].appendChild(node) //agrega al nodo body

node.id = 'title' //agrega un id al h1


// var nodeObj = document.createElement('div')
// var nodes = document.createElement('h2')
// var text = document.createTextNode('Hello')
// var nodess = document.createElement('h3')
// var textt = document.createTextNode('World')
// nodes.appendChild(text)
// nodess.appendChild(textt)
// nodeObj.appendChild(nodes)
// nodeObj.appendChild(nodess)
// document.getElementsByTagName('body')[0].appendChild(nodeObj)

var nodeObj = {
    'tag': 'div',
    'childs': [
        {
            'tag': 'h2',
            'text': 'Hello'
        },
        {
            'tag': 'h3',
            'text': 'World'
        }
    ]
}

var nodes = document.createElement(nodeObj.tag);

nodeObj.childs.forEach(function(element) {
    var node_tag = document.createElement(element.tag)
    var txt_tag = document.createTextNode(element.text)
    node_tag.appendChild(txt_tag)
    nodes.appendChild(node_tag)
})

document.getElementsByTagName('body')[0].appendChild(nodes)
// var nodes = document.createElement('Obj.tag')
// // var nodes_childs = document.createElement('Obj.childs')
// var child = childs.forEach(function(element) {
//     var childs_item = document.createElement('Obj.h2')
//     var txt_childs = document.createTextNode('Hello')
// })
// // .forEach(function(nodeObj)  
//     var child_item = document.createElement(nodeObj.h3)
    
//     var txt_child = document.createTextNode('World')
//     childs_item.appendChild(txt_childs)
//     child_item.appendChild(txt_child)
//     // nodes.appendChild(childs)
//     // nodeObj.appendChild(nodes_childs)
//     // nodeObj.appendChild(nodes)
// // })
// document.getElementsByTagName('body')[0].appendChild(nodes)





