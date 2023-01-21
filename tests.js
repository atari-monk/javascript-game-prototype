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

export { tests }