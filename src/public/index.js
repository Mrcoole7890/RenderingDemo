fetch("Resources//RenderingSpecs//testSpecs.json")
                .then(responce => responce.json())
                .then(data => {init(data)});

function init(specs) {

    let renderer = specs.renderer;
    let gui = specs.gui;

    let app = new PIXI.Application({ width: renderer.width, height: renderer.height });
    let newSpriteButton = document.createElement(gui.addSpriteButton.DOMElement.tag);
    newSpriteButton.setAttribute("id", gui.addSpriteButton.DOMElement.id);
    newSpriteButton.setAttribute("type", gui.addSpriteButton.DOMElement.type);
    newSpriteButton.setAttribute("value", gui.addSpriteButton.DOMElement.value);
    
    document.getElementById(renderer.idOfLocation).appendChild(app.view);
    document.getElementById(renderer.idOfLocation).appendChild(document.createElement("br"));
    document.getElementById(gui.addSpriteButton.idOfLocation).appendChild(newSpriteButton);

    let textureArray = [];

    let testEntity = specs.entities[0];

    loadTextures(textureArray, testEntity.pathToFolder , testEntity.fileExtention, testEntity.numberOfFrames);

    let animatedSprite = new PIXI.AnimatedSprite(textureArray);

    animatedSprite.animationSpeed = testEntity.animationSpeed; 
    
    animatedSprite.play();
    app.stage.addChild(animatedSprite);

    newSpriteButton.addEventListener(gui.addSpriteButton.DOMElement.redirectEvent, (e) => {window.location.href = gui.addSpriteButton.redirect;});

}

function loadTextures(textureArr, folderPath, fileExtention, numOfFrames){
    for (let i=0; i < numOfFrames; i++)
    {
        let texture = PIXI.Texture.from(folderPath + i + fileExtention);
        textureArr.push(texture);
    };
}





