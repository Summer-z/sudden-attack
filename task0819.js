/*日期：2017/08/18
 题目：数组去重
 例如：arr = [‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1], 输出：[‘s’, ‘a’, ‘b’,1,‘1’]*/

let arr = ['s', 'a', 's', 'b', 'a', 1, '1', 1];
function main(arr) {
    let temp =[];
    arr.forEach(ele => {
        if(!temp.includes(ele)) {
            temp.push(ele);
        }
    });
    return temp;
}
console.log('数组[' + arr + ']去重后输出的数组是：[' + main(arr) + ']');