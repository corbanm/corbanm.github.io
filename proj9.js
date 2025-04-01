var isBlured = false;

var params = window.location.search.substr(1).split('&');

var bgColor, txtColor, fontSize;

params.forEach((e) => {
    var split = e.split("=");
    console.log(split);
    if (split[0] == "bgColor") {
        bgColor = split[1];
    }
    if (split[0] == "txtColor") {
        txtColor = split[1];
    }
    if (split[0] == "fontSize") {
        fontSize = split[1];
        console.log("font size: " + fontSize);
    }
})

if (params.length == 3) {
    console.log("params received");
    

    const d = new Date();
    d.setTime(d.getTime() + 86400000);
    console.log(d);
    var cookieText = `bgColor=${bgColor}; expires=${d.toUTCString()};`;

    console.log(cookieText);
    document.cookie = cookieText;
    cookieText =  `txtColor=${txtColor}; expires=${d.toUTCString()};`
    document.cookie = cookieText;
    cookieText = `fontSize=${fontSize}; expires=${d.toUTCString()};`
    document.cookie = cookieText;
    addStyling();
}

function addStyling() {
    document.getElementsByTagName("body")[0].setAttribute("style", `background-color: ${bgColor}`);
    var h2 = document.getElementsByTagName("h2");
    var h3 = document.getElementsByTagName("h3");
    var h4 = document.getElementsByTagName("h4");
    var p = document.getElementsByTagName("p");
    var textClass = document.getElementsByClassName("text");
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
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookies = decodedCookie.split(";");
  cookies.forEach((e) => {
    while(e.charAt(0) == ' ') {
        e = e.substring(1);
    }
    console.log(e);
    let part = e.split("=");
    if (part[0] == "bgColor") {
        console.log("bgColor");
        bgColor = part[1]
    }
    else if (part[0] == "txtColor") {
        console.log("txtColor");
        txtColor = part[1]
    }
    else if (part[0] == "fontSize") {
        console.log("fontSize");
        fontSize = part[1];
        didParse = true;
    }
    
  })
  if (didParse) {
    addStyling();
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
    document.cookie = "bgColor=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "txtColor=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "fontSize=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.replace(location.href.split("?")[0]);
}


function themeOverlay() {
    var content = document.getElementById("content");
    var navBar = document.getElementById("navBar");
    var customizeDiv = document.getElementById("customization");
    if (!isBlured){
        content.setAttribute("style", "animation: 0.3s ease-in 0s blurIn; filter: blur(5px)");
        navBar.setAttribute("style", "animation: 0.3s ease-in 0s blurIn; filter: blur(5px)");
        customizeDiv.setAttribute("style", "visibility: visible; animation: 0.2s ease-out 0s blurOut");
        isBlured = true;
    }
    else {
        content.setAttribute("style", "animation: 0.3s ease-out 0s blurOut; filter: blur(0)");
        navBar.setAttribute("style", "animation: 0.3s ease-out 0s blurOut; filter: blur(0)");
        customizeDiv.setAttribute("style", "animation: 0.2s ease-in 0s blurIn; visibility: hidden");
        isBlured = false;
    }
}

function bgColorUpdate() {
    var body = document.getElementById("body");
    var selection = document.getElementById("bgColor");
    body.setAttribute("style", `background-color: ${selection.value}`);
}

parseCookies();