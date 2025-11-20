// for
for(let i=1;i<=10;i++){
    console.log(i);
}
let rows=5
let nst=rows;
for(let i=rows;i>=1;i--){
    let str="";
    for(let j=1;j<=nst;j++){
         str+=j;
    }
    console.log(str);
nst--;
}

let ro=4;
let spaces=ro-1;
for(let i=1;i<=ro;i++){
    for(let j=1;j<=spaces;j++){
        let str=" ";
        str+=j;

    }
    for(let j=1;j<=(2*i)-1;j++){
        let st="*"; 
    st+=j;
    }
    
}