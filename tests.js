import { local } from "./data.js";

const tests = [];
const ver = 'laptop';

tests["walls"] = {
  host: local,
  page: "Test/WallCollision/index.html",
  ver: ver
};

export { tests }