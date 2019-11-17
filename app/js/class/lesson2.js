{
    let a,b,rest;
    [a,b]=[1,2];
    console.log(a,b);//1,2
}
{
    let a,b,rest;
    [a,b,...rest]=[1,2,3,4,5,6];
    console.log(a,b,rest);//1,2,[3,4,5,6]
}
{
    let a,b;
    ({a,b}={a:1,b:2});
    console.log(a,b);//1,2
}
{
    let a,b,c,rest;
    [a,b,c=3]=[1,2];
    console.log(a,b,c);//1,2,3,//解构赋值的默认值3
}
{
    let a = 1;
    let b = 2;
    [a,b] = [b,a];
    console.log(a,b);
}
{
    let a,b;
    function f() {
        return [1,2];
    }
    [a,b] = f();
    console.log(a,b);//1,2,这样就不用分别写两行代码，分别接受返回值，以此类推，并且可读性更强
}
{
    let a,b;
    function t(){
        return [1,2,3,4,5];
    }
    [a,,,b,,] = t();
    console.log(a,b);//1,4解构赋值对应的结构位置是一一对应的
}
{
    let a,b;
    function t(){
        return [1,2,3,4,5];
    }
    [a,...b] = t();
    console.log(a,b);//1,[2,3,4,5]
}
/*以上是数组的解构赋值*/
{
    let o = {p:42,q:true};
    let {p,q} = o;
    console.log(p,q);
}
{
    let {a=1,b=2} = {a:3};
    console.log(a,b);
}
{
    let meatData = {
        "title":"abc",
        "test":[{
            "title":"test",
            "desc":"description"
        }]
    };
    let {title:esTitle,test:[{
        title:cnTitle
    }]} = meatData;
    console.log(esTitle,cnTitle);
}
