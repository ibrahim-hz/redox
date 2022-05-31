import React from "react";
import "./App.css";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "darkslategray";
      showAlert("Dark mode has been Enabled", "success");
      document.title = "Redox - Dark Mode";
      /*
      setInterval(() => {
        document.title = "F*&k You";
      }, 1000);
      setInterval(() => {
        document.title = "F*&k Nigga";
      }, 1500);
      */
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
      document.title = "Redox - Light Mode";
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Navbar title="REDOX" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the Text to Analyze" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
