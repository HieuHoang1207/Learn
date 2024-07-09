function miniMaxSum(arr) {
    // Write your code here
    let max = 0;
    let min = arr[0];
    let minsum;
    let maxsum;
    for (let i = 0; i < 5; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i];
        }}
    minsum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] - max;
    maxsum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] - min;
    const output = minimum + " " + maximum;
    return output;
}

function main() {
    const arr = [-4, 3, -9, 0, 4];
    const result = miniMaxSum(arr);
    console.log(result);
}

main();