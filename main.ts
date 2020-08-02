devices.onNotified(MesDeviceInfo.IncomingCall, function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    devices.tellCameraTo(MesCameraEvent.LaunchPhotoMode)
})
input.onButtonPressed(Button.AB, function () {
    devices.tellCameraTo(MesCameraEvent.StopPhotoMode)
})
input.onButtonPressed(Button.B, function () {
    devices.tellCameraTo(MesCameraEvent.TakePhoto)
})
input.onGesture(Gesture.Shake, function () {
    devices.raiseAlertTo(MesAlertEvent.FindMyPhone)
    basic.showIcon(IconNames.Sad)
})
