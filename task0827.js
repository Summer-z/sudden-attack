/*日期：2017/08/27
 题目：
 给定编码如下，给出一个整数,返回解码方法的种数；
 例如：
 给你的数12，有两种方式解码 AB(12) 或者 L(12). 所以返回 2
 1-> 'A’
 2-> ‘B’
 …
 26-> ‘Z’*/
let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '请输入数字>'
});
rl.prompt();
rl.on('line', function (line) {
    let n = parseInt(line);
    let count = 0;
    if (n <= 10 || n === 20) {
        count++;
    } else if (n > 10 && n <= 26) {
        count += 2;
    } else if (n > 26 && n % 10 !== 0) {
        count += 2;
    }
    console.log(`您输入的数字的解码方式有：${count}种`);
    rl.prompt();
});
rl.on('SIGINT', () => {
    rl.question('确定要退出吗？ ', (answer) => {
        if (answer.match(/^y(es)?$/i)) rl.pause();
    });
});