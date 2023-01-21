import { tests } from "./tests.js";
import { prototypes } from "./prototypes.js";

class MainPage {

  #testWalls;
  #testBall;
  #testPlayer;

  constructor() {
    this.#testWalls = document.getElementById('test-walls');
    this.#testBall = document.getElementById('test-ball');
    this.#testPlayer = document.getElementById('test-player');
    this.#setLinks();
  }

  #setLinks() {
    this.#setTest('walls', this.#testWalls);
    this.#setTest('ball', this.#testBall);
    this.#setTest('player', this.#testPlayer);
  }

  #setTest(key, element) {
    const page = tests[key];
    element.href = `${page.host}${page.page}`;
  }
}

new MainPage();