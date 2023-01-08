'using strict'

const urlParams = new URLSearchParams(location.search);
const scriptParm = urlParams.get("script");
const title = urlParams.get("title");

let script = document.createElement("script");
script.setAttribute("src", scriptParm);
script.setAttribute("type", "module");

document.title = title;
document.body.appendChild(script);