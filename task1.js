
function main(input) {
    let temp = [];
    let start = input;
    for(let i = 2; i<=input; i++) {
        while(input%i===0) {
            temp.push(i);
            input = input/i;
        }

    }
    let result;
    result = start + '=' + temp.join('');
    return result ;
}
console.log(main(90));