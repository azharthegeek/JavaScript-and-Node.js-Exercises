//Seeing the World: Think of at least five places in the world you’d like to visit.
var places_to_visit = [
    "Makkah",
    "Madina",
    "Masjid Aqsa",
    "Aya Sofia Istanbul",
    "Egypt Paramids"
];

//• Store the locations in a array. Make sure the array is not in alphabetical order.
console.log("Array -> Place Names that i want to visit :");
//• Print your array in its original order.
for (let i = 0; i < places_to_visit.length; i++) {
    console.log(places_to_visit[i])
}
//• Print your array in alphabetical order without modifying the actual list.
// Helpfull Resource https://bobbyhadz.com/blog/javascript-sort-array-without-mutating


var temp = [...places_to_visit];
temp.sort();
console.log("\nArray in alphabetical order without modifying the actual list :");
for (let i = 0; i < temp.length; i++) {
    console.log(temp[i]);
}

//• Show that your array is still in its original order by printing it.
console.log("\nArray is still in its original order :");
for (let j = 0; j < places_to_visit.length; j++) {
    console.log(places_to_visit[j])
}

//• Print your array in reverse alphabetical order without changing the order of the original list.
var temp = [...places_to_visit];
temp = temp.sort().reverse()
console.log("\nArray in reverse alphabetical order without changing the order of the original list :");
for (let i = 0; i < temp.length; i++) {
    console.log(temp[i]);
}

//• Show that your array is still in its original order by printing it.
console.log("\nArray is still in its original order :");
for (let j = 0; j < places_to_visit.length; j++) {
    console.log(places_to_visit[j])
}

//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nArray is Reverse Order :");
places_to_visit.reverse()
for (let j = 0; j < places_to_visit.length; j++) {
    console.log(places_to_visit[j])
}

//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nArray after reverse again. Now it is in its original Order :");
places_to_visit.reverse()
for (let j = 0; j < places_to_visit.length; j++) {
    console.log(places_to_visit[j])
}

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nArray is stored in alphabetical order :");
places_to_visit.sort()
for (let j = 0; j < places_to_visit.length; j++) {
    console.log(places_to_visit[j])
}

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nArray is stored in reverse alphabetical order :");
places_to_visit.sort().reverse()
for (let j = 0; j < places_to_visit.length; j++) {
    console.log(places_to_visit[j])
}