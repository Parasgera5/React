import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upper case was clicked" + text);
        setText("You have clicked on handle up click")
        let newText = text.toUpperCase();
        setText(newText);   
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);   
    }
    const handleClearClick = () => {
        setText("");   
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState("");
// const [text, setText] = useState("Enter the text"); // text mein default value Enter the text aayegi and we update that through setText
// text = "fasioduhfaisdfh" // wrong way to set the state
// setText("asudjhfg") // correct way to set the state




  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>    
<div className="mb-3">
  <label htmlFor="myBox" className="form-label">Example textarea</label>
  <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
  {/* onChange={handleOnChange} -> without this we are unable to write inside the text area */}
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear the text</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy the text</button>
</div>

<div className="container my-2">
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to read this text</p>
    <h3>Preview</h3>
    <p>{text.length>0?text: "enter the text to preview it here"}</p>
</div>
</>
  )





}


// text area jo hai usme jo bhi manlo hum likhenge wo uski state hai matlab ki awastha hai like we write hello hye bye bye 
// props are passed and state belong to a component
// useState is a hook(bina class banaye class ke features use karne ki sahayta karte hai)
