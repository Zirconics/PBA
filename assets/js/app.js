console.log("JavaScript is working!");

/*
In class assignments
*/

const button = document.querySelector("#convert-button");
button.addEventListener("click", function() {
    let value = document.querySelector("#convert-value").value
    const output = document.querySelector("#converted-value").innerHTML = value *= 1.8;
})


/*
Feedback assignments

Assignment 1
1. Based on these songs array, create song LI items and write them to the DOM. Steps: use a loop to iterate through the songs array, 
   use a querySelector method to make a reference to the DOM and finally create the LI items using createElement method.
2. Try to make each LI item clickable using the addEventlistener method.
*/

const songs = [
	'I want to break free',
	'Mamma mia',
	'Black hole sun',
	'Bed of roses',
	'Jumping jack flash',
	'Fire starter'
];

// Logs the clicked song in the console
function logSong(event) {
  if (event.target.nodeName === "LI") {
    console.log("You clicked on: " + event.target.innerText);
  }
  
}

// Create a div and a list.
listDiv = document.createElement('div')
listOfSongs = document.createElement('ul')

// Add all components to the page
document.getElementsByTagName('body')[0].appendChild(listDiv);
listDiv.appendChild(listOfSongs);

//loop through all the songs and add them to the list element
for (i=0; i<songs.length; i++) {
  listItem = document.createElement('li');
  listItem.innerHTML = songs[i];
  // Makes the list items clickable and prints the song name in the console.
  listItem.addEventListener("click", logSong)
  listOfSongs.appendChild(listItem);
}


/*
Assignment 2

**In HTML**
1. Create a form with 2 input elements and a button.
2. Create a table head with product and price as two columns. Also create an empty table body.
3. Create an empty div for the total price

**In JS**
1. Read the product name and the product price of the form.
2. Add the price and product in a row to the empty table body. Also add a delete button or text to the newly created row.
3. Add the price to the total price of all the products
4. Write the total price to the empty 'total price' div
5. Add a remove handler to the row which removes the entire product row.
*/