const input=document.querySelector("#imp");
const search=document.querySelector("#button");
search.addEventListener("click",function(){

console.log(input);
input.textContent="";

function x(){
async function fn() {
        console.log("Inside function");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1",
        );
        console.log(response);
        const jsonData = await response.json();
        console.log("Bottom of fn")

      }


      fn();
}
x();

})