const array = [];
for (let i = 0; i < 10000; i++) {
    array.push(Math.floor(Math.random() * 101));
}

function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }
    const pivot = array[Math.floor(array.length / 2)];
    const less = [], equal = [], more = [];
    for (let elem of array) {
        if (elem < pivot) {
            less.push(elem);
            continue;
        } if (elem == pivot) {
            equal.push(elem);
            continue;
        }
        more.push(elem);
    }
    return [...quicksort(less), ...equal, ...quicksort(more)];
}

function doSort() {
    const start = Date.now();
    quicksort(array);
    const end = Date.now();
    return `${end - start} ms`;
}


console.log(doSort());