var guest = [
    "Mehar",
    "Ajmal",
    "Faisal",
    "Sameer"
]

//console.log(guest[1] + " is not comming to dinner Tommorrow");
guest[1] = "Rizwan"
for (let i = 0; i < guest.length; i++) {
    //console.log("Assalam o Aliakum, " + guest[i] + ". Hope you are doing well, I am inviting you to my tomorrow dinner , to discuss the Web 3.0.");
}

//Add a print statement to the end of your program informing people that you found a bigger dinner table.
//console.log("Guys There is an Update, I found a bigger dinner table.")

//• Add one new guest to the beginning of your array.
guest.unshift("Shahzad"); //Beginning
//• Add one new guest to the middle of your array.
guest.splice((guest.length + 1) / 2, 0, "Ahmed") //Middle
    //• Use append() to add one new guest to the end of your list. 
guest.push("Huzaifa") //End alternative .pop() 


//• Print a new set of invitation messages, one for each person in your list.
for (let i = 0; i < guest.length; i++) {
    //console.log("Assalam o Aliakum, " + guest[i] + ". Hope you are doing well, I am inviting you to my tomorrow dinner , to discuss the Web 3.0.");
}



/* • Remove guests from your list one at a time until only two names remain in your list. 
Each time you pop a name from your list, */
//console.log("Sorry, Guys due to some problem I can only able to invite two people for dinner");
var i = guest.length
for (i; i >= 3; i--) {
    guest.pop()
}

//• Print a message to each of the two people still on your list, letting them know they’re still invited.
for (i = 0; i <= 1; i++) {
    //console.log("Assalam o Aliakum, " + guest[i] + ". Hope you are doing well, I am Only inviting you to my tomorrow dinner , to discuss the Web 3.0.");
}

//The above code is from exercise  14 , 15 , 16 , 17

/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner.*/
console.log("Number of people I am  inviting to dinner at last is : " + "\"" + guest.length + "\"")