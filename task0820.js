/*日期：2017/08/20
 判断一个字符串中出现次数最多的字符，并统计次数
 例如：str = ‘abcsbaddbizdbas’,输出：{b：4}
 例如：str = ‘aaaaabbdbdbb’，输出：{a：5，b：5}*/

let str = 'abcsbaddbizdbas';

function count(str) {
    let arr = str.split('');
    let temp =[];
    arr.forEach(ele => {
        if(temp[ele]) {
            temp[ele]++;
        } else {
            temp[`${ele}`] = 1;
        }
    });
    let result = [];
    let obj = {};
    let count = 0;
    for(item in temp) {
        if(temp[item] > count) {
            count = temp[item];
            result = [{key: item, count}];
        } else if(temp[item] === count) {
            result.push({key: item, count});
        }
    }
    result.forEach(ele => {
        obj[ele.key] = ele.count;
    });
    return obj ;
}
console.log(count(str));