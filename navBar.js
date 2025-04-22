// New dynamic navbar code
function navBarGen() {
    let div = document.getElementById("navBar");
    var gear = "⚙";
    console.log(gear);
    div.innerHTML = `
    
    <img style=\"height: 80%;\nposition: absolute;\nleft: 20px;\" src=\"logo.webp\" alt=\"\" onclick=\"window.location.href = 'index.html'\">
    \n<nav>
        \n<a id="navHome" href=\"index.html\">Home</a>
        \n<a class="removeIfNoSpace" id="navTaskManagement" href=\"task.html\">Task Management</a>
        \n<a class="removeIfNoSpace" id="navFileUpload" href=\"upload.html\">File Upload</a>
        \n<a class="removeIfNoSpace" id="navGame" href=\"game.html\">Game</a>
        \n<a class="removeIfNoSpace" id="navVerse" href="verselookup.html">Verses</a>
        \n<a id="navFinal" href="final.html">Final</a>
    \n</nav>
        \n<button id="theme" onclick="themeOverlay()">&#x2699;</button>`
    div.style = "@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');\nmargin: 8px;\nposition: fixed;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nwidth: 80%;\nheight: 100px;\nbackground-color: #282828;\nborder-radius: 10px;\nz-index: 1;";
    /*<div class="customization" style="visibility: hidden;" id="customization">

    </div>*/
    var customizeDiv = document.createElement("div");
    customizeDiv.classList.add("customization");
    customizeDiv.setAttribute("style", "visibility: hidden");
    customizeDiv.id = "customization";
    customizeDiv.innerHTML = `
        <div class="innerCustomization">
            <button id="close" onclick="themeOverlay()">&#10005;</button>
            <form action="index.html" method="get">
                <h3>Background Color</h3>
                <input required type="radio" name="bgColor" id="bgBlue" value="blue">
                <label for="bgBlue">Blue</label>
                <input required type="radio" name="bgColor" id="bgRed" value="red">
                <label for="bgRed">Red</label>
                <input required type="radio" name="bgColor" id="bgGreen" value="green">
                <label for="bgGreen">Green</label>
                <h3>Font Color</h3>
                <input required type="radio" name="txtColor" id="txtBlue" value="blue">
                <label for="txtBlue">Blue</label>
                <input required type="radio" name="txtColor" id="txtRed" value="red">
                <label for="txtRed">Red</label>
                <input required type="radio" name="txtColor" id="txtGreen" value="green">
                <label for="txtGreen">Green</label>
                <h3>Font Size</h3>
                <input required type="text" name="fontSize" id="fontSize">px<br>
                <input required type="submit" value="Submit">
            </form>
            <button onclick="clearCookies()">Clear Cookies</button>
        </div>`
    document.getElementsByTagName("body")[0].appendChild(customizeDiv);
    var title = document.title;
    switch(title) {
        case "Corban Mechikoff":
            document.getElementById("navHome").style = "background-color: #121212;";
            break;
        case "Task Management":
            document.getElementById("navTaskManagement").style = "background-color: #121212;";
            break;
        case "File Upload":
            document.getElementById("navFileUpload").style = "background-color: #121212;";
            break;
        case "Age Calculator":
            document.getElementById("navAgeCalc").style = "background-color: #121212;";
            break;
        case "Contact":
            document.getElementById("navContact").style = "background-color: #121212;";
            break;
        case "Grade Calculator":
            document.getElementById("navGradeCalc").style = "background-color: #121212;";
            break;
    }
}


navBarGen();