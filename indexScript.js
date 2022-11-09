const pongPage = "Pong/pongPage.html";
const tests = [];
tests["wall-collision-test"] = {
    page: pongPage,
    script: "WallCollisionTest/WallCollisionTest.js",
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

const prototypes = [];
prototypes["direction"] = {
    page: "Pong/Direction/direction.html",
    script: "Direction.js",
};
prototypes["slider"] = {
    page: "Pong/Slider/slider.html",
    script: "Slider.js",
};
prototypes["wall-collision"] = {
    page: pongPage,
    script: "WallCollision/WallCollision.js",
};
prototypes["collision"] = {
    page: pongPage,
    script: "Collision/Collision.js",
};

function selectTest(){
    var select = document.getElementById('select-test');
    var option = select.options[select.selectedIndex];
    if (option.value == 'none')
        return;
    var test = tests[option.value];

    const encodeGetParams = (p) =>
        Object.entries(p)
            .map((kv) => kv.map(encodeURIComponent).join("="))
            .join("&");

    const params = {
        none: '',
        script: test.script,
        title: option.text
    };

    const url = test.page + '?' + encodeGetParams(params);

    window.open(url, '_blank');
}

function selectPrototype(){
    var select = document.getElementById('select-prototype');
    var option = select.options[select.selectedIndex];
    if (option.value == 'none')
        return;
    var prototype = prototypes[option.value];

    const encodeGetParams = (p) =>
        Object.entries(p)
            .map((kv) => kv.map(encodeURIComponent).join("="))
            .join("&");

    const params = {
        none: '',
        script: prototype.script,
        title: option.text
    };

    const url = prototype.page + '?' + encodeGetParams(params);

    window.open(url, '_blank');
}