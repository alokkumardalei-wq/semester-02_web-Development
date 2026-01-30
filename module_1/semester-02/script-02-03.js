// console.log("     Hello Developers.     "); // 0 based indexing

// let str="  Hello Developers cat dog  ";
// console.log(str.length);//length
// console.log(str.charAt(9)) // character
// console.log(str.charCodeAt(9))//ASCII

// //Substring
// console.log(str.substring(10));//All charcacters after index 10;
// //star<end
// console.log(str.substring(9,11));
// //start>end
// console.log(str.substring(11,9));
// //-ve
// console.log(str.substring(-100));

// // Slice function
// let str1=str.slice(10);
// console.log(str1);

// //start<end
// let sl1=str.slice(10,12);
// console.log(sl1);

// //start > end

// let sl2=str.slice(12,10);
// console.log(sl2);

// // -ve index

// let sl3=str.slice(-10);
// console.log(sl3);

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.trim());
// console.log(str.includes("Dog"));

// let searchQuery="Learn Javascript Functions Arrow IIFE";
// // trimimg the searchQuery for whitespaces
// let trim1=searchQuery.trim();
// console.log(trim1);

// //Converting query to lowercase
// let lowerq=searchQuery.toLocaleLowerCase();
// console.log(lowerq);
// //Converting query to Uppercase
// let upperq=searchQuery.toLocaleUpperCase();
// console.log(upperq);
// //Extracting the word Javascript using substring method

// let subsq=searchQuery.substring(6,17);
// console.log(subsq);

// // Extracting the word Javascript using slice function
// let sliceq=searchQuery.slice(6,17);
// console.log(sliceq);
// // Using includes method
// let incq1=searchQuery.includes("functions");
// let incq2=searchQuery.includes("arrow");
// let incq3=searchQuery.includes("iife");

// console.log(incq1);
// console.log(incq2);
// console.log(incq3);
// //Printing character

// console.log(searchQuery.charAt(6));
// //Printing Ascii value
// console.log(searchQuery.charCodeAt(0));

// Checking case-insensitive

// let case1=searchQuery.toLowerCase();
// console.log(case1.includes("javascript"));

// Arrays
//Slice
let arr=[1,2,3,4,5,6,7];
let arr2=arr.slice(2,6);
console.log(arr);
console.log(arr2);

//Splice
//Remove elements...
arr.splice(2,3);//Used to Remove elements where first arguement is first index and second argument is number of elents to be removed.
console.log("spliced arr:"+arr);

//Remove and add elements arr.splice(start index,noOfElements,ele1,ele2,ele3)
arr.splice
console.log(arr);
