
exports.min = function min (array) {
    let arraySorted;
    if (array === undefined || array.length === 0) {
        return 0;
    }
    arraySorted = quickSort(array);
    return arraySorted[0];
}

exports.max = function max (array) {
    let arraySorted;
    if (array === undefined || array.length === 0) {
        return 0;
    }
    arraySorted = quickSort(array);
    return arraySorted[array.length-1];
}

exports.avg = function avg (array) {
    let arraySum = 0;

    if (array === undefined || array.length === 0) {
        return 0;
    }

    for (let i = 0; i < array.length; i++) {
        arraySum += array[i];
    }

    return arraySum / array.length;
}


function quickSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}
