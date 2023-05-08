function Move_Vertical_with_buttons_at_the_speed_of (speed: number, Move: Sprite) {
    if (controller.up.isPressed() || controller.down.isPressed()) {
        Move.vy = controller.dy(speed)
    } else {
        Move.vy = 0
    }
}
function Divide_the_2_numbers (num1: number, num2: number) {
    return num1 / num2
}
function Move_Horizontal_with_buttons_at_the_speed_of (speed: number, Move: Sprite) {
    if (controller.left.isPressed() || controller.right.isPressed()) {
        Move.vx = controller.dx(speed)
    } else {
        Move.vx = 0
    }
}
