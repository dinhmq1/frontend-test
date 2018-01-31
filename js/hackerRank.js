function hackerRank(n) {
    for(var i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 7 === 0) {
            console.log('HackerRank');
        } else if (i % 3 === 0){
            console.log('Hacker');
        } else if (i % 7 === 0) {
            console.log('Rank')
        } else {
            console.log(i);
        }
    }
}
var hacker = hackerRank(7);

console.log(hacker);