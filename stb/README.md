# Super Tilt Bro assets

- `stb.nes`: Super Tilt Bro by sgadrat (https://github.com/sgadrat/super-tilt-bro, WTFPL), built from source
  (`tilt_no_network_unrom_(E).nes`, the version that runs on any emulator).
- `jsnes/`: the jsnes NES emulator (https://github.com/bfirsh/jsnes, Apache-2.0), unmodified source modules.
- `jsnes/browser/index.js` has one local change: the audio-underrun catch-up frames are removed (they sped the game up).
- `jsnes/browser/frame-timer2.js` replaces jsnes' frame timer with a fixed 60.098 fps timestep.
