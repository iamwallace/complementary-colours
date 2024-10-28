const colourValues = {};

function randomizer() { 
    let max = 256;
    let num = Math.floor(Math.random() * max);
    return num;
}


function getColours() {
    let r = randomizer();
    let g = randomizer();
    let b = randomizer();

    let cr = 255 - r;
    let cg = 255 - g;
    let cb = 255 - b;

    let rgb = "(" + r + "," + g + "," + b + ")";
    let cRgb = "(" + cr + "," + cg + "," + cb + ")";

    colourValues.rgb = rgb;
    colourValues.cRgb = cRgb;
}


function changeColours() {
    getColours();
    document.body.style.background = "rgb" + colourValues.rgb;
    document.body.style.color = "rgb" + colourValues.cRgb;
    console.log("successfully changed rgb to " + colourValues.rgb);
    console.log("successfully changed crgb to " + colourValues.cRgb);
}

