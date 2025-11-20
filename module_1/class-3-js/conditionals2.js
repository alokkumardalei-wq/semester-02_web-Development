let isHungry=true;
let action=isHungry?"Eat":"Work";
console.log(action);

let day="Thursday";

switch(day){
    case "Monday":console.log("H");
    
    case "Tuesday":console.log("H");
    case "Wednesday":console.log("H");
    case "Thursday":console.log("H");break;
    default:console.log("No day");
}

let marks=81;


switch(true){
    case marks>=90:console.log("A");break;
    case marks>=80:console.log("B");break;
    case marks>=70:console.log("C");break;
    case marks>=60:console.log("D");break;
    default:console.log("F");
}
