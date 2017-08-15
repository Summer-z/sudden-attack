/*日期：2017/08/15
  题目：统计数组 arr 中值等于 item 的元素出现的次数
  例如：arr = [1, 3, 7, 1 ,4,] , item = 1,item出现的次数为2
  要求：不要使用for循环*/
let arr = [1,3,7,1,4,1,1,3,2,7];
let item = 1;
function countItem(arr, item) {
    let temp = arr.filter(ele => {
        return ele === item;
    });
    return temp.length;
}
console.log('数组[' + arr + ']中' + item + '出现的次数是：' + countItem(arr, item));