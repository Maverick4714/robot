input.onButtonPressed(Button.A, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 101)
})
input.onButtonPressed(Button.B, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 101)
})
let distance = 0
Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
Tinybit.RGB_Car_Program().clear()
Tinybit.RGB_Car_Program().show()
basic.forever(function () {
    Tinybit.RGB_Car_Program().showRainbow(1, 50)
})
basic.forever(function () {
    distance = Tinybit.Ultrasonic_Car()
    if (distance < 5) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 97)
        basic.pause(200)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 173)
        basic.pause(200)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
    }
})
basic.forever(function () {
	
})
