/*日期：2017/08/18
  题目：在数组 arr 中，查找值与 item 相等的元素出现的所有位置
  例如：arr = [1, 3, 7, 1 ,4,] , item = 1，输出：0, 3
  要求：不要使用for，while循环*/
let arr = [1,3,7,1,4,2,3,1,0];
let item = 1;
function findItemIndex(arr, item) {
     let i = 0;
     let result = [];
     arr.forEach(ele => {
         if(ele === item) {
             result.push(arr.indexOf(ele, i));
             i= arr.indexOf(ele, i) + 1;
         }
     });
    return result;
}

console.log(arr + '中' + item + '出现的位置是：' + findItemIndex(arr, item));
