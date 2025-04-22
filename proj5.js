// when document is loaded, create the images on the homepage
//document.addEventListener("load", createImages());

function createImages() {
    // choose where to insert the images
    let inspDiv = document.getElementById("inspiration");

    // create element for section header
    let header = document.createElement("h1");
    header.innerText = "Inspiration Ideas:";
    header.className = "text";
    // insert the section header into the inspDiv
    inspDiv.appendChild(header);
    
    // create element for larger view hint
    let hintText = document.createElement("h3");
    hintText.innerText = "Click an image for a larger view";
    hintText.className = "text";
    inspDiv.appendChild(hintText);

    // insert first image into the div
    let brice = document.createElement("img");
    brice.id = "brice";
    brice.src = "Brice.webp";
    brice.style = "width:47vw; border: 4px dashed black"
    // when image is clicked, call the createoverlay function
    brice.onclick = createOverlay;
    inspDiv.appendChild(brice);

    // insert second image into the div
    let danImg = document.createElement("img");
    danImg.id = "dan";
    danImg.src = "dan.webp";
    danImg.style = "width:47vw; border: 4px dashed black";
    danImg.onclick = createOverlay;
    inspDiv.appendChild(danImg);
    
}

//document.getElementById("brice").addEventListener("click", createOverlay());

function createOverlay() {

    // get the overlay div to insert the overlay code
    let overlayDiv = document.getElementById("imgOverlay");
    // create the overlay div node
    let overlay = document.createElement("div");
    // make a new node from the image by cloning the current node (this is passed into the function when it is called)
    let image = this.cloneNode();
    // add an ID and styling 
    image.id = "overlayImage";
    image.style = "height:75vh; border: 4px dashed black";


    overlay.id = "overlay";
    // set the background to a random color
    overlay.style = "background-color: rgba(" + (Math.random() * 255) + ", " + (Math.random() * 255) + "," + (Math.random() * 255) + ", 0.7);";
    //console.log("background-color: rgba(" + (Math.random() * 255) + ", " + (Math.random() * 255) + "," + (Math.random() * 255) + ", 0.7);");

    //console.log(overlayDiv);
    
    // add image node to the overlay
    overlay.appendChild(image);
    // when the overlay is clicked (which is anywhere on the screen), delete the overlay
    overlay.addEventListener("click", () => {
        document.getElementById("overlay").remove();
    })

    // add the overlay into the body
    document.querySelector("body").appendChild(overlay);


}