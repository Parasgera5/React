import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upper case was clicked" + text);
        setText("You have clicked on handle up click")
        let newText = text.toUpperCase();
        setText(newText);   
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }
const [text, setText] = useState("Enter the text"); // text mein default value Enter the text aayegi and we update that through setText
// text = "fasioduhfaisdfh" // wrong way to set the state
// setText("asudjhfg") // correct way to set the state
  return (
    <div>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <label TextForm="myBox" className="form-label">Example textarea</label>
  <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
  {/* onChange={handleOnChange} -> without this we are unable to write inside the text area */}
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
</div>
  )
}


// text area jo hai usme jo bhi manlo hum likhenge wo uski state hai matlab ki awastha hai like we write hello hye bye bye 
// props are passed and state belong to a component
// useState is a hook(bina class banaye class ke features use karne ki sahayta karte hai)
