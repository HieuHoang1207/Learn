function pageCount(n, p) {
    let result = 0;
    if (p < n / 2 + 0.1) {
        result = Math.round((p - 1) / 2);
    } else {
        if (n % 2 === 0) {
            result = Math.round((n - p) / 2);
        } else {
            n -= 1;
            result = Math.round((n - p) / 2);
        }
    }
    return result;
}

function main() {
    const n = 13;
    const p = 2;
    console.log(pageCount(n, p));
}

main();