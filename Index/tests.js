import { pongPage, pongPageLaptop } from "./data.js";

const ver = 'laptop';
const tests = [];
tests["left-wall-collision"] = {
  page: pongPageLaptop,
  script: "../../Test/WallCollision/Left.js",
  ver: ver
};

tests["right-wall-collision"] = {
  page: pongPageLaptop,
  script: "../../Test/WallCollision/Right.js",
  ver: ver
};

tests["top-wall-collision"] = {
  page: pongPage,
  script: "../Test/WallCollision/Top.js",
};

tests["bottom-wall-collision"] = {
  page: pongPage,
  script: "../Test/WallCollision/Bottom.js",
};

tests["controlled-wall-collision"] = {
  page: pongPage,
  script: "../Test/WallCollision/Controlled.js",
};

tests["player"] = {
  page: pongPage,
  script: "../Test/Player/Player.js",
};

tests["collision-left"] = {
  page: pongPage,
  script: "../Test/MyBallCollision/Left.js",
};

tests["collision-right"] = {
  page: pongPage,
  script: "../Test/MyBallCollision/Right.js",
};

tests["rect-collision"] = {
  page: pongPage,
  script: "../Test/BallCollision/Rect.js",
};

tests["mouse"] = {
  page: pongPageLaptop,
  script: "../../Test/Mouse/Mouse.js",
  ver: ver
};

export { tests }