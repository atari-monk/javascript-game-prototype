
export class MouseInputHandler {

  constructor() {
    document.addEventListener("mousemove", mouseMoveHandler, false);
  }

  mouseMoveHandler(e) {
    return e.clientX - canvas.offsetLeft;
  }
}
