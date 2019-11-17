class Test {
    constructor(){
        const _this = this;
        _this.a = `hello world`;
    }
}
let test= new Test();
document.body.innerHTML = test.a;