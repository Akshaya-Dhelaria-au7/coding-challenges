var divClass = document.getElementsByClassName("parent")

var newChild = document.createElement("div")
// newChild.textContent = "child"
function putElement(n){    
    var parent = document.getElementsByClassName("parent")[0];
    for(var i=0;i<n;i++){
        var childElement = document.createElement('div')
        childElement.setAttribute('class', 'child')
        // console.log(childElement)
        parent.appendChild(childElement)
    }
}
putElement(2)