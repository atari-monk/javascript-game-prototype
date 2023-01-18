
export class Slider {
    constructor(initValue, slider, label) {
        this.value = initValue;
        this.slider = slider;
        this.label = label;
    }

    onLoad() {
        this.slider.value = this.value;
        this.label.innerHTML = this.value;
    }
}