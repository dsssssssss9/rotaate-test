let updown = 0
input.setAccelerometerRange(AcceleratorRange.OneG)
basic.forever(function () {
    updown = input.rotation(Rotation.Pitch)
    basic.showNumber(updown)
    serial.writeNumber(updown)
})
