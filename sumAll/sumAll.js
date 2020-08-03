const sumAll = function(x, y) {
    if ( (typeof(x) != 'number') || (typeof(y) != 'number') ) return "ERROR";
    if (x<0 || y<0) return "ERROR";
    let small;
    let large;
    if (x < y) {
        small = x;
        large = y;
    } else {
        small = y;
        large = x;
    }
    let current = 0;
    for (let i=small; i <= large; i++) {
        current += small;
        small += 1;
    }
    return current
    

     
}

module.exports = sumAll
