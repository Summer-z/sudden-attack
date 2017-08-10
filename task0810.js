/*日期：2017/08/10
 题目：给出2*n + 1 个的数字(数组)，除其中一个数字之外其他每个数字均出现两次，找到这个数字。
 eg: function findNum(arr){ ... }
 */
function findKey(array, element) {
    for(let item of array) {
        if(item.key === element) {
            return item;
        }
    }
    return false;
}

function findNum(arr) {
    let temp = [];
    let count = 1;
    for(let item of arr) {
        if(!findKey(temp, item))   {
            temp.push({key: item, count});
        } else {
            findKey(temp, item).count++;
        }
    }
    for(let item of temp) {
        if(item.count === 1) {
            console.log('数组[' + arr + ']中只出现了一次的数字是：' + item.key);
        }
    }
}
findNum([2,7,2,0,3,7,3,6,8,6,8]);