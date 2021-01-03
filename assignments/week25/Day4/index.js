function child(){
    //Appending div to body
    var image = document.getElementsByTagName("body")[0];
    var createDiv = document.createElement("div")
    createDiv.setAttribute('class','image')
    image.appendChild(createDiv)

    //Appending img tag to div
    var imageTag = document.getElementsByClassName("image")[0];
    var createImageElement = document.createElement("img")
    createImageElement.setAttribute('src','https://goo.gl/kjzfbE')
    createImageElement.setAttribute('alt','first')
    imageTag.appendChild(createImageElement)

    //Button Tag
    var buttonTag = document.createElement("button")
    buttonTag.setAttribute('class','wrong')
    buttonTag.textContent = 'X'
    // console.dir(buttonTag)
    createDiv.appendChild(buttonTag)
}
child()