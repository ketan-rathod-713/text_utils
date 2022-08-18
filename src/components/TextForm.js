

import React, {useState} from "react";



export default function TextForm(props) {

    const handleUppercase = ()=>{
        let uppercase = text.toUpperCase()
        setText(uppercase)
    }
    const handleLowercase = ()=>{
        let uppercase = text.toLowerCase()
        setText(uppercase)
    }

    const handleonChange = (event)=>{ // when we are listening for any event in react then it provides us with an event object
        setText(event.target.value) // 
        // console.log(event.target.value) // jese hi ye event ho get value
    }

    const removeExtraSpaces = ()=>{
        let textArea = document.getElementById("textArea")
        let text = textArea.value
        // let arr = text.split(/[" "]/)
        textArea.value = text.replace(/\s+/g, ' ')
    }

    const [text, setText] = useState(""); // ab me count ko jaha bhi update karuga vo update ho jaega
    // text = "just"
  return (
    <>
<div className="my-4" style={{color: props.mode === 'dark' ? 'white' : 'grey'}}>
    <h1>{props.heading} </h1>
    <textarea style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={handleonChange} className="form-control" id="textArea" rows="8" placeholder="Enter Text Here"></textarea>
    <button className="btn btn-primary mt-2 mx-2" onClick={handleUppercase}>Convert to Uppercase</button>
    <button className="btn btn-primary mt-2 mx-2" onClick={handleLowercase}>Convert to Lowercase</button>
    <button className="btn btn-primary mt-2 mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
</div>

<div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes Reading Time Required</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>

    </>
  );
}
