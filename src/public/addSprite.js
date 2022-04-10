fetch("Resources//RenderingSpecs//testSpecs.json")
                .then(responce => responce.json())
                .then(data => {init(data)});

function init(specs) {
    let gui = specs.gui;
    let numberOfImages = 0;

    let newImageButton = document.createElement(gui.addSpriteToQueueButton.DOMElement.tag);
    newImageButton.setAttribute("id", gui.addSpriteToQueueButton.DOMElement.id);
    newImageButton.setAttribute("type", gui.addSpriteToQueueButton.DOMElement.type);
    newImageButton.setAttribute("value", gui.addSpriteToQueueButton.DOMElement.value);

    let uploadSpritesButton = document.createElement(gui.uploadSpritesButton.DOMElement.tag);
    uploadSpritesButton.setAttribute("id", gui.uploadSpritesButton.DOMElement.id);
    uploadSpritesButton.setAttribute("type", gui.uploadSpritesButton.DOMElement.type);
    uploadSpritesButton.setAttribute("value", gui.uploadSpritesButton.DOMElement.value);

    document.getElementById(gui.addSpriteToQueueButton.idOfLocation).appendChild(newImageButton);
    document.getElementById(gui.uploadSpritesButton.idOfLocation).appendChild(uploadSpritesButton);

    newImageButton.addEventListener(gui.addSpriteToQueueButton.DOMElement.event, (e) => {
        let newImageElement = document.createElement(gui.imagePreveiw.DOMElement.tag);
        newImageElement.setAttribute("id", gui.imagePreveiw.DOMElement.tag + numberOfImages++);
        newImageElement.setAttribute("src", URL.createObjectURL(newImageButton.files[0]));
        document.getElementById(gui.imagePreveiw.idOfLocation).appendChild(newImageElement);
    });
}
