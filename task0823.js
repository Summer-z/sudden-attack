/*日期：2017/08/23
 题目：给定一个数组，该数组中的每个元素要么是个数组，要么是整数。将其变成一个只包含整数的简单数组。
 给定 [1,2,[1,2]]，返回 [1,2,1,2]。
 给定 [1,2,[1,2],[3,4]]，返回 [1,2,1,2,3,4]。
 给定 [4,[3,[2,[1]]]]，返回 [4,3,2,1]。*/


function reduceArr(arr) {
    /*递归的方法，不是很好
    return arr.reduce((sum, ele) => {
        if(isNaN(ele)) {
            ele = reduceArr(ele);
        }
        return sum.concat(ele);
    }, []);*/
    /*toString()或者join()可以直接将数组转换成字符串*/
    return arr.toString().split(',').map(ele => Number(ele));
}
console.log(reduceArr([1,2,[1,2]]));
console.log(reduceArr([1,2,[1,2],[3,4]]));
console.log(reduceArr([4,[3,[2,[1]]]]));