/*日期：2017/08/13
题目：给定一个未排序的整数数组，找到其中位数。
 function XXX(arr){}
 */
let arrOne = [4,1,7,8,19,2,5,26,15];
let arrTwo = [4,1,7,8,9,19,2,5,26,15];
function findMedian(arr) {
    arr.sort(function(a, b) {
        return a-b;
    });
    let len = arr.length;
    if(len % 2 !== 0) {
        return arr[Math.floor(len/2)];
    } else {
        return (arr[len/2] + arr[len/2 - 1]) / 2;
    }
}
console.log('数组[' + arrOne + ']的中位数是：' + findMedian(arrOne));
console.log('数组[' + arrTwo + ']的中位数是：' + findMedian(arrTwo));