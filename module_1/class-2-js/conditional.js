let weather="rainy";
if(weather==="rainy"){
    console.log("Take an umbrella")
}
else{
    console.log("Enjoy the sunshine");
}


let marks=prompt("Pls enter marks");
marks=  Number(marks);
if(!(marks>=0 && marks<=100)){
console.log("Theek marks batao");
}
else{

if(marks<=90){
    if(marks===90){
        console.log("A");
    }
    else if( marks>=80){
        console.log("B");
    }
    else if( marks>=70 ){
        console.log("C");
    }
    else if( marks>=60){
        console.log("D");
    }
    else{
        console.log("F")
    }
}
else{
    console.log("A");
}
}