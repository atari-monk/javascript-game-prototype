import { local } from "./data.js";

const prototypes = [];

prototypes["slider"] = {
  host: local,
  page: "slider.html",
};

prototypes["direction"] = {
  host: local,
  page: "direction.html",
};

prototypes["wall-collision"] = {
  host: local,
  page: "wallCollision.html",
};

prototypes["my-collision"] = {
  host: local,
  page: "myCollisionProto.html",
};

prototypes["arkanoid"] = {
  host: local,
  page: "arkanoid.html",
};

export { prototypes }