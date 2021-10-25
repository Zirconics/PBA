console.log('Test')
/*
Assignment 2
**In JS**
1. Read the product name and the product price of the form.
2. Add the price and product in a row to the empty table body. Also add a delete button or text to the newly created row.
3. Add the price to the total price of all the products
4. Write the total price to the empty 'total price' div
5. Add a remove handler to the row which removes the entire product row.
*/


// let submitButton = document.getElementById('submitButton')
// submitButton.addEventListener("click", test())
let productForm = document.getElementById('productForm');
let sum = 0
productForm.addEventListener("submit", function(event) {

    event.preventDefault()
    const product = document.querySelector('#productName').value
    const price = document.querySelector('#productPrice').value

    // Create new table elements
    let tableBody = document.getElementById('tableBody')
    let newRow = document.createElement('tr');

    // Create new TD elements and assign values.
    let newProduct = document.createElement('td')
    newProduct.innerHTML = product;
    let newPrice = document.createElement('td')
    newPrice.innerHTML = price;
    
    // Create new deletebutton for table
    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = "Delete"
    deleteButton.addEventListener("click", function() {
        sum -= parseFloat(price)
        totalPrice.innerHTML = sum
        newRow.remove()
    })

    // Add elements to table
    newRow.append(newProduct, newPrice, deleteButton);
    tableBody.append(newRow);

    //Update total price
    let totalPrice = document.getElementById('price')
    sum += parseFloat(price)
    totalPrice.innerHTML = sum
})



