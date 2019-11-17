{
    let  regex = new RegExp('xyz','i');
    let regex2 = new RegExp(/xyz/i);
    console.log(regex.test('xyz123'),regex2.test("xyz123"));
    let regex3  = new RegExp(/xyz/ig,'i');//可以同时输入两个参数ig,i但是这时候i会直接将ig的参数覆盖掉
    console.log(regex3.flags);
}
{
    let  s = "bbb_bb_b";
    let a1 = /b+/g;
    let a2 = /b+/y;
    console.log('one',a1.exec(s),a2.exec(s));
    console.log('two ',a1.exec(s),a2.exec(s));//reg.sticky(判断一个正则对象是否开启y匹配)
}
{
    console.log('u-1',/^\uD83D/.test("\uD83D\uDC2A"));//后面的字符是按照两个字符处理的
    console.log('u-2',/^\uD83D/u.test("\uD83D\uDC2A"));//u修饰符把后面匹配的字符当做一个字符处理
    console.log(/u{61}/.test('a'));
    console.log(/u{61}/u.test('a'));
    //处理长度大于两个字节的字符串用U
    //s修饰符
}