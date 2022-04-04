let localPath = "Resources//TestTextures//";
let numberOfDemoFrames = 8;
let pngExtention = ".png";
let rendererWidth = 640;
let rendererHeight = 360;
let idOfRendererTag = "renderer";
let demoAnimationSpeed = 0.167;

function loadTextures(textureArr, folderPath, fileExtention, numOfFrames){
    for (let i=0; i < numOfFrames; i++)
    {
        let texture = PIXI.Texture.from(folderPath + i + fileExtention);
        textureArr.push(texture);
    };
}


let app = new PIXI.Application({ width: rendererWidth, height: rendererHeight });
document.getElementById(idOfRendererTag).appendChild(app.view);

let textureArray = [];

loadTextures(textureArray, localPath, pngExtention, numberOfDemoFrames);

let animatedSprite = new PIXI.AnimatedSprite(textureArray);

animatedSprite.animationSpeed = demoAnimationSpeed; 
animatedSprite.play();
app.stage.addChild(animatedSprite);





