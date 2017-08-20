/*日期：2017/08/19
 题目：数组去重
 例如：arr = [‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1], 输出：[‘s’, ‘a’, ‘b’,1,‘1’]*/

function main(arr) {
    let temp =[];
    arr.forEach(ele => {
        if(!temp.includes(ele)) {
            temp.push(ele);
        }
    });
    console.log(temp);
}
main(['s', 'a', 's', 'b', 'a', 1, '1', 1]);
