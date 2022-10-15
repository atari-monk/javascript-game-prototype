const pongPage = "Pong/pongPage.html";
const script = "Script";
const js = ".js";
const samples = [];
samples["pong-1"] = {
    page: pongPage,
    script: "pong" + script + "1" + js,
};
samples["pong-2"] = {
    page: pongPage,
    script: "pong" + script + "2" + js,
};
samples["pong-3"] = {
    page: pongPage,
    script: "pong" + script + "3" + js,
};
samples["pong-4"] = {
    page: pongPage,
    script: "pong" + script + "4" + js,
};
samples["pong-5"] = {
    page: pongPage,
    script: "pong" + script + "5" + js,
};

function update() {
    var select = document.getElementById('select1');
    var option = select.options[select.selectedIndex];
    if (option.value == 'none')
        return;
    var sample = samples[option.value];

    const encodeGetParams = (p) =>
        Object.entries(p)
            .map((kv) => kv.map(encodeURIComponent).join("="))
            .join("&");

    const params = {
        none: '',
        script: sample.script,
        title: option.text
    };

    const url = sample.page + '?' + encodeGetParams(params);

    window.open(url, '_blank');
}

update();