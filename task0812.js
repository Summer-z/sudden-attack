/*日期：2017/08/12
 题目：打印出所有的"水仙花数"，
 所谓"水仙花数"是指一个三位数，其各位数字立方和等于该数本身。
 例如：153是一个"水仙花数"，因为153=1的三次方＋5的三次方＋3的三次方。
 */
function main() {
    let array = [];
    for (let i = 100; i < 1000; i++) {
        array.push(i);
    }
    console.log('所有的水仙花数是：' + array.filter((ele) => {
            let a = Math.floor(ele / 100);
            let b = Math.floor((ele - a * 100) / 10);
            let c = Math.floor(ele - a * 100 - b * 10);
            return ele === a * a * a + b * b * b + c * c * c;
        }));
}

main();