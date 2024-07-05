'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
    // Write your code here
    // Validate array size (n)
    const n = ar.length;
    if (n <= 0 || n > 1000) {
        console.log("Invalid input for array size.");
        return null; // 
    }

    // Validate array elements
    for (let i = 0; i < n; i++) {
        if (ar[i] <= 0 || ar[i] > 1000) {
            console.log("Invalid input for array element at index " + i);
            return null; // 
        }
    }

    // Calculate sum of array elements
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += ar[i];
    }

    return sum;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = simpleArraySum(ar);

    ws.write(result + '\n');

    ws.end();
}
