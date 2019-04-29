// var nodeObj = {
//     "tag": "div",
//     "children": [
//         {
//             "tag": "h2",
//             "text": "Hello"
//         },
//         {
//           "tag": "h2",
//           "text": "World"
//         },
//         {
//           "tag": "p",
//           "text": "holi"
//         },
//         {
//           "tag": "span",
//           "text": "ontas?"
//         }
//     ]
//   }
  
  
//   function createParent(tag) {
//     return document.createElement(tag)
//   }
  
//   function createChild(child) {
//     var element = document.createElement(child.tag)
//     var textElement = document.createTextNode(child.text)
//     element.appendChild(textElement)
//     return element
//   }
  
//   function buildStructure(nodeObj) {
//     var parentNode = createParent(nodeObj.tag)
//     nodeObj.children.forEach(function(child) {
//         var childNode = createChild(child)
//         parentNode.appendChild(childNode)
//     })
//     return parentNode
//   }
  
//   function init() {
//     var structureNode = buildStructure(nodeObj)
//     var bodyNode = document.querySelectorAll('body')[0]
//     bodyNode.appendChild(structureNode)
//   }
  
//   init()

  //ejercicio

  var nodeDiv = {
      'tag': 'div',
      'children': [ 
          {
          'tag':'ul',
          'grandchild': [ 
              {
              'tag': 'li',
              'text': 'nombre',
              }
          ]
        }
      ]
  }

  function createGrandFather(tag) {
      return document.createElement(tag)
  }

  function createParent(parent) {
      var childElement = document.createElement(parent.tag)
      return childElement
    //   var grandchildElement = document.createElement(parent.grandchild)
    //   childElement.appendChild(grandchildElement)
  }

  function createChild(child) {
      var element = document.createElement(child.tag)
      var txt_element = document.createTextNode(child.text)
      element.appendChild(txt_element)
      return element
  }

  function buildStructure(children) {
      console.log(nodeDiv);
      var parentNode = createParent(nodeDiv.tag)
      grandchild.children.forEach(function(child) {
          var childNode = createChild(child)
          parentNode.appendChild(childNode)
      })
      return parentNode
      console.log(parentNode);
  }

  function buildParentStructure(nodeDiv) {
      var grandFatherNode = createGrandFather(nodeDiv.tag)
      console.log(nodeDiv);
      nodeDiv.children.forEach(function(parent) {
          var fatherNode = createParent(parent)
          grandFatherNode.appendChild(fatherNode)
      })
      return grandFatherNode
  }
  function init() {
      var structureNode = buildParentStructure(nodeDiv)
    //   var iojoj = buildParentStructure(nodeDiv).appendChild(parentNode)
      var bodyNode = document.querySelectorAll('body')[0]
      bodyNode.appendChild(structureNode)
  }

  init()

