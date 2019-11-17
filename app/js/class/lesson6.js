/*数组的扩展方法
* */
{
    let arr = Array.of(3,4,7,8,11);//结果是直接将内容输出为一个数组，如果里面不放任何的参数，结果是一个空数组
}
{
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);//把一个类数组转换成一个真正的数组
    pArr.forEach(function(item){
        console.log(item.textContent);
    });
    console.log(Array.from([1,3,5],function (item) {
        return item*2
    }));// 返回一个新数组
    console.log([1,'a',undefined].fill(7));//整个数组的每一个元素都会变成7
    console.log(['a','b','c'].fill(7,1,3));//从下标1开始替换相应的内容3-1=2，['a',7,7]
    for(let index of ['1','c','ks'].keys()){
        console.log(index);//获取索引
    }
    for(let value of ['1','2','3'].values()){
        console.log(value);//获取对应的值
    }
    for(let [index,value] of ['1','2','3'].entries()){
        console.log(index,value);//即获得索引又获得值
    }
    console.log([1,2,3,4,5].copyWithin(0,3,4));//从0开始替换，从下标是3的位置开始，也就是4，到下标为4结束，但是不包含这个值
    console.log([1,2,3,4,5].find(function (item) {
        return item>3;
    }));//找出第一个符合条件的元素
    console.log([1,2,3,4,5,6].findIndex(function (item) {
        return item>3;
    }));//道理同上，但是返回的是下标值
    console.log([1,2,NaN].includes(1));//是否包含
    
}