//PRODUCT SWITCHING
const products = document.querySelectorAll("#part2 .Itemcurrent, #part2 .Itemhidden");

//get all product buttons
const buttons = document.querySelectorAll("#switchbtn .bttn");

//add a click to each button
buttons.forEach(function(button, index) {
    button.addEventListener("click", function() {

        //hide all products
        products.forEach(function(product) {
            product.classList.remove("active");
            product.style.display = "none";
        });

        //remove active styling from all buttons
        buttons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        //Show the selected product
        products[index].style.display = ("grid");
        products[index].classList.add("active");

        //highlight selected button
        button.classList.add("active");
    });
});


//GAME PLAY: IN OR OUT
document.getElementById("game1").addEventListener("submit", function(event) {
    //prevent page from refreshing
    event.preventDefault();

    //get the user's guess
    let userGuess = Number(document.getElementById("numGame").value);

    //get output element
    let output = document.getElementById("GameOutput");

    //check if guess is in between 1 and 10
    if (userGuess < 1 || userGuess > 10 || document.getElementById("numGame").value === "") {
        output.textContent = "Please pick a number between 1 and 10";
        return;
    }

    //generate random number between 1 and 10
    let randomNumber = Math.floor(Math.random() * 10) + 1;

    //Display the guess
    if (userGuess === randomNumber) {
        output.textContent = "Your guess: " + userGuess + ". Random Number " + randomNumber + ".Congratulations! You Won!";
    } else {
        output.textContent = "Your Guess " + userGuess + ". Random Number " + randomNumber + ". Sorry, try again!";
    }
}) 

//CONTACT FORM
const form = document.querySelector("#part5ish form");

form.addEventListener("formbtn", function(event) {
    event.preventDefault();

    const firstname = document.getElementsById("fname").value;
    const lastName = document.getElementById("lname").value;
    const comment = document.getElementById("message");

    const result = document.createElement("div");

    result.innerHTML = ` 
    <h3>Thank you for your feedback!</h3>
    <p><strong>First name:</strong>${firstname}</p>
    <p><strong>Last Name:</strong>${lastName}</p>
    <p><strong>Contact Us</strong>${comment}</p>
    `
    ;

    document.getElementById("part5ish").appendChild(result);

    //rest form
    form.reset(); 
});