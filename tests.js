import { local } from "./data.js";

const tests = [];
const ver = 'laptop';

tests["walls"] = {
  host: local,
  page: "Test/Walls/index.html",
  ver: ver
};

tests["ball"] = {
  host: local,
  page: "Test/Ball/index.html",
  ver: ver
};

tests["player"] = {
  host: local,
  page: "Test/Player/index.html",
  ver: ver
};

tests["my-collision"] = {
  host: local,
  page: "Test/MyCollision/index.html",
  ver: ver
};

tests["collision"] = {
  host: local,
  page: "Test/Collision/index.html",
  ver: ver
};

export { tests }