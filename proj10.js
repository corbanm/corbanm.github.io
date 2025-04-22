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
