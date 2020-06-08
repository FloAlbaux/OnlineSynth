var channel1, playing, freq, amp;
var playChannel=true, playDrum=false;
var buttonSine1, buttonSquare1, buttonTriangle1, buttonSawtooth1, buttonPlay1;
var buttonSine2, buttonSquare2, buttonTriangle2, buttonSawtooth2, buttonPlay2;
var buttonLowDrum, buttonMidDrum, buttonFastDrum, buttonPlay3;

var volume1, volume2;


function setup() 
{
  //Initialize Tone.js synthetizer
  if (Tone.context.state !== 'running') {
    Tone.context.resume();
  }
  
  channel1 = new p5.Oscillator('sine');
  channel1.freq(440, 0.1);
  channel2 = new p5.Oscillator('sine');
  channel2.freq(440, 0.1);
  drum = loadSound("client/audio/midDrum.mp3");
  
  synth1 = new Tone.Synth();
  synth1.oscillator.type = "sine";
  synth1.toMaster();

  
  synth2 = new Tone.Synth();
  synth2.oscillator.type = "sine";
  synth2.toMaster();

  
  var piano = document.getElementById("piano");
  piano.addEventListener("mousedown", e => {
  synth1.triggerAttack(e.target.dataset.note);
  
  //Avoid AudioContext issue
  if (Tone.context.state !== 'running') {
    Tone.context.resume();
  }
  });

  piano.addEventListener("mouseup", e => {
  synth1.triggerRelease();
  });

  /**********************************************************/
  /**************************BOUTON**************************/
  /**********************************************************/
  buttonSine1     =  document.getElementById('sine1');
  buttonSquare1   =  document.getElementById('square1');
  buttonTriangle1 =  document.getElementById('triangle1');
  buttonSawtooth1 =  document.getElementById('sawtooth1');
  buttonPlay1     =  document.getElementById('btplay1');
  buttonMute1	  =  document.getElementById('mute1');

  buttonSine1.addEventListener    ('click', change2Sine1);
  buttonSquare1.addEventListener  ('click', change2Square1);
  buttonTriangle1.addEventListener('click', change2Triangle1);
  buttonSawtooth1.addEventListener('click', change2Sawtooth1);
  buttonPlay1.addEventListener    ('click', playOscillator);
  buttonMute1.addEventListener	  ('click', muteOsc1);	

  buttonSine2     =  document.getElementById('sine2');
  buttonSquare2   =  document.getElementById('square2');
  buttonTriangle2 =  document.getElementById('triangle2');
  buttonSawtooth2 =  document.getElementById('sawtooth2');
  buttonPlay2     =  document.getElementById('btplay2');
  buttonMute2	  =  document.getElementById('mute2');

  buttonSine2.addEventListener    ('click', change2Sine2);
  buttonSquare2.addEventListener  ('click', change2Square2);
  buttonTriangle2.addEventListener('click', change2Triangle2);
  buttonSawtooth2.addEventListener('click', change2Sawtooth2);
  buttonPlay2.addEventListener    ('click', playOscillator);
  buttonMute2.addEventListener	  ('click', muteOsc2);	
  
  buttonLowDrum   =  document.getElementById('btLD');
  buttonMidDrum   =  document.getElementById('btMD');
  buttonFastDrum  =  document.getElementById('btFD');
  buttonPlay3     =  document.getElementById('btplay3');
  buttonMuteD	  =  document.getElementById('muteD');

  
  buttonLowDrum.addEventListener    ('click', change2LowDrum);
  buttonMidDrum.addEventListener  ('click', change2MidDrum);
  buttonFastDrum.addEventListener('click', change2FastDrum);
  buttonPlay3.addEventListener    ('click', playDrumSample);
  buttonMuteD.addEventListener	  ('click', muteOscD);	
  
  /**********************************************************/
  /**************************SLIDER**************************/
  /**********************************************************/
  volume1 =  document.getElementById('svol1');
  volume1.addEventListener    ('mousedown' , changeVolume1);

  volume2 =  document.getElementById('svol2');
  volume2.addEventListener    ('mousedown' , changeVolume2);


}
function change2Sine1()
{
  synth1.oscillator.type='sine';
}
function change2Square1()
{
  synth1.oscillator.type='square';
}
function change2Triangle1()
{
  synth1.oscillator.type='triangle';
}
function change2Sawtooth1()
{
  synth1.oscillator.type='sawtooth';
}
function change2Sine2()
{
  synth2.oscillator.type='sine';
}
function change2Square2()
{
  synth2.oscillator.type='square';
}
function change2Triangle2()
{
  synth2.oscillator.type='triangle';
}
function change2Sawtooth2()
{
  synth2.oscillator.type='sawtooth';
}
function change2LowDrum()
{
  drum.disconnect();
  drum=loadSound("client/audio/lowDrum.mp3");
}
function change2MidDrum()
{
  drum.disconnect();
  drum=loadSound("client/audio/midDrum.mp3");
}
function change2FastDrum()
{
  drum.disconnect();
  drum=loadSound("client/audio/fastDrum.mp3");
}
function playOscillator() 
{
  playChannel=!playChannel;
  
  if (playChannel)
  {
    synth2.disconnect();
    synth1.toMaster();
    buttonPlay1.style.backgroundColor = "green";
    buttonPlay2.style.backgroundColor = "red";
  }
  else
  {
    synth1.disconnect();
    synth2.toMaster();
    buttonPlay2.style.backgroundColor = "green";
    buttonPlay1.style.backgroundColor = "red";
    }
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
document.addEventListener("keydown", e => {
  switch (e.key) {
    case "d":
      return synth1.triggerAttack("C4") & synth2.triggerAttack("C4");
    case "r":
      return synth1.triggerAttack("C#4") & synth2.triggerAttack("C#4");
    case "f":
      return synth1.triggerAttack("D4") & synth2.triggerAttack("D4");
    case "t":
      return synth1.triggerAttack("D#4") & synth2.triggerAttack("D#4");
    case "g":
      return synth1.triggerAttack("E4") & synth2.triggerAttack("E4");
    case "h":
      return synth1.triggerAttack("F4") & synth2.triggerAttack("F4");
    case "u":
      return synth1.triggerAttack("F#4") & synth2.triggerAttack("F#4");
    case "j":
      return synth1.triggerAttack("G4") & synth2.triggerAttack("G4");
    case "i":
      return synth1.triggerAttack("G#4") & synth2.triggerAttack("G#4");
    case "k":
      return synth1.triggerAttack("A4") & synth2.triggerAttack("A4");
    case "o":
      return synth1.triggerAttack("A#4") & synth2.triggerAttack("A#4");
    case "l":
      return synth1.triggerAttack("B4") & synth2.triggerAttack("B4");
    default:
      return;
  }
});
document.addEventListener("keyup", e => {
  switch (e.key) {
    case "d":
    case "r":
    case "f":
    case "t":
    case "g":
    case "h":
    case "u":
    case "j":
    case "i":
    case "k":
    case "o":
    case "l":
      synth1.triggerRelease();
      synth2.triggerRelease();
  }
});
function changeVolume1()
{
  volume1.addEventListener("input", function () 
  {
    {
      synth1.volume.value=volume1.value - 20;
	  
    }
  });
}
function changeVolume2()
{
  volume2.addEventListener("input", function () 
  {
    {
      synth2.volume.value=volume2.value - 20;
    }
  });
}

function muteOsc1()
{
}

function muteOsc2()
{
}
