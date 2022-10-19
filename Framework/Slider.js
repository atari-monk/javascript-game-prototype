
export class Slider {
    constructor(initValue, slider, label) {
        this.value = initValue;
        this.slider = slider;
        this.label = label;
        //console.log(this.label);
    }

    onLoad() {
        this.slider.value = this.value;
        this.label.innerHTML = this.value;
        //console.log(this.label);
        this.slider.addEventListener('change', function (e) {
            console.log(this.label);
            this.value = e.target.value;
            //this.label.innerHTML = this.value;
            //console.log(this.label);
        })
    }
}