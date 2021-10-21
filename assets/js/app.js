console.log("JavaScript is working!");

/*
In Class assignments
*/

const pricingBox = document.querySelector("#pricing-box")
const pricingBox2 = document.getElementById("pricing-box")
const sections = document.getElementsByTagName('section')
const tempSectionHeader = document.querySelector("#section-2 > .card-header")
const roleItems = document.querySelectorAll("[role]")
const storageItems = document.querySelectorAll("li[data-description-value='storage']")


console.log(pricingBox.innerHTML)
console.log(pricingBox.textContent)

for (i=0; i<storageItems.length; i++) {
  console.log(storageItems[i].textContent)
}

const paragraph = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt \
  iste magni veniam pariatur incidunt esse dolore molestiae impedit, id natus est modi \
  eveniet maiores obcaecati optio dolores iure repellendus unde?";
const assignment4 = document.querySelector("#pricing-box > .fs-5")
assignment4.textContent = paragraph;

console.log(assignment4)

const toBeDeleted = document.getElementById("section-1").closest("div > div").remove()
console.log(toBeDeleted)


/*
Feedback assignments


Assignment 1
Given is this table. 
- Using JavaScript, calculate the average of all the grades from the different courses.
- Write the answer as a new row of the table using JavaScript.
Hint: you can change the HTML if you think that is a smart thing to do.

<table>
	<tr id="course1"><td>Computer science basics</td><td>7</td></tr>
	<tr id="course2"><td>Programming basics</td><td>8.6</td></tr>
	<tr id="course3"><td>Studieloopbaan orientatie</td><td>5</td></tr>
	<tr id="course4"><td>Game development with TypeScript</td><td>6.7</td></tr>
</table>
*/



/*
Assignment 2
Write a JavaScript programme that changes the background colour of every other row. 
Hint: you can change the HTML if you think that is a smart thing to do.

<ul id="courses">
	<li class="course">Computerscience basics</li>
	<li class="course">Programming basics</li>
	<li class="course">Studieloopbaan orientatie</li>
	<li class="course">Gamedevelopment with TypeScript</li>
	<li class="course">Professional Skills 1</li>
	<li class="course">HZ personality 2a</li>
	<li class="course">Framework development 1</li>
</ul>
*/


/*
Assignment 3
Create a function `createImageElement(imageSrcName)` which creates an HTML image element in JavaScript and add it to the DOM. 
For images you can use [http://lorempixel.com/](http://lorempixel.com/)
*/


/*
Assignment 4
Write a function that finds all the checkboxes and writes the id's to the console.

<div id="container">
	<div id="form">
	  <div>
	    <input type="checkbox" id="apple" name="apple" />
      <label for="apples">Apple</label>
    </div>
    <div>
      <input type="checkbox" id="pear" name="pear" />
      <label for="pear">Pear</label>
    </div>
    <div>
      <input type="checkbox" id="grape" name="grape" />
      <label for="grape">Grape</label>
	  </div>
  </div>
</div>
*/