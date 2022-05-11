import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from './components/About.js';
import React, { useState } from 'react';
import Alert from "./components/Alert";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = ()=>{
    if(mode === "light"){
    setMode("dark")
    document.body.style.backgroundColor = "#042743";
    showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success")
    }
  }
 
  return (
    <>
       {/* <Router> */}
       <Navbar title="MyApp" aboutText="About MyApp" mode={mode} toggleMode={toggleMode} /> 
       <Alert alert={alert}/>
       <div className="container">
       {/* <Routes> */}
          {/* <Route path="/about" element={<About/>}>
          </Route> */}
          {/* <Route path="/" element={<TextForm heading="TextBox"  mode={mode}/>}>
          </Route> */}
          {<TextForm heading="TextBox"  mode={mode}/>}
          
        {/* </Routes> */}
        </div>
        {/* </Router> */}
       
    </>
  );
}

export default App;