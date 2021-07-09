namespace SpriteKind {
    export const costume = SpriteKind.create()
    export const picker = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTilemap(tilemap`level2`)
    game.showLongText("This is my new building!", DialogLayout.Bottom)
    tiles.setWallAt(tiles.getTileLocation(0, 12), game.ask("want to decorate house?"))
    if (true) {
    	
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setTilemap(tilemap`level3`)
    mySprite4 = sprites.create(assets.tile`myTile4`, SpriteKind.Player)
    mySprite4.setPosition(10, 5)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.showLongText("Going to dirt land with your house", DialogLayout.Bottom)
    tiles.setTilemap(tilemap`level6`)
    game.showLongText("If you overlap the blue button you will go to your house!", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    game.showLongText("OK! Lets put that WELCOME sign in to your building", DialogLayout.Bottom)
    tiles.setTilemap(tilemap`level5`)
    game.showLongText("There! Right near your door way step on the HOME button to go back to the houses", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.costume, function (sprite, otherSprite) {
    mySprite2.setImage(otherSprite.image)
    for (let value of sprites.allOfKind(SpriteKind.costume)) {
        value.destroy()
        tiles.setTilemap(tilemap`level1`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
	
})
let mySprite4: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let offset = -50
let list = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, img`
    . . . . . . . . . . . . . . 
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 b f f d f 
    . f 2 2 2 2 2 2 d b b d b f 
    . f d d d d d d d f f f f . 
    . . f d b d f d f . . . . . 
    . . . f f f f f f . . . . . 
    `, img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f f . . . . 
    . c d d d d d d e e d d f . . . 
    . c d f d d f d e e b d c . . . 
    c d d f d d f d e e b d c . f f 
    c d e e d d d d e e f c . f e f 
    c d d d d c d e e e f . . f e f 
    . f c c c d e e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f f . 
    . . f f e f e e f e e e e f . . 
    . f e f f e e f f f e e e f . . 
    f d d b d d c f f f f f f b f . 
    f d d c d d d f . . f c d d f . 
    . f f f f f f f . . . f f f . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . f f . 
    . . . 4 5 5 f f 5 5 6 f f 5 f . 
    . . . f 6 6 6 6 6 6 4 f 5 5 f . 
    . . . f 5 5 5 5 5 5 5 4 5 f . . 
    . . . . f 5 4 5 f 5 f f f . . . 
    . . . . . f f f f f f f . . . . 
    `]
for (let value of list) {
    mySprite = sprites.create(value, SpriteKind.costume)
    mySprite.x += offset
    offset += 35
}
mySprite2 = sprites.create(img`
    ....................
    ....................
    ....................
    ....2222...2222.....
    ...222222.222222....
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ...2222222222222....
    ....22222222222.....
    .....222222222......
    ......2222222.......
    .......22222........
    ........222.........
    .........2..........
    .........2..........
    ....................
    `, SpriteKind.Player)
controller.moveSprite(mySprite2)
mySprite2.setPosition(75, 100)
