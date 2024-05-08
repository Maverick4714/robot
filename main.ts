basic.showIcon(IconNames.Heart)
Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
Tinybit.RGB_Car_Program().clear()
Tinybit.RGB_Car_Program().show()
music.play(music.createSoundExpression(
WaveShape.Triangle,
691,
957,
164,
0,
1043,
SoundExpressionEffect.Warble,
InterpolationCurve.Linear
), music.PlaybackMode.UntilDone)
basic.forever(function () {
    Tinybit.RGB_Car_Program().showRainbow(1, 50)
})
basic.forever(function () {
    if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 101)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 154)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 154)
    } else {
    	
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
