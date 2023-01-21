import { tests } from "./tests.js";
import { prototypes } from "./prototypes.js";

class MainPage {

  #testWalls;

  constructor() {
    this.#testWalls = document.getElementById('test-walls');
    this.#setLinks();
  }

  #setLinks() {
    const walls = tests['walls'];
    this.#testWalls.href = `${walls.host}${walls.page}`;
  }
}

const main = new MainPage();