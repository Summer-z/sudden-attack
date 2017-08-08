/*日期：2017/08/08
 题目：将一个正整数分解质因数。例如：输入90,打印出90=2335。*/
function main(input) {
    let result;
    let temp = [];
    let start = input;
    for (let i = 2; i <= start; i++) {
        while (input % i === 0) {
            temp.push(i);
            input = input / i;
        }

    }
    result = start + '=' + temp.join('');
    return result;
}
console.log(main(90));