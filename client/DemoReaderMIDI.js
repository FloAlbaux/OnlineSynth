//<script src="https://cdn.jsdelivr.net/npm/webmidi"></script>
//<script language="javascript" type="text/javascript" src="client/DemoReaderMIDI.js"></script>

var midi = null;  // global MIDIAccess object
let midiIn = [];
let midiOut = [];
let notesOn = new Map();

var cmd;
var pitch;
var velocity;

function onMIDISuccess( midiAccess ) {
  console.log( "MIDI ready!" );
  for (var input of midiAccess.inputs.values() )
  {
    input.onmidimessage = getMIDIMessage;
  }
}

function onMIDIFailure(msg) {
  console.log( "Failed to get MIDI access - " + msg );
}

navigator.requestMIDIAccess( { sysex: true } ).then( onMIDISuccess, onMIDIFailure ); // sysex will ask permission to user in order to detect midi Devices

function getMIDIMessage(midiMessage){

  //console.log(midiMessage);
  var NOTE_ON = 9;
  var NOTE_OFF = 8;

  cmd = event.data[0] >> 4;
  pitch = event.data[1];
  velocity = (event.data.length > 2) ? event.data[2] : 1;



  const timestamp = Date.now();

  // Note that not all MIDI controllers send a separate NOTE_OFF command for every NOTE_ON.
  if (cmd === NOTE_OFF || (cmd === NOTE_ON && velocity === 0)) {

    //console.log(Tone.Frequency(pitch, "midi").toNote(), "NOTE_OFF", velocity);

    synth1.triggerRelease(Tone.Frequency(pitch, "midi").toNote());
    synth2.triggerRelease(Tone.Frequency(pitch, "midi").toNote());

    // Complete the note!
    const note = notesOn.get(pitch);
    if (note) {
      var noteDuration = timestamp - note;
      console.log("Note :",Tone.Frequency(pitch, "midi").toNote(),"- Duration :", noteDuration + "ms");
      notesOn.delete(pitch);
    }
  }
  else if (cmd === NOTE_ON) {
    switch (which_synth) {
      case 3 : //merge 2 synth
        synth1.triggerAttack(Tone.Frequency(pitch, "midi").toNote(),undefined,velocity/127);
        synth2.triggerAttack(Tone.Frequency(pitch, "midi").toNote(),undefined,velocity/127);
      break;
      case 1 : //synth 1
        synth1.triggerAttack(Tone.Frequency(pitch, "midi").toNote(),undefined,velocity/127);
      break;
      case 2 : //synth 2
      synth2.triggerAttack(Tone.Frequency(pitch, "midi").toNote(),undefined,velocity/127);
      break;
    }
    console.log(Tone.Frequency(pitch, "midi").toNote(), "NOTE_ON", "VEL",velocity + "/127");
    // One note can only be on at once.
    notesOn.set(pitch, timestamp);
  }
  // Scroll to the bottom of this div.
  outputIn.scrollTop = outputIn.scrollHeight;
}
//Get Input/Output Devices
navigator.requestMIDIAccess( { sysex: true } ).then((access) =>{
  // MIDI devices that send you data.
  const inputs = access.inputs.values();
  // MIDI devices that you send data to.
  const outputs = access.outputs.values();

  for(const input of inputs)console.log(input);
  for(const output of outputs)console.log(output);

})
