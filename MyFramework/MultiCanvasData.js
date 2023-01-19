const localCanvasData = '../../MyFramework/CanvasData.js';
const localVector2 = '../../MyFramework/Vector2.js';
const remote = 'https://atari-monk.github.io/javascript-pong/';
const remoteCanvasData = `${remote}MyFramework/CanvasData.js`;
const remoteVector2 = `${remote}MyFramework/Vector2.js`;

//import { CanvasData } from '../../MyFramework/CanvasData.js';
//import { Vector2 } from '../../MyFramework/Vector2.js';

export class MultiCanvasData {
  #key;
  #data;

  constructor() {
    const me = document.querySelector('script[data-name="myDynScript"]');
    this.#key = me.getAttribute('ver');
    this.#data = new Map();
  }

  async init(remote = false) {
    remote ? await this.#initRemote() : await this.#initLocal();
  }

  async #initRemote() {
    let m1 = await import(remoteCanvasData);
    let m2 = await import(remoteVector2);
    this.#init(m1, m2);
  }

  async #initLocal() {
    let m1 = await import(localCanvasData);
    let m2 = await import(localVector2);
    this.#init(m1, m2);
  }

  #init(m1, m2) {
    this.#add('laptop-game',
      new m1.CanvasData(
        'gameCanvas',
        new m2.Vector2(800, 600)));

    this.#add('laptop-info',
      new m1.CanvasData(
        'infoCanvas',
        new m2.Vector2(650, 500)));

    this.#add('laptop-points',
      new m1.CanvasData(
        'pointsCanvas',
        new m2.Vector2(800, 90)));

    this.#add('phone-game',
      new m1.CanvasData(
        'gameCanvas',
        new m2.Vector2(300, 300)));

    this.#add('phone-info',
      new m1.CanvasData(
        'infoCanvas',
        new m2.Vector2(500, 500)));

    this.#add('phone-points',
      new m1.CanvasData(
        'pointsCanvas',
        new m2.Vector2(300, 90)));

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