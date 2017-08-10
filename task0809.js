/*日期：2017/08/09
 题目：查找斐波纳契数列中第 N 个数。
 所谓的斐波纳契数列是指：
 前2个数是 0 和 1 。
 第 i 个数是第 i-1 个数和第i-2 个数的和。
 斐波纳契数列的前10个数字是：
 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 …*/
function Fibonacci(N) {
    let array = [];
    for(let i = 0; i < N ; i++) {
        if(i<2) {
            array.push(i);
        } else{
            let j = array[i-1] + array[i-2];
            array.push(j);
        }
    }
    console.log('斐波纳契数列中第'+ N +'个数是：'+ array[array.length-1]);
}
Fibonacci(20);