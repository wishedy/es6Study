{
    console.log("a",`\u0061`);
    console.log("s",`\u20BB7`);//这个值已经超过了0xFFF,所以没有按照一个字符 转义
    console.log("s",`\u{20BB7}`);//字符串会直接被转义出来
}
{
    let s = '𠮷';
    console.log('length',s.length);
    console.log('0',s.charAt(0));//取第一个位置的字符
    console.log('1',s.charAt(1));//取第二个位置的字符
    console.log('at0',s.charCodeAt(0));//取第一个位置的字符的码值
    console.log('at1',s.charCodeAt(1));
    let s1 = '𠮷a';
    console.log('length',s1.length);
    console.log('code0',s1.codePointAt(0));//取字符的码值

    console.log('code0',s1.codePointAt(0).toString(16));//取出码值并且转换成16进制字符
}
{
    console.log(String.fromCharCode('0x20bb7'));//容易输出乱码
    console.log(String.fromCodePoint('0x20bb7'));//能处理大于两个字节的字符
}
{
    let str = '\u{20bb7}abc';
    for(let i = 0;i<str.length;i++){
        console.log('es5',str[i]);
    }
    for(let code of str){
        console.log('es6',code);
    }
}
{
    let str= "string";
    console.log("includes",str.includes('r'));//是否包含被判断字符
    console.log("includes",str.includes('c'));
    console.log('start',str.startsWith('str'));//判断字符串是否是以str为起始的
    console.log('start',str.endsWith('ng'));//判断字符串是否是以str为起始的
}
{
    let str = "abc";
    console.log(str.repeat(2));//字符串同步打印两次
}
{
    let name = "list";
    let info  = "hello world";
    let m = `i am ${name},${info}`;
    console.log(m);
}
{
    console.log('1'.padStart(2,'0'));//要求第一个参数长度为2，如果长度不够的时候要补白，补白的内容是第二个参数,头部补白
    console.log('1'.padEnd(2,'0'));//要求第一个参数长度为2，如果长度不够的时候要补白，补白的内容是第二个参数,尾部补白
}
/*标签模板*/
{
    let user = {
        name:"list",
        info:"hello world"
    };
    abc`i am ${user.name},${user.info}`;
    function abc(s,v1,v2) {
        console.log(s,v1,v2);
        return s+v1+v2
    }
}
{
    console.log(String.raw`Hi\n${1+2}`);
    console.log(`Hi\n${1+2}`);//String.raw把转移字符做了普通字符串化处理
}