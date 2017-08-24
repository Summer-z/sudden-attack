/*日期：2017/08/22
 题目：计算两个数组的交数组
 注意：理解题意（不是找出在两数组中都存在的元素）
 例如：nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].*/
let arr_1 = [1, 2, 2, 1, 3];
let arr_2 = [4, 2, 2, 1, 5, 9, 1, 3];
function main(arr_1, arr_2) {
    let temp = arr_1.length - arr_2.length;
    let max_str = (temp > 0 ? arr_1 : arr_2).join('');
    let min_str = (temp < 0 ? arr_1 : arr_2).join('');
    let len = min_str.length;
    let result = [];
    for (let i = 0; i < len; i++) {
        for (let j = len; j > 0; j--) {
            let substr = min_str.substr(i, j);
            if (max_str.includes(substr)) {
                result.push(substr.split(''));
            }
        }
    }
    let max_len = 0;
    let arr_result = [];
    result.forEach(arr => {
        if (arr.length > max_len) {
            max_len = arr.length;
            arr_result = arr;
        }
    });
    return arr_result.map(ele => Number(ele));
}
console.log('[' + arr_1 + ']和[' + arr_2 + ']的交数组是：[' + main(arr_1, arr_2) + ']');