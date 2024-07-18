function gridChallenge(grid) {
    //let n = s.charCodeAt(i);
    let result = new Array(grid.length);
    console.log(grid[0].length);
    for (let i = 0; i < grid.length; i++) {
        result[i] = new Array(grid.length);
        for (let j = 0; j <grid[0].length; j++) {
            result[i][j] = grid[i].charCodeAt(j);
        }
        result[i].sort((a, b) => a - b);
    }
    console.log(result);
    for (let i = 0; i < grid[0].length; i++) {
        for (let j = 0; j <grid.length - 1; j++) {
            if (result[j][i] > result[j+1][i]) {
                console.log("NO");
                return "NO";
            }
        }
        result[i].sort((a, b) => a - b);
    }
    console.log(result);
    return "YES";
}

function main() {
    //Cho mảng vuông
    //sắp xếp hàng của mảng từ bé đến lớn
    //So sánh từng cột, nếu phần tử ở trên lớn hơn phần tử ở dưới thì in ra NO, còn ngược lại thì in ra YES
    //(tất cả phần tử ở trên nhỏ hơn hoặc bẳng ở dưới thì in ra YES)
    const grid = ['eabcd','fghij','olkmn','trpqs','xywuv'];
    console.log(gridChallenge(grid));
}

main();