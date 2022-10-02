//Seeing the World: Think of at least five places in the world you’d like to visit.
let places_to_visit = [
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
function alphabetical_order() {

    console.log("\nArray in alphabetical order without modifying the actual list :");
    for (let i = 0; i < places_to_visit.length; i++) {
        console.log(places_to_visit.sort()[i])
    }
}
alphabetical_order()
    //• Show that your array is still in its original order by printing it.
console.log("\nArray is still in its original order :");
for (let j = 0; j < places_to_visit.length; j++) {
    console.log(places_to_visit[j])
}