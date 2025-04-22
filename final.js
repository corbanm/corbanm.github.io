// text component
function Text(param) {
    // returns an H1 with the passed in color and text
    return <h1 style={{color: param.color}}>{param.text}</h1>;
}

// bento component
// A uniformly sized box containing related information
function Bento(options) {
    // Bento boxes are scaled up by 100 pixels
    var baseSize = 100;
    // using the width passed in using small discrete units, determine the width the box should be, removing extra padding if box is big
    var convertedWidth = `${options.width * baseSize + ((options.width - 4) * 5)}px`;
    var convertedHeight = `${options.height * baseSize + ((options.height - 4) * 5)}px`;

     //return a div with the passed in background, and computed heights.
    return <div className={"bento"} style={{height: convertedHeight, width: convertedWidth, background: options.background}}>
        {/*center the div and center its child elements*/}
        <div style={{position: "relative", height: "100%", display: "flex", justifyContent: "center"}}>
            {/*show the title, and another centering div*/}
            <h1 style={{position: "absolute", color: options.titleColor, top: "10%"}} >{options.title}</h1>
            <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                {/*One more empty div to allow the component to add its own display method*/}
                <div>
                    {options.content}   
                </div>
            </div>
        </div>
    </div>
}

// container where react will generate the html
const container = document.getElementById("content");
// setting react to generate in the container
const root = ReactDOM.createRoot(container);
// render the JSX into the container
root.render(
    <>
    {/* Text at the top of the page */}
        <Text text={"HTML Components"} />
        {/* Container to hold the bento elements. This is set up as a flex box to center the whole container */}
        <div id={"bentoContainer"} style={{display: "flex", justifyContent: "center"}}>
            {/* Display as flex, then align as column. Each bento is structured manually in this way since auto masonry isn't part of standard CSS (yet) */}
            <div style={{display: "flex", flexDirection: "column"}}>
                {/* Bento component for the audio player. Everything is passed to the component, reducing the need to rewrite the code */}
                <Bento height={2} width={4} title={"Audio"} titleColor={"white"} content={
                        <audio controls src="https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e1/Drum_-_Cadence_A.ogg/Drum_-_Cadence_A.ogg.mp3" />
                    } background={"#333333"} />
                {/* manually structuring bento group */}
                <div style={{display: "flex"}}>
                    {/* Bento component for code */}
                    <Bento title="Code" height={2} width={2} content={
                        <code style={{fontSize: "15px"}}>{"<h1>Hello</h1>"}</code>} background={"#999999"} />
                    {/* bento component for JQuery */}
                    <Bento title="JQuery" height={2} width={2} content={
                        <>
                        <button onClick={fadeOut}>Fade out</button>
                        <br />
                        <br />
                        <button onClick={slideUp}>Slide out</button>
                        </>
                        } />
                </div>
            </div>
            {/* manual structuring for bento group */}
            <div style={{display: "flex", flexDirection: "column"}}>
                {/* manual structuring for bento group */}
                <div style={{display: "flex", flexDirection: "row"}}>
                    {/* Bento component for selectors */}
                    <Bento title="Selectors" titleColor={"white"} height={2} width={2} content={<>
                            <input type="radio" /><label style={{color: "white", fontSize: "15px", fontFamily: "sans-serif"}}>Radio</label>
                            <br />
                            <input type="checkbox" /> <label style={{color: "white", fontSize: "15px", fontFamily: "sans-serif"}}>Checkbox</label>
                        </>} background={"#333333"} />
                    {/* bento component for password */}
                    <Bento title={"Password"} height={2} width={2} content={<input type="password" placeholder="●●●●●●●●"></input>} background={"#999999"} />
                </div>
                {/* bento component for range (slider) */}
                <Bento title={"Range"} height={2} width={4} content={<input style={{color: "white", width: "250px"}} type="range" />} background={"#999999"} />
            </div>
            {/* manual structuring for bento group */}
            <div style={{display: "flex", flexDirection: "row"}}>
            {/* manual structuring for bento group */}
            <div style={{display: "flex", flexDirection: "column"}}>
                    {/* bento component for text */}
                    <Bento title={"H1"} height={2} width={2} content={<Text text={"Hello World"} />} background={"#999999"} />
                    {/* bento component for date picker */}
                    <Bento title={"Date"} height={2} width={2} content={<input type="date" />} />
                </div>
                {/* bento component for image */}
                <Bento title={"Image"} titleColor="white" height={4} width={2} content={<img style={{height: "250px", marginBottom: "-65px", objectFit: "contain"}} src="image.jpg" />} background={"#333333"} />

            </div>
            {/* bento component for video */}
            <Bento title={"Video"} height={4} width={4} content={<video controls style={{width: "350px", marginBottom: "-65px"}} src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Time_Lapse_of_New_York_City.ogv" type="video/ogg" />} />
        </div>
    </>
);