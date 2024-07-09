function timeConversion(s) {
    if (s.startsWith('12') && s[8] === 'P') {
        //s= 'hello';
        s = '00' + s.substring(2);
    } else if (s[8] === 'P') {
        var Conv = '';
        Conv = s[0] + s[1];
        Conv = parseInt(Conv);
        Conv += 12;
        Conv = Conv.toString();
        s = Conv + s.substring(2);
        }
    s = s.slice(0, 8);
    const output = s;
    return output;
}

function main() {
    const s = '12:45:54PM';
    const result = timeConversion(s);
    console.log(result);
}

main();