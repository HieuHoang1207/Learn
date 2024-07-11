function birthday(s, d, m) {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        sum = 0;
        for (let j = 0; j < m; j++) {
            sum += s[i + j];
            if (sum === d && j === m - 1) {
                count++;
                break;
            }
        }
    }
    return count;
}

function main() {
    const s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
    const d = 18;
    const m = 7;
    const result = birthday(s, d, m);
    console.log(result);
}

main();