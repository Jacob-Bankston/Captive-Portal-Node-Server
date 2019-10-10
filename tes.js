const Gpio = require("onoff").Gpio;

const gpioswitch = new Gpio(3, "out"); // creating a new output relationship with pin 2

gpioswitch.writeSync(1);
setTimeout(function() {
  gpioswitch.writeSync(0);
}, 10000);
