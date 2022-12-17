import { pongPage } from "./data.js";

const tests = [];
tests["left-wall-collision"] = {
  page: pongPage,
  script: "../Test/LeftWallCollision/LeftWallCollision.js",
};
tests["wall-collision-test"] = {
  page: pongPage,
  script: "../Test/WallCollisionTest/WallCollisionTest.js",
};
tests["player-test"] = {
  page: pongPage,
  script: "PlayerTest/PlayerTest.js",
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