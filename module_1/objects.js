//Objects are key value pair.
var person={
    firstname:'Alok',
    lastname:"Dalei",
    age:19

}
console.log(person);

// dot notation

console.log(person.age);

// bracket notation.

console.log(person['age']);

var iron={
    firstname:'Tony',
    lastname:'Stark',
    role:'techsavvy',
    friends:['Bruce','Steve','Natasha'],
    address:{
        state:'New work',
        name:'Quenns',
    }
    
}
console.log(iron.friends[1]);
console.log(iron.address.state);
delete iron.role;
console.log(iron);