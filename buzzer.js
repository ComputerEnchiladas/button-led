var gpio = require('onoff').Gpio,
  buzzer = gpio(20, 'out'),
  buzzerState = 0;

setInterval( function(){
  buzzer.writeSync( buzzerState );
  buzzerState = buzzerState ? 0 : 1;
}, 1000);

process.on('SIGINT', function(){
  buzzer.unexport();
  process.exit();
});

