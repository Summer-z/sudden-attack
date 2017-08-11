/*日期：2017/08/10
 题目：给出链表 1->2->3->3->4->5->3, 和 val = 3, 你需要返回删除3之后的链表：1->2->4->5。
 function XXX(str,val){}
 */
let str = '1->2->3->3->4->5->3';
let val = 3;
function newLink(str, val) {
    let arr = str.split('->');
    let result = [];
    for(let item of arr) {
        if(item !== (''+val)) {
            result.push(item);
        }
    }
    return result.join('->');
}
console.log('给定链表是：' + str + '，给定val是：' + val + '，得到的重组链表是：' + newLink(str, val));