// Membuat object dengan factory function



const rgb = (r,g,b) => {
    return `rgb(${r}, ${g}, ${b})`;
}

function convertColor(r, g, b) {
    const color = {};

    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }

    color.hex = function () {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    return color;
}

// membuat object dengan constructor function
// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// }

// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// Color.prototype.rgba = function (a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// }


// membuat object dengan class
class Color {
    constructor(r,g,b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        // console.log('Hi, ini adalah proses constructor');
        // console.log(`${r}`);
    }
    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }

    colorName() {
        console.log('The color name is ' + this.name);
        return this.name;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return `rgb(${this.innerRGB()}, ${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}

new Color()