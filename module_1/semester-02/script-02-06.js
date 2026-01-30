const cart=["shirt","trousers","shoes","shades"];
const promise=createOrder(cart); // An async function -orderID

//Consume

promise.then(function(orderId){
    // promise is fullfiled
    console.log(orderId);
})

//Creation of promise /bckend side/producer side
function createOrder(cart){
    function validateCart(){
        return true;
    }
        //craeateOrder called
        //validate the cart (check in stock)
        // return orderId
const pr=new Promise("Cart is invalid");
        //Fail first approach
        if(!validateCart(cart)){
const err=new Error("Cart is invalid")
reject(err)
        }

        //logic for createOrder
        const oderId="1110101"
        if(orderId){
            setTimeout(function (){
                //mimicking Be jobs
                resolve(orderId);

            },5000)
        }

    }


