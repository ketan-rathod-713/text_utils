

import React, {useState} from "react";



export default function TextForm(props) {

    const handleUppercase = ()=>{
        let uppercase = text.toUpperCase()
        setText(uppercase)
    }

    const handleonChange = (event)=>{ // when we are listening for any event in react then it provides us with an event object
        setText(event.target.value) // 
        // console.log(event.target.value) // jese hi ye event ho get value
    }

    const [text, setText] = useState("Enter text here2"); // ab me count ko jaha bhi update karuga vo update ho jaega
    // text = "just"
  return (
    <>
    <h1>{props.heading} </h1>
<div className="mb-3">
  <textarea value={text} onChange={handleonChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
  <button className="btn btn-primary mt-2" onClick={handleUppercase}>Convert to Uppercase</button>
</div>
    </>
  );
}
