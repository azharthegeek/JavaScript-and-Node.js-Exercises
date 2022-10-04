function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great(magicians) {
    let great_magicians = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push("The Great " + magicians[i]);
    }
    return great_magicians;
}

let magicians = [
    "Muhammad Azhar",
    "Mehar Khan Niazi",
    "Mubashir Ali",
    "Saad Ali"
];

copy_magicians_array = make_great(magicians);

console.log("Copy \"The Great Magician Array\" : ");
show_magicians(copy_magicians_array);

console.log("\nThe Original Magician Array(Unchanged) : ");
show_magicians(magicians);