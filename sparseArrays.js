function matchingStrings(strings, queries) {
    // Write your code here
    let repeat = [];
    for (let i = 0; i < queries.length; i++) {
        repeat[i] = 0;
    }
    for (let i = 0; i < strings.length; i++) {
        for (let j = 0; j < queries.length; j++) {
            if (strings[i] === queries[j]) {
                repeat[j]+=1;
            }
        }
    }
    return repeat;
}

function main() {
    let strings = ['aba', 'baba', 'aba', 'xzxb'];
    let queries = ['aba', 'xzxb', 'ab'];
    const result = matchingStrings(strings, queries);
    for (let i =0; i < result.length; i++) {
        console.log(result[i]);
    }
}

main();