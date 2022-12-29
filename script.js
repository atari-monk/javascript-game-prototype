import { tests } from "./Index/tests.js";
import { prototypes } from "./Index/prototypes.js";

const encodeGetParams = (p) =>
  Object.entries(p)
    .map((kv) => kv.map(encodeURIComponent).join("="))
    .join("&");

function getOption(selectElId){
  var select = document.getElementById(selectElId);
  return select.options[select.selectedIndex];
}

function selectTest() {
  var option = getOption('select-test');
  var test = tests[option?.value];
  if (!option || !test) return;
  const params = {
    none: '',
    script: test.script,
    title: option.text
  };
  const url = test.page + '?' + encodeGetParams(params);
  window.open(url, '_blank');
}

function selectPrototype() {
  var option = getOption('select-prototype');
  var prototype = prototypes[option?.value];
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