//PROMISES


function walkdog(callback){
    setTimeout(()=>{
console.log("yOU WALK THE DOG")
callback();
    },1500);
    
};

function cleanTheKitchen(callback){
    setTimeout(() =>{
console.log("Cleaned the kitchen");
callback();
    },3000);
};
function takeOutTrash(callback){
    setTimeout((c)=>{
        console.log("Take out trash")
        callback();
    },500);
};
walkdog(cleanTheKitchen());