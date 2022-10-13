const pongPage = 'Pong/pongPage.html';
const script = 'Script';
const js = '.js'
const samples = [];
samples['pong-1'] = {
    page: pongPage,
    script: 'pong' + script + '1' + js
};
samples['pong-2'] = {
    page: pongPage,
    script: 'pong' + script + '2' + js
};

function update() {
    var select = document.getElementById('select1');
    var option = select.options[select.selectedIndex];
    if (option.value == 'none')
        return;
    var sample = samples[option.value];
    window.open(sample.page + '?' + sample.script, '_blank');
}

update();