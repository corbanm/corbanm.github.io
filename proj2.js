// get the current data using the Date object
const currDate = new Date();
// find the form on the html page
const form = document.querySelector("form");

function inputSubmit(e) {
    // validate inputted data
    if (validate()) {
        // if valid, calculate age and put a greeting message on the webpage
        calcAge();
        greeting();
    }
    // prevent the page from reloading on form submission
    e.preventDefault();
}

// wait for form submission
form.addEventListener("submit", inputSubmit);



function validate() {
    // default state is assuming data is valid
    let valid = true;
    // select each data value
    ageInput = document.getElementById('calcAge').value;
    nameInput = document.getElementById('calcName').value;
    emailInput = document.getElementById('calcEmail').value;
    // log data collected
    console.log("Data collected:\nName: " + nameInput + "\nAge: " + ageInput + "\nEmail: " + emailInput);
    // invalidate if any field is empty
    if (ageInput.length == 0 | nameInput.length == 0 | emailInput.length == 0) {
        alert('You must fill in all fields');
        valid = false;
    }
    // invalidate if name is not just alpha characters or spaces using regex
    if (!/^[a-zA-Z ]*$/.test(nameInput)) {
        alert('Name field can only contain alpha characters');
        valid = false;
    }
    // invalidate if age is not just numeric characters using regex
    if (!/^[0-9]*$/.test(ageInput)) {
        alert('Age field can only contain numeric characters');
        valid = false;
    }
    // return result
    return valid;
}

function calcAge() {
    // get the age from the user input
    ageInput = document.getElementById('calcAge').value;
    // calculate the birth year from current date - inputted age. May need to subtract 1 depending on when the user was born
    document.getElementById('ageCalcOutput').innerHTML = "Your birth year was " + (currDate.getFullYear() - ageInput) + " or " + (currDate.getFullYear() - ageInput - 1) + ".";
    // log calculations
    console.log("Age calculated: " + (currDate.getFullYear() - ageInput) + " or " + (currDate.getFullYear() - ageInput - 1))
}
function greeting() {
    // get name from the user input
    nameInput = document.getElementById('calcName').value;
    // insert a welcome message on the webpage
    document.getElementById('welcome').innerHTML = "Welcome " + nameInput + "!";
}
