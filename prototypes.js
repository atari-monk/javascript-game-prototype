import { local } from "./data.js";

const prototypes = [];
const ver = 'laptop';

prototypes["slider"] = {
  host: local,
  page: "Prototype/Slider/index.html",
  ver: ver
};

prototypes["direction"] = {
  host: local,
  page: "Prototype/Direction/index.html",
  ver: ver
};

prototypes["wall-collision"] = {
  host: local,
  page: "Prototype/WallCollision/index.html",
  ver: ver
};

prototypes["my-collision"] = {
  host: local,
  page: "Prototype/MyCollision/index.html",
  ver: ver
};

prototypes["arkanoid"] = {
  host: local,
  page: "Prototype/Arkanoid/index.html",
  ver: ver
};

export { prototypes }