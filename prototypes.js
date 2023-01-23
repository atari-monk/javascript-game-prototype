import { local } from "./data.js";

const prototypes = [];
const ver = 'laptop';

prototypes["slider"] = {
  host: local,
  page: "Prototype/Slider/index.html",
  ver: ver
};

prototypes["direction"] = {
  host: local,
  page: "Prototype/Direction/index.html",
  ver: ver
};

export { prototypes }