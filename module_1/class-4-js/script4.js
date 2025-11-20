// const greet=function(){
//     console.log("hello");
// };
// greet();


let calculator=function (op1,op2,operator){
    if(operator==="+"){
        console.log(op1+op2);
    }
    else if(operator==="-"){
        console.log(op1-op2);
    }
    else if(operator==="*"){
        console.log(op1*op2)
    }
    else{
        console.log(op1/op2);
    }

}
let a=prompt("Enter a number");
let b=prompt("Enter a number");
let c=prompt("Enter a  operator");
prompt(calculator( a,b ,"c"))