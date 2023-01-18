'using strict';

const noDisplay = 'noDisplay';
const selectGame = 'select-controls-game';
const selectPlayer = 'select-controls-player';

export class Menu {
  #btnStart;
  #btnReset;
  #btnOverlay;
  #selectConstrols;
  #callback;

  static get noDisplay() { return noDisplay;}
  static get selectGame() { return selectGame;}
  static get selectPlayer() { return selectPlayer;}

  constructor(onControlsChange) {
    this.#callback = onControlsChange;
    this.#btnStart = document.getElementById('btnStart');
    this.#btnReset = document.getElementById('btnReset');
    this.#btnOverlay = document.getElementById('btnOverlay');
    this.#setSelectGetters();
    this.#selectConstrols = document.getElementById('select-controls-container');
  }

  #setSelectGetters() {
    HTMLSelectElement.prototype.__defineGetter__("val", function () {
      return this.options[this.selectedIndex].value;
    });
    HTMLSelectElement.prototype.__defineGetter__("text", function () {
      return this.options[this.selectedIndex].text;
    });
  }

  setPlayerView(onControlsChange) {
    this.#callback(this.#selectConstrols.childNodes[3].val);
    this.#btnStart.classList.add(noDisplay);
    this.#btnReset.classList.add(noDisplay);
    this.#btnOverlay.classList.add(noDisplay);
    this.#selectConstrols.classList.add(selectPlayer);
    this.#setSelectConstorls(onControlsChange);
  }

  setGameView() {
    this.#selectConstrols.classList.add(noDisplay);
  }

  #setSelectConstorls() {
    this.#selectConstrols.addEventListener('change', (e) => {
      this.#callback(e.target.value);
    });
  }
}
