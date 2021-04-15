let a:object;
a = {};
a = function (){};

let c:{name:string,age?:number};//?可选属性
c = {name:"twodog"};

let c1:{name:string,[c2:string]:any};//任意类型属性

let c3:number[];//数组
c3 = [1,3,4];
let c4:Array<number>;//数组
c4 = [1,2,3];



