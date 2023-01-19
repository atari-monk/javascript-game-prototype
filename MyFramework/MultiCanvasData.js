const localPath = '../../MyFramework/CanvasData.js';
const gitHubPath = `https://atari-monk.github.io/javascript-pong/${localPath}`;
import(gitHubPath)
  .then((module) => {
    console.log(module.version);
  })
  .catch((error) => console.log(`Import Error! ${error}`));

//import { CanvasData } from '../../MyFramework/CanvasData.js';
import { Vector2 } from '../../MyFramework/Vector2.js';

export class MultiCanvasData {
  #key;
  #data;

  constructor() {
    const me = document.querySelector('script[data-name="myDynScript"]');
    this.#key = me.getAttribute('ver');
    this.#data = new Map();

    this.#add('laptop-game'
      , new CanvasData(
        'gameCanvas'
        , new Vector2(800, 600)));

    this.#add('laptop-info'
      , new CanvasData(
        'infoCanvas'
        , new Vector2(650, 500)));

    this.#add('laptop-points'
      , new CanvasData(
        'pointsCanvas'
        , new Vector2(800, 90)));

    this.#add('phone-game'
      , new CanvasData(
        'gameCanvas'
        , new Vector2(300, 300)));

    this.#add('phone-info'
      , new CanvasData(
        'infoCanvas'
        , new Vector2(500, 500)));

    this.#add('phone-points'
      , new CanvasData(
        'pointsCanvas'
        , new Vector2(300, 90)));

    this.get('game').setCanvas();
    this.get('info').setCanvas();
    this.get('points').setCanvas();
  }

  #add(id, canvasData) {
    this.#data.set(id, canvasData);
  }

  get(name) {
    return this.#data.get(`${this.#key}-${name}`);
  }
}