const dogBarkingBuffer = null;

//
// const loadDogSound = (audioCtx, url) => {
//   const request = new XMLHttpRequest();
//   request.open('GET', url, true);
//   request.responseType = 'arraybuffer';
//
//   request.onload = function() {
//     audioCtx.decodeAudioData(request.response, function(buffer) {
//       dogBarkingBuffer = buffer;
//     }, onError);
//   }
//   request.send();
// }
//
// const playSound = (audioCtx, buffer) => {
//   // creates a sound source
//   var source = audioCtx.createBufferSource();
//   // tell the source which sound to play
//   source.buffer = buffer;
//   // connect the source to the audioCtx's destination (the speakers)
//   source.connect(audioCtx.destination);
//   // play the source now
//   source.start(0);
// }

//
class OscillatorSound {
  constructor(audioCtx) {
    this.audioCtx = audioCtx
  }

  setup() {
    this.oscillator = this.audioCtx.createOscillator();
    this.gainNode = this.audioCtx.createGain();

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioCtx.destination);
    this.oscillator.type = 'sine';
  }

  play(freqValue) {
    this.setup();
    
    this.oscillator.frequency.setValueAtTime(freqValue, this.audioCtx.currentTime);
    this.gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime);
    this.gainNode.gain.linearRampToValueAtTime(
      1,
      this.audioCtx.currentTime + 0.01
    );

    this.oscillator.start(this.audioCtx.currentTime);
    this.stop(this.audioCtx.currentTime);
  }

  stop() {
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 1);
    this.oscillator.stop(this.audioCtx.currentTime + 1);
  }
}

export default OscillatorSound;
