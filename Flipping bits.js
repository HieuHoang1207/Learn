function flippingBits(n) {
    let bit = [];
    for(let i = 0; i< n.length;i++){
        n[i]= 4294967295-n[i];
        n[i]= n[i].toString(2);
        while (n[i].length < 32) {
            n[i] = '0' + n[i];
        }
        if (n[i].length > 32) {
            n[i] = n[i].slice(-32);
        }
        n[i]= parseInt(n[i], 2);
    }
    return n;
}
function main() {
    const n = [2147483647 , 1 ,0];
    const result = flippingBits(n);
    for(let i = 0; i< n.length;i++){
        console.log(n[i]);
    }
}
main();