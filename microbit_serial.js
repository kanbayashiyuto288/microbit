let inputStr = ""
let dz = 0
let dy = 0
let dx = 0
serial.redirectToUSB()
basic.showIcon(IconNames.Happy)
// アップデート
basic.forever(function () {
    serial.writeLine("pitch=" + input.rotation(Rotation.Pitch))
    serial.writeLine("roll=" + input.rotation(Rotation.Roll))
    basic.pause(100)
})
// 受信側とgroupIDを揃える
basic.forever(function () {
    dx = input.acceleration(Dimension.X)
    dy = input.acceleration(Dimension.Y)
    dz = input.acceleration(Dimension.Z)
    inputStr = "" + dx + "_" + dy + "_" + dz
})
