let led_1_0 = 0
let x = 0
let y = 0
let dat_receice = ""
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
for (let y = 0; y <= 4; y++) {
    for (let x = 0; x <= 4; x++) {
        led.plot(x, y)
        basic.pause(25)
        led.unplot(x, y)
    }
}
led.setBrightness(50)
basic.forever(function () {
    dat_receice = serial.readLine()
    y = parseFloat(dat_receice.substr(0, 1))
    x = parseFloat(dat_receice.substr(1, 1))
    led_1_0 = parseFloat(dat_receice.substr(2, 1))
    x = x - 1
    y = y - 1
    if (y <= 4) {
        if (led_1_0 == 1) {
            led.plot(x, y)
        } else {
            led.unplot(x, y)
        }
    } else if (x == 0) {
        pins.digitalWritePin(DigitalPin.P0, led_1_0)
    } else if (x == 1) {
        pins.digitalWritePin(DigitalPin.P1, led_1_0)
    } else {
        pins.digitalWritePin(DigitalPin.P2, led_1_0)
    }
})
