function countingSort(arr) {
    let result = [];
    for (let i = 0; i < 100; i ++){
        result[i] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        result[arr[i]]++;
    }
    const output = result;
    return output;
}

function main() {
    const n = 3;
    const arr = [1, 1, 3, 2, 1];
    const result = countingSort(arr);
    console.log(result);
}

main();