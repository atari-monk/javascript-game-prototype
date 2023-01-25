import { local } from "./data.js";

const tests = [];

tests["walls"] = {
  host: local,
  page: "walls.html",
};

tests["ball"] = {
  host: local,
  page: "ball.html",
};

tests["player"] = {
  host: local,
  page: "player.html",
};

tests["my-collision"] = {
  host: local,
  page: "myCollision.html",
};

tests["collision"] = {
  host: local,
  page: "collision.html",
};

export { tests }