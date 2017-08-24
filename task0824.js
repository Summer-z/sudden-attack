/*日期：2017/08/24
 题目：
 实现一个left-pad函数
 leftpad功能，就是字符串前面拼指定字符到固定长度，比如
 leftpad(‘hello’,20,‘1’)，就要返回’111111111111111hello’
 三个参数，
 第一个：当前字符串；
 第二个：需要返回字符串的长度
 第三个：用来拼接的字符串*/
function leftPad(str1, len, str2) {
    let strLen1 = str1.length;
    let strLen2 = str2.length;
    let a = Math.floor((len-strLen1)/strLen2);
    let b = (len-strLen1)%strLen2;
    let result = '';
    for(let i=0; i<a; i++) {
        result += str2;
    }
    result += str2.slice(0, b) + str1;
    return result;
}
console.log("输入'hello',20, '12'" + ' => ' + leftPad('hello', 20, '12'));
console.log("输入'hello',20, '1'" + ' => ' + leftPad('hello', 20, '1'));
console.log("输入'hello',20, '123'" + ' => ' + leftPad('hello', 20, '123'));
