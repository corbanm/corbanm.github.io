var userOptions = []
form = document.getElementById("uploadForm");



function submitForm(event) {
    // prevent reload on form submission
    event.preventDefault();
    // get elements from each form item
    var name = document.forms.uploadForm.name.value;
    var phone = document.forms.uploadForm.phone.value;
    // get the first and only file from the file uploader
    var file = document.getElementById('file').files[0];
    let errorDiv = document.getElementById("errorDiv");
    // validate forms using regex
    let nameValid = /^[a-zA-Z]+\ ?[a-zA-Z]*$/.test(name);
    let phoneValid = /^\(?[0-9]{3}\)?(\ |-)?[0-9]{3}(\ |-)?[0-9]{4}$/.test(phone);
    // reset output html each time a file is submitted
    errorDiv.innerHTML = "";
    // test for each validation and throw error if invalid
    try {
        if (!nameValid) throw "Name " + name + " is invalid";
        if (!phoneValid) throw "Phone number " + phone + " is invalid";
    }
    catch (err) {
        // if there is an error, log it to the console, add it to the contact page, and change allValid to false
        console.error(err);
        errorDiv.innerHTML = "<h3 style=\"color: red;\">" + err + "<\h3>";
    }

    // file upload code
    // show file name
    errorDiv.innerHTML += file.name + "\n";
    // create a file reader object
    var reader = new FileReader;
    // when reader object is called, add the output to the output div
    reader.onload = function (e) {document.getElementById("errorDiv").innerHTML += e.target.result + "\n";};
    // read the file
    reader.readAsText(file);
    
}

function checkboxUpdate() {
    // on checkbox update, show options in the console and website
    console.log(`Current alerts set: ${userOptions}`)
    document.getElementById("alertOutput").innerHTML = `<h4>Current alerts: ${userOptions}</h4>`
}

// each checkbox has the same code

document.getElementById("loginAlert").addEventListener("change", function() {
    // assume current option isn't in array
    var inArr = false;
    // for each user option, check if the currently adjusted item is in the array
    for (var i = 0; i < userOptions.length; i++) {
        if (userOptions[i] === "loginAlert") {
            // if the item is in the array, log index where it was found, set item to in the array, and remove it from the array
            console.log(`found at ${i}`);
            inArr = true;
            var firstHalf = userOptions.slice(0,i);
            var secondHalf = userOptions.slice(i + 1);
            userOptions = firstHalf.concat(secondHalf);
        }
    }
    if (!inArr && this.checked) {
        // if the item is not in the array, and is checked, push it to the array
        userOptions.push("loginAlert");
    }
    // update the checkbox
    checkboxUpdate();

})

document.getElementById("newsletter").addEventListener("change", function() {
    var inArr = false;
    for (var i = 0; i < userOptions.length; i++) {
        if (userOptions[i] === "newsletter") {
            console.log(`found at ${i}`);
            inArr = true;
            var firstHalf = userOptions.slice(0,i);
            var secondHalf = userOptions.slice(i + 1);
            userOptions = firstHalf.concat(secondHalf);
        }
    }
    if (!inArr && this.checked) {
        userOptions.push("newsletter");
    }
    checkboxUpdate();
})

document.getElementById("securityAlert").addEventListener("change", function() {
    var inArr = false;
    for (var i = 0; i < userOptions.length; i++) {
        if (userOptions[i] === "securityAlert") {
            console.log(`found at ${i}`);
            inArr = true;
            var firstHalf = userOptions.slice(0,i);
            var secondHalf = userOptions.slice(i + 1);
            userOptions = firstHalf.concat(secondHalf);
        }
    }
    if (!inArr && this.checked) {
        userOptions.push("securityAlert");
    }
    checkboxUpdate();
})

form.addEventListener("submit", submitForm);