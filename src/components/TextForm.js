import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Button Clicked " + text);
    let upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleDownClick = () => {
    // console.log("Button Clicked " + text);
    let upperText = text.toLowerCase();
    setText(upperText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleOnChange = (event) => {
    // console.log("handleOnChange");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "darkgray",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="mybox"
            value={text}
            rows="6"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-success" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>
          Convert to Lower
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Your Text Summary </h3>
        <p>
          {text.split(" ").length} <b>words</b> and {text.length}{" "}
          <b>characters</b>
        </p>
        <p>{0.008 * text.split(" ").length} minutes read time</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Enter some text to preview"}</p>
      </div>
    </>
  );
}
