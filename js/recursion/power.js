// A function that calls itself is called recursive

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(6, 9));