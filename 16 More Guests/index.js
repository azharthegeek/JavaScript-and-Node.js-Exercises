const guest = [
    "Mehar",
    "Ajmal",
    "Faisal",
    "Sameer"
]
for (let i = 0; i < guest.length; i++) {
    alert("Assalam o Aliakum, " + guest[i] + ". Hope you are doing well, I am inviting you to my tomorrow dinner , to discuss the Web 3.0.");
}
alert(guest[1] + " is not comming to dinner Tommorrow");
guest[1] = "Rizwan"

for (let i = 0; i < guest.length; i++) {
    alert("Assalam o Aliakum, " + guest[i] + ". Hope you are doing well, I am inviting you to my tomorrow dinner , to discuss the Web 3.0.");
}

//Add a print statement to the end of your program informing people that you found a bigger dinner table.
alert("Guys There is an Update, I found a bigger dinner table.")
    //• Add one new guest to the beginning of your array.
guest.unshift("Shahzad"); //Beginning
//• Add one new guest to the middle of your array.
guest.splice((guest.length + 1) / 2, 0, "Ahmed") //Middle
    //• Use append() to add one new guest to the end of your list. 
guest.push("Huzaifa") //End alternative .pop() 


//• Print a new set of invitation messages, one for each person in your list.
for (let i = 0; i < guest.length; i++) {
    alert("Assalam o Aliakum, " + guest[i] + ". Hope you are doing well, I am inviting you to my tomorrow dinner , to discuss the Web 3.0.");
}