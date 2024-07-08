
function timeConversion(s) {
    // Write your code here
    if(s[0]==='1'&&s[1]==='2'){
        s = '0' + '0' + s.substring(2);
     }else{
    if(s[8]==='P'){
        
            var x = '';
        x = s[0] + s[1];
        x = parseInt(x);
        x+=12;
        x = x.toString();
        s= x.substring(0, 2) + s.substring(2);
        }
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