import React, { useState } from "react";

export default function TestForm(props) {
  const handleUpclick = () => {
    let newtxt = text.toLocaleUpperCase();
    setText(newtxt);
    props.showAlert("Coverted to UpperCase letters", "success");
  };
  const handleloclick = () => {
    let newtxt = text.toLocaleLowerCase();
    setText(newtxt);
    props.showAlert("Coverted LowerCase letters", "success");
  };
  const handleclclick = () => {
    let newtxt = " ";
    setText(newtxt);
    props.showAlert("Text is Cleared", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is Copied", "success");
  };
  const handleRemove = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
      <>
    <div className="container" style={{color: props.mode==='dark' ?'white':'black'}}>
      <h2 >{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="mybox"
          style={{backgroundColor: props.mode==='dark' ?'grey':'white',color: props.mode==='dark' ?'white':'black'}}
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpclick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleloclick}>
        Convert toLowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleclclick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleRemove}>
        Remove Extra Spaces
      </button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark' ?'white':'black'}}>
        <h2>Your text summary</h2>
        <p><b>{(text.split(" ").length -1)}</b>words, <b>{text.length}</b> characters</p>
        <p><b>{0.008 *text.split(" ").length}</b> Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
