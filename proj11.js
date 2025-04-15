// getVerse uses fetch, the newer request standard
function getVerse() {
    // base url for api
    const url = "https://bible-api.com/";
    // each input element's value
    var book = document.getElementById("book").value;
    var chapter = document.getElementById("chapter").value;
    var verse = document.getElementById("verse").value;

    // fetch command to get the current verse given the inputs
    fetch(`${url}${book}+${chapter}:${verse}`)
        // once fetch is completed...
        .then((response) => {
            // if response returned a 404, user inputted invalid selection
            if (response.status == 404) {
                // show user readable error explaining the situation
                document.getElementById("verseOutput").innerText = "Chapter or Verse is not valid. Try again.";
                // throw an error to the console to halt the funciton and provide more detail
                throw new Error("Chapter or Verse is not valid. Try again.");
            }
            // if response didn't return 404 but still had an issue...
            if (!response.ok) {
                // show human readable error
                document.getElementById("verseOutput").innerText = "An error occured. Please try again later. Error code " + response.status;
                // throw error to the console
                throw new Error("An error occured. Please try again later. Error code " + response.status);
            }
            // otherwise if successful, parse the response in JSON format
            return response.json();
        })
        .then((text) => {
            // set the output html to the verse response
            document.getElementById("verseOutput").innerText = text.text
        })
        // if an error occurs with fetch, display an error on the console
        .catch(error => console.log(error));
}


// getChapter uses XHR, the older request standard
function getChapter() {
    // output on the html side
    let output = document.getElementById("wholeChapterOutput");
    // reset the output text to blank
    output.innerText = "";
    // create a new request object
    let xhr = new XMLHttpRequest();
    // set the received data type to json
    xhr.responseText = 'json';
    // base url for api
    const url = "https://bible-api.com/";
    // request starting with the base url and adding the book and chapter inputted by the user
    let req = `${url}${document.getElementById("wholeChapterBook").value}+${document.getElementById("wholeChapterChapter").value}`
    //console.log(req);
    // set the request to get and to run synchronously
    xhr.open("get", req, false);
    // send the request with no additional data
    xhr.send(null);
    // if the result is 404, show an error to the user
    if (xhr.status == 404) {
        output.innerText += "Chapter is not valid for selected book. Please try again.";
    // otherwise if successfull...
    } else {
        // parse the request response as json
        let r = JSON.parse(xhr.responseText);
        //console.log(r);
        //add the reference to the html page
        output.innerText += r.reference + "\n\n";
        // for each verse in the chapter...
        r.verses.forEach(e => {
            // show the verse number, then the verse contents
            output.innerText += `${e.verse}      ${e.text}\n`;
        });
    }
}