/*var channel1, channel2, drum; 
var reverb1, reverb2, reverb3;*/

var channel1, playing, freq, amp;
var playChannel1=false, playChannel2=false, playDrum=false;

function setup() 
{
  channel1 = new p5.Oscillator('sine');
  channel1.freq(440, 0.1);
  channel2 = new p5.Oscillator('sine');
  channel2.freq(440, 0.1);
  drum = loadSound("audio/midDrum.mp3");

  var buttonSine1     =  document.getElementById('sine1');
  var buttonSquare1   =  document.getElementById('square1');
  var buttonTriangle1 =  document.getElementById('triangle1');
  var buttonSawtooth1 =  document.getElementById('sawtooth1');
  var buttonPlay1     =  document.getElementById('btplay1');

  buttonSine1.addEventListener    ('click', change2Sine1);
  buttonSquare1.addEventListener  ('click', change2Square1);
  buttonTriangle1.addEventListener('click', change2Triangle1);
  buttonSawtooth1.addEventListener('click', change2Sawtooth1);
  buttonPlay1.addEventListener    ('click', playOscillator1);

  var buttonSine2     =  document.getElementById('sine2');
  var buttonSquare2   =  document.getElementById('square2');
  var buttonTriangle2 =  document.getElementById('triangle2');
  var buttonSawtooth2 =  document.getElementById('sawtooth2');
  var buttonPlay2     =  document.getElementById('btplay2');

  buttonSine2.addEventListener    ('click', change2Sine2);
  buttonSquare2.addEventListener  ('click', change2Square2);
  buttonTriangle2.addEventListener('click', change2Triangle2);
  buttonSawtooth2.addEventListener('click', change2Sawtooth2);
  buttonPlay2.addEventListener    ('click', playOscillator2);
  
  var buttonLowDrum   =  document.getElementById('btLD');
  var buttonMidDrum   =  document.getElementById('btMD');
  var buttonFastDrum  =  document.getElementById('btFD');
  var buttonPlay3     =  document.getElementById('btplay3');
  
  buttonLowDrum.addEventListener    ('click', change2LowDrum);
  buttonMidDrum.addEventListener  ('click', change2MidDrum);
  buttonFastDrum.addEventListener('click', change2FastDrum);
  buttonPlay3.addEventListener    ('click', playDrumSample);

}

function change2Sine1()
{
  channel1.setType('sine');
}
function change2Square1()
{
  channel1.setType('square');
}
function change2Triangle1()
{
  channel1.setType('triangle');
}
function change2Sawtooth1()
{
  channel1.setType('sawtooth');
}

function change2Sine2()
{
  channel2.setType('sine');
}
function change2Square2()
{
  channel2.setType('square');
}
function change2Triangle2()
{
  channel2.setType('triangle');
}
function change2Sawtooth2()
{
  channel2.setType('sawtooth');
}

function change2LowDrum()
{
  drum.disconnect();
  drum=loadSound("audio/lowDrum.mp3");
}
function change2MidDrum()
{
  drum.disconnect();
  drum=loadSound("audio/midDrum.mp3");
}
function change2FastDrum()
{
  drum.disconnect();
  drum=loadSound("audio/fastDrum.mp3");
}


function playOscillator1() 
{
  playChannel1=!playChannel1;
  if (playChannel1)
  {
    channel1.amp(1, 0.1);
    channel1.start();
  }
  else
    channel1.amp(0, 0);
}

function playOscillator2() 
{
  playChannel2=!playChannel2;
  if (playChannel2)
  {
    channel2.amp(1, 0.1);
    channel2.start();
  }
  else
    channel2.amp(0, 0);
}

function playDrumSample()
{
  playDrum=!playDrum;
  if (playDrum)
  {
    drum.loop();
  }
  else
  {
    drum.amp(0, 0);
    drum.pause();
  }
}