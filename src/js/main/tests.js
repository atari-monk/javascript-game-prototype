import { local } from "./data.js";

const tests = [];

tests["walls"] = {
  host: local,
  page: "walls.html",
};

tests["ball"] = {
  host: local,
  page: "Test/Ball/index.html",
};

tests["player"] = {
  host: local,
  page: "Test/Player/index.html",
};

tests["my-collision"] = {
  host: local,
  page: "Test/MyCollision/index.html",
};

tests["collision"] = {
  host: local,
  page: "Test/Collision/index.html",
};

export { tests }