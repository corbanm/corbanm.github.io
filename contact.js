var dateOfBirth = new Date;

function contactSubmit(event) {
    // prevent page from reloading on form submission
    event.preventDefault();
    // assume form is valid unless changed
    var allValid = true;
    // get data from each form element
    var name = document.forms.contact.name.value;
    var username = document.forms.contact.username.value;
    var email = document.forms.contact.email.value;
    var password = document.forms.contact.pass.value;
    var passwordConf = document.forms.contact.passConf.value;
    var phone = document.forms.contact.phone.value;
    var birth = document.forms.contact.dob.value;
    var terms = document.forms.contact.terms.checked;
    var passwordConfValid;
    // error div for error output on the page. NOTE: this is not part of the form so you can't use document.forms
    var errorDiv = document.getElementById("errorText");
    errorDiv.innerHTML = '';
    // log all data collected
    console.log("Name " + name + "\nUsername " + username + "\nEmail: " + email + "\nPassword: " + password + "\nPassword Confirmation: " + passwordConf + "\nPhone: " + phone + "\nDate of birth: " + birth + "\nTerms: " + terms + "\n");
    // use regex rules to determine if each field is valid or not
    let nameValid = /^[a-zA-Z]+\ ?[a-zA-Z]*$/.test(name);
    let usernameValid = /^[a-zA-Z]{1}[a-zA-Z0-9]{7,14}$/.test(username);
    let passwordValid = /^.*(?=.{8,20})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).*$/.test(password) // adapted from https://stackoverflow.com/questions/2370015/regular-expression-for-password-validation
    // check if both password fields are the same
    if (password === passwordConf) {
        passwordConfValid = true;
    } else {
        passwordConfValid = false;
    }
    let phoneValid = /^\(?[0-9]{3}\)?(\ |-)?[0-9]{3}(\ |-)?[0-9]{4}/.test(phone);

    // get current date
    var currDate = new Date;
    // get date 18 years ago
    var pastDate = new Date(currDate.getFullYear() - 18, currDate.getMonth(), currDate.getDate());
    // using earlier validation, throw an error if a field is invalid
    try {
        if (!nameValid) throw "Name " + name + " is invalid";
        if (!usernameValid) throw "Username " + username + " is invalid";
        if (!passwordValid) throw "Password " + password + " is invalid";
        if (!passwordConfValid) throw "Passwords must match";
        if (!phoneValid) throw "Phone number " + phone + " is invalid";
        // check if date of birth is later (younger) than 18 years ago
        if (dateOfBirth.getTime() > pastDate.getTime()) throw "You must be at least 18 years old";
        if (!terms) throw "You must agree to the terms";
    }
    catch (err) {
        // if there is an error, log it to the console, add it to the contact page, and change allValid to false
        console.error(err);
        errorDiv.innerHTML = "<h3 style=\"color: red;\">" + err + "<\h3>";
        allValid = false;
    }
    // if all fields are valid, display a welcome message
    if (allValid) {
        errorDiv.innerHTML = "<h3>Welcome " + name + "!</h3>";
    }

    

    // alerting the user of their message being send using the alert event
    //alert("Message from: " + name + ". Email: " + email + ". Message contents: " + message + ". Sent");
}

// when the date selector chages, update a global date input variable.
// this is necessary as getting the date of birth using document.forms method does not format the date properly for a Date object
document.forms.contact.dob.addEventListener("change", function() {
    var input = this.value;
    var formatted = new Date(input);
    dateOfBirth = formatted;
})

var form = document.forms.contact;

// when form is submitted, run the contactSubmit function.
form.addEventListener("submit", contactSubmit);