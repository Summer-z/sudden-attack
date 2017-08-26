/*日期：2017/08/26
 题目：
 给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：
 如果这个数被3整除，打印fizz.
 如果这个数被5整除，打印buzz.
 如果这个数能同时被3和5整除，打印fizz buzz.*/
let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '请输入数字>'
});
rl.prompt();
rl.on('line', function (line) {
    let n = parseInt(line);
    let result = '';
    if (n % 3 === 0 && n % 5 !== 0) {
        result = 'fizz';
    } else if (n % 5 === 0 && n % 3 !== 0) {
        result = 'buzz';
    } else if (n % 5 === 0 && n % 3 === 0) {
        result = 'fizz buzz';
    } else {
        result = 'Sorry, it is not the number we need';
    }
    console.log(result);
    rl.prompt();
});
rl.on('SIGINT', () => {
    rl.question('确定要退出吗？ ', (answer) => {
        if (answer.match(/^y(es)?$/i)) rl.pause();
    });
});
