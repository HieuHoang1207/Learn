function flippingBits(n) {
    for( let i = 0; i < n.length; i++) {
        n[i] = 4294967295 - n[i];
    }
    return n;
}

function main() {
    const n = [2147483647 , 1 , 0];
    flippingBits(n);
    for (let i = 0; i < n.length; i++){
        console.log(n[i]);
    }
}

main();