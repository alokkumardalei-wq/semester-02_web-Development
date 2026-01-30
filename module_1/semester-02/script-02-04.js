// Synchrounous code

console.log("Before");
function fun(){
    console.log("Alok");
}
fun();
console.log("After");

// Asyncgronous code

console.log("Before");
function f(){
    console.log("I am f");
}
setTimeout(fun,400); //delegated to browser through we APIs
console.log("After")
// GEC will be relaease and JS callstack is free and then web api will be executed

let i=0;
let id=setInterval (()=>{
    console.log("I am inside interval" ,++i);
if(i==3){
    
}
 },1000) 
