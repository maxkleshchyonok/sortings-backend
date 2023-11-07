const array = [];
for (let i = 0; i < 10000; i++) {
    array.push(Math.floor(Math.random() * 101));
}

function bubbleSort(array) {
    const start = Date.now();
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    const end = Date.now();
    const time = `${end - start} ms`;
    return time;
}

console.log(bubbleSort(array));