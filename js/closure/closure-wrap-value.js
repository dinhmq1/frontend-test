function wrapValue(n) {
    var localVariable = n;
    return function() {
        return localVariable;
    };
}
var wrap1 = wrapValue('wrap 1');
var wrap2 = wrapValue('wrap 2');
console.log(wrap1());
console.log(wrap2());
