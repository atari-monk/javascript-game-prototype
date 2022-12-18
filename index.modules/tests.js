import { pongPage } from "./data.js";

const tests = [];
tests["left-wall-collision"] = {
  page: pongPage,
  script: "../Test/WallCollision/LeftWallCollision.js",
};

tests["right-wall-collision"] = {
  page: pongPage,
  script: "../Test/WallCollision/RightWallCollision.js",
};

tests["top-wall-collision"] = {
  page: pongPage,
  script: "../Test/WallCollision/TopWallCollision.js",
};

tests["bottom-wall-collision"] = {
  page: pongPage,
  script: "../Test/WallCollision/BottomWallCollision.js",
};

tests["controlled-wall-collision"] = {
  page: pongPage,
  script: "../Test/WallCollision/ControlledWallCollision.js",
};

tests["player-test"] = {
  page: pongPage,
  script: "../Test/Player/PlayerTest.js",
};

tests["collision-left-test"] = {
  page: pongPage,
  script: "CollisionLeftTest/CollisionLeftTest.js",
};
tests["collision-right-test"] = {
  page: pongPage,
  script: "CollisionRightTest/CollisionRightTest.js",
};
tests["rect-collision-test"] = {
  page: pongPage,
  script: "RectCollisionTest/RectCollisionTest.js",
};

export {tests}