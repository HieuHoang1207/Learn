function caesarCipher(s, k) {
    let result = ""
    if (k > 26) {
        for (; k > 26; k -= 26) {}
    } 
    console.log(k);
    for (let i = 0; i < s.length; i++) {
        let n = s.charCodeAt(i);
        if ((n <= 122 && n >= 97) || (n <= 90 && n >= 65)) {
            console.log(n);
            if (n + k > 122) {
                n -= 26;
                console.log(">122");
            } else {
                if (n + k > 90 && n <= 90) {
                    console.log(">90");
                    n-= 26;
                } 
            }
            n = String.fromCharCode(n + k);
            result += n;
        } else result += s[i];
    }
    return result;
}

function main() {
    const s = "z";
    const k = 3;
    console.log(caesarCipher(s, k));
    console.log("159357fwzx");
}

main();