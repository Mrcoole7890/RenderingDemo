fetch("Resources//RenderingSpecs//testSpecs.json")
                .then(responce => responce.json())
                .then(data => {init(data)});

function init(specs) {

    let renderer = specs.renderer;

    let app = new PIXI.Application({ width: renderer.width, height: renderer.height });
    document.getElementById(renderer.idOfLocation).appendChild(app.view);

    let textureArray = [];

    let testEntity = specs.entities[0];

    loadTextures(textureArray, testEntity.pathToFolder , testEntity.fileExtention, testEntity.numberOfFrames);

    let animatedSprite = new PIXI.AnimatedSprite(textureArray);

    animatedSprite.animationSpeed = testEntity.animationSpeed; 
    
    animatedSprite.play();
    app.stage.addChild(animatedSprite);

}

function loadTextures(textureArr, folderPath, fileExtention, numOfFrames){
    for (let i=0; i < numOfFrames; i++)
    {
        let texture = PIXI.Texture.from(folderPath + i + fileExtention);
        textureArr.push(texture);
    };
}



