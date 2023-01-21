'using strict';

const hide = 'hide';
const selectGame = 'select-controls-game';
const selectPlayer = 'select-controls-player';
const menuContainer = 'menu-container';
const menuButtons = 'menu-btns';
const btnStart = 'btn-start';
const btnReset = 'btn-reset';
const btnOverlay = 'btn-overlay';

export class Menu {
  #menuContainer;
  #menuBtns;
  #btnStart;
  #btnReset;
  #btnOverlay;
  #selectConstrols;
  #callback;

  static get hide() { return hide;}
  static get selectGame() { return selectGame;}
  static get selectPlayer() { return selectPlayer;}
  static get menuContainer() { return menuContainer; }
  static get btnStart() { return btnStart; }
  static get btnReset() { return btnReset; }
  static get btnOverlay() { return btnOverlay; }

  constructor(onControlsChange) {
    this.#callback = onControlsChange;
    this.#menuContainer = document.getElementById(menuContainer);
    this.#menuBtns = document.getElementById(menuButtons);
    this.#btnStart = document.getElementById(btnStart);
    this.#btnReset = document.getElementById(btnReset);
    this.#btnOverlay = document.getElementById(btnOverlay);
    this.#setSelectGetters();
    this.#selectConstrols = document.getElementById('select-controls-container');
    console.log(this.#selectConstrols);
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
    this.#btnStart.classList.add(hide);
    this.#btnReset.classList.add(hide);
    this.#btnOverlay.classList.add(hide);
    this.#selectConstrols.classList.add(selectPlayer);
    this.#selectConstrols.classList.remove(hide);
    this.#menuContainer.classList.remove(hide);
    this.#setSelectConstorls(onControlsChange);
  }

  setGameView() {
    this.#menuContainer.classList.remove(hide);
    this.#menuBtns.classList.remove(hide);
    this.#btnStart.classList.remove(hide);
    this.#btnReset.classList.remove(hide);
    this.#btnOverlay.classList.remove(hide);
  }

  hide() {
    this.#btnStart.classList.add(hide);
    this.#btnReset.classList.add(hide);
    this.#btnOverlay.classList.add(hide);
    this.#selectConstrols.classList.add(hide);
  }

  #setSelectConstorls() {
    this.#selectConstrols.addEventListener('change', (e) => {
      this.#callback(e.target.value);
    });
  }
}
