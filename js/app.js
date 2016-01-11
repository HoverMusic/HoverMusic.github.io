$( document ).ready( function(){

  app.current_scene = {}
  app.current_scene.group = '';

  app.audio = {};

  app.audio.synth_01 = new Tone.PolySynth(6, Tone.MonoSynth).toMaster();
  app.audio.synth_02 = new Tone.PolySynth(6, Tone.MonoSynth).toMaster();
  app.audio.synth_03 = new Tone.PolySynth(6, Tone.MonoSynth).toMaster();
  app.audio.synth_04 = new Tone.PolySynth(6, Tone.MonoSynth).toMaster();

  app.audio = new App.Audio({
    synth_01: app.audio.synth_01,
    synth_02: app.audio.synth_02,
    synth_03: app.audio.synth_03,
    synth_04: app.audio.synth_04
  });

});
