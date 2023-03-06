const prompt = require("prompt-sync")({sigint:true});

function test1(x, y) {
    return y - x
}

test1(10, 40)

console.log(test1(10, 40));

function test2(x, y) {
    return x * 2
    console.log(x);
    return x / 2
}

test2(10)

console.log(test2(10));

// CONSIGNA CLASE 5S

