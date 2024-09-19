import React, { useState } from 'react'

export default function Form(props) {
    const handleUpClick = (e) => {
        e.preventDefault();      // Prevents the default form submission behavior of the button (which would reload the page).
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        console.log(newText)

        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLowClick = (e) => {
        e.preventDefault();      // Prevents the default form submission behavior of the button (which would reload the page).
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        console.log(newText)

        props.showAlert("Converted to Lowercase", "success");
    }

    const handleOn = (event) => {
        console.log("On Change");
        setText(event.target.value)    // Updates the state variable text with the current value from the input field (event.target.value).
    }

    const [text, setText] = useState('');
    //setText("New text here...");
    return (
        <>
        <div className='cont' style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <form>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label" >Enter below...</label>
                <input className="form-control" id="myBox" aria-describedby="emailHelp" value={text} onChange={handleOn} style={{backgroundColor: props.mode === 'dark'?'#13466e':'light' , color: props.mode === 'dark'?'white':'#042743'}}/>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        </form>
        </div>
        {/* Word Counter */}
        <div className="cont my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words, {text.length} Characters</p>
            {/* No of words and letters  */}
            <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes taken to read</p>
            <h2>Preview:</h2>
            <p>{text.length>0 ? text: "Enter something to preview"}</p>
        </div>
        </>
    )
}