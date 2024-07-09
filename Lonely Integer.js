function lonelyinteger(a) {
    let lonelyinteger = 0;
    for(let i =0; i<a.length;i++){
        let twice = 0;
        for(let j =0; j<a.length;j++){
            if(a[i]===a[j]){
                twice++;
            }
            if(j===a.length-1){
                if(twice===1){
                    lonelyinteger=a[i];
                    break;
                }
            }
        }
    }
    return lonelyinteger;
}
function main() {
    const a = [1,2,3,4,3,2,1];
    const result = lonelyinteger(a);
    console.log(result);
}
main();