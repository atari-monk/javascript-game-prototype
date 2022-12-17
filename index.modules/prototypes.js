import { pongPage } from "./data.js";

const prototypes = [];
prototypes["direction"] = {
  page: "Pong/Direction/direction.html",
  script: "Direction.js",
};
prototypes["slider"] = {
  page: "Pong/Slider/slider.html",
  script: "Slider.js",
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