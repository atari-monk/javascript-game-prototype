import { tests } from "./Index/tests.js";
import { prototypes } from "./Index/prototypes.js";

const local = "http://127.0.0.1:5501/";
const page1 = "Test/WallCollision/pong.html";

function getOption(selectElId){
  const select = document.getElementById(selectElId);
  return select.options[select.selectedIndex];
}

function selectTest() {
  const option = getOption('select-test');
  const test = tests[option?.value];
  if (!option || !test) return;
  const params = {
    none: '',
    script: test.script,
    title: option.text,
    ver: test.ver
  };
  console.log(params);
  const url = local + page1;
  window.open(url, '_blank');
}

function selectPrototype() {
  const option = getOption('select-prototype');
  const prototype = prototypes[option?.value];
  if (!option || !prototype) return;
  const params = {
    none: '',
    script: prototype.script,
    title: option.text
  };
  const url = prototype.page + '?' + encodeGetParams(params);
  window.open(url, '_blank');
}

window.selectTest = selectTest;
window.selectPrototype = selectPrototype;