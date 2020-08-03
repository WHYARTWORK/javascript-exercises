const removeFromArray = function(...args) {
    let remove = function (val) {
        return !args.includes(val)
    }
    let base = args[0]
    newinput = base.filter(remove)
    return newinput
}

module.exports = removeFromArray
