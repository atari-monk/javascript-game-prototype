export class InputHandler {
    constructor() {
        this.keys = [];
        this.touchY = "";
        this.touchTreshold = 30;
        window.addEventListener("keydown", (e) => {
            if (
                (e.key === "ArrowDown" ||
                    e.key === "ArrowUp" ||
                    e.key === "ArrowLeft" ||
                    e.key === "ArrowRight") &&
                this.keys.indexOf(e.key) === -1
            ) {
                this.keys.push(e.key);
            } else if (e.key === "Enter" && gameOver) restartGame();
        });
        window.addEventListener("keyup", (e) => {
            if (
                e.key === "ArrowDown" ||
                e.key === "ArrowUp" ||
                e.key === "ArrowLeft" ||
                e.key === "ArrowRight"
            ) {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
        });
        window.addEventListener("touchstart", (e) => {
            this.touchY = e.changedTouches[0].pageY;
        });
        window.addEventListener("touchmove", (e) => {
            const swipeDistance = e.changedTouches[0].pageY - this.touchY;
            if (
                swipeDistance < -this.touchTreshold &&
                this.keys.indexOf("swipe up") === -1
            )
                this.keys.push("swipe up");
            else if (
                swipeDistance > this.touchTreshold &&
                this.keys.indexOf("swipe down") === -1
            ) {
                this.keys.push("swipe down");
                if (gameOver) restartGame();
            }
        });
        window.addEventListener("touchend", (e) => {
            this.keys.splice(this.keys.indexOf("swipe up"), 1);
            this.keys.splice(this.keys.indexOf("swipe down"), 1);
        });
    }
}
