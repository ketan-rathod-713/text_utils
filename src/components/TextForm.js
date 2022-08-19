

import React, {useState} from "react";



export default function TextForm(props) {

    const handleUppercase = ()=>{
        let uppercase = text.toUpperCase()
        setText(uppercase)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLowercase = ()=>{
        let uppercase = text.toLowerCase()
        setText(uppercase)
        props.showAlert("Converted to LowerCase","success")

    }

    const handleonChange = (event)=>{ // when we are listening for any event in react then it provides us with an event object
        setText(event.target.value) // 
        // console.log(event.target.value) // jese hi ye event ho get value
    }

    const removeExtraSpaces = ()=>{
        let textArea = document.getElementById("textArea")
        let text = textArea.value
        // let arr = text.split(/[" "]/)
        setText(text.replace(/\s+/g, ' '))
        props.showAlert("Removed extra spaces","success")

    }

    const copyText = ()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Text Copied","success")
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
    <button className="btn btn-primary mt-2 mx-2" onClick={copyText}>Copy Text</button>
</div>

<div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split(' ')
       .filter(function(n) { return n != '' })
       .length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes Reading Time Required</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>

    </>
  );
}
