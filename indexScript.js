const pongPage = "Pong/pongPage.html";
const samples = [];
samples["slider"] = {
    page: "Pong/Slider/slider.html",
    script: "Slider.js",
};
samples["wall-collision-test"] = {
    page: pongPage,
    script: "WallCollisionTest/WallCollisionTest.js",
};
samples["wall-collision"] = {
    page: pongPage,
    script: "WallCollision/WallCollision.js",
};
samples["player-test"] = {
    page: pongPage,
    script: "PlayerTest/PlayerTest.js",
};
samples["collision-left-test"] = {
    page: pongPage,
    script: "CollisionLeftTest/CollisionLeftTest.js",
};
samples["collision-right-test"] = {
    page: pongPage,
    script: "CollisionRightTest/CollisionRightTest.js",
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