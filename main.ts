function Move_Vertical_with_buttons_at_speed (speed: number, Move: Sprite) {
    if (controller.up.isPressed() || controller.down.isPressed()) {
        Move.vy = controller.dy(speed)
    } else {
        Move.vy = 0
    }
}
function Divide (num1: number, num2: number) {
    return num1 / num2
}
function Move_Horizontal_with_buttons_at_speed (speed: number, Move: Sprite) {
    if (controller.left.isPressed() || controller.right.isPressed()) {
        Move.vx = controller.dx(speed)
    } else {
        Move.vx = 0
    }
}
let textSprite = textsprite.create(convertToText(Divide(100, 5)))
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
forever(function () {
    Move_Horizontal_with_buttons_at_speed(500, textSprite)
})
