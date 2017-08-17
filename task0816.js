/*日期：2017/08/16
 题目：找出数组 arr 中重复出现过的元素
 例如：arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’
 */
let arr = ['a','ab','ed','da','a','ed','b'];
function findArr(arr) {
    // let temp =[];
    // let result = [];
    // arr.forEach(ele => {
    //     if(temp.includes(ele)) {
    //         result.push(ele);
    //     } else {
    //         temp.push(ele);
    //     }
    // });
    // return result;
    /*进阶方法：*/
    let result = arr.filter((ele) => {
       return arr.lastIndexOf(ele) !== arr.indexOf(ele);
    });
    return [...new Set(result)];
}
console.log('数组[' + arr + ']中重复出现的元素是：' + findArr(arr));