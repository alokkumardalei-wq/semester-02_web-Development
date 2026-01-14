// Functional Declarartions
// 1)Using Arguments
function greet(a){
    console.log("Hello",arguments[2]+arguments[1])
}
// greet("ALOK");
// greet();
// greet("Alok","b");
greet(1,2,3,4,"ABC",true,11)


function noOfArg(){
    console.log(arguments.length);
}
noOfArg(0,1,1,11,111,111);

//Rest Operator 

function arg(...rest){
    console.log(rest);
}
arg(0,1,2,3,4)



 function discount(a,b){
    if(b>=10){
        let totalprice=a*b;
        let dis=10/100;
        let price=totalprice-(dis*totalprice);
        let gst=18/100;
        let finalamount=(gst*price)+price;
     return finalamount;  
}
    else{
        let totalamount=a*b;
       return totalamount;
    }
 }
discount(500,25);

 let x=discount(500,25);
 console.log(x);

 const rep= function(a,b){
    let totalprice=a*b
    if(b>=10){
let dis=10/100;
        let price=totalprice-(dis*totalprice);
        let gst=18/100;
        let finalamount=(gst*price)+price;
        return finalamount;  
    }
    else{
        return totalprice;
    }
 }
let s= rep(500,30);
console.log(s);
 const xero=(a,b)=>{
    
    if(b>=10){
        let totalprice=a*b
        let dis=10/100;
        let price=totalprice-(dis*totalprice);
        let gst=18/100;
        let finalamount=(gst*price)+price;
     return finalamount;  
    }
    else{
        return a*b;
    } 
 }
let d=xero(500,40)
console.log(d);

let y=10;
 function outer(){
    let y=20;
    function inner(){
        console.log(y);
    }
    inner();
 }
 outer();


 function multiply(a,b){
    return a*b;
 }
let product=multiply(4,5);
console.log(product);

const multi=function (a,b) {
return a*b;
}
let product2=multi(10,20);
console.log(product2);

let mul=(a,b)=>a*b;

let product3=mul(30,40);
console.log(product3);