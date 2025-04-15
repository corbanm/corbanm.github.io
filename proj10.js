var navMoreVisibile = false;



// New dynamic navbar code
function navBarGen() {
    let div = document.getElementById("navBar");
    console.log(div);
    var gear = "⚙";
    console.log(gear);
    div.innerHTML = `
    
    <img style=\"height: 80%;\nposition: absolute;\nleft: 20px;\" src=\"logo.webp\" alt=\"\" onclick=\"window.location.href = 'index.html'\">
    \n<nav>
        \n<a id="navHome" href=\"index.html\">Home</a>
        \n<a id="navTaskManagement" href=\"task.html\">Task Management</a>
        \n<a id="navFileUpload" href=\"upload.html\">File Upload</a>
        \n<a id="navContact" href=\"contact.html\">Contact</a>
        \n<a id="navGame" href=\"game.html\">Game</a>
        \n<a id="navVerse" href="verselookup.html">Verses</a>
    \n</nav>

    \n<button id="navMoreButton" onclick="showNavMore()">&#8801;</button>
    \n<div id="navMore" style="visibility: hidden;">
        \n<a id="navAgeCalc" href=\"agecalc.html\">Age Calculator</a>
        <br>
        <br>
        <br>
        <br>
        \n<a id="navGradeCalc" href=\"gradecalc.html\">Grade Calculator</a>
        <br>
        \n<button id="theme" onclick="themeOverlay()">&#x2699;</button>
    \n</div>`
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

function showNavMore() {
    var div = document.getElementById("navMore");
    if (!navMoreVisibile) {
        div.style = '';
        navMoreVisibile = true;
    } else {
        div.style = 'visibility: hidden';
        navMoreVisibile = false;
    }
}

navBarGen();

var timerInterval;


function shufflePieces() {
    
    // array of positions chosen
    let numebersChosen = [];
    // choose 9 numbers for 9 unique positions
    for (let i = 0; i < 9; i++) {
        // assume random number is in array until proven it isn't
        let inArr = true;
        // initialize random number variable
        let rand;
        // while random number is in array...
        while (inArr) {
            // choose a new random number
            rand = Math.floor(Math.random() * 9) + 1;
            // assume the random number is not in the array
            inArr = false;
            // iterate over each item in the array
            numebersChosen.forEach((e) => {
                // if number is in array, represent this in the inArr variable
                if (e == rand) {
                    inArr = true;
                }
            })
        }
        // add unique position to array
        numebersChosen.push(rand);
    }
    // for each image section...
    for (var i = 1; i < 10; i++) {
        // get the position of the random element selected earlier
        var randPos = numebersChosen[i - 1];
        // get the element based on the random position
        var randElement = document.getElementById("gameImg" + randPos);
        
        // get the div coressponding to the current index
        var div = document.getElementById("gamePos" + i);
        // add random image to div
        div.appendChild(randElement)
    }
    unWin();

    timerInterval = setInterval(countTimer, 1000);
}

let dragged;

let img;

for (let i = 1; i < 10; i++) {
    img = document.getElementById("gameImg" + i);
    img.addEventListener("dragstart", (e) => {
        dragged = e.target;
    })
}


function dragOverListener(e) {
    e.preventDefault();
}

let dropList = [];

for (let i = 1; i < 10; i++) {
    dropList.push(document.getElementById("gameImg" + i));
    dropList[i - 1].addEventListener("dragover", dragOverListener)

    dropList[i-1].addEventListener("drop", (e) => {
        if (dropList[i-1].getAttribute("draggable") != "false") {
            let originDiv = dragged.parentElement;
            dropList[i-1].parentElement.appendChild(dragged);
            originDiv.appendChild(dropList[i-1]);
            console.log(dragged.id + " dropped to " + dropList[i-1].id);
        }

        if(checkPuzzle()) {
            gameWin();
        }
    })
}

function checkPuzzle() {   
    let valid = true;
    for (let i = 1; i < 10; i++) {
        if (document.getElementById("gamePos" + i) == document.getElementById("gameImg" + i).parentElement) {
            document.getElementById("gameImg" + i).setAttribute("draggable", "false")
            document.getElementById("gameImg" + i).removeEventListener("dragover", dragOverListener);
            //console.log("Element " + i + " is in correct spot")
        }
        else {
            valid = false;
        }
    }
    return valid;
}

function gameWin() {
    clearInterval(timerInterval);
    document.getElementById("win").setAttribute("style", "");
}

function unWin() {
    document.getElementById("win").setAttribute("style", "visibility: hidden");
    for (let i = 1; i < 10; i++) {
        document.getElementById("gameImg" + i).setAttribute("draggable", "true");
    }
    checkPuzzle();
}

let currTime = 0;

function countTimer() {
    currTime++;
    document.getElementById("time").innerText = "Time: " + currTime;
}
