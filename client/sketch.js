var amp;
var which_synth=3, playDrum=false;
var buttonSine1, buttonSquare1, buttonTriangle1, buttonSawtooth1, buttonPlay1;
var buttonSine2, buttonSquare2, buttonTriangle2, buttonSawtooth2, buttonPlay2;
var buttonLowDrum, buttonMidDrum, buttonFastDrum, buttonPlay3;
var p1=true, p2=true;
var volume1, volume2;

/*objet avec maj, var sans maj*/
var pan1, chorus1, distortion1, pingp1, vibrato1, eqlow1, eqmid1, eqhigt1;
var Pan1, Chorus1, Distortion1, Pingp1, Vibrato1, EQ31, Vol1;

var pan2, chorus2, distortion2, pingp2, vibrato2, eqlow2, eqmid2, eqhigt2;
var Pan2, Chorus2, Distortion2, Pingp2, Vibrato2, EQ32, Vol2;

var note;

function setup() 
{
  //Initialize Tone.js synthetizer
  drum = loadSound("client/audio/midDrum.mp3");

  /****************************SYNTH 1****************************/
  Vol1        = new Tone.Volume(0);
  Pan1        = new Tone.Panner(0)       
  Chorus1     = new Tone.Chorus(4, 0, 1) 
  Distortion1 = new Tone.Distortion(0)     
  Distortion1.oversample= "4x"
  Pingp1      = new Tone.PingPongDelay(0,0)//("8n", 0) 
  Vibrato1    = new Tone.Vibrato(0, 0);
  EQ31        = new Tone.EQ3()
  synth1 = new Tone.PolySynth(4, Tone.Synth).chain(Vol1, EQ31, Vibrato1, Pan1, Chorus1, Distortion1, Pingp1, Tone.Master)
  //synth1.sync()
  /****************************SYNTH 2****************************/
  Pan2        = new Tone.Panner(0)         
  Chorus2     = new Tone.Chorus(0, 0, 1)//(4, 2.5, 0);   
  Distortion2 = new Tone.Distortion(0)     
  Distortion2.oversample= "4x"
  Pingp2      = new Tone.PingPongDelay(0, 0, 0)//("8n", 0) 
  Vibrato2    = new Tone.Vibrato(0, 1);
  EQ32        = new Tone.EQ3()
  Vol2        = new Tone.Volume(0);
  synth2 = new Tone.PolySynth(4, Tone.Synth).chain(Vol2, EQ32, Vibrato2, Pan2, Chorus2, Distortion2, Pingp2, Tone.Master)
  //synth2.sync()
  var piano = document.getElementById("piano");
  piano.addEventListener("mousedown", e => {
  switch(which_synth) {
    case 1 : synth1.triggerRelease([e.target.dataset.note], "+2n");
			  break;
	  case 2 : synth2.triggerRelease(e.target.dataset.note, "+2n");
			   break;
	  case 3 : synth1.triggerRelease([e.target.dataset.note], "+2n");
			   synth2.triggerRelease([e.target.dataset.note], "+2n");
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
  buttonMute1	    =  document.getElementById('mute1');

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
  buttonMuteD	    =  document.getElementById('muteD');

  
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
  chorus1 =  document.getElementById('chorus1');
  chorus1.addEventListener    ('mousedown' , changeChorus1);
  distortion1 =  document.getElementById('distortion1');
  distortion1.addEventListener    ('mousedown' , changeDistortion1);
  pingp1 =  document.getElementById('pingp1');
  pingp1.addEventListener    ('mousedown' , changePingp1);
  pan1 =  document.getElementById('pan1');
  pan1.addEventListener    ('mousedown' , changePan1);
  eqlow1 =  document.getElementById('eqlow1');
  eqlow1.addEventListener    ('mousedown' , changeEq1);
  eqmid1 =  document.getElementById('eqmid1');
  eqmid1.addEventListener    ('mousedown' , changeEq1);
  eqhigt1 =  document.getElementById('eqhigh1');
  eqhigt1.addEventListener    ('mousedown' , changeEq1);

  vibrato2 =  document.getElementById('vibrato2');
  vibrato2.addEventListener    ('mousedown' , changeVibrato2);
  chorus2 =  document.getElementById('chorus2');
  chorus2.addEventListener    ('mousedown' , changeChorus2);
  distortion2 =  document.getElementById('distortion2');
  distortion2.addEventListener    ('mousedown' , changeDistortion1);
  pingp2 =  document.getElementById('pingp2');
  pingp2.addEventListener    ('mousedown' , changePingp2);
  pan2 =  document.getElementById('pan2');
  pan2.addEventListener    ('mousedown' , changePan2);
  eqlow2 =  document.getElementById('eqlow1');
  eqlow2.addEventListener    ('mousedown' , changeEq2);
  eqmid2 =  document.getElementById('eqmid1');
  eqmid2.addEventListener    ('mousedown' , changeEq2);
  eqhigt2 =  document.getElementById('eqhigh1');
  eqhigt2.addEventListener    ('mousedown' , changeEq2);
}

function change2Sine1()
{
  synth1.disconnect()
  synth1 = new Tone.PolySynth(4, Tone.Synth, {
    oscillator : {
      type : "sine"
    }
  }).chain(Vol1, EQ31, Vibrato1, Pan1, Chorus1, Distortion1, Pingp1, Tone.Master);
  
}
function change2Square1()
{
  synth1.disconnect()
  synth1 = new Tone.PolySynth(4, Tone.Synth, {
    oscillator : {
      type : "square"
    }
  }).chain(Vol1, EQ31, Vibrato1, Pan1, Chorus1, Distortion1, Pingp1, Tone.Master);
  
}
function change2Triangle1()
{
  synth1.disconnect()
  synth1 = new Tone.PolySynth(4, Tone.Synth, {
    oscillator : {
      type : "triangle"
    }
  }).chain(Vol1, EQ31, Vibrato1, Pan1, Chorus1, Distortion1, Pingp1, Tone.Master);
}
function change2Sawtooth1()
{
  synth1.disconnect()
  synth1 = new Tone.PolySynth(4, Tone.Synth, {
    oscillator : {
      type : "sawtooth"
    }
  }).chain(Vol1, EQ31, Vibrato1, Pan1, Chorus1, Distortion1, Pingp1, Tone.Master);
}
function change2Sine2()
{
  synth2.disconnect()
  synth2 = new Tone.PolySynth(4, Tone.Synth, {
    oscillator : {
      type : "sine"
    }
  }).chain(Vol2, EQ32, Vibrato2, Pan2, Chorus2, Distortion2, Pingp2, Tone.Master);
}
function change2Square2()
{
  synth2.disconnect()
  synth2 = new Tone.PolySynth(4, Tone.Synth, {
    oscillator : {
      type : "square"
    }
  }).chain(Vol2, EQ32, Vibrato2, Pan2, Chorus2, Distortion2, Pingp2, Tone.Master);
}
function change2Triangle2()
{
  synth2.disconnect()
  synth2 = new Tone.PolySynth(4, Tone.Synth, {
    oscillator : {
      type : "triangle"
    }
  }).chain(Vol2, EQ32, Vibrato2, Pan2, Chorus2, Distortion2, Pingp2, Tone.Master);
}
function change2Sawtooth2()
{
  synth2.disconnect()
  synth2 = new Tone.PolySynth(4, Tone.Synth, {
    oscillator : {
      type : "sawtooth"
    }
  }).chain(Vol2, EQ32, Vibrato2, Pan2, Chorus2, Distortion2, Pingp2, Tone.Master);
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
      note = keyboard_to_note(e.key)
      console.log("")
			synth1.triggerAttackRelease(note, "4n");
			synth2.triggerAttackRelease(note, "4n");  
	  break;
    case 1 : //synth 1	
      //console.log("1")
      note = keyboard_to_note(e.key)
      console.log("")
			synth1.triggerAttackRelease(note, "4n");
	  break;
	  case 2 : //synth 2
    note = keyboard_to_note(e.key)
    console.log("")
    synth2.triggerAttackRelease(note, "4n");
	  break;	
  }
});
document.addEventListener("keyup", e => {
      synth1.triggerRelease();
      synth2.triggerRelease();
});
function changeVolume1()
{
  volume1.addEventListener("input", function () 
  {
    {
      Vol1.volume.value=volume1.value
    }
  });
}
function changeVolume2()
{
  volume2.addEventListener("input", function () 
  {
    {
      Vol2.volume.value=volume2.value
    }
  });
}

function changeVibrato1()
{
  vibrato1.addEventListener("input", function () 
  {
    {
      Vibrato1.depth.value = 1
      Vibrato1.frequency.value = vibrato1.value/100
      if(vibrato1.value==0)
        Vibrato1.depth.value = 0
    }
  });
}
function changeVibrato2()
{
  vibrato2.addEventListener("input", function () 
  {
    {
      Vibrato2.frequency.value = vibrato2.value/100
      if(vibrato2.value==0)
        Vibrato2.depth.value = 0
    }
  });
}
function changeChorus1()
{
  chorus1.addEventListener("input", function () 
  {
    {
      Chorus1.delayTime=chorus1.value/10//new Intl.NumberFormat('de-DE').format(chorus1.value/100)
    }
  });
}
function changeChorus2()
{
  chorus2.addEventListener("input", function () 
  {
    {
      Chorus2.delayTime=chorus2.value/10//new Intl.NumberFormat('de-DE').format(chorus1.value/100)
    }
  });
}

function changeDistortion1()
{
  distortion1.addEventListener("input", function () 
  {
    {      
      Distortion1.distortion = distortion1.value/10
    }
  });
}
function changeDistortion2()
{
  distortion2.addEventListener("input", function () 
  {
    {      
      Distortion2.distortion = distortion2.value/10
    }
  });
}
function changePingp1()
{
  pingp1.addEventListener("input", function () 
  {
    {  
      if (pingp1.value<1)
      {
        Pingp1.delayTime.value = 0
      }
      else
        Pingp1.delayTime.value = (pingp1.value) + "hz" // hertz //+ "n"//pingp1.value/100
      //Pingp1.feedback = 1
    }
  });
}
function changePingp2()
{
  pingp2.addEventListener("input", function () 
  {
    {  
      if (pingp2.value<1)
      {
        Pingp2.delayTime.value = 0
      }
      else
        Pingp2.delayTime.value = (pingp2.value) + "hz" // hertz //+ "n"//pingp1.value/100
      //Pingp1.feedback = 1
    }
  });
}
function changePan1()
{
  pan1.addEventListener("input", function () 
  {
    {   
      Pan1.pan.value = pan1.value/100       // hertz //+ "n"//pingp2.value/200    
    }
  });
}
function changePan2()
{
  pan2.addEventListener("input", function () 
  {
    {   
      Pan2.pan.value = pan2.value/100// hertz //+ "n"//pingp2.value/200    
    }
  });
}
function changeEq1()
{
  eqlow1.addEventListener("input", function () 
  {
    {   
      EQ31.low.value = eqlow1.value    
    }
  });
  eqmid1.addEventListener("input", function () 
  {
    {   
      EQ31.mid.value = eqmid1.value
    }
  });
  eqhigt1.addEventListener("input", function () 
  {
    {   
      EQ31.high.value = eqhigt1.value 
    }
  });
}
function changeEq2()
{
  eqlow2.addEventListener("input", function () 
  {
    {   
      EQ32.low.value = eqlow1.value    
    }
  });
  eqmid2.addEventListener("input", function () 
  {
    {   
      EQ32.mid.value = eqmid2.value
    }
  });
  eqhigt2.addEventListener("input", function () 
  {
    {   
      EQ32.high.value = eqhigt2.value 
    }
  });
}

function muteOsc1()
{
  Vol1.mute = !Vol1.mute
}

function muteOsc2()
{
  Vol2.mute = !Vol2.mute
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