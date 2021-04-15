"use strict";
let b;
b = "female";
b = "male";
let s;
let d; //关闭了类型检测
let f; //默认了any类型，隐藏的
s = d; //s的类型跟d一样了，
let e; //未知类型的值，不能
e = 10;
e = "hello";
e = true;
if (typeof e === "string") {
    s = e; //加一个类型判断
}
function fn() {
}
function f1() {
    return true;
}
function f2() {
    return null;
}
function f3() {
    return null;
}
function f4() {
    return null;
}
