import { tests } from "./tests.js";
import { prototypes } from "./prototypes.js";

class MainPage {

  #testWalls;
  #testBall;

  constructor() {
    this.#testWalls = document.getElementById('test-walls');
    this.#testBall = document.getElementById('test-ball');
    this.#setLinks();
  }

  #setLinks() {
    this.#setTest('walls', this.#testWalls);
    this.#setTest('ball', this.#testBall);
  }

  #setTest(key, element) {
    const page = tests[key];
    element.href = `${page.host}${page.page}`;
  }
}

new MainPage();