import { pongPage } from "../Index/data.js";

const prototypes = [];

prototypes["slider"] = {
  page: "Prototype/Slider/slider.html",
  script: "Slider.js",
};

prototypes["direction"] = {
  page: "Pong/Direction/direction.html",
  script: "Direction.js",
};

prototypes["wall-collision"] = {
  page: pongPage,
  script: "WallCollision/WallCollision.js",
};
prototypes["collision"] = {
  page: pongPage,
  script: "Collision/Collision.js",
};

export { prototypes }