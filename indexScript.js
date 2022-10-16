const pongPage = "Pong/pongPage.html";
const samples = [];
samples["wall-collision-test"] = {
    page: pongPage,
    script: "WallCollisionTest/WallCollisionTest.js",
};
samples["wall-collision"] = {
    page: pongPage,
    script: "WallCollision/WallCollision.js",
};
samples["collision-test"] = {
    page: pongPage,
    script: "CollisionTest/CollisionTest.js",
};
samples["collision"] = {
    page: pongPage,
    script: "Collision/Collision.js",
};
samples["second-player"] = {
    page: pongPage,
    script: "SecondPlayer/SecondPlayer.js",
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