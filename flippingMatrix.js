function flippingMatrix(matrix)  {
    let result = 0;
    let loc = matrix.length;
    for (let i = 0; i < loc / 2; i++) {
        for (let j = 0; j < loc / 2; j++) {
            result += Math.max(matrix[i][j], matrix[i][loc - 1 - j], matrix[loc - 1 - i][j], matrix[loc - 1 - i][loc - 1 - j]);
            console.log("i ="+i+", j ="+j);
            console.log(result);
        }
    }
    return result;
}

function main() {
    //i là cột, j là hàng
    const matrix = [
        [112, 42, 83, 119, 112, 42, 83, 119],
        [56, 125, 56, 49, 56, 125, 56, 49],
        [15, 78, 101, 43, 15, 78, 101, 43],
        [62, 98, 114, 108, 62, 98, 114, 108],
        [112, 42, 83, 119, 112, 42, 83, 119],
        [56, 125, 56, 49, 56, 125, 56, 49],
        [15, 78, 101, 43, 15, 78, 101, 43],
        [62, 98, 114, 108, 62, 98, 114, 109]
    ];
    console.log(flippingMatrix(matrix) );
}

main();