export class Timer {
    constructor() {
        this.deltaTime = 0;
        this.lastTime = 0;
    }

    set(timestamp) {
        this.deltaTime = timestamp - this.lastTime;
        this.lastTime = timestamp;
    }

    log() {
        console.log(this.deltaTime);
    }
}
