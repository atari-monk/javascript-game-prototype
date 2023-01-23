'use strict';

function delay(t) {
  return new Promise(function (resolve) {
    setInterval(resolve, t);
  });
}

Promise.delay = function (fn, t) {
  return delay(t).then(fn);
}

Promise.prototype.delay = async function (fn, t) {
  await this;
  return Promise.delay(fn, t);
}