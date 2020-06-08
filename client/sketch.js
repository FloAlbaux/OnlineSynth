var amp;
var which_synth=3, playDrum=false;
var buttonSine1, buttonSquare1, buttonTriangle1, buttonSawtooth1, buttonPlay1;
var buttonSine2, buttonSquare2, buttonTriangle2, buttonSawtooth2, buttonPlay2;
var buttonLowDrum, buttonMidDrum, buttonFastDrum, buttonPlay3;
var p1=true, p2=true;
var volume1, volume2;

var volPan1, chorus1, distortion1, pingp1, vibrato1;
var VolPan1, Chorus1, Distortion1, Pingp1, Vibrato1;

var volPan2, chorus2, distortion2, pingp2, vibrato2;
var VolPan2, Chorus2, Distortion2, Pingp2, Vibrato2;


function setup() 
{
  //Initialize Tone.js synthetizer

  drum = loadSound("client/audio/midDrum.mp3");

  /****************************SYNTH 1****************************/
  VolPan1     = new Tone.PanVol(0, 0)         
  Chorus1     = new Tone.Chorus(0, 0, 0)//(4, 2.5, 0);   
  Distortion1 = new Tone.Distortion(0)     
  Distortion1.oversample= "4x"
  Pingp1      = new Tone.PingPongDelay(-1,0)//("8n", 0) 
  Vibrato1    = new Tone.Vibrato(0, 0);
  synth1 = new Tone.Synth().chain(Vibrato1, VolPan1, Chorus1, Distortion1, Pingp1, Tone.Master)
  
  /****************************SYNTH 2****************************/
  VolPan2     = new Tone.PanVol(0, 0)         
  Chorus2     = new Tone.Chorus(0, 0, 0)//(4, 2.5, 0);   
  Distortion2 = new Tone.Distortion(0)     
  Distortion2.oversample= "4x"
  Pingp2      = new Tone.PingPongDelay(-1,0)//("8n", 0) 
  Vibrato2    = new Tone.Vibrato(0, 0);
  synth2 = new Tone.Synth().chain(Vibrato2, VolPan2, Chorus2, Distortion2, Pingp2, Tone.Master)

  
  var piano = document.getElementById("piano");
  piano.addEventListener("mousedown", e => {
  switch(which_synth) {
	  case 1 : synth1.triggerAttack(e.target.dataset.note);
			   break;
	  case 2 : synth2.triggerAttack(e.target.dataset.note);
			   break;
	  case 3 : synth1.triggerAttack(e.target.dataset.note);
			   synth2.triggerAttack(e.target.dataset.note);
			   break;
  }
    //Avoid AudioContext issue
  if (Tone.context.state !== 'running') {
    Tone.context.resume();
  }
  });

  piano.addEventListener("mouseup", e => {
  synth1.triggerRelease();
  synth2.triggerRelease();
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
  buttonPlay1.addEventListener    ('click', playOscillator1);
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
  buttonPlay2.addEventListener    ('click', playOscillator2);
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
  // buttonMuteD.addEventListener	  ('click', muteOscD);	
  
    buttonPlay1.style.backgroundColor = "green";
  buttonPlay2.style.backgroundColor = "green";
  
  /**********************************************************/
  /**************************SLIDER**************************/
  /**********************************************************/
  volume1 =  document.getElementById('svol1');
  volume1.addEventListener    ('mousedown' , changeVolume1);

  volume2 =  document.getElementById('svol2');
  volume2.addEventListener    ('mousedown' , changeVolume2);

  vibrato1 =  document.getElementById('vibrato1');
  vibrato1.addEventListener    ('mousedown' , changeVibrato1);
  vibrato2 =  document.getElementById('vibrato2');
  vibrato2.addEventListener    ('mousedown' , changeVibrato2);
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
function playOscillator1() 
{
   p1=!p1;
   if(p1) {
	buttonPlay1.style.backgroundColor = "green";
	which_synth = which_synth + 1;
   }
   else {
	buttonPlay1.style.backgroundColor = "red";
	which_synth = which_synth - 1;
   }
}

function playOscillator2() 
{
   p2=!p2;
   if(p2) {
	buttonPlay2.style.backgroundColor = "green";
	which_synth = which_synth + 2;
   }
   else {
	buttonPlay2.style.backgroundColor = "red";
	which_synth = which_synth - 2;
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
  switch (which_synth) {
	  case 3 : //merge 2 synth
			synth1.triggerAttack(keyboard_to_note(e.key));
			synth2.triggerAttack(keyboard_to_note(e.key));  
	  break;
	  case 1 : //synth 1		
			synth1.triggerAttack(keyboard_to_note(e.key));
	  break;
	  case 2 : //synth 2
		  synth2.triggerAttack(keyboard_to_note(e.key)); 
	  break;	
  }
});
document.addEventListener("keyup", e => {
      synth1.triggerRelease();
      synth2.triggerRelease(	);
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

function changeVibrato1()
{
  vibrato1.addEventListener("input", function () 
  {
    {
      Vibrato1.depth.value = 1
      Vibrato1.frequency.value = vibrato1.value
    }
  });
}
function changeVibrato2()
{
  vibrato2.addEventListener("input", function () 
  {
    {
      Vibrato2.depth.value = 1
      Vibrato2.frequency.value = vibrato2.value
    }
  });
}


function muteOsc1()
{
}

function muteOsc2()
{
}

function keyboard_to_note(keyboard)
{
	switch(keyboard) {
		case "d":
		  return  "C4";
		case "r":
		  return  "C#4";
		case "f":
		  return  "D4";
		case "t":
		  return  "D#4";
		case "g":
		  return  "E4";
		case "h":
		  return  "F4";
		case "u":
		  return  "F#4";
		case "j":
		  return  "G4";
		case "i":
		  return  "G#4";
		case "k":
		  return  "A4";
		case "o":
		  return  "A#4";
		case "l":
		  return  "B4";
		default:
		  return;
	}
}