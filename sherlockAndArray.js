function balancedSums(arr) {
    for (let i = 0; i < arr.length; i++) {
        let max1 = 0;
        let max2 = 0;
        // for (let j = 0; j < i; j++) {
        //     max1 += arr[j];
        // }
        max1 = arr.slice(0, i).reduce((a, b) => a + b, 0);
        // for (let j = i + 1; j < arr.length; j++) {
        //     max2 += arr[j];
        // }
        max2 = arr.slice(i + 1).reduce((a, b) => a + b, 0);
        if (max1 === max2) {
            return "YES";
        }
        console.log(max1,max2);
    }
    return "NO";
}

function main() {
    const arr = [1, 1 , 4, 1, 1];
    console.log(balancedSums(arr));
}

main();