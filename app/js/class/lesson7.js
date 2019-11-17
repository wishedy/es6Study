/*
* 函数扩展
* */
{
    function test(x,y) {
        console.log(x,y);//打印x,y的默认值，
    }
    function f(x,y='word') {
        console.log(x,y);
    }
    function t(x,y='word',z){
        //这是一种错误的书写形式
    }
}
{
    let x = 'test';
    function test2(x,y=x) {
        console.log(x,y);//x取得是函数的传值，而不是上面的值
    }
    test('kill');
}
{
    let x = 'test';
    function test3(c,y=x) {
        console.log(x,y);//x取得是上面的值
    }
    test('kill');
}
{
    function test4(...arg) {
        for(let v of arg){
            console.log('rest',v)
        }
    }
    test4(1,2,3,4,'a');//将所有的参数转换成一个数组
}
{
    console.log(...[1,2,4]);//把数组转换成离散的值
}
{
    let arrow = v=>v*2;
    console.log(arrow(3));//arrow是一个函数函数返回传值的二倍，前面是参数，后面是返回值，arrow是函数名

}
{
    let arrow2 = ()=>5;
    console.log(arrow2(3));//没有传值的时候返回值
}
{
    //伪调用
    function tail(x) {
        console.log('tail',x);
    }
    function fx(x) {
        return tail(x);
    }
    fx(123);
}