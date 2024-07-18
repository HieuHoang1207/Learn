function twoArrays(k, A, B) {
    let result = 'YES';
    // for (let i = 0; i < A.length; i++) {
    //     for (let j = 0; j < A.length; j++) {
    //         if (A[j] > A[j + 1]) {
    //             let conversion = A[j];
    //             A[j] = A[j + 1];
    //             A[j + 1] = conversion;
    //         }
    //     }
    // }
    A.sort((a, b) => a - b);
    console.log(A);
    // for (let i = 0; i < B.length; i++) {
    //     for (let j = 0; j < B.length; j++) {
    //         if (B[j] < B[j + 1]) {
    //             let conversion = B[j];
    //             B[j] = B[j + 1];
    //             B[j + 1] = conversion;
    //         }
    //     }
    // }
    B.sort((a, b) => b - a);
    console.log(B);
    for (let i = 0; i < B.length; i++) {
        if (A[i] + B[i] < k) {
            result = 'NO';
            break;
        }
    }
    const output = result;
    return output;
}

function main() {
    const A = [7, 10, 14, 2, 1, 3, 6];
    const B = [7, 8, 9, 14, 2, 1, 1];
    const k = 11;
    const result = twoArrays(k, A, B);
    console.log(result);
}

main();