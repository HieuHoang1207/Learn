function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice++;
        } else if (a[i] < b[i]) {
            bob++;
        }
    }
    const output = alice + " " + bob;
    return output;
} 

function main() {
    const a = [10, 2, 3, 6];
    const b = [2, 3, 5, 5];
    const result = compareTriplets(a, b);
    console.log(result);
}

main();