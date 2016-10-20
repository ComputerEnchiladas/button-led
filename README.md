# button-led
Clone this repo. Then run ```npm install```. Setup the Button and LED and shown below. Test each components individually by running commands shown below. 

## Button Setup
![10k-ohm Resistor](https://jackharth1.files.wordpress.com/2013/06/resistor001.jpg)

The resistor above is 10k-ohm, this can be seen by concatinating the first two color bands and multiplying with value of third band. The brown is 1 and black 0, so merging the two equals 10. Next, the third band is orange which equals to 1k-ohm. So next we multiply 10 * 1k and we get 10k-ohm resistor. The fourth band is to measure it's efficiency/tolerance as noted in the code descriptions below.
![Resitor Codes](https://cdn.instructables.com/FGG/TBC9/H4VQNQFG/FGGTBC9H4VQNQFG.MEDIUM.gif)

Position the button on the board, with two legs (pins) on column D and two other legs on column G as shown on the board below. [IGNORE THE CONNECTIONS SEE ON IMAGE, THE IMAGE IS JUST FOR REFERENCE TO PLACING BUTTON ON THE BOARD)
![Button](https://grantwinney.com/wp-content/uploads/2016/05/morse-code-button-click-2.jpg)

Next, on any side of two legs on either column D or G, use the left leg to connect to GPIO 17 and the right leg to ground. Also, connect a 10k-ohm resistor from GPIO 17 to 3.3V (3V3) power supply.

Test button by running 

* ```node button.js```

## LED Setup
Using any LED color, look at the lengths of their metal legs and you will see one is shorter than the other. The shorter leg is the negative (ground) end point and the longer one connects to GPIO 27. You may place the LED on the board by using any two row numbers available from columns A-E or the same for columns F-J.

![LED](https://cdn.sparkfun.com/assets/0/c/5/d/a/518d2d78ce395f2675000000.png)

Test led by running

* ```node led.js```

## Homework 6
Using JavaScript, attempt to program each of the following:

* program the led to turn on when the button is pressed
* program the button to play one light pattern, e.g. blink three times
* program the button to play different light patterns every time it's pressed
* program the led come on every three seconds and use button to turn off
* measure reaction time to turn off led

