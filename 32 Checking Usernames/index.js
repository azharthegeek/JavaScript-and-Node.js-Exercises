current_users = [
    "azharthegeek",
    "ajmalofficial",
    "Meharkhanniazi",
    "Arham01",
    "Thegeekstudio",
];

new_users = [
    "Dawoodjunaid",
    "azharthegeek",
    "Shehzadofficial",
    "Meharkhanniazi",
    "Huzaifa007",
];

var active_point = 0
for (let i = 0; i < new_users.length; i++) {
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i] === current_users[j]) {
            console.log("you will need to enter a new username | Username : \"" + new_users[i] + "\" is not available");
            var active_point = 1
            break;
        }
        active_point = 0

    }
    if (active_point == 0) {
        console.log("The username : \"" + new_users[i] + "\" is available");
    }


}