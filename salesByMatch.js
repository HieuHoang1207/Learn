function sockMerchant( ar) {
    let result = 0;
    ar.sort((a, b) => a - b);
    console.log(ar);
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === ar[i+1]) {
            result++;
            ar.splice(i+1, 1);
        }
    }
    return result;
}

function main() {
    const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
    console.log(sockMerchant(ar));
}

main();