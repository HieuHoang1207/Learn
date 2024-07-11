function birthday(s, d, m) {
    let drepl = d;
    let mrepl = m;
    let result = 0;
    let save = s.slice(0, 7);;
    //sắp xếp chuỗi từ lớn đến nhỏ
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (s[j] < s[j + 1]) {
                let conversion = s[j];
                s[j] = s [j + 1];
                s[j + 1] = conversion;
            }
        }
    }
    let replication = s.slice();
    console.log(replication);
    for (let j = 0; j < replication.length; j++) {
        s = replication.slice();
        d = drepl;
        m = mrepl;
        for (let i = j; i < s.length; i++) {
            if (d - s[i] - m + 1 < 0) {
                deletefalse(s, s[i], i, d, m);
            }
            if (d - s[i] > 0) {
                d -= s[i];
                m -= 1;
            }
            if (d - s[i] === 0 && m === 1) {
                if (arraysEqual(save, s.slice(j, j + 7) && i != 0) === true) {
                    break;
                } else {
                    save = s.slice(j, j + 7);
                    result++;
                    console.log("result="+result);
                    console.log("Mảng phù hợp");
                    console.log(s.slice(j, j + 7));
                    break;
                }
            }
        }
    }
    const output = result;
    return output;
}

function deletefalse(s, value, location, d, m) {
    for (let i = location; i < s.length;) {
        if (value === s[i]) {
            s.splice(i, 1);
            if (d - s[i] >= m - 1 ) {
                break;
            } else {
                value = s[i];}
        } else {
            console.log(s)
            break;
        }
    }
}

function arraysEqual(arr1, arr2) {
    return arr1.every((value, index) => value === arr2[index]);
}

function main() {
    const s = [2, 2, 2, 1, 3, 2, 2, 3, 3, 1, 4, 1, 3, 2, 2, 1, 2, 2, 4, 2, 2, 3, 5, 3, 4, 3, 2, 1, 4, 5, 4];
    const d = 18;
    const m = 7;
    const result = birthday(s, d, m);
    console.log(result);
}

main();