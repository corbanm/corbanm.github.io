function contactSubmit() {
    // get message contents from the page using getElementById method
    var name = document.getElementById("contactName").value;
    var email = document.getElementById("contactEmail").value;
    var message = document.getElementById("contactMessage").value;
    // alerting the user of their message being send using the alert event
    alert("Message from: " + name + ". Email: " + email + ". Message contents: " + message + ". Sent");
}