let pauseTime = 200
basic.forever(function () {
    if (pauseTime > 0) {
        basic.clearScreen()
        for (let x = 0; x <= 4; x++) {
            for (let y = 0; y <= 4; y++) {
                led.plot(x, y)
                basic.pause(pauseTime)
                basic.clearScreen()
            }
        }
        basic.showIcon(IconNames.Yes)
        pauseTime += -80
    }
})
