var Gpio = require('onoff').Gpio,	//onoff module (use npm install onoff)
  button = new Gpio(4, 'in', 'both'),
  led = new Gpio(18, 'out');

button.setActiveLow( true );		//optional to reverse button value

button.watch(function(err, value) {	//watch button changes
  console.log('Button is ' + (value ? 'ON' : 'OFF'));
  led.writeSync(value);
});

process.on('SIGINT', function(){
  button.unexport();
  led.unexport();
  process.exit();
});
