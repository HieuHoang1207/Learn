function plusMinus(arr) {
    // Write your code here
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else zero++;
    }
    const output = (positive / arr.length).toFixed(6) + "\n" + (negative / arr.length).toFixed(6) + "\n" + (zero / arr.length).toFixed(6);
    return output;
}

function main() {
    const arr = [-4, 3, -9, 0, 4, 1];
    const result = plusMinus(arr);
    console.log(result);
}

main();