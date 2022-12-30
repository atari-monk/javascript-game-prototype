import { pongPage } from "../Index/data.js";

const prototypes = [];

prototypes["slider"] = {
  page: "Prototype/Slider/slider.html",
  script: "Slider.js",
};

prototypes["direction"] = {
  page: "Prototype/Direction/direction.html",
  script: "Direction.js",
};

prototypes["wall-collision"] = {
  page: pongPage,
  script: "../Prototype/WallCollision/Wall.js",
};

prototypes["collision"] = {
  page: pongPage,
  script: "../Prototype/Collision/Collision.js",
};

export { prototypes }