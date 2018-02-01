// function wrapValue(n) {
//     var localVariable = n;
//     return function() {
//         return localVariable;
//     };
// }
// var wrap1 = wrapValue('wrap 1');
// var wrap2 = wrapValue('wrap 2');
// console.log(wrap1());
// console.log(wrap2());

// slight tweak

// The explicit localVariable from the wrapValue example isn't needed
// since a parameter is itself a local variable.

// A good mental model is to think of the function keyword as 'freezing'
// the code in its body and wrapping it into a package (the function value).
// so when you read return function(...) {...}, think of it as returning a
// a handle to a piece of computation, frozen for later use.

function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

var twice = multiplier(2);
console.log(twice(5));

// In the example, multiplier returns a frozen chunk of code that gets stored
// in the twice variable. The last line then calls the value in this variable,
// causing the frozen code (return number * factor;) to be activated. It still 
// has access to the factor variable from the multiplier call that created it, 
// and in addition it gets access to the argument passed when unfreezing it, 5,
// through its number parameter.