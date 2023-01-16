'using strict'

const urlParams = new URLSearchParams(location.search);
const scriptParm = urlParams.get("script");
const title = urlParams.get("title");
const ver = urlParams.get("ver");

let script = document.createElement("script");
script.setAttribute("src", scriptParm);
script.setAttribute("type", "module");
script.setAttribute("ver", ver);
script.setAttribute("data-name", "myDynScript");

//console.log(script, title);

document.title = title;
document.body.appendChild(script);