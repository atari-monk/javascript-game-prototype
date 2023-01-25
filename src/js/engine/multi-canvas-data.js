import { CanvasData } from './canvas-data.js';
import { Vector2 } from './vector-2.js';

export class MultiCanvasData {
  #key;
  #data;

  constructor() {
    this.#key = "laptop";
    this.#data = new Map();
    this.#init();
  }

  #init() {
    this.#add('laptop-game',
      new CanvasData(
        'game-canvas',
        new Vector2(800, 600)));

    this.#add('laptop-info',
      new CanvasData(
        'info-canvas',
        new Vector2(650, 500)));

    this.#add('laptop-points',
      new CanvasData(
        'points-canvas',
        new Vector2(800, 90)));

    this.#add('phone-game',
      new CanvasData(
        'game-canvas',
        new Vector2(300, 300)));

    this.#add('phone-info',
      new CanvasData(
        'info-canvas',
        new Vector2(500, 500)));

    this.#add('phone-points',
      new CanvasData(
        'points-canvas',
        new Vector2(300, 90)));

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