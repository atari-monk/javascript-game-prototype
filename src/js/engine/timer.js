export class Timer {
  constructor() {
    this.deltaTime = 0;
    this.lastTime = 0;
  }

  set(timestamp) {
    const delta = timestamp - this.lastTime;
    if(delta < 20)
      this.deltaTime = delta;
    this.lastTime = timestamp;
  }

  log() {
    console.log(this.deltaTime);
  }
}