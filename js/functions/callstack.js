// example of too much recursion

function chicken() {
    return egg();
}
function egg() {
    return chicken();
}

console.log(chicken() + " came first.");