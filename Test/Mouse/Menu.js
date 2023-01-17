'using strict';

export class Menu {
  noDisplayClass = 'noDisplay';
  selectGameClass = 'select-controls-game';
  selectPlayerClass = 'select-controls-player';
  #btnStart;
  #btnReset;
  #btnOverlay;
  #selectConstrols;
  constructor() {
    this.#btnStart = document.getElementById('btnStart');
    this.#btnReset = document.getElementById('btnReset');
    this.#btnOverlay = document.getElementById('btnOverlay');
    this.#selectConstrols = document.getElementsByClassName('select-controls-game')[0];
    console.log(this.#selectConstrols);
  }

  setPlayerMenu() {
    this.#btnStart.classList.add(this.noDisplayClass);
    this.#btnReset.classList.add(this.noDisplayClass);
    this.#btnOverlay.classList.add(this.noDisplayClass);
    this.#selectConstrols.classList.remove(this.selectGameClass);
    this.#selectConstrols.classList.add(this.selectPlayerClass);
  }
}
