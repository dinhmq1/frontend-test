// For numbers, 1 to n..., console log 'fizz' if number is divisible by 3, 
// 'buzz' is divisible by 5, and 'fizzbuzz' if divisible by both 3 and 5

function fizzbuzz(n) {
    console.log('n = ' + n);
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}
fizzbuzz(35);