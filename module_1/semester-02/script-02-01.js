console.log("start");
function test(){
    console.log("Inside the function");
}
test();
console.log("end");


// if(true){
//     var a=10; // var abhi global function scoped hai || Dangerous in real life projects, becuase acessible outside which creates issues while debugging as it logically incoreect.
//     // therefore prefer let & const while working with real 

//     let =20;
//     const c=30;
// }
// console.log(a);
// console.log(b);
// console.log(c);
//var---> functional scope
// let & const ---> block scoped


let value=10;
function display(){
    let value=20;
    console.log(value);
}
display();
console.log(value);