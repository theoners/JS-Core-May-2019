function solve(array, firstIndex, lastIndex) {
    if (!Array.isArray(array) || array.find(x => isNaN(Number(x)))) {
        return NaN;
    }
    if (firstIndex < 0) {
        firstIndex = 0;
    }
    if (array.length === 0) {
        return 0;
    }
    return array.slice(firstIndex, lastIndex+1).reduce((a, b) => a + b);
}
