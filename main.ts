input.onGesture(Gesture.LogoUp, function () {
    index = randint(0, text_list.length - 1)
    basic.showString("" + (text_list[index]))
})
input.onGesture(Gesture.ScreenUp, function () {
    game.removeLife(1)
})
input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
})
let index = 0
let text_list: string[] = []
game.setScore(0)
game.setLife(3)
text_list = [
"perro",
"gato",
"pajaro",
"elefante",
"rana",
"pez",
"raton"
]
game.startCountdown(30000)
