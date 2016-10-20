var Gpio = require('onoff').Gpio,
  led = new Gpio(18, 'out'), 
  ledState = 0, 
  timer,
  button = new Gpio(4, 'in', 'both'), 
  time = 0;

button.setActiveLow( true );

function setTimer(){
  timer = setTimeout( function(){
    ledState = 1;
    led.writeSync( ledState );
    time = Date.now();
  }, 3000);
}
setTimer(); 

button.watch(function(err, value) {
  if( value ) {
    if( !ledState ) {
      console.log('You cheated! Try again');
      clearTimeout( timer );
      setTimer();
    } else {
      var total = Date.now() - time;
      ledState = 0;    
      led.writeSync( ledState );
    
      console.log( 'You responded in '+total+' milliseconds!');
    }
  } else {
    if( !ledState ) {
      setTimer();
    }
  }
});

process.on('SIGINT', function(){
  button.unexport();
  led.unexport();
  process.exit();
});
