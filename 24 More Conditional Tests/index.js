//• Tests for equality and inequality with strings

var Name = "Azhar";
console.log("Is Name(Azhar) != 'Muhammad'? I predict True | Predicted Answer = " + (Name != "Muhammad"));

var Name = "Azhar";
console.log("Is Name(Azhar) == 'Muhammad'? I predict False | Predicted Answer = " + (Name == "Muhammad"));


//• Tests using the lower case function
var Name = "Azhar";
console.log("\nIs Name(Azhar) == 'azhar'? I predict False | Predicted Answer = " + (Name == "azhar"));


//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let nic_number = 42401;
console.log("Is NIC Number == 42401 ? I predict True | Predicted Answer : " + (nic_number == 42401));


let nic_number3 = 42401;
console.log("Is NIC Number != 42401 ? I predict False | Predicted Answer : " + (nic_number3 != 42401));


let Number_bank = 5;
console.log("Is Number > 4 ? I predict True | Predicted Answer : " + (Number_bank > 4));

let Number_bank5 = 5;
console.log("Is Number < 4 ? I predict False | Predicted Answer : " + (Number_bank5 < 4));


let Number_bank7 = 5;
console.log("Is Number < 4 ? I predict False | Predicted Answer : " + (Number_bank7 < 4));

let Number_bank8 = 5;
console.log("Is Number >= 5 ? I predict True | Predicted Answer : " + (Number_bank8 >= 5));


let Number_bank9 = 5;
console.log("Is Number <= 4 ? I predict False | Predicted Answer : " + (Number_bank9 <= 4));

//• Tests using "and" and "or" operators
let doller = 227;
let day = 5;
console.log("Is (doller >= 227 && day == 5) ? I predict True | Predicted Answer : " + (doller >= 227 && day == 5));

let office_open = true;
let emergency_work = false
console.log("Is (office_open == true || emergency_work == true ) ? I predict True | Predicted Answer : " + (office_open == true || emergency_work == true));


//• Test whether an item is in a array
//• Test whether an item is not in a array

var my_array = [
    "Azhar",
    "Mateen",
    "Taha"
]

console.log("\nIs Mateen is in Array  (my_array.indexOf(\"Mateen\")!== -1) ? I predict True | Predicted Answer : " + (my_array.indexOf("Mateen") !== -1));

console.log("\nIs Mehar is in Array  (my_array.indexOf(\"Mehar\")!== -1) ? I predict False | Predicted Answer : " + (my_array.indexOf("Mehar") !== -1));