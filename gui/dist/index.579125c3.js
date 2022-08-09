const app = new PIXI.Application({
    width: 800,
    height: 620,
    backgroundColor: 0x1111111,
    resolution: window.devicePixelRatio || 1
});
document.body.appendChild(app.view);
app;
let sprite = new PIXI.Sprite.fromImage("src/black.png");
sprite.anchor.set(0.5);
sprite.x = 0;
sprite.y = 0;
app.stage.addChild(sprite);

//# sourceMappingURL=index.579125c3.js.map
