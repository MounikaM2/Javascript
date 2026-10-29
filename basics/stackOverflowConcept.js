function test() {
    console.log("This is a test function");
    pop();
}
function pop() {
    console.log("This is a pop function");
    test();
}
 test(); //maximum call stack size exceeded
 