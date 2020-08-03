const fibonacci = function(n) {
    let sequence = [1, 1];
    let x = parseInt(n);
    if (x < 0) return "negatives don't work";
    if (x == 0 || 1) return 1;
    while (x > 1) {
        let newNumber = (sequence[sequence.length -1] + sequence[sequence.length -2]);
        sequence.push(newNumber);
        x -= 1;   
    }
    fib = sequence[n];
    return fib
}

module.exports = fibonacci
