var userOptions = []
form = document.getElementById("uploadForm");



function submitForm(event) {
    event.preventDefault();
    var name = document.forms.uploadForm.name.value;
    var phone = document.forms.uploadForm.phone.value;
    var file = document.getElementById('file').files[0];
    let errorDiv = document.getElementById("errorDiv");

    let nameValid = /^[a-zA-Z]+\ ?[a-zA-Z]*$/.test(name);
    let phoneValid = /^\(?[0-9]{3}\)?(\ |-)?[0-9]{3}(\ |-)?[0-9]{4}$/.test(phone);

    errorDiv.innerHTML = "";
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
    errorDiv.innerHTML += file.name + "\n";
    
    var reader = new FileReader;
    reader.onload = function (e) {document.getElementById("errorDiv").innerHTML += e.target.result + "\n";};
    
    reader.readAsText(file);
    
}

function checkboxUpdate() {
    console.log(`Current alerts set: ${userOptions}`)
    document.getElementById("alertOutput").innerHTML = `<h4>Current alerts: ${userOptions}</h4>`
}

document.getElementById("loginAlert").addEventListener("change", function() {
    var inArr = false;
    for (var i = 0; i < userOptions.length; i++) {
        if (userOptions[i] === "loginAlert") {
            console.log(`found at ${i}`);
            inArr = true;
            var firstHalf = userOptions.slice(0,i);
            var secondHalf = userOptions.slice(i + 1);
            userOptions = firstHalf.concat(secondHalf);
        }
    }
    if (!inArr && this.checked) {
        userOptions.push("loginAlert");
    }
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