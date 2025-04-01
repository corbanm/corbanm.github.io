// var for blur animation
var isBlured = false;

// get parameters from url
var params = window.location.search.substr(1).split('&');

var bgColor, txtColor, fontSize;

// for each paramter...
params.forEach((e) => {
    // split at the equals sign to separate the variable from the value
    var split = e.split("=");
    //console.log(split);
    // check current variable, and set that variable to the one received
    if (split[0] == "bgColor") {
        bgColor = split[1];
    }
    if (split[0] == "txtColor") {
        txtColor = split[1];
    }
    if (split[0] == "fontSize") {
        fontSize = split[1];
    }
})

// If all three parameters are received...
if (params.length == 3) {
    console.log("params received");
    
    // get the current date and add one day in milliseconds to it
    const d = new Date();
    d.setTime(d.getTime() + 86400000);
    console.log(d);
    // make a cookie containing the background color, and set it to expire in one day
    var cookieText = `bgColor=${bgColor}; expires=${d.toUTCString()};`;

    // set the cookie to the cookie text
    document.cookie = cookieText;
    // make a cookie containing the text color, and set it to expire in one day
    cookieText =  `txtColor=${txtColor}; expires=${d.toUTCString()};`
    document.cookie = cookieText;
    // make a cookie containing the font size, and set it to expire in one day
    cookieText = `fontSize=${fontSize}; expires=${d.toUTCString()};`
    document.cookie = cookieText;
    // add styling from the cookies to the webpage
    addStyling();
}

function addStyling() {
    // set background color of website to the current bgColor variable
    document.getElementsByTagName("body")[0].setAttribute("style", `background-color: ${bgColor}`);
    var h2 = document.getElementsByTagName("h2");
    var h3 = document.getElementsByTagName("h3");
    var h4 = document.getElementsByTagName("h4");
    var p = document.getElementsByTagName("p");
    var textClass = document.getElementsByClassName("text");
    // set each text element's color and font size to their respective global variables
    for (let e of h2) {
        e.setAttribute("style", `color: ${txtColor}; font-size: ${fontSize}px`);
    }
    for (let e of h3) {
        e.setAttribute("style", `color: ${txtColor}; font-size: ${fontSize}px`);
    }
    for (let e of h4) {
        e.setAttribute("style", `color: ${txtColor}; font-size: ${fontSize}px`);
    }
    for (let e of p) {
        e.setAttribute("style", `color: ${txtColor}; font-size: ${fontSize}px`);
    }
    for (let e of textClass) {
        e.setAttribute("style", `color: ${txtColor}; font-size: ${fontSize}px`);
    }
}

function parseCookies() {
  let didParse = false;
  // get the cookies
  let decodedCookie = decodeURIComponent(document.cookie);
  // parse cookies into an array rather than ; delimited text string
  let cookies = decodedCookie.split(";");
  // for each cookie, remove whitespace
  cookies.forEach((e) => {
    while(e.charAt(0) == ' ') {
        e = e.substring(1);
    }
    // console.log(e);
    // split cookie names from cookie values
    let part = e.split("=");
    // set appropriate variable depending on cookie name
    // if the appropriate cookies are found, mark them as parsed
    if (part[0] == "bgColor") {
        // console.log("bgColor");
        bgColor = part[1]
    }
    else if (part[0] == "txtColor") {
        // console.log("txtColor");
        txtColor = part[1]
    }
    else if (part[0] == "fontSize") {
        // console.log("fontSize");
        fontSize = part[1];
        didParse = true;
    }
    
  })
  // if cookies were parsed...
  if (didParse) {
    // update webpage styling
    addStyling();
    // create elements to show what styling was applied
    let styleDiv = document.createElement("div");
    let styleHeader = document.createElement("h3");
    let styleList = document.createElement("ul");
    let bgColorOutput = document.createElement("p");
    let txtColorOutput = document.createElement("p");
    let fontSizeOutput = document.createElement("p");

    styleHeader.innerText = "Style settings applied:";
    styleDiv.appendChild(styleHeader);
    bgColorOutput.innerText = `Background color: ${bgColor}`;
    txtColorOutput.innerText = `Text color: ${txtColor}`;
    fontSizeOutput.innerText = `Font size: ${fontSize}px`;
    styleList.appendChild(bgColorOutput);
    styleList.appendChild(txtColorOutput);
    styleList.appendChild(fontSizeOutput);
    styleList.setAttribute("style", "padding: 0px; margin-bottom: 40px");
    styleDiv.appendChild(styleList);
    document.getElementById('content').insertBefore(styleDiv, document.getElementById("content").firstChild);
  }
}

function clearCookies() {
    // set all cookies to expire in 1970 (0 miliseconds), which erases them from the browsesr
    document.cookie = "bgColor=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "txtColor=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "fontSize=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // reload the website removing all styling attributes from the URL
    location.replace(location.href.split("?")[0]);
}


function themeOverlay() {
    var content = document.getElementById("content");
    var navBar = document.getElementById("navBar");
    var customizeDiv = document.getElementById("customization");
    if (!isBlured){
        // if theme box is not open, make it visible and run the blur in animation
        content.setAttribute("style", "animation: 0.3s ease-in 0s blurIn; filter: blur(5px)");
        navBar.setAttribute("style", "animation: 0.3s ease-in 0s blurIn; filter: blur(5px)");
        customizeDiv.setAttribute("style", "visibility: visible; animation: 0.2s ease-out 0s blurOut");
        isBlured = true;
    }
    else {
        // if the theme box is open, make it invisible and blur out
        content.setAttribute("style", "animation: 0.3s ease-out 0s blurOut; filter: blur(0)");
        navBar.setAttribute("style", "animation: 0.3s ease-out 0s blurOut; filter: blur(0)");
        customizeDiv.setAttribute("style", "animation: 0.2s ease-in 0s blurIn; visibility: hidden");
        isBlured = false;
    }
}

// update the body color
function bgColorUpdate() {
    var body = document.getElementById("body");
    var selection = document.getElementById("bgColor");
    body.setAttribute("style", `background-color: ${selection.value}`);
}

// automatically parse cookies on page load
parseCookies();