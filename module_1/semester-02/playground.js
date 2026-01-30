
fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    function(response){
        console.log(response);
        if(response.status==200){
            response.json();
            console.log(response.json());
        }
        else{
            alert("Data not found!");
        }
    },
);