var Gpio = require('onoff').Gpio,	//onoff module (use npm install onoff)
  button = new Gpio(4, 'in', 'both'),
  led = new Gpio(18, 'out'),
  playing = false;

button.setActiveLow( true );		//optional to reverse button value

button.watch(function(err, value) {	//watch button changes
  console.log('Button is ' + (value ? 'ON' : 'OFF'));
  if( value && !playing ) {
    playLEDPattern();
  }
});

var timeIntervals = [[1000, 50, 100, 50, 100, 50, 100, 50, 100],
                     [100, 50, 100, 50, 100, 50, 100, 50, 1000],
                     [100, 50, 100, 50, 1000, 50, 100, 50, 100]],
    currentPattern = 0;
var playLEDPattern = function(){
  var i = 0, pattern = timeIntervals[ currentPattern ];

  playing = true;
  led.writeSync( 1 );
  var play = function(){
     led.writeSync( i % 2 );
     i = i + 1;
     if( i < pattern.length ) {
       setTimeout( play, pattern[ i ]);
     } else {
       playing = false;
       currentPattern = currentPattern + 1;
       if( currentPattern === timeIntervals.length ) {
         currentPattern = 0;
       }
     }
  }; 
  setTimeout( play, pattern[i] );
};

process.on('SIGINT', function(){
  button.unexport();
  led.unexport();
  process.exit();
});
