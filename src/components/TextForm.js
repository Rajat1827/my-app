import React, { useState } from "react";

export default function TextForm(props) {
  const convertUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const onChange = (event) => {
    setText(event.target.value);
  };
  const convertLow = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
  };
  const [text, setText] = useState("Enter the text here");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={onChange}
            id="exampleFormControlTextarea1"
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : 'grey',
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            rows="7"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={convertUp}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={convertLow}>
          Lowercase
        </button>
        <button className="btn btn-primary" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Text Analysis</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
