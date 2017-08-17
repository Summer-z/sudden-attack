/*日期：2017/08/17
 题目：为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
 例如：arr = [5, 3, 7, 1]; 输出：[25, 9, 49, 1]
 要求：不要使用for，while循环*/
let arr = [5, 3, 7, 1];
function main(arr) {
    return arr.map(ele => Math.pow(ele, 2));
}
console.log(arr + ' => ' + main(arr));