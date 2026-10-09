// Fixed-timestep frame timer (replaces jsnes' frame-timer.js, which ran too fast for some displays).
// Emulates exactly 60.098 frames per second of real time, whatever the screen refresh rate is.
const FPS = 60.098;

export default class FrameTimer {
  constructor(props) {
    this.onGenerateFrame = props.onGenerateFrame;
    this.onWriteFrame = props.onWriteFrame;
    this.interval = 1e3 / FPS;
    this.running = false;
    this.last = 0;
    this.acc = 0;
    this.tick = this.tick.bind(this);
  }
  start() {
    this.running = true; this.last = 0; this.acc = 0;
    this._id = window.requestAnimationFrame(this.tick);
  }
  stop() {
    this.running = false;
    if (this._id) window.cancelAnimationFrame(this._id);
  }
  generateFrame() { this.onGenerateFrame(); }
  tick(now) {
    if (!this.running) return;
    this._id = window.requestAnimationFrame(this.tick);
    if (!this.last) { this.last = now; return; }
    this.acc += Math.min(now - this.last, 100);
    this.last = now;
    let n = 0;
    while (this.acc >= this.interval && n < 3) { this.onGenerateFrame(); this.acc -= this.interval; n++; }
    if (n === 3) this.acc = 0;
    if (n) this.onWriteFrame();
  }
}
