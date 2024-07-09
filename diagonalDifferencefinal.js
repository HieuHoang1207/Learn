function diagonalDifference(arr) {
    // Write your code here
    let sumrow = 0;
    let sumcol = 0;
    let location = 0;
    for( let i = 0; i < arr.length; i++) {
        sumrow += arr[i][i];
        location = arr.length - 1 - i;
        sumcol += arr[i][location];
    }
    const signal = sumcol - sumrow;
    return Math.abs(signal);
}

function main() {
    const matrix = [
        [10, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    const result = diagonalDifference(matrix);
    console.log(result);
}

main();
