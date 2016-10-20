var Gpio = require('onoff').Gpio,	//onoff module (use npm install onoff)
  button = new Gpio(4, 'in', 'both'),
  led = new Gpio(18, 'out'),
  ledOn = false;

button.setActiveLow( true );		//optional to reverse button value

button.watch(function(err, value) {	//watch button changes
  console.log('Button is ' + (value ? 'ON' : 'OFF'));
  if( value && ledOn ) {
    led.writeSync(0);
    ledOn = false;
    turnOnIn( 3000 );
  }
});

var turnOnIn = function( milliseconds ){
  setTimeout( function(){
    led.writeSync(1);
    ledOn = true;
  }, milliseconds);
};

turnOnIn( 3000 );

process.on('SIGINT', function(){
  button.unexport();
  led.unexport();
  process.exit();
});
