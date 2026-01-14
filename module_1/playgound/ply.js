let user=prompt("Enter a number");
let count=0;
for(let i=1;i*i<=user;i++){
if(user%i==0){
    count=count+2;
}
}
if(count==2){
    console.log("is prime")
}
else{
    console.log("not prime")
}

let a=[3,2,4,5];
let max=a[0];
for(let i=1;i<a.length;i++){
    if(a[i]>max){
        max=a[i];
    }
}
a.pop(max);
let max2=a[0];
for(let i=1;i<a.length;i++){
    if(a[i]>max2){
        max2=a[i];
    }
}
console.log(max2);


function isPrime(para){
    let c=0
for(let i=1;i*i<=para;i++){
if(para%i==0){
    c=c+2;
}
}
if(c==2){
    console.log(para);
}
}
isPrime(prompt("Enter a number"));