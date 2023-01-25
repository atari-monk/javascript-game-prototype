import { tests } from "./tests.js";
import { prototypes } from "./prototypes.js";
import { games } from "./games.js";

class MainPage {

  #testWalls;
  #testBall;
  #testPlayer;
  #testMyCollision;
  #testCollision;

  #protoSlider;
  #protoDirection;
  #protoWallCollision;
  #protoMyCollision;
  #protoArkanoid;

  #pong;

  constructor() {
    this.#testWalls = document.getElementById('test-walls');
    this.#testBall = document.getElementById('test-ball');
    this.#testPlayer = document.getElementById('test-player');
    this.#testMyCollision = document.getElementById('test-my-collision');
    this.#testCollision = document.getElementById('test-collision');

    this.#protoSlider = document.getElementById('proto-slider');
    this.#protoDirection = document.getElementById('proto-direction');
    this.#protoWallCollision = document.getElementById('proto-wall-collision');
    this.#protoMyCollision = document.getElementById('proto-my-collision');
    this.#protoArkanoid = document.getElementById('proto-arkanoid');

    this.#pong = document.getElementById('pong');
    this.#setLinks();
  }

  #setLinks() {
    this.#setTest('walls', this.#testWalls);
    this.#setTest('ball', this.#testBall);
    this.#setTest('player', this.#testPlayer);
    this.#setTest('my-collision', this.#testMyCollision);
    this.#setTest('collision', this.#testCollision);

    this.#setProto('slider', this.#protoSlider);
    this.#setProto('direction', this.#protoDirection);
    this.#setProto('wall-collision', this.#protoWallCollision);
    this.#setProto('my-collision', this.#protoMyCollision);
    this.#setProto('arkanoid', this.#protoArkanoid);

    this.#setGame('pong', this.#pong);
  }

  #setTest(key, element) {
    const page = tests[key];
    element.href = `${page.host}${page.page}`;
  }

  #setProto(key, element) {
    const page = prototypes[key];
    element.href = `${page.host}${page.page}`;
  }

  #setGame(key, element) {
    const page = games[key];
    element.href = `${page.host}${page.page}`;
  }
}

new MainPage();