import { local } from "./data.js";

const prototypes = [];

prototypes["slider"] = {
  host: local,
  page: "Prototype/Slider/index.html",
};

prototypes["direction"] = {
  host: local,
  page: "Prototype/Direction/index.html",
};

prototypes["wall-collision"] = {
  host: local,
  page: "Prototype/WallCollision/index.html",
};

prototypes["my-collision"] = {
  host: local,
  page: "Prototype/MyCollision/index.html",
};

prototypes["arkanoid"] = {
  host: local,
  page: "Prototype/Arkanoid/index.html",
};

export { prototypes }