// Code your solution here
function findMatching(arr, s) {
    return arr.filter(element=>element.toLowerCase()===s.toLowerCase())
}

function fuzzyMatch(arr, s) {
    var l = s.length
    return arr.filter(element=>element.slice(0,l)===s)
}

function matchName(arr, s) {
    return arr.filter(element=>element.name===s)
}