/***song variable**/
var channel1, channel2, channel3, channel4, channel5, channel6, channel7, channel8;
var buttonSong11, buttonSong12, buttonSong13, buttonSong14, buttonSong15, buttonSong16, buttonSong17, buttonSong18;
var buttonSong21, buttonSong22, buttonSong23, buttonSong24, buttonSong25, buttonSong26, buttonSong27, buttonSong28;
var buttonSong31, buttonSong32, buttonSong33, buttonSong34, buttonSong35, buttonSong36, buttonSong37, buttonSong38;
var buttonSolo1, buttonSolo2, buttonSolo3, buttonSolo4, buttonSolo5, buttonSolo6, buttonSolo7, buttonSolo8;
var buttonSave1, buttonSave2, buttonSave3, buttonSave4, buttonSave5, buttonSave6, buttonSave7, buttonSave8;
var selecteur1=1, selecteur2=1, selecteur3=1, selecteur4=1, selecteur5=1, selecteur6=1, selecteur7=1, selecteur8=1; 
/***var song control***/
var sliderRate1, sliderRate2, sliderRate3, sliderRate4, sliderRate5, sliderRate6, sliderRate7, sliderRate8;
var sliderPan1, sliderPan2, sliderPan3, sliderPan4, sliderPan5, sliderPan6, sliderPan7, sliderPan8;
var sliderVolume1, sliderVolume2, sliderVolume3, sliderVolume4, sliderVolume5, sliderVolume6, sliderVolume7, sliderVolume8;
var buttonPlay1, buttonPlay2, buttonPlay3, buttonPlay4, buttonPlay5, buttonPlay6, buttonPlay7, buttonPlay8;
var buttonMute1, buttonMute2, buttonMute3, buttonMute4, buttonMute5, buttonMute6, buttonMute7, buttonMute8;
var boolMute1=true, boolMute2=true, boolMute3=true, boolMute4=true, boolMute5=true, boolMute6=true, boolMute7=true, boolMute8=true;
var soloFastPass1=false, soloFastPass2=false, soloFastPass3=false, soloFastPass4=false, soloFastPass5=false, soloFastPass6=false, soloFastPass7=false, soloFastPass8=false;
/***var send effect***/
var caseEffect11=1, caseEffect12=1, caseEffect13=1, caseEffect14=1, caseEffect15=1, caseEffect16=1, caseEffect17=1, caseEffect18=1;
var effect11, effect12, effect13, effect14, effect15, effect16, effect17, effect18;
var selectEffect11, selectEffect12, selectEffect13, selectEffect14, selectEffect15, selectEffect16, selectEffect17, selectEffect18;
var sliderEffect11, sliderEffect12, sliderEffect13, sliderEffect14, sliderEffect15, sliderEffect16, sliderEffect17, sliderEffect18;
var caseEffect21=1, caseEffect22=1, caseEffect23=1, caseEffect24=1, caseEffect25=1, caseEffect26=1, caseEffect27=1, caseEffect28=1;
var effect21, effect22, effect23, effect24, effect25, effect26, effect27, effect28;
var selectEffect21, selectEffect22, selectEffect23, selectEffect24, selectEffect25, selectEffect26, selectEffect27, selectEffect28;
var sliderEffect21, sliderEffect22, sliderEffect23, sliderEffect24, sliderEffect25, sliderEffect26, sliderEffect27, sliderEffect28;
var caseEffect31=1, caseEffect32=1, caseEffect33=1, caseEffect34=1, caseEffect35=1, caseEffect36=1, caseEffect37=1, caseEffect38=1;
var effect31, effect32, effect33, effect34, effect35, effect36, effect37, effect38;
var selectEffect31, selectEffect32, selectEffect33, selectEffect34, selectEffect35, selectEffect36, selectEffect37, selectEffect38;
var sliderEffect31, sliderEffect32, sliderEffect33, sliderEffect34, sliderEffect35, sliderEffect36, sliderEffect37, sliderEffect38;
/***var inline effect***/
var ONOFFLowPass1, ONOFFLowPass2, ONOFFLowPass3, ONOFFLowPass4, ONOFFLowPass5, ONOFFLowPass6, ONOFFLowPass7, ONOFFLowPass8;
var myFilter1, myFilter2, myFilter3, myFilter4, myFilter5, myFilter6, myFilter7, myFilter8;
var sliderLowPass1, sliderLowPass2, sliderLowPass3, sliderLowPass4, sliderLowPass5, sliderLowPass6, sliderLowPass7, sliderLowPass8;
var ONOFFEQ1, ONOFFEQ2, ONOFFEQ3, ONOFFEQ4, ONOFFEQ5, ONOFFEQ6, ONOFFEQ7, ONOFFEQ8;
var eq1, eq2, eq3, eq4, eq5, eq6, eq7, eq8;
var sliderEqLow1, sliderEqLow2, sliderEqLow3, sliderEqLow4, sliderEqLow5, sliderEqLow6, sliderEqLow7, sliderEqLow8;
var sliderEqMid1, sliderEqMid2, sliderEqMid3, sliderEqMid4, sliderEqMid5, sliderEqMid6, sliderEqMid7, sliderEqMid8;
var sliderEqHight1, sliderEqHight2, sliderEqHight3, sliderEqHight4, sliderEqHight5, sliderEqHight6, sliderEqHight7, sliderEqHight8;
var ONOFFCompressor1, ONOFFCompressor2, ONOFFCompressor3, ONOFFCompressor4, ONOFFCompressor5, ONOFFCompressor6, ONOFFCompressor7, ONOFFCompressor8;
var compressor1, compressor2, compressor3, compressor4, compressor5, compressor6, compressor7, compressor8;
var sliderCompressor1, sliderCompressor2, sliderCompressor3, sliderCompressor4, sliderCompressor5, sliderCompressor6, sliderCompressor7, sliderCompressor8;
/***SAVE SETTING***/
var caseSave1=1, caseSave2=1, caseSave3=1, caseSave4=1, caseSave5=1, caseSave6=1, caseSave7=1, caseSave8=1;
/*button 1*/
var saveSelecteur11, saveSelecteur12, saveSelecteur13, saveSelecteur14, saveSelecteur15, saveSelecteur16, saveSelecteur17, saveSelecteur18;
var saveSliderEffect111, saveSliderEffect112, saveSliderEffect113, saveSliderEffect114, saveSliderEffect115, saveSliderEffect116, saveSliderEffect117, saveSliderEffect118;
var saveInnerEffect111, saveInnerEffect112, saveInnerEffect113, saveInnerEffect114, saveInnerEffect115, saveInnerEffect116, saveInnerEffect117, saveInnerEffect118;
var saveSliderEffect211, saveSliderEffect212, saveSliderEffect213, saveSliderEffect214, saveSliderEffect215, saveSliderEffect216, saveSliderEffect217, saveSliderEffect218;
var saveInnerEffect211, saveInnerEffect212, saveInnerEffect213, saveInnerEffect214, saveInnerEffect215, saveInnerEffect216, saveInnerEffect217, saveInnerEffect218;
var saveSliderEffect311, saveSliderEffect312, saveSliderEffect313, saveSliderEffect314, saveSliderEffect315, saveSliderEffect316, saveSliderEffect317, saveSliderEffect318;
var saveInnerEffect311, saveInnerEffect312, saveInnerEffect313, saveInnerEffect314, saveInnerEffect315, saveInnerEffect316, saveInnerEffect317, saveInnerEffect318;
var saveInnerLowPass11, saveInnerLowPass12, saveInnerLowPass13, saveInnerLowPass14, saveInnerLowPass15, saveInnerLowPass16, saveInnerLowPass17, saveInnerLowPass18;
var saveSliderLowPass11, saveSliderLowPass12, saveSliderLowPass13, saveSliderLowPass14, saveSliderLowPass15, saveSliderLowPass16, saveSliderLowPass17, saveSliderLowPass18;
var saveInnerEQ11, saveInnerEQ12, saveInnerEQ13, saveInnerEQ14, saveInnerEQ15, saveInnerEQ16, saveInnerEQ17, saveInnerEQ18;
var saveSliderEQL11, saveSliderEQL11, saveSliderEQL12, saveSliderEQL13, saveSliderEQL14, saveSliderEQL15, saveSliderEQL16, saveSliderEQL17, saveSliderEQL18;
var saveSliderEQM11, saveSliderEQM12, saveSliderEQM13, saveSliderEQM14, saveSliderEQM15, saveSliderEQM16, saveSliderEQM17, saveSliderEQM18;
var saveSliderEQH11, saveSliderEQH12, saveSliderEQH13, saveSliderEQH14, saveSliderEQH15, saveSliderEQH16, saveSliderEQH17, saveSliderEQH18;
var saveInnerCompressor11, saveInnerCompressor12, saveInnerCompressor13, saveInnerCompressor14, saveInnerCompressor15, saveInnerCompressor16, saveInnerCompressor17, saveInnerCompressor18;
var saveSliderCompressor11, saveSliderCompressor12, saveSliderCompressor13, saveSliderCompressor1, saveSliderCompressor15, saveSliderCompressor16, saveSliderCompressor17, saveSliderCompressor18;
var saveSliderRate11, saveSliderRate12, saveSliderRate13, saveSliderRate14, saveSliderRate15, saveSliderRate16, saveSliderRate17, saveSliderRate18;
var saveSliderPan11, saveSliderPan12, saveSliderPan13, saveSliderPan14, saveSliderPan15, saveSliderPan16, saveSliderPan17, saveSliderPan18;
var saveSliderVolume11, saveSliderVolume12, saveSliderVolume13, saveSliderVolume1, saveSliderVolume15, saveSliderVolume16,saveSliderVolume17, saveSliderVolume18;
/*button 2*/
var saveSelecteur21, saveSelecteur22, saveSelecteur23, saveSelecteur24, saveSelecteur25, saveSelecteur26, saveSelecteur27, saveSelecteur28;
var saveSliderEffect121, saveSliderEffect122, saveSliderEffect123, saveSliderEffect124, saveSliderEffect125, saveSliderEffect126, saveSliderEffect127, saveSliderEffect128;
var saveInnerEffect121, saveInnerEffect122, saveInnerEffect123, saveInnerEffect124, saveInnerEffect125, saveInnerEffect126, saveInnerEffect127, saveInnerEffect128;
var saveSliderEffect221, saveSliderEffect222, saveSliderEffect223, saveSliderEffect224, saveSliderEffect225, saveSliderEffect226, saveSliderEffect227, saveSliderEffect228;
var saveInnerEffect221, saveInnerEffect222, saveInnerEffect223, saveInnerEffect224, saveInnerEffect225, saveInnerEffect226, saveInnerEffect227, saveInnerEffect228;
var saveSliderEffect321, saveSliderEffect322, saveSliderEffect323, saveSliderEffect324, saveSliderEffect325, saveSliderEffect326, saveSliderEffect327, saveSliderEffect328;
var saveInnerEffect321, saveInnerEffect322, saveInnerEffect323, saveInnerEffect324, saveInnerEffect325, saveInnerEffect326, saveInnerEffect327, saveInnerEffect328;
var saveInnerLowPass21, saveInnerLowPass22, saveInnerLowPass23, saveInnerLowPass24, saveInnerLowPass25, saveInnerLowPass26, saveInnerLowPass27, saveInnerLowPass28;
var saveSliderLowPass21, saveSliderLowPass22, saveSliderLowPass23, saveSliderLowPass24, saveSliderLowPass25, saveSliderLowPass26, saveSliderLowPass27, saveSliderLowPass28;
var saveInnerEQ21, saveInnerEQ22, saveInnerEQ23, saveInnerEQ24, saveInnerEQ25, saveInnerEQ26, saveInnerEQ27, saveInnerEQ28;
var saveSliderEQL21, saveSliderEQL22, saveSliderEQL23, saveSliderEQL24, saveSliderEQL25, saveSliderEQL26, saveSliderEQL27, saveSliderEQL28;
var saveSliderEQM21, saveSliderEQM22, saveSliderEQM23, saveSliderEQM24, saveSliderEQM25, saveSliderEQM26, saveSliderEQM27, saveSliderEQM28;
var saveSliderEQH21, saveSliderEQH22, saveSliderEQH23, saveSliderEQH24, saveSliderEQH25, saveSliderEQH26, saveSliderEQH27, saveSliderEQH28;
var saveInnerCompressor21, saveInnerCompressor22, saveInnerCompressor23, saveInnerCompressor24, saveInnerCompressor25, saveInnerCompressor26, saveInnerCompressor27, saveInnerCompressor28;
var saveSliderCompressor21, saveSliderCompressor22, saveSliderCompressor23, saveSliderCompressor24, saveSliderCompressor25, saveSliderCompressor26, saveSliderCompressor27, saveSliderCompressor28;
var saveSliderRate21, saveSliderRate22, saveSliderRate23, saveSliderRate24, saveSliderRate25, saveSliderRate26, saveSliderRate27, saveSliderRate28;
var saveSliderPan21, saveSliderPan22, saveSliderPan23, saveSliderPan24, saveSliderPan25, saveSliderPan26, saveSliderPan27, saveSliderPan28;
var saveSliderVolume21, saveSliderVolume22, saveSliderVolume23, saveSliderVolume24, saveSliderVolume25, saveSliderVolume26, saveSliderVolume27, saveSliderVolume28;

/*button 3*/
var saveSelecteur31, saveSelecteur32, saveSelecteur33, saveSelecteur34, saveSelecteur35, saveSelecteur36, saveSelecteur37, saveSelecteur38;
var saveSliderEffect131, saveSliderEffect132, saveSliderEffect133, saveSliderEffect134, saveSliderEffect135, saveSliderEffect136, saveSliderEffect137, saveSliderEffect138;
var saveInnerEffect131, saveInnerEffect132, saveInnerEffect133, saveInnerEffect134, saveInnerEffect135, saveInnerEffect136, saveInnerEffect137, saveInnerEffect138;
var saveSliderEffect231, saveSliderEffect232, saveSliderEffect233, saveSliderEffect234, saveSliderEffect235, saveSliderEffect236, saveSliderEffect237, saveSliderEffect238;
var saveInnerEffect231, saveInnerEffect232, saveInnerEffect233, saveInnerEffect234, saveInnerEffect235, saveInnerEffect236, saveInnerEffect237, saveInnerEffect238;
var saveSliderEffect331, saveSliderEffect332, saveSliderEffect333, saveSliderEffect334, saveSliderEffect335, saveSliderEffect336, saveSliderEffect337, saveSliderEffect338;
var saveInnerEffect331, saveInnerEffect332, saveInnerEffect33, saveInnerEffect334, saveInnerEffect335, saveInnerEffect336, saveInnerEffect337, saveInnerEffect338;
var saveInnerLowPass31, saveInnerLowPass32, saveInnerLowPass33, saveInnerLowPass34, saveInnerLowPass35, saveInnerLowPass36, saveInnerLowPass37, saveInnerLowPass38;
var saveSliderLowPass31, saveSliderLowPass32, saveSliderLowPass33, saveSliderLowPass34, saveSliderLowPass35, saveSliderLowPass36, saveSliderLowPass37, saveSliderLowPass38;
var saveInnerEQ31, saveInnerEQ32, saveInnerEQ33, saveInnerEQ34, saveInnerEQ35, saveInnerEQ36, saveInnerEQ37, saveInnerEQ38;
var saveSliderEQL31, saveSliderEQL32, saveSliderEQL33, saveSliderEQL34, saveSliderEQL35, saveSliderEQL36, saveSliderEQL37, saveSliderEQL38;
var saveSliderEQM31, saveSliderEQM32, saveSliderEQM33, saveSliderEQM34, saveSliderEQM35, saveSliderEQM36, saveSliderEQM37, saveSliderEQM38;
var saveSliderEQH31, saveSliderEQH32, saveSliderEQH33, saveSliderEQH34, saveSliderEQH35, saveSliderEQH36, saveSliderEQH37, saveSliderEQH38;
var saveInnerCompressor31, saveInnerCompressor32, saveInnerCompressor33, saveInnerCompressor34, saveInnerCompressor35, saveInnerCompressor36, saveInnerCompressor37, saveInnerCompressor38;
var saveSliderCompressor31, saveSliderCompressor32, saveSliderCompressor33, saveSliderCompressor34, saveSliderCompressor35, saveSliderCompressor36, saveSliderCompressor37, saveSliderCompressor38;
var saveSliderRate31, saveSliderRate312, saveSliderRate313, saveSliderRate314, saveSliderRate315, saveSliderRate316, saveSliderRate317, saveSliderRate318;
var saveSliderPan31, saveSliderPan32, saveSliderPan33, saveSliderPan34, saveSliderPan35, saveSliderPan36, saveSliderPan37, saveSliderPan38;
var saveSliderVolume31, saveSliderVolume32, saveSliderVolume33, saveSliderVolume34, saveSliderVolume35, saveSliderVolume36, saveSliderVolume37, saveSliderVolume38;

var fft, recorder, fileRecord, buttonRecord, caseRecord=0, boolSolo= false, BoolSolo = true, buttonDdl, masterPlay, masterVol;
var boolMasterPlay=false, boolPlay1, boolPlay2, boolPlay3, boolPlay4, boolPlay5, boolPlay6, boolPlay7, boolPlay8;

function preload() 
{
  effect11 = new p5.Reverb();
  effect12 = new p5.Reverb();
  effect13 = new p5.Reverb();
  effect14 = new p5.Reverb();
  effect15 = new p5.Reverb();
  effect16 = new p5.Reverb();
  effect17 = new p5.Reverb();
  effect18 = new p5.Reverb();
  effect21 = new p5.Reverb();
  effect22 = new p5.Reverb();
  effect23 = new p5.Reverb();
  effect24 = new p5.Reverb();
  effect25 = new p5.Reverb();
  effect26 = new p5.Reverb();
  effect27 = new p5.Reverb();
  effect28 = new p5.Reverb();
  effect31 = new p5.Reverb();
  effect32 = new p5.Reverb();
  effect33 = new p5.Reverb();
  effect34 = new p5.Reverb();
  effect35 = new p5.Reverb();
  effect36 = new p5.Reverb();
  effect37 = new p5.Reverb();
  effect38 = new p5.Reverb();
  effect11.amp(0);
  effect12.amp(0);
  effect13.amp(0);
  effect14.amp(0);
  effect15.amp(0);
  effect16.amp(0);
  effect17.amp(0);
  effect18.amp(0);
  effect21.amp(0);
  effect22.amp(0);
  effect23.amp(0);
  effect24.amp(0);
  effect25.amp(0);
  effect26.amp(0);
  effect27.amp(0);
  effect28.amp(0);
  effect31.amp(0);
  effect32.amp(0);
  effect33.amp(0);
  effect34.amp(0);
  effect35.amp(0);
  effect36.amp(0);
  effect37.amp(0);
  effect38.amp(0);

  /***inline effect***/
  compressor1 = new p5.Compressor();
  compressor2 = new p5.Compressor();
  compressor3 = new p5.Compressor();
  compressor4 = new p5.Compressor();
  compressor5 = new p5.Compressor();
  compressor6 = new p5.Compressor();
  compressor7 = new p5.Compressor();
  compressor8 = new p5.Compressor();

  myFilter1   = new p5.Filter();
  myFilter2   = new p5.LowPass();
  myFilter3   = new p5.LowPass();
  myFilter4   = new p5.LowPass();
  myFilter5   = new p5.LowPass();
  myFilter6   = new p5.LowPass();
  myFilter7   = new p5.LowPass();
  myFilter8   = new p5.LowPass();

  eq1         = new p5.EQ(3);
  eq2         = new p5.EQ(3);
  eq3         = new p5.EQ(3);
  eq4         = new p5.EQ(3);
  eq5         = new p5.EQ(3);
  eq6         = new p5.EQ(3);
  eq7         = new p5.EQ(3);
  eq8         = new p5.EQ(3);

  fft        = new p5.FFT(); 
  recorder   = new p5.SoundRecorder();
  fileRecord = new p5.SoundFile();
  colorMode(HSB);
  
  channel1 = loadSound("audio/11.mp3");
  channel2 = loadSound("audio/12.mp3");
  channel3 = loadSound("audio/13.mp3");
  channel4 = loadSound("audio/14.mp3");
  channel5 = loadSound("audio/15.mp3");
  channel6 = loadSound("audio/16.mp3");
  channel7 = loadSound("audio/17.mp3");
  channel8 = loadSound("audio/18.mp3");
}

function setup() 
{
  /*channel1 = loadSound("audio/11.mp3");
  channel2 = loadSound("audio/12.mp3");
  channel3 = loadSound("audio/13.mp3");
  channel4 = loadSound("audio/14.mp3");
  channel5 = loadSound("audio/15.mp3");
  channel6 = loadSound("audio/16.mp3");
  channel7 = loadSound("audio/17.mp3");
  channel8 = loadSound("audio/18.mp3");*/
  
  selectEffect11= document.getElementsByTagName("select")[0];
  selectEffect21= document.getElementsByTagName("select")[1];
  selectEffect31= document.getElementsByTagName("select")[2];
  selectEffect12= document.getElementsByTagName("select")[3];
  selectEffect22= document.getElementsByTagName("select")[4];
  selectEffect32= document.getElementsByTagName("select")[5];
  selectEffect13= document.getElementsByTagName("select")[6];
  selectEffect23= document.getElementsByTagName("select")[7];
  selectEffect33= document.getElementsByTagName("select")[8];
  selectEffect14= document.getElementsByTagName("select")[9];
  selectEffect24= document.getElementsByTagName("select")[10];
  selectEffect34= document.getElementsByTagName("select")[11];
  selectEffect15= document.getElementsByTagName("select")[12];
  selectEffect25= document.getElementsByTagName("select")[13];
  selectEffect35= document.getElementsByTagName("select")[14];
  selectEffect16= document.getElementsByTagName("select")[15];
  selectEffect26= document.getElementsByTagName("select")[16];
  selectEffect36= document.getElementsByTagName("select")[17];
  selectEffect17= document.getElementsByTagName("select")[18];
  selectEffect27= document.getElementsByTagName("select")[19];
  selectEffect37= document.getElementsByTagName("select")[20];
  selectEffect18= document.getElementsByTagName("select")[21];
  selectEffect28= document.getElementsByTagName("select")[22];
  selectEffect38= document.getElementsByTagName("select")[23];

  selectEffect11.addEventListener ('click' , selectEffect1Click1);
  selectEffect12.addEventListener ('click' , selectEffect1Click2);
  selectEffect13.addEventListener ('click' , selectEffect1Click3);
  selectEffect14.addEventListener ('click' , selectEffect1Click4);
  selectEffect15.addEventListener ('click' , selectEffect1Click5);
  selectEffect16.addEventListener ('click' , selectEffect1Click6);
  selectEffect17.addEventListener ('click' , selectEffect1Click7);
  selectEffect18.addEventListener ('click' , selectEffect1Click8);

  selectEffect21.addEventListener ('click' , selectEffect2Click1);
  selectEffect22.addEventListener ('click' , selectEffect2Click2);
  selectEffect23.addEventListener ('click' , selectEffect2Click3);
  selectEffect24.addEventListener ('click' , selectEffect2Click4);
  selectEffect25.addEventListener ('click' , selectEffect2Click5);
  selectEffect26.addEventListener ('click' , selectEffect2Click6);
  selectEffect27.addEventListener ('click' , selectEffect2Click7);
  selectEffect28.addEventListener ('click' , selectEffect2Click8);

  selectEffect31.addEventListener ('click' , selectEffect3Click1);
  selectEffect32.addEventListener ('click' , selectEffect3Click2);
  selectEffect33.addEventListener ('click' , selectEffect3Click3);
  selectEffect34.addEventListener ('click' , selectEffect3Click4);
  selectEffect35.addEventListener ('click' , selectEffect3Click5);
  selectEffect36.addEventListener ('click' , selectEffect3Click6);
  selectEffect37.addEventListener ('click' , selectEffect3Click7);
  selectEffect38.addEventListener ('click' , selectEffect3Click8);


/***declaration button***/
  buttonPlay1       = document.getElementsByTagName('button')[0];//CHANNEL 1
  buttonSong11      = document.getElementsByTagName('button')[1];
  buttonSong21      = document.getElementsByTagName('button')[2];
  buttonSong31      = document.getElementsByTagName('button')[3];
  ONOFFLowPass1     = document.getElementsByTagName('button')[4];
  ONOFFEQ1          = document.getElementsByTagName('button')[5];
  ONOFFCompressor1  = document.getElementsByTagName('button')[6];
  buttonMute1       = document.getElementsByTagName('button')[7]; 
  buttonSolo1       = document.getElementsByTagName('button')[8]; 
  buttonSave1       = document.getElementsByTagName('button')[9];

  buttonPlay2       = document.getElementsByTagName('button')[10];//CHANNEL2
  buttonSong12      = document.getElementsByTagName('button')[11];
  buttonSong22      = document.getElementsByTagName('button')[12];
  buttonSong32      = document.getElementsByTagName('button')[13];
  ONOFFLowPass2     = document.getElementsByTagName('button')[14];
  ONOFFEQ2          = document.getElementsByTagName('button')[15];
  ONOFFCompressor2  = document.getElementsByTagName('button')[16];
  buttonMute2       = document.getElementsByTagName('button')[17];
  buttonSolo2       = document.getElementsByTagName('button')[18];
  buttonSave2       = document.getElementsByTagName('button')[19];

  buttonPlay3       = document.getElementsByTagName('button')[20];//CHANNEL 3
  buttonSong13      = document.getElementsByTagName('button')[21];
  buttonSong23      = document.getElementsByTagName('button')[22];
  buttonSong33      = document.getElementsByTagName('button')[23];
  ONOFFLowPass3     = document.getElementsByTagName('button')[24];
  ONOFFEQ3          = document.getElementsByTagName('button')[25];
  ONOFFCompressor3  = document.getElementsByTagName('button')[26];
  buttonMute3       = document.getElementsByTagName('button')[27]; 
  buttonSolo3       = document.getElementsByTagName('button')[28];
  buttonSave3       = document.getElementsByTagName('button')[29];
  
  buttonPlay4       = document.getElementsByTagName('button')[30];//CHANNEL 4
  buttonSong14      = document.getElementsByTagName('button')[31];
  buttonSong24      = document.getElementsByTagName('button')[32];
  buttonSong34      = document.getElementsByTagName('button')[33];
  ONOFFLowPass4     = document.getElementsByTagName('button')[34];
  ONOFFEQ4          = document.getElementsByTagName('button')[35];
  ONOFFCompressor4  = document.getElementsByTagName('button')[36];
  buttonMute4       = document.getElementsByTagName('button')[37];
  buttonSolo4       = document.getElementsByTagName('button')[38]; 
  buttonSave4       = document.getElementsByTagName('button')[39];

  buttonPlay5       = document.getElementsByTagName('button')[40];//CHANNEL 5
  buttonSong15      = document.getElementsByTagName('button')[41];
  buttonSong25      = document.getElementsByTagName('button')[42];
  buttonSong35      = document.getElementsByTagName('button')[43];
  ONOFFLowPass5     = document.getElementsByTagName('button')[44];
  ONOFFEQ5          = document.getElementsByTagName('button')[45];
  ONOFFCompressor5  = document.getElementsByTagName('button')[46];
  buttonMute5       = document.getElementsByTagName('button')[47];
  buttonSolo5       = document.getElementsByTagName('button')[48]; 
  buttonSave5       = document.getElementsByTagName('button')[49];

  buttonPlay6       = document.getElementsByTagName('button')[50];//CHANNEL 6
  buttonSong16      = document.getElementsByTagName('button')[51];
  buttonSong26      = document.getElementsByTagName('button')[52];
  buttonSong36      = document.getElementsByTagName('button')[53];
  ONOFFLowPass6     = document.getElementsByTagName('button')[54];
  ONOFFEQ6          = document.getElementsByTagName('button')[55];
  ONOFFCompressor6  = document.getElementsByTagName('button')[56];
  buttonMute6       = document.getElementsByTagName('button')[57];
  buttonSolo6       = document.getElementsByTagName('button')[58]; 
  buttonSave6       = document.getElementsByTagName('button')[59];

  buttonPlay7       = document.getElementsByTagName('button')[60];//CHANNEL 7
  buttonSong17      = document.getElementsByTagName('button')[61];
  buttonSong27      = document.getElementsByTagName('button')[62];
  buttonSong37      = document.getElementsByTagName('button')[63];
  ONOFFLowPass7     = document.getElementsByTagName('button')[64];
  ONOFFEQ7          = document.getElementsByTagName('button')[65];
  ONOFFCompressor7  = document.getElementsByTagName('button')[66];
  buttonMute7       = document.getElementsByTagName('button')[67];
  buttonSolo7       = document.getElementsByTagName('button')[68]; 
  buttonSave7       = document.getElementsByTagName('button')[69];

  buttonPlay8       = document.getElementsByTagName('button')[70];//CHANNEL 8
  buttonSong18      = document.getElementsByTagName('button')[71];
  buttonSong28      = document.getElementsByTagName('button')[72];
  buttonSong38      = document.getElementsByTagName('button')[73];
  ONOFFLowPass8     = document.getElementsByTagName('button')[74];
  ONOFFEQ8          = document.getElementsByTagName('button')[75];
  ONOFFCompressor8  = document.getElementsByTagName('button')[76];
  buttonMute8       = document.getElementsByTagName('button')[77];
  buttonSolo8       = document.getElementsByTagName('button')[78]; 
  buttonSave8       = document.getElementsByTagName('button')[79];

  masterPlay= document.getElementsByTagName('button')[80];
  buttonRecord      = document.getElementsByTagName('button')[81];
  buttonDdl = document.getElementsByTagName('button')[82];

/***Event button ***/
  buttonPlay1.addEventListener     ('click', buttonPlayClick1);//When we click on the play button we launch this function
  buttonPlay2.addEventListener     ('click', buttonPlayClick2);
  buttonPlay3.addEventListener     ('click', buttonPlayClick3);
  buttonPlay4.addEventListener     ('click', buttonPlayClick4);
  buttonPlay5.addEventListener     ('click', buttonPlayClick5);
  buttonPlay6.addEventListener     ('click', buttonPlayClick6);
  buttonPlay7.addEventListener     ('click', buttonPlayClick7);
  buttonPlay8.addEventListener     ('click', buttonPlayClick8);

  buttonPlay1.addEventListener  ('dblclick', buttonPlayDblClick1);//When we double click on the play button we launch this function
  buttonPlay2.addEventListener  ('dblclick', buttonPlayDblClick2);
  buttonPlay3.addEventListener  ('dblclick', buttonPlayDblClick3);
  buttonPlay4.addEventListener  ('dblclick', buttonPlayDblClick4);
  buttonPlay5.addEventListener  ('dblclick', buttonPlayDblClick5);
  buttonPlay6.addEventListener  ('dblclick', buttonPlayDblClick6);
  buttonPlay7.addEventListener  ('dblclick', buttonPlayDblClick7);
  buttonPlay8.addEventListener  ('dblclick', buttonPlayDblClick8);

  buttonSong11.addEventListener    ('click', buttonSong1Click1);//When we click on the song1 button we launch this function
  buttonSong12.addEventListener    ('click', buttonSong1Click2);
  buttonSong13.addEventListener    ('click', buttonSong1Click3);
  buttonSong14.addEventListener    ('click', buttonSong1Click4);
  buttonSong15.addEventListener    ('click', buttonSong1Click5);
  buttonSong16.addEventListener    ('click', buttonSong1Click6);
  buttonSong17.addEventListener    ('click', buttonSong1Click7);
  buttonSong18.addEventListener    ('click', buttonSong1Click8);

  buttonSong21.addEventListener    ('click', buttonSong2Click1);
  buttonSong22.addEventListener    ('click', buttonSong2Click2);
  buttonSong23.addEventListener    ('click', buttonSong2Click3);
  buttonSong24.addEventListener    ('click', buttonSong2Click4);
  buttonSong25.addEventListener    ('click', buttonSong2Click5);
  buttonSong26.addEventListener    ('click', buttonSong2Click6);
  buttonSong27.addEventListener    ('click', buttonSong2Click7);
  buttonSong28.addEventListener    ('click', buttonSong2Click8);

  buttonSong31.addEventListener    ('click', buttonSong3Click1);
  buttonSong32.addEventListener    ('click', buttonSong3Click2);
  buttonSong33.addEventListener    ('click', buttonSong3Click3);
  buttonSong34.addEventListener    ('click', buttonSong3Click4);
  buttonSong35.addEventListener    ('click', buttonSong3Click5);
  buttonSong36.addEventListener    ('click', buttonSong3Click6);
  buttonSong37.addEventListener    ('click', buttonSong3Click7);
  buttonSong38.addEventListener    ('click', buttonSong3Click8);

  ONOFFLowPass1.addEventListener   ('click', ONOFFLowPassClick1); 
  ONOFFLowPass2.addEventListener   ('click', ONOFFLowPassClick2);  
  ONOFFLowPass3.addEventListener   ('click', ONOFFLowPassClick3); 
  ONOFFLowPass4.addEventListener   ('click', ONOFFLowPassClick4); 
  ONOFFLowPass5.addEventListener   ('click', ONOFFLowPassClick5); 
  ONOFFLowPass6.addEventListener   ('click', ONOFFLowPassClick6); 
  ONOFFLowPass7.addEventListener   ('click', ONOFFLowPassClick7); 
  ONOFFLowPass8.addEventListener   ('click', ONOFFLowPassClick8); 

  ONOFFEQ1.addEventListener        ('click', ONOFFEQClick1);  
  ONOFFEQ2.addEventListener        ('click', ONOFFEQClick2);  
  ONOFFEQ3.addEventListener        ('click', ONOFFEQClick3);  
  ONOFFEQ4.addEventListener        ('click', ONOFFEQClick4);  
  ONOFFEQ5.addEventListener        ('click', ONOFFEQClick5);  
  ONOFFEQ6.addEventListener        ('click', ONOFFEQClick6);  
  ONOFFEQ7.addEventListener        ('click', ONOFFEQClick7);  
  ONOFFEQ8.addEventListener        ('click', ONOFFEQClick8);  

  ONOFFCompressor1.addEventListener('click', ONOFFCompressorClick1);
  ONOFFCompressor2.addEventListener('click', ONOFFCompressorClick2);
  ONOFFCompressor3.addEventListener('click', ONOFFCompressorClick3);
  ONOFFCompressor4.addEventListener('click', ONOFFCompressorClick4);
  ONOFFCompressor5.addEventListener('click', ONOFFCompressorClick5);
  ONOFFCompressor6.addEventListener('click', ONOFFCompressorClick6);
  ONOFFCompressor7.addEventListener('click', ONOFFCompressorClick7);
  ONOFFCompressor8.addEventListener('click', ONOFFCompressorClick8);

  buttonMute1.addEventListener     ('click', buttonMuteClick1);
  buttonMute2.addEventListener     ('click', buttonMuteClick2);
  buttonMute3.addEventListener     ('click', buttonMuteClick3);
  buttonMute4.addEventListener     ('click', buttonMuteClick4);
  buttonMute5.addEventListener     ('click', buttonMuteClick5);
  buttonMute6.addEventListener     ('click', buttonMuteClick6);
  buttonMute7.addEventListener     ('click', buttonMuteClick7);
  buttonMute8.addEventListener     ('click', buttonMuteClick8);

  buttonSolo1.addEventListener     ('click', buttonSoloClick1);
  buttonSolo2.addEventListener     ('click', buttonSoloClick2);
  buttonSolo3.addEventListener     ('click', buttonSoloClick3);
  buttonSolo4.addEventListener     ('click', buttonSoloClick4);
  buttonSolo5.addEventListener     ('click', buttonSoloClick5);
  buttonSolo6.addEventListener     ('click', buttonSoloClick6);
  buttonSolo7.addEventListener     ('click', buttonSoloClick7);
  buttonSolo8.addEventListener     ('click', buttonSoloClick8);

  buttonSave1.addEventListener     ('click', buttonSaveClick1);
  buttonSave2.addEventListener     ('click', buttonSaveClick2);
  buttonSave3.addEventListener     ('click', buttonSaveClick3);
  buttonSave4.addEventListener     ('click', buttonSaveClick4);
  buttonSave5.addEventListener     ('click', buttonSaveClick5);
  buttonSave6.addEventListener     ('click', buttonSaveClick6);
  buttonSave7.addEventListener     ('click', buttonSaveClick7);
  buttonSave8.addEventListener     ('click', buttonSaveClick8);

  buttonRecord.addEventListener    ('click', buttonRecordClik);
  buttonDdl.addEventListener    ('click', buttonDdlClik);
  masterPlay.addEventListener    ('click', buttonMasterPlayClick);

  var b = createButton("drop the setting file", 100);
  b.drop(gotFile);
  canvas = createCanvas(700, 350);
  

/***declaration slider***/
  sliderEffect11    = document.getElementsByTagName('input')[0];//CHANNEL 1
  sliderEffect21    = document.getElementsByTagName('input')[1];
  sliderEffect31    = document.getElementsByTagName('input')[2];
  sliderLowPass1    = document.getElementsByTagName('input')[3];
  sliderEqLow1      = document.getElementsByTagName('input')[4];
  sliderEqMid1      = document.getElementsByTagName('input')[5];
  sliderEqHight1    = document.getElementsByTagName('input')[6];
  sliderCompressor1 = document.getElementsByTagName('input')[7];
  sliderRate1       = document.getElementsByTagName('input')[8];
  sliderPan1        = document.getElementsByTagName('input')[9];
  sliderVolume1     = document.getElementsByTagName('input')[10];

  sliderEffect12    = document.getElementsByTagName('input')[11];//CHANNEL 2
  sliderEffect22    = document.getElementsByTagName('input')[12];
  sliderEffect32    = document.getElementsByTagName('input')[13];
  sliderLowPass2    = document.getElementsByTagName('input')[14];
  sliderEqLow2      = document.getElementsByTagName('input')[15];
  sliderEqMid2      = document.getElementsByTagName('input')[16];
  sliderEqHight2    = document.getElementsByTagName('input')[17];
  sliderCompressor2 = document.getElementsByTagName('input')[18];
  sliderRate2       = document.getElementsByTagName('input')[19];
  sliderPan2        = document.getElementsByTagName('input')[20];
  sliderVolume2     = document.getElementsByTagName('input')[21];

  sliderEffect13    = document.getElementsByTagName('input')[22];//CHANNEL 3
  sliderEffect23    = document.getElementsByTagName('input')[23];
  sliderEffect33    = document.getElementsByTagName('input')[24];
  sliderLowPass3    = document.getElementsByTagName('input')[25];
  sliderEqLow3      = document.getElementsByTagName('input')[26];
  sliderEqMid3      = document.getElementsByTagName('input')[27];
  sliderEqHight3    = document.getElementsByTagName('input')[28];
  sliderCompressor3 = document.getElementsByTagName('input')[29];
  sliderRate3       = document.getElementsByTagName('input')[30];
  sliderPan3        = document.getElementsByTagName('input')[31];
  sliderVolume3     = document.getElementsByTagName('input')[32];

  sliderEffect14    = document.getElementsByTagName('input')[33];//CHANNEL 4
  sliderEffect24    = document.getElementsByTagName('input')[34];
  sliderEffect34    = document.getElementsByTagName('input')[35];
  sliderLowPass4    = document.getElementsByTagName('input')[36];
  sliderEqLow4      = document.getElementsByTagName('input')[37];
  sliderEqMid4      = document.getElementsByTagName('input')[38];
  sliderEqHight4    = document.getElementsByTagName('input')[39];
  sliderCompressor4 = document.getElementsByTagName('input')[40];
  sliderRate4       = document.getElementsByTagName('input')[41];
  sliderPan4        = document.getElementsByTagName('input')[42];
  sliderVolume4     = document.getElementsByTagName('input')[43];

  sliderEffect15    = document.getElementsByTagName('input')[44];//CHANNEL 5
  sliderEffect25    = document.getElementsByTagName('input')[45];
  sliderEffect35    = document.getElementsByTagName('input')[46];
  sliderLowPass5    = document.getElementsByTagName('input')[47];
  sliderEqLow5      = document.getElementsByTagName('input')[48];
  sliderEqMid5      = document.getElementsByTagName('input')[49];
  sliderEqHight5    = document.getElementsByTagName('input')[50];
  sliderCompressor5 = document.getElementsByTagName('input')[51];
  sliderRate5       = document.getElementsByTagName('input')[52];
  sliderPan5        = document.getElementsByTagName('input')[53];
  sliderVolume5     = document.getElementsByTagName('input')[54];

  sliderEffect16    = document.getElementsByTagName('input')[55];//CHANNEL 6
  sliderEffect26    = document.getElementsByTagName('input')[56];
  sliderEffect36    = document.getElementsByTagName('input')[57];
  sliderLowPass6    = document.getElementsByTagName('input')[58];
  sliderEqLow6      = document.getElementsByTagName('input')[59];
  sliderEqMid6      = document.getElementsByTagName('input')[60];
  sliderEqHight6    = document.getElementsByTagName('input')[61];
  sliderCompressor6 = document.getElementsByTagName('input')[62];
  sliderRate6       = document.getElementsByTagName('input')[63];
  sliderPan6        = document.getElementsByTagName('input')[64];
  sliderVolume6     = document.getElementsByTagName('input')[65];

  sliderEffect17    = document.getElementsByTagName('input')[66];//CHANNEL 7
  sliderEffect27    = document.getElementsByTagName('input')[67];
  sliderEffect37    = document.getElementsByTagName('input')[68];
  sliderLowPass7    = document.getElementsByTagName('input')[69];
  sliderEqLow7      = document.getElementsByTagName('input')[70];
  sliderEqMid7      = document.getElementsByTagName('input')[71];
  sliderEqHight7    = document.getElementsByTagName('input')[72];
  sliderCompressor7 = document.getElementsByTagName('input')[73];
  sliderRate7       = document.getElementsByTagName('input')[74];
  sliderPan7        = document.getElementsByTagName('input')[75];
  sliderVolume7     = document.getElementsByTagName('input')[76];

  sliderEffect18    = document.getElementsByTagName('input')[77];//CHANNEL 8
  sliderEffect28    = document.getElementsByTagName('input')[78];
  sliderEffect38    = document.getElementsByTagName('input')[79];
  sliderLowPass8    = document.getElementsByTagName('input')[80];
  sliderEqLow8      = document.getElementsByTagName('input')[81];
  sliderEqMid8      = document.getElementsByTagName('input')[82];
  sliderEqHight8    = document.getElementsByTagName('input')[83];
  sliderCompressor8 = document.getElementsByTagName('input')[84];
  sliderRate8       = document.getElementsByTagName('input')[85];
  sliderPan8        = document.getElementsByTagName('input')[86];
  sliderVolume8     = document.getElementsByTagName('input')[87];

  masterVol = document.getElementsByTagName('input')[88];

/***Event slider***/
  sliderEffect11.addEventListener   ('mousedown' , sliderEffect1MouseDown1);
  sliderEffect12.addEventListener   ('mousedown' , sliderEffect1MouseDown2);
  sliderEffect13.addEventListener   ('mousedown' , sliderEffect1MouseDown3);
  sliderEffect14.addEventListener   ('mousedown' , sliderEffect1MouseDown4);
  sliderEffect15.addEventListener   ('mousedown' , sliderEffect1MouseDown5);
  sliderEffect16.addEventListener   ('mousedown' , sliderEffect1MouseDown6);
  sliderEffect17.addEventListener   ('mousedown' , sliderEffect1MouseDown7);
  sliderEffect18.addEventListener   ('mousedown' , sliderEffect1MouseDown8);

  sliderEffect21.addEventListener   ('mousedown' , sliderEffect2MouseDown1);
  sliderEffect22.addEventListener   ('mousedown' , sliderEffect2MouseDown2);
  sliderEffect23.addEventListener   ('mousedown' , sliderEffect2MouseDown3);
  sliderEffect24.addEventListener   ('mousedown' , sliderEffect2MouseDown4);
  sliderEffect25.addEventListener   ('mousedown' , sliderEffect2MouseDown5);
  sliderEffect26.addEventListener   ('mousedown' , sliderEffect2MouseDown6);
  sliderEffect27.addEventListener   ('mousedown' , sliderEffect2MouseDown7);
  sliderEffect28.addEventListener   ('mousedown' , sliderEffect2MouseDown8);

  sliderEffect31.addEventListener   ('mousedown' , sliderEffect3MouseDown1);
  sliderEffect32.addEventListener   ('mousedown' , sliderEffect3MouseDown2);
  sliderEffect33.addEventListener   ('mousedown' , sliderEffect3MouseDown3);
  sliderEffect34.addEventListener   ('mousedown' , sliderEffect3MouseDown4);
  sliderEffect35.addEventListener   ('mousedown' , sliderEffect3MouseDown5);
  sliderEffect36.addEventListener   ('mousedown' , sliderEffect3MouseDown6);
  sliderEffect37.addEventListener   ('mousedown' , sliderEffect3MouseDown7);
  sliderEffect38.addEventListener   ('mousedown' , sliderEffect3MouseDown8);

  sliderLowPass1.addEventListener   ('mousedown' , sliderLowPassMouseDown1);
  sliderLowPass2.addEventListener   ('mousedown' , sliderLowPassMouseDown2);
  sliderLowPass3.addEventListener   ('mousedown' , sliderLowPassMouseDown3);
  sliderLowPass4.addEventListener   ('mousedown' , sliderLowPassMouseDown4);
  sliderLowPass5.addEventListener   ('mousedown' , sliderLowPassMouseDown5);
  sliderLowPass6.addEventListener   ('mousedown' , sliderLowPassMouseDown6);
  sliderLowPass7.addEventListener   ('mousedown' , sliderLowPassMouseDown7);
  sliderLowPass8.addEventListener   ('mousedown' , sliderLowPassMouseDown8);

  sliderEqLow1.addEventListener     ('mousedown' , sliderEqLowMouseDown1);
  sliderEqLow2.addEventListener     ('mousedown' , sliderEqLowMouseDown2);
  sliderEqLow3.addEventListener     ('mousedown' , sliderEqLowMouseDown3);
  sliderEqLow4.addEventListener     ('mousedown' , sliderEqLowMouseDown4);
  sliderEqLow5.addEventListener     ('mousedown' , sliderEqLowMouseDown5);
  sliderEqLow6.addEventListener     ('mousedown' , sliderEqLowMouseDown6);
  sliderEqLow7.addEventListener     ('mousedown' , sliderEqLowMouseDown7);
  sliderEqLow8.addEventListener     ('mousedown' , sliderEqLowMouseDown8);

  sliderEqMid1.addEventListener     ('mousedown' , sliderEqMidMouseDown1);
  sliderEqMid2.addEventListener     ('mousedown' , sliderEqMidMouseDown2);
  sliderEqMid3.addEventListener     ('mousedown' , sliderEqMidMouseDown3);
  sliderEqMid4.addEventListener     ('mousedown' , sliderEqMidMouseDown4);
  sliderEqMid5.addEventListener     ('mousedown' , sliderEqMidMouseDown5);
  sliderEqMid6.addEventListener     ('mousedown' , sliderEqMidMouseDown6);
  sliderEqMid7.addEventListener     ('mousedown' , sliderEqMidMouseDown7);
  sliderEqMid8.addEventListener     ('mousedown' , sliderEqMidMouseDown8);

  sliderEqHight1.addEventListener   ('mousedown' , sliderEqHightMouseDown1);
  sliderEqHight2.addEventListener   ('mousedown' , sliderEqHightMouseDown2);
  sliderEqHight3.addEventListener   ('mousedown' , sliderEqHightMouseDown3);
  sliderEqHight4.addEventListener   ('mousedown' , sliderEqHightMouseDown4);
  sliderEqHight5.addEventListener   ('mousedown' , sliderEqHightMouseDown5);
  sliderEqHight6.addEventListener   ('mousedown' , sliderEqHightMouseDown6);
  sliderEqHight7.addEventListener   ('mousedown' , sliderEqHightMouseDown7);
  sliderEqHight8.addEventListener   ('mousedown' , sliderEqHightMouseDown8);

  sliderCompressor1.addEventListener('mousedown' , sliderCompressorMouseDown1);
  sliderCompressor2.addEventListener('mousedown' , sliderCompressorMouseDown2);
  sliderCompressor3.addEventListener('mousedown' , sliderCompressorMouseDown3);
  sliderCompressor4.addEventListener('mousedown' , sliderCompressorMouseDown4);
  sliderCompressor5.addEventListener('mousedown' , sliderCompressorMouseDown5);
  sliderCompressor6.addEventListener('mousedown' , sliderCompressorMouseDown6);
  sliderCompressor4.addEventListener('mousedown' , sliderCompressorMouseDown7);
  sliderCompressor8.addEventListener('mousedown' , sliderCompressorMouseDown8);

  sliderRate1.addEventListener      ('mousedown' , sliderRateMouseDown1);
  sliderRate2.addEventListener      ('mousedown' , sliderRateMouseDown2);
  sliderRate3.addEventListener      ('mousedown' , sliderRateMouseDown3);
  sliderRate4.addEventListener      ('mousedown' , sliderRateMouseDown4);
  sliderRate5.addEventListener      ('mousedown' , sliderRateMouseDown5);
  sliderRate6.addEventListener      ('mousedown' , sliderRateMouseDown6);
  sliderRate7.addEventListener      ('mousedown' , sliderRateMouseDown7);
  sliderRate8.addEventListener      ('mousedown' , sliderRateMouseDown8);

  sliderPan1.addEventListener       ('mousedown' , sliderPanMouseDown1);
  sliderPan2.addEventListener       ('mousedown' , sliderPanMouseDown2);
  sliderPan3.addEventListener       ('mousedown' , sliderPanMouseDown3);
  sliderPan4.addEventListener       ('mousedown' , sliderPanMouseDown4);
  sliderPan5.addEventListener       ('mousedown' , sliderPanMouseDown5);
  sliderPan6.addEventListener       ('mousedown' , sliderPanMouseDown6);
  sliderPan7.addEventListener       ('mousedown' , sliderPanMouseDown7);
  sliderPan8.addEventListener       ('mousedown' , sliderPanMouseDown8);

  sliderVolume1.addEventListener    ('mousedown' , sliderVolumeMouseDown1);
  sliderVolume2.addEventListener    ('mousedown' , sliderVolumeMouseDown2);
  sliderVolume3.addEventListener    ('mousedown' , sliderVolumeMouseDown3);
  sliderVolume4.addEventListener    ('mousedown' , sliderVolumeMouseDown4);
  sliderVolume5.addEventListener    ('mousedown' , sliderVolumeMouseDown5);
  sliderVolume6.addEventListener    ('mousedown' , sliderVolumeMouseDown6);
  sliderVolume7.addEventListener    ('mousedown' , sliderVolumeMouseDown7);
  sliderVolume8.addEventListener    ('mousedown' , sliderVolumeMouseDown8);

  masterVol.addEventListener    ('mousedown' , masterVolMouseDown);

/***INLINE EFFECT***/
  //myFilter1.process(channel1);
  myFilter2.process(channel2);
  myFilter3.process(channel3);
  myFilter4.process(channel4);
  myFilter5.process(channel5);
  myFilter6.process(channel6);
  myFilter7.process(channel7);
  myFilter8.process(channel8);
  channel1.connect(myFilter1); 

  eq1.process(channel1);
  eq2.process(channel2);
  eq3.process(channel3);
  eq4.process(channel4);
  eq5.process(channel5);
  eq6.process(channel6);
  eq7.process(channel7);
  eq8.process(channel8);

  compressor1.process(channel1);
  compressor2.process(channel2);
  compressor3.process(channel3);
  compressor4.process(channel4);
  compressor5.process(channel5);
  compressor6.process(channel6);
  compressor7.process(channel7);
  compressor8.process(channel8);
  
  console.log("loadOK"); //all set ok
}

/**********PAUSE AND PLAY THE MUSIC**********/
function buttonMasterPlayClick()
{
  if (boolMasterPlay == true)             
  {
    channel1.stop();
    channel2.stop();
    channel3.stop();
    channel4.stop();
    channel5.stop();
    channel6.stop();
    channel7.stop();
    channel8.stop();
    masterPlay.style.background = "url(image/masterpause.png)";
    masterPlay.style.backgroundSize = "100%";
    buttonPlay1.style.opacity = "0.4";
    buttonPlay2.style.opacity = "0.4";
    buttonPlay3.style.opacity = "0.4";
    buttonPlay4.style.opacity = "0.4";
    buttonPlay5.style.opacity = "0.4";
    buttonPlay6.style.opacity = "0.4";
    buttonPlay7.style.opacity = "0.4";
    buttonPlay8.style.opacity = "0.4";
    boolMasterPlay = false;
  }
  else
  {
    masterPlay.style.background = "url(image/masterplay.png)";
    masterPlay.style.backgroundSize = "100%";
    if (boolPlay1 == true)
    {
      channel1.loop()
    }
    if (boolPlay2 == true)
    {
      channel2.loop()
    }
    if (boolPlay3 == true)
    {
      channel3.loop()
    }
    if (boolPlay4 == true)
    {
      channel4.loop()
    }
    if (boolPlay5 == true)
    {
      channel5.loop()
    }
    if (boolPlay6 == true)
    {
      channel6.loop()
    }
    if (boolPlay7 == true)
    {
      channel7.loop()
    }
    if (boolPlay8 == true)
    {
      channel8.loop()
    }
    buttonPlay1.style.opacity = "1";
    buttonPlay2.style.opacity = "1";
    buttonPlay3.style.opacity = "1";
    buttonPlay4.style.opacity = "1";
    buttonPlay5.style.opacity = "1";
    buttonPlay6.style.opacity = "1";
    buttonPlay7.style.opacity = "1";
    buttonPlay8.style.opacity = "1";
    boolMasterPlay = true;
  }
}

function buttonPlayClick1()                     //CHANNEL 1
{
   if (boolMasterPlay == true)
   {
      if (boolPlay1 == true)
      {
        buttonPlay1.style.background = "url(image/pause.png)";
        buttonPlay1.style.backgroundSize = "100%";
        channel1.pause();
        boolPlay1= false
      }
      else 
      {
        buttonPlay1.style.background = "url(image/play.png)";
        buttonPlay1.style.backgroundSize = "100%";
        channel1.loop();
        boolPlay1 = true
      }
   }
   else
   {
      if (boolPlay1 == true)
      {
        buttonPlay1.style.background = "url(image/pause.png)";
        buttonPlay1.style.backgroundSize = "100%";
        boolPlay1= false;
      }
      else 
      {
        buttonPlay1.style.background = "url(image/play.png)";
        buttonPlay1.style.backgroundSize = "100%";
        boolPlay1=true;
      }
    }
}
function buttonPlayClick2()        //CHANNEL 2
{
   if (boolMasterPlay == true)
   {
      if (boolPlay2 == true)
      {
        buttonPlay2.style.background = "url(image/pause.png)";
        buttonPlay2.style.backgroundSize = "100%";
        channel2.pause();
        boolPlay2=false;
      }
      else 
      {
        buttonPlay2.style.background = "url(image/play.png)";
        buttonPlay2.style.backgroundSize = "100%";
        channel2.loop();
        boolPlay2=true;
      }
   }
   else
   {
      if (boolPlay2 == true)
      {
        buttonPlay2.style.background = "url(image/pause.png)";
        boolPlay2=false;
      }
      else 
      {
        buttonPlay2.style.background = "url(image/play.png)";
        buttonPlay2.style.backgroundSize = "100%";
        boolPlay2=true;
      }
    }
}
function buttonPlayClick3()        //CHANNEL 3
{
   if (boolMasterPlay == true)
   {
      if (boolPlay3 == true)
      {
        buttonPlay3.style.background = "url(image/pause.png)";
        buttonPlay3.style.backgroundSize = "100%";
        channel3.pause();
        boolPlay3=false;
      }
      else 
      {
        buttonPlay3.style.background = "url(image/play.png)";
        buttonPlay3.style.backgroundSize = "100%";
        channel3.loop();
        boolPlay3=true;
      }
   }
   else
   {
      if (boolPlay3 == true)
      {
        buttonPlay3.style.background = "url(image/pause.png)";
        buttonPlay3.style.backgroundSize = "100%";
        boolPlay3=false;
      }
      else 
      {
        buttonPlay3.style.background = "url(image/play.png)";
        buttonPlay3.style.backgroundSize = "100%";
        boolPlay3=true;
      }
    }
}
function buttonPlayClick4()        //CHANNEL 4
{
   if (boolMasterPlay == true)
   {
      if (boolPlay4 == true)
      {
        buttonPlay4.style.background = "url(image/pause.png)";
        buttonPlay4.style.backgroundSize = "100%";
        channel4.pause();
        boolPlay4=false;
      }
      else 
      {
        buttonPlay4.style.background = "url(image/play.png)";
        buttonPlay4.style.backgroundSize = "100%";
        channel4.loop();
        boolPlay4=true;
      }
   }
   else
   {
      if (boolPlay4 == true)
      {
        buttonPlay4.style.background = "url(image/pause.png)";
        buttonPlay4.style.backgroundSize = "100%";
        boolPlay4=false;
      }
      else 
      {
        buttonPlay4.style.background = "url(image/play.png)";
        buttonPlay4.style.backgroundSize = "100%";
        boolPlay4=true;
      }
    }
}
function buttonPlayClick5()        //CHANNEL 5
{
   if (boolMasterPlay == true)
   {
      if (boolPlay5 == true)
      {
        buttonPlay5.style.background = "url(image/pause.png)";
        buttonPlay5.style.backgroundSize = "100%";
        channel5.pause();
        boolPlay5=false;
      }
      else 
      {
        buttonPlay5.style.background = "url(image/play.png)";
        buttonPlay5.style.backgroundSize = "100%";
        channel5.loop();
        boolPlay5= true;
      }
   }
   else
   {
      if (boolPlay5 == true)
      {
        buttonPlay5.style.background = "url(image/pause.png)";
        buttonPlay5.style.backgroundSize = "100%";
        boolPlay5=false;
      }
      else 
      {
        buttonPlay5.style.background = "url(image/play.png)";
        buttonPlay5.style.backgroundSize = "100%";
        boolPlay5=true;
      }
    }
}
function buttonPlayClick6()        //CHANNEL 6
{
   if (boolMasterPlay == true)
   {
      if (boolPlay6 == true)
      {
        buttonPlay6.style.background = "url(image/pause.png)";
        buttonPlay6.style.backgroundSize = "100%";
        channel6.pause();
        boolPlay6=false;
      }
      else 
      {
        buttonPlay6.style.background = "url(image/play.png)";
        buttonPlay6.style.backgroundSize = "100%";
        channel6.loop();
        boolPlay6=true;
      }
   }
   else
   {
      if (boolPlay6 == true)
      {
        buttonPlay6.style.background = "url(image/pause.png)";
        buttonPlay6.style.backgroundSize = "100%";
        boolPlay6=false;
      }
      else 
      {
        buttonPlay6.style.background = "url(image/play.png)";
        buttonPlay6.style.backgroundSize = "100%";
        boolPlay6=true;
      }
    }
}
function buttonPlayClick7()        //CHANNEL 7
{
   if (boolMasterPlay == true)
   {
      if (boolPlay7 == true)
      {
        buttonPlay7.style.background = "url(image/pause.png)";
        buttonPlay7.style.backgroundSize = "100%";
        channel7.pause();
        boolPlay7=false;
      }
      else 
      {
        buttonPlay7.style.background = "url(image/play.png)";
        buttonPlay7.style.backgroundSize = "100%";
        channel7.loop();
        boolPlay7=true;
      }
   }
   else
   {
      if (boolPlay7 == true)
      {
        buttonPlay7.style.background = "url(image/pause.png)";
        buttonPlay7.style.backgroundSize = "100%";
        boolPlay7=false;
      }
      else 
      {
        buttonPlay7.style.background = "url(image/play.png)";
        buttonPlay7.style.backgroundSize = "100%";
        boolPlay7=true;
      }
    }
}
function buttonPlayClick8()        //CHANNEL 8
{
   if (boolMasterPlay == true)
   {
      if (boolPlay8 == true)
      {
        buttonPlay8.style.background = "url(image/pause.png)";
        buttonPlay8.style.backgroundSize = "100%";
        channel8.pause();
        boolPlay8=false;
      }
      else 
      {
        buttonPlay8.style.background = "url(image/play.png)";
        buttonPlay8.style.backgroundSize = "100%";
        channel8.loop();
        boolPlay8=true;
      }
   }
   else
   {
      if (boolPlay8 == true)
      {
        buttonPlay8.style.background = "url(image/pause.png)";
        buttonPlay8.style.backgroundSize = "100%";
        boolPlay8=false;
      }
      else 
      {
        buttonPlay8.style.background = "url(image/play.png)";
        buttonPlay8.style.backgroundSize = "100%";
        boolPlay8=true;
      }
    }
}

/**********STOP THE MUSIC**********/
function buttonPlayDblClick1()     //CHANNEL 1
{
  channel1.stop();
}
function buttonPlayDblClick2()   //CHANNEL 2
{
  channel2.stop();
}
function buttonPlayDblClick3()   //CHANNEL 3
{
  channel3.stop();
}
function buttonPlayDblClick4()   //CHANNEL 4
{
  channel4.stop();
}
function buttonPlayDblClick5()   //CHANNEL 5
{
  channel5.stop();
}
function buttonPlayDblClick6()   //CHANNEL 6
{
  channel6.stop();
}
function buttonPlayDblClick7()   //CHANNEL 7
{
  channel7.stop();
}
function buttonPlayDblClick8()   //CHANNEL 8
{
  channel8.stop();
}


/**********WE SELECT THE FIRST MUSIC**********/
function buttonSong1Click1()           //CHANNEL 1
{
  channel1.disconnect();               //we remove the last music
  channel1 = loadSound("audio/11.mp3");//we lauch the new one

  channel1.disconnect();              //we go though the inline effect
  myFilter1.process(channel1);
  eq1.process(channel1);

  selecteur1=1;
}
function buttonSong1Click2()           //CHANNEL 2
{
  channel2.disconnect();
  channel2 = loadSound("audio/12.mp3");

  channel2.disconnect();
  myFilter2.process(channel2);
  eq2.process(channel2);

  selecteur2=1;
}
function buttonSong1Click3()           //CHANNEL 3
{
  channel3.disconnect();
  channel3 = loadSound("audio/13.mp3");

  channel3.disconnect();
  myFilter3.process(channel3);
  eq3.process(channel3);

  selecteur3=1;
}
function buttonSong1Click4()           //CHANNEL 4
{
  channel4.disconnect();
  channel4 = loadSound("audio/14.mp3");

  channel4.disconnect();
  myFilter4.process(channel4);
  eq4.process(channel4);

  selecteur4=1;
}
function buttonSong1Click5()           //CHANNEL 5
{
  channel5.disconnect();
  channel5 = loadSound("audio/15.mp3");

  channel5.disconnect();
  myFilter5.process(channel5);
  eq5.process(channel5);

  selecteur5=1;
}
function buttonSong1Click6()           //CHANNEL 6
{
  channel6.disconnect();
  channel6 = loadSound("audio/16.mp3");

  channel6.disconnect();
  myFilter6.process(channel6);
  eq6.process(channel6);

  selecteur6=1;
}
function buttonSong1Click7()           //CHANNEL 7
{
  channel7.disconnect();
  channel7 = loadSound("audio/17.mp3");

  channel7.disconnect();
  myFilter7.process(channel7);
  eq7.process(channel7);

  selecteur7=1;
}
function buttonSong1Click8()           //CHANNEL 8
{
  channel8.disconnect();
  channel8 = loadSound("audio/18.mp3");

  channel8.disconnect();
  myFilter8.process(channel8);
  eq8.process(channel8);

  selecteur8=1;
}


/**********WE SELECT THE SECONDE MUSIC**********/
function buttonSong2Click1()           //CHANNEL 1
{
  channel1.disconnect();
  channel1 = loadSound("audio/21.mp3");

  channel1.disconnect();
  myFilter1.process(channel1);
  eq1.process(channel1);

  selecteur1=2;
}
function buttonSong2Click2()           //CHANNEL 2
{
  channel2.disconnect();
  channel2 = loadSound("audio/22.mp3");

  channel2.disconnect();
  myFilter2.process(channel1);
  eq2.process(channel1);

  selecteur2=2;
}
function buttonSong2Click3()           //CHANNEL 3
{
  channel3.disconnect();
  channel3 = loadSound("audio/23.mp3");

  channel3.disconnect();
  myFilter3.process(channel3);
  eq3.process(channel3);

  selecteur3=2;
}
function buttonSong2Click4()           //CHANNEL 4
{
  channel4.disconnect();
  channel4 = loadSound("audio/24.mp3");

  channel4.disconnect();
  myFilter4.process(channel4);
  eq4.process(channel4);

  selecteur4=2;
}
function buttonSong2Click5()           //CHANNEL 5
{
  channel5.disconnect();
  channel5 = loadSound("audio/25.mp3");

  channel5.disconnect();
  myFilter5.process(channel5);
  eq5.process(channel5);

  selecteur5=2;
}
function buttonSong2Click6()           //CHANNEL 6
{
  channel6.disconnect();
  channel6 = loadSound("audio/26.mp3");

  channel6.disconnect();
  myFilter6.process(channel1);
  eq6.process(channel6);

  selecteur6=2;
}
function buttonSong2Click7()           //CHANNEL 7
{
  channel7.disconnect();
  channel7 = loadSound("audio/27.mp3");

  channel7.disconnect();
  myFilter7.process(channel7);
  eq7.process(channel7);

  selecteur7=2;
}
function buttonSong2Click8()           //CHANNEL 8
{
  channel8.disconnect();
  channel8 = loadSound("audio/28.mp3");

  channel8.disconnect();
  myFilter8.process(channel8);
  eq8.process(channel8);

  selecteur8=2;
}


/******************************WE SELECT THE THIRD MUSIC******************************/
function buttonSong3Click1()           //CHANNEL 1
{
  channel1.disconnect();
  channel1 = loadSound("audio/31.mp3");

  channel1.disconnect();
  myFilter1.process(channel1);
  eq1.process(channel1);

  selecteur1=3;
}
function buttonSong3Click2()           //CHANNEL 2
{
  channel2.disconnect();
  channel2 = loadSound("audio/32.mp3");

  channel1.disconnect();
  myFilter1.process(channel1);
  eq1.process(channel1);

  selecteur1=3;
}
function buttonSong3Click3()           //CHANNEL 3
{
  channel3.disconnect();
  channel3 = loadSound("audio/33.mp3");

  channel3.disconnect();
  myFilter3.process(channel3);
  eq3.process(channel3);

  selecteur3=3;
}
function buttonSong3Click4()           //CHANNEL 4
{
  channel4.disconnect();
  channel4 = loadSound("audio/34.mp3");

  channel4.disconnect();
  myFilter4.process(channel4);
  eq4.process(channel4);

  selecteur4=3;
}
function buttonSong3Click5()           //CHANNEL 5
{
  channel5.disconnect();
  channel5 = loadSound("audio/35.mp3");

  channel5.disconnect();
  myFilter5.process(channel5);
  eq5.process(channel5);

  selecteur5=3;
}
function buttonSong3Click6()           //CHANNEL 6
{
  channel6.disconnect();
  channel6 = loadSound("audio/36.mp3");

  channel6.disconnect();
  myFilter6.process(channel1);
  eq6.process(channel6);

  selecteur6=3;
}
function buttonSong3Click7()           //CHANNEL 7
{
  channel7.disconnect();
  channel7 = loadSound("audio/37.mp3");

  channel7.disconnect();
  myFilter7.process(channel7);
  eq7.process(channel7);

  selecteur7=3;
}
function buttonSong3Click8()           //CHANNEL 8
{
  channel8.disconnect();
  channel8 = loadSound("audio/38.mp3");

  channel8.disconnect();
  myFilter8.process(channel8);
  eq8.process(channel8);

  selecteur8=3;
}

/******************************FIRST SEND EFFECT SETTING******************************/
function selectEffect1Click1()                                                //CHANNEL 1
{
  selectEffect11.addEventListener("input", function () 
  {
      switch (selectEffect11.value)//we want to see what is in the selec box
      {
        case 'Reverb' : //if it's reverb
          selectEffect11.value='reverb';
          effect11.amp(0);//we remove the old send effect
          effect11 = new p5.Reverb();//we create the new right object
          effect11.process(channel1, 6, 0.2);
          for(var i=0; i<100000000; i++)
          {}
          if(confirm("Would you like change the reverb setting?"))//if we want change the setting, 
          {
            var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
            var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
            var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
            effect11.set(second, decayRate, reverse)//we can do it
          }
          effect11.drywet(sliderEffect11.value/100);//we put the dry/wet to the right value
          effect11.amp(2.5);//we can turn the effect on
        break;

        case 'Delay'://if it's delay
          selectEffect11.value='delay';
          effect11.amp(0);//we remove the old send effect
          effect11 = new p5.Delay();
          effect11.process(channel1, .12, .7, 2300);
          if(confirm("Would you like change the delay setting?"))
          {
            var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
            var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
            effect11.process(channel1, delayTime, feedback);
          }
          effect11.drywet(sliderEffect11.value/100);
          effect11.amp(2.5);
          effect11.setType('default'); // a delay      
        break;

        case 'Ping Pong':
          selectEffect11.value='ping pong';
          effect11.amp(0);
          effect11 = new p5.Delay();
          //
          if(confirm('Would you like change the ping-pong setting?'))
          {
            var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
            var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.01, Max: 1."));
            effect11.process(channel1, delayTime, feedback);
          }
          else
          {
            effect11.process(channel1, .12, .7, 2300);
          }
          effect11.drywet(sliderEffect11.value/100);
          effect11.amp(2.5);
          effect11.setType('Ping Pong'); // a stereoeffect     
        break;

        case 'NONE': 
          effect11.amp(0); // REMOVE send effect
        break;
      }
  })
}
function sliderEffect1MouseDown1()
{
    sliderEffect11.addEventListener("input", function () 
    {
        effect11.drywet(sliderEffect11.value/100);
        effect11.amp(2.5); // turn it up!
    }, false);
}
function selectEffect1Click2()                                                //CHANNEL 2
{
  selectEffect12.addEventListener("input", function () 
  {
      switch (selectEffect12.value)
      {
      case 'Reverb' :
        selectEffect12.value='reverb';
        effect12.amp(0);
        effect12 = new p5.Reverb();
        effect12.process(channel2, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect12.set(second, decayRate, reverse)
      }
        effect12.drywet(sliderEffect12.value/100);
        effect12.amp(2.5);
    break;
    case 'Delay':
        selectEffect12.value='delay'
      effect12.amp(0);
        effect12 = new p5.Delay();
        effect12.process(channel2, .12, .7, 2300);
        if(confirm("Would you like change the delay setting?"))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect12.process(channel2, delayTime, feedback);
      }
        effect12.drywet(sliderEffect12.value/100);
        effect12.amp(2.5);
        effect12.setType('default'); // a delay      
    break;
    case 'Ping Pong':
        selectEffect12.value='ping pong';
      effect12.amp(0);
        effect12 = new p5.Delay();
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect12.process(channel2, delayTime, feedback);
      }
      else
      {
        effect12.process(channel2, .12, .7, 2300);
      }
        effect12.drywet(sliderEffect12.value/100);
        effect12.amp(2.5);
        effect12.setType('Ping Pong'); // a stereoeffect     
    break;
    case 'NONE': 
        effect12.amp(0); // REMOVE Ping Pong
    break;
    }
  })
}
function sliderEffect1MouseDown2()
{
    sliderEffect12.addEventListener("input", function () 
    {
        effect12.drywet(sliderEffect12.value/100);
        effect12.amp(2.5); // turn it up!
    }, false);
}
function selectEffect1Click3()                                                //CHANNEL 3
{
  selectEffect13.addEventListener("input", function () 
  {
      switch (selectEffect13.value)
      {
    case 'Reverb' :
        selectEffect13.value='reverb';
        effect13.amp(0);
        effect13 = new p5.Reverb();
        effect13.process(channel3, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect13.set(second, decayRate, reverse)
      }
        effect13.drywet(sliderEffect13.value/100);
        effect13.amp(2.5);
    break;
    case 'Delay':
        selectEffect13.value='delay';
      effect13.amp(0);
        effect13 = new p5.Delay();
        if(confirm("Would you like change the delay setting?"))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect13.process(channel3, delayTime, feedback);
      }
      else
      {
        effect13.process(channel3, .12, .7, 2300);
      }
        effect13.drywet(sliderEffect13.value/100);
        effect13.amp(2.5);
        effect13.setType('default'); // a delay      
    break;
    case 'Ping Pong':
        selectEffect13.value='ping pong';
      effect13.amp(0);
        effect13 = new p5.Delay();
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect13.process(channel3, delayTime, feedback);
      }
      else
      {
        effect13.process(channel3, .12, .7, 2300);
      }
        effect13.drywet(sliderEffect13.value/100);
        effect13.amp(2.5);
        effect13.setType('Ping Pong'); // a stereoeffect     
    break;
    case 'NONE': 
        effect13.amp(0); // REMOVE PNGPONG
    break;
    }
  })
}
function sliderEffect1MouseDown3()
{
    sliderEffect13.addEventListener("input", function () 
    {
        effect13.drywet(sliderEffect13.value/100);
        effect13.amp(2.5); // turn it up!
    }, false);
}
function selectEffect1Click4()                                                //CHANNEL 4
{
  selectEffect14.addEventListener("input", function () 
  {
      switch (selectEffect14.value)
      {
    case 'Reverb' :
        selectEffect14.value='reverb';
      effect14.amp(0);
        effect14 = new p5.Reverb();
        effect14.process(channel4, 6, 0.2);
      if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect14.set(second, decayRate, reverse)
      }
        effect14.drywet(sliderEffect14.value/100);
        effect14.amp(2.5);
    break;
    case 'Delay':
        selectEffect14.value='delay'
      effect14.amp(0);
        effect14 = new p5.Delay();
        if(confirm("Would you like change the delay setting?"))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect14.process(channel4, delayTime, feedback);
      }
      else
      {
        effect14.process(channel4, .12, .7, 2300);
      }
        effect14.drywet(sliderEffect14.value/100);
        effect14.amp(2.5);
        effect14.setType('default'); // a delay      
    break;
    case 'Ping Pong':
        selectEffect14.value='ping pong'
      effect14.amp(0);
        effect14 = new p5.Delay();
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect14.process(channel4, delayTime, feedback);
      }
      else
      {
        effect14.process(channel4, .12, .7, 2300);
      }
        effect14.drywet(sliderEffect14.value/100);
        effect14.amp(2.5);
        effect14.setType('Ping Pong'); // a stereoeffect     
    break;
    case 'NONE': 
        effect14.amp(0); // REMOVE Ping Pong
    break;
    }
  })
}
function sliderEffect1MouseDown4()
{
    sliderEffect14.addEventListener("input", function () 
    {
        effect14.drywet(sliderEffect14.value/100);
        effect14.amp(2.5); // turn it up!
    }, false);
 }
function selectEffect1Click5()                                                //CHANNEL 5
{
  selectEffect15.addEventListener("input", function () 
  {
      switch (selectEffect15.value)
      {
    case 'Reverb' :
        selectEffect15.value='reverb'
      effect15.amp(0);
        effect15 = new p5.Reverb();
        effect15.process(channel5, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect15.set(second, decayRate, reverse)
      }
        effect15.drywet(sliderEffect15.value/100);
        effect15.amp(2.5);
    break;
    case 'Delay':
    selectEffect15.value='delay'
      effect15.amp(0);
        effect15 = new p5.Delay();
        if(confirm("Would you like change the delay setting?"))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect15.process(channel5, delayTime, feedback);
      }
      else
      {
        effect15.process(channel5, .12, .7, 2300);
      }       effect15.drywet(sliderEffect15.value/100);
        effect15.amp(2.5);
        effect15.setType('default'); // a delay      
    break;
    case 'Ping Pong':
        selectEffect15.value='ping pong'
      effect15.amp(0);
        effect15 = new p5.Delay();
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect15.process(channel5, delayTime, feedback);
      }
      else
      {
        effect15.process(channel5, .12, .7, 2300);
      }
        effect15.drywet(sliderEffect15.value/100);
        effect15.amp(2.5);
        effect15.setType('Ping Pong'); // a stereoeffect     
    break;
    case 'NONE': 
        effect15.amp(0); // REMOVE Ping Pong
    break;
    }
  })
}
function sliderEffect1MouseDown5()
{
    sliderEffect15.addEventListener("input", function () 
    {
        effect15.drywet(sliderEffect15.value/100);
        effect15.amp(2.5); // turn it up!
    }, false);
}
function selectEffect1Click6()                                                //CHANNEL 6
{
  selectEffect16.addEventListener("input", function () 
  {
      switch (selectEffect16.value)
      {
    case 'Reverb' :
        selectEffect16.value='reverb'
      effect16.amp(0);
        effect16 = new p5.Reverb();
        effect16.process(channel6, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect16.set(second, decayRate, reverse)
      }
        effect16.drywet(sliderEffect16.value/100);
        effect16.amp(2.5);
    break;
    case 'Delay':
        selectEffect16.value='delay';
      effect16.amp(0);
        effect16 = new p5.Delay();
        if(confirm("Would you like change the delay setting?"))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect16.process(channel6, delayTime, feedback);
      }
      else
      {
        effect16.process(channel6, .12, .7, 2300);
      }
        effect16.drywet(sliderEffect16.value/100);
        effect16.amp(2.5);
        effect16.setType('default'); // a delay      
    break;
    case 'Ping Pong':
      selectEffect16.value= "ping pong"
      effect16.amp(0);
        effect16 = new p5.Delay();
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect16.process(channel6, delayTime, feedback);
      }
      else
      {
        effect16.process(channel6, .12, .7, 2300);
      }
        effect16.drywet(sliderEffect16.value/100);
        effect16.amp(2.5);
        effect16.setType('Ping Pong'); // a stereoeffect     
    break;
    case 'NONE': 
        effect16.amp(0); // REMOVE Ping Pong
    break;
    }
  })
}
function sliderEffect1MouseDown6()
{
    sliderEffect16.addEventListener("input", function () 
    {
        effect16.drywet(sliderEffect16.value/100);
        effect16.amp(2.5); // turn it up!
    }, false);
}
function selectEffect1Click7()                                                //CHANNEL 7
{
  selectEffect17.addEventListener("input", function () 
  {
      switch (selectEffect17.value)
      {
    case 'Reverb' :
      selectEffect17.value="reverb"
      effect17.amp(0);
        effect17 = new p5.Reverb();
        effect17.process(channel7, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect17.set(second, decayRate, reverse)
      }
        effect17.drywet(sliderEffect17.value/100);
        effect17.amp(2.5);
    break;
    case 'Delay':
      selectEffect17='delay';
      effect17.amp(0);
        effect17 = new p5.Delay();
       if(confirm("Would you like change the delay setting?"))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect17.process(channel7, delayTime, feedback);
      }
      else
      {
        effect17.process(channel7, .12, .7, 2300);
      }
        effect17.drywet(sliderEffect17.value/100);
        effect17.amp(2.5);
        effect17.setType('default'); // a delay      
    break;
    case 'Ping Pong':
      selectEffect17='ping pong'
      effect17.amp(0);
        effect17 = new p5.Delay();
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect17.process(channel7, delayTime, feedback);
      }
      else
      {
        effect17.process(channel7, .12, .7, 2300);
      }
        effect17.drywet(sliderEffect17.value/100);
        effect17.amp(2.5);
        effect17.setType('Ping Pong'); // a stereoeffect     
    break;
    case 'NONE': 
        effect17.amp(0); // REMOVE Ping Pong
    break;
    }
  })
}
function sliderEffect1MouseDown7()
{
    sliderEffect17.addEventListener("input", function () 
    {
        effect17.drywet(sliderEffect17.value/100);
        effect17.amp(2.5); // turn it up!
    }, false);
}
function selectEffect1Click8()                                                //CHANNEL 8
{
  selectEffect18.addEventListener("input", function () 
  {
      switch (selectEffect18.value)
      {
    case 'Reverb' :
      selectEffect18.value='reverb';
      effect18.amp(0);
        effect18 = new p5.Reverb();
        effect18.process(channel8, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var predelay = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect18.set(second, predelay, reverse)
      }
        effect18.drywet(sliderEffect18.value/100);
        effect18.amp(2.5);
    break;
    case 'Delay':
      selectEffect18.value='delay';
      effect18.amp(0);
        effect18 = new p5.Delay();
        if(confirm("Would you like change the delay setting?"))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect18.process(channel8, delayTime, feedback);
      }
      else
      {
        effect18.process(channel8, .12, .7, 2300);
      }
        effect18.drywet(sliderEffect18.value/100);
        effect18.amp(2.5);
        effect18.setType('default'); // a delay      
    break;
    case 'Ping Pong':
      selectEffect18.value='ping pong';
      effect18.amp(0);
        effect18 = new p5.Delay();
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect18.process(channel8, delayTime, feedback);
      }
      else
      {
        effect18.process(channel8, .12, .7, 2300);
      }
        effect18.drywet(sliderEffect18.value/100);
        effect18.amp(2.5);
        effect18.setType('Ping Pong'); // a stereoeffect     
    break;
    case 'NONE': 
        effect18.amp(0); // REMOVE Ping Pong
    break;
    }
  })
}
function sliderEffect1MouseDown8()
{
    sliderEffect18.addEventListener("input", function () 
    {
        effect18.drywet(sliderEffect18.value/100);
        effect18.amp(2.5); // turn it up!
    }, false);
}

/******************************SECONDE SEND EFFECT SETTING******************************/
function selectEffect2Click1()                                                //CHANNEL 1
{
  selectEffect21.addEventListener("input", function () 
  {
      switch (selectEffect21.value)
      {
    case 'Reverb' :
        selectEffect21.value='reverb'
      effect21.amp(0);
        effect21 = new p5.Reverb();
        effect21.process(channel1, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect21.set(second, decayRate, reverse)
      }
        effect21.drywet(sliderEffect21.value/100);
        effect21.amp(2.5);
    break;
    case 'Delay':
        selectEffect21.value='delay'
      effect21.amp(0);
        effect21 = new p5.Delay();
        if(confirm("Would you like change the delay setting?"))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect21.process(channel1, delayTime, feedback);
      }
      else
      {
        effect21.process(channel1, .12, .7, 2300);
      }

        effect21.drywet(sliderEffect21.value/100);
        effect21.amp(2.5);
        effect21.setType('default'); // a delay      
    break;
    case 'Ping Pong':
      selectEffect21.value='ping pong'
      effect21.amp(0);
        effect21 = new p5.Delay();
        effect21.setType('Ping Pong'); // a stereoeffect 
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect21.process(channel1, delayTime, feedback);
      }    
      else
      {
        effect21.process(channel1, .12, .7, 2300);
      }

        effect21.drywet(sliderEffect21.value/100);
        effect21.amp(2.5);
    break;
    case 'NONE': 
        effect21.amp(0); // REMOVE Ping Pong
    break;
    }
  })
}
function sliderEffect2MouseDown1()
{
    sliderEffect21.addEventListener("input", function () 
    {
        effect21.drywet(sliderEffect21.value/100);
        effect21.amp(2.5); // turn it up!
    }, false);
}
function selectEffect2Click2()                                                //CHANNEL 2
{
  selectEffect22.addEventListener("input", function () 
  {
      switch (selectEffect22.value)
      {
    case 'Reverb' :
        selectEffect22.value='reverb'
      effect22.amp(0);
        effect22 = new p5.Reverb();
        effect22.process(channel2, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect22.set(second, decayRate, reverse)
      }
        effect22.drywet(sliderEffect22.value/100);
        effect22.amp(2.5);
    break;
    case 'Delay':
    selectEffect22.value='delay'
      effect22.amp(0);
        effect22 = new p5.Delay();
        if(confirm("Would you like change the delay setting?"))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect22.process(channel2, delayTime, feedback);
      }
      else
      {
        effect22.process(channel2, .12, .7, 2300);
      }

        effect22.drywet(sliderEffect22.value/100);
        effect22.amp(2.5);
        effect22.setType('default'); // a delay      
    break;
    case 'Ping Pong':
    selectEffect22.value='ping pong'
      effect22.amp(0);
        effect22 = new p5.Delay();
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect22.process(channel2, delayTime, feedback);
      }
      else
      {
        effect22.process(channel2, .12, .7, 2300);
      }

        effect22.drywet(sliderEffect22.value/100);
        effect22.amp(2.5);
        effect22.setType('Ping Pong'); // a stereoeffect     
    break;
    case 'NONE': 
        effect22.amp(0); // REMOVE Ping Pong
    break;
    }
  })
}
function sliderEffect2MouseDown2()
{
    sliderEffect22.addEventListener("input", function () 
    {
        effect22.drywet(sliderEffect22.value/100);
        effect22.amp(2.5); // turn it up!
    }, false);
}
function selectEffect2Click3()                                                //CHANNEL 3
{
  selectEffect23.addEventListener("input", function () 
  {
      switch (selectEffect23.value)
      {
    case 'Reverb' :
    selectEffect23.value='reverb'
      effect23.amp(0);
        effect23 = new p5.Reverb();
        effect23.process(channel3, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect23.set(second, decayRate, reverse)
      }
        effect23.drywet(sliderEffect23.value/100);
        effect23.amp(2.5);
    break;
    case 'Delay':
    selectEffect23.value='delay'
      effect23.amp(0);
        effect23 = new p5.Delay();
        if(confirm("Would you like change the delay setting?"))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect23.process(channel3, delayTime, feedback);
      }
      else
      {
        effect23.process(channel3, .12, .7, 2300);
      }

        effect23.drywet(sliderEffect23.value/100);
        effect23.amp(2.5);
        effect23.setType('default'); // a delay      
    break;
    case 'Ping Pong':
    selectEffect23.value='ping pong'
      effect23.amp(0);
        effect23 = new p5.Delay();
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect23.process(channel3, delayTime, feedback);
      }
      else
      {
        effect23.process(channel3, .12, .7, 2300);
      }

        effect23.drywet(sliderEffect23.value/100);
        effect23.amp(2.5);
        effect23.setType('Ping Pong'); // a stereoeffect     
    break;
    case 'NONE': 
        effect23.amp(0); // REMOVE PNGPONG
    break;
    }
  })
}
function sliderEffect2MouseDown3()
{
    sliderEffect23.addEventListener("input", function () 
    {
        effect23.drywet(sliderEffect23.value/100);
        effect23.amp(2.5); // turn it up!
    }, false);
}
function selectEffect2Click4()                                                //CHANNEL 4
{
  selectEffect24.addEventListener("input", function () 
  {
      switch (selectEffect24.value)
      {
    case 'Reverb' :
    selectEffect24.value='reverb'
      effect24.amp(0);
        effect24 = new p5.Reverb();
        effect24.process(channel4, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect24.set(second, decayRate, reverse)
      }
        effect24.drywet(sliderEffect24.value/100);
        effect24.amp(2.5);
    break;
    case 'Delay':
    selectEffect24.value='delay'
      effect24.amp(0);
        effect24 = new p5.Delay();
        if(confirm("Would you like change the delay setting?"))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect24.process(channel4, delayTime, feedback);
      }
      else
      {
        effect24.process(channel4, .12, .7, 2300);
      }

        effect24.drywet(sliderEffect24.value/100);
        effect24.amp(2.5);
        effect24.setType('default'); // a delay      
    break;
    case 'Ping Pong':
    selectEffect24.value='ping pong'
      effect24.amp(0);
        effect24 = new p5.Delay();
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect24.process(channel4, delayTime, feedback);
      }
      else
      {
        effect24.process(channel4, .12, .7, 2300);
      }

        effect24.drywet(sliderEffect24.value/100);
        effect24.amp(2.5);
        effect24.setType('Ping Pong'); // a stereoeffect     
    break;
    case 'NONE': 
        effect24.amp(0); // REMOVE Ping Pong
    break;
    }
  })
}
function sliderEffect2MouseDown4()
{
    sliderEffect24.addEventListener("input", function () 
    {
        effect24.drywet(sliderEffect24.value/100);
        effect24.amp(2.5); // turn it up!
    }, false);
 }
function selectEffect2Click5()                                                //CHANNEL 5
{
  selectEffect25.addEventListener("input", function () 
  {
      switch (selectEffect25.value)
      {
    case 'Reverb' :
    selectEffect25.value='reverb'
      effect25.amp(0);
        effect25 = new p5.Reverb();
        effect25.process(channel5, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect25.set(second, decayRate, reverse)
      }
        effect25.drywet(sliderEffect25.value/100);
        effect25.amp(2.5);
    break;
    case 'Delay':
    selectEffect25.value='delay'
      effect25.amp(0);
        effect25 = new p5.Delay();
        if(confirm("Would you like change the delay setting?"))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect25.process(channel5, delayTime, feedback);
      }
      else
      {
        effect25.process(channel5, .12, .7, 2300);
      }

        effect25.drywet(sliderEffect25.value/100);
        effect25.amp(2.5);
        effect25.setType('default'); // a delay      
    break;
    case 'Ping Pong':
    selectEffect25.value='ping pong'
      effect25.amp(0);
        effect25 = new p5.Delay();
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect25.process(channel5, delayTime, feedback);
      }
      else
      {
        effect25.process(channel5, .12, .7, 2300);
      }

        effect25.drywet(sliderEffect25.value/100);
        effect25.amp(2.5);
        effect25.setType('Ping Pong'); // a stereoeffect     
    break;
    case 'NONE': 
        effect25.amp(0); // REMOVE Ping Pong
    break;
    }
  })
}
function sliderEffect2MouseDown5()
{
    sliderEffect25.addEventListener("input", function () 
    {
        effect25.drywet(sliderEffect25.value/100);
        effect25.amp(2.5); // turn it up!
    }, false);
}
function selectEffect2Click6()                                                //CHANNEL 6
{
  selectEffect26.addEventListener("input", function () 
  {
      switch (selectEffect26.value)
      {
    case 'Reverb' :
    selectEffect26.value='reverb'
      effect26.amp(0);
        effect26 = new p5.Reverb();
        effect26.process(channel6, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect26.set(second, decayRate, reverse)
      }
        effect26.drywet(sliderEffect26.value/100);
        effect26.amp(2.5);
    break;
    case 'Delay':
    selectEffect26.value='delay'
      effect26.amp(0);
        effect26 = new p5.Delay();
        if(confirm("Would you like change the delay setting?"))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect26.process(channel6, delayTime, feedback);
      }
      else
      {
        effect26.process(channel6, .12, .7, 2300);
      }

        effect26.drywet(sliderEffect26.value/100);
        effect26.amp(2.5);
        effect26.setType('default'); // a delay      
    break;
    case 'Ping Pong':
    selectEffect26.value='ping pong'
      effect26.amp(0);
        effect26 = new p5.Delay();
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect26.process(channel6, delayTime, feedback);
      }
      else
      {
        effect26.process(channel6, .12, .7, 2300);
      }

        effect26.drywet(sliderEffect26.value/100);
        effect26.amp(2.5);
        effect26.setType('Ping Pong'); // a stereoeffect     
    break;
    case 'NONE': 
        effect26.amp(0); // REMOVE Ping Pong
    break;
    }
  })
}
function sliderEffect2MouseDown6()
{
    sliderEffect26.addEventListener("input", function () 
    {
        effect26.drywet(sliderEffect26.value/100);
        effect26.amp(2.5); // turn it up!
    }, false);
}
function selectEffect2Click7()                                                //CHANNEL 7
{
  selectEffect27.addEventListener("input", function () 
  {
      switch (selectEffect27.value)
      {
    case 'Reverb' :
    selectEffect27.value='reverb'
      effect27.amp(0);
        effect27 = new p5.Reverb();
        effect27.process(channel7, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect27.set(second, decayRate, reverse)
      }
        effect27.drywet(sliderEffect27.value/100);
        effect27.amp(2.5);
    break;
    case 'Delay':
    selectEffect27.value='delay'
      effect27.amp(0);
        effect27 = new p5.Delay();
        if(confirm("Would you like change the delay setting?"))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect27.process(channel7, delayTime, feedback);
      }
      else
      {
        effect27.process(channel7, .12, .7, 2300);
      }

        effect27.drywet(sliderEffect27.value/100);
        effect27.amp(2.5);
        effect27.setType('default'); // a delay      
    break;
    case 'Ping Pong':
    selectEffect27.value='ping pong'
      effect27.amp(0);
        effect27 = new p5.Delay();
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect27.process(channel7, delayTime, feedback);
      }
      else
      {
        effect27.process(channel7, .12, .7, 2300);
      }

        effect27.drywet(sliderEffect27.value/100);
        effect27.amp(2.5);
        effect27.setType('Ping Pong'); // a stereoeffect     
    break;
    case 'NONE': 
        effect27.amp(0); // REMOVE Ping Pong
    break;
    }
  })
}
function sliderEffect2MouseDown7()
{
    sliderEffect27.addEventListener("input", function () 
    {
        effect27.drywet(sliderEffect27.value/100);
        effect27.amp(2.5); // turn it up!
    }, false);
}
function selectEffect2Click8()                                                //CHANNEL 8
{
  selectEffect28.addEventListener("input", function () 
  {
      switch (selectEffect28.value)
      {
    case 'Reverb' :
    selectEffect28.value='reverb'
      effect28.amp(0);
        effect28 = new p5.Reverb();
        effect28.process(channel8, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect28.set(second, decayRate, reverse)
      }
        effect28.drywet(sliderEffect28.value/100);
        effect28.amp(2.5);
    break;
    case 'Delay':
    selectEffect28.value='delay'
      effect28.amp(0);
        effect28 = new p5.Delay();
        if(confirm("Would you like change the delay setting?"))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect28.process(channel8, delayTime, feedback);
      }
      else
      {
        effect28.process(channel8, .12, .7, 2300);
      }

        effect28.drywet(sliderEffect28.value/100);
        effect28.amp(2.5);
        effect28.setType('default'); // a delay      
    break;
    case 'Ping Pong':
    selectEffect28.value='pong'
      effect28.amp(0);
        effect28 = new p5.Delay();
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect28.process(channel8, delayTime, feedback);
      }
      else
      {
        effect28.process(channel8, .12, .7, 2300);
      }

        effect28.drywet(sliderEffect28.value/100);
        effect28.amp(2.5);
        effect28.setType('Ping Pong'); // a stereoeffect     
    break;
    case 'NONE': 
        effect28.amp(0); // REMOVE Ping Pong
    break;
    }
  })
}
function sliderEffect2MouseDown8()
{
    sliderEffect28.addEventListener("input", function () 
    {
        effect28.drywet(sliderEffect28.value/100);
        effect28.amp(2.5); // turn it up!
    }, false);
}


/******************************THIRD SEND EFFECT SETTING******************************/
function selectEffect3Click1()                                                //CHANNEL 1
{
  selectEffect31.addEventListener("input", function () 
  {
      switch (selectEffect31.value)
      {
    case 'Reverb' :
    selectEffect31.value='reverb'
      effect31.amp(0);
        effect31 = new p5.Reverb();
        effect31.process(channel1, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect31.set(second, decayRate, reverse)
      }
        effect31.drywet(sliderEffect31.value/100);
        effect31.amp(2.5);
    break;
    case 'Delay':
    selectEffect31.value='delay'
      effect31.amp(0);
        effect31 = new p5.Delay();
        if(confirm('Would you like change the delay setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect31.process(channel1, delayTime, feedback);
      }
      else
      {
        effect31.process(channel1, .12, .7, 2300);
      }
        effect31.drywet(sliderEffect31.value/100);
        effect31.amp(2.5);
        effect31.setType('default'); // a delay      
    break;
    case 'Ping Pong':
    selectEffect31.value='pong'
      effect31.amp(0);
        effect31 = new p5.Delay();
        effect31.setType('Ping Pong'); // a stereoeffect     
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect31.process(channel1, delayTime, feedback);
      }
      else
      {
        effect31.process(channel1, .12, .7, 2300);
      }
        effect31.drywet(sliderEffect31.value/100);
        effect31.amp(2.5);
    break;
    case 'NONE': 
        effect31.amp(0); // REMOVE Ping Pong
    break;
    }
  })
}
function sliderEffect3MouseDown1()
{
    sliderEffect31.addEventListener("input", function () 
    {
        effect31.drywet(sliderEffect31.value/100);
        effect31.amp(2.5); // turn it up!
    }, false);
}
function selectEffect3Click2()                                                //CHANNEL 2
{
  selectEffect32.addEventListener("input", function () 
  {
      switch (selectEffect32.value)
      {
    case 'Reverb' :
    selectEffect32.value='reverb'
      effect32.amp(0);
        effect32 = new p5.Reverb();
        effect32.process(channel2, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect32.set(second, decayRate, reverse)
      }
        effect32.drywet(sliderEffect32.value/100);
        effect32.amp(2.5);
    break;
    case 'Delay':
    selectEffect32.value='delay'
      effect32.amp(0);
        effect32 = new p5.Delay();
        if(confirm('Would you like change the delay setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect32.process(channel2, delayTime, feedback);
      }
      else
      {
        effect32.process(channel2, .12, .7, 2300);
      }
        effect32.amp(2.5);
        effect32.setType('default'); // a delay      
    break;
    case 'Ping Pong':
    selectEffect32.value='pong'
      effect32.amp(0);
        effect32 = new p5.Delay();
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect32.process(channel2, delayTime, feedback);
      }
      else
      {
        effect32.process(channel2, .12, .7, 2300);
      }
        effect32.drywet(sliderEffect32.value/100);
        effect32.amp(2.5);
        effect32.setType('Ping Pong'); // a stereoeffect     
    break;
    case 'NONE': 
        effect32.amp(0); // REMOVE Ping Pong
    break;
    }
  })
}
function sliderEffect3MouseDown2()
{
    sliderEffect32.addEventListener("input", function () 
    {
        effect32.drywet(sliderEffect32.value/100);
        effect32.amp(2.5); // turn it up!
    }, false);
}
function selectEffect3Click3()                                                //CHANNEL 3
{
  selectEffect33.addEventListener("input", function () 
  {
      switch (selectEffect33.value)
      {
    case 'Reverb' :
    selectEffect33.value='reverb'
      effect33.amp(0);
        effect33 = new p5.Reverb();
        effect33.process(channel3, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect33.set(second, decayRate, reverse)
      }
        effect33.drywet(sliderEffect33.value/100);
        effect23.amp(2.5);
    break;
    case 'Delay':
    selectEffect33.value='delay'
      effect33.amp(0);
        effect33 = new p5.Delay();
        if(confirm('Would you like change the delay setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect33.process(channel3, delayTime, feedback);
      }
      else
      {
        effect33.process(channel3, .12, .7, 2300);
      }
        effect33.drywet(sliderEffect33.value/100);
        effect33.amp(2.5);
        effect33.setType('default'); // a delay      
    break;
    case 'Ping Pong':
    selectEffect33.value='pong'
      effect33.amp(0);
        effect33 = new p5.Delay();
       if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect33.process(channel3, delayTime, feedback);
      }
      else
      {
        effect33.process(channel3, .12, .7, 2300);
      }
        effect33.drywet(sliderEffect33.value/100);
        effect33.amp(2.5);
        effect33.setType('Ping Pong'); // a stereoeffect     
    break;
    case 'NONE': 
        effect33.amp(0); // REMOVE PNGPONG
    break;
    }
  })
}
function sliderEffect3MouseDown3()
{
    sliderEffect33.addEventListener("input", function () 
    {
        effect33.drywet(sliderEffect33.value/100);
        effect33.amp(2.5); // turn it up!
    }, false);
}
function selectEffect3Click4()                                                //CHANNEL 4
{
  selectEffect34.addEventListener("input", function () 
  {
      switch (selectEffect34.value)
      {
    case 'Reverb' :
    selectEffect34.value='reverb'
      effect34.amp(0);
        effect34 = new p5.Reverb();
        effect34.process(channel4, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect34.set(second, decayRate, reverse)
      }
        effect34.drywet(sliderEffect34.value/100);
        effect34.amp(2.5);
    break;
    case 'Delay':
    selectEffect34.value='delay'
      effect34.amp(0);
        effect34 = new p5.Delay();
        if(confirm('Would you like change the delay setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect34.process(channel4, delayTime, feedback);
      }
      else
      {
        effect34.process(channel4, .12, .7, 2300);
      }
        effect34.drywet(sliderEffect34.value/100);
        effect34.amp(2.5);
        effect34.setType('default'); // a delay      
    break;
    case 'Ping Pong':
    selectEffect34.value='pong'
      effect34.amp(0);
        effect34 = new p5.Delay();
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect34.process(channel4, delayTime, feedback);
      }
      else
      {
        effect34.process(channel4, .12, .7, 2300);
      }
        effect34.drywet(sliderEffect34.value/100);
        effect34.amp(2.5);
        effect34.setType('Ping Pong'); // a stereoeffect     
    break;
    case 'NONE': 
        effect34.amp(0); // REMOVE Ping Pong
    break;
    }
  })
}
function sliderEffect3MouseDown4()
{
    sliderEffect34.addEventListener("input", function () 
    {
        effect34.drywet(sliderEffect34.value/100);
        effect34.amp(2.5); // turn it up!
    }, false);
 }
function selectEffect3Click5()                                                //CHANNEL 5
{
  selectEffect35.addEventListener("input", function () 
  {
      switch (selectEffect35.value)
      {
    case 'Reverb' :
    selectEffect35.value='reverb'
      effect35.amp(0);
        effect35 = new p5.Reverb();
        effect35.process(channel5, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect35.set(second, decayRate, reverse)
      }
        effect35.drywet(sliderEffect35.value/100);
        effect35.amp(2.5);
    break;
    case 'Delay':
    selectEffect35.value='delay'
      effect35.amp(0);
        effect35 = new p5.Delay();
        if(confirm('Would you like change the delay setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect35.process(channel5, delayTime, feedback);
      }
      else
      {
        effect35.process(channel5, .12, .7, 2300);
      }
        effect35.drywet(sliderEffect35.value/100);
        effect35.amp(2.5);
        effect35.setType('default'); // a delay      
    break;
    case 'Ping Pong':
    selectEffect35.value='pong'
      effect35.amp(0);
        effect35 = new p5.Delay();
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect35.process(channel5, delayTime, feedback);
      }
      else
      {
        effect35.process(channel5, .12, .7, 2300);
      }
        effect35.drywet(sliderEffect35.value/100);
        effect35.amp(2.5);
        effect35.setType('Ping Pong'); // a stereoeffect     
    break;
    case 'NONE': 
        effect35.amp(0); // REMOVE Ping Pong
    break;
    }
  })
}
function sliderEffect3MouseDown5()
{
    sliderEffect35.addEventListener("input", function () 
    {
        effect35.drywet(sliderEffect35.value/100);
        effect35.amp(2.5); // turn it up!
    }, false);
}
function selectEffect3Click6()                                                //CHANNEL 6
{
  selectEffect36.addEventListener("input", function () 
  {
      switch (selectEffect36.value)
      {
    case 'Reverb' :
    selectEffect36.value='reverb'
      effect36.amp(0);
        effect36 = new p5.Reverb();
        effect36.process(channel6, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect36.set(second, decayRate, reverse)
      }
        effect36.drywet(sliderEffect36.value/100);
        effect36.amp(2.5);
    break;
    case 'Delay':
    selectEffect36.value='delay'
      effect36.amp(0);
        effect36 = new p5.Delay();
        if(confirm('Would you like change the delay setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect36.process(channel6, delayTime, feedback);
      }
      else
      {
        effect36.process(channel6, .12, .7, 2300);
      }
        effect36.drywet(sliderEffect36.value/100);
        effect36.amp(2.5);
        effect36.setType('default'); // a delay      
    break;
    case 'Ping Pong':
    selectEffect36.value='pong'
      effect36.amp(0);
        effect36 = new p5.Delay();
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect36.process(channel6, delayTime, feedback);
      }
      else
      {
        effect36.process(channel6, .12, .7, 2300);
      }
        effect36.drywet(sliderEffect36.value/100);
        effect36.amp(2.5);
        effect36.setType('Ping Pong'); // a stereoeffect     
    break;
    case 'NONE': 
        effect36.amp(0); // REMOVE Ping Pong
    break;
    }
  })
}
function sliderEffect3MouseDown6()
{
    sliderEffect36.addEventListener("input", function () 
    {
        effect36.drywet(sliderEffect36.value/100);
        effect36.amp(2.5); // turn it up!
    }, false);
}
function selectEffect3Click7()                                                //CHANNEL 7
{
  selectEffect37.addEventListener("input", function () 
  {
      switch (selectEffect37.value)
      {
    case 'Reverb' :
    selectEffect37.value='reverb'
      effect37.amp(0);
        effect37 = new p5.Reverb();
        effect37.process(channel7, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect37.set(second, decayRate, reverse)
      }
        effect37.drywet(sliderEffect37.value/100);
        effect37.amp(2.5);
    break;
    case 'Delay':
    selectEffect37.value='delay'
      effect37.amp(0);
        effect37 = new p5.Delay();
        if(confirm('Would you like change the delay setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect37.process(channel7, delayTime, feedback);
      }
      else
      {
        effect37.process(channel7, .12, .7, 2300);
      }
        effect37.drywet(sliderEffect37.value/100);
        effect37.amp(2.5);
        effect37.setType('default'); // a delay      
    break;
    case 'Ping Pong':
    selectEffect37.value="pong"
      effect37.amp(0);
        effect37 = new p5.Delay();
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect37.process(channel7, delayTime, feedback);
      }
      else
      {
        effect37.process(channel7, .12, .7, 2300);
      }
        effect37.drywet(sliderEffect37.value/100);
        effect37.amp(2.5);
        effect37.setType('Ping Pong'); // a stereoeffect     
    break;
    case 'NONE': 
        effect37.amp(0); // REMOVE Ping Pong
    break;
    }
  })
}
function sliderEffect3MouseDown7()
{
    sliderEffect37.addEventListener("input", function () 
    {
        effect37.drywet(sliderEffect37.value/100);
        effect37.amp(2.5); // turn it up!
    }, false);
}
function selectEffect3Click8()                                                //CHANNEL 8
{
  selectEffect38.addEventListener("input", function () 
  {
      switch (selectEffect38.value)
      {
    case 'Reverb' :
    selectEffect38.value='reverb'
      effect38.amp(0);
        effect38 = new p5.Reverb();
        effect38.process(channel8, 6, 0.2);
        if(confirm('Would you like change the reverb setting?'))
      {
        var second = parseFloat(prompt("Duration of the reverb, in seconds. Min: 0, Max: 10."));
        var decayRate = parseFloat(prompt("Percentage of decay with each echo. Min: 0, Max: 100."));
        var reverse = prompt("Play the reverb backwards or forwards. Backwards : true, Forward : false.");
        effect38.set(second, decayRate, reverse)
      }
        effect38.drywet(sliderEffect38.value/100);
        effect38.amp(2.5);
    break;
    case 'Delay':
    selectEffect38.value='delay'
      effect38.amp(0);
        effect38 = new p5.Delay();
        if(confirm('Would you like change the delay setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect38.process(channel8, delayTime, feedback);
      }
      else
      {
        effect38.process(channel8, .12, .7, 2300);
      }
        effect38.drywet(sliderEffect38.value/100);
        effect38.amp(2.5);
        effect38.setType('default'); // a delay      
    break;
    case 'Ping Pong':
    selectEffect38.value='pong'
      effect38.amp(0);
        effect38 = new p5.Delay();
        if(confirm('Would you like change the ping-pong setting?'))
      {
        var delayTime = parseFloat(prompt("Time (in seconds) of the delay. Min: 0, Max: 1."));
        var feedback = parseFloat( prompt("sends the delay back through itself in a loop that decreases in volume each time. Min: 0.1, Max: 1."));
        effect38.process(channel8, delayTime, feedback);
      }
      else
      {
        effect38.process(channel8, .12, .7, 2300);
      }
        effect38.drywet(sliderEffect38.value/100);
        effect38.amp(2.5);
        effect38.setType('Ping Pong'); // a stereoeffect     
    break;
    case 'NONE': 
        effect38.amp(0); // REMOVE Ping Pong
    break;
    }
  })
}
function sliderEffect3MouseDown8()
{
    sliderEffect38.addEventListener("input", function () 
    {
        effect38.drywet(sliderEffect38.value/100);
        effect38.amp(2.5); // turn it up!
    }, false);
}


/******************************ACTIVE OR DISABLE LP******************************/
function ONOFFLowPassClick1()                                          //CHANNEL 1
{
  if(ONOFFLowPass1.innerHTML=='OFF')
  {
    ONOFFLowPass1.innerHTML='ON';
    var filterFreq1 = map ((sliderLowPass1.value), 0, 1000, 20, 22000);
    myFilter1.freq(filterFreq1);
  }
  else
  {
    ONOFFLowPass1.innerHTML='OFF';
    myFilter1.freq(22050);
  }
}
/***CUT THE FREQUENCY BELOW THE CURSOR***/
function sliderLowPassMouseDown1()
{
  if ("oninput" in sliderLowPass1) 
  {
    sliderLowPass1.addEventListener("input", function () 
    {
      if(ONOFFLowPass1.innerHTML=='ON')
      {
        var filterFreq1 = map ((sliderLowPass1.value), 0, 1000, 10, 22050);
        // set filter parameters
        myFilter1.freq(filterFreq1);
      }
    }, false);
  }
}
function ONOFFLowPassClick2()                                          //CHANNEL 2
{
  if(ONOFFLowPass2.innerHTML=='OFF')
  {
    ONOFFLowPass2.innerHTML='ON';
    var filterFreq2 = map ((sliderLowPass2.value), 0, 1000, 10, 22050);
    myFilter2.freq(filterFreq2);
    myFilter2.res(28);
  }
  else
  {
    ONOFFLowPass2.innerHTML='OFF';
    myFilter2.freq(22050);
  }
}
/***CUT THE FREQUENCY BELOW THE CURSOR***/
function sliderLowPassMouseDown2()
{
  if ("oninput" in sliderLowPass2) 
  {
    sliderLowPass2.addEventListener("input", function () 
    {
      if(ONOFFLowPass2.innerHTML=='ON')
      {
        var filterFreq2 = map ((sliderLowPass2.value), 0, 1000, 10, 22050);
        // set filter parameters
        myFilter2.freq(filterFreq2);
      }
    }, false);
  }
}
function ONOFFLowPassClick3()                                          //CHANNEL 3
{
  if(ONOFFLowPass3.innerHTML=='OFF')
  {
    ONOFFLowPass3.innerHTML='ON';
    var filterFreq3 = map ((sliderLowPass3.value), 0, 1000, 10, 22050);
    myFilter3.freq(filterFreq3);
    myFilter3.res(28);
  }
  else
  {
    ONOFFLowPass3.innerHTML='OFF';
    myFilter3.freq(22050);
  }
}
function sliderLowPassMouseDown3()
{
  if ("oninput" in sliderLowPass3) 
  {
    sliderLowPass3.addEventListener("input", function () 
    {
      if(ONOFFLowPass3.innerHTML=='ON')
      {
        var filterFreq3 = map ((sliderLowPass3.value), 0, 1000, 10, 22050);
        // set filter parameters
        myFilter3.freq(filterFreq3);
      }
    }, false);
  }
}
function ONOFFLowPassClick4()                                          //CHANNEL 4
{
  if(ONOFFLowPass4.innerHTML=='OFF')
  {
    ONOFFLowPass4.innerHTML='ON';
    var filterFreq4 = map ((sliderLowPass4.value), 0, 1000, 10, 22050);
    myFilter4.freq(filterFreq4);
    myFilter4.res(28);
  }
  else
  {
    ONOFFLowPass4.innerHTML='OFF';
    myFilter4.freq(22050);
  }
}
function sliderLowPassMouseDown4()
{
  if ("oninput" in sliderLowPass4) 
  {
    sliderLowPass4.addEventListener("input", function () 
    {
      if(ONOFFLowPass4.innerHTML=='ON')
      {
        var filterFreq4 = map ((sliderLowPass4.value), 0, 1000, 10, 22050);
        // set filter parameters
        myFilter4.freq(filterFreq4);
      }
    }, false);
  }
}
function ONOFFLowPassClick5()                                          //CHANNEL 5
{
  if(ONOFFLowPass5.innerHTML=='OFF')
  {
    ONOFFLowPass5.innerHTML='ON';
    var filterFreq5 = map ((sliderLowPass5.value), 0, 1000, 10, 22050);
    myFilter5.freq(filterFreq5);
    myFilter5.res(28);
  }
  else
  {
    ONOFFLowPass5.innerHTML='OFF';
    myFilter5.freq(22050);
  }
}
function sliderLowPassMouseDown5()
{
  if ("oninput" in sliderLowPass5) 
  {
    sliderLowPass5.addEventListener("input", function () 
    {
      if(ONOFFLowPass5.innerHTML=='ON')
      {
        var filterFreq5 = map ((sliderLowPass5.value), 0, 1000, 10, 22050);
        // set filter parameters
        myFilter5.freq(filterFreq5);
      }
    }, false);
  }
}
function ONOFFLowPassClick6()                                          //CHANNEL 6
{
  if(ONOFFLowPass6.innerHTML=='OFF')
  {
    ONOFFLowPass6.innerHTML='ON';
    var filterFreq6 = map ((sliderLowPass6.value), 0, 1000, 10, 22050);
    myFilter6.freq(filterFreq6);
    myFilter6.res(28);
  }
  else
  {
    ONOFFLowPass6.innerHTML='OFF';
    myFilter6.freq(22050);
  }
}
function sliderLowPassMouseDown6()
{
  if ("oninput" in sliderLowPass6) 
  {
    sliderLowPass6.addEventListener("input", function () 
    {
      if(ONOFFLowPass6.innerHTML=='ON')
      {
        var filterFreq6 = map ((sliderLowPass6.value), 0, 1000, 10, 22050);
        // set filter parameters
        myFilter6.freq(filterFreq6);
      }
    }, false);
  }
}
function ONOFFLowPassClick7()                                          //CHANNEL 7
{
  if(ONOFFLowPass7.innerHTML=='OFF')
  {
    ONOFFLowPass7.innerHTML='ON';
    var filterFreq7 = map ((sliderLowPass7.value), 0, 1000, 10, 22050);
    myFilter7.freq(filterFreq7);
    myFilter7.res(28);
  }
  else
  {
    ONOFFLowPass7.innerHTML='OFF';
    myFilter7.freq(22050);
  }
}
function sliderLowPassMouseDown7()
{
  if ("oninput" in sliderLowPass7) 
  {
    sliderLowPass7.addEventListener("input", function () 
    {
      if(ONOFFLowPass7.innerHTML=='ON')
      {
        var filterFreq7 = map ((sliderLowPass7.value), 0, 1000, 10, 22050);
        // set filter parameters
        myFilter7.freq(filterFreq7);
      }
    }, false);
  }
}
function ONOFFLowPassClick8()                                          //CHANNEL 8
{
  if(ONOFFLowPass8.innerHTML=='OFF')
  {
    ONOFFLowPass8.innerHTML='ON';
    var filterFreq8 = map ((sliderLowPass8.value), 0, 1000, 10, 22050);
    myFilter8.freq(filterFreq8);
    myFilter8.res(28);
  }
  else
  {
    ONOFFLowPass8.innerHTML='OFF';
    myFilter8.freq(22050);
  }
}
function sliderLowPassMouseDown8()
{
  if ("oninput" in sliderLowPass8) 
  {
    sliderLowPass8.addEventListener("input", function () 
    {
      if(ONOFFLowPass8.innerHTML=='ON')
      {
        var filterFreq8 = map ((sliderLowPass8.value), 0, 1000, 10, 22050);
        // set filter parameters
        myFilter8.freq(filterFreq8);
      }
    }, false);
  }
}

/******************************EQ SETTING******************************/
function ONOFFEQClick1()                                     //CHANNEL 1
{
    if(ONOFFEQ1.innerHTML=='OFF')
    {
      ONOFFEQ1.innerHTML='ON';
      var EQintLow = Math.floor(sliderEqLow1.value);
      var EQintMid = Math.floor(sliderEqMid1.value);
      var EQintHight = Math.floor(sliderEqHight1.value);
      eq1.bands[0].gain(EQintLow);
      eq1.bands[1].gain(EQintMid);
      eq1.bands[2].gain(EQintHight);
    }
    else
    {
      ONOFFEQ1.innerHTML='OFF';
      eq1.bands[0].gain(0);
      eq1.bands[1].gain(0);
      eq1.bands[2].gain(0);
    }
}
function sliderEqLowMouseDown1()
{
    sliderEqLow1.addEventListener("input", function () 
    {
        if(ONOFFEQ1.innerHTML=='ON')//if the EQ is enable
        {
          //we take the float value form the slider
          //and convert it into a int
          var EQint = Math.floor(sliderEqLow1.value);
          eq1.bands[0].gain(EQint);//the low frequency can multiply
          //be multiply to -40dB to 40dB
        }
    }, false);
}
function sliderEqMidMouseDown1()
{
    sliderEqMid1.addEventListener("input", function () 
    {
        if(ONOFFEQ1.innerHTML=='ON')
        {
          var EQint = Math.floor(sliderEqMid1.value);
          eq1.bands[1].gain(EQint);
        }
    }, false);
}
function sliderEqHightMouseDown1()
{
    sliderEqHight1.addEventListener("input", function () 
    {
        if(ONOFFEQ1.innerHTML=='ON')
        {
          var EQint = Math.floor(sliderEqHight1.value);
          eq1.bands[2].gain(EQint);
        }
    }, false);
}
function ONOFFEQClick2()                                     //CHANNEL 2
{
  if(ONOFFEQ2.innerHTML=='OFF')
  {
    ONOFFEQ2.innerHTML='ON';
    var EQintLow = Math.floor(sliderEqLow2.value);
    var EQintMid = Math.floor(sliderEqMid2.value);
    var EQintHight = Math.floor(sliderEqHight2.value);
    eq2.bands[0].gain(EQintLow);
    eq2.bands[1].gain(EQintMid);
    eq2.bands[2].gain(EQintHight);
  }
  else
  {
    ONOFFEQ2.innerHTML='OFF';
    eq2.bands[0].gain(0);
    eq2.bands[1].gain(0);
    eq2.bands[2].gain(0);
  }
}
function sliderEqLowMouseDown2()
{
  if ("oninput" in sliderEqLow2) 
  {
    sliderEqLow2.addEventListener("input", function () 
    {
      if(ONOFFEQ2.innerHTML=='ON')
      {
       var EQint = Math.floor(sliderEqLow2.value);
       eq2.bands[0].gain(EQint);
      }
    }, false);
  }
}
function sliderEqMidMouseDown2()
{
  if ("oninput" in sliderEqMid2) 
  {
    sliderEqMid2.addEventListener("input", function () 
    {
      if(ONOFFEQ2.innerHTML=='ON')
      {
        var EQint = Math.floor(sliderEqMid2.value);
        eq2.bands[1].gain(EQint);
      }
    }, false);
  }
}
function sliderEqHightMouseDown2()
{
  if ("oninput" in sliderEqHight2) 
  {
    sliderEqHight2.addEventListener("input", function () 
    {
      if(ONOFFEQ2.innerHTML=='ON')
      {
        var EQint = Math.floor(sliderEqHight2.value);
        eq2.bands[2].gain(EQint);
      }
    }, false);
  }
}
function ONOFFEQClick3()                                     //CHANNEL 3
{
  if(ONOFFEQ3.innerHTML=='OFF')
  {
    ONOFFEQ3.innerHTML='ON';
    var EQintLow = Math.floor(sliderEqLow3.value);
    var EQintMid = Math.floor(sliderEqMid3.value);
    var EQintHight = Math.floor(sliderEqHight3.value);
    eq3.bands[0].gain(EQintLow);
    eq3.bands[1].gain(EQintMid);
    eq3.bands[2].gain(EQintHight);
  }
  else
  {
    ONOFFEQ3.innerHTML='OFF';
    eq3.bands[0].gain(0);
    eq3.bands[1].gain(0);
    eq3.bands[2].gain(0);
  }
}
function sliderEqLowMouseDown3()
{
  if ("oninput" in sliderEqLow3) 
  {
    sliderEqLow3.addEventListener("input", function () 
    {
      if(ONOFFEQ3.innerHTML=='ON')
      {
       var EQint = Math.floor(sliderEqLow3.value);
       eq3.bands[0].gain(EQint);
      }
    }, false);
  }
}
function sliderEqMidMouseDown3()
{
  if ("oninput" in sliderEqMid3) 
  {
    sliderEqMid3.addEventListener("input", function () 
    {
      if(ONOFFEQ3.innerHTML=='ON')
      {
        var EQint = Math.floor(sliderEqMid3.value);
        eq3.bands[1].gain(EQint);
      }
    }, false);
  }
}
function sliderEqHightMouseDown3()
{
  if ("oninput" in sliderEqHight3) 
  {
    sliderEqHight3.addEventListener("input", function () 
    {
      if(ONOFFEQ3.innerHTML=='ON')
      {
        var EQint = Math.floor(sliderEqHight3.value);
        eq3.bands[2].gain(EQint);
      }
    }, false);
  }
}
function ONOFFEQClick4()                                     //CHANNEL 4
{
  if(ONOFFEQ4.innerHTML=='OFF')
  {
    ONOFFEQ4.innerHTML='ON';
    var EQintLow = Math.floor(sliderEqLow4.value);
    var EQintMid = Math.floor(sliderEqMid4.value);
    var EQintHight = Math.floor(sliderEqHight4.value);
    eq4.bands[0].gain(EQintLow);
    eq4.bands[1].gain(EQintMid);
    eq4.bands[2].gain(EQintHight);
  }
  else
  {
    ONOFFEQ4.innerHTML='OFF';
    eq4.bands[0].gain(0);
    eq4.bands[1].gain(0);
    eq4.bands[2].gain(0);
  }
}
function sliderEqLowMouseDown4()
{
  if ("oninput" in sliderEqLow4) 
  {
    sliderEqLow4.addEventListener("input", function () 
    {
      if(ONOFFEQ4.innerHTML=='ON')
      {
       var EQint = Math.floor(sliderEqLow4.value);
       eq4.bands[0].gain(EQint);
      }
    }, false);
  }
}
function sliderEqMidMouseDown4()
{
  if ("oninput" in sliderEqMid4) 
  {
    sliderEqMid4.addEventListener("input", function () 
    {
      if(ONOFFEQ4.innerHTML=='ON')
      {
        var EQint = Math.floor(sliderEqMid4.value);
        eq4.bands[1].gain(EQint);
      }
    }, false);
  }
}
function sliderEqHightMouseDown4()
{
  if ("oninput" in sliderEqHight4) 
  {
    sliderEqHight4.addEventListener("input", function () 
    {
      if(ONOFFEQ4.innerHTML=='ON')
      {
        var EQint = Math.floor(sliderEqHight4.value);
        eq4.bands[2].gain(EQint);
      }
    }, false);
  }
}
function ONOFFEQClick5()                                     //CHANNEL 5
{
  if(ONOFFEQ5.innerHTML=='OFF')
  {
    ONOFFEQ5.innerHTML='ON';
    var EQintLow = Math.floor(sliderEqLow5.value);
    var EQintMid = Math.floor(sliderEqMid5.value);
    var EQintHight = Math.floor(sliderEqHight5.value);
    eq5.bands[0].gain(EQintLow);
    eq5.bands[1].gain(EQintMid);
    eq5.bands[2].gain(EQintHight);
  }
  else
  {
    ONOFFEQ5.innerHTML='OFF';
    eq5.bands[0].gain(0);
    eq5.bands[1].gain(0);
    eq5.bands[2].gain(0);
  }
}
function sliderEqLowMouseDown5()
{
  if ("oninput" in sliderEqLow5) 
  {
    sliderEqLow5.addEventListener("input", function () 
    {
      if(ONOFFEQ5.innerHTML=='ON')
      {
       var EQint = Math.floor(sliderEqLow5.value);
       eq5.bands[0].gain(EQint);
      }
    }, false);
  }
}
function sliderEqMidMouseDown5()
{
  if ("oninput" in sliderEqMid5) 
  {
    sliderEqMid5.addEventListener("input", function () 
    {
      if(ONOFFEQ5.innerHTML=='ON')
      {
        var EQint = Math.floor(sliderEqMid5.value);
        eq5.bands[1].gain(EQint);
      }
    }, false);
  }
}
function sliderEqHightMouseDown5()
{
  if ("oninput" in sliderEqHight5) 
  {
    sliderEqHight5.addEventListener("input", function () 
    {
      if(ONOFFEQ5.innerHTML=='ON')
      {
        var EQint = Math.floor(sliderEqHight5.value);
        eq5.bands[2].gain(EQint);
      }
    }, false);
  }
}
function ONOFFEQClick6()                                     //CHANNEL 6
{
  if(ONOFFEQ6.innerHTML=='OFF')
  {
    ONOFFEQ6.innerHTML='ON';
    var EQintLow = Math.floor(sliderEqLow6.value);
    var EQintMid = Math.floor(sliderEqMid6.value);
    var EQintHight = Math.floor(sliderEqHight6.value);
    eq6.bands[0].gain(EQintLow);
    eq6.bands[1].gain(EQintMid);
    eq6.bands[2].gain(EQintHight);
  }
  else
  {
    ONOFFEQ6.innerHTML='OFF';
    eq6.bands[0].gain(0);
    eq6.bands[1].gain(0);
    eq6.bands[2].gain(0);
  }
}
function sliderEqLowMouseDown6()
{
  if ("oninput" in sliderEqLow6) 
  {
    sliderEqLow6.addEventListener("input", function () 
    {
      if(ONOFFEQ6.innerHTML=='ON')
      {
       var EQint = Math.floor(sliderEqLow6.value);
       eq6.bands[0].gain(EQint);
      }
    }, false);
  }
}
function sliderEqMidMouseDown6()
{
  if ("oninput" in sliderEqMid6) 
  {
    sliderEqMid6.addEventListener("input", function () 
    {
      if(ONOFFEQ6.innerHTML=='ON')
      {
        var EQint = Math.floor(sliderEqMid6.value);
        eq6.bands[1].gain(EQint);
      }
    }, false);
  }
}
function sliderEqHightMouseDown6()
{
  if ("oninput" in sliderEqHight6) 
  {
    sliderEqHight6.addEventListener("input", function () 
    {
      if(ONOFFEQ6.innerHTML=='ON')
      {
        var EQint = Math.floor(sliderEqHight6.value);
        eq6.bands[2].gain(EQint);
      }
    }, false);
  }
}
function ONOFFEQClick7()                                     //CHANNEL 7
{
  if(ONOFFEQ7.innerHTML=='OFF')
  {
    ONOFFEQ7.innerHTML='ON';
    var EQintLow = Math.floor(sliderEqLow7.value);
    var EQintMid = Math.floor(sliderEqMid7.value);
    var EQintHight = Math.floor(sliderEqHight7.value);
    eq7.bands[0].gain(EQintLow);
    eq7.bands[1].gain(EQintMid);
    eq7.bands[2].gain(EQintHight);
  }
  else
  {
    ONOFFEQ7.innerHTML='OFF';
    eq7.bands[0].gain(0);
    eq7.bands[1].gain(0);
    eq7.bands[2].gain(0);
  }
}
function sliderEqLowMouseDown7()
{
  if ("oninput" in sliderEqLow7) 
  {
    sliderEqLow7.addEventListener("input", function () 
    {
      if(ONOFFEQ7.innerHTML=='ON')
      {
       var EQint = Math.floor(sliderEqLow7.value);
       eq7.bands[0].gain(EQint);
      }
    }, false);
  }
}
function sliderEqMidMouseDown7()
{
  if ("oninput" in sliderEqMid7) 
  {
    sliderEqMid7.addEventListener("input", function () 
    {
      if(ONOFFEQ7.innerHTML=='ON')
      {
        var EQint = Math.floor(sliderEqMid7.value);
        eq7.bands[1].gain(EQint);
      }
    }, false);
  }
}
function sliderEqHightMouseDown7()
{
  if ("oninput" in sliderEqHight7) 
  {
    sliderEqHight7.addEventListener("input", function () 
    {
      if(ONOFFEQ7.innerHTML=='ON')
      {
        var EQint = Math.floor(sliderEqHight7.value);
        eq7.bands[2].gain(EQint);
      }
    }, false);
  }
}
function ONOFFEQClick8()                                     //CHANNEL 8
{
  if(ONOFFEQ8.innerHTML=='OFF')
  {
    ONOFFEQ8.innerHTML='ON';
    var EQintLow = Math.floor(sliderEqLow8.value);
    var EQintMid = Math.floor(sliderEqMid8.value);
    var EQintHight = Math.floor(sliderEqHight8.value);
    eq8.bands[0].gain(EQintLow);
    eq8.bands[1].gain(EQintMid);
    eq8.bands[2].gain(EQintHight);
  }
  else
  {
    ONOFFEQ8.innerHTML='OFF';
    eq8.bands[0].gain(0);
    eq8.bands[1].gain(0);
    eq8.bands[2].gain(0);
  }
}
function sliderEqLowMouseDown8()
{
  if ("oninput" in sliderEqLow8) 
  {
    sliderEqLow8.addEventListener("input", function () 
    {
      if(ONOFFEQ8.innerHTML=='ON')
      {
       var EQint = Math.floor(sliderEqLow8.value);
       eq8.bands[0].gain(EQint);
      }
    }, false);
  }
}
function sliderEqMidMouseDown8()
{
  if ("oninput" in sliderEqMid8) 
  {
    sliderEqMid8.addEventListener("input", function () 
    {
      if(ONOFFEQ8.innerHTML=='ON')
      {
        var EQint = Math.floor(sliderEqMid8.value);
        eq8.bands[1].gain(EQint);
      }
    }, false);
  }
}
function sliderEqHightMouseDown8()
{
  if ("oninput" in sliderEqHight8) 
  {
    sliderEqHight8.addEventListener("input", function () 
    {
      if(ONOFFEQ8.innerHTML=='ON')
      {
        var EQint = Math.floor(sliderEqHight8.value);
        eq8.bands[2].gain(EQint);
      }
    }, false);
  }
}

/******************************COMPRESSOR SETTING******************************/
function ONOFFCompressorClick1()                                     //CHANNEL 1
{
  if(ONOFFCompressor1.innerHTML=='OFF')
  {
    ONOFFCompressor1.innerHTML='ON';
    compressor1.connect();
    compressor1.process(channel1);
    var threshold = map ((sliderCompressor1.value), 0, 100, -100, 0);
    compressor1.threshold(threshold);
  }
  else
  {
    ONOFFCompressor1.innerHTML='OFF';
    compressor1.disconnect();
  }
}
function sliderCompressorMouseDown1()
{
  sliderCompressor1.addEventListener("input", function () 
  {
    if(ONOFFCompressor1.innerHTML=='ON')
    {
        var threshold = map ((sliderCompressor1.value), 0, 100, -100, 0);
        compressor1.threshold(threshold);
    }
    }, false);
}

function ONOFFCompressorClick2()                                     //CHANNEL 2
{
  if(ONOFFCompressor2.innerHTML=='OFF')
  {
    ONOFFCompressor2.innerHTML='ON';
    compressor2.connect();
    compressor2.process(channel2);
    var knee = map ((sliderCompressor2.value), 0, 100, 0, 40);
    compressor2.knee(knee);
  }
  else
  {
    ONOFFCompressor2.innerHTML='OFF';
    compressor2.disconnect();
  }
}
function sliderCompressorMouseDown2()
{
  if ("oninput" in sliderCompressor2) 
  {
    sliderCompressor2.addEventListener("input", function () 
    {
      if(ONOFFCompressor2.innerHTML=='ON')
      {
        var knee = map ((sliderCompressor2.value), 0, 100, 0, 40);
        compressor2.knee(knee);
      }
    }, false);
  }
}
function ONOFFCompressorClick3()                                     //CHANNEL 3
{
  if(ONOFFCompressor3.innerHTML=='OFF')
  {
    ONOFFCompressor3.innerHTML='ON';
    compressor3.connect();
    compressor3.process(channel3);
    var knee = map ((sliderCompressor3.value), 0, 100, 0, 40);
    compressor3.knee(knee);
  }
  else
  {
    ONOFFCompressor3.innerHTML='OFF';
    compressor3.disconnect();
  }
}
function sliderCompressorMouseDown3()
{
  if ("oninput" in sliderCompressor3) 
  {
    sliderCompressor3.addEventListener("input", function () 
    {
      if(ONOFFCompressor3.innerHTML=='ON')
      {
        var knee = map ((sliderCompressor3.value), 0, 100, 0, 40);
        compressor3.knee(knee);
      }
    }, false);
  }
}
function ONOFFCompressorClick4()                                     //CHANNEL 4
{
  if(ONOFFCompressor4.innerHTML=='OFF')
  {
    ONOFFCompressor4.innerHTML='ON';
    compressor4.connect();
    compressor4.process(channel4);
    var knee = map ((sliderCompressor4.value), 0, 100, 0, 40);
    compressor4.knee(knee);
  }
  else
  {
    ONOFFCompressor4.innerHTML='OFF';
    compressor4.disconnect();
  }
}
function sliderCompressorMouseDown4()
{
  if ("oninput" in sliderCompressor4) 
  {
    sliderCompressor4.addEventListener("input", function () 
    {
      if(ONOFFCompressor4.innerHTML=='ON')
      {
        var knee = map ((sliderCompressor4.value), 0, 100, 0, 40);
        compressor4.knee(knee);
      }
    }, false);
  }
}
function ONOFFCompressorClick5()                                     //CHANNEL 5
{
  if(ONOFFCompressor5.innerHTML=='OFF')
  {
    ONOFFCompressor5.innerHTML='ON';
    compressor5.connect();
    compressor5.process(channel5);
    var knee = map ((sliderCompressor5.value), 0, 100, 0, 40);
    compressor5.knee(knee);
  }
  else
  {
    ONOFFCompressor5.innerHTML='OFF';
    compressor5.disconnect();
  }
}
function sliderCompressorMouseDown5()
{
  if ("oninput" in sliderCompressor5) 
  {
    sliderCompressor5.addEventListener("input", function () 
    {
      if(ONOFFCompressor5.innerHTML=='ON')
      {
        var knee = map ((sliderCompressor5.value), 0, 100, 0, 40);
        compressor5.knee(knee);
      }
    }, false);
  }
}
function ONOFFCompressorClick6()                                     //CHANNEL 6
{
  if(ONOFFCompressor6.innerHTML=='OFF')
  {
    ONOFFCompressor6.innerHTML='ON';
    compressor6.connect();
    compressor6.process(channel6);
    var knee = map ((sliderCompressor6.value), 0, 100, 0, 40);
    compressor6.knee(knee);
  }
  else
  {
    ONOFFCompressor6.innerHTML='OFF';
    compressor6.disconnect();
  }
}
function sliderCompressorMouseDown6()
{
  if ("oninput" in sliderCompressor6) 
  {
    sliderCompressor6.addEventListener("input", function () 
    {
      if(ONOFFCompressor6.innerHTML=='ON')
      {
        var knee = map ((sliderCompressor6.value), 0, 100, 0, 40);
        compressor6.knee(knee);
      }
    }, false);
  }
}
function ONOFFCompressorClick7()                                     //CHANNEL 7
{
  if(ONOFFCompressor7.innerHTML=='OFF')
  {
    ONOFFCompressor7.innerHTML='ON';
    compressor7.connect();
    compressor7.process(channel7);
    var knee = map ((sliderCompressor7.value), 0, 100, 0, 40);
    compressor7.knee(knee);
  }
  else
  {
    ONOFFCompressor7.innerHTML='OFF';
    compressor7.disconnect();
  }
}
function sliderCompressorMouseDown7()
{
  if ("oninput" in sliderCompressor7) 
  {
    sliderCompressor7.addEventListener("input", function () 
    {
      if(ONOFFCompressor7.innerHTML=='ON')
      {
        var knee = map ((sliderCompressor7.value), 0, 100, 0, 40);
        compressor7.knee(knee);
      }
    }, false);
  }
}
function ONOFFCompressorClick8()                                     //CHANNEL 8
{
  if(ONOFFCompressor8.innerHTML=='OFF')
  {
    ONOFFCompressor8.innerHTML='ON';
    compressor8.connect();
    compressor8.process(channel8);
    var knee = map ((sliderCompressor8.value), 0, 100, 0, 40);
    compressor8.knee(knee);
  }
  else
  {
    ONOFFCompressor8.innerHTML='OFF';
    compressor8.disconnect();
  }
}
function sliderCompressorMouseDown8()
{
  if ("oninput" in sliderCompressor8) 
  {
    sliderCompressor8.addEventListener("input", function () 
    {
      if(ONOFFCompressor8.innerHTML=='ON')
      {
        var knee = map ((sliderCompressor8.value), 0, 100, 0, 40);
        compressor8.knee(knee);
      }
    }, false);
  }
}

/******************************RATE SETTING******************************/
function sliderRateMouseDown1()                                //CHANNEL 1
{
  if ("oninput" in sliderRate1) 
  {
    sliderRate1.addEventListener("input", function () 
    {
      channel1.rate(sliderRate1.value/100);
    }, false);
  }
}
function sliderRateMouseDown2()                                //CHANNEL 2
{
  if ("oninput" in sliderRate2) 
  {
    sliderRate2.addEventListener("input", function () 
    {
      channel2.rate(sliderRate2.value/100);
    }, false);
  }
}
function sliderRateMouseDown3()                                //CHANNEL 3
{
  if ("oninput" in sliderRate3) 
  {
    sliderRate3.addEventListener("input", function () 
    {
      channel3.rate(sliderRate3.value/100);
    }, false);
  }
}
function sliderRateMouseDown4()                                //CHANNEL 4
{
  if ("oninput" in sliderRate4) 
  {
    sliderRate4.addEventListener("input", function () 
    {
      channel4.rate(sliderRate4.value/100);
    }, false);
  }
}
function sliderRateMouseDown5()                                //CHANNEL 5
{
  if ("oninput" in sliderRate5) 
  {
    sliderRate5.addEventListener("input", function () 
    {
      channel5.rate(sliderRate5.value/100);
    }, false);
  }
}
function sliderRateMouseDown6()                                //CHANNEL 6
{
  if ("oninput" in sliderRate6) 
  {
    sliderRate6.addEventListener("input", function () 
    {
      channel6.rate(sliderRate6.value/100);
    }, false);
  }
}
function sliderRateMouseDown7()                                //CHANNEL 7
{
  if ("oninput" in sliderRate7) 
  {
    sliderRate7.addEventListener("input", function () 
    {
      channel7.rate(sliderRate7.value/100);
    }, false);
  }
}
function sliderRateMouseDown8()                                //CHANNEL 8
{
  if ("oninput" in sliderRate8) 
  {
    sliderRate8.addEventListener("input", function () 
    {
      channel8.rate(sliderRate8.value/100);
    }, false);
  }
}

/******************************PAN SETTING******************************/
function sliderPanMouseDown1()                                //CHANNEL 1
{
  sliderPan1.addEventListener("input", function () 
  {
    channel1.pan(sliderPan1.value/100);
  });
}

function sliderPanMouseDown2()                                //CHANNEL 2
{
  if ("oninput" in sliderPan2) 
  {
    sliderPan2.addEventListener("input", function () 
    {
      channel2.pan(sliderPan2.value/100);
    });
  }
}
function sliderPanMouseDown3()                                //CHANNEL 3
{
  if ("oninput" in sliderPan3) 
  {
    sliderPan3.addEventListener("input", function () 
    {
      channel3.pan(sliderPan3.value/100);
    }, false);
  }
}
function sliderPanMouseDown4()                                //CHANNEL 4
{
  if ("oninput" in sliderPan4) 
  {
    sliderPan4.addEventListener("input", function () 
    {
      channel4.pan(sliderPan4.value/100);
    }, false);
  }
}
function sliderPanMouseDown5()                                //CHANNEL 5
{
  if ("oninput" in sliderPan5) 
  {
    sliderPan5.addEventListener("input", function () 
    {
      channel5.pan(sliderPan5.value/100);
    }, false);
  }
}
function sliderPanMouseDown6()                                //CHANNEL 6
{
  if ("oninput" in sliderPan6) 
  {
    sliderPan6.addEventListener("input", function () 
    {
      channel6.pan(sliderPan6.value/100);
    }, false);
  }
}
function sliderPanMouseDown7()                                //CHANNEL 7
{
  if ("oninput" in sliderPan7) 
  {
    sliderPan7.addEventListener("input", function () 
    {
      channel7.pan(sliderPan7.value/100);
    }, false);
  }
}
function sliderPanMouseDown8()                                //CHANNEL 8
{
  if ("oninput" in sliderPan8) 
  {
    sliderPan8.addEventListener("input", function () 
    {
      channel8.pan(sliderPan8.value/100);
    }, false);
  }
}

/******************************VOLUME SETTING******************************/
function masterVolMouseDown()
{
  masterVol.addEventListener("input", function () 
   {
      masterVolume(masterVol.value/100);
   });
}

function sliderVolumeMouseDown1()                                //CHANNEL 1
{
   sliderVolume1.addEventListener("input", function () 
   {
     if ((boolMute1)&& ((boolSolo == false)||(soloFastPass1 == true))) //if mute ok or solo except the solo channel dont put the sound 
     {channel1.setVolume(sliderVolume1.value/100);}
    });
}
function sliderVolumeMouseDown2()                                //CHANNEL 2
{
   sliderVolume2.addEventListener("input", function () 
   {
     if ((boolMute2)&& ((boolSolo == false)||(soloFastPass2 == true))) //if mute ok or solo except the solo channel dont put the sound 
     {channel2.setVolume(sliderVolume2.value/100);}
    });
}
function sliderVolumeMouseDown3()                                //CHANNEL 3
{
   sliderVolume3.addEventListener("input", function () 
   {
     if ((boolMute3)&& ((boolSolo == false)||(soloFastPass3 == true))) //if mute ok or solo except the solo channel dont put the sound 
     {channel3.setVolume(sliderVolume3.value/100);}
    });
}
function sliderVolumeMouseDown4()                                //CHANNEL 4
{
   sliderVolume4.addEventListener("input", function () 
   {
     if ((boolMute4)&& ((boolSolo == false)||(soloFastPass4 == true))) //if mute ok or solo except the solo channel dont put the sound 
     {channel4.setVolume(sliderVolume4.value/100);}
    });
}
function sliderVolumeMouseDown5()                                //CHANNEL 5
{
   sliderVolume5.addEventListener("input", function () 
   {
     if ((boolMute5)&& ((boolSolo == false)||(soloFastPass5 == true))) //if mute ok or solo except the solo channel dont put the sound 
     {channel5.setVolume(sliderVolume5.value/100);}
    });
}
function sliderVolumeMouseDown6()                                //CHANNEL 6
{
   sliderVolume6.addEventListener("input", function () 
   {
     if ((boolMute6)&& ((boolSolo == false)||(soloFastPass6 == true))) //if mute ok or solo except the solo channel dont put the sound 
     {channel6.setVolume(sliderVolume6.value/100);}
    });
}
function sliderVolumeMouseDown7()                                //CHANNEL 7
{
   sliderVolume7.addEventListener("input", function () 
   {
     if ((boolMute7)&& ((boolSolo == false)||(soloFastPass7 == true))) //if mute ok or solo except the solo channel dont put the sound 
     {channel7.setVolume(sliderVolume7.value/100);}
    });
}
function sliderVolumeMouseDown8()                                //CHANNEL 8
{
   sliderVolume8.addEventListener("input", function () 
   {
     if ((boolMute8)&& ((boolSolo == false)||(soloFastPass8 == true))) //if mute ok or solo except the solo channel dont put the sound 
     {channel8.setVolume(sliderVolume8.value/100);}
    });
}

/******************************MUTE SETTING******************************/
function buttonMuteClick1 ()                                   //CHANNEL 1
{
  if(boolMute1)//if the channel is not already mute
  {
    channel1.setVolume(0.0);//we mute it 
      buttonMute1.style.background = "url(image/muteON.png)";
      boolMute1= false;
    }
  else //if we want to remove the mute we need to see :
  {
      if (!boolSolo) //if we are not solo
      {
        channel1.setVolume(sliderVolume1.value/100);//we can remove the mute
        buttonMute1.style.background = "url(image/muteOFF.png)";
        boolMute1 = true;
      }
      else //if the solo mode is enable
      {
          if (soloFastPass1) //if it's our channel wich is solo
            {channel1.setVolume(sliderVolume1.value/100);}//we can remove the mute
        boolMute1 = true;
        buttonMute1.style.background = "url(image/muteOFF.png)";
      }
  }
}
function buttonMuteClick2 ()                                   //CHANNEL 2
{
  if(boolMute2)
  {
    channel2.setVolume(0.0);
    buttonMute2.style.background = "url(image/muteON.png)";
    boolMute2= false;
  }
  else 
  {
    if (!boolSolo)
    {
     channel2.setVolume(sliderVolume2.value/100);
       buttonMute2.style.background = "url(image/muteOFF.png)";
       boolMute2 = true;
    }
    else 
    {
      if (soloFastPass2) //if we demute the solo channel the sound must go but not if its an other chanel
      {channel2.setVolume(sliderVolume2.value/100);}
     boolMute2 = true;
     buttonMute2.style.background = "url(image/muteOFF.png)";
    }
  }
}
function buttonMuteClick3 ()                                   //CHANNEL 3
{
  if(boolMute3)
  {
    channel3.setVolume(0.0);
    buttonMute3.style.background = "url(image/muteON.png)";
    boolMute3= false;
  }
  else 
  {
    if (!boolSolo)
    {
     channel3.setVolume(sliderVolume3.value/100);
       buttonMute3.style.background = "url(image/muteOFF.png)";
       boolMute3 = true;
    }
    else 
    {
      if (soloFastPass3) //if we demute the solo channel the sound must go but not if its an other chanel
      {channel3.setVolume(sliderVolume3.value/100);}
     boolMute3 = true;
     buttonMute3.style.background = "url(image/muteOFF.png)";
    }
  }
}
function buttonMuteClick4 ()                                   //CHANNEL 4
{
  if(boolMute4)
  {
    channel4.setVolume(0.0);
    buttonMute4.style.background = "url(image/muteON.png)";
    boolMute4= false;
  }
  else 
  {
    if (!boolSolo)
    {
     channel4.setVolume(sliderVolume1.value/100);
       buttonMute4.style.background = "url(image/muteOFF.png)";
       boolMute4 = true;
    }
    else 
    {
      if (soloFastPass4) //if we demute the solo channel the sound must go but not if its an other chanel
      {channel4.setVolume(sliderVolume4.value/100);}
     boolMute4 = true;
     buttonMute4.style.background = "url(image/muteOFF.png)";
    }
  }
}
function buttonMuteClick5 ()                                   //CHANNEL 5
{
  if(boolMute5)
  {
    channel5.setVolume(0.0);
    buttonMute5.style.background = "url(image/muteON.png)";
    boolMute5= false;
  }
  else 
  {
    if (!boolSolo)
    {
     channel5.setVolume(sliderVolume1.value/100);
       buttonMute5.style.background = "url(image/muteOFF.png)";
       boolMute5 = true;
    }
    else 
    {
      if (soloFastPass5) //if we demute the solo channel the sound must go but not if its an other chanel
      {channel5.setVolume(sliderVolume5.value/100);}
     boolMute5 = true;
     buttonMute5.style.background = "url(image/muteOFF.png)";
    }
  }
}
function buttonMuteClick6 ()                                   //CHANNEL 6
{
  if(boolMute6)
  {
    channel6.setVolume(0.0);
    buttonMute6.style.background = "url(image/muteON.png)";
    boolMute6= false;
  }
  else 
  {
    if (!boolSolo)
    {
     channel6.setVolume(sliderVolume1.value/100);
       buttonMute6.style.background = "url(image/muteOFF.png)";
       boolMute6 = true;
    }
    else 
    {
      if (soloFastPass6) //if we demute the solo channel the sound must go but not if its an other chanel
      {channel6.setVolume(sliderVolume6.value/100);}
     boolMute6 = true;
     buttonMute6.style.background = "url(image/muteOFF.png)";
    }
  }
}
function buttonMuteClick7 ()                                   //CHANNEL 7
{
  if(boolMute7)
  {
    channel7.setVolume(0.0);
    buttonMute7.style.background = "url(image/muteON.png)";
    boolMute7= false;
  }
  else 
  {
    if (!boolSolo)
    {
     channel7.setVolume(sliderVolume7.value/100);
       buttonMute7.style.background = "url(image/muteOFF.png)";
       boolMute7 = true;
    }
    else 
    {
      if (soloFastPass7) //if we demute the solo channel the sound must go but not if its an other chanel
      {channel7.setVolume(sliderVolume7.value/100);}
     boolMute7 = true;
     buttonMute7.style.background = "url(image/muteOFF.png)";
    }
  }
}
function buttonMuteClick8 ()                                   //CHANNEL 8
{
  if(boolMute8)
  {
    channel8.setVolume(0.0);
    buttonMute8.style.background = "url(image/muteON.png)";
    boolMute8= false;
  }
  else 
  {
    if (!boolSolo)
    {
     channel8.setVolume(sliderVolume1.value/100);
       buttonMute8.style.background = "url(image/muteOFF.png)";
       boolMute8 = true;
    }
    else 
    {
      if (soloFastPass8) //if we demute the solo channel the sound must go but not if its an other chanel
      {channel8.setVolume(sliderVolume8.value/100);}
     boolMute8 = true;
     buttonMute8.style.background = "url(image/muteOFF.png)";
    }
  }
}

/******************************SOLO SETTING******************************/
function buttonSoloClick1 ()                                   //CHANNEL 1
{
    if (boolSolo == false)//if we want to enable the solo mode
    {// all the channel must be mute
      //channel1.setVolume(0.0);    EXCEPT THE ONE
      channel2.setVolume(0.0);
      channel3.setVolume(0.0);
      channel4.setVolume(0.0);
      channel5.setVolume(0.0);
      channel6.setVolume(0.0);
      channel7.setVolume(0.0);
      channel8.setVolume(0.0);
        buttonSolo1.style.background = '#F60101';
        boolSolo = true;
        soloFastPass1 = true ;
        BoolSolo= false;
    }
    else//if we want to remove the solo mode
    {
        if (boolMute1)                    //we had
          {channel1.setVolume(sliderVolume1.value/100);}  //to check
      if (boolMute2)                    //if there is
          {channel2.setVolume(sliderVolume2.value/100);}  //any channel
        if (boolMute3)                    //mute
        {channel3.setVolume(sliderVolume3.value/100);}  //if not
        if (boolMute4)                    //we put the
          {channel4.setVolume(sliderVolume4.value/100);}  //volume on-
        if (boolMute5)
          {channel5.setVolume(sliderVolume5.value/100);}
        if (boolMute6)
          {channel6.setVolume(sliderVolume6.value/100);}
        if (boolMute7)
          {channel7.setVolume(sliderVolume7.value/100);}
        if (boolMute8)
          {channel8.setVolume(sliderVolume8.value/100);}
        boolSolo = !boolSolo;
        soloFastPass1 = false;
      buttonSolo1.style.background = '#C2BBBB';
      BoolSolo= true;
    }
}
function buttonSoloClick2 ()                                   //CHANNEL 2
{
  if ((BoolSolo == true)||(soloFastPass2 == true))
  {
       if (boolSolo == false)
    {
      channel1.setVolume(0.0);
      //channel2.setVolume(0.0);
      channel3.setVolume(0.0);
      channel4.setVolume(0.0);
      channel5.setVolume(0.0);
      channel6.setVolume(0.0);
      channel7.setVolume(0.0);
      channel8.setVolume(0.0);
      buttonSolo2.style.background = '#F60101';
      soloFastPass2= !soloFastPass2;
      boolSolo = !boolSolo;
      BoolSolo= false;
    }
    else
    {
      if (boolMute1)
      {channel1.setVolume(sliderVolume1.value/100);}
      if (boolMute2)
      {channel2.setVolume(sliderVolume2.value/100);}
      if (boolMute3)
      {channel3.setVolume(sliderVolume3.value/100);}
       if (boolMute4)
       {channel4.setVolume(sliderVolume4.value/100);}
      if (boolMute5)
      {channel5.setVolume(sliderVolume5.value/100);}
      if (boolMute6)
      {channel6.setVolume(sliderVolume6.value/100);}
      if (boolMute7)
      {channel7.setVolume(sliderVolume7.value/100);}
      if (boolMute8)
      {channel8.setVolume(sliderVolume8.value/100);}
        boolSolo = !boolSolo;
      soloFastPass2= !soloFastPass2
      buttonSolo2.style.background = '#C2BBBB';
      BoolSolo= true;
    }
  }
}
function buttonSoloClick3 ()                                   //CHANNEL 3
{
if ((BoolSolo == true)||(soloFastPass3 == true))
  {
       if (boolSolo == false)
    {
      channel1.setVolume(0.0);
      channel2.setVolume(0.0);
      //channel3.setVolume(0.0);
      channel4.setVolume(0.0);
      channel5.setVolume(0.0);
      channel6.setVolume(0.0);
      channel7.setVolume(0.0);
      channel8.setVolume(0.0);
      buttonSolo3.style.background = '#F60101';
      boolSolo = !boolSolo;
      soloFastPass3 =!soloFastPass3;
      BoolSolo= false;
    }
    else
    {
      if (boolMute1)
      {channel1.setVolume(sliderVolume1.value/100);}
      if (boolMute2)
      {channel2.setVolume(sliderVolume2.value/100);}
      if (boolMute3)
      {channel3.setVolume(sliderVolume3.value/100);}
       if (boolMute4)
       {channel4.setVolume(sliderVolume4.value/100);}
      if (boolMute5)
      {channel5.setVolume(sliderVolume5.value/100);}
      if (boolMute6)
      {channel6.setVolume(sliderVolume6.value/100);}
      if (boolMute7)
      {channel7.setVolume(sliderVolume7.value/100);}
      if (boolMute8)
      {channel8.setVolume(sliderVolume8.value/100);}
        boolSolo = !boolSolo;
      soloFastPass3 = !soloFastPass3;
      buttonSolo3.style.background = '#C2BBBB';
      BoolSolo= true;
    }
  }
}
function buttonSoloClick4 ()                                   //CHANNEL 4
{
  if ((BoolSolo == true)||(soloFastPass4 == true))
  {
       if (boolSolo == false)
    {
      channel1.setVolume(0.0);
      channel2.setVolume(0.0);
      channel3.setVolume(0.0);
      //channel4.setVolume(0.0);
      channel5.setVolume(0.0);
      channel6.setVolume(0.0);
      channel7.setVolume(0.0);
      channel8.setVolume(0.0);
      buttonSolo4.style.background = '#F60101';
      boolSolo = !boolSolo;
      soloFastPass4 = !soloFastPass4;
      BoolSolo= false;
    }
    else
    {
      if (boolMute1)
      {channel1.setVolume(sliderVolume1.value/100);}
      if (boolMute2)
      {channel2.setVolume(sliderVolume2.value/100);}
      if (boolMute3)
      {channel3.setVolume(sliderVolume3.value/100);}
       if (boolMute4)
       {channel4.setVolume(sliderVolume4.value/100);}
      if (boolMute5)
      {channel5.setVolume(sliderVolume5.value/100);}
      if (boolMute6)
      {channel6.setVolume(sliderVolume6.value/100);}
      if (boolMute7)
      {channel7.setVolume(sliderVolume7.value/100);}
      if (boolMute8)
      {channel8.setVolume(sliderVolume8.value/100);}
        boolSolo = !boolSolo;
      soloFastPass4 =!soloFastPass4;
      buttonSolo4.style.background = '#C2BBBB';
      BoolSolo= true;
    }
  }
}
function buttonSoloClick5 ()                                   //CHANNEL 5
{
  if ((BoolSolo == true)||(soloFastPass5 == true))
  {
       if (boolSolo == false)
    {
      channel1.setVolume(0.0);
      channel2.setVolume(0.0);
      channel3.setVolume(0.0);
      channel4.setVolume(0.0);
      //channel5.setVolume(0.0);
      channel6.setVolume(0.0);
      channel7.setVolume(0.0);
      channel8.setVolume(0.0);
      buttonSolo5.style.background = '#F60101';
      boolSolo = !boolSolo;
      soloFastPass5= !soloFastPass5;
      BoolSolo= false;
    }
    else
    {
      if (boolMute1)
      {channel1.setVolume(sliderVolume1.value/100);}
      if (boolMute2)
      {channel2.setVolume(sliderVolume2.value/100);}
      if (boolMute3)
      {channel3.setVolume(sliderVolume3.value/100);}
       if (boolMute4)
       {channel4.setVolume(sliderVolume4.value/100);}
      if (boolMute5)
      {channel5.setVolume(sliderVolume5.value/100);}
      if (boolMute6)
      {channel6.setVolume(sliderVolume6.value/100);}
      if (boolMute7)
      {channel7.setVolume(sliderVolume7.value/100);}
      if (boolMute8)
      {channel8.setVolume(sliderVolume8.value/100);}
        boolSolo = !boolSolo;
      soloFastPass5= !soloFastPass5;
      buttonSolo5.style.background = '#C2BBBB';
      BoolSolo= true;
    }
  }
}
function buttonSoloClick6 ()                                   //CHANNEL 6
{
  if ((BoolSolo == true)||(soloFastPass6 == true))
  {
       if (boolSolo == false)
    {
      channel1.setVolume(0.0);
      channel2.setVolume(0.0);
      channel3.setVolume(0.0);
      channel4.setVolume(0.0);
      channel5.setVolume(0.0);
      //channel6.setVolume(0.0);
      channel7.setVolume(0.0);
      channel8.setVolume(0.0);
      buttonSolo6.style.background = '#F60101';
      boolSolo = !boolSolo;
      soloFastPass6 =!soloFastPass6;
      BoolSolo= false;
    }
    else
    {
      if (boolMute1)
      {channel1.setVolume(sliderVolume1.value/100);}
      if (boolMute2)
      {channel2.setVolume(sliderVolume2.value/100);}
      if (boolMute3)
      {channel3.setVolume(sliderVolume3.value/100);}
       if (boolMute4)
       {channel4.setVolume(sliderVolume4.value/100);}
      if (boolMute5)
      {channel5.setVolume(sliderVolume5.value/100);}
      if (boolMute6)
      {channel6.setVolume(sliderVolume6.value/100);}
      if (boolMute7)
      {channel7.setVolume(sliderVolume7.value/100);}
      if (boolMute8)
      {channel8.setVolume(sliderVolume8.value/100);}
        boolSolo = !boolSolo;
      soloFastPass6 =!soloFastPass6;
      buttonSolo6.style.background = '#C2BBBB';
      BoolSolo= true;
    }
  }
}
function buttonSoloClick7 ()                                   //CHANNEL 7
{
  if ((BoolSolo == true)||(soloFastPass7 == true))
  {
       if (boolSolo == false)
    {
      channel1.setVolume(0.0);
      channel2.setVolume(0.0);
      channel3.setVolume(0.0);
      channel4.setVolume(0.0);
      channel5.setVolume(0.0);
      channel6.setVolume(0.0);
      //channel7.setVolume(0.0);
      channel8.setVolume(0.0);
      buttonSolo7.style.background = '#F60101';
      boolSolo = !boolSolo;
      soloFastPass7 = !soloFastPass7;
      BoolSolo= false;
    }
    else
    {
      if (boolMute1)
      {channel1.setVolume(sliderVolume1.value/100);}
      if (boolMute2)
      {channel2.setVolume(sliderVolume2.value/100);}
      if (boolMute3)
      {channel3.setVolume(sliderVolume3.value/100);}
       if (boolMute4)
       {channel4.setVolume(sliderVolume4.value/100);}
      if (boolMute5)
      {channel5.setVolume(sliderVolume5.value/100);}
      if (boolMute6)
      {channel6.setVolume(sliderVolume6.value/100);}
      if (boolMute7)
      {channel7.setVolume(sliderVolume7.value/100);}
      if (boolMute8)
      {channel8.setVolume(sliderVolume8.value/100);}
        boolSolo = !boolSolo;
      soloFastPass7 = !soloFastPass7;
      buttonSolo7.style.background = '#C2BBBB';
      BoolSolo= true;
    }
  }
}
function buttonSoloClick8 ()                                   //CHANNEL 8
{
  if ((BoolSolo == true)||(soloFastPass8 == true))
  {
       if (boolSolo == false)
    {
      channel1.setVolume(0.0);
      channel2.setVolume(0.0);
      channel3.setVolume(0.0);
      channel4.setVolume(0.0);
      channel5.setVolume(0.0);
      channel6.setVolume(0.0);
      channel7.setVolume(0.0);
      //channel8.setVolume(0.0);
      buttonSolo8.style.background = '#F60101';
      boolSolo = !boolSolo;
      soloFastPass8 = !soloFastPass8;
      BoolSolo= false;
    }
    else
    {
      if (boolMute1)
      {channel1.setVolume(sliderVolume1.value/100);}
      if (boolMute2)
      {channel2.setVolume(sliderVolume2.value/100);}
      if (boolMute3)
      {channel3.setVolume(sliderVolume3.value/100);}
       if (boolMute4)
       {channel4.setVolume(sliderVolume4.value/100);}
      if (boolMute5)
      {channel5.setVolume(sliderVolume5.value/100);}
      if (boolMute6)
      {channel6.setVolume(sliderVolume6.value/100);}
      if (boolMute7)
      {channel7.setVolume(sliderVolume7.value/100);}
      if (boolMute8)
      {channel8.setVolume(sliderVolume8.value/100);}
        boolSolo = !boolSolo;
      soloFastPass8 = !soloFastPass8;
      buttonSolo8.style.background = '#C2BBBB';
      BoolSolo= true;
    }
  }
}


/***********************WE CREATE THE THREE BUTTON*************************/
function buttonSaveClick1 ()                                      //CHANNEL1
{
  switch (caseSave1) 
  {
    case 1:
      var save11 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save11.innerHTML = name; 
      save11.id="save11";

      /***put all in var***/
      saveSelecteur11 = selecteur1;
      saveSliderEffect111 = sliderEffect11.value;
      saveInnerEffect111 = selectEffect11.value;
      saveSliderEffect211 = sliderEffect21.value;
      saveInnerEffect211 = selectEffect21.value;
      saveSliderEffect311 = sliderEffect31.value;
      saveInnerEffect311 = selectEffect31.value;
      saveSliderLowPass11 = sliderLowPass1.value;
      saveInnerLowPass11 = ONOFFLowPass1.innerHTML;
      saveSilderEQL11 = sliderEqLow1.value;
      saveSliderEQM11 = sliderEqMid1.value;
      saveSliderEQH11 = sliderEqHight1.value;
      saveInnerEQ11 = ONOFFEQ1.innerHTML;
      saveSliderCompressor11 = sliderCompressor1.value;
      saveInnerCompressor11 = ONOFFCompressor1.innerHTML;
      saveSliderRate11 = sliderRate1.value;
      saveSliderPan11 = sliderPan1.value;
      saveSliderVolume11 = sliderVolume1.value;

      saveSetting11 = document.getElementById('saveChannal1').appendChild(save11);
      saveSetting11.addEventListener('click', saveSetting11Click1);
      caseSave1=2;
    break;

    case 2:
      var save21 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save21.innerHTML = name;
      save21.id="save21"; 

      saveSelecteur21 = selecteur1;
      saveSliderEffect121 = sliderEffect11.value;
      saveInnerEffect121 = selectEffect11.value;
      saveSliderEffect221 = sliderEffect21.value;
      saveInnerEffect221 = selectEffect21.value;
      saveSliderEffect321 = sliderEffect31.value;
      saveInnerEffect321 = selectEffect31.value;
      saveSliderLowPass21 = sliderLowPass1.value;
      saveInnerLowPass21 = ONOFFLowPass1.innerHTML;
      saveSilderEQL21 = sliderEqLow1.value;
      saveSliderEQM21 = sliderEqMid1.value;
      saveSliderEQH21 = sliderEqHight1.value;
      saveInnerEQ21 = ONOFFEQ1.innerHTML;
      saveSliderCompressor21 = sliderCompressor1.value;
      saveInnerCompressor21 = ONOFFCompressor1.innerHTML;
      saveSliderRate21 = sliderRate1.value;
      saveSliderPan21 = sliderPan1.value;
      saveSliderVolume21 = sliderVolume1.value;

      saveSetting21 = document.getElementById('saveChannal1').appendChild(save21);
      saveSetting21.addEventListener('click', saveSetting21Click1);

      caseSave1 =3;
    break;

    case 3:
      var save31 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save31.innerHTML = name; 
      save31.id="save31";

      saveSelecteur31 = selecteur1;
      saveSliderEffect131 = sliderEffect11.value;
      saveInnerEffect131 = selectEffect11.value;
      saveSliderEffect231 = sliderEffect21.value;
      saveInnerEffect231 = selectEffect21.value;
      saveSliderEffect331 = sliderEffect31.value;
      saveInnerEffect331 = selectEffect31.value;
      saveSliderLowPass31 = sliderLowPass1.value;
      saveInnerLowPass31 = ONOFFLowPass1.innerHTML;
      saveSilderEQL31 = sliderEqLow1.value;
      saveSliderEQM31 = sliderEqMid1.value;
      saveSliderEQH31 = sliderEqHight1.value;
      saveInnerEQ31 = ONOFFEQ1.innerHTML;
      saveSliderCompressor31 = sliderCompressor1.value;
      saveInnerCompressor31 = ONOFFCompressor1.innerHTML;
      saveSliderRate31 = sliderRate1.value;
      saveSliderPan31 = sliderPan1.value;
      saveSliderVolume31 = sliderVolume1.value;

      saveSetting31 = document.getElementById('saveChannal1').appendChild(save31);
      saveSetting31.addEventListener('click', saveSetting31Click1);

      caseSave1 =4;
    break;

    case 4:
      var save11 = document.getElementById('save11'); 
      var save41 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save41.innerHTML = name; 
      save41.id="save11";

      saveSelecteur11 = selecteur1;
      saveSliderEffect111 = sliderEffect11.value;
      saveInnerEffect111 = selectEffect11.value;
      saveSliderEffect211 = sliderEffect21.value;
      saveInnerEffect211 = selectEffect21.value;
      saveSliderEffect311 = sliderEffect31.value;
      saveInnerEffect311 = selectEffect31.value;
      saveSliderLowPass11 = sliderLowPass1.value;
      saveInnerLowPass11 = ONOFFLowPass1.innerHTML;
      saveSilderEQL11 = sliderEqLow1.value;
      saveSliderEQM11 = sliderEqMid1.value;
      saveSliderEQH11 = sliderEqHight1.value;
      saveInnerEQ11 = ONOFFEQ1.innerHTML;
      saveSliderCompressor11 = sliderCompressor1.value;
      saveInnerCompressor11 = ONOFFCompressor1.innerHTML;
      saveSliderRate11 = sliderRate1.value;
      saveSliderPan11 = sliderPan1.value;
      saveSliderVolume11 = sliderVolume1.value;

      save11.replaceChild(save41, save11.firstChild);
      caseSave1 =5;
    break;

    case 5:
      var save21 = document.getElementById('save21'); 
      var save51 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save51.innerHTML = name; 
      save51.id="save21";

      saveSelecteur21 = selecteur1;
      saveSliderEffect121 = sliderEffect11.value;
      saveInnerEffect121 = selectEffect11.value;
      saveSliderEffect221 = sliderEffect21.value;
      saveInnerEffect221 = selectEffect21.value;
      saveSliderEffect321 = sliderEffect31.value;
      saveInnerEffect321 = selectEffect31.value;
      saveSliderLowPass21 = sliderLowPass1.value;
      saveInnerLowPass21 = ONOFFLowPass1.innerHTML;
      saveSilderEQL21 = sliderEqLow1.value;
      saveSliderEQM21 = sliderEqMid1.value;
      saveSliderEQH21 = sliderEqHight1.value;
      saveInnerEQ21 = ONOFFEQ1.innerHTML;
      saveSliderCompressor21 = sliderCompressor1.value;
      saveInnerCompressor21 = ONOFFCompressor1.innerHTML;
      saveSliderRate21 = sliderRate1.value;
      saveSliderPan21 = sliderPan1.value;
      saveSliderVolume21 = sliderVolume1.value;

      save21.replaceChild(save51, save21.firstChild);
      caseSave1 =6;
    break;

    case 6:
      var save31 = document.getElementById('save31'); 
      var save61 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save61.innerHTML = name; 
      save61.id="save31";

      saveSelecteur31 = selecteur1;
      saveSliderEffect131 = sliderEffect11.value;
      saveInnerEffect131 = selectEffect11.value;
      saveSliderEffect231 = sliderEffect21.value;
      saveInnerEffect231 = selectEffect21.value;
      saveSliderEffect331 = sliderEffect31.value;
      saveInnerEffect331 = selectEffect31.value;
      saveSliderLowPass31 = sliderLowPass1.value;
      saveInnerLowPass31 = ONOFFLowPass1.innerHTML;
      saveSilderEQL31 = sliderEqLow1.value;
      saveSliderEQM31 = sliderEqMid1.value;
      saveSliderEQH31 = sliderEqHight1.value;
      saveInnerEQ31 = ONOFFEQ1.innerHTML;
      saveSliderCompressor31 = sliderCompressor1.value;
      saveInnerCompressor31 = ONOFFCompressor1.innerHTML;
      saveSliderRate31 = sliderRate1.value;
      saveSliderPan31 = sliderPan1.value;
      saveSliderVolume31 = sliderVolume1.value;

      save31.replaceChild(save61, save31.firstChild);
      caseSave1 =4;
    break;

    default:
        alert("Really strange...");
  }
}
function buttonSaveClick2 ()                                        //CHANNEL 2
{
  switch (caseSave2) 
  {
    case 1:
      var save12 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save12.innerHTML = name; 
      save12.id="save12";

      /***put all in var***/
      saveSelecteur12 = selecteur2;
      saveSliderEffect112 = sliderEffect12.value;
      saveInnerEffect112 = selectEffect12.value;
      saveSliderEffect212 = sliderEffect22.value;
      saveInnerEffect212 = selectEffect22.value;
      saveSliderEffect312 = sliderEffect32.value;
      saveInnerEffect312 = selectEffect32.value;
      saveSliderLowPass12 = sliderLowPass2.value;
      saveInnerLowPass12 = ONOFFLowPass2.innerHTML;
      saveSilderEQL12 = sliderEqLow2.value;
      saveSliderEQM12 = sliderEqMid2.value;
      saveSliderEQH12 = sliderEqHight2.value;
      saveInnerEQ12 = ONOFFEQ2.innerHTML;
      saveSliderCompressor12 = sliderCompressor2.value;
      saveInnerCompressor12 = ONOFFCompressor2.innerHTML;
      saveSliderRate12 = sliderRate2.value;
      saveSliderPan12 = sliderPan2.value;
      saveSliderVolume12 = sliderVolume2.value;

      saveSetting12 = document.getElementById('saveChannal2').appendChild(save12);
      saveSetting12.addEventListener('click', saveSetting11Click2);
      caseSave2=2;
    break;

    case 2:
      var save22 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save22.innerHTML = name;
      save22.id="save22"; 

      saveSelecteur22 = selecteur2;
      saveSliderEffect122 = sliderEffect12.value;
      saveInnerEffect122 = selectEffect12.value;
      saveSliderEffect222 = sliderEffect22.value;
      saveInnerEffect222 = selectEffect22.value;
      saveSliderEffect322 = sliderEffect32.value;
      saveInnerEffect322 = selectEffect32.value;
      saveSliderLowPass22 = sliderLowPass2.value;
      saveInnerLowPass22 = ONOFFLowPass2.innerHTML;
      saveSilderEQL22 = sliderEqLow2.value;
      saveSliderEQM22 = sliderEqMid2.value;
      saveSliderEQH22 = sliderEqHight2.value;
      saveInnerEQ22 = ONOFFEQ2.innerHTML;
      saveSliderCompressor22 = sliderCompressor2.value;
      saveInnerCompressor22 = ONOFFCompressor2.innerHTML;
      saveSliderRate22 = sliderRate2.value;
      saveSliderPan22 = sliderPan2.value;
      saveSliderVolume22 = sliderVolume2.value;

      saveSetting22 = document.getElementById('saveChannal2').appendChild(save22);
      saveSetting22.addEventListener('click', saveSetting21Click2);

      caseSave2 =3;
    break;

    case 3:
      var save32 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save32.innerHTML = name; 
      save32.id="save32";

      saveSelecteur32 = selecteur2;
      saveSliderEffect132 = sliderEffect12.value;
      saveInnerEffect132 = selectEffect12.value;
      saveSliderEffect232 = sliderEffect22.value;
      saveInnerEffect232 = selectEffect22.value;
      saveSliderEffect332 = sliderEffect32.value;
      saveInnerEffect332 = selectEffect32.value;
      saveSliderLowPass32 = sliderLowPass2.value;
      saveInnerLowPass32 = ONOFFLowPass2.innerHTML;
      saveSilderEQL32 = sliderEqLow2.value;
      saveSliderEQM32 = sliderEqMid2.value;
      saveSliderEQH32 = sliderEqHight2.value;
      saveInnerEQ32 = ONOFFEQ2.innerHTML;
      saveSliderCompressor32 = sliderCompressor2.value;
      saveInnerCompressor32 = ONOFFCompressor2.innerHTML;
      saveSliderRate32 = sliderRate2.value;
      saveSliderPan32 = sliderPan2.value;
      saveSliderVolume32 = sliderVolume2.value;

      saveSetting32 = document.getElementById('saveChannal2').appendChild(save32);
      saveSetting32.addEventListener('click', saveSetting31Click2);

      caseSave2 =4;
    break;

    case 4:
      var save12 = document.getElementById('save12'); 
      var save42 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save42.innerHTML = name; 
      save42.id="save12";

      saveSelecteur12 = selecteur2;
      saveSliderEffect112 = sliderEffect12.value;
      saveInnerEffect112 = selectEffect12.value;
      saveSliderEffect212 = sliderEffect22.value;
      saveInnerEffect212 = selectEffect22.value;
      saveSliderEffect312 = sliderEffect32.value;
      saveInnerEffect312 = selectEffect32.value;
      saveSliderLowPass12 = sliderLowPass2.value;
      saveInnerLowPass12 = ONOFFLowPass2.innerHTML;
      saveSilderEQL12 = sliderEqLow2.value;
      saveSliderEQM12 = sliderEqMid2.value;
      saveSliderEQH12 = sliderEqHight2.value;
      saveInnerEQ12 = ONOFFEQ2.innerHTML;
      saveSliderCompressor12 = sliderCompressor2.value;
      saveInnerCompressor12 = ONOFFCompressor2.innerHTML;
      saveSliderRate12 = sliderRate2.value;
      saveSliderPan12 = sliderPan2.value;
      saveSliderVolume12 = sliderVolume2.value;

      save12.replaceChild(save42, save12.firstChild);
      caseSave2 =5;
    break;

    case 5:
      var save22 = document.getElementById('save22'); 
      var save52 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save52.innerHTML = name; 
      save52.id="save22";

      saveSelecteur22 = selecteur2;
      saveSliderEffect122 = sliderEffect12.value;
      saveInnerEffect122 = selectEffect12.value;
      saveSliderEffect222 = sliderEffect22.value;
      saveInnerEffect222 = selectEffect22.value;
      saveSliderEffect322 = sliderEffect32.value;
      saveInnerEffect322 = selectEffect32.value;
      saveSliderLowPass22 = sliderLowPass2.value;
      saveInnerLowPass22 = ONOFFLowPass2.innerHTML;
      saveSilderEQL22 = sliderEqLow2.value;
      saveSliderEQM22 = sliderEqMid2.value;
      saveSliderEQH22 = sliderEqHight2.value;
      saveInnerEQ22 = ONOFFEQ2.innerHTML;
      saveSliderCompressor22 = sliderCompressor2.value;
      saveInnerCompressor22 = ONOFFCompressor2.innerHTML;
      saveSliderRate22 = sliderRate2.value;
      saveSliderPan22 = sliderPan2.value;
      saveSliderVolume22 = sliderVolume2.value;

      save22.replaceChild(save52, save22.firstChild);
      caseSave2 =6;
    break;

    case 6:
      var save32 = document.getElementById('save32'); 
      var save62 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save62.innerHTML = name; 
      save62.id="save32";

      saveSelecteur32 = selecteur2;
      saveSliderEffect132 = sliderEffect12.value;
      saveInnerEffect132 = selectEffect12.value;
      saveSliderEffect232 = sliderEffect22.value;
      saveInnerEffect232 = selectEffect22.value;
      saveSliderEffect332 = sliderEffect32.value;
      saveInnerEffect332 = selectEffect32.value;
      saveSliderLowPass32 = sliderLowPass2.value;
      saveInnerLowPass32 = ONOFFLowPass2.innerHTML;
      saveSilderEQL32 = sliderEqLow2.value;
      saveSliderEQM32 = sliderEqMid2.value;
      saveSliderEQH32 = sliderEqHight2.value;
      saveInnerEQ32 = ONOFFEQ2.innerHTML;
      saveSliderCompressor32 = sliderCompressor2.value;
      saveInnerCompressor32 = ONOFFCompressor2.innerHTML;
      saveSliderRate32 = sliderRate2.value;
      saveSliderPan32 = sliderPan2.value;
      saveSliderVolume32 = sliderVolume2.value;

      save32.replaceChild(save62, save32.firstChild);
      caseSave2 =4;
    break;

    default:
        alert("Really strange...");
  }
}
function buttonSaveClick3 ()                                        //CHANNEL 3
{
  switch (caseSave3) 
  {
    case 1:
      var save13 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save13.innerHTML = name; 
      save13.id="save13";

      /***put all in var***/
      saveSelecteur13 = selecteur3;
      saveSliderEffect113 = sliderEffect13.value;
      saveInnerEffect113 = selectEffect13.value;
      saveSliderEffect213 = sliderEffect23.value;
      saveInnerEffect213 = selectEffect23.value;
      saveSliderEffect313 = sliderEffect33.value;
      saveInnerEffect313 = selectEffect33.value;
      saveSliderLowPass13 = sliderLowPass3.value;
      saveInnerLowPass13 = ONOFFLowPass3.innerHTML;
      saveSilderEQL13 = sliderEqLow3.value;
      saveSliderEQM13 = sliderEqMid3.value;
      saveSliderEQH13 = sliderEqHight3.value;
      saveInnerEQ13 = ONOFFEQ3.innerHTML;
      saveSliderCompressor13 = sliderCompressor3.value;
      saveInnerCompressor13 = ONOFFCompressor3.innerHTML;
      saveSliderRate13 = sliderRate3.value;
      saveSliderPan13 = sliderPan3.value;
      saveSliderVolume13 = sliderVolume3.value;

      saveSetting13 = document.getElementById('saveChannal3').appendChild(save13);
      saveSetting13.addEventListener('click', saveSetting11Click3);
      caseSave3=2;
    break;

    case 2:
      var save23 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save23.innerHTML = name;
      save23.id="save23"; 

      saveSelecteur23 = selecteur3;
      saveSliderEffect123 = sliderEffect13.value;
      saveInnerEffect123 = selectEffect13.value;
      saveSliderEffect223 = sliderEffect23.value;
      saveInnerEffect223 = selectEffect23.value;
      saveSliderEffect323 = sliderEffect33.value;
      saveInnerEffect323 = selectEffect33.value;
      saveSliderLowPass23 = sliderLowPass3.value;
      saveInnerLowPass23 = ONOFFLowPass3.innerHTML;
      saveSilderEQL23 = sliderEqLow3.value;
      saveSliderEQM23 = sliderEqMid3.value;
      saveSliderEQH23 = sliderEqHight3.value;
      saveInnerEQ23 = ONOFFEQ3.innerHTML;
      saveSliderCompressor23 = sliderCompressor3.value;
      saveInnerCompressor23 = ONOFFCompressor3.innerHTML;
      saveSliderRate23 = sliderRate3.value;
      saveSliderPan23 = sliderPan3.value;
      saveSliderVolume23 = sliderVolume3.value;

      saveSetting23 = document.getElementById('saveChannal3').appendChild(save23);
      saveSetting23.addEventListener('click', saveSetting21Click3);

      caseSave3 =3;
    break;

    case 3:
      var save33 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save33.innerHTML = name; 
      save33.id="save33";

      saveSelecteur33 = selecteur3;
      saveSliderEffect133 = sliderEffect13.value;
      saveInnerEffect133 = selectEffect13.value;
      saveSliderEffect233 = sliderEffect23.value;
      saveInnerEffect233 = selectEffect23.value;
      saveSliderEffect333 = sliderEffect33.value;
      saveInnerEffect333 = selectEffect33.value;
      saveSliderLowPass33 = sliderLowPass3.value;
      saveInnerLowPass33 = ONOFFLowPass3.innerHTML;
      saveSilderEQL33 = sliderEqLow3.value;
      saveSliderEQM33 = sliderEqMid3.value;
      saveSliderEQH33 = sliderEqHight3.value;
      saveInnerEQ33 = ONOFFEQ3.innerHTML;
      saveSliderCompressor33 = sliderCompressor3.value;
      saveInnerCompressor33 = ONOFFCompressor3.innerHTML;
      saveSliderRate33 = sliderRate3.value;
      saveSliderPan33 = sliderPan3.value;
      saveSliderVolume33 = sliderVolume3.value;

      saveSetting33 = document.getElementById('saveChannal3').appendChild(save33);
      saveSetting33.addEventListener('click', saveSetting31Click3);

      caseSave3 =4;
    break;

    case 4:
      var save13 = document.getElementById('save13'); 
      var save43 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save43.innerHTML = name; 
      save43.id="save13";

      saveSelecteur13 = selecteur3;
      saveSliderEffect113 = sliderEffect13.value;
      saveInnerEffect113 = selectEffect13.value;
      saveSliderEffect213 = sliderEffect23.value;
      saveInnerEffect213 = selectEffect23.value;
      saveSliderEffect313 = sliderEffect33.value;
      saveInnerEffect313 = selectEffect33.value;
      saveSliderLowPass13 = sliderLowPass3.value;
      saveInnerLowPass13 = ONOFFLowPass3.innerHTML;
      saveSilderEQL13 = sliderEqLow3.value;
      saveSliderEQM13 = sliderEqMid3.value;
      saveSliderEQH13 = sliderEqHight3.value;
      saveInnerEQ13 = ONOFFEQ3.innerHTML;
      saveSliderCompressor13 = sliderCompressor3.value;
      saveInnerCompressor13 = ONOFFCompressor3.innerHTML;
      saveSliderRate13 = sliderRate3.value;
      saveSliderPan13 = sliderPan3.value;
      saveSliderVolume13 = sliderVolume3.value;

      save13.replaceChild(save43, save13.firstChild);
      caseSave3 =5;
    break;

    case 5:
      var save23 = document.getElementById('save23'); 
      var save53 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save53.innerHTML = name; 
      save53.id="save23";

      saveSelecteur23 = selecteur3;
      saveSliderEffect123 = sliderEffect13.value;
      saveInnerEffect123 = selectEffect13.value;
      saveSliderEffect223 = sliderEffect23.value;
      saveInnerEffect223 = selectEffect23.value;
      saveSliderEffect323 = sliderEffect33.value;
      saveInnerEffect323 = selectEffect33.value;
      saveSliderLowPass23 = sliderLowPass3.value;
      saveInnerLowPass23 = ONOFFLowPass3.innerHTML;
      saveSilderEQL23 = sliderEqLow3.value;
      saveSliderEQM23 = sliderEqMid3.value;
      saveSliderEQH23 = sliderEqHight3.value;
      saveInnerEQ23 = ONOFFEQ3.innerHTML;
      saveSliderCompressor23 = sliderCompressor3.value;
      saveInnerCompressor23 = ONOFFCompressor3.innerHTML;
      saveSliderRate23 = sliderRate3.value;
      saveSliderPan23 = sliderPan3.value;
      saveSliderVolume23 = sliderVolume3.value;

      save23.replaceChild(save53, save23.firstChild);
      caseSave3 =6;
    break;

    case 6:
      var save33 = document.getElementById('save33'); 
      var save63 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save63.innerHTML = name; 
      save63.id="save33";

      saveSelecteur33 = selecteur3;
      saveSliderEffect133 = sliderEffect13.value;
      saveInnerEffect133 = selectEffect13.value;
      saveSliderEffect233 = sliderEffect23.value;
      saveInnerEffect233 = selectEffect23.value;
      saveSliderEffect333 = sliderEffect33.value;
      saveInnerEffect333 = selectEffect33.value;
      saveSliderLowPass33 = sliderLowPass3.value;
      saveInnerLowPass33 = ONOFFLowPass3.innerHTML;
      saveSilderEQL33 = sliderEqLow3.value;
      saveSliderEQM33 = sliderEqMid3.value;
      saveSliderEQH33 = sliderEqHight3.value;
      saveInnerEQ33 = ONOFFEQ3.innerHTML;
      saveSliderCompressor33 = sliderCompressor3.value;
      saveInnerCompressor33 = ONOFFCompressor3.innerHTML;
      saveSliderRate33 = sliderRate3.value;
      saveSliderPan33 = sliderPan3.value;
      saveSliderVolume33 = sliderVolume3.value;

      save33.replaceChild(save63, save33.firstChild);
      caseSave3 =4;
    break;

    default:
        alert("Really strange...");
  }
}
function buttonSaveClick4 ()                                        //CHANNEL 4
{
  switch (caseSave4) 
  {
    case 1:
      var save14 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save14.innerHTML = name; 
      save14.id="save14";

      /***put all in var***/
      saveSelecteur14 = selecteur4;
      saveSliderEffect114 = sliderEffect14.value;
      saveInnerEffect114 = selectEffect14.value;
      saveSliderEffect214 = sliderEffect24.value;
      saveInnerEffect214 = selectEffect24.value;
      saveSliderEffect314 = sliderEffect34.value;
      saveInnerEffect314 = selectEffect34.value;
      saveSliderLowPass14 = sliderLowPass4.value;
      saveInnerLowPass14 = ONOFFLowPass4.innerHTML;
      saveSilderEQL14 = sliderEqLow4.value;
      saveSliderEQM14 = sliderEqMid4.value;
      saveSliderEQH14 = sliderEqHight4.value;
      saveInnerEQ14 = ONOFFEQ4.innerHTML;
      saveSliderCompressor14 = sliderCompressor4.value;
      saveInnerCompressor14 = ONOFFCompressor4.innerHTML;
      saveSliderRate14 = sliderRate4.value;
      saveSliderPan14 = sliderPan4.value;
      saveSliderVolume14 = sliderVolume4.value;

      saveSetting14 = document.getElementById('saveChannal4').appendChild(save14);
      saveSetting14.addEventListener('click', saveSetting11Click4);
      caseSave4=2;
    break;

    case 2:
      var save24 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save24.innerHTML = name;
      save24.id="save24"; 

      saveSelecteur24 = selecteur4;
      saveSliderEffect124 = sliderEffect14.value;
      saveInnerEffect124 = selectEffect14.value;
      saveSliderEffect224 = sliderEffect24.value;
      saveInnerEffect224 = selectEffect24.value;
      saveSliderEffect324 = sliderEffect34.value;
      saveInnerEffect324 = selectEffect34.value;
      saveSliderLowPass24 = sliderLowPass4.value;
      saveInnerLowPass24 = ONOFFLowPass4.innerHTML;
      saveSilderEQL24 = sliderEqLow4.value;
      saveSliderEQM24 = sliderEqMid4.value;
      saveSliderEQH24 = sliderEqHight4.value;
      saveInnerEQ24 = ONOFFEQ4.innerHTML;
      saveSliderCompressor24 = sliderCompressor4.value;
      saveInnerCompressor24 = ONOFFCompressor4.innerHTML;
      saveSliderRate24 = sliderRate4.value;
      saveSliderPan24 = sliderPan4.value;
      saveSliderVolume24 = sliderVolume4.value;

      saveSetting24 = document.getElementById('saveChannal4').appendChild(save24);
      saveSetting24.addEventListener('click', saveSetting21Click4);

      caseSave4 =3;
    break;

    case 3:
      var save34 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save34.innerHTML = name; 
      save34.id="save34";

      saveSelecteur34 = selecteur4;
      saveSliderEffect134 = sliderEffect14.value;
      saveInnerEffect134 = selectEffect14.value;
      saveSliderEffect234 = sliderEffect24.value;
      saveInnerEffect234 = selectEffect24.value;
      saveSliderEffect334 = sliderEffect34.value;
      saveInnerEffect334 = selectEffect34.value;
      saveSliderLowPass34 = sliderLowPass4.value;
      saveInnerLowPass34 = ONOFFLowPass4.innerHTML;
      saveSilderEQL34 = sliderEqLow4.value;
      saveSliderEQM34 = sliderEqMid4.value;
      saveSliderEQH34 = sliderEqHight4.value;
      saveInnerEQ34 = ONOFFEQ4.innerHTML;
      saveSliderCompressor34 = sliderCompressor4.value;
      saveInnerCompressor34 = ONOFFCompressor4.innerHTML;
      saveSliderRate34 = sliderRate4.value;
      saveSliderPan34 = sliderPan4.value;
      saveSliderVolume34 = sliderVolume4.value;

      saveSetting34 = document.getElementById('saveChannal4').appendChild(save34);
      saveSetting34.addEventListener('click', saveSetting31Click4);

      caseSave4 =4;
    break;

    case 4:
      var save14 = document.getElementById('save14'); 
      var save44 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save44.innerHTML = name; 
      save44.id="save14";

      saveSelecteur14 = selecteur4;
      saveSliderEffect114 = sliderEffect14.value;
      saveInnerEffect114 = selectEffect14.value;
      saveSliderEffect214 = sliderEffect24.value;
      saveInnerEffect214 = selectEffect24.value;
      saveSliderEffect314 = sliderEffect34.value;
      saveInnerEffect314 = selectEffect34.value;
      saveSliderLowPass14 = sliderLowPass4.value;
      saveInnerLowPass14 = ONOFFLowPass4.innerHTML;
      saveSilderEQL14 = sliderEqLow4.value;
      saveSliderEQM14 = sliderEqMid4.value;
      saveSliderEQH14 = sliderEqHight4.value;
      saveInnerEQ14 = ONOFFEQ4.innerHTML;
      saveSliderCompressor14 = sliderCompressor4.value;
      saveInnerCompressor14 = ONOFFCompressor4.innerHTML;
      saveSliderRate14 = sliderRate4.value;
      saveSliderPan14 = sliderPan4.value;
      saveSliderVolume14 = sliderVolume4.value;

      save14.replaceChild(save44, save14.firstChild);
      caseSave4 =5;
    break;

    case 5:
      var save24 = document.getElementById('save24'); 
      var save54 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save54.innerHTML = name; 
      save54.id="save24";

      saveSelecteur24 = selecteur4;
      saveSliderEffect124 = sliderEffect14.value;
      saveInnerEffect124 = selectEffect14.value;
      saveSliderEffect224 = sliderEffect24.value;
      saveInnerEffect224 = selectEffect24.value;
      saveSliderEffect324 = sliderEffect34.value;
      saveInnerEffect324 = selectEffect34.value;
      saveSliderLowPass24 = sliderLowPass4.value;
      saveInnerLowPass24 = ONOFFLowPass4.innerHTML;
      saveSilderEQL24 = sliderEqLow4.value;
      saveSliderEQM24 = sliderEqMid4.value;
      saveSliderEQH24 = sliderEqHight4.value;
      saveInnerEQ24 = ONOFFEQ4.innerHTML;
      saveSliderCompressor24 = sliderCompressor4.value;
      saveInnerCompressor24 = ONOFFCompressor4.innerHTML;
      saveSliderRate24 = sliderRate4.value;
      saveSliderPan24 = sliderPan4.value;
      saveSliderVolume24 = sliderVolume4.value;

      save24.replaceChild(save54, save24.firstChild);
      caseSave4 =6;
    break;

    case 6:
      var save34 = document.getElementById('save34'); 
      var save64 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save64.innerHTML = name; 
      save64.id="save34";

      saveSelecteur34 = selecteur4;
      saveSliderEffect134 = sliderEffect14.value;
      saveInnerEffect134 = selectEffect14.value;
      saveSliderEffect234 = sliderEffect24.value;
      saveInnerEffect234 = selectEffect24.value;
      saveSliderEffect334 = sliderEffect34.value;
      saveInnerEffect334 = selectEffect34.value;
      saveSliderLowPass34 = sliderLowPass4.value;
      saveInnerLowPass34 = ONOFFLowPass4.innerHTML;
      saveSilderEQL34 = sliderEqLow4.value;
      saveSliderEQM34 = sliderEqMid4.value;
      saveSliderEQH34 = sliderEqHight4.value;
      saveInnerEQ34 = ONOFFEQ4.innerHTML;
      saveSliderCompressor34 = sliderCompressor4.value;
      saveInnerCompressor34 = ONOFFCompressor4.innerHTML;
      saveSliderRate34 = sliderRate4.value;
      saveSliderPan34 = sliderPan4.value;
      saveSliderVolume34 = sliderVolume4.value;

      save34.replaceChild(save64, save34.firstChild);
      caseSave4 =4;
    break;

    default:
        alert("Really strange...");
  }
}
function buttonSaveClick5 ()                                        //CHANNEL 5
{
  switch (caseSave5) 
  {
    case 1:
      var save15 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save15.innerHTML = name; 
      save15.id="save15";

      /***put all in var***/
      saveSelecteur15 = selecteur5;
      saveSliderEffect115 = sliderEffect15.value;
      saveInnerEffect115 = selectEffect15.value;
      saveSliderEffect215 = sliderEffect25.value;
      saveInnerEffect215 = selectEffect25.value;
      saveSliderEffect315 = sliderEffect35.value;
      saveInnerEffect315 = selectEffect35.value;
      saveSliderLowPass15 = sliderLowPass5.value;
      saveInnerLowPass15 = ONOFFLowPass5.innerHTML;
      saveSilderEQL15 = sliderEqLow5.value;
      saveSliderEQM15 = sliderEqMid5.value;
      saveSliderEQH15 = sliderEqHight5.value;
      saveInnerEQ15 = ONOFFEQ5.innerHTML;
      saveSliderCompressor15 = sliderCompressor5.value;
      saveInnerCompressor15 = ONOFFCompressor5.innerHTML;
      saveSliderRate15 = sliderRate5.value;
      saveSliderPan15 = sliderPan5.value;
      saveSliderVolume15 = sliderVolume5.value;

      saveSetting15 = document.getElementById('saveChannal5').appendChild(save15);
      saveSetting15.addEventListener('click', saveSetting11Click5);
      caseSave5=2;
    break;

    case 2:
      var save25 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save25.innerHTML = name;
      save25.id="save25"; 

      saveSelecteur25 = selecteur5;
      saveSliderEffect125 = sliderEffect15.value;
      saveInnerEffect125 = selectEffect15.value;
      saveSliderEffect225 = sliderEffect25.value;
      saveInnerEffect225 = selectEffect25.value;
      saveSliderEffect325 = sliderEffect35.value;
      saveInnerEffect325 = selectEffect35.value;
      saveSliderLowPass25 = sliderLowPass5.value;
      saveInnerLowPass25 = ONOFFLowPass5.innerHTML;
      saveSilderEQL25 = sliderEqLow5.value;
      saveSliderEQM25 = sliderEqMid5.value;
      saveSliderEQH25 = sliderEqHight5.value;
      saveInnerEQ25 = ONOFFEQ5.innerHTML;
      saveSliderCompressor25 = sliderCompressor5.value;
      saveInnerCompressor25 = ONOFFCompressor5.innerHTML;
      saveSliderRate25 = sliderRate5.value;
      saveSliderPan25 = sliderPan5.value;
      saveSliderVolume25 = sliderVolume5.value;

      saveSetting25 = document.getElementById('saveChannal5').appendChild(save25);
      saveSetting25.addEventListener('click', saveSetting21Click5);

      caseSave5 =3;
    break;

    case 3:
      var save35 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save35.innerHTML = name; 
      save35.id="save35";

      saveSelecteur35 = selecteur5;
      saveSliderEffect135 = sliderEffect15.value;
      saveInnerEffect135 = selectEffect15.value;
      saveSliderEffect235 = sliderEffect25.value;
      saveInnerEffect235 = selectEffect25.value;
      saveSliderEffect335 = sliderEffect35.value;
      saveInnerEffect335 = selectEffect35.value;
      saveSliderLowPass35 = sliderLowPass5.value;
      saveInnerLowPass35 = ONOFFLowPass5.innerHTML;
      saveSilderEQL35 = sliderEqLow5.value;
      saveSliderEQM35 = sliderEqMid5.value;
      saveSliderEQH35 = sliderEqHight5.value;
      saveInnerEQ35 = ONOFFEQ5.innerHTML;
      saveSliderCompressor35 = sliderCompressor5.value;
      saveInnerCompressor35 = ONOFFCompressor5.innerHTML;
      saveSliderRate35 = sliderRate5.value;
      saveSliderPan35 = sliderPan5.value;
      saveSliderVolume35 = sliderVolume5.value;

      saveSetting35 = document.getElementById('saveChannal5').appendChild(save35);
      saveSetting35.addEventListener('click', saveSetting31Click5);

      caseSave5 =4;
    break;

    case 4:
      var save15 = document.getElementById('save15'); 
      var save45 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save45.innerHTML = name; 
      save45.id="save15";

      saveSelecteur15 = selecteur5;
      saveSliderEffect115 = sliderEffect15.value;
      saveInnerEffect115 = selectEffect15.value;
      saveSliderEffect215 = sliderEffect25.value;
      saveInnerEffect215 = selectEffect25.value;
      saveSliderEffect315 = sliderEffect35.value;
      saveInnerEffect315 = selectEffect35.value;
      saveSliderLowPass15 = sliderLowPass5.value;
      saveInnerLowPass15 = ONOFFLowPass5.innerHTML;
      saveSilderEQL15 = sliderEqLow5.value;
      saveSliderEQM15 = sliderEqMid5.value;
      saveSliderEQH15 = sliderEqHight5.value;
      saveInnerEQ15 = ONOFFEQ5.innerHTML;
      saveSliderCompressor15 = sliderCompressor5.value;
      saveInnerCompressor15 = ONOFFCompressor5.innerHTML;
      saveSliderRate15 = sliderRate5.value;
      saveSliderPan15 = sliderPan5.value;
      saveSliderVolume15 = sliderVolume5.value;

      save15.replaceChild(save45, save15.firstChild);
      caseSave5 =5;
    break;

    case 5:
      var save25 = document.getElementById('save25'); 
      var save55 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save55.innerHTML = name; 
      save55.id="save25";

      saveSelecteur25 = selecteur5;
      saveSliderEffect125 = sliderEffect15.value;
      saveInnerEffect125 = selectEffect15.value;
      saveSliderEffect225 = sliderEffect25.value;
      saveInnerEffect225 = selectEffect25.value;
      saveSliderEffect325 = sliderEffect35.value;
      saveInnerEffect325 = selectEffect35.value;
      saveSliderLowPass25 = sliderLowPass5.value;
      saveInnerLowPass25 = ONOFFLowPass5.innerHTML;
      saveSilderEQL25 = sliderEqLow5.value;
      saveSliderEQM25 = sliderEqMid5.value;
      saveSliderEQH25 = sliderEqHight5.value;
      saveInnerEQ25 = ONOFFEQ5.innerHTML;
      saveSliderCompressor25 = sliderCompressor5.value;
      saveInnerCompressor25 = ONOFFCompressor5.innerHTML;
      saveSliderRate25 = sliderRate5.value;
      saveSliderPan25 = sliderPan5.value;
      saveSliderVolume25 = sliderVolume5.value;

      save25.replaceChild(save55, save25.firstChild);
      caseSave5 =6;
    break;

    case 6:
      var save35 = document.getElementById('save35'); 
      var save65 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save65.innerHTML = name; 
      save65.id="save35";

      saveSelecteur35 = selecteur5;
      saveSliderEffect135 = sliderEffect15.value;
      saveInnerEffect135 = selectEffect15.value;
      saveSliderEffect235 = sliderEffect25.value;
      saveInnerEffect235 = selectEffect25.value;
      saveSliderEffect335 = sliderEffect35.value;
      saveInnerEffect335 = selectEffect35.value;
      saveSliderLowPass35 = sliderLowPass5.value;
      saveInnerLowPass35 = ONOFFLowPass5.innerHTML;
      saveSilderEQL35 = sliderEqLow5.value;
      saveSliderEQM35 = sliderEqMid5.value;
      saveSliderEQH35 = sliderEqHight5.value;
      saveInnerEQ35 = ONOFFEQ5.innerHTML;
      saveSliderCompressor35 = sliderCompressor5.value;
      saveInnerCompressor35 = ONOFFCompressor5.innerHTML;
      saveSliderRate35 = sliderRate5.value;
      saveSliderPan35 = sliderPan5.value;
      saveSliderVolume35 = sliderVolume5.value;

      save35.replaceChild(save65, save35.firstChild);
      caseSave5 =4;
    break;

    default:
        alert("Really strange...");
  }
}
function buttonSaveClick6 ()                                        //CHANNEL 6
{
  switch (caseSave6) 
  {
    case 1:
      var save16 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save16.innerHTML = name; 
      save16.id="save16";

      /***put all in var***/
      saveSelecteur16 = selecteur6;
      saveSliderEffect116 = sliderEffect16.value;
      saveInnerEffect116 = selectEffect16.value;
      saveSliderEffect216 = sliderEffect26.value;
      saveInnerEffect216 = selectEffect26.value;
      saveSliderEffect316 = sliderEffect36.value;
      saveInnerEffect316 = selectEffect36.value;
      saveSliderLowPass16 = sliderLowPass6.value;
      saveInnerLowPass16 = ONOFFLowPass6.innerHTML;
      saveSilderEQL16 = sliderEqLow6.value;
      saveSliderEQM16 = sliderEqMid6.value;
      saveSliderEQH16 = sliderEqHight6.value;
      saveInnerEQ16 = ONOFFEQ6.innerHTML;
      saveSliderCompressor16 = sliderCompressor6.value;
      saveInnerCompressor16 = ONOFFCompressor6.innerHTML;
      saveSliderRate16 = sliderRate6.value;
      saveSliderPan15 = sliderPan5.value;
      saveSliderVolume15 = sliderVolume5.value;

      saveSetting16 = document.getElementById('saveChannal6').appendChild(save16);
      saveSetting16.addEventListener('click', saveSetting11Click6);
      caseSave6=2;
    break;

    case 2:
      var save26 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save26.innerHTML = name;
      save26.id="save26"; 

      saveSelecteur26 = selecteur6;
      saveSliderEffect126 = sliderEffect16.value;
      saveInnerEffect126 = selectEffect16.value;
      saveSliderEffect226 = sliderEffect26.value;
      saveInnerEffect226 = selectEffect26.value;
      saveSliderEffect326 = sliderEffect36.value;
      saveInnerEffect326 = selectEffect36.value;
      saveSliderLowPass26 = sliderLowPass6.value;
      saveInnerLowPass26 = ONOFFLowPass6.innerHTML;
      saveSilderEQL26 = sliderEqLow6.value;
      saveSliderEQM26 = sliderEqMid6.value;
      saveSliderEQH26 = sliderEqHight6.value;
      saveInnerEQ26 = ONOFFEQ6.innerHTML;
      saveSliderCompressor26 = sliderCompressor6.value;
      saveInnerCompressor26 = ONOFFCompressor6.innerHTML;
      saveSliderRate26 = sliderRate6.value;
      saveSliderPan26 = sliderPan6.value;
      saveSliderVolume26 = sliderVolume6.value;

      saveSetting26 = document.getElementById('saveChannal6').appendChild(save26);
      saveSetting26.addEventListener('click', saveSetting21Click6);

      caseSave6 =3;
    break;

    case 3:
      var save36 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save36.innerHTML = name; 
      save36.id="save36";

      saveSelecteur36 = selecteur6;
      saveSliderEffect136 = sliderEffect16.value;
      saveInnerEffect136 = selectEffect16.value;
      saveSliderEffect236 = sliderEffect26.value;
      saveInnerEffect236 = selectEffect26.value;
      saveSliderEffect336 = sliderEffect36.value;
      saveInnerEffect336 = selectEffect36.value;
      saveSliderLowPass36 = sliderLowPass6.value;
      saveInnerLowPass36 = ONOFFLowPass6.innerHTML;
      saveSilderEQL36 = sliderEqLow6.value;
      saveSliderEQM36 = sliderEqMid6.value;
      saveSliderEQH36 = sliderEqHight6.value;
      saveInnerEQ36 = ONOFFEQ6.innerHTML;
      saveSliderCompressor36 = sliderCompressor6.value;
      saveInnerCompressor36 = ONOFFCompressor6.innerHTML;
      saveSliderRate36 = sliderRate6.value;
      saveSliderPan36 = sliderPan6.value;
      saveSliderVolume36 = sliderVolume6.value;

      saveSetting36 = document.getElementById('saveChannal6').appendChild(save36);
      saveSetting36.addEventListener('click', saveSetting31Click6);

      caseSave6 =4;
    break;

    case 4:
      var save16 = document.getElementById('save16'); 
      var save46 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save46.innerHTML = name; 
      save46.id="save16";

      saveSelecteur16 = selecteur6;
      saveSliderEffect116 = sliderEffect16.value;
      saveInnerEffect116 = selectEffect16.value;
      saveSliderEffect216 = sliderEffect26.value;
      saveInnerEffect216 = selectEffect26.value;
      saveSliderEffect316 = sliderEffect36.value;
      saveInnerEffect316 = selectEffect36.value;
      saveSliderLowPass16 = sliderLowPass6.value;
      saveInnerLowPass16 = ONOFFLowPass6.innerHTML;
      saveSilderEQL16 = sliderEqLow6.value;
      saveSliderEQM16 = sliderEqMid6.value;
      saveSliderEQH16 = sliderEqHight6.value;
      saveInnerEQ16 = ONOFFEQ6.innerHTML;
      saveSliderCompressor16 = sliderCompressor6.value;
      saveInnerCompressor16 = ONOFFCompressor6.innerHTML;
      saveSliderRate16 = sliderRate6.value;
      saveSliderPan16 = sliderPan6.value;
      saveSliderVolume16 = sliderVolume6.value;

      save16.replaceChild(save46, save16.firstChild);
      caseSave6 =5;
    break;

    case 5:
      var save26 = document.getElementById('save26'); 
      var save56 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save56.innerHTML = name; 
      save56.id="save26";

      saveSelecteur26 = selecteur6;
      saveSliderEffect126 = sliderEffect16.value;
      saveInnerEffect126 = selectEffect16.value;
      saveSliderEffect226 = sliderEffect26.value;
      saveInnerEffect226 = selectEffect26.value;
      saveSliderEffect326 = sliderEffect36.value;
      saveInnerEffect326 = selectEffect36.value;
      saveSliderLowPass26 = sliderLowPass6.value;
      saveInnerLowPass26 = ONOFFLowPass6.innerHTML;
      saveSilderEQL26 = sliderEqLow6.value;
      saveSliderEQM26 = sliderEqMid6.value;
      saveSliderEQH26 = sliderEqHight6.value;
      saveInnerEQ26 = ONOFFEQ6.innerHTML;
      saveSliderCompressor26 = sliderCompressor6.value;
      saveInnerCompressor26 = ONOFFCompressor6.innerHTML;
      saveSliderRate26 = sliderRate6.value;
      saveSliderPan26 = sliderPan6.value;
      saveSliderVolume26 = sliderVolume6.value;

      save26.replaceChild(save56, save26.firstChild);
      caseSave6 =6;
    break;

    case 6:
      var save36 = document.getElementById('save36'); 
      var save66 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save66.innerHTML = name; 
      save66.id="save36";

      saveSelecteur36 = selecteur6;
      saveSliderEffect136 = sliderEffect16.value;
      saveInnerEffect136 = selectEffect16.value;
      saveSliderEffect236 = sliderEffect26.value;
      saveInnerEffect236 = selectEffect26.value;
      saveSliderEffect336 = sliderEffect36.value;
      saveInnerEffect336 = selectEffect36.value;
      saveSliderLowPass36 = sliderLowPass6.value;
      saveInnerLowPass36 = ONOFFLowPass6.innerHTML;
      saveSilderEQL36 = sliderEqLow6.value;
      saveSliderEQM36 = sliderEqMid6.value;
      saveSliderEQH36 = sliderEqHight6.value;
      saveInnerEQ36 = ONOFFEQ6.innerHTML;
      saveSliderCompressor36 = sliderCompressor6.value;
      saveInnerCompressor36 = ONOFFCompressor6.innerHTML;
      saveSliderRate36 = sliderRate6.value;
      saveSliderPan36 = sliderPan6.value;
      saveSliderVolume36 = sliderVolume6.value;

      save36.replaceChild(save66, save36.firstChild);
      caseSave6 =4;
    break;

    default:
        alert("Really strange...");
  }
}
function buttonSaveClick7 ()                                        //CHANNEL 7
{
  switch (caseSave7) 
  {
    case 1:
      var save17 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save17.innerHTML = name; 
      save17.id="save17";

      /***put all in var***/
      saveSelecteur17 = selecteur7;
      saveSliderEffect117 = sliderEffect17.value;
      saveInnerEffect117 = selectEffect17.value;
      saveSliderEffect217 = sliderEffect27.value;
      saveInnerEffect217 = selectEffect27.value;
      saveSliderEffect317 = sliderEffect37.value;
      saveInnerEffect317 = selectEffect37.value;
      saveSliderLowPass17 = sliderLowPass7.value;
      saveInnerLowPass17 = ONOFFLowPass7.innerHTML;
      saveSilderEQL17 = sliderEqLow7.value;
      saveSliderEQM17 = sliderEqMid7.value;
      saveSliderEQH17 = sliderEqHight7.value;
      saveInnerEQ17 = ONOFFEQ7.innerHTML;
      saveSliderCompressor17 = sliderCompressor7.value;
      saveInnerCompressor17 = ONOFFCompressor7.innerHTML;
      saveSliderRate17 = sliderRate7.value;
      saveSliderPan17 = sliderPan7.value;
      saveSliderVolume17 = sliderVolume7.value;

      saveSetting17 = document.getElementById('saveChannal7').appendChild(save17);
      saveSetting17.addEventListener('click', saveSetting11Click7);
      caseSave7=2;
    break;

    case 2:
      var save27 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save27.innerHTML = name;
      save27.id="save27"; 

      saveSelecteur27 = selecteur7;
      saveSliderEffect127 = sliderEffect17.value;
      saveInnerEffect127 = selectEffect17.value;
      saveSliderEffect227 = sliderEffect27.value;
      saveInnerEffect227 = selectEffect27.value;
      saveSliderEffect327 = sliderEffect37.value;
      saveInnerEffect327 = selectEffect37.value;
      saveSliderLowPass27 = sliderLowPass7.value;
      saveInnerLowPass27 = ONOFFLowPass7.innerHTML;
      saveSilderEQL27 = sliderEqLow7.value;
      saveSliderEQM27 = sliderEqMid7.value;
      saveSliderEQH27 = sliderEqHight7.value;
      saveInnerEQ27 = ONOFFEQ7.innerHTML;
      saveSliderCompressor27 = sliderCompressor7.value;
      saveInnerCompressor27 = ONOFFCompressor7.innerHTML;
      saveSliderRate27 = sliderRate7.value;
      saveSliderPan27 = sliderPan7.value;
      saveSliderVolume27 = sliderVolume7.value;

      saveSetting27 = document.getElementById('saveChannal7').appendChild(save27);
      saveSetting27.addEventListener('click', saveSetting21Click7);

      caseSave7 =3;
    break;

    case 3:
      var save37 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save37.innerHTML = name; 
      save37.id="save37";

      saveSelecteur37 = selecteur7;
      saveSliderEffect137 = sliderEffect17.value;
      saveInnerEffect137 = selectEffect17.value;
      saveSliderEffect237 = sliderEffect27.value;
      saveInnerEffect237 = selectEffect27.value;
      saveSliderEffect337 = sliderEffect37.value;
      saveInnerEffect337 = selectEffect37.value;
      saveSliderLowPass37 = sliderLowPass7.value;
      saveInnerLowPass37 = ONOFFLowPass7.innerHTML;
      saveSilderEQL37 = sliderEqLow7.value;
      saveSliderEQM37 = sliderEqMid7.value;
      saveSliderEQH37 = sliderEqHight7.value;
      saveInnerEQ37 = ONOFFEQ7.innerHTML;
      saveSliderCompressor37 = sliderCompressor7.value;
      saveInnerCompressor37 = ONOFFCompressor7.innerHTML;
      saveSliderRate37 = sliderRate7.value;
      saveSliderPan37 = sliderPan7.value;
      saveSliderVolume37 = sliderVolume7.value;

      saveSetting37 = document.getElementById('saveChannal7').appendChild(save37);
      saveSetting37.addEventListener('click', saveSetting31Click7);

      caseSave7 =4;
    break;

    case 4:
      var save17 = document.getElementById('save17'); 
      var save47 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save47.innerHTML = name; 
      save47.id="save17";

      saveSelecteur17 = selecteur7;
      saveSliderEffect117 = sliderEffect17.value;
      saveInnerEffect117 = selectEffect17.value;
      saveSliderEffect217 = sliderEffect27.value;
      saveInnerEffect217 = selectEffect27.value;
      saveSliderEffect317 = sliderEffect37.value;
      saveInnerEffect317 = selectEffect37.value;
      saveSliderLowPass17 = sliderLowPass7.value;
      saveInnerLowPass17 = ONOFFLowPass7.innerHTML;
      saveSilderEQL17 = sliderEqLow7.value;
      saveSliderEQM17 = sliderEqMid7.value;
      saveSliderEQH17 = sliderEqHight7.value;
      saveInnerEQ17 = ONOFFEQ7.innerHTML;
      saveSliderCompressor17 = sliderCompressor7.value;
      saveInnerCompressor17 = ONOFFCompressor7.innerHTML;
      saveSliderRate17 = sliderRate7.value;
      saveSliderPan17 = sliderPan7.value;
      saveSliderVolume17 = sliderVolume7.value;

      save17.replaceChild(save47, save17.firstChild);
      caseSave7 =5;
    break;

    case 5:
      var save27 = document.getElementById('save27'); 
      var save57 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save57.innerHTML = name; 
      save57.id="save27";

      saveSelecteur27 = selecteur7;
      saveSliderEffect127 = sliderEffect17.value;
      saveInnerEffect127 = selectEffect17.value;
      saveSliderEffect227 = sliderEffect27.value;
      saveInnerEffect227 = selectEffect27.value;
      saveSliderEffect327 = sliderEffect37.value;
      saveInnerEffect327 = selectEffect37.value;
      saveSliderLowPass27 = sliderLowPass7.value;
      saveInnerLowPass27 = ONOFFLowPass7.innerHTML;
      saveSilderEQL27 = sliderEqLow7.value;
      saveSliderEQM27 = sliderEqMid7.value;
      saveSliderEQH27 = sliderEqHight7.value;
      saveInnerEQ27 = ONOFFEQ7.innerHTML;
      saveSliderCompressor27 = sliderCompressor7.value;
      saveInnerCompressor27 = ONOFFCompressor7.innerHTML;
      saveSliderRate27 = sliderRate7.value;
      saveSliderPan27 = sliderPan7.value;
      saveSliderVolume27 = sliderVolume7.value;

      save27.replaceChild(save57, save27.firstChild);
      caseSave7 =6;
    break;

    case 6:
      var save37 = document.getElementById('save37'); 
      var save67 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save67.innerHTML = name; 
      save67.id="save37";

      saveSelecteur37 = selecteur7;
      saveSliderEffect137 = sliderEffect17.value;
      saveInnerEffect137 = selectEffect17.value;
      saveSliderEffect237 = sliderEffect27.value;
      saveInnerEffect237 = selectEffect27.value;
      saveSliderEffect337 = sliderEffect37.value;
      saveInnerEffect337 = selectEffect37.value;
      saveSliderLowPass37 = sliderLowPass7.value;
      saveInnerLowPass37 = ONOFFLowPass7.innerHTML;
      saveSilderEQL37 = sliderEqLow7.value;
      saveSliderEQM37 = sliderEqMid7.value;
      saveSliderEQH37 = sliderEqHight7.value;
      saveInnerEQ37 = ONOFFEQ7.innerHTML;
      saveSliderCompressor37 = sliderCompressor7.value;
      saveInnerCompressor37 = ONOFFCompressor7.innerHTML;
      saveSliderRate37 = sliderRate7.value;
      saveSliderPan37 = sliderPan7.value;
      saveSliderVolume37 = sliderVolume7.value;

      save37.replaceChild(save67, save37.firstChild);
      caseSave7 =4;
    break;

    default:
        alert("Really strange...");
  }
}
function buttonSaveClick8 ()                                        //CHANNEL 8
{
  switch (caseSave8) 
  {
    case 1:
      var save18 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save18.innerHTML = name; 
      save18.id="save18";

      /***put all in var***/
      saveSelecteur18 = selecteur8;
      saveSliderEffect118 = sliderEffect18.value;
      saveInnerEffect118 = buttonEffect18.innerHTML;
      saveSliderEffect218 = sliderEffect28.value;
      saveInnerEffect218 = selectEffect28.value;
      saveSliderEffect318 = sliderEffect38.value;
      saveInnerEffect318 = selectEffect38.value;
      saveSliderLowPass18 = sliderLowPass8.value;
      saveInnerLowPass18 = ONOFFLowPass8.innerHTML;
      saveSilderEQL18 = sliderEqLow8.value;
      saveSliderEQM18 = sliderEqMid8.value;
      saveSliderEQH18 = sliderEqHight8.value;
      saveInnerEQ18 = ONOFFEQ8.innerHTML;
      saveSliderCompressor18 = sliderCompressor8.value;
      saveInnerCompressor18 = ONOFFCompressor8.innerHTML;
      saveSliderRate18 = sliderRate8.value;
      saveSliderPan18 = sliderPan8.value;
      saveSliderVolume18 = sliderVolume8.value;

      saveSetting18 = document.getElementById('saveChannal8').appendChild(save18);
      saveSetting18.addEventListener('click', saveSetting11Click8);
      caseSave8=2;
    break;

    case 2:
      var save28 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save28.innerHTML = name;
      save28.id="save28"; 

      saveSelecteur28 = selecteur8;
      saveSliderEffect128 = sliderEffect18.value;
      saveInnerEffect128 = buttonEffect18.innerHTML;
      saveSliderEffect228 = sliderEffect28.value;
      saveInnerEffect228 = selectEffect28.value;
      saveSliderEffect328 = sliderEffect38.value;
      saveInnerEffect328 = selectEffect38.value;
      saveSliderLowPass28 = sliderLowPass8.value;
      saveInnerLowPass28 = ONOFFLowPass8.innerHTML;
      saveSilderEQL28 = sliderEqLow8.value;
      saveSliderEQM28 = sliderEqMid8.value;
      saveSliderEQH28 = sliderEqHight8.value;
      saveInnerEQ28 = ONOFFEQ8.innerHTML;
      saveSliderCompressor28 = sliderCompressor8.value;
      saveInnerCompressor28 = ONOFFCompressor8.innerHTML;
      saveSliderRate28 = sliderRate8.value;
      saveSliderPan28 = sliderPan8.value;
      saveSliderVolume28 = sliderVolume8.value;

      saveSetting28 = document.getElementById('saveChannal8').appendChild(save28);
      saveSetting28.addEventListener('click', saveSetting21Click8);

      caseSave8 =3;
    break;

    case 3:
      var save38 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save38.innerHTML = name; 
      save38.id="save38";

      saveSelecteur38 = selecteur8;
      saveSliderEffect138 = sliderEffect18.value;
      saveInnerEffect138 = buttonEffect18.innerHTML;
      saveSliderEffect238 = sliderEffect28.value;
      saveInnerEffect238 = selectEffect28.value;
      saveSliderEffect338 = sliderEffect38.value;
      saveInnerEffect338 = selectEffect38.value;
      saveSliderLowPass38 = sliderLowPass8.value;
      saveInnerLowPass38 = ONOFFLowPass8.innerHTML;
      saveSilderEQL38 = sliderEqLow8.value;
      saveSliderEQM38 = sliderEqMid8.value;
      saveSliderEQH38 = sliderEqHight8.value;
      saveInnerEQ38 = ONOFFEQ8.innerHTML;
      saveSliderCompressor38 = sliderCompressor8.value;
      saveInnerCompressor38 = ONOFFCompressor8.innerHTML;
      saveSliderRate38 = sliderRate8.value;
      saveSliderPan38 = sliderPan8.value;
      saveSliderVolume38 = sliderVolume8.value;

      saveSetting38 = document.getElementById('saveChannal8').appendChild(save38);
      saveSetting38.addEventListener('click', saveSetting31Click8);

      caseSave8 =4;
    break;

    case 4:
      var save18 = document.getElementById('save18'); 
      var save48 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save48.innerHTML = name; 
      save48.id="save18";

      saveSelecteur18 = selecteur7;
      saveSliderEffect118 = sliderEffect18.value;
      saveInnerEffect118 = buttonEffect18.innerHTML;
      saveSliderEffect218 = sliderEffect28.value;
      saveInnerEffect218 = selectEffect28.value;
      saveSliderEffect318 = sliderEffect38.value;
      saveInnerEffect318 = selectEffect38.value;
      saveSliderLowPass18 = sliderLowPass8.value;
      saveInnerLowPass18 = ONOFFLowPass8.innerHTML;
      saveSilderEQL18 = sliderEqLow8.value;
      saveSliderEQM18 = sliderEqMid8.value;
      saveSliderEQH18 = sliderEqHight8.value;
      saveInnerEQ18 = ONOFFEQ8.innerHTML;
      saveSliderCompressor18= sliderCompressor8.value;
      saveInnerCompressor18 = ONOFFCompressor8.innerHTML;
      saveSliderRate18 = sliderRate8.value;
      saveSliderPan18 = sliderPan8.value;
      saveSliderVolume18 = sliderVolume8.value;

      save18.replaceChild(save48, save18.firstChild);
      caseSave8 =5;
    break;

    case 5:
      var save28 = document.getElementById('save28'); 
      var save58 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save58.innerHTML = name; 
      save58.id="save28";

      saveSelecteur28 = selecteur8;
      saveSliderEffect128 = sliderEffect18.value;
      saveInnerEffect128 = buttonEffect18.innerHTML;
      saveSliderEffect228 = sliderEffect28.value;
      saveInnerEffect228 = selectEffect28.value;
      saveSliderEffect328 = sliderEffect38.value;
      saveInnerEffect328 = selectEffect38.value;
      saveSliderLowPass28 = sliderLowPass8.value;
      saveInnerLowPass28 = ONOFFLowPass8.innerHTML;
      saveSilderEQL28 = sliderEqLow8.value;
      saveSliderEQM28 = sliderEqMid8.value;
      saveSliderEQH28 = sliderEqHight8.value;
      saveInnerEQ28 = ONOFFEQ8.innerHTML;
      saveSliderCompressor28 = sliderCompressor8.value;
      saveInnerCompressor28 = ONOFFCompressor8.innerHTML;
      saveSliderRate28 = sliderRate8.value;
      saveSliderPan28 = sliderPan8.value;
      saveSliderVolume28 = sliderVolume8.value;

      save28.replaceChild(save58, save28.firstChild);
      caseSave8 =6;
    break;

    case 6:
      var save38 = document.getElementById('save38'); 
      var save68 = document.createElement("button"); 
      var name = prompt ("Could you enter the name of the setting ?")
      save68.innerHTML = name; 
      save68.id="save38";

      saveSelecteur38 = selecteur8;
      saveSliderEffect138 = sliderEffect18.value;
      saveInnerEffect138 = buttonEffect18.innerHTML;
      saveSliderEffect238 = sliderEffect28.value;
      saveInnerEffect238 = selectEffect28.value;
      saveSliderEffect338 = sliderEffect38.value;
      saveInnerEffect338 = selectEffect38.value;
      saveSliderLowPass38 = sliderLowPass8.value;
      saveInnerLowPass38 = ONOFFLowPass8.innerHTML;
      saveSilderEQL38 = sliderEqLow8.value;
      saveSliderEQM38 = sliderEqMid8.value;
      saveSliderEQH38 = sliderEqHight8.value;
      saveInnerEQ38 = ONOFFEQ8.innerHTML;
      saveSliderCompressor38 = sliderCompressor8.value;
      saveInnerCompressor38 = ONOFFCompressor8.innerHTML;
      saveSliderRate38 = sliderRate8.value;
      saveSliderPan38 = sliderPan8.value;
      saveSliderVolume38 = sliderVolume8.value;

      save38.replaceChild(save68, save38.firstChild);
      caseSave8 =4;
    break;

    default:
        alert("Really strange...");
  }
}

/**************************RECALL SETTING SAVE1**************************/
function saveSetting11Click1 ()                                //CHANNEL 1
{
  /******We choose the music******/
  if (saveSelecteur11 != selecteur1)
  {
    if (saveSelecteur11==1)
    {
      channel1.disconnect(); 
      channel1 = loadSound("audio/11.mp3");
    }
    else if (saveSelecteur11==2)
    {
      channel1.disconnect(); 
      channel1 = loadSound("audio/21.mp3");
    }
    else
    {
      channel1.disconnect(); 
      channel1 = loadSound("audio/31.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect111 != selectEffect11.value)||(saveSliderEffect111!=sliderEffect11.value))//first effect
  {
    if (saveInnerEffect111 == 'Reverb')
    {
      selectEffect11.value='Reverb';
      effect11 = new p5.Reverb();effect11.process(channel1, 6, 0.2);
      effect11.drywet(saveSliderEffect111/100);
      effect11.amp(2.5);
      sliderEffect11.value=saveSliderEffect111;
    }
    else if (saveInnerEffect111 == 'Delay')
    {
      selectEffect11.value='Delay';
      effect11 = new p5.Delay();
      effect11.process(channel1);
      effect11.drywet(saveSliderEffect111/100);
      effect11.amp(2.5);      
    }
    else if (saveInnerEffect111 == 'Ping Pong')
    {
      selectEffect11.value='Ping Pong';
      effect11 = new p5.Delay;
      effect11.process(channel1);
      effect11.drywet(saveSliderEffect111/100);
      effect11.amp(2.5); 
      sliderEffect11.value=saveSliderEffect111;
    }
    else 
    {
      selectEffect11.value='NONE';
      effect11.amp(0); 
      sliderEffect11.value=saveSliderEffect111;
    }
  }
  if ((saveInnerEffect211 != selectEffect21.value)||(saveSliderEffect211!=sliderEffect21.value))//second effect
  {
    if (saveInnerEffect211 == 'Reverb')
    {
      selectEffect21.value='Reverb';
      effect21 = new p5.Reverb();
      effect21.process(channel1);
      effect21.drywet(saveSliderEffect211/100);
      effect21.amp(2.5);
      sliderEffect21.value=saveSliderEffect211;
    }
    else if (saveInnerEffect211 == 'Delay')
    {
      selectEffect21.value='Delay';
      effect21 = new p5.Delay();
      effect21.process(channel1);
      effect21.drywet(saveSliderEffect211/100);
      effect21.amp(2.5);      
    }
    else if (saveInnerEffect211 == 'Ping Pong')
    {
      selectEffect21.value='Ping Pong';
      effect21 = new p5.Delay;
      effect21.process(channel1);
      effect21.drywet(saveSliderEffect211/100);
      effect21.amp(2.5); 
      sliderEffect11.value=saveSliderEffect211;
    }
    else 
    {
      selectEffect21.value='NONE';
      effect21.amp(0); 
      sliderEffect21.value=saveSliderEffect211;
    }
  }
  if ((saveInnerEffect311 != selectEffect31.value)||(saveSliderEffect311!=sliderEffect31.value))//third effect
  {
    if (saveInnerEffect311 == 'Reverb')
    {
      selectEffect31.value='Reverb';
      effect31 = new p5.Reverb();
      effect31.process(channel1);
      effect31.drywet(saveSliderEffect311/100);
      effect31.amp(2.5);
      sliderEffect31.value=saveSliderEffect311;
    }
    else if (saveInnerEffect311 == 'Delay')
    {
      selectEffect31.value='Delay';
      effect31 = new p5.Delay();
      effect31.process(channel1);
      effect31.drywet(saveSliderEffect311/100);
      effect31.amp(2.5);      
    }
    else if (saveInnerEffect311 == 'Ping Pong')
    {
      selectEffect31.value='Ping Pong';
      effect31 = new p5.Delay;
      effect31.process(channel1);
      effect31.drywet(saveSliderEffect311/100);
      effect31.amp(2.5); 
      sliderEffect31.value=saveSliderEffect311;
    }
    else 
    {
      selectEffect31.value='NONE';
      effect31.amp(0); 
      sliderEffect31.value=saveSliderEffect311;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass11 != ONOFFLowPass1.innerHTML)||(saveSliderLowPass11 != sliderLowPass1.value))//LowPass
  {
    if (saveInnerLowPass11=='OFF')
    {
      myFilter1.freq(22050);
      sliderLowPass1.value=saveSliderLowPass11;
      ONOFFLowPass1.innerHTML='OFF';
    }
    else
    {
      var filterFreq1 = map ((saveSliderLowPass11), 0, 1000, 10, 22050);
      myFilter1.freq(filterFreq1);
      myFilter1.res(28);
      sliderLowPass1.value=saveSliderLowPass11;
      ONOFFLowPass1.innerHTML='ON';
    }
  }
  if ((saveInnerEQ11 != ONOFFEQ1.innerHTML)||(saveSilderEQL11!=sliderEqLow1.value)||(saveSliderEQM11!=sliderEqMid1.value)||(saveSliderEQH11!=sliderEqHight1.value))//EQ
  {
    if(saveInnerEQ11=='ON')
    {
      console.log('eqon')
      var EQintLow = Math.floor(saveSliderEQL11);
      var EQintMid = Math.floor(saveSliderEQM11);
      var EQintHight = Math.floor(saveSliderEQH11);
      eq1.bands[0].gain(EQintLow);
      eq1.bands[1].gain(EQintMid);
      eq1.bands[2].gain(EQintHight);
      sliderEqLow1.value=saveSilderEQL11;
      sliderEqMid1.value=saveSliderEQM11;
      sliderEqHight1.value=saveSliderEQH11;
      ONOFFEQ1.innerHTML='ON';
    }
    else
    {
      console.log('eqoff')
      ONOFFEQ1.innerHTML='OFF';
      eq1.bands[0].gain(0);
      eq1.bands[1].gain(0);
      eq1.bands[2].gain(0);   
      sliderEqLow1.value = saveSilderEQL11;
      sliderEqMid1.value = saveSliderEQM11;
      sliderEqHight1.value = saveSliderEQH11;
    }
  }
  if ((saveInnerCompressor11!=ONOFFCompressor1)||(saveSliderCompressor11!=sliderCompressor1))//Compressor
  {
    if(saveInnerCompressor11=='ON')
    {
      compressor1.connect();
      compressor1.process(channel1);
      var knee = map ((saveSliderCompressor11), 0, 1000, 0, 40);
      compressor1.knee(knee);
      ONOFFCompressor1.innerHTML= 'ON';
      sliderCompressor1.value= saveSliderCompressor11;
    }
    else
    {
      ONOFFCompressor1.innerHTML = ('OFF');
      compressor1.disconnect();
      sliderCompressor1.value= saveSliderCompressor11;
    }
  }
  if (saveSliderRate11 != (sliderRate1.value))
  {
    sliderRate1.value = saveSliderRate11;
    channel1.rate(sliderRate1.value/100);
  }
  if (saveSliderPan11!= sliderPan1.value)
  {
    sliderPan1.value = saveSliderPan11;
    channel1.pan(sliderPan1.value/100);
  }
  if (saveSliderVolume11 != sliderVolume1.value)
  {
    sliderVolume1.value = saveSliderVolume11
    channel1.setVolume(sliderVolume1.value/100);
  }
}
function saveSetting11Click2 ()                                //CHANNEL 2
{
  /******We choose the music******/
  if (saveSelecteur12 != selecteur2)
  {
    if (saveSelecteur12==1)
    {
      channel2.disconnect(); 
      channel2 = loadSound("audio/12.mp3");
    }
    else if (saveSelecteur12==2)
    {
      channel2.disconnect(); 
      channel2 = loadSound("audio/22.mp3");
    }
    else
    {
      channel2.disconnect(); 
      channel2 = loadSound("audio/32.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect112 != selectEffect12.value)||(saveSliderEffect112!=sliderEffect12.value))//first effect
  {
    if (saveInnerEffect112 == 'Reverb')
    {
      selectEffect12.value='Reverb';
      effect12 = new p5.Reverb();
      effect12.process(channel2);
      effect12.drywet(saveSliderEffect112/100);
      effect12.amp(2.5);
      sliderEffect12.value=saveSliderEffect112;
    }
    else if (saveInnerEffect112 == 'Delay')
    {
      selectEffect12.value='Delay';
      effect12 = new p5.Delay();
      effect12.process(channel2);
      effect12.drywet(saveSliderEffect112/100);
      effect12.amp(2.5);      
    }
    else if (saveInnerEffect112 == 'Ping Pong')
    {
      selectEffect12.value='Ping Pong';
      effect12 = new p5.Delay;
      effect12.process(channel2);
      effect12.drywet(saveSliderEffect112/100);
      effect12.amp(2.5); 
      sliderEffect12.value=saveSliderEffect112;
    }
    else 
    {
      selectEffect12.value='NONE';
      effect12.amp(0); 
      sliderEffect12.value=saveSliderEffect112;
    }
  }
  if ((saveInnerEffect212 != selectEffect22.value)||(saveSliderEffect212!=sliderEffect22.value))//second effect
  {
    if (saveInnerEffect212 == 'Reverb')
    {
      selectEffect22.value='Reverb';
      effect22 = new p5.Reverb();
      effect22.process(channel2);
      effect22.drywet(saveSliderEffect212/100);
      effect22.amp(2.5);
      sliderEffect22.value=saveSliderEffect212;
    }
    else if (saveInnerEffect212 == 'Delay')
    {
      selectEffect22.value='Delay';
      effect22 = new p5.Delay();
      effect22.process(channel2);
      effect22.drywet(saveSliderEffect212/100);
      effect22.amp(2.5);      
    }
    else if (saveInnerEffect212 == 'Ping Pong')
    {
      selectEffect22.value='Ping Pong';
      effect22 = new p5.Delay;
      effect22.process(channel2);
      effect22.drywet(saveSliderEffect212/100);
      effect22.amp(2.5); 
      sliderEffect12.value=saveSliderEffect212;
    }
    else 
    {
      selectEffect22.value='NONE';
      effect22.amp(0); 
      sliderEffect22.value=saveSliderEffect212;
    }
  }
  if ((saveInnerEffect312 != selectEffect32.value)||(saveSliderEffect312!=sliderEffect32.value))//third effect
  {
    if (saveInnerEffect312 == 'Reverb')
    {
      selectEffect32.value='Reverb';
      effect32 = new p5.Reverb();
      effect32.process(channel2);
      effect32.drywet(saveSliderEffect312/100);
      effect32.amp(2.5);
      sliderEffect32.value=saveSliderEffect312;
    }
    else if (saveInnerEffect312 == 'Delay')
    {
      selectEffect32.value='Delay';
      effect32 = new p5.Delay();
      effect32.process(channel2);
      effect32.drywet(saveSliderEffect312/100);
      effect32.amp(2.5);      
    }
    else if (saveInnerEffect312 == 'Ping Pong')
    {
      selectEffect32.value='Ping Pong';
      effect32 = new p5.Delay;
      effect32.process(channel2);
      effect32.drywet(saveSliderEffect312/100);
      effect32.amp(2.5); 
      sliderEffect32.value=saveSliderEffect312;
    }
    else 
    {
      selectEffect32.value='NONE';
      effect32.amp(0); 
      sliderEffect32.value=saveSliderEffect312;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass12 != ONOFFLowPass2.innerHTML)||(saveSliderLowPass12 != sliderLowPass2.value))//LowPass
  {
    if (saveInnerLowPass12=='OFF')
    {
      myFilter2.freq(22050);
      sliderLowPass2.value=saveSliderLowPass12;
      ONOFFLowPass2.innerHTML='OFF';
    }
    else
    {
      var filterFreq2 = map ((saveSliderLowPass12), 0, 1000, 10, 22050);
      myFilter2.freq(filterFreq2);
      myFilter2.res(28);
      sliderLowPass2.value=saveSliderLowPass12;
      ONOFFLowPass2.innerHTML='ON';
    }
  }
  if ((saveInnerEQ12 != ONOFFEQ2.innerHTML)||(saveSilderEQL12!=sliderEqLow2.value)||(saveSliderEQM12!=sliderEqMid2.value)||(saveSliderEQH12!=sliderEqHight2.value))//EQ
  {
    if(saveInnerEQ12=='ON')
    {
      var EQintLow = Math.floor(saveSliderEQL12);
      var EQintMid = Math.floor(saveSliderEQM12);
      var EQintHight = Math.floor(saveSliderEQH12);
      eq2.bands[0].gain(EQintLow);
      eq2.bands[1].gain(EQintMid);
      eq2.bands[2].gain(EQintHight);
      sliderEqLow2.value=saveSilderEQL12;
      sliderEqMid2.value=saveSliderEQM12;
      sliderEqHight2.value=saveSliderEQH12;
      ONOFFEQ2.innerHTML='ON';
    }
    else
    {
      ONOFFEQ2.innerHTML='OFF';
      eq2.bands[0].gain(0);
      eq2.bands[1].gain(0);
      eq2.bands[2].gain(0);   
      sliderEqLow2.value = saveSilderEQL12;
      sliderEqMid2.value = saveSliderEQM12;
      sliderEqHight2.value = saveSliderEQH12;
    }
  }
  if ((saveInnerCompressor12!=ONOFFCompressor2)||(saveSliderCompressor12!=sliderCompressor2))//Compressor
  {
    if(saveInnerCompressor12=='ON')
    {
      compressor2.connect();
      compressor12.process(channel2);
      var knee = map ((saveSliderCompressor12), 0, 1000, 0, 40);
      compressor2.knee(knee);
      ONOFFCompressor2.innerHTML= 'ON';
      sliderCompressor2.value= saveSliderCompressor12;
    }
    else
    {
      ONOFFCompressor2.innerHTML = ('OFF');
      compressor2.disconnect();
      sliderCompressor2.value= saveSliderCompressor12;
    }
  }
  if (saveSliderRate12 != (sliderRate2.value))
  {
    sliderRate2.value = saveSliderRate12;
    channel2.rate(sliderRate2.value/100);
  }
  if (saveSliderPan12!= sliderPan2.value)
  {
    sliderPan2.value = saveSliderPan12;
    channel2.pan(sliderPan2.value/100);
  }
  if (saveSliderVolume12 != sliderVolume2.value)
  {
    sliderVolume2.value = saveSliderVolume12;
    channel2.setVolume(sliderVolume2.value/100);
  }
}
function saveSetting11Click3 ()                                //CHANNEL 3
{
  /******We choose the music******/
  if (saveSelecteur13 != selecteur3)
  {
    if (saveSelecteur13==1)
    {
      channel3.disconnect(); 
      channel3 = loadSound("audio/13.mp3");
    }
    else if (saveSelecteur13==2)
    {
      channel3.disconnect(); 
      channel3 = loadSound("audio/23.mp3");
    }
    else
    {
      channel3.disconnect(); 
      channel3 = loadSound("audio/33.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect113 != selectEffect13.value)||(saveSliderEffect113!=sliderEffect13.value))//first effect
  {
    if (saveInnerEffect113 == 'Reverb')
    {
      selectEffect13.value='Reverb';
      effect13 = new p5.Reverb();
      effect13.process(channel3);
      effect13.drywet(saveSliderEffect113/100);
      effect13.amp(2.5);
      sliderEffect13.value=saveSliderEffect113;
    }
    else if (saveInnerEffect113 == 'Delay')
    {
      selectEffect13.value='Delay';
      effect13 = new p5.Delay();
      effect13.process(channel3);
      effect13.drywet(saveSliderEffect113/100);
      effect13.amp(2.5);      
    }
    else if (saveInnerEffect113 == 'Ping Pong')
    {
      selectEffect13.value='Ping Pong';
      effect13 = new p5.Delay;
      effect13.process(channel3);
      effect13.drywet(saveSliderEffect113/100);
      effect13.amp(2.5); 
      sliderEffect13.value=saveSliderEffect113;
    }
    else 
    {
      selectEffect13.value='NONE';
      effect13.amp(0); 
      sliderEffect13.value=saveSliderEffect113;
    }
  }
  if ((saveInnerEffect213 != selectEffect23.value)||(saveSliderEffect213!=sliderEffect23.value))//second effect
  {
    if (saveInnerEffect213 == 'Reverb')
    {
      selectEffect23.value='Reverb';
      effect23 = new p5.Reverb();
      effect23.process(channel3);
      effect23.drywet(saveSliderEffect213/100);
      effect23.amp(2.5);
      sliderEffect23.value=saveSliderEffect213;
    }
    else if (saveInnerEffect213 == 'Delay')
    {
      selectEffect23.value='Delay';
      effect23 = new p5.Delay();
      effect23.process(channel3);
      effect23.drywet(saveSliderEffect213/100);
      effect23.amp(2.5);      
    }
    else if (saveInnerEffect213 == 'Ping Pong')
    {
      selectEffect23.value='Ping Pong';
      effect23 = new p5.Delay;
      effect23.process(channel3);
      effect23.drywet(saveSliderEffect213/100);
      effect23.amp(2.5); 
      sliderEffect13.value=saveSliderEffect213;
    }
    else 
    {
      selectEffect23.value='NONE';
      effect23.amp(0); 
      sliderEffect23.value=saveSliderEffect213;
    }
  }
  if ((saveInnerEffect313 != selectEffect33.value)||(saveSliderEffect313!=sliderEffect33.value))//third effect
  {
    if (saveInnerEffect313 == 'Reverb')
    {
      selectEffect33.value='Reverb';
      effect33 = new p5.Reverb();
      effect33.process(channel3);
      effect33.drywet(saveSliderEffect313/100);
      effect33.amp(2.5);
      sliderEffect33.value=saveSliderEffect313;
    }
    else if (saveInnerEffect313 == 'Delay')
    {
      selectEffect33.value='Delay';
      effect33 = new p5.Delay();
      effect33.process(channel3);
      effect33.drywet(saveSliderEffect313/100);
      effect33.amp(2.5);      
    }
    else if (saveInnerEffect313 == 'Ping Pong')
    {
      selectEffect33.value='Ping Pong';
      effect33 = new p5.Delay;
      effect33.process(channel3);
      effect33.drywet(saveSliderEffect313/100);
      effect33.amp(2.5); 
      sliderEffect33.value=saveSliderEffect313;
    }
    else 
    {
      selectEffect33.value='NONE';
      effect33.amp(0); 
      sliderEffect33.value=saveSliderEffect313;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass13 != ONOFFLowPass3.innerHTML)||(saveSliderLowPass13 != sliderLowPass3.value))//LowPass
  {
    if (saveInnerLowPass13=='OFF')
    {
      myFilter3.freq(22050);
      sliderLowPass3.value=saveSliderLowPass13;
      ONOFFLowPass3.innerHTML='OFF';
    }
    else
    {
      var filterFreq3 = map ((saveSliderLowPass13), 0, 1000, 10, 22050);
      myFilter3.freq(filterFreq3);
      myFilter3.res(28);
      sliderLowPass3.value=saveSliderLowPass13;
      ONOFFLowPass3.innerHTML='ON';
    }
  }
  if ((saveInnerEQ13 != ONOFFEQ3.innerHTML)||(saveSilderEQL13!=sliderEqLow3.value)||(saveSliderEQM13!=sliderEqMid3.value)||(saveSliderEQH13!=sliderEqHight3.value))//EQ
  {
    if(saveInnerEQ13=='ON')
    {
      var EQintLow = Math.floor(saveSliderEQL13);
      var EQintMid = Math.floor(saveSliderEQM13);
      var EQintHight = Math.floor(saveSliderEQH13);
      eq3.bands[0].gain(EQintLow);
      eq3.bands[1].gain(EQintMid);
      eq3.bands[2].gain(EQintHight);
      sliderEqLow3.value=saveSilderEQL13;
      sliderEqMid3.value=saveSliderEQM13;
      sliderEqHight3.value=saveSliderEQH13;
      ONOFFEQ3.innerHTML='ON';
    }
    else
    {
      ONOFFEQ3.innerHTML='OFF';
      eq3.bands[0].gain(0);
      eq3.bands[1].gain(0);
      eq3.bands[2].gain(0);   
      sliderEqLow3.value = saveSilderEQL13;
      sliderEqMid3.value = saveSliderEQM13;
      sliderEqHight3.value = saveSliderEQH13;
    }
  }
  if ((saveInnerCompressor13!=ONOFFCompressor3)||(saveSliderCompressor13!=sliderCompressor3))//Compressor
  {
    if(saveInnerCompressor13=='ON')
    {
      compressor3.connect();
      compressor13.process(channel3);
      var knee = map ((saveSliderCompressor13), 0, 1000, 0, 40);
      compressor3.knee(knee);
      ONOFFCompressor3.innerHTML= 'ON';
      sliderCompressor3.value= saveSliderCompressor13;
    }
    else
    {
      ONOFFCompressor3.innerHTML = ('OFF');
      compressor3.disconnect();
      sliderCompressor3.value= saveSliderCompressor13;
    }
  }
  if (saveSliderRate13 != (sliderRate3.value))
  {
    sliderRate3.value = saveSliderRate13;
    channel3.rate(sliderRate3.value/100);
  }
  if (saveSliderPan13!= sliderPan3.value)
  {
    sliderPan3.value = saveSliderPan13;
    channel3.pan(sliderPan3.value/100);
  }
  if (saveSliderVolume13 != sliderVolume3.value)
  {
    sliderVolume3.value = saveSliderVolume13;
    channel3.setVolume(sliderVolume3.value/100);
  }
}
function saveSetting11Click4 ()                                //CHANNEL 4
{
  /******We choose the music******/
  if (saveSelecteur14 != selecteur4)
  {
    if (saveSelecteur14==1)
    {
      channel4.disconnect(); 
      channel4 = loadSound("audio/14.mp3");
    }
    else if (saveSelecteur14==2)
    {
      channel4.disconnect(); 
      channel4 = loadSound("audio/24.mp3");
    }
    else
    {
      channel4.disconnect(); 
      channel4 = loadSound("audio/34.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect114 != selectEffect14.value)||(saveSliderEffect114!=sliderEffect14.value))//first effect
  {
    if (saveInnerEffect114 == 'Reverb')
    {
      selectEffect14.value='Reverb';
      effect14 = new p5.Reverb();
      effect14.process(channel4);
      effect14.drywet(saveSliderEffect114/100);
      effect14.amp(2.5);
      sliderEffect14.value=saveSliderEffect114;
    }
    else if (saveInnerEffect114 == 'Delay')
    {
      selectEffect14.value='Delay';
      effect14 = new p5.Delay();
      effect14.process(channel4);
      effect14.drywet(saveSliderEffect114/100);
      effect14.amp(2.5);      
    }
    else if (saveInnerEffect114 == 'Ping Pong')
    {
      selectEffect14.value='Ping Pong';
      effect14 = new p5.Delay;
      effect14.process(channel4);
      effect14.drywet(saveSliderEffect114/100);
      effect14.amp(2.5); 
      sliderEffect14.value=saveSliderEffect114;
    }
    else 
    {
      selectEffect14.value='NONE';
      effect14.amp(0); 
      sliderEffect14.value=saveSliderEffect114;
    }
  }
  if ((saveInnerEffect214 != selectEffect24.value)||(saveSliderEffect214!=sliderEffect24.value))//second effect
  {
    if (saveInnerEffect214 == 'Reverb')
    {
      selectEffect24.value='Reverb';
      effect24 = new p5.Reverb();
      effect24.process(channel4);
      effect24.drywet(saveSliderEffect214/100);
      effect24.amp(2.5);
      sliderEffect24.value=saveSliderEffect214;
    }
    else if (saveInnerEffect214 == 'Delay')
    {
      selectEffect24.value='Delay';
      effect24 = new p5.Delay();
      effect24.process(channel4);
      effect24.drywet(saveSliderEffect214/100);
      effect24.amp(2.5);      
    }
    else if (saveInnerEffect214 == 'Ping Pong')
    {
      selectEffect24.value='Ping Pong';
      effect24 = new p5.Delay;
      effect24.process(channel4);
      effect24.drywet(saveSliderEffect214/100);
      effect24.amp(2.5); 
      sliderEffect14.value=saveSliderEffect214;
    }
    else 
    {
      selectEffect24.value='NONE';
      effect24.amp(0); 
      sliderEffect24.value=saveSliderEffect214;
    }
  }
  if ((saveInnerEffect314 != selectEffect34.value)||(saveSliderEffect314!=sliderEffect34.value))//third effect
  {
    if (saveInnerEffect314 == 'Reverb')
    {
      selectEffect34.value='Reverb';
      effect34 = new p5.Reverb();
      effect34.process(channel4);
      effect34.drywet(saveSliderEffect314/100);
      effect34.amp(2.5);
      sliderEffect34.value=saveSliderEffect314;
    }
    else if (saveInnerEffect314 == 'Delay')
    {
      selectEffect34.value='Delay';
      effect34 = new p5.Delay();
      effect34.process(channel4);
      effect34.drywet(saveSliderEffect314/100);
      effect34.amp(2.5);      
    }
    else if (saveInnerEffect314 == 'Ping Pong')
    {
      selectEffect34.value='Ping Pong';
      effect34 = new p5.Delay;
      effect34.process(channel4);
      effect34.drywet(saveSliderEffect314/100);
      effect34.amp(2.5); 
      sliderEffect34.value=saveSliderEffect314;
    }
    else 
    {
      selectEffect34.value='NONE';
      effect34.amp(0); 
      sliderEffect34.value=saveSliderEffect314;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass14 != ONOFFLowPass4.innerHTML)||(saveSliderLowPass14 != sliderLowPass4.value))//LowPass
  {
    if (saveInnerLowPass14=='OFF')
    {
      myFilter4.freq(22050);
      sliderLowPass4.value=saveSliderLowPass14;
      ONOFFLowPass4.innerHTML='OFF';
    }
    else
    {
      var filterFreq4 = map ((saveSliderLowPass14), 0, 1000, 10, 22050);
      myFilter4.freq(filterFreq4);
      myFilter4.res(28);
      sliderLowPass4.value=saveSliderLowPass14;
      ONOFFLowPass4.innerHTML='ON';
    }
  }
  if ((saveInnerEQ14 != ONOFFEQ4.innerHTML)||(saveSilderEQL14!=sliderEqLow4.value)||(saveSliderEQM14!=sliderEqMid4.value)||(saveSliderEQH14!=sliderEqHight4.value))//EQ
  {
    if(saveInnerEQ14=='ON')
    {
      var EQintLow = Math.floor(saveSliderEQL14);
      var EQintMid = Math.floor(saveSliderEQM14);
      var EQintHight = Math.floor(saveSliderEQH14);
      eq4.bands[0].gain(EQintLow);
      eq4.bands[1].gain(EQintMid);
      eq4.bands[2].gain(EQintHight);
      sliderEqLow4.value=saveSilderEQL14;
      sliderEqMid4.value=saveSliderEQM14;
      sliderEqHight4.value=saveSliderEQH14;
      ONOFFEQ4.innerHTML='ON';
    }
    else
    {
      ONOFFEQ4.innerHTML='OFF';
      eq4.bands[0].gain(0);
      eq4.bands[1].gain(0);
      eq4.bands[2].gain(0);   
      sliderEqLow4.value = saveSilderEQL14;
      sliderEqMid4.value = saveSliderEQM14;
      sliderEqHight4.value = saveSliderEQH14;
    }
  }
  if ((saveInnerCompressor14!=ONOFFCompressor4)||(saveSliderCompressor14!=sliderCompressor4))//Compressor
  {
    if(saveInnerCompressor14=='ON')
    {
      compressor4.connect();
      compressor14.process(channel4);
      var knee = map ((saveSliderCompressor14), 0, 1000, 0, 40);
      compressor4.knee(knee);
      ONOFFCompressor4.innerHTML= 'ON';
      sliderCompressor4.value= saveSliderCompressor14;
    }
    else
    {
      ONOFFCompressor4.innerHTML = ('OFF');
      compressor4.disconnect();
      sliderCompressor4.value= saveSliderCompressor14;
    }
  }
  if (saveSliderRate14 != (sliderRate4.value))
  {
    sliderRate4.value = saveSliderRate14;
    channel4.rate(sliderRate4.value/100);
  }
  if (saveSliderPan14!= sliderPan4.value)
  {
    sliderPan4.value = saveSliderPan14;
    channel4.pan(sliderPan4.value/100);
  }
  if (saveSliderVolume14 != sliderVolume4.value)
  {
    sliderVolume4.value = saveSliderVolume14;
    channel4.setVolume(sliderVolume4.value/100);
  }
}
function saveSetting11Click5 ()                                //CHANNEL 5
{
  /******We choose the music******/
  if (saveSelecteur15 != selecteur5)
  {
    if (saveSelecteur15==1)
    {
      channel5.disconnect(); 
      channel5 = loadSound("audio/15.mp3");
    }
    else if (saveSelecteur14==2)
    {
      channel4.disconnect(); 
      channel4 = loadSound("audio/25.mp3");
    }
    else
    {
      channel4.disconnect(); 
      channel4 = loadSound("audio/35.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect115 != selectEffect15.value)||(saveSliderEffect115!=sliderEffect15.value))//first effect
  {
    if (saveInnerEffect115 == 'Reverb')
    {
      selectEffect15.value='Reverb';
      effect15 = new p5.Reverb();
      effect15.process(channel5);
      effect15.drywet(saveSliderEffect115/100);
      effect15.amp(2.5);
      sliderEffect15.value=saveSliderEffect115;
    }
    else if (saveInnerEffect115 == 'Delay')
    {
      selectEffect15.value='Delay';
      effect15 = new p5.Delay();
      effect15.process(channel5);
      effect15.drywet(saveSliderEffect115/100);
      effect15.amp(2.5);      
    }
    else if (saveInnerEffect115 == 'Ping Pong')
    {
      selectEffect15.value='Ping Pong';
      effect15 = new p5.Delay;
      effect15.process(channel5);
      effect15.drywet(saveSliderEffect115/100);
      effect15.amp(2.5); 
      sliderEffect15.value=saveSliderEffect115;
    }
    else 
    {
      selectEffect15.value='NONE';
      effect15.amp(0); 
      sliderEffect15.value=saveSliderEffect115;
    }
  }
  if ((saveInnerEffect215 != selectEffect25.value)||(saveSliderEffect215!=sliderEffect25.value))//second effect
  {
    if (saveInnerEffect215 == 'Reverb')
    {
      selectEffect25.value='Reverb';
      effect25 = new p5.Reverb();
      effect25.process(channel5);
      effect25.drywet(saveSliderEffect215/100);
      effect25.amp(2.5);
      sliderEffect25.value=saveSliderEffect215;
    }
    else if (saveInnerEffect215 == 'Delay')
    {
      selectEffect25.value='Delay';
      effect25 = new p5.Delay();
      effect25.process(channel5);
      effect25.drywet(saveSliderEffect215/100);
      effect25.amp(2.5);      
    }
    else if (saveInnerEffect215 == 'Ping Pong')
    {
      selectEffect25.value='Ping Pong';
      effect25 = new p5.Delay;
      effect25.process(channel5);
      effect25.drywet(saveSliderEffect215/100);
      effect25.amp(2.5); 
      sliderEffect15.value=saveSliderEffect215;
    }
    else 
    {
      selectEffect25.value='NONE';
      effect25.amp(0); 
      sliderEffect25.value=saveSliderEffect215;
    }
  }
  if ((saveInnerEffect315 != selectEffect35.value)||(saveSliderEffect315!=sliderEffect35.value))//third effect
  {
    if (saveInnerEffect315 == 'Reverb')
    {
      selectEffect35.value='Reverb';
      effect35 = new p5.Reverb();
      effect35.process(channel5);
      effect35.drywet(saveSliderEffect315/100);
      effect35.amp(2.5);
      sliderEffect35.value=saveSliderEffect315;
    }
    else if (saveInnerEffect315 == 'Delay')
    {
      selectEffect35.value='Delay';
      effect35 = new p5.Delay();
      effect35.process(channel5);
      effect35.drywet(saveSliderEffect315/100);
      effect35.amp(2.5);      
    }
    else if (saveInnerEffect315 == 'Ping Pong')
    {
      selectEffect35.value='Ping Pong';
      effect35 = new p5.Delay;
      effect35.process(channel5);
      effect35.drywet(saveSliderEffect315/100);
      effect35.amp(2.5); 
      sliderEffect35.value=saveSliderEffect315;
    }
    else 
    {
      selectEffect35.value='NONE';
      effect35.amp(0); 
      sliderEffect35.value=saveSliderEffect315;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass15 != ONOFFLowPass5.innerHTML)||(saveSliderLowPass15 != sliderLowPass5.value))//LowPass
  {
    if (saveInnerLowPass15=='OFF')
    {
      myFilter5.freq(22050);
      sliderLowPass5.value=saveSliderLowPass15;
      ONOFFLowPass5.innerHTML='OFF';
    }
    else
    {
      var filterFreq5 = map ((saveSliderLowPass15), 0, 1000, 10, 22050);
      myFilter5.freq(filterFreq5);
      myFilter5.res(28);
      sliderLowPass5.value=saveSliderLowPass15;
      ONOFFLowPass5.innerHTML='ON';
    }
  }
  if ((saveInnerEQ15 != ONOFFEQ5.innerHTML)||(saveSilderEQL15!=sliderEqLow5.value)||(saveSliderEQM15!=sliderEqMid5.value)||(saveSliderEQH15!=sliderEqHight5.value))//EQ
  {
    if(saveInnerEQ15=='ON')
    {
      var EQintLow = Math.floor(saveSliderEQL15);
      var EQintMid = Math.floor(saveSliderEQM15);
      var EQintHight = Math.floor(saveSliderEQH15);
      eq5.bands[0].gain(EQintLow);
      eq5.bands[1].gain(EQintMid);
      eq5.bands[2].gain(EQintHight);
      sliderEqLow5.value=saveSilderEQL15;
      sliderEqMid5.value=saveSliderEQM15;
      sliderEqHight5.value=saveSliderEQH15;
      ONOFFEQ5.innerHTML='ON';
    }
    else
    {
      ONOFFEQ5.innerHTML='OFF';
      eq5.bands[0].gain(0);
      eq5.bands[1].gain(0);
      eq5.bands[2].gain(0);   
      sliderEqLow5.value = saveSilderEQL15;
      sliderEqMid5.value = saveSliderEQM15;
      sliderEqHight5.value = saveSliderEQH15;
    }
  }
  if ((saveInnerCompressor15!=ONOFFCompressor5)||(saveSliderCompressor15!=sliderCompressor5))//Compressor
  {
    if(saveInnerCompressor15=='ON')
    {
      compressor5.connect();
      compressor15.process(channel5);
      var knee = map ((saveSliderCompressor15), 0, 1000, 0, 40);
      compressor5.knee(knee);
      ONOFFCompressor5.innerHTML= 'ON';
      sliderCompressor5.value= saveSliderCompressor15;
    }
    else
    {
      ONOFFCompressor5.innerHTML = ('OFF');
      compressor5.disconnect();
      sliderCompressor5.value= saveSliderCompressor15;
    }
  }
  if (saveSliderRate15 != (sliderRate5.value))
  {
    sliderRate5.value = saveSliderRate15;
    channel5.rate(sliderRate5.value/100);
  }
  if (saveSliderPan15!= sliderPan5.value)
  {
    sliderPan5.value = saveSliderPan15;
    channel5.pan(sliderPan5.value/100);
  }
  if (saveSliderVolume15 != sliderVolume5.value)
  {
    sliderVolume5.value = saveSliderVolume15;
    channel5.setVolume(sliderVolume5.value/100);
  }
}
function saveSetting11Click6 ()                                //CHANNEL 6
{
  /******We choose the music******/
  if (saveSelecteur16 != selecteur6)
  {
    if (saveSelecteur16==1)
    {
      channel6.disconnect(); 
      channel6 = loadSound("audio/16.mp3");
    }
    else if (saveSelecteur16==2)
    {
      channel6.disconnect(); 
      channel6 = loadSound("audio/26.mp3");
    }
    else
    {
      channel6.disconnect(); 
      channel6 = loadSound("audio/36.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect116 != selectEffect16.value)||(saveSliderEffect116!=sliderEffect16.value))//first effect
  {
    if (saveInnerEffect116 == 'Reverb')
    {
      selectEffect16.value='Reverb';
      effect16 = new p5.Reverb();
      effect16.process(channel6);
      effect16.drywet(saveSliderEffect116/100);
      effect16.amp(2.5);
      sliderEffect16.value=saveSliderEffect116;
    }
    else if (saveInnerEffect116 == 'Delay')
    {
      selectEffect16.value='Delay';
      effect16 = new p5.Delay();
      effect16.process(channel6);
      effect16.drywet(saveSliderEffect116/100);
      effect16.amp(2.5);      
    }
    else if (saveInnerEffect116 == 'Ping Pong')
    {
      selectEffect16.value='Ping Pong';
      effect16 = new p5.Delay;
      effect16.process(channel6);
      effect16.drywet(saveSliderEffect116/100);
      effect16.amp(2.5); 
      sliderEffect16.value=saveSliderEffect116;
    }
    else 
    {
      selectEffect16.value='NONE';
      effect16.amp(0); 
      sliderEffect16.value=saveSliderEffect116;
    }
  }
  if ((saveInnerEffect216 != selectEffect26.value)||(saveSliderEffect216!=sliderEffect26.value))//second effect
  {
    if (saveInnerEffect216 == 'Reverb')
    {
      selectEffect26.value='Reverb';
      effect26 = new p5.Reverb();
      effect26.process(channel6);
      effect26.drywet(saveSliderEffect216/100);
      effect26.amp(2.5);
      sliderEffect26.value=saveSliderEffect216;
    }
    else if (saveInnerEffect216 == 'Delay')
    {
      selectEffect26.value='Delay';
      effect26 = new p5.Delay();
      effect26.process(channel6);
      effect26.drywet(saveSliderEffect216/100);
      effect26.amp(2.5);      
    }
    else if (saveInnerEffect216 == 'Ping Pong')
    {
      selectEffect26.value='Ping Pong';
      effect26 = new p5.Delay;
      effect26.process(channel6);
      effect26.drywet(saveSliderEffect216/100);
      effect26.amp(2.5); 
      sliderEffect16.value=saveSliderEffect216;
    }
    else 
    {
      selectEffect26.value='NONE';
      effect26.amp(0); 
      sliderEffect26.value=saveSliderEffect216;
    }
  }
  if ((saveInnerEffect316 != selectEffect36.value)||(saveSliderEffect316!=sliderEffect36.value))//third effect
  {
    if (saveInnerEffect316 == 'Reverb')
    {
      selectEffect36.value='Reverb';
      effect36 = new p5.Reverb();
      effect36.process(channel6);
      effect36.drywet(saveSliderEffect316/100);
      effect36.amp(2.5);
      sliderEffect36.value=saveSliderEffect316;
    }
    else if (saveInnerEffect316 == 'Delay')
    {
      selectEffect36.value='Delay';
      effect36 = new p5.Delay();
      effect36.process(channel6);
      effect36.drywet(saveSliderEffect316/100);
      effect36.amp(2.5);      
    }
    else if (saveInnerEffect316 == 'Ping Pong')
    {
      selectEffect36.value='Ping Pong';
      effect36 = new p5.Delay;
      effect36.process(channel6);
      effect36.drywet(saveSliderEffect316/100);
      effect36.amp(2.5); 
      sliderEffect36.value=saveSliderEffect316;
    }
    else 
    {
      selectEffect36.value='NONE';
      effect36.amp(0); 
      sliderEffect36.value=saveSliderEffect316;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass16 != ONOFFLowPass6.innerHTML)||(saveSliderLowPass16 != sliderLowPass6.value))//LowPass
  {
    if (saveInnerLowPass16=='OFF')
    {
      myFilter6.freq(22050);
      sliderLowPass6.value=saveSliderLowPass16;
      ONOFFLowPass6.innerHTML='OFF';
    }
    else
    {
      var filterFreq6 = map ((saveSliderLowPass16), 0, 1000, 10, 22050);
      myFilter6.freq(filterFreq6);
      myFilter6.res(28);
      sliderLowPass6.value=saveSliderLowPass16;
      ONOFFLowPass6.innerHTML='ON';
    }
  }
  if ((saveInnerEQ16 != ONOFFEQ6.innerHTML)||(saveSilderEQL16!=sliderEqLow6.value)||(saveSliderEQM16!=sliderEqMid6.value)||(saveSliderEQH16!=sliderEqHight6.value))//EQ
  {
    if(saveInnerEQ16=='ON')
    {
      var EQintLow = Math.floor(saveSliderEQL16);
      var EQintMid = Math.floor(saveSliderEQM16);
      var EQintHight = Math.floor(saveSliderEQH16);
      eq6.bands[0].gain(EQintLow);
      eq6.bands[1].gain(EQintMid);
      eq6.bands[2].gain(EQintHight);
      sliderEqLow6.value=saveSilderEQL16;
      sliderEqMid6.value=saveSliderEQM16;
      sliderEqHight6.value=saveSliderEQH16;
      ONOFFEQ6.innerHTML='ON';
    }
    else
    {
      ONOFFEQ6.innerHTML='OFF';
      eq6.bands[0].gain(0);
      eq6.bands[1].gain(0);
      eq6.bands[2].gain(0);   
      sliderEqLow6.value = saveSilderEQL16;
      sliderEqMid6.value = saveSliderEQM16;
      sliderEqHight6.value = saveSliderEQH16;
    }
  }
  if ((saveInnerCompressor16!=ONOFFCompressor6)||(saveSliderCompressor16!=sliderCompressor6))//Compressor
  {
    if(saveInnerCompressor16=='ON')
    {
      compressor6.connect();
      compressor16.process(channel6);
      var knee = map ((saveSliderCompressor16), 0, 1000, 0, 40);
      compressor6.knee(knee);
      ONOFFCompressor6.innerHTML= 'ON';
      sliderCompressor6.value= saveSliderCompressor16;
    }
    else
    {
      ONOFFCompressor6.innerHTML = ('OFF');
      compressor6.disconnect();
      sliderCompressor6.value= saveSliderCompressor16;
    }
  }
  if (saveSliderRate16 != (sliderRate6.value))
  {
    sliderRate6.value = saveSliderRate16;
    channel6.rate(sliderRate6.value/100);
  }
  if (saveSliderPan16!= sliderPan6.value)
  {
    sliderPan6.value = saveSliderPan16;
    channel6.pan(sliderPan6.value/100);
  }
  if (saveSliderVolume16 != sliderVolume6.value)
  {
    sliderVolume6.value = saveSliderVolume16;
    channel6.setVolume(sliderVolume6.value/100);
  }
}
function saveSetting11Click7 ()                                //CHANNEL 7
{
  /******We choose the music******/
  if (saveSelecteur17 != selecteur7)
  {
    if (saveSelecteur17==1)
    {
      channel7.disconnect(); 
      channel7 = loadSound("audio/17.mp3");
    }
    else if (saveSelecteur17==2)
    {
      channel7.disconnect(); 
      channel7 = loadSound("audio/27.mp3");
    }
    else
    {
      channel7.disconnect(); 
      channel7 = loadSound("audio/37.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect117 != selectEffect17.value)||(saveSliderEffect117!=sliderEffect17.value))//first effect
  {
    if (saveInnerEffect117 == 'Reverb')
    {
      selectEffect17.value='Reverb';
      effect17 = new p5.Reverb();
      effect17.process(channel7);
      effect17.drywet(saveSliderEffect117/100);
      effect17.amp(2.5);
      sliderEffect17.value=saveSliderEffect117;
    }
    else if (saveInnerEffect117 == 'Delay')
    {
      selectEffect17.value='Delay';
      effect17 = new p5.Delay();
      effect17.process(channel7);
      effect17.drywet(saveSliderEffect117/100);
      effect17.amp(2.5);      
    }
    else if (saveInnerEffect117 == 'Ping Pong')
    {
      selectEffect17.value='Ping Pong';
      effect17 = new p5.Delay;
      effect17.process(channel7);
      effect17.drywet(saveSliderEffect117/100);
      effect17.amp(2.5); 
      sliderEffect17.value=saveSliderEffect117;
    }
    else 
    {
      selectEffect17.value='NONE';
      effect17.amp(0); 
      sliderEffect17.value=saveSliderEffect117;
    }
  }
  if ((saveInnerEffect217 != selectEffect27.value)||(saveSliderEffect217!=sliderEffect27.value))//second effect
  {
    if (saveInnerEffect217 == 'Reverb')
    {
      selectEffect27.value='Reverb';
      effect27 = new p5.Reverb();
      effect27.process(channel7);
      effect27.drywet(saveSliderEffect217/100);
      effect27.amp(2.5);
      sliderEffect27.value=saveSliderEffect217;
    }
    else if (saveInnerEffect217 == 'Delay')
    {
      selectEffect27.value='Delay';
      effect27 = new p5.Delay();
      effect27.process(channel7);
      effect27.drywet(saveSliderEffect217/100);
      effect27.amp(2.5);      
    }
    else if (saveInnerEffect217 == 'Ping Pong')
    {
      selectEffect27.value='Ping Pong';
      effect27 = new p5.Delay;
      effect27.process(channel7);
      effect27.drywet(saveSliderEffect217/100);
      effect27.amp(2.5); 
      sliderEffect17.value=saveSliderEffect217;
    }
    else 
    {
      selectEffect27.value='NONE';
      effect27.amp(0); 
      sliderEffect27.value=saveSliderEffect217;
    }
  }
  if ((saveInnerEffect317 != selectEffect37.value)||(saveSliderEffect317!=sliderEffect37.value))//third effect
  {
    if (saveInnerEffect317 == 'Reverb')
    {
      selectEffect37.value='Reverb';
      effect37 = new p5.Reverb();
      effect37.process(channel7);
      effect37.drywet(saveSliderEffect317/100);
      effect37.amp(2.5);
      sliderEffect37.value=saveSliderEffect317;
    }
    else if (saveInnerEffect317 == 'Delay')
    {
      selectEffect37.value='Delay';
      effect37 = new p5.Delay();
      effect37.process(channel7);
      effect37.drywet(saveSliderEffect317/100);
      effect37.amp(2.5);      
    }
    else if (saveInnerEffect317 == 'Ping Pong')
    {
      selectEffect37.value='Ping Pong';
      effect37 = new p5.Delay;
      effect37.process(channel7);
      effect37.drywet(saveSliderEffect317/100);
      effect37.amp(2.5); 
      sliderEffect37.value=saveSliderEffect317;
    }
    else 
    {
      selectEffect37.value='NONE';
      effect37.amp(0); 
      sliderEffect37.value=saveSliderEffect317;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass17 != ONOFFLowPass7.innerHTML)||(saveSliderLowPass17 != sliderLowPass7.value))//LowPass
  {
    if (saveInnerLowPass17=='OFF')
    {
      myFilter7.freq(22050);
      sliderLowPass7.value=saveSliderLowPass17;
      ONOFFLowPass7.innerHTML='OFF';
    }
    else
    {
      var filterFreq7 = map ((saveSliderLowPass17), 0, 1000, 10, 22050);
      myFilter7.freq(filterFreq7);
      myFilter7.res(28);
      sliderLowPass7.value=saveSliderLowPass17;
      ONOFFLowPass7.innerHTML='ON';
    }
  }
  if ((saveInnerEQ17 != ONOFFEQ7.innerHTML)||(saveSilderEQL17!=sliderEqLow7.value)||(saveSliderEQM17!=sliderEqMid7.value)||(saveSliderEQH17!=sliderEqHight7.value))//EQ
  {
    if(saveInnerEQ17=='ON')
    {
      var EQintLow = Math.floor(saveSliderEQL17);
      var EQintMid = Math.floor(saveSliderEQM17);
      var EQintHight = Math.floor(saveSliderEQH17);
      eq7.bands[0].gain(EQintLow);
      eq7.bands[1].gain(EQintMid);
      eq7.bands[2].gain(EQintHight);
      sliderEqLow7.value=saveSilderEQL17;
      sliderEqMid7.value=saveSliderEQM17;
      sliderEqHight7.value=saveSliderEQH17;
      ONOFFEQ7.innerHTML='ON';
    }
    else
    {
      ONOFFEQ7.innerHTML='OFF';
      eq7.bands[0].gain(0);
      eq7.bands[1].gain(0);
      eq7.bands[2].gain(0);   
      sliderEqLow7.value = saveSilderEQL17;
      sliderEqMid7.value = saveSliderEQM17;
      sliderEqHight7.value = saveSliderEQH17;
    }
  }
  if ((saveInnerCompressor17!=ONOFFCompressor7)||(saveSliderCompressor17!=sliderCompressor7))//Compressor
  {
    if(saveInnerCompressor17=='ON')
    {
      compressor7.connect();
      compressor17.process(channel7);
      var knee = map ((saveSliderCompressor17), 0, 1000, 0, 40);
      compressor7.knee(knee);
      ONOFFCompressor7.innerHTML= 'ON';
      sliderCompressor7.value= saveSliderCompressor17;
    }
    else
    {
      ONOFFCompressor7.innerHTML = ('OFF');
      compressor7.disconnect();
      sliderCompressor7.value= saveSliderCompressor17;
    }
  }
  if (saveSliderRate17 != (sliderRate7.value))
  {
    sliderRate7.value = saveSliderRate17;
    channel7.rate(sliderRate7.value/100);
  }
  if (saveSliderPan17!= sliderPan7.value)
  {
    sliderPan7.value = saveSliderPan17;
    channel7.pan(sliderPan7.value/100);
  }
  if (saveSliderVolume17 != sliderVolume7.value)
  {
    sliderVolume7.value = saveSliderVolume17;
    channel7.setVolume(sliderVolume7.value/100);
  }
}
function saveSetting11Click8 ()                                //CHANNEL 8
{
  /******We choose the music******/
  if (saveSelecteur18 != selecteur8)
  {
    if (saveSelecteur18==1)
    {
      channel8.disconnect(); 
      channel8 = loadSound("audio/18.mp3");
    }
    else if (saveSelecteur18==2)
    {
      channel8.disconnect(); 
      channel8 = loadSound("audio/28.mp3");
    }
    else
    {
      channel8.disconnect(); 
      channel8 = loadSound("audio/38.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect118 != buttonEffect18.innerHTML)||(saveSliderEffect118!=sliderEffect18.value))//first effect
  {
    if (saveInnerEffect118 == 'Reverb')
    {
      buttonEffect18.innerHTML='Reverb';
      effect18 = new p5.Reverb();
      effect18.process(channel8);
      effect18.drywet(saveSliderEffect118/100);
      effect18.amp(2.5);
      sliderEffect18.value=saveSliderEffect118;
    }
    else if (saveInnerEffect118 == 'Delay')
    {
      buttonEffect18.innerHTML='Delay';
      effect18 = new p5.Delay();
      effect18.process(channel8);
      effect18.drywet(saveSliderEffect118/100);
      effect18.amp(2.5);      
    }
    else if (saveInnerEffect118 == 'Ping Pong')
    {
      buttonEffect18.innerHTML='Ping Pong';
      effect18 = new p5.Delay;
      effect18.process(channel8);
      effect18.drywet(saveSliderEffect118/100);
      effect18.amp(2.5); 
      sliderEffect18.value=saveSliderEffect118;
    }
    else 
    {
      buttonEffect18.innerHTML='NONE';
      effect18.amp(0); 
      sliderEffect18.value=saveSliderEffect118;
    }
  }
  if ((saveInnerEffect218 != selectEffect28.value)||(saveSliderEffect218!=sliderEffect28.value))//second effect
  {
    if (saveInnerEffect218 == 'Reverb')
    {
      selectEffect28.value='Reverb';
      effect28 = new p5.Reverb();
      effect28.process(channel8);
      effect28.drywet(saveSliderEffect218/100);
      effect28.amp(2.5);
      sliderEffect28.value=saveSliderEffect218;
    }
    else if (saveInnerEffect218 == 'Delay')
    {
      selectEffect28.value='Delay';
      effect28 = new p5.Delay();
      effect28.process(channel8);
      effect28.drywet(saveSliderEffect218/100);
      effect28.amp(2.5);      
    }
    else if (saveInnerEffect218 == 'Ping Pong')
    {
      selectEffect28.value='Ping Pong';
      effect28 = new p5.Delay;
      effect28.process(channel8);
      effect28.drywet(saveSliderEffect218/100);
      effect28.amp(2.5); 
      sliderEffect18.value=saveSliderEffect218;
    }
    else 
    {
      selectEffect28.value='NONE';
      effect28.amp(0); 
      sliderEffect28.value=saveSliderEffect218;
    }
  }
  if ((saveInnerEffect318 != selectEffect38.value)||(saveSliderEffect318!=sliderEffect38.value))//third effect
  {
    if (saveInnerEffect318 == 'Reverb')
    {
      selectEffect38.value='Reverb';
      effect38 = new p5.Reverb();
      effect38.process(channel8);
      effect38.drywet(saveSliderEffect318/100);
      effect38.amp(2.5);
      sliderEffect38.value=saveSliderEffect318;
    }
    else if (saveInnerEffect318 == 'Delay')
    {
      selectEffect38.value='Delay';
      effect38 = new p5.Delay();
      effect38.process(channel8);
      effect38.drywet(saveSliderEffect318/100);
      effect38.amp(2.5);      
    }
    else if (saveInnerEffect318 == 'Ping Pong')
    {
      selectEffect38.value='Ping Pong';
      effect38 = new p5.Delay;
      effect38.process(channel8);
      effect38.drywet(saveSliderEffect318/100);
      effect38.amp(2.5); 
      sliderEffect38.value=saveSliderEffect318;
    }
    else 
    {
      selectEffect38.value='NONE';
      effect38.amp(0); 
      sliderEffect38.value=saveSliderEffect318;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass18 != ONOFFLowPass8.innerHTML)||(saveSliderLowPass18 != sliderLowPass8.value))//LowPass
  {
    if (saveInnerLowPass18=='OFF')
    {
      myFilter8.freq(22050);
      sliderLowPass8.value=saveSliderLowPass18;
      ONOFFLowPass8.innerHTML='OFF';
    }
    else
    {
      var filterFreq8 = map ((saveSliderLowPass18), 0, 1000, 10, 22050);
      myFilter8.freq(filterFreq8);
      myFilter8.res(28);
      sliderLowPass8.value=saveSliderLowPass18;
      ONOFFLowPass8.innerHTML='ON';
    }
  }
  if ((saveInnerEQ18 != ONOFFEQ8.innerHTML)||(saveSilderEQL18!=sliderEqLow8.value)||(saveSliderEQM18!=sliderEqMid8.value)||(saveSliderEQH18!=sliderEqHight8.value))//EQ
  {
    if(saveInnerEQ18=='ON')
    {
      var EQintLow = Math.floor(saveSliderEQL18);
      var EQintMid = Math.floor(saveSliderEQM18);
      var EQintHight = Math.floor(saveSliderEQH18);
      eq8.bands[0].gain(EQintLow);
      eq8.bands[1].gain(EQintMid);
      eq8.bands[2].gain(EQintHight);
      sliderEqLow8.value=saveSilderEQL18;
      sliderEqMid8.value=saveSliderEQM18;
      sliderEqHight8.value=saveSliderEQH18;
      ONOFFEQ8.innerHTML='ON';
    }
    else
    {
      ONOFFEQ8.innerHTML='OFF';
      eq8.bands[0].gain(0);
      eq8.bands[1].gain(0);
      eq8.bands[2].gain(0);   
      sliderEqLow8.value = saveSilderEQL18;
      sliderEqMid8.value = saveSliderEQM18;
      sliderEqHight8.value = saveSliderEQH18;
    }
  }
  if ((saveInnerCompressor18!=ONOFFCompressor8)||(saveSliderCompressor18!=sliderCompressor8))//Compressor
  {
    if(saveInnerCompressor18=='ON')
    {
      compressor8.connect();
      compressor18.process(channel8);
      var knee = map ((saveSliderCompressor18), 0, 1000, 0, 40);
      compressor8.knee(knee);
      ONOFFCompressor8.innerHTML= 'ON';
      sliderCompressor8.value= saveSliderCompressor18;
    }
    else
    {
      ONOFFCompressor8.innerHTML = ('OFF');
      compressor8.disconnect();
      sliderCompressor8.value= saveSliderCompressor18;
    }
  }
  if (saveSliderRate18 != (sliderRate8.value))
  {
    sliderRate8.value = saveSliderRate18;
    channel8.rate(sliderRate8.value/100);
  }
  if (saveSliderPan18!= sliderPan8.value)
  {
    sliderPan8.value = saveSliderPan18;
    channel8.pan(sliderPan8.value/100);
  }
  if (saveSliderVolume18 != sliderVolume8.value)
  {
    sliderVolume8.value = saveSliderVolume18;
    channel8.setVolume(sliderVolume8.value/100);
  }
}


/***RECALL SETTING SAVE2***/
function saveSetting21Click1 ()
{
  /******We choose the music******/
  if (saveSelecteur21 != selecteur1)
  {
    if (saveSelecteur21==1)
    {
      channel1.disconnect(); 
      channel1 = loadSound("audio/11.mp3");
    }
    else if (saveSelecteur21==2)
    {
      channel1.disconnect(); 
      channel1 = loadSound("audio/21.mp3");
    }
    else
    {
      channel1.disconnect(); 
      channel1 = loadSound("audio/31.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect121 != selectEffect11.value)||(saveSliderEffect121!=sliderEffect11.value))//first effect
  {
    if (saveInnerEffect121 == 'Reverb')
    {
      selectEffect11.value='Reverb';
      effect11 = new p5.Reverb();
      effect11.process(channel1, 6, 0.2);
      effect11.drywet(saveSliderEffect121/100);
      effect11.amp(2.5);
      sliderEffect11.value=saveSliderEffect121;
    }
    else if (saveInnerEffect121 == 'Delay')
    {
      selectEffect11.value='Delay';
      effect11 = new p5.Delay();
      effect11.process(channel1);
      effect11.drywet(saveSliderEffect121/100);
      effect11.amp(2.5);      
    }
    else if (saveInnerEffect121 == 'Ping Pong')
    {
      selectEffect11.value='Ping Pong';
      effect11 = new p5.Delay;
      effect11.process(channel1);
      effect11.drywet(saveSliderEffect121/100);
      effect11.amp(2.5); 
      sliderEffect11.value=saveSliderEffect121;
    }
    else 
    {
      selectEffect11.value='NONE';
      effect11.amp(0); 
      sliderEffect11.value=saveSliderEffect121;
    }
  }
  if ((saveInnerEffect221 != selectEffect21.value)||(saveSliderEffect221!=sliderEffect21.value))//second effect
  {
    if (saveInnerEffect221 == 'Reverb')
    {
      selectEffect21.value='Reverb';
      effect21 = new p5.Reverb();
      effect21.process(channel1);
      effect21.drywet(saveSliderEffect221/100);
      effect21.amp(2.5);
      sliderEffect21.value=saveSliderEffect221;
    }
    else if (saveInnerEffect221 == 'Delay')
    {
      selectEffect21.value='Delay';
      effect21 = new p5.Delay();
      effect21.process(channel1);
      effect21.drywet(saveSliderEffect221/100);
      effect21.amp(2.5);      
    }
    else if (saveInnerEffect221 == 'Ping Pong')
    {
      selectEffect21.value='Ping Pong';
      effect21 = new p5.Delay;
      effect21.process(channel1);
      effect21.drywet(saveSliderEffect221/100);
      effect21.amp(2.5); 
      sliderEffect11.value=saveSliderEffect221;
    }
    else 
    {
      selectEffect21.value='NONE';
      effect21.amp(0); 
      sliderEffect21.value=saveSliderEffect221;
    }
  }
  if ((saveInnerEffect321 != selectEffect31.value)||(saveSliderEffect321!=sliderEffect31.value))//third effect
  {
    if (saveInnerEffect321 == 'Reverb')
    {
      selectEffect31.value='Reverb';
      effect31 = new p5.Reverb();
      effect31.process(channel1);
      effect31.drywet(saveSliderEffect321/100);
      effect31.amp(2.5);
      sliderEffect31.value=saveSliderEffect321;
    }
    else if (saveInnerEffect321 == 'Delay')
    {
      selectEffect31.value='Delay';
      effect31 = new p5.Delay();
      effect31.process(channel1);
      effect31.drywet(saveSliderEffect321/100);
      effect31.amp(2.5);      
    }
    else if (saveInnerEffect321 == 'Ping Pong')
    {
      selectEffect31.value='Ping Pong';
      effect31 = new p5.Delay;
      effect31.process(channel1);
      effect31.drywet(saveSliderEffect321/100);
      effect31.amp(2.5); 
      sliderEffect31.value=saveSliderEffect321;
    }
    else 
    {
      selectEffect31.value='NONE';
      effect31.amp(0); 
      sliderEffect31.value=saveSliderEffect321;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass21 != ONOFFLowPass1.innerHTML)||(saveSliderLowPass21 != sliderLowPass1.value))//LowPass
  {
    if (saveInnerLowPass21=='OFF')
    {
      myFilter1.freq(22050);
      sliderLowPass1.value=saveSliderLowPass21;
      ONOFFLowPass1.innerHTML='OFF';
    }
    else
    {
      var filterFreq1 = map ((saveSliderLowPass21), 0, 1000, 10, 22050);
      myFilter1.freq(filterFreq1);
      myFilter1.res(28);
      sliderLowPass1.value=saveSliderLowPass21;
      ONOFFLowPass1.innerHTML='ON';
    }
  }
  if ((saveInnerEQ21 != ONOFFEQ1.innerHTML)||(saveSilderEQL21!=sliderEqLow1.value)||(saveSliderEQM21!=sliderEqMid1.value)||(saveSliderEQH21!=sliderEqHight1.value))//EQ
  {
    if(saveInnerEQ21=='ON')
    {
      console.log('eqon')
      var EQintLow = Math.floor(saveSilderEQL21);
      var EQintMid = Math.floor(saveSilderEQM21);
      var EQintHight = Math.floor(saveSilderEQH21);
      eq1.bands[0].gain(EQintLow);
      eq1.bands[1].gain(EQintMid);
      eq1.bands[2].gain(EQintHight);
      sliderEqLow1.value=saveSliderEQL21;
      sliderEqMid1.value=saveSliderEQM21;
      sliderEqHight1.value=saveSliderEQH21;
      ONOFFEQ1.innerHTML='ON';
    }
    else
    {
      console.log('eqoff')
      ONOFFEQ1.innerHTML='OFF';
      eq1.bands[0].gain(0);
      eq1.bands[1].gain(0);
      eq1.bands[2].gain(0);   
      sliderEqLow1.value = saveSilderEQL21;
      sliderEqMid1.value = saveSliderEQM21;
      sliderEqHight1.value = saveSliderEQH21;
    }
  }
  if ((saveInnerCompressor21!=ONOFFCompressor1.innerHTML)||(saveSliderCompressor21!=sliderCompressor1.value))//Compressor
  {
    if(saveInnerCompressor21=='ON')
    {
      compressor1.connect();
      compressor1.process(channel1);
      var knee = map ((saveSliderCompressor21), 0, 1000, 0, 40);
      compressor1.knee(knee);
      ONOFFCompressor1.innerHTML= 'ON';
      sliderCompressor1.value= saveSliderCompressor21;
    }
    else
    {
      ONOFFCompressor1.innerHTML = ('OFF');
      compressor1.disconnect();
      sliderCompressor1.value= saveSliderCompressor21;
    }
  }
  if (saveSliderRate21 != (sliderRate1.value))
  {
    sliderRate1.value = saveSliderRate21;
    channel1.rate(sliderRate1.value/100);
  }
  if (saveSliderPan21!= sliderPan1.value)
  {
    sliderPan1.value = saveSliderPan21;
    channel1.pan(sliderPan1.value/100);
  }
  if (saveSliderVolume21 != sliderVolume1.value)
  {
    sliderVolume1.value = saveSliderVolume21
    channel1.setVolume(sliderVolume1.value/100);
  }
}
function saveSetting21Click2 ()                                //CHANNEL 2
{
  /******We choose the music******/
  if (saveSelecteur22 != selecteur2)
  {
    if (saveSelecteur22==1)
    {
      channel2.disconnect(); 
      channel2 = loadSound("audio/12.mp3");
    }
    else if (saveSelecteur22==2)
    {
      channel2.disconnect(); 
      channel2 = loadSound("audio/22.mp3");
    }
    else
    {
      channel2.disconnect(); 
      channel2 = loadSound("audio/32.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect122 != selectEffect12.value)||(saveSliderEffect122!=sliderEffect12.value))//first effect
  {
    if (saveInnerEffect122 == 'Reverb')
    {
      selectEffect12.value='Reverb';
      effect12 = new p5.Reverb();
      effect12.process(channel2);
      effect12.drywet(saveSliderEffect122/100);
      effect12.amp(2.5);
      sliderEffect12.value=saveSliderEffect122;
    }
    else if (saveInnerEffect122 == 'Delay')
    {
      selectEffect12.value='Delay';
      effect12 = new p5.Delay();
      effect12.process(channel2);
      effect12.drywet(saveSliderEffect122/100);
      effect12.amp(2.5);      
    }
    else if (saveInnerEffect122 == 'Ping Pong')
    {
      selectEffect12.value='Ping Pong';
      effect12 = new p5.Delay;
      effect12.process(channel2);
      effect12.drywet(saveSliderEffect122/100);
      effect12.amp(2.5); 
      sliderEffect12.value=saveSliderEffect122;
    }
    else 
    {
      selectEffect12.value='NONE';
      effect12.amp(0); 
      sliderEffect12.value=saveSliderEffect122;
    }
  }
  if ((saveInnerEffect222 != selectEffect22.value)||(saveSliderEffect222!=sliderEffect22.value))//second effect
  {
    if (saveInnerEffect222 == 'Reverb')
    {
      selectEffect22.value='Reverb';
      effect22 = new p5.Reverb();
      effect22.process(channel2);
      effect22.drywet(saveSliderEffect222/100);
      effect22.amp(2.5);
      sliderEffect22.value=saveSliderEffect222;
    }
    else if (saveInnerEffect222 == 'Delay')
    {
      selectEffect22.value='Delay';
      effect22 = new p5.Delay();
      effect22.process(channel2);
      effect22.drywet(saveSliderEffect222/100);
      effect22.amp(2.5);      
    }
    else if (saveInnerEffect222 == 'Ping Pong')
    {
      selectEffect22.value='Ping Pong';
      effect22 = new p5.Delay;
      effect22.process(channel2);
      effect22.drywet(saveSliderEffect222/100);
      effect22.amp(2.5); 
      sliderEffect12.value=saveSliderEffect222;
    }
    else 
    {
      selectEffect22.value='NONE';
      effect22.amp(0); 
      sliderEffect22.value=saveSliderEffect222;
    }
  }
  if ((saveInnerEffect322 != selectEffect32.value)||(saveSliderEffect322!=sliderEffect32.value))//third effect
  {
    if (saveInnerEffect322 == 'Reverb')
    {
      selectEffect32.value='Reverb';
      effect32 = new p5.Reverb();
      effect32.process(channel2);
      effect32.drywet(saveSliderEffect322/100);
      effect32.amp(2.5);
      sliderEffect32.value=saveSliderEffect322;
    }
    else if (saveInnerEffect322 == 'Delay')
    {
      selectEffect32.value='Delay';
      effect32 = new p5.Delay();
      effect32.process(channel2);
      effect32.drywet(saveSliderEffect322/100);
      effect32.amp(2.5);      
    }
    else if (saveInnerEffect322 == 'Ping Pong')
    {
      selectEffect32.value='Ping Pong';
      effect32 = new p5.Delay;
      effect32.process(channel2);
      effect32.drywet(saveSliderEffect322/100);
      effect32.amp(2.5); 
      sliderEffect32.value=saveSliderEffect322;
    }
    else 
    {
      selectEffect32.value='NONE';
      effect32.amp(0); 
      sliderEffect32.value=saveSliderEffect322;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass22 != ONOFFLowPass2.innerHTML)||(saveSliderLowPass22 != sliderLowPass2.value))//LowPass
  {
    if (saveInnerLowPass22=='OFF')
    {
      myFilter2.freq(22050);
      sliderLowPass2.value=saveSliderLowPass22;
      ONOFFLowPass2.innerHTML='OFF';
    }
    else
    {
      var filterFreq2 = map ((saveSliderLowPass22), 0, 1000, 10, 22050);
      myFilter2.freq(filterFreq2);
      myFilter2.res(28);
      sliderLowPass2.value=saveSliderLowPass22;
      ONOFFLowPass2.innerHTML='ON';
    }
  }
  if ((saveInnerEQ22 != ONOFFEQ2.innerHTML)||(saveSilderEQL22!=sliderEqLow2.value)||(saveSliderEQM22!=sliderEqMid2.value)||(saveSliderEQH22!=sliderEqHight2.value))//EQ
  {
    if(saveInnerEQ22=='ON')
    {
      var EQintLow = Math.floor(saveSilderEQL22);
      var EQintMid = Math.floor(saveSilderEQM22);
      var EQintHight = Math.floor(saveSilderEQH22);
      eq2.bands[0].gain(EQintLow);
      eq2.bands[1].gain(EQintMid);
      eq2.bands[2].gain(EQintHight);
      sliderEqLow2.value=saveSliderEQL22;
      sliderEqMid2.value=saveSliderEQM22;
      sliderEqHight2.value=saveSliderEQH22;
      ONOFFEQ2.innerHTML='ON';
    }
    else
    {
      ONOFFEQ2.innerHTML='OFF';
      eq2.bands[0].gain(0);
      eq2.bands[1].gain(0);
      eq2.bands[2].gain(0);   
      sliderEqLow2.value = saveSilderEQL22;
      sliderEqMid2.value = saveSliderEQM22;
      sliderEqHight2.value = saveSliderEQH22;
    }
  }
  if ((saveInnerCompressor22!=ONOFFCompressor2.innerHTML)||(saveSliderCompressor22!=sliderCompressor2.value))//Compressor
  {
    if(saveInnerCompressor22=='ON')
    {
      compressor2.connect();
      compressor2.process(channel2);
      var knee = map ((saveSliderCompressor22), 0, 1000, 0, 40);
      compressor2.knee(knee);
      ONOFFCompressor2.innerHTML= 'ON';
      sliderCompressor2.value= saveSliderCompressor22;
    }
    else
    {
      ONOFFCompressor2.innerHTML = ('OFF');
      compressor2.disconnect();
      sliderCompressor2.value= saveSliderCompressor22;
    }
  }
  if (saveSliderRate22 != (sliderRate2.value))
  {
    sliderRate2.value = saveSliderRate22;
    channel2.rate(sliderRate2.value/100);
  }
  if (saveSliderPan22!= sliderPan2.value)
  {
    sliderPan2.value = saveSliderPan22;
    channel2.pan(sliderPan2.value/100);
  }
  if (saveSliderVolume22 != sliderVolume2.value)
  {
    sliderVolume2.value = saveSliderVolume22;
    channel2.setVolume(sliderVolume2.value/100);
  }
}
function saveSetting21Click3 ()                                //CHANNEL 3
{
  /******We choose the music******/
  if (saveSelecteur23 != selecteur3)
  {
    if (saveSelecteur23==1)
    {
      channel3.disconnect(); 
      channel3 = loadSound("audio/13.mp3");
    }
    else if (saveSelecteur23==2)
    {
      channel3.disconnect(); 
      channel3 = loadSound("audio/23.mp3");
    }
    else
    {
      channel3.disconnect(); 
      channel3 = loadSound("audio/33.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect123 != selectEffect13.value)||(saveSliderEffect123!=sliderEffect13.value))//first effect
  {
    if (saveInnerEffect123 == 'Reverb')
    {
      selectEffect13.value='Reverb';
      effect13 = new p5.Reverb();
      effect13.process(channel3);
      effect13.drywet(saveSliderEffect123/100);
      effect13.amp(2.5);
      sliderEffect13.value=saveSliderEffect123;
    }
    else if (saveInnerEffect123 == 'Delay')
    {
      selectEffect13.value='Delay';
      effect13 = new p5.Delay();
      effect13.process(channel3);
      effect13.drywet(saveSliderEffect123/100);
      effect13.amp(2.5);      
    }
    else if (saveInnerEffect123 == 'Ping Pong')
    {
      selectEffect13.value='Ping Pong';
      effect13 = new p5.Delay;
      effect13.process(channel3);
      effect13.drywet(saveSliderEffect123/100);
      effect13.amp(2.5); 
      sliderEffect13.value=saveSliderEffect123;
    }
    else 
    {
      selectEffect13.value='NONE';
      effect13.amp(0); 
      sliderEffect13.value=saveSliderEffect123;
    }
  }
  if ((saveInnerEffect223 != selectEffect23.value)||(saveSliderEffect223!=sliderEffect23.value))//second effect
  {
    if (saveInnerEffect223 == 'Reverb')
    {
      selectEffect23.value='Reverb';
      effect23 = new p5.Reverb();
      effect23.process(channel3);
      effect23.drywet(saveSliderEffect223/100);
      effect23.amp(2.5);
      sliderEffect23.value=saveSliderEffect223;
    }
    else if (saveInnerEffect223 == 'Delay')
    {
      selectEffect23.value='Delay';
      effect23 = new p5.Delay();
      effect23.process(channel3);
      effect23.drywet(saveSliderEffect223/100);
      effect23.amp(2.5);      
    }
    else if (saveInnerEffect223 == 'Ping Pong')
    {
      selectEffect23.value='Ping Pong';
      effect23 = new p5.Delay;
      effect23.process(channel3);
      effect23.drywet(saveSliderEffect223/100);
      effect23.amp(2.5); 
      sliderEffect13.value=saveSliderEffect223;
    }
    else 
    {
      selectEffect23.value='NONE';
      effect23.amp(0); 
      sliderEffect23.value=saveSliderEffect223;
    }
  }
  if ((saveInnerEffect323 != selectEffect33.value)||(saveSliderEffect323!=sliderEffect33.value))//third effect
  {
    if (saveInnerEffect323 == 'Reverb')
    {
      selectEffect33.value='Reverb';
      effect33 = new p5.Reverb();
      effect33.process(channel3);
      effect33.drywet(saveSliderEffect323/100);
      effect33.amp(2.5);
      sliderEffect33.value=saveSliderEffect323;
    }
    else if (saveInnerEffect323 == 'Delay')
    {
      selectEffect33.value='Delay';
      effect33 = new p5.Delay();
      effect33.process(channel3);
      effect33.drywet(saveSliderEffect323/100);
      effect33.amp(2.5);      
    }
    else if (saveInnerEffect323 == 'Ping Pong')
    {
      selectEffect33.value='Ping Pong';
      effect33 = new p5.Delay;
      effect33.process(channel3);
      effect33.drywet(saveSliderEffect323/100);
      effect33.amp(2.5); 
      sliderEffect33.value=saveSliderEffect323;
    }
    else 
    {
      selectEffect33.value='NONE';
      effect33.amp(0); 
      sliderEffect33.value=saveSliderEffect323;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass23 != ONOFFLowPass3.innerHTML)||(saveSliderLowPass23 != sliderLowPass3.value))//LowPass
  {
    if (saveInnerLowPass23=='OFF')
    {
      myFilter3.freq(22050);
      sliderLowPass3.value=saveSliderLowPass23;
      ONOFFLowPass3.innerHTML='OFF';
    }
    else
    {
      var filterFreq3 = map ((saveSliderLowPass23), 0, 1000, 10, 22050);
      myFilter3.freq(filterFreq3);
      myFilter3.res(28);
      sliderLowPass3.value=saveSliderLowPass23;
      ONOFFLowPass3.innerHTML='ON';
    }
  }
  if ((saveInnerEQ23 != ONOFFEQ3.innerHTML)||(saveSilderEQL23!=sliderEqLow3.value)||(saveSliderEQM23!=sliderEqMid3.value)||(saveSliderEQH23!=sliderEqHight3.value))//EQ
  {
    if(saveInnerEQ23=='ON')
    {
      var EQintLow = Math.floor(saveSilderEQL23);
      var EQintMid = Math.floor(saveSilderEQM23);
      var EQintHight = Math.floor(saveSilderEQH23);
      eq3.bands[0].gain(EQintLow);
      eq3.bands[1].gain(EQintMid);
      eq3.bands[2].gain(EQintHight);
      sliderEqLow3.value=saveSliderEQL23;
      sliderEqMid3.value=saveSliderEQM23;
      sliderEqHight3.value=saveSliderEQH23;
      ONOFFEQ3.innerHTML='ON';
    }
    else
    {
      ONOFFEQ3.innerHTML='OFF';
      eq3.bands[0].gain(0);
      eq3.bands[1].gain(0);
      eq3.bands[2].gain(0);   
      sliderEqLow3.value = saveSilderEQL23;
      sliderEqMid3.value = saveSliderEQM23;
      sliderEqHight3.value = saveSliderEQH23;
    }
  }
  if ((saveInnerCompressor23!=ONOFFCompressor3.innerHTML)||(saveSliderCompressor23!=sliderCompressor3.value))//Compressor
  {
    if(saveInnerCompressor23=='ON')
    {
      compressor3.connect();
      compressor3.process(channel3);
      var knee = map ((saveSliderCompressor23), 0, 1000, 0, 40);
      compressor3.knee(knee);
      ONOFFCompressor3.innerHTML= 'ON';
      sliderCompressor3.value= saveSliderCompressor23;
    }
    else
    {
      ONOFFCompressor3.innerHTML = ('OFF');
      compressor3.disconnect();
      sliderCompressor3.value= saveSliderCompressor23;
    }
  }
  if (saveSliderRate23 != (sliderRate3.value))
  {
    sliderRate3.value = saveSliderRate23;
    channel3.rate(sliderRate3.value/100);
  }
  if (saveSliderPan23!= sliderPan3.value)
  {
    sliderPan3.value = saveSliderPan23;
    channel3.pan(sliderPan3.value/100);
  }
  if (saveSliderVolume23 != sliderVolume3.value)
  {
    sliderVolume3.value = saveSliderVolume23;
    channel3.setVolume(sliderVolume3.value/100);
  }
}
function saveSetting21Click4 ()                                //CHANNEL 4
{
  /******We choose the music******/
  if (saveSelecteur24 != selecteur4)
  {
    if (saveSelecteur24==1)
    {
      channel4.disconnect(); 
      channel4 = loadSound("audio/14.mp3");
    }
    else if (saveSelecteur24==2)
    {
      channel4.disconnect(); 
      channel4= loadSound("audio/24.mp3");
    }
    else
    {
      channel4.disconnect(); 
      channel4 = loadSound("audio/34.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect124 != selectEffect14.value)||(saveSliderEffect124!=sliderEffect14.value))//first effect
  {
    if (saveInnerEffect124 == 'Reverb')
    {
      selectEffect14.value='Reverb';
      effect14 = new p5.Reverb();
      effect14.process(channel4);
      effect14.drywet(saveSliderEffect124/100);
      effect14.amp(2.5);
      sliderEffect14.value=saveSliderEffect124;
    }
    else if (saveInnerEffect124 == 'Delay')
    {
      selectEffect14.value='Delay';
      effect14 = new p5.Delay();
      effect14.process(channel4);
      effect14.drywet(saveSliderEffect124/100);
      effect14.amp(2.5);      
    }
    else if (saveInnerEffect124 == 'Ping Pong')
    {
      selectEffect14.value='Ping Pong';
      effect14 = new p5.Delay;
      effect14.process(channel4);
      effect14.drywet(saveSliderEffect124/100);
      effect14.amp(2.5); 
      sliderEffect14.value=saveSliderEffect124;
    }
    else 
    {
      selectEffect14.value='NONE';
      effect14.amp(0); 
      sliderEffect14.value=saveSliderEffect124;
    }
  }
  if ((saveInnerEffect224 != selectEffect24.value)||(saveSliderEffect224!=sliderEffect24.value))//second effect
  {
    if (saveInnerEffect224 == 'Reverb')
    {
      selectEffect24.value='Reverb';
      effect24 = new p5.Reverb();
      effect24.process(channel4);
      effect24.drywet(saveSliderEffect224/100);
      effect24.amp(2.5);
      sliderEffect24.value=saveSliderEffect224;
    }
    else if (saveInnerEffect224 == 'Delay')
    {
      selectEffect24.value='Delay';
      effect24 = new p5.Delay();
      effect24.process(channel4);
      effect24.drywet(saveSliderEffect224/100);
      effect24.amp(2.5);    
  
    }
    else if (saveInnerEffect224 == 'Ping Pong')
    {
      selectEffect24.value='Ping Pong';
      effect24 = new p5.Delay;
      effect24.process(channel4);
      effect24.drywet(saveSliderEffect224/100);
      effect24.amp(2.5); 
      sliderEffect14.value=saveSliderEffect224;
    }
    else 
    {
      selectEffect24.value='NONE';
      effect24.amp(0); 
      sliderEffect24.value=saveSliderEffect224;
    }
  }
  if ((saveInnerEffect324 != selectEffect34.value)||(saveSliderEffect324!=sliderEffect34.value))//third effect
  {
    if (saveInnerEffect324 == 'Reverb')
    {
      selectEffect34.value='Reverb';
      effect34 = new p5.Reverb();
      effect34.process(channel4);
      effect34.drywet(saveSliderEffect324/100);
      effect34.amp(2.5);
      sliderEffect34.value=saveSliderEffect324;
    }
    else if (saveInnerEffect324 == 'Delay')
    {
      selectEffect34.value='Delay';
      effect34= new p5.Delay();
      effect34.process(channel4);
      effect34.drywet(saveSliderEffect324/100);
      effect34.amp(2.5);      
    }
    else if (saveInnerEffect324 == 'Ping Pong')
    {
      selectEffect34.value='Ping Pong';
      effect34= new p5.Delay;
      effect34.process(channel4);
      effect34.drywet(saveSliderEffect324/100);
      effect34.amp(2.5); 
      sliderEffect34.value=saveSliderEffect324;
    }
    else 
    {
      selectEffect34.value='NONE';
      effect34.amp(0); 
      sliderEffect34.value=saveSliderEffect324;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass24 != ONOFFLowPass4.innerHTML)||(saveSliderLowPass24 != sliderLowPass4.value))//LowPass
  {
    if (saveInnerLowPass24=='OFF')
    {
      myFilter4.freq(22050);
      sliderLowPass4.value=saveSliderLowPass24;
      ONOFFLowPass4.innerHTML='OFF';
    }
    else
    {
      var filterFreq4 = map ((saveSliderLowPass24), 0, 1000, 10, 22050);
      myFilter4.freq(filterFreq4);
      myFilter4.res(28);
      sliderLowPass4.value=saveSliderLowPass24;
      ONOFFLowPass4.innerHTML='ON';
    }
  }
  if ((saveInnerEQ24 != ONOFFEQ4.innerHTML)||(saveSilderEQL24!=sliderEqLow4.value)||(saveSliderEQM24!=sliderEqMid4.value)||(saveSliderEQH24!=sliderEqHight4.value))//EQ
  {
    if(saveInnerEQ24=='ON')
    {
      var EQintLow = Math.floor(saveSilderEQL24);
      var EQintMid = Math.floor(saveSilderEQM24);
      var EQintHight = Math.floor(saveSilderEQH24);
      eq4.bands[0].gain(EQintLow);
      eq4.bands[1].gain(EQintMid);
      eq4.bands[2].gain(EQintHight);
      sliderEqLow4.value=saveSliderEQL24;
      sliderEqMid4.value=saveSliderEQM24;
      sliderEqHight4.value=saveSliderEQH24;
      ONOFFEQ4.innerHTML='ON';
    }
    else
    {
      ONOFFEQ4.innerHTML='OFF';
      eq4.bands[0].gain(0);
      eq4.bands[1].gain(0);
      eq4.bands[2].gain(0);   
      sliderEqLow4.value = saveSilderEQL24;
      sliderEqMid4.value = saveSliderEQM24;
      sliderEqHight4.value = saveSliderEQH24;
    }
  }
  if ((saveInnerCompressor24!=ONOFFCompressor4.innerHTML)||(saveSliderCompressor24!=sliderCompressor4.value))//Compressor
  {
    if(saveInnerCompressor24=='ON')
    {
      compressor4.connect();
      compressor4.process(channel4);
      var knee = map ((saveSliderCompressor24), 0, 1000, 0, 40);
      compressor4.knee(knee);
      ONOFFCompressor4.innerHTML= 'ON';
      sliderCompressor4.value= saveSliderCompressor24;
    }
    else
    {
      ONOFFCompressor4.innerHTML = ('OFF');
      compressor4.disconnect();
      sliderCompressor4.value= saveSliderCompressor24;
    }
  }
  if (saveSliderRate24 != (sliderRate4.value))
  {
    sliderRate4.value = saveSliderRate24;
    channel4.rate(sliderRate4.value/100);
  }
  if (saveSliderPan24!= sliderPan4.value)
  {
    sliderPan4.value = saveSliderPan24;
    channel4.pan(sliderPan4.value/100);
  }
  if (saveSliderVolume24 != sliderVolume4.value)
  {
    sliderVolume4.value = saveSliderVolume24;
    channel4.setVolume(sliderVolume4.value/100);
  }
}
function saveSetting21Click5 ()                                //CHANNEL 5
{
    /******We choose the music******/
  if (saveSelecteur25 != selecteur5)
  {
    if (saveSelecteur25==1)
    {
      channel5.disconnect(); 
      channel5 = loadSound("audio/15.mp3");
    }
    else if (saveSelecteur25==2)
    {
      channel5.disconnect(); 
      channel5= loadSound("audio/25.mp3");
    }
    else
    {
      channel5.disconnect(); 
      channel5= loadSound("audio/35.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect125 != selectEffect15.value)||(saveSliderEffect125!=sliderEffect15.value))//first effect
  {
    if (saveInnerEffect125== 'Reverb')
    {
      selectEffect15.value='Reverb';
      effect15 = new p5.Reverb();
      effect15.process(channel5);
      effect15.drywet(saveSliderEffect125/100);
      effect15.amp(2.5);
      sliderEffect15.value=saveSliderEffect125;
    }
    else if (saveInnerEffect125 == 'Delay')
    {
      selectEffect15.value='Delay';
      effect15 = new p5.Delay();
      effect15.process(channel5);
      effect15.drywet(saveSliderEffect125/100);
      effect15.amp(2.5);      
    }
    else if (saveInnerEffect125 == 'Ping Pong')
    {
      selectEffect15.value='Ping Pong';
      effect15 = new p5.Delay;
      effect15.process(channel5);
      effect15.drywet(saveSliderEffect125/100);
      effect15.amp(2.5); 
      sliderEffect15.value=saveSliderEffect125;
    }
    else 
    {
      selectEffect15.value='NONE';
      effect15.amp(0); 
      sliderEffect15.value=saveSliderEffect125;
    }
  }
  if ((saveInnerEffect225 != selectEffect25.value)||(saveSliderEffect225!=sliderEffect25.value))//second effect
  {
    if (saveInnerEffect225 == 'Reverb')
    {
      selectEffect25.value='Reverb';
      effect25 = new p5.Reverb();
      effect25.process(channel5);
      effect25.drywet(saveSliderEffect225/100);
      effect25.amp(2.5);
      sliderEffect25.value=saveSliderEffect225;
    }
    else if (saveInnerEffect225 == 'Delay')
    {
      selectEffect25.value='Delay';
      effect25 = new p5.Delay();
      effect25.process(channel5);
      effect25.drywet(saveSliderEffect225/100);
      effect25.amp(2.5);      
    }
    else if (saveInnerEffect225 == 'Ping Pong')
    {
      selectEffect25.value='Ping Pong';
      effect25 = new p5.Delay;
      effect25.process(channel5);
      effect25.drywet(saveSliderEffect225/100);
      effect25.amp(2.5); 
      sliderEffect15.value=saveSliderEffect225;
    }
    else 
    {
      selectEffect25.value='NONE';
      effect25.amp(0); 
      sliderEffect25.value=saveSliderEffect225;
    }
  }
  if ((saveInnerEffect325 != selectEffect35.value)||(saveSliderEffect325!=sliderEffect35.value))//third effect
  {
    if (saveInnerEffect325 == 'Reverb')
    {
      selectEffect35.value='Reverb';
      effect35 = new p5.Reverb();
      effect35.process(channel5);
      effect35.drywet(saveSliderEffect325/100);
      effect35.amp(2.5);
      sliderEffect35.value=saveSliderEffect325;
    }
    else if (saveInnerEffect325 == 'Delay')
    {
      selectEffect35.value='Delay';
      effect35= new p5.Delay();
      effect35.process(channel5);
      effect35.drywet(saveSliderEffect325/100);
      effect35.amp(2.5);      
    }
    else if (saveInnerEffect325 == 'Ping Pong')
    {
      selectEffect35.value='Ping Pong';
      effect35= new p5.Delay;
      effect35.process(channel5);
      effect35.drywet(saveSliderEffect325/100);
      effect35.amp(2.5); 
      sliderEffect35.value=saveSliderEffect325;
    }
    else 
    {
      selectEffect35.value='NONE';
      effect35.amp(0); 
      sliderEffect35.value=saveSliderEffect325;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass25 != ONOFFLowPass5.innerHTML)||(saveSliderLowPass25 != sliderLowPass5.value))//LowPass
  {
    if (saveInnerLowPass25=='OFF')
    {
      myFilter5.freq(22050);
      sliderLowPass5.value=saveSliderLowPass25;
      ONOFFLowPass5.innerHTML='OFF';
    }
    else
    {
      var filterFreq5 = map ((saveSliderLowPass25), 0, 1000, 10, 22050);
      myFilter5.freq(filterFreq5);
      myFilter5.res(28);
      sliderLowPass5.value=saveSliderLowPass25;
      ONOFFLowPass5.innerHTML='ON';
    }
  }
  if ((saveInnerEQ25 != ONOFFEQ5.innerHTML)||(saveSilderEQL25!=sliderEqLow5.value)||(saveSliderEQM25!=sliderEqMid5.value)||(saveSliderEQH25!=sliderEqHight5.value))//EQ
  {
    if(saveInnerEQ25=='ON')
    {
      var EQintLow = Math.floor(saveSilderEQL25);
      var EQintMid = Math.floor(saveSilderEQM25);
      var EQintHight = Math.floor(saveSilderEQH25);
      eq5.bands[0].gain(EQintLow);
      eq5.bands[1].gain(EQintMid);
      eq5.bands[2].gain(EQintHight);
      sliderEqLow5.value=saveSliderEQL25;
      sliderEqMid5.value=saveSliderEQM25;
      sliderEqHight5.value=saveSliderEQH25;
      ONOFFEQ5.innerHTML='ON';
    }
    else
    {
      ONOFFEQ5.innerHTML='OFF';
      eq5.bands[0].gain(0);
      eq5.bands[1].gain(0);
      eq5.bands[2].gain(0);   
      sliderEqLow5.value = saveSilderEQL25;
      sliderEqMid5.value = saveSliderEQM25;
      sliderEqHight5.value = saveSliderEQH25;
    }
  }
  if ((saveInnerCompressor25!=ONOFFCompressor5.innerHTML)||(saveSliderCompressor25!=sliderCompressor5.value))//Compressor
  {
    if(saveInnerCompressor25=='ON')
    {
      compressor5.connect();
      compressor5.process(channel5);
      var knee = map ((saveSliderCompressor25), 0, 1000, 0, 40);
      compressor5.knee(knee);
      ONOFFCompressor5.innerHTML= 'ON';
      sliderCompressor5.value= saveSliderCompressor25;
    }
    else
    {
      ONOFFCompressor5.innerHTML = ('OFF');
      compressor5.disconnect();
      sliderCompressor5.value= saveSliderCompressor25;
    }
  }
  if (saveSliderRate25 != (sliderRate5.value))
  {
    sliderRate5.value = saveSliderRate25;
    channel5.rate(sliderRate5.value/100);
  }
  if (saveSliderPan25!= sliderPan5.value)
  {
    sliderPan5.value = saveSliderPan25;
    channel5.pan(sliderPan5.value/100);
  }
  if (saveSliderVolume25 != sliderVolume5.value)
  {
    sliderVolume5.value = saveSliderVolume25;
    channel5.setVolume(sliderVolume5.value/100);
  }
}
function saveSetting21Click6 ()                                //CHANNEL 6
{
    /******We choose the music******/
  if (saveSelecteur26 != selecteur6)
  {
    if (saveSelecteur26==1)
    {
      channel6.disconnect(); 
      channel6 = loadSound("audio/16.mp3");
    }
    else if (saveSelecteur26==2)
    {
      channel6.disconnect(); 
      channel6= loadSound("audio/26.mp3");
    }
    else
    {
      channel6.disconnect(); 
      channel6= loadSound("audio/36.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect126 != selectEffect16.value)||(saveSliderEffect126!=sliderEffect16.value))//first effect
  {
    if (saveInnerEffect126== 'Reverb')
    {
      selectEffect16.value='Reverb';
      effect16 = new p5.Reverb();
      effect16.process(channel6);
      effect16.drywet(saveSliderEffect126/100);
      effect16.amp(2.5);
      sliderEffect16.value=saveSliderEffect126;
    }
    else if (saveInnerEffect126 == 'Delay')
    {
      selectEffect16.value='Delay';
      effect16 = new p5.Delay();
      effect16.process(channel6);
      effect16.drywet(saveSliderEffect126/100);
      effect16.amp(2.5);      
    }
    else if (saveInnerEffect126 == 'Ping Pong')
    {
      selectEffect16.value='Ping Pong';
      effect16 = new p5.Delay;
      effect16.process(channel6);
      effect16.drywet(saveSliderEffect126);
      effect16.amp(2.5); 
      sliderEffect16.value=saveSliderEffect126;
    }
    else 
    {
      selectEffect16.value='NONE';
      effect16.amp(0); 
      sliderEffect16.value=saveSliderEffect126;
    }
  }
  if ((saveInnerEffect226 != selectEffect26.value)||(saveSliderEffect226!=sliderEffect26.value))//second effect
  {
    if (saveInnerEffect226 == 'Reverb')
    {
      selectEffect26.value='Reverb';
      effect26 = new p5.Reverb();
      effect26.process(channel6);
      effect26.drywet(saveSliderEffect226/100);
      effect26.amp(2.5);
      sliderEffect26.value=saveSliderEffect226;
    }
    else if (saveInnerEffect226 == 'Delay')
    {
      selectEffect26.value='Delay';
      effect26 = new p5.Delay();
      effect26.process(channel6);
      effect26.drywet(saveSliderEffect226/100);
      effect26.amp(2.5);      
    }
    else if (saveInnerEffect226 == 'Ping Pong')
    {
      selectEffect26.value='Ping Pong';
      effect26 = new p5.Delay;
      effect26.process(channel6);
      effect26.drywet(saveSliderEffect226/100);
      effect26.amp(2.5); 
      sliderEffect16.value=saveSliderEffect226;
    }
    else 
    {
      selectEffect26.value='NONE';
      effect26.amp(0); 
      sliderEffect26.value=saveSliderEffect226;
    }
  }
  if ((saveInnerEffect326 != selectEffect36.value)||(saveSliderEffect326!=sliderEffect36.value))//third effect
  {
    if (saveInnerEffect326 == 'Reverb')
    {
      selectEffect36.value='Reverb';
      effect36 = new p5.Reverb();
      effect36.process(channel6);
      effect36.drywet(saveSliderEffect326/100);
      effect36.amp(2.5);
      sliderEffect36.value=saveSliderEffect326;
    }
    else if (saveInnerEffect326 == 'Delay')
    {
      selectEffect36.value='Delay';
      effect36= new p5.Delay();
      effect36.process(channel6);
      effect36.drywet(saveSliderEffect326/100);
      effect36.amp(2.5);      
    }
    else if (saveInnerEffect326 == 'Ping Pong')
    {
      selectEffect36.value='Ping Pong';
      effect36= new p5.Delay;
      effect36.process(channel6);
      effect36.drywet(saveSliderEffect326/100);
      effect36.amp(2.5); 
      sliderEffect36.value=saveSliderEffect326;
    }
    else 
    {
      selectEffect36.value='NONE';
      effect36.amp(0); 
      sliderEffect36.value=saveSliderEffect326;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass26 != ONOFFLowPass6.innerHTML)||(saveSliderLowPass26 != sliderLowPass6.value))//LowPass
  {
    if (saveInnerLowPass26=='OFF')
    {
      myFilter6.freq(22050);
      sliderLowPass6.value=saveSliderLowPass26;
      ONOFFLowPass6.innerHTML='OFF';
    }
    else
    {
      var filterFreq6 = map ((saveSliderLowPass26), 0, 1000, 10, 22050);
      myFilter6.freq(filterFreq6);
      myFilter6.res(28);
      sliderLowPass6.value=saveSliderLowPass26;
      ONOFFLowPass6.innerHTML='ON';
    }
  }
  if ((saveInnerEQ26 != ONOFFEQ6.innerHTML)||(saveSilderEQL26!=sliderEqLow6.value)||(saveSliderEQM26!=sliderEqMid6.value)||(saveSliderEQH26!=sliderEqHight6.value))//EQ
  {
    if(saveInnerEQ26=='ON')
    {
      var EQintLow = Math.floor(saveSilderEQL26);
      var EQintMid = Math.floor(saveSilderEQM26);
      var EQintHight = Math.floor(saveSilderEQH26);
      eq6.bands[0].gain(EQintLow);
      eq6.bands[1].gain(EQintMid);
      eq6.bands[2].gain(EQintHight);
      sliderEqLow6.value=saveSliderEQL26;
      sliderEqMid6.value=saveSliderEQM26;
      sliderEqHight6.value=saveSliderEQ26;
      ONOFFEQ6.innerHTML='ON';
    }
    else
    {
      ONOFFEQ6.innerHTML='OFF';
      eq6.bands[0].gain(0);
      eq6.bands[1].gain(0);
      eq6.bands[2].gain(0);   
      sliderEqLow6.value = saveSilderEQL26;
      sliderEqMid6.value = saveSliderEQM26;
      sliderEqHight6.value = saveSliderEQH26;
    }
  }
  if ((saveInnerCompressor26!=ONOFFCompressor6.innerHTML)||(saveSliderCompressor26!=sliderCompressor6.value))//Compressor
  {
    if(saveInnerCompressor26=='ON')
    {
      compressor6.connect();
      compressor6.process(channel6);
      var knee = map ((saveSliderCompressor26), 0, 1000, 0, 40);
      compressor6.knee(knee);
      ONOFFCompressor6.innerHTML= 'ON';
      sliderCompressor6.value= saveSliderCompressor26;
    }
    else
    {
      ONOFFCompressor6.innerHTML = ('OFF');
      compressor6.disconnect();
      sliderCompressor6.value= saveSliderCompressor26;
    }
  }
  if (saveSliderRate26 != (sliderRate6.value))
  {
    sliderRate6.value = saveSliderRate26;
    channel6.rate(sliderRate6.value/100);
  }
  if (saveSliderPan26!= sliderPan6.value)
  {
    sliderPan6.value = saveSliderPan26;
    channel6.pan(sliderPan6.value/100);
  }
  if (saveSliderVolume26 != sliderVolume6.value)
  {
    sliderVolume6.value = saveSliderVolume26;
    channel6.setVolume(sliderVolume6.value/100);
  }
}
function saveSetting21Click7 ()                                //CHANNEL 7
{
    /******We choose the music******/
  if (saveSelecteur27 != selecteur7)
  {
    if (saveSelecteur27==1)
    {
      channel7.disconnect(); 
      channel7 = loadSound("audio/17.mp3");
    }
    else if (saveSelecteur27==2)
    {
      channel7.disconnect(); 
      channel7= loadSound("audio/27.mp3");
    }
    else
    {
      channel7.disconnect(); 
      channel7= loadSound("audio/37.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect127 != selectEffect17.value)||(saveSliderEffect127!=sliderEffect17.value))//first effect
  {
    if (saveInnerEffect127== 'Reverb')
    {
      selectEffect17.value='Reverb';
      effect17 = new p5.Reverb();
      effect17.process(channel7);
      effect17.drywet(saveSliderEffect127/100);
      effect17.amp(2.5);
      sliderEffect17.value=saveSliderEffect127;
    }
    else if (saveInnerEffect127 == 'Delay')
    {
      selectEffect17.value='Delay';
      effect17 = new p5.Delay();
      effect17.process(channel6);
      effect17.drywet(saveSliderEffect127/100);
      effect17.amp(2.5);      
    }
    else if (saveInnerEffect127 == 'Ping Pong')
    {
      selectEffect17.value='Ping Pong';
      effect17 = new p5.Delay;
      effect17.process(channel7);
      effect17.drywet(saveSliderEffect127/100);
      effect17.amp(2.5); 
      sliderEffect17.value=saveSliderEffect127;
    }
    else 
    {
      selectEffect17.value='NONE';
      effect17.amp(0); 
      sliderEffect17.value=saveSliderEffect127;
    }
  }
  if ((saveInnerEffect227 != selectEffect27.value)||(saveSliderEffect227!=sliderEffect27.value))//second effect
  {
    if (saveInnerEffect227 == 'Reverb')
    {
      selectEffect27.value='Reverb';
      effect27 = new p5.Reverb();
      effect27.process(channel7);
      effect27.drywet(saveSliderEffect227/100);
      effect27.amp(2.5);
      sliderEffect27.value=saveSliderEffect227;
    }
    else if (saveInnerEffect227 == 'Delay')
    {
      selectEffect27.value='Delay';
      effect27 = new p5.Delay();
      effect27.process(channel7);
      effect27.drywet(saveSliderEffect227/100);
      effect27.amp(2.5);      
    }
    else if (saveInnerEffect227 == 'Ping Pong')
    {
      selectEffect27.value='Ping Pong';
      effect27 = new p5.Delay;
      effect27.process(channel7);
      effect27.drywet(saveSliderEffect227/100);
      effect27.amp(2.5); 
      sliderEffect17.value=saveSliderEffect227;
    }
    else 
    {
      selectEffect27.value='NONE';
      effect27.amp(0); 
      sliderEffect27.value=saveSliderEffect227;
    }
  }
  if ((saveInnerEffect327 != selectEffect37.value)||(saveSliderEffect327!=sliderEffect37.value))//third effect
  {
    if (saveInnerEffect327 == 'Reverb')
    {
      selectEffect37.value='Reverb';
      effect37 = new p5.Reverb();
      effect37.process(channel7);
      effect37.drywet(saveSliderEffect327/100);
      effect37.amp(2.5);
      sliderEffect37.value=saveSliderEffect327;
    }
    else if (saveInnerEffect327 == 'Delay')
    {
      selectEffect37.value='Delay';
      effect37= new p5.Delay();
      effect37.process(channel7);
      effect37.drywet(saveSliderEffect327/100);
      effect37.amp(2.5);      
    }
    else if (saveInnerEffect327 == 'Ping Pong')
    {
      selectEffect37.value='Ping Pong';
      effect37= new p5.Delay;
      effect37.process(channel7);
      effect37.drywet(saveSliderEffect327/100);
      effect37.amp(2.5); 
      sliderEffect37.value=saveSliderEffect327;
    }
    else 
    {
      selectEffect37.value='NONE';
      effect37.amp(0); 
      sliderEffect37.value=saveSliderEffect327;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass27 != ONOFFLowPass7.innerHTML)||(saveSliderLowPass27 != sliderLowPass7.value))//LowPass
  {
    if (saveInnerLowPass27=='OFF')
    {
      myFilter7.freq(22050);
      sliderLowPass7.value=saveSliderLowPass27;
      ONOFFLowPass7.innerHTML='OFF';
    }
    else
    {
      var filterFreq7 = map ((saveSliderLowPass27), 0, 1000, 10, 22050);
      myFilter7.freq(filterFreq7);
      myFilter7.res(28);
      sliderLowPass7.value=saveSliderLowPass27;
      ONOFFLowPass7.innerHTML='ON';
    }
  }
  if ((saveInnerEQ27 != ONOFFEQ7.innerHTML)||(saveSilderEQL27!=sliderEqLow7.value)||(saveSliderEQM27!=sliderEqMid7.value)||(saveSliderEQH27!=sliderEqHight7.value))//EQ
  {
    if(saveInnerEQ27=='ON')
    {
      var EQintLow = Math.floor(saveSilderEQL27);
      var EQintMid = Math.floor(saveSilderEQM27);
      var EQintHight = Math.floor(saveSilderEQH27);
      eq7.bands[0].gain(EQintLow);
      eq7.bands[1].gain(EQintMid);
      eq7.bands[2].gain(EQintHight);
      sliderEqLow7.value=saveSliderEQL27;
      sliderEqMid7.value=saveSliderEQM27;
      sliderEqHight7.value=saveSliderEQ27;
      ONOFFEQ7.innerHTML='ON';
    }
    else
    {
      ONOFFEQ7.innerHTML='OFF';
      eq7.bands[0].gain(0);
      eq7.bands[1].gain(0);
      eq7.bands[2].gain(0);   
      sliderEqLow7.value = saveSilderEQL27;
      sliderEqMid7.value = saveSliderEQM27;
      sliderEqHight7.value = saveSliderEQH27;
    }
  }
  if ((saveInnerCompressor27!=ONOFFCompressor7.innerHTML)||(saveSliderCompressor27!=sliderCompressor7.value))//Compressor
  {
    if(saveInnerCompressor27=='ON')
    {
      compressor7.connect();
      compressor7.process(channel7);
      var knee = map ((saveSliderCompressor27), 0, 1000, 0, 40);
      compressor7.knee(knee);
      ONOFFCompressor7.innerHTML= 'ON';
      sliderCompressor7.value= saveSliderCompressor27;
    }
    else
    {
      ONOFFCompressor7.innerHTML = ('OFF');
      compressor7.disconnect();
      sliderCompressor7.value= saveSliderCompressor27;
    }
  }
  if (saveSliderRate27 != (sliderRate7.value))
  {
    sliderRate7.value = saveSliderRate27;
    channel7.rate(sliderRate7.value/100);
  }
  if (saveSliderPan27!= sliderPan7.value)
  {
    sliderPan7.value = saveSliderPan27;
    channel7.pan(sliderPan7.value/100);
  }
  if (saveSliderVolume27 != sliderVolume7.value)
  {
    sliderVolume7.value = saveSliderVolume27;
    channel7.setVolume(sliderVolume7.value/100);
  }
}
function saveSetting21Click8 ()                                //CHANNEL 8
{
 if (saveSelecteur28 != selecteur8)
  {
    if (saveSelecteur28==1)
    {
      channel8.disconnect(); 
      channel8 = loadSound("audio/18.mp3");
    }
    else if (saveSelecteur28==2)
    {
      channel8.disconnect(); 
      channel8= loadSound("audio/28.mp3");
    }
    else
    {
      channel8.disconnect(); 
      channel8= loadSound("audio/38.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect128 != buttonEffect18.innerHTML)||(saveSliderEffect128!=sliderEffect18.value))//first effect
  {
    if (saveInnerEffect128== 'Reverb')
    {
      buttonEffect18.innerHTML='Reverb';
      effect18 = new p5.Reverb();
      effect18.process(channel8);
      effect18.drywet(saveSliderEffect128/100);
      effect18.amp(2.5);
      sliderEffect18.value=saveSliderEffect128;
    }
    else if (saveInnerEffect128 == 'Delay')
    {
      buttonEffect18.innerHTML='Delay';
      effect18 = new p5.Delay();
      effect18.process(channel8);
      effect18.drywet(saveSliderEffect128/100);
      effect18.amp(2.5);      
    }
    else if (saveInnerEffect128 == 'Ping Pong')
    {
      buttonEffect18.innerHTML='Ping Pong';
      effect18 = new p5.Delay;
      effect18.process(channel7);
      effect18.drywet(saveSliderEffect128/100);
      effect18.amp(2.5); 
      sliderEffect18.value=saveSliderEffect128;
    }
    else 
    {
      buttonEffect18.innerHTML='NONE';
      effect18.amp(0); 
      sliderEffect18.value=saveSliderEffect128;
    }
  }
  if ((saveInnerEffect228 != selectEffect28.value)||(saveSliderEffect228!=sliderEffect28.value))//second effect
  {
    if (saveInnerEffect228 == 'Reverb')
    {
      selectEffect28.value='Reverb';
      effect28 = new p5.Reverb();
      effect28.process(channel8);
      effect28.drywet(saveSliderEffect228/100);
      effect28.amp(2.5);
      sliderEffect28.value=saveSliderEffect228;
    }
    else if (saveInnerEffect228 == 'Delay')
    {
      selectEffect28.value='Delay';
      effect28 = new p5.Delay();
      effect28.process(channel8);
      effect28.drywet(saveSliderEffect228/100);
      effect28.amp(2.5);      
    }
    else if (saveInnerEffect228 == 'Ping Pong')
    {
      selectEffect28.value='Ping Pong';
      effect28 = new p5.Delay;
      effect28.process(channel8);
      effect28.drywet(saveSliderEffect228/100);
      effect28.amp(2.5); 
      sliderEffect18.value=saveSliderEffect228;
    }
    else 
    {
      selectEffect28.value='NONE';
      effect28.amp(0); 
      sliderEffect28.value=saveSliderEffect228;
    }
  }
  if ((saveInnerEffect328 != selectEffect38.value)||(saveSliderEffect328!=sliderEffect38.value))//third effect
  {
    if (saveInnerEffect328 == 'Reverb')
    {
      selectEffect38.value='Reverb';
      effect38 = new p5.Reverb();
      effect38.process(channel7);
      effect38.drywet(saveSliderEffect328/100);
      effect38.amp(2.5);
      sliderEffect38.value=saveSliderEffect328;
    }
    else if (saveInnerEffect328 == 'Delay')
    {
      selectEffect38.value='Delay';
      effect38= new p5.Delay();
      effect38.process(channel8);
      effect38.drywet(saveSliderEffect328/100);
      effect38.amp(2.5);      
    }
    else if (saveInnerEffect328 == 'Ping Pong')
    {
      selectEffect38.value='Ping Pong';
      effect38= new p5.Delay;
      effect38.process(channel8);
      effect38.drywet(saveSliderEffect328/100);
      effect38.amp(2.5); 
      sliderEffect38.value=saveSliderEffect328;
    }
    else 
    {
      selectEffect38.value='NONE';
      effect38.amp(0); 
      sliderEffect38.value=saveSliderEffect328;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass28 != ONOFFLowPass8.innerHTML)||(saveSliderLowPass28 != sliderLowPass8.value))//LowPass
  {
    if (saveInnerLowPass28=='OFF')
    {
      myFilter8.freq(22050);
      sliderLowPass8.value=saveSliderLowPass28;
      ONOFFLowPass8.innerHTML='OFF';
    }
    else
    {
      var filterFreq8 = map ((saveSliderLowPass28), 0, 1000, 10, 22050);
      myFilter8.freq(filterFreq8);
      myFilter8.res(28);
      sliderLowPass8.value=saveSliderLowPass28;
      ONOFFLowPass8.innerHTML='ON';
    }
  }
  if ((saveInnerEQ28 != ONOFFEQ8.innerHTML)||(saveSilderEQL28!=sliderEqLow8.value)||(saveSliderEQM28!=sliderEqMid8.value)||(saveSliderEQH28!=sliderEqHight8.value))//EQ
  {
    if(saveInnerEQ28=='ON')
    {
      var EQintLow = Math.floor(saveSilderEQL28);
      var EQintMid = Math.floor(saveSilderEQM28);
      var EQintHight = Math.floor(saveSilderEQH28);
      eq8.bands[0].gain(EQintLow);
      eq8.bands[1].gain(EQintMid);
      eq8.bands[2].gain(EQintHight);
      sliderEqLow8.value=saveSliderEQL28;
      sliderEqMid8.value=saveSliderEQM28;
      sliderEqHight8value=saveSliderEQ28;
      ONOFFEQ8.innerHTML='ON';
    }
    else
    {
      ONOFFEQ8.innerHTML='OFF';
      eq8.bands[0].gain(0);
      eq8.bands[1].gain(0);
      eq8.bands[2].gain(0);   
      sliderEqLow8.value = saveSilderEQL28;
      sliderEqMid8.value = saveSliderEQM28;
      sliderEqHight8.value = saveSliderEQH28;
    }
  }
  if ((saveInnerCompressor28!=ONOFFCompressor8.innerHTML)||(saveSliderCompressor28!=sliderCompressor8.value))//Compressor
  {
    if(saveInnerCompressor28=='ON')
    {
      compressor8.connect();
      compressor8.process(channel8);
      var knee = map ((saveSliderCompressor28), 0, 1000, 0, 40);
      compressor8.knee(knee);
      ONOFFCompressor8.innerHTML= 'ON';
      sliderCompressor8.value= saveSliderCompressor28;
    }
    else
    {
      ONOFFCompressor8.innerHTML = ('OFF');
      compressor8.disconnect();
      sliderCompressor8.value= saveSliderCompressor28;
    }
  }
  if (saveSliderRate28 != (sliderRate8.value))
  {
    sliderRate8.value = saveSliderRate28;
    channel8.rate(sliderRate8.value/100);
  }
  if (saveSliderPan28!= sliderPan8.value)
  {
    sliderPan8.value = saveSliderPan28;
    channel8.pan(sliderPan8.value/100);
  }
  if (saveSliderVolume28 != sliderVolume8.value)
  {
    sliderVolume8.value = saveSliderVolume28;
    channel8.setVolume(sliderVolume8.value/100);
  } 
}
/***RECALL SETTING SAVE3***/
function saveSetting31Click1 ()
{
  /******We choose the music******/
  if (saveSelecteur31 != selecteur1)
  {
    if (saveSelecteur31==1)
    {
      channel1.disconnect(); 
      channel1 = loadSound("audio/11.mp3");
    }
    else if (saveSelecteur31==2)
    {
      channel1.disconnect(); 
      channel1 = loadSound("audio/21.mp3");
    }
    else
    {
      channel1.disconnect(); 
      channel1 = loadSound("audio/31.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect131 != selectEffect11.value)||(saveSliderEffect131!=sliderEffect11.value))//first effect
  {
    if (saveInnerEffect131 == 'Reverb')
    {
      selectEffect11.value='Reverb';
      effect11 = new p5.Reverb();effect11.process(channel1, 6, 0.2);
      effect11.drywet(saveSliderEffect131/100);
      effect11.amp(2.5);
      sliderEffect11.value=saveSliderEffect131;
    }
    else if (saveInnerEffect131 == 'Delay')
    {
      selectEffect11.value='Delay';
      effect11 = new p5.Delay();
      effect11.process(channel1);
      effect11.drywet(saveSliderEffect131/100);
      effect11.amp(2.5);      
    }
    else if (saveInnerEffect131 == 'Ping Pong')
    {
      selectEffect11.value='Ping Pong';
      effect11 = new p5.Delay;
      effect11.process(channel1);
      effect11.drywet(saveSliderEffect131/100);
      effect11.amp(2.5); 
      sliderEffect11.value=saveSliderEffect131;
    }
    else 
    {
      selectEffect11.value='NONE';
      effect11.amp(0); 
      sliderEffect11.value=saveSliderEffect131;
    }
  }
  if ((saveInnerEffect231 != selectEffect21.value)||(saveSliderEffect231!=sliderEffect21.value))//second effect
  {
    if (saveInnerEffect231 == 'Reverb')
    {
      selectEffect21.value='Reverb';
      effect21 = new p5.Reverb();
      effect21.process(channel1);
      effect21.drywet(saveSliderEffect231/100);
      effect21.amp(2.5);
      sliderEffect21.value=saveSliderEffect231;
    }
    else if (saveInnerEffect231 == 'Delay')
    {
      selectEffect21.value='Delay';
      effect21 = new p5.Delay();
      effect21.process(channel1);
      effect21.drywet(saveSliderEffect231/100);
      effect21.amp(2.5);      
    }
    else if (saveInnerEffect231 == 'Ping Pong')
    {
      selectEffect21.value='Ping Pong';
      effect21 = new p5.Delay;
      effect21.process(channel1);
      effect21.drywet(saveSliderEffect231/100);
      effect21.amp(2.5); 
      sliderEffect21.value=saveSliderEffect231;
    }
    else 
    {
      selectEffect21.value='NONE';
      effect21.amp(0); 
      sliderEffect21.value=saveSliderEffect231;
    }
  }
  if ((saveInnerEffect331 != selectEffect31.value)||(saveSliderEffect331!=sliderEffect31.value))//third effect
  {
    if (saveInnerEffect331 == 'Reverb')
    {
      selectEffect31.value='Reverb';
      effect31 = new p5.Reverb();
      effect31.process(channel1);
      effect31.drywet(saveSliderEffect331/100);
      effect31.amp(2.5);
      sliderEffect31.value=saveSliderEffect331;
    }
    else if (saveInnerEffect331 == 'Delay')
    {
      selectEffect31.value='Delay';
      effect31 = new p5.Delay();
      effect31.process(channel1);
      effect31.drywet(saveSliderEffect331/100);
      effect31.amp(2.5);      
    }
    else if (saveInnerEffect331 == 'Ping Pong')
    {
      selectEffect31.value='Ping Pong';
      effect31 = new p5.Delay;
      effect31.process(channel1);
      effect31.drywet(saveSliderEffect331/100);
      effect31.amp(2.5); 
      sliderEffect31.value=saveSliderEffect331;
    }
    else 
    {
      selectEffect31.value='NONE';
      effect31.amp(0); 
      sliderEffect31.value=saveSliderEffect331;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass31 != ONOFFLowPass1.innerHTML)||(saveSliderLowPass31 != sliderLowPass1.value))//LowPass
  {
    if (saveInnerLowPass31=='OFF')
    {
      myFilter1.freq(22050);
      sliderLowPass1.value=saveSliderLowPass31;
      ONOFFLowPass1.innerHTML='OFF';
    }
    else
    {
      var filterFreq1 = map ((saveSliderLowPass31), 0, 1000, 10, 22050);
      myFilter1.freq(filterFreq1);
      myFilter1.res(28);
      sliderLowPass1.value=saveSliderLowPass31;
      ONOFFLowPass1.innerHTML='ON';
    }
  }
  if ((saveInnerEQ31 != ONOFFEQ1.innerHTML)||(saveSilderEQL31!=sliderEqLow1.value)||(saveSliderEQM31!=sliderEqMid1.value)||(saveSliderEQH31!=sliderEqHight1.value))//EQ
  {
    if(saveInnerEQ31=='ON')
    {
      var EQintLow = Math.floor(saveSilderEQL31);
      var EQintMid = Math.floor(saveSliderEQM31);
      var EQintHight = Math.floor(saveSilderEQH31);
      eq1.bands[0].gain(EQintLow);
      eq1.bands[1].gain(EQintMid);
      eq1.bands[2].gain(EQintHight);
      sliderEqLow1.value=saveSilderEQL31;
      sliderEqMid1.value=saveSliderEQM31;
      sliderEqHight1.value=saveSliderEQH31;
      ONOFFEQ1.innerHTML='ON';
    }
    else
    {
      ONOFFEQ1.innerHTML='OFF';
      eq1.bands[0].gain(0);
      eq1.bands[1].gain(0);
      eq1.bands[2].gain(0);   
      sliderEqLow1.value = saveSilderEQL31;
      sliderEqMid1.value = saveSliderEQM31;
      sliderEqHight1.value = saveSliderEQH31;
    }
  }
  if ((saveInnerCompressor31!=ONOFFCompressor1.innerHTML)||(saveSliderCompressor31!=sliderCompressor1.value))//Compressor
  {
    if(saveInnerCompressor31=='ON')
    {
      compressor1.connect();
      compressor1.process(channel1);
      var knee = map ((saveSliderCompressor31), 0, 1000, 0, 40);
      compressor1.knee(knee);
      ONOFFCompressor1.innerHTML= 'ON';
      sliderCompressor1.value= saveSliderCompressor31;
    }
    else
    {
      ONOFFCompressor1.innerHTML = ('OFF');
      compressor1.disconnect();
      sliderCompressor1.value= saveSliderCompressor31;
    }
  }
  if (saveSliderRate31 != (sliderRate1.value))
  {
    sliderRate1.value = saveSliderRate31;
    channel1.rate(sliderRate1.value/100);
  }
  if (saveSliderPan31!= sliderPan1.value)
  {
    sliderPan1.value = saveSliderPan31;
    channel1.pan(sliderPan1.value/100);
  }
  if (saveSliderVolume31 != sliderVolume1.value)
  {
    sliderVolume1.value = saveSliderVolume31
    channel1.setVolume(sliderVolume1.value/100);
  }
}
function saveSetting31Click2 ()                                //CHANNEL 2
{
  /******We choose the music******/
  if (saveSelecteur32 != selecteur2)
  {
    if (saveSelecteur32==1)
    {
      channel2.disconnect(); 
      channel2 = loadSound("audio/12.mp3");
    }
    else if (saveSelecteur32==2)
    {
      channel2.disconnect(); 
      channel2 = loadSound("audio/22.mp3");
    }
    else
    {
      channel2.disconnect(); 
      channel2 = loadSound("audio/32.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect132 != selectEffect12.value)||(saveSliderEffect132!=sliderEffect12.value))//first effect
  {
    if (saveInnerEffect132 == 'Reverb')
    {
      selectEffect12.value='Reverb';
      effect12 = new p5.Reverb();
      effect12.process(channel2);
      effect12.drywet(saveSliderEffect132/100);
      effect12.amp(2.5);
      sliderEffect12.value=saveSliderEffect132;
    }
    else if (saveInnerEffect132 == 'Delay')
    {
      selectEffect12.value='Delay';
      effect12 = new p5.Delay();
      effect12.process(channel2);
      effect12.drywet(saveSliderEffect132/100);
      effect12.amp(2.5);      
    }
    else if (saveInnerEffect132 == 'Ping Pong')
    {
      selectEffect12.value='Ping Pong';
      effect12 = new p5.Delay;
      effect12.process(channel2);
      effect12.drywet(saveSliderEffect132/100);
      effect12.amp(2.5); 
      sliderEffect12.value=saveSliderEffect132;
    }
    else 
    {
      selectEffect12.value='NONE';
      effect12.amp(0); 
      sliderEffect12.value=saveSliderEffect132;
    }
  }
  if ((saveInnerEffect232 != selectEffect22.value)||(saveSliderEffect232!=sliderEffect22.value))//second effect
  {
    if (saveInnerEffect232 == 'Reverb')
    {
      selectEffect22.value='Reverb';
      effect22 = new p5.Reverb();
      effect22.process(channel2);
      effect22.drywet(saveSliderEffect232/100);
      effect22.amp(2.5);
      sliderEffect22.value=saveSliderEffect232;
    }
    else if (saveInnerEffect232 == 'Delay')
    {
      selectEffect22.value='Delay';
      effect22 = new p5.Delay();
      effect22.process(channel2);
      effect22.drywet(saveSliderEffect232/100);
      effect22.amp(2.5);      
    }
    else if (saveInnerEffect232 == 'Ping Pong')
    {
      selectEffect22.value='Ping Pong';
      effect22 = new p5.Delay;
      effect22.process(channel2);
      effect22.drywet(saveSliderEffect232/100);
      effect22.amp(2.5); 
      sliderEffect12.value=saveSliderEffect232;
    }
    else 
    {
      selectEffect22.value='NONE';
      effect22.amp(0); 
      sliderEffect22.value=saveSliderEffect232;
    }
  }
  if ((saveInnerEffect332 != selectEffect32.value)||(saveSliderEffect332!=sliderEffect32.value))//third effect
  {
    if (saveInnerEffect332 == 'Reverb')
    {
      selectEffect32.value='Reverb';
      effect32 = new p5.Reverb();
      effect32.process(channel2);
      effect32.drywet(saveSliderEffect332/100);
      effect32.amp(2.5);
      sliderEffect32.value=saveSliderEffect332;
    }
    else if (saveInnerEffect332 == 'Delay')
    {
      selectEffect32.value='Delay';
      effect32 = new p5.Delay();
      effect32.process(channel2);
      effect32.drywet(saveSliderEffect332/100);
      effect32.amp(2.5);      
    }
    else if (saveInnerEffect332 == 'Ping Pong')
    {
      selectEffect32.value='Ping Pong';
      effect32 = new p5.Delay;
      effect32.process(channel2);
      effect32.drywet(saveSliderEffect332/100);
      effect32.amp(2.5); 
      sliderEffect32.value=saveSliderEffect332;
    }
    else 
    {
      selectEffect32.value='NONE';
      effect32.amp(0); 
      sliderEffect32.value=saveSliderEffect332;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass32 != ONOFFLowPass2.innerHTML)||(saveSliderLowPass32 != sliderLowPass2.value))//LowPass
  {
    if (saveInnerLowPass32=='OFF')
    {
      myFilter2.freq(22050);
      sliderLowPass2.value=saveSliderLowPass32;
      ONOFFLowPass2.innerHTML='OFF';
    }
    else
    {
      var filterFreq2 = map ((saveSliderLowPass32), 0, 1000, 10, 22050);
      myFilter2.freq(filterFreq2);
      myFilter2.res(28);
      sliderLowPass2.value=saveSliderLowPass32;
      ONOFFLowPass2.innerHTML='ON';
    }
  }
  if ((saveInnerEQ32 != ONOFFEQ2.innerHTML)||(saveSilderEQL32!=sliderEqLow2.value)||(saveSliderEQM32!=sliderEqMid2.value)||(saveSliderEQH32!=sliderEqHight2.value))//EQ
  {
    if(saveInnerEQ32=='ON')
    {
      var EQintLow = Math.floor(saveSilderEQL32);
      var EQintMid = Math.floor(saveSliderEQM32);
      var EQintHight = Math.floor(saveSilderEQH32);
      eq2.bands[0].gain(EQintLow);
      eq2.bands[1].gain(EQintMid);
      eq2.bands[2].gain(EQintHight);
      sliderEqLow2.value=saveSilderEQL32;
      sliderEqMid2.value=saveSliderEQM32;
      sliderEqHight2.value=saveSliderEQH32;
      ONOFFEQ2.innerHTML='ON';
    }
    else
    {
      ONOFFEQ2.innerHTML='OFF';
      eq2.bands[0].gain(0);
      eq2.bands[1].gain(0);
      eq2.bands[2].gain(0);   
      sliderEqLow2.value = saveSilderEQL32;
      sliderEqMid2.value = saveSliderEQM32;
      sliderEqHight2.value = saveSliderEQH32;
    }
  }
  if ((saveInnerCompressor32!=ONOFFCompressor2.innerHTML)||(saveSliderCompressor32!=sliderCompressor2.value))//Compressor
  {
    if(saveInnerCompressor32=='ON')
    {
      compressor2.connect();
      compressor2.process(channel2);
      var knee = map ((saveSliderCompressor32), 0, 1000, 0, 40);
      compressor2.knee(knee);
      ONOFFCompressor2.innerHTML= 'ON';
      sliderCompressor2.value= saveSliderCompressor32;
    }
    else
    {
      ONOFFCompressor2.innerHTML = ('OFF');
      compressor2.disconnect();
      sliderCompressor2.value= saveSliderCompressor32;
    }
  }
  if (saveSliderRate32 != (sliderRate2.value))
  {
    sliderRate2.value = saveSliderRate32;
    channel2.rate(sliderRate2.value/100);
  }
  if (saveSliderPan32!= sliderPan2.value)
  {
    sliderPan2.value = saveSliderPan32;
    channel2.pan(sliderPan2.value/100);
  }
  if (saveSliderVolume32 != sliderVolume2.value)
  {
    sliderVolume2.value = saveSliderVolume32;
    channel2.setVolume(sliderVolume2.value/100);
  }
}
function saveSetting31Click3 ()                                //CHANNEL 3
{
  /******We choose the music******/
  if (saveSelecteur33 != selecteur3)
  {
    if (saveSelecteur33==1)
    {
      channel3.disconnect(); 
      channel3 = loadSound("audio/13.mp3");
    }
    else if (saveSelecteur33==2)
    {
      channel3.disconnect(); 
      channel3 = loadSound("audio/23.mp3");
    }
    else
    {
      channel3.disconnect(); 
      channel3 = loadSound("audio/33.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect133 != selectEffect13.value)||(saveSliderEffect133!=sliderEffect13.value))//first effect
  {
    if (saveInnerEffect133 == 'Reverb')
    {
      selectEffect13.value='Reverb';
      effect13 = new p5.Reverb();
      effect13.process(channel3);
      effect13.drywet(saveSliderEffect133/100);
      effect13.amp(2.5);
      sliderEffect13.value=saveSliderEffect133;
    }
    else if (saveInnerEffect133 == 'Delay')
    {
      selectEffect13.value='Delay';
      effect13 = new p5.Delay();
      effect13.process(channel3);
      effect13.drywet(saveSliderEffect133/100);
      effect13.amp(2.5);      
    }
    else if (saveInnerEffect133 == 'Ping Pong')
    {
      selectEffect13.value='Ping Pong';
      effect13 = new p5.Delay;
      effect13.process(channel3);
      effect13.drywet(saveSliderEffect133/100);
      effect13.amp(2.5); 
      sliderEffect13.value=saveSliderEffect133;
    }
    else 
    {
      selectEffect13.value='NONE';
      effect13.amp(0); 
      sliderEffect13.value=saveSliderEffect133;
    }
  }
  if ((saveInnerEffect233 != selectEffect23.value)||(saveSliderEffect233!=sliderEffect23.value))//second effect
  {
    if (saveInnerEffect233 == 'Reverb')
    {
      selectEffect23.value='Reverb';
      effect23 = new p5.Reverb();
      effect23.process(channel3);
      effect23.drywet(saveSliderEffect233/100);
      effect23.amp(2.5);
      sliderEffect23.value=saveSliderEffect233;
    }
    else if (saveInnerEffect233 == 'Delay')
    {
      selectEffect23.value='Delay';
      effect23 = new p5.Delay();
      effect23.process(channel3);
      effect23.drywet(saveSliderEffect233/100);
      effect23.amp(2.5);      
    }
    else if (saveInnerEffect233 == 'Ping Pong')
    {
      selectEffect23.value='Ping Pong';
      effect23 = new p5.Delay;
      effect23.process(channel3);
      effect23.drywet(saveSliderEffect233/100);
      effect23.amp(2.5); 
      sliderEffect23.value=saveSliderEffect233;
    }
    else 
    {
      selectEffect23.value='NONE';
      effect23.amp(0); 
      sliderEffect23.value=saveSliderEffect233;
    }
  }
  if ((saveInnerEffect333 != selectEffect33.value)||(saveSliderEffect333!=sliderEffect33.value))//third effect
  {
    if (saveInnerEffect333 == 'Reverb')
    {
      selectEffect33.value='Reverb';
      effect33 = new p5.Reverb();
      effect33.process(channel3);
      effect33.drywet(saveSliderEffect333/100);
      effect33.amp(2.5);
      sliderEffect33.value=saveSliderEffect333;
  }
    else if (saveInnerEffect333 == 'Delay')
    {
      selectEffect33.value='Delay';
      effect33 = new p5.Delay();
      effect33.process(channel3);
      effect33.drywet(saveSliderEffect333/100);
      effect33.amp(2.5);      
    }
    else if (saveInnerEffect333 == 'Ping Pong')
    {
      selectEffect33.value='Ping Pong';
      effect33 = new p5.Delay;
      effect33.process(channel3);
      effect33.drywet(saveSliderEffect333/100);
      effect33.amp(2.5); 
      sliderEffect33.value=saveSliderEffect333;
    }
    else 
    {
      selectEffect33.value='NONE';
      effect33.amp(0); 
      sliderEffect33.value=saveSliderEffect333;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass33 != ONOFFLowPass3.innerHTML)||(saveSliderLowPass33 != sliderLowPass3.value))//LowPass
  {
    if (saveInnerLowPass33=='OFF')
    {
      myFilter3.freq(22050);
      sliderLowPass3.value=saveSliderLowPass33;
      ONOFFLowPass3.innerHTML='OFF';
    }
    else
    {
      var filterFreq3 = map ((saveSliderLowPass33), 0, 1000, 10, 22050);
      myFilter3.freq(filterFreq3);
      myFilter3.res(28);
      sliderLowPass3.value=saveSliderLowPass33;
      ONOFFLowPass3.innerHTML='ON';
    }
  }
  if ((saveInnerEQ33 != ONOFFEQ3.innerHTML)||(saveSilderEQL33!=sliderEqLow3.value)||(saveSliderEQM33!=sliderEqMid3.value)||(saveSliderEQH33!=sliderEqHight3.value))//EQ
  {
    if(saveInnerEQ33=='ON')
    {
      var EQintLow = Math.floor(saveSilderEQL33);
      var EQintMid = Math.floor(saveSliderEQM33);
      var EQintHight = Math.floor(saveSilderEQH33);
      eq3.bands[0].gain(EQintLow);
      eq3.bands[1].gain(EQintMid);
      eq3.bands[2].gain(EQintHight);
      sliderEqLow3.value=saveSilderEQL33;
      sliderEqMid3.value=saveSliderEQM33;
      sliderEqHight3.value=saveSliderEQH33;
      ONOFFEQ3.innerHTML='ON';
    }
    else
    {
      ONOFFEQ3.innerHTML='OFF';
      eq3.bands[0].gain(0);
      eq3.bands[1].gain(0);
      eq3.bands[2].gain(0);   
      sliderEqLow3.value = saveSilderEQL33;
      sliderEqMid3.value = saveSliderEQM33;
      sliderEqHight3.value = saveSliderEQH33;
    }
  }
  if ((saveInnerCompressor33!=ONOFFCompressor3.innerHTML)||(saveSliderCompressor33!=sliderCompressor3.value))//Compressor
  {
    if(saveInnerCompressor33=='ON')
    {
      compressor3.connect();
      compressor3.process(channel3);
      var knee = map ((saveSliderCompressor33), 0, 1000, 0, 40);
      compressor3.knee(knee);
      ONOFFCompressor3.innerHTML= 'ON';
      sliderCompressor3.value= saveSliderCompressor33;
    }
    else
    {
      ONOFFCompressor3.innerHTML = ('OFF');
      compressor3.disconnect();
      sliderCompressor3.value= saveSliderCompressor33;
    }
  }
  if (saveSliderRate33 != (sliderRate3.value))
  {
    sliderRate3.value = saveSliderRate33;
    channel3.rate(sliderRate3.value/100);
  }
  if (saveSliderPan33!= sliderPan3.value)
  {
    sliderPan3.value = saveSliderPan33;
    channel3.pan(sliderPan3.value/100);
  }
  if (saveSliderVolume33 != sliderVolume3.value)
  {
    sliderVolume3.value = saveSliderVolume33;
    channel3.setVolume(sliderVolume3.value/100);
  }
}
function saveSetting31Click4 ()                                //CHANNEL 4
{
  /******We choose the music******/
  if (saveSelecteur34 != selecteur4)
  {
    if (saveSelecteur34==1)
    {
      channel4.disconnect(); 
      channel4 = loadSound("audio/14.mp3");
    }
    else if (saveSelecteur34==2)
    {
      channel4disconnect(); 
      channel4 = loadSound("audio/24.mp3");
    }
    else
    {
      channel4.disconnect(); 
      channel4 = loadSound("audio/34.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect134 != selectEffect14.value)||(saveSliderEffect134!=sliderEffect14.value))//first effect
  {
    if (saveInnerEffect134 == 'Reverb')
    {
      selectEffect14.value='Reverb';
      effect14 = new p5.Reverb();
      effect14.process(channel4);
      effect14.drywet(saveSliderEffect134/100);
      effect14.amp(2.5);
      sliderEffect14.value=saveSliderEffect134;
    }
    else if (saveInnerEffect134 == 'Delay')
    {
      selectEffect14.value='Delay';
      effect14 = new p5.Delay();
      effect14.process(channel4);
      effect14.drywet(saveSliderEffect134/100);
      effect14.amp(2.5);      
    }
    else if (saveInnerEffect134 == 'Ping Pong')
    {
      selectEffect14.value='Ping Pong';
      effect14 = new p5.Delay;
      effect14.process(channel4);
      effect14.drywet(saveSliderEffect134/100);
      effect14.amp(2.5); 
      sliderEffect14.value=saveSliderEffect134;
    }
    else 
    {
      selectEffect14.value='NONE';
      effect14.amp(0); 
      sliderEffect14.value=saveSliderEffect134;
    }
  }
  if ((saveInnerEffect234 != selectEffect24.value)||(saveSliderEffect234!=sliderEffect24.value))//second effect
  {
    if (saveInnerEffect234 == 'Reverb')
    {
      selectEffect24.value='Reverb';
      effect24 = new p5.Reverb();
      effect24.process(channel4);
      effect24.drywet(saveSliderEffect234/100);
      effect24.amp(2.5);
      sliderEffect24.value=saveSliderEffect234;
    }
    else if (saveInnerEffect234 == 'Delay')
    {
      selectEffect24.value='Delay';
      effect24 = new p5.Delay();
      effect24.process(channel4);
      effect24.drywet(saveSliderEffect234/100);
      effect24.amp(2.5);      
    }
    else if (saveInnerEffect234 == 'Ping Pong')
    {
      selectEffect23.value='Ping Pong';
      effect24 = new p5.Delay;
      effect24.process(channel4);
      effect24.drywet(saveSliderEffect234/100);
      effect24.amp(2.5); 
      sliderEffect24.value=saveSliderEffect234;
    }
    else 
    {
      selectEffect24.value='NONE';
      effect24.amp(0); 
      sliderEffect24.value=saveSliderEffect234;
    }
  }
  if ((saveInnerEffect334 != selectEffect34.value)||(saveSliderEffect334!=sliderEffect34.value))//third effect
  {
    if (saveInnerEffect334 == 'Reverb')
    {
      selectEffect34.value='Reverb';
      effect34 = new p5.Reverb();
      effect34.process(channel4);
      effect34.drywet(saveSliderEffect334/100);
      effect34.amp(2.5);
      sliderEffect34.value=saveSliderEffect334;
  }
    else if (saveInnerEffect334 == 'Delay')
    {
      selectEffect34.value='Delay';
      effect34 = new p5.Delay();
      effect34.process(channel4);
      effect34.drywet(saveSliderEffect334/100);
      effect34.amp(2.5);      
    }
    else if (saveInnerEffect334 == 'Ping Pong')
    {
      selectEffect34.value='Ping Pong';
      effect34 = new p5.Delay;
      effect34.process(channel4);
      effect34.drywet(saveSliderEffect334/100);
      effect34.amp(2.5); 
      sliderEffect34.value=saveSliderEffect334;
    }
    else 
    {
      selectEffect34.value='NONE';
      effect34.amp(0); 
      sliderEffect34.value=saveSliderEffect334;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass34 != ONOFFLowPass4.innerHTML)||(saveSliderLowPass34 != sliderLowPass4.value))//LowPass
  {
    if (saveInnerLowPass34=='OFF')
    {
      myFilter4.freq(22050);
      sliderLowPass4.value=saveSliderLowPass34;
      ONOFFLowPass4.innerHTML='OFF';
    }
    else
    {
      var filterFreq4 = map ((saveSliderLowPass34), 0, 1000, 10, 22050);
      myFilter4.freq(filterFreq4);
      myFilter4.res(28);
      sliderLowPass4.value=saveSliderLowPass34;
      ONOFFLowPass4.innerHTML='ON';
    }
  }
  if ((saveInnerEQ34 != ONOFFEQ4.innerHTML)||(saveSilderEQL34!=sliderEqLow4.value)||(saveSliderEQM34!=sliderEqMid4.value)||(saveSliderEQH34!=sliderEqHight4.value))//EQ
  {
    if(saveInnerEQ34=='ON')
    {
      var EQintLow = Math.floor(saveSilderEQL34);
      var EQintMid = Math.floor(saveSliderEQM34);
      var EQintHight = Math.floor(saveSilderEQH34);
      eq4.bands[0].gain(EQintLow);
      eq4.bands[1].gain(EQintMid);
      eq4.bands[2].gain(EQintHight);
      sliderEqLow4.value=saveSilderEQL34;
      sliderEqMid4.value=saveSliderEQM34;
      sliderEqHight4.value=saveSliderEQH34;
      ONOFFEQ4.innerHTML='ON';
    }
    else
    {
      ONOFFEQ4.innerHTML='OFF';
      eq4.bands[0].gain(0);
      eq4.bands[1].gain(0);
      eq4.bands[2].gain(0);   
      sliderEqLow4.value = saveSilderEQL34;
      sliderEqMid4.value = saveSliderEQM34;
      sliderEqHight4.value = saveSliderEQH34;
    }
  }
  if ((saveInnerCompressor34!=ONOFFCompressor4.innerHTML)||(saveSliderCompressor34!=sliderCompressor4.value))//Compressor
  {
    if(saveInnerCompressor34=='ON')
    {
      compressor4.connect();
      compressor4.process(channel4);
      var knee = map ((saveSliderCompressor34), 0, 1000, 0, 40);
      compressor4.knee(knee);
      ONOFFCompressor4.innerHTML= 'ON';
      sliderCompressor4.value= saveSliderCompressor34;
    }
    else
    {
      ONOFFCompressor4.innerHTML = ('OFF');
      compressor4.disconnect();
      sliderCompressor4.value= saveSliderCompressor34;
    }
  }
  if (saveSliderRate34 != (sliderRate4.value))
  {
    sliderRate4.value = saveSliderRate34;
    channel4.rate(sliderRate4.value/100);
  }
  if (saveSliderPan34!= sliderPan4.value)
  {
    sliderPan4.value = saveSliderPan34;
    channel4.pan(sliderPan4.value/100);
  }
  if (saveSliderVolume34 != sliderVolume4.value)
  {
    sliderVolume4.value = saveSliderVolume34;
    channel4.setVolume(sliderVolume4.value/100);
  }
}
function saveSetting31Click5 ()                                //CHANNEL 5
{
  /******We choose the music******/
  if (saveSelecteur35 != selecteur5)
  {
    if (saveSelecteur35==1)
    {
      channel5.disconnect(); 
      channel5 = loadSound("audio/15.mp3");
    }
    else if (saveSelecteur35==2)
    {
      channel5.disconnect(); 
      channel5 = loadSound("audio/25.mp3");
    }
    else
    {
      channel5.disconnect(); 
      channel5 = loadSound("audio/35.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect135 != selectEffect15.value)||(saveSliderEffect135!=sliderEffect15.value))//first effect
  {
    if (saveInnerEffect135 == 'Reverb')
    {
      selectEffect15.value='Reverb';
      effect15 = new p5.Reverb();
      effect15.process(channel5);
      effect15.drywet(saveSliderEffect135/100);
      effect15.amp(2.5);
      sliderEffect15.value=saveSliderEffect135;
    }
    else if (saveInnerEffect135 == 'Delay')
    {
      selectEffect15.value='Delay';
      effect15 = new p5.Delay();
      effect15.process(channel5);
      effect15.drywet(saveSliderEffect135/100);
      effect15.amp(2.5);      
    }
    else if (saveInnerEffect135 == 'Ping Pong')
    {
      selectEffect15.value='Ping Pong';
      effect15 = new p5.Delay;
      effect15.process(channel5);
      effect15.drywet(saveSliderEffect135/100);
      effect15.amp(2.5); 
      sliderEffect15.value=saveSliderEffect135;
    }
    else 
    {
      selectEffect15.value='NONE';
      effect15.amp(0); 
      sliderEffect15.value=saveSliderEffect135;
    }
  }
  if ((saveInnerEffect235 != selectEffect25.value)||(saveSliderEffect235!=sliderEffect25.value))//second effect
  {
    if (saveInnerEffect235 == 'Reverb')
    {
      selectEffect25.value='Reverb';
      effect25 = new p5.Reverb();
      effect25.process(channel5);
      effect25.drywet(saveSliderEffect235/100);
      effect25.amp(2.5);
      sliderEffect25.value=saveSliderEffect235;
    }
    else if (saveInnerEffect235 == 'Delay')
    {
      selectEffect25.value='Delay';
      effect25 = new p5.Delay();
      effect25.process(channel5);
      effect25.drywet(saveSliderEffect235/100);
      effect25.amp(2.5);      
    }
    else if (saveInnerEffect235 == 'Ping Pong')
    {
      selectEffect25.value='Ping Pong';
      effect25 = new p5.Delay;
      effect25.process(channel5);
      effect25.drywet(saveSliderEffect235/100);
      effect25.amp(2.5); 
      sliderEffect25.value=saveSliderEffect235;
    }
    else 
    {
      selectEffect25.value='NONE';
      effect25.amp(0); 
      sliderEffect25.value=saveSliderEffect235;
    }
  }
  if ((saveInnerEffect335 != selectEffect35.value)||(saveSliderEffect335!=sliderEffect35.value))//third effect
  {
    if (saveInnerEffect335 == 'Reverb')
    {
      selectEffect35.value='Reverb';
      effect35 = new p5.Reverb();
      effect35.process(channel5);
      effect35.drywet(saveSliderEffect335/100);
      effect35.amp(2.5);
      sliderEffect35.value=saveSliderEffect335;
  }
    else if (saveInnerEffect335 == 'Delay')
    {
      selectEffect35.value='Delay';
      effect35 = new p5.Delay();
      effect35.process(channel5);
      effect35.drywet(saveSliderEffect335/100);
      effect35.amp(2.5);      
    }
    else if (saveInnerEffect335 == 'Ping Pong')
    {
      selectEffect35.value='Ping Pong';
      effect35 = new p5.Delay;
      effect35.process(channel5);
      effect35.drywet(saveSliderEffect335/100);
      effect35.amp(2.5); 
      sliderEffect35.value=saveSliderEffect335;
    }
    else 
    {
      selectEffect35.value='NONE';
      effect35.amp(0); 
      sliderEffect35.value=saveSliderEffect335;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass35 != ONOFFLowPass5.innerHTML)||(saveSliderLowPass35 != sliderLowPass5.value))//LowPass
  {
    if (saveInnerLowPass35=='OFF')
    {
      myFilter5.freq(22050);
      sliderLowPass5.value=saveSliderLowPass35;
      ONOFFLowPass5.innerHTML='OFF';
    }
    else
    {
      var filterFreq5 = map ((saveSliderLowPass35), 0, 1000, 10, 22050);
      myFilter5.freq(filterFreq5);
      myFilter5.res(28);
      sliderLowPass5.value=saveSliderLowPass35;
      ONOFFLowPass5.innerHTML='ON';
    }
  }
  if ((saveInnerEQ35 != ONOFFEQ5.innerHTML)||(saveSilderEQL35!=sliderEqLow5.value)||(saveSliderEQM35!=sliderEqMid5.value)||(saveSliderEQH35!=sliderEqHight5.value))//EQ
  {
    if(saveInnerEQ35=='ON')
    {
      var EQintLow = Math.floor(saveSilderEQL35);
      var EQintMid = Math.floor(saveSliderEQM35);
      var EQintHight = Math.floor(saveSilderEQH35);
      eq5.bands[0].gain(EQintLow);
      eq5.bands[1].gain(EQintMid);
      eq5.bands[2].gain(EQintHight);
      sliderEqLow5.value=saveSilderEQL35;
      sliderEqMid5.value=saveSliderEQM35;
      sliderEqHight5.value=saveSliderEQH35;
      ONOFFEQ5.innerHTML='ON';
    }
    else
    {
      ONOFFEQ5.innerHTML='OFF';
      eq5.bands[0].gain(0);
      eq5.bands[1].gain(0);
      eq5.bands[2].gain(0);   
      sliderEqLow5.value = saveSilderEQL35;
      sliderEqMid5.value = saveSliderEQM35;
      sliderEqHight5.value = saveSliderEQH35;
    }
  }
  if ((saveInnerCompressor35!=ONOFFCompressor5.innerHTML)||(saveSliderCompressor35!=sliderCompressor5.value))//Compressor
  {
    if(saveInnerCompressor35=='ON')
    {
      compressor5.connect();
      compressor5.process(channel5);
      var knee = map ((saveSliderCompressor35), 0, 1000, 0, 40);
      compressor5.knee(knee);
      ONOFFCompressor5.innerHTML= 'ON';
      sliderCompressor5.value= saveSliderCompressor35;
    }
    else
    {
      ONOFFCompressor5.innerHTML = ('OFF');
      compressor5.disconnect();
      sliderCompressor5.value= saveSliderCompressor35;
    }
  }
  if (saveSliderRate35 != (sliderRate5.value))
  {
    sliderRate5.value = saveSliderRate35;
    channel5.rate(sliderRate5.value/100);
  }
  if (saveSliderPan35!= sliderPan5.value)
  {
    sliderPan5.value = saveSliderPan35;
    channel5.pan(sliderPan5.value/100);
  }
  if (saveSliderVolume35 != sliderVolume5.value)
  {
    sliderVolume5.value = saveSliderVolume35;
    channel5.setVolume(sliderVolume5.value/100);
  }
}
function saveSetting31Click6 ()                                //CHANNEL 6
{
  /******We choose the music******/
  if (saveSelecteur36 != selecteur6)
  {
    if (saveSelecteur36==1)
    {
      channel6.disconnect(); 
      channel6 = loadSound("audio/16.mp3");
    }
    else if (saveSelecteur36==2)
    {
      channel6.disconnect(); 
      channel6 = loadSound("audio/26.mp3");
    }
    else
    {
      channel6.disconnect(); 
      channel6 = loadSound("audio/36.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect136 != selectEffect16.value)||(saveSliderEffect136!=sliderEffect16.value))//first effect
  {
    if (saveInnerEffect136 == 'Reverb')
    {
      selectEffect16.value='Reverb';
      effect16 = new p5.Reverb();
      effect16.process(channel6);
      effect16.drywet(saveSliderEffect136/100);
      effect16.amp(2.5);
      sliderEffect16.value=saveSliderEffect136;
    }
    else if (saveInnerEffect136 == 'Delay')
    {
      selectEffect16.value='Delay';
      effect16 = new p5.Delay();
      effect16.process(channel6);
      effect16.drywet(saveSliderEffect136/100);
      effect16.amp(2.5);      
    }
    else if (saveInnerEffect136 == 'Ping Pong')
    {
      selectEffect16.value='Ping Pong';
      effect16 = new p5.Delay;
      effect16.process(channel6);
      effect16.drywet(saveSliderEffect136/100);
      effect16.amp(2.5); 
      sliderEffect16.value=saveSliderEffect136;
    }
    else 
    {
      selectEffect16.value='NONE';
      effect16.amp(0); 
      sliderEffect16.value=saveSliderEffect136;
    }
  }
  if ((saveInnerEffect236 != selectEffect26.value)||(saveSliderEffect236!=sliderEffect26.value))//second effect
  {
    if (saveInnerEffect236 == 'Reverb')
    {
      selectEffect26.value='Reverb';
      effect26 = new p5.Reverb();
      effect26.process(channel6);
      effect26.drywet(saveSliderEffect236/100);
      effect26.amp(2.5);
      sliderEffect26.value=saveSliderEffect236;
    }
    else if (saveInnerEffect236 == 'Delay')
    {
      selectEffect26.value='Delay';
      effect26 = new p5.Delay();
      effect26.process(channel6);
      effect26.drywet(saveSliderEffect236/100);
      effect26.amp(2.5);      
    }
    else if (saveInnerEffect236 == 'Ping Pong')
    {
      selectEffect26.value='Ping Pong';
      effect26 = new p5.Delay;
      effect26.process(channel6);
      effect26.drywet(saveSliderEffect236/100);
      effect26.amp(2.5); 
      sliderEffect26.value=saveSliderEffect236;
    }
    else 
    {
      selectEffect26.value='NONE';
      effect26.amp(0); 
      sliderEffect26.value=saveSliderEffect236;
    }
  }
  if ((saveInnerEffect336 != selectEffect36.value)||(saveSliderEffect336!=sliderEffect36.value))//third effect
  {
    if (saveInnerEffect336 == 'Reverb')
    {
      selectEffect36.value='Reverb';
      effect36 = new p5.Reverb();
      effect36.process(channel6);
      effect36.drywet(saveSliderEffect336/100);
      effect36.amp(2.5);
      sliderEffect36.value=saveSliderEffect336;
  }
    else if (saveInnerEffect336 == 'Delay')
    {
      selectEffect36.value='Delay';
      effect36 = new p5.Delay();
      effect36.process(channel6);
      effect36.drywet(saveSliderEffect336/100);
      effect36.amp(2.5);      
    }
    else if (saveInnerEffect336 == 'Ping Pong')
    {
      selectEffect36.value='Ping Pong';
      effect36 = new p5.Delay;
      effect36.process(channel6);
      effect36.drywet(saveSliderEffect336/100);
      effect36.amp(2.5); 
      sliderEffect36.value=saveSliderEffect336;
    }
    else 
    {
      selectEffect36.value='NONE';
      effect36.amp(0); 
      sliderEffect36.value=saveSliderEffect336;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass36 != ONOFFLowPass6.innerHTML)||(saveSliderLowPass36 != sliderLowPass6.value))//LowPass
  {
    if (saveInnerLowPass36='OFF')
    {
      myFilter6.freq(22050);
      sliderLowPass6.value=saveSliderLowPass36;
      ONOFFLowPass6.innerHTML='OFF';
    }
    else
    {
      var filterFreq6 = map ((saveSliderLowPass36), 0, 1000, 10, 22050);
      myFilter6.freq(filterFreq6);
      myFilter6.res(28);
      sliderLowPass6.value=saveSliderLowPass36;
      ONOFFLowPass6.innerHTML='ON';
    }
  }
  if ((saveInnerEQ36 != ONOFFEQ6.innerHTML)||(saveSilderEQL36!=sliderEqLow6.value)||(saveSliderEQM36!=sliderEqMid6.value)||(saveSliderEQH36!=sliderEqHight6.value))//EQ
  {
    if(saveInnerEQ36=='ON')
    {
      var EQintLow = Math.floor(saveSilderEQL36);
      var EQintMid = Math.floor(saveSliderEQM36);
      var EQintHight = Math.floor(saveSilderEQH36);
      eq6.bands[0].gain(EQintLow);
      eq6.bands[1].gain(EQintMid);
      eq6.bands[2].gain(EQintHight);
      sliderEqLow6.value=saveSilderEQL36;
      sliderEqMid6.value=saveSliderEQM36;
      sliderEqHight6.value=saveSliderEQH36;
      ONOFFEQ6.innerHTML='ON';
    }
    else
    {
      ONOFFEQ6.innerHTML='OFF';
      eq6.bands[0].gain(0);
      eq6.bands[1].gain(0);
      eq6.bands[2].gain(0);   
      sliderEqLow6.value = saveSilderEQL36;
      sliderEqMid6.value = saveSliderEQM36;
      sliderEqHight6.value = saveSliderEQH36;
    }
  }
  if ((saveInnerCompressor36!=ONOFFCompressor6.innerHTML)||(saveSliderCompressor36!=sliderCompressor6.value))//Compressor
  {
    if(saveInnerCompressor36=='ON')
    {
      compressor6.connect();
      compressor6.process(channel6);
      var knee = map ((saveSliderCompressor36), 0, 1000, 0, 40);
      compressor6.knee(knee);
      ONOFFCompressor6.innerHTML= 'ON';
      sliderCompressor6.value= saveSliderCompressor36;
    }
    else
    {
      ONOFFCompressor6.innerHTML = ('OFF');
      compressor6.disconnect();
      sliderCompressor6.value= saveSliderCompressor36;
    }
  }
  if (saveSliderRate36 != (sliderRate6.value))
  {
    sliderRate6.value = saveSliderRate36;
    channel6.rate(sliderRate6.value/100);
  }
  if (saveSliderPan36!= sliderPan6.value)
  {
    sliderPan6.value = saveSliderPan36;
    channel6.pan(sliderPan6.value/100);
  }
  if (saveSliderVolume36 != sliderVolume6.value)
  {
    sliderVolume6.value = saveSliderVolume36;
    channel6.setVolume(sliderVolume6.value/100);
  }
}
function saveSetting31Click7 ()                                //CHANNEL 7
{
/******We choose the music******/
  if (saveSelecteur37 != selecteur7)
  {
    if (saveSelecteur37==1)
    {
      channel7.disconnect(); 
      channel7 = loadSound("audio/17.mp3");
    }
    else if (saveSelecteur37==2)
    {
      channel7.disconnect(); 
      channel7 = loadSound("audio/27.mp3");
    }
    else
    {
      channel7.disconnect(); 
      channel7 = loadSound("audio/37.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect137 != selectEffect17.value)||(saveSliderEffect137!=sliderEffect17.value))//first effect
  {
    if (saveInnerEffect137 == 'Reverb')
    {
      selectEffect17.value='Reverb';
      effect17 = new p5.Reverb();
      effect17.process(channel7);
      effect17.drywet(saveSliderEffect137/100);
      effect17.amp(2.5);
      sliderEffect17.value=saveSliderEffect137;
    }
    else if (saveInnerEffect137 == 'Delay')
    {
      selectEffect17.value='Delay';
      effect17 = new p5.Delay();
      effect17.process(channel7);
      effect17.drywet(saveSliderEffect137/100);
      effect17.amp(2.5);      
    }
    else if (saveInnerEffect137 == 'Ping Pong')
    {
      selectEffect17.value='Ping Pong';
      effect17 = new p5.Delay;
      effect17.process(channel7);
      effect17.drywet(saveSliderEffect137/100);
      effect17.amp(2.5); 
      sliderEffect17.value=saveSliderEffect137;
    }
    else 
    {
      selectEffect17.value='NONE';
      effect17.amp(0); 
      sliderEffect17.value=saveSliderEffect137;
    }
  }
  if ((saveInnerEffect237 != selectEffect27.value)||(saveSliderEffect237!=sliderEffect27.value))//second effect
  {
    if (saveInnerEffect237 == 'Reverb')
    {
      selectEffect27.value='Reverb';
      effect27 = new p5.Reverb();
      effect27.process(channel7);
      effect27.drywet(saveSliderEffect237/100);
      effect27.amp(2.5);
      sliderEffect27.value=saveSliderEffect237;
    }
    else if (saveInnerEffect237 == 'Delay')
    {
      selectEffect27.value='Delay';
      effect27 = new p5.Delay();
      effect27.process(channel7);
      effect27.drywet(saveSliderEffect237/100);
      effect27.amp(2.5);      
    }
    else if (saveInnerEffect237 == 'Ping Pong')
    {
      selectEffect27.value='Ping Pong';
      effect27 = new p5.Delay;
      effect27.process(channel7);
      effect27.drywet(saveSliderEffect237/100);
      effect27.amp(2.5); 
      sliderEffect27.value=saveSliderEffect237;
    }
    else 
    {
      selectEffect27.value='NONE';
      effect27.amp(0); 
      sliderEffect27.value=saveSliderEffect237;
    }
  }
  if ((saveInnerEffect337 != selectEffect37.value)||(saveSliderEffect337!=sliderEffect37.value))//third effect
  {
    if (saveInnerEffect337 == 'Reverb')
    {
      selectEffect37.value='Reverb';
      effect37 = new p5.Reverb();
      effect37.process(channel7);
      effect37.drywet(saveSliderEffect337/100);
      effect37.amp(2.5);
      sliderEffect37.value=saveSliderEffect337;
  }
    else if (saveInnerEffect337 == 'Delay')
    {
      selectEffect37.value='Delay';
      effect37 = new p5.Delay();
      effect37.process(channel7);
      effect37.drywet(saveSliderEffect337/100);
      effect37.amp(2.5);      
    }
    else if (saveInnerEffect337 == 'Ping Pong')
    {
      selectEffect37.value='Ping Pong';
      effect37 = new p5.Delay;
      effect37.process(channel7);
      effect37.drywet(saveSliderEffect337/100);
      effect37.amp(2.5); 
      sliderEffect37.value=saveSliderEffect337;
    }
    else 
    {
      selectEffect37.value='NONE';
      effect37.amp(0); 
      sliderEffect37.value=saveSliderEffect337;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass37 != ONOFFLowPass7.innerHTML)||(saveSliderLowPass37 != sliderLowPass7.value))//LowPass
  {
    if (saveInnerLowPass37='OFF')
    {
      myFilter7.freq(22050);
      sliderLowPass7.value=saveSliderLowPass37;
      ONOFFLowPass7.innerHTML='OFF';
    }
    else
    {
      var filterFreq7 = map ((saveSliderLowPass37), 0, 1000, 10, 22050);
      myFilter7.freq(filterFreq7);
      myFilter7.res(28);
      sliderLowPass7.value=saveSliderLowPass37;
      ONOFFLowPass7.innerHTML='ON';
    }
  }
  if ((saveInnerEQ37 != ONOFFEQ7.innerHTML)||(saveSilderEQL37!=sliderEqLow7.value)||(saveSliderEQM37!=sliderEqMid7.value)||(saveSliderEQH37!=sliderEqHight7.value))//EQ
  {
    if(saveInnerEQ37=='ON')
    {
      var EQintLow = Math.floor(saveSilderEQL37);
      var EQintMid = Math.floor(saveSliderEQM37);
      var EQintHight = Math.floor(saveSilderEQH37);
      eq7.bands[0].gain(EQintLow);
      eq7.bands[1].gain(EQintMid);
      eq7.bands[2].gain(EQintHight);
      sliderEqLow7.value=saveSilderEQL37;
      sliderEqMid7.value=saveSliderEQM37;
      sliderEqHight7.value=saveSliderEQH37;
      ONOFFEQ7.innerHTML='ON';
    }
    else
    {
      ONOFFEQ7.innerHTML='OFF';
      eq7.bands[0].gain(0);
      eq7.bands[1].gain(0);
      eq7.bands[2].gain(0);   
      sliderEqLow7.value = saveSilderEQL37;
      sliderEqMid7.value = saveSliderEQM37;
      sliderEqHight7.value = saveSliderEQH37;
    }
  }
  if ((saveInnerCompressor37!=ONOFFCompressor7.innerHTML)||(saveSliderCompressor37!=sliderCompressor7.value))//Compressor
  {
    if(saveInnerCompressor37=='ON')
    {
      compressor7.connect();
      compressor7.process(channel7);
      var knee = map ((saveSliderCompressor37), 0, 1000, 0, 40);
      compressor7.knee(knee);
      ONOFFCompressor7.innerHTML= 'ON';
      sliderCompressor7.value= saveSliderCompressor37;
    }
    else
    {
      ONOFFCompressor7.innerHTML = ('OFF');
      compressor7.disconnect();
      sliderCompressor7.value= saveSliderCompressor37;
    }
  }
  if (saveSliderRate37 != (sliderRate7.value))
  {
    sliderRate7.value = saveSliderRate37;
    channel7.rate(sliderRate7.value/100);
  }
  if (saveSliderPan37!= sliderPan7.value)
  {
    sliderPan7.value = saveSliderPan37;
    channel7.pan(sliderPan7.value/100);
  }
  if (saveSliderVolume37 != sliderVolume7.value)
  {
    sliderVolume7.value = saveSliderVolume37;
    channel7.setVolume(sliderVolume7.value/100);
  } 
}
function saveSetting31Click8 ()                                //CHANNEL 8
{
  /******We choose the music******/
  if (saveSelecteur38 != selecteur8)
  {
    if (saveSelecteur38==1)
    {
      channel8.disconnect(); 
      channel8 = loadSound("audio/18.mp3");
    }
    else if (saveSelecteur38==2)
    {
      channel8.disconnect(); 
      channel8 = loadSound("audio/28.mp3");
    }
    else
    {
      channel8.disconnect(); 
      channel8 = loadSound("audio/38.mp3");
    }
  }
  /***We choose the send effect***/
  if ((saveInnerEffect138 != buttonEffect18.innerHTML)||(saveSliderEffect138!=sliderEffect18.value))//first effect
  {
    if (saveInnerEffect138 == 'Reverb')
    {
      buttonEffect18.innerHTML='Reverb';
      effect18 = new p5.Reverb();
      effect18.process(channel7);
      effect18.drywet(saveSliderEffect138/100);
      effect18.amp(2.5);
      sliderEffect18.value=saveSliderEffect138;
    }
    else if (saveInnerEffect138 == 'Delay')
    {
      buttonEffect18.innerHTML='Delay';
      effect18 = new p5.Delay();
      effect18.process(channel8);
      effect18.drywet(saveSliderEffect138/100);
      effect18.amp(2.5);      
    }
    else if (saveInnerEffect138 == 'Ping Pong')
    {
      buttonEffect18.innerHTML='Ping Pong';
      effect18 = new p5.Delay;
      effect18.process(channel8);
      effect18.drywet(saveSliderEffect138/100);
      effect18.amp(2.5); 
      sliderEffect18.value=saveSliderEffect138;
    }
    else 
    {
      buttonEffect18.innerHTML='NONE';
      effect18.amp(0); 
      sliderEffect18.value=saveSliderEffect138;
    }
  }
  if ((saveInnerEffect238 != selectEffect28.value)||(saveSliderEffect238!=sliderEffect28.value))//second effect
  {
    if (saveInnerEffect238 == 'Reverb')
    {
      selectEffect28.value='Reverb';
      effect28 = new p5.Reverb();
      effect28.process(channel8);
      effect28.drywet(saveSliderEffect238/100);
      effect28.amp(2.5);
      sliderEffect28.value=saveSliderEffect238;
    }
    else if (saveInnerEffect238 == 'Delay')
    {
      selectEffect28.value='Delay';
      effect28 = new p5.Delay();
      effect28.process(channel8);
      effect28.drywet(saveSliderEffect238/100);
      effect28.amp(2.5);      
    }
    else if (saveInnerEffect238 == 'Ping Pong')
    {
      selectEffect28.value='Ping Pong';
      effect28 = new p5.Delay;
      effect28.process(channel7);
      effect28.drywet(saveSliderEffect237/100);
      effect28.amp(2.5); 
      sliderEffect28.value=saveSliderEffect237;
    }
    else 
    {
      selectEffect28.value='NONE';
      effect28.amp(0); 
      sliderEffect28.value=saveSliderEffect238;
    }
  }
  if ((saveInnerEffect338 != selectEffect38.value)||(saveSliderEffect338!=sliderEffect38.value))//third effect
  {
    if (saveInnerEffect338 == 'Reverb')
    {
      selectEffect38.value='Reverb';
      effect38 = new p5.Reverb();
      effect38.process(channel8);
      effect38.drywet(saveSliderEffect338/100);
      effect38.amp(2.5);
      sliderEffect38.value=saveSliderEffect338;
  }
    else if (saveInnerEffect338 == 'Delay')
    {
      selectEffect38.value='Delay';
      effect38 = new p5.Delay();
      effect38.process(channel8);
      effect38.drywet(saveSliderEffect338/100);
      effect38.amp(2.5);      
    }
    else if (saveInnerEffect338 == 'Ping Pong')
    {
      buttonEffect38innerHTML='Ping Pong';
      effect38 = new p5.Delay;
      effect38.process(channel8);
      effect38.drywet(saveSliderEffect338/100);
      effect38.amp(2.5); 
      sliderEffect38.value=saveSliderEffect338;
    }
    else 
    {
      selectEffect38.value='NONE';
      effect38.amp(0); 
      sliderEffect38.value=saveSliderEffect338;
    }
  }
  /*****Inline effect*****/
  if ((saveInnerLowPass38 != ONOFFLowPass8.innerHTML)||(saveSliderLowPass38 != sliderLowPass8.value))//LowPass
  {
    if (saveInnerLowPass38='OFF')
    {
      myFilter8.freq(22050);
      sliderLowPass8.value=saveSliderLowPass38;
      ONOFFLowPass8.innerHTML='OFF';
    }
    else
    {
      var filterFreq8 = map ((saveSliderLowPass38), 0, 1000, 10, 22050);
      myFilter8.freq(filterFreq8);
      myFilter8.res(28);
      sliderLowPass8.value=saveSliderLowPass38;
      ONOFFLowPass8.innerHTML='ON';
    }
  }
  if ((saveInnerEQ38 != ONOFFEQ8.innerHTML)||(saveSilderEQL38!=sliderEqLow8.value)||(saveSliderEQM38!=sliderEqMid8.value)||(saveSliderEQH38!=sliderEqHight8.value))//EQ
  {
    if(saveInnerEQ38=='ON')
    {
      var EQintLow = Math.floor(saveSilderEQL38);
      var EQintMid = Math.floor(saveSliderEQM38);
      var EQintHight = Math.floor(saveSilderEQH38);
      eq8.bands[0].gain(EQintLow);
      eq8.bands[1].gain(EQintMid);
      eq8.bands[2].gain(EQintHight);
      sliderEqLow8.value=saveSilderEQL38;
      sliderEqMid8.value=saveSliderEQM38;
      sliderEqHight8.value=saveSliderEQH38;
      ONOFFEQ8.innerHTML='ON';
    }
    else
    {
      ONOFFEQ7.innerHTML='OFF';
      eq8.bands[0].gain(0);
      eq8.bands[1].gain(0);
      eq8.bands[2].gain(0);   
      sliderEqLow8.value = saveSilderEQL38;
      sliderEqMid8.value = saveSliderEQM38;
      sliderEqHight8.value = saveSliderEQH38;
    }
  }
  if ((saveInnerCompressor38!=ONOFFCompressor8.innerHTML)||(saveSliderCompressor38!=sliderCompressor8.value))//Compressor
  {
    if(saveInnerCompressor38=='ON')
    {
      compressor8.connect();
      compressor8.process(channel8);
      var knee = map ((saveSliderCompressor38), 0, 1000, 0, 40);
      compressor8.knee(knee);
      ONOFFCompressor8.innerHTML= 'ON';
      sliderCompressor8.value= saveSliderCompressor38;
    }
    else
    {
      ONOFFCompressor8.innerHTML = ('OFF');
      compressor8.disconnect();
      sliderCompressor8.value= saveSliderCompressor38;
    }
  }
  if (saveSliderRate38 != (sliderRate8.value))
  {
    sliderRate8.value = saveSliderRate38;
    channel8.rate(sliderRate8.value/100);
  }
  if (saveSliderPan38!= sliderPan8.value)
  {
    sliderPan8.value = saveSliderPan38;
    channel8.pan(sliderPan8.value/100);
  }
  if (saveSliderVolume38 != sliderVolume8.value)
  {
    sliderVolume8.value = saveSliderVolume38;
    channel8.setVolume(sliderVolume8.value/100);
  } 
}

function buttonRecordClik()
{
  switch (caseRecord)
  {
    case 0 :
      recorder.record(fileRecord);
      buttonRecord.style.background = "url(image/blink.gif)";
      caseRecord++;
    break;
    case 1:
      recorder.stop();
      buttonRecord.style.background = "url(image/dl.png)";
      caseRecord++; 
    break;
    case 2:
      name = prompt ('name of the file')
      save(fileRecord, name+'.mp3');
      buttonRecord.style.background = "url(image/buttonRed.png)";
      caseRecord=0; 
    break;
  }
}

 function gotFile(file) 
 {
    var tabtext = split(file.data, ",");//convert the text in the file 
                                        //in an array with coma
                                        //cell separator
    /******We choose the music******/
    if (tabtext[3] != selecteur1)
    {
      if (tabtext[3]==1)
      {
          channel1.disconnect(); 
          channel1 = loadSound("audio/11.mp3");
      }
    else if (tabtext[3]==2)
    {
      channel1.disconnect(); 
      channel1 = loadSound("audio/21.mp3");
    }
    else
    {
      channel1.disconnect(); 
      channel1 = loadSound("audio/31.mp3");
    }
  }
  /***We choose the send effect***/
  if ((tabtext[5] != selectEffect11.value)||(parseFloat(tabtext[4])!=sliderEffect11.value))//first effect
  {
    if (tabtext[5] == 'Reverb')
    {
      selectEffect11.value='Reverb';
      effect11 = new p5.Reverb();
      effect11.process(channel1, 6, 0.2);
      effect11.drywet(parseFloat(tabtext[4])/100);
      effect11.amp(2.5);
      sliderEffect11.value=parseFloat(tabtext[4]);
    }
    else if (tabtext[5] == 'Delay')
    {
      selectEffect11.value='Delay';
      effect11 = new p5.Delay();
      effect11.process(channel1);
      effect11.drywet(parseFloat(tabtext[4])/100);
      effect11.amp(2.5);    
      sliderEffect11.value=parseFloat(tabtext[4]);  
    }
    else if (tabtext[5] == 'Ping Pong')
    {
      selectEffect11.value='Ping Pong';
      effect11 = new p5.Delay;
      effect11.process(channel1);
      effect11.drywet(parseFloat(tabtext[4])/100);
      effect11.amp(2.5); 
      sliderEffect11.value=parseFloat(tabtext[4]);
    }
    else 
    {
      selectEffect11.value='NONE';
      effect11.amp(0); 
      sliderEffect11.value=parseFloat(tabtext[4]);
    }
  }
  if ((tabtext[7] != selectEffect21.value)||(parseFloat(tabtext[6])!=sliderEffect21.value))//second effect
  {
    if (tabtext[7] == 'Reverb')
    {
      selectEffect21.value='Reverb';
      effect21 = new p5.Reverb();
      effect21.process(channel1);
      effect21.drywet(parseFloat(tabtext[6])/100);
      effect21.amp(2.5);
      sliderEffect21.value=parseFloat(tabtext[6]);
    }
    else if (tabtext[7] == 'Delay')
    {
      selectEffect21.value='Delay';
      effect21 = new p5.Delay();
      effect21.process(channel1);
      effect21.drywet(parseFloat(tabtext[6])/100);
      effect21.amp(2.5);      
    }
    else if (tabtext[7] == 'Ping Pong')
    {
      selectEffect21.value='Ping Pong';
      effect21 = new p5.Delay;
      effect21.process(channel1);
      effect21.drywet(parseFloat(tabtext[6])/100);
      effect21.amp(2.5); 
      sliderEffect21.value=parseFloat(tabtext[6]);
    }
    else 
    {
      selectEffect21.value='NONE';
      effect21.amp(0); 
      sliderEffect21.value=parseFloat(tabtext[6]);
    }
  }
  if ((tabtext[9] != selectEffect31.value)||(parseFloat(tabtext[8])!=sliderEffect31.value))//third effect
  {
    if (tabtext[9] == 'Reverb')
    {
      selectEffect31.value='Reverb';
      effect31 = new p5.Reverb();
      effect31.process(channel1);
      effect31.drywet(parseFloat(tabtext[8])/100);
      effect31.amp(2.5);
      sliderEffect31.value=parseFloat(tabtext[8]);
    }
    else if (tabtext[9] == 'Delay')
    {
      selectEffect31.value='Delay';
      effect31 = new p5.Delay();
      effect31.process(channel1);
      effect31.drywet(parseFloat(tabtext[8])/100);
      effect31.amp(2.5);      
    }
    else if (tabtext[9] == 'Ping Pong')
    {
      selectEffect31.value='Ping Pong';
      effect31 = new p5.Delay;
      effect31.process(channel1);
      effect31.drywet(parseFloat(tabtext[8])/100);
      effect31.amp(2.5); 
      sliderEffect31.value=parseFloat(tabtext[8]);
    }
    else 
    {
      selectEffect31.value='NONE';
      effect31.amp(0); 
      sliderEffect31.value=parseFloat(tabtext[8]);
    }
  }
  /*****Inline effect*****/
  if ((tabtext[11] != ONOFFLowPass1.innerHTML)||(parseFloat(tabtext[10]) != sliderLowPass1.value))//LowPass
  {
    if (tabtext[11]=='OFF')
    {
      myFilter1.freq(22050);
      sliderLowPass1.value=parseFloat(tabtext[10]);
      ONOFFLowPass1.innerHTML='OFF';
    }
    else
    {
      var filterFreq1 = map ((parseFloat(tabtext[10])), 0, 1000, 10, 22050);
      myFilter1.freq(filterFreq1);
      myFilter1.res(28);
      sliderLowPass1.value=parseFloat(tabtext[10]);
      ONOFFLowPass1.innerHTML='ON';
    }
  }
  if ((tabtext[15] != ONOFFEQ1.innerHTML)||(parseFloat(tabtext[12])!=sliderEqLow1.value)||(parseFloat(tabtext[13])!=sliderEqMid1.value)||(parseFloat(tabtext[14])!=sliderEqHight1.value))//EQ
  {
    if(tabtext[15]=='ON')
    {
      console.log('eqon')
      var EQintLow = Math.floor(saveSliderEQL11);
      var EQintMid = Math.floor(parseFloat(tabtext[13]));
      var EQintHight = Math.floor(parseFloat(tabtext[14]));
      eq1.bands[0].gain(EQintLow);
      eq1.bands[1].gain(EQintMid);
      eq1.bands[2].gain(EQintHight);
      sliderEqLow1.value=parseFloat(tabtext[12]);
      sliderEqMid1.value=parseFloat(tabtext[13]);
      sliderEqHight1.value=parseFloat(tabtext[14]);
      ONOFFEQ1.innerHTML='ON';
    }
    else
    {
      console.log('eqoff')
      ONOFFEQ1.innerHTML='OFF';
      eq1.bands[0].gain(0);
      eq1.bands[1].gain(0);
      eq1.bands[2].gain(0);   
      sliderEqLow1.value = parseFloat(tabtext[12]);
      sliderEqMid1.value = parseFloat(tabtext[13]);
      sliderEqHight1.value = parseFloat(tabtext[14]);
    }
  }
  if ((tabtext[17]!=ONOFFCompressor1)||(parseFloat(tabtext[16])!=sliderCompressor1))//Compressor
  {
    if(tabtext[17]=='ON')
    {
      compressor1.connect();
      compressor1.process(channel1);
      var knee = map ((parseFloat(tabtext[16])), 0, 1000, 0, 40);
      compressor1.knee(knee);
      ONOFFCompressor1.innerHTML= 'ON';
      sliderCompressor1.value= parseFloat(tabtext[16]);
    }
    else
    {
      ONOFFCompressor1.innerHTML = ('OFF');
      compressor1.disconnect();
      sliderCompressor1.value= parseFloat(tabtext[16]);
    }
  }
  if (parseFloat(tabtext[18]) != (sliderRate1.value))
  {
    sliderRate1.value = parseFloat(tabtext[18]);
    channel1.rate(sliderRate1.value/100);
  }
  if (parseFloat(tabtext[19])!= sliderPan1.value)
  {
    sliderPan1.value = parseFloat(tabtext[19]);
    channel1.pan(sliderPan1.value/100);
  }
  if (parseFloat(tabtext[20]) != sliderVolume1.value)
  {
    sliderVolume1.value = parseFloat(tabtext[20])
    channel1.setVolume(sliderVolume1.value/100);
  }

 }

 function buttonDdlClik()
{
    var stringtext = [];
    stringtext[0]="This is the saving setting for your audio mixing desk. \n\rPlease do NOT : change the order, change the name, had or remove a space or a tab.\n\r\n\r0.0";
    stringtext[1]=selecteur1                    //channel 1
    stringtext[2]=sliderEffect11.value
    stringtext[3]=selectEffect11.value;
    stringtext[4]=sliderEffect21.value;
    stringtext[5]= selectEffect21.value;
    stringtext[6]= sliderEffect31.value;
    stringtext[7]= selectEffect31.value;
    stringtext[8]= sliderLowPass1.value;
    stringtext[9]= ONOFFLowPass1.innerHTML;
    stringtext[10]= sliderEqLow1.value;
    stringtext[11]= sliderEqMid1.value;
    stringtext[12]= sliderEqHight1.value;
    stringtext[13]=  ONOFFEQ1.innerHTML;
    stringtext[14]= sliderCompressor1.value;
    stringtext[15]= ONOFFCompressor1.innerHTML;
    stringtext[16]= sliderRate1.value;
    stringtext[17]= sliderPan1.value;
    stringtext[18]= sliderVolume1.value;

    stringtext[19]=selecteur2                 //channel 2
    stringtext[20]=sliderEffect12.value
    stringtext[21]=selectEffect12.value;
    stringtext[22]=sliderEffect22.value
    stringtext[23]= selectEffect22.value;
    stringtext[24]= sliderEffect32.value;
    stringtext[25]= selectEffect32.value;
    stringtext[26]= sliderLowPass2.value;
    stringtext[27]= ONOFFLowPass2.innerHTML;
    stringtext[28]= sliderEqLow2.value;
    stringtext[29]= sliderEqMid2.value;
    stringtext[30]= sliderEqHight2.value;
    stringtext[31]= ONOFFEQ2.innerHTML;
    stringtext[32]= sliderCompressor2.value;
    stringtext[33]= ONOFFCompressor2.innerHTML;
    stringtext[34]= sliderRate2.value;
    stringtext[35]= sliderPan2.value;
    stringtext[36]= sliderVolume2.value;

    stringtext[37]=selecteur3                //channel 3
    stringtext[38]=sliderEffect13.value
    stringtext[39]=selectEffect13.value;
    stringtext[40]=sliderEffect23.value
    stringtext[41]= selectEffect23.value;
    stringtext[42]= sliderEffect33.value;
    stringtext[43]= selectEffect33.value;
    stringtext[44]= sliderLowPass3.value;
    stringtext[45]= ONOFFLowPass3.innerHTML;
    stringtext[46]= sliderEqLow3.value;
    stringtext[47]= sliderEqMid3.value;
    stringtext[48]= sliderEqHight3.value;
    stringtext[49]= ONOFFEQ3.innerHTML;
    stringtext[50]= sliderCompressor3.value;
    stringtext[51]= ONOFFCompressor3.innerHTML;
    stringtext[52]= sliderRate3.value;
    stringtext[53]= sliderPan3.value;
    stringtext[54]= sliderVolume3.value;

    stringtext[55]=selecteur4             //channel 4
    stringtext[56]=sliderEffect14.value
    stringtext[57]=selectEffect14.value;
    stringtext[58]=sliderEffect24.value
    stringtext[59]= selectEffect24.value;
    stringtext[60]= sliderEffect34.value;
    stringtext[61]= selectEffect34.value;
    stringtext[62]= sliderLowPass4.value;
    stringtext[63]= ONOFFLowPass4.innerHTML;
    stringtext[64]= sliderEqLow4.value;
    stringtext[65]= sliderEqMid4.value;
    stringtext[66]= sliderEqHight4.value;
    stringtext[67]= ONOFFEQ4.innerHTML;
    stringtext[68]= sliderCompressor4.value;
    stringtext[69]= ONOFFCompressor4.innerHTML;
    stringtext[70]= sliderRate4.value;
    stringtext[71]= sliderPan4.value;
    stringtext[72]= sliderVolume4.value;

    stringtext[73]=selecteur5             //channel 5
    stringtext[74]=sliderEffect15.value
    stringtext[75]=selectEffect15.value;
    stringtext[76]=sliderEffect25.value
    stringtext[77]= selectEffect25.value;
    stringtext[78]= sliderEffect35.value;
    stringtext[79]= selectEffect35.value;
    stringtext[80]= sliderLowPass5.value;
    stringtext[81]= ONOFFLowPass5.innerHTML;
    stringtext[83]= sliderEqLow5.value;
    stringtext[84]= sliderEqMid5.value;
    stringtext[85]= sliderEqHight5.value;
    stringtext[86]= ONOFFEQ5.innerHTML;
    stringtext[87]= sliderCompressor5.value;
    stringtext[88]= ONOFFCompressor5.innerHTML;
    stringtext[89]= sliderRate5.value;
    stringtext[90]= sliderPan5.value;
    stringtext[91]= sliderVolume5.value;

    stringtext[92]= selecteur6            //channel 6
    stringtext[93]= sliderEffect16.value
    stringtext[94]= selectEffect16.value;
    stringtext[95]= sliderEffect26.value
    stringtext[96]= selectEffect26.value;
    stringtext[97]= sliderEffect36.value;
    stringtext[98]= selectEffect36.value;
    stringtext[99]= sliderLowPass6.value;
    stringtext[100]= ONOFFLowPass6.innerHTML;
    stringtext[101]= sliderEqLow6.value;
    stringtext[102]= sliderEqMid6.value;
    stringtext[103]= sliderEqHight6.value;
    stringtext[104]= ONOFFEQ6.innerHTML;
    stringtext[105]= sliderCompressor6.value;
    stringtext[106]= ONOFFCompressor6.innerHTML;
    stringtext[107]= sliderRate6.value;
    stringtext[108]= sliderPan6.value;
    stringtext[109]= sliderVolume6.value;

    stringtext[110]=selecteur7             //channel 7
    stringtext[111]=sliderEffect17.value
    stringtext[112]=selectEffect17.value;
    stringtext[113]=sliderEffect27.value
    stringtext[114]= selectEffect27.value;
    stringtext[115]= sliderEffect37.value;
    stringtext[116]= selectEffect37.value;
    stringtext[117]= sliderLowPass7.value;
    stringtext[118]= ONOFFLowPass7.innerHTML;
    stringtext[119]= sliderEqLow7.value;
    stringtext[120]= sliderEqMid7.value;
    stringtext[121]= sliderEqHight7.value;
    stringtext[122]= ONOFFEQ7.innerHTML;
    stringtext[123]= sliderCompressor7.value;
    stringtext[124]= ONOFFCompressor7.innerHTML;
    stringtext[125]= sliderRate7.value;
    stringtext[126]= sliderPan7.value;
    stringtext[127]= sliderVolume7.value;

    stringtext[128]=selecteur8             //channel 8
    stringtext[129]=sliderEffect18.value
    stringtext[130]=selectEffect18.value;
    stringtext[131]=sliderEffect28.value
    stringtext[132]= selectEffect28.value;
    stringtext[133]= sliderEffect38.value;
    stringtext[134]= selectEffect38.value;
    stringtext[135]= sliderLowPass8.value;
    stringtext[136]= ONOFFLowPass8.innerHTML;
    stringtext[137]= sliderEqLow8.value;
    stringtext[138]= sliderEqMid8.value;
    stringtext[139]= sliderEqHight8.value;
    stringtext[140]= ONOFFEQ8.innerHTML;
    stringtext[141]= sliderCompressor8.value;
    stringtext[142]= ONOFFCompressor8.innerHTML;
    stringtext[143]= sliderRate8.value;
    stringtext[144]= sliderPan8.value;
    stringtext[145]= sliderVolume8.value;

    save(join(stringtext,","), "setting.txt");//save the file as setting.txt
                                               //each cell is join with ","
}

function draw() 
{ 
  /***Draw the FFT of the song***/
  var spectrum = fft.analyze();//Array of energy (amplitude/volume)
  //                            values across the frequency spectrum.
  //                            Lowest energy (silence) = 0, highest
  //                            possible is 255.
  noStroke();
  for (var i = 0; i< spectrum.length; i++)
  {
    var x = map(i, 0, spectrum.length, 0, width);//we transforme our compter
    //                                           proportionally to the width 
    //                                           of the canvas
    var h = map(spectrum[i], 0, 255, height, 0);//same for the height
    fill(i/2, 255, 255);                        //we change the color for each 
    //                                          frequencies
    rect(x, height, width/spectrum.length, h) ;//we draw every frequency
  }

}
