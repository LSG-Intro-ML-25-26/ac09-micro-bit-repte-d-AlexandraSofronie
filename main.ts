let temperatura = 0
let luz = 0
basic.forever(function () {
    temperatura = input.temperature()
    if (temperatura > 22) {
        basic.showString("CALOR")
    } else {
        basic.showString("FRIO")
    }
})
basic.forever(function () {
    luz = input.lightLevel()
    if (luz > 200) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.UntilDone)
    } else if (luz < 50) {
        music.play(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
    } else {
        basic.clearScreen()
    }
})
