import { local } from "./data.js";

const games = [];
const ver = 'laptop';

games["pong-laptop"] = {
  host: local,
  page: "Pong/Laptop/index.html",
  ver: ver
};

export { games }