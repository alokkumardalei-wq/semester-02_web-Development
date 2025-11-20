let input="Steve Rogers";

// let split=input.split()
// let arr = split[0];
function greetFirstName(get){

    let hi=get.split(" ");
    let firstname=hi[1];
// let arr = split[1];
console.log('Hi'+" "+firstname);
}
greetFirstName(input);

