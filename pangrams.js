function pangrams(s) {
    let word = s.split('');
    let result = 'pangram';
    for (let i = 0; i < word.length; i ++) {
        if (word[i].charCodeAt(0) < 96) {
            word[i] = word[i].charCodeAt(0) - 64;
        } else {
            word[i] = word[i].charCodeAt(0) - 96;
        }
    }
    console.log(word);
    for (let i = 1; i< 27; i ++) {
        for (let j = 0; j < word.length; j++) {
            if (i === word[j]) break;
            if (j === word.length - 1) {
                result = 'not pangram';
            }
        }
        if (result === 'not pangram') break;
    }
    return result;
}

function main() {
    const s = 'qmExzBIJmdELxyOFWv LOCmefk TwPhargKSPEqSxzveiun';
    const result = pangrams(s);
    console.log(result);
}

main();