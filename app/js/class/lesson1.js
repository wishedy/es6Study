function test(){
    for(var a = 1;a<3;a++){
        console.log(a);
    }
    console.log(a);
    for(let i = 1;i<3;i++){
        console.log(i);
    }
    //在代码中用{}包起来的可以理解为一个块作用域，let的适用范围就是块作用域
    //es6代码是强制开启了严格模式的，如果在es5代码中需要开启严格模式，需要在代码第一行，写上"use strict"
    //console.log(i);//let定义的i仅限与循环内使用，此时如果执行会报错
    //使用let定义一个变量不能再次重复定义
}
test();