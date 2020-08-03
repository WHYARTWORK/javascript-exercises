const repeatString = function(word, repeatNumber) {
    if (repeatNumber < 0) return "ERROR"
    let stst = ''
    for (let i = 0; i < repeatNumber; i++) {
        stst += word
    }
    return stst;
}

module.exports = repeatString
