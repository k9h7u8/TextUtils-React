import React, { useState } from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TestForm from "./Components/TestForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }

  const togglemode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0a3a80';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - DarkMode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - LightMode'
    }
  }
  const colourmode =()=>{
    if(mode === 'light'){
      setMode('#fdcbcb');
      document.body.style.backgroundColor = '#fdcbcb';
        showAlert("Coloured mode has been enabled", "success");
      document.title = 'TextUtils - ColourMode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - LightMode'
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} togglemode={togglemode} colourmode={colourmode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TestForm showAlert={showAlert}  heading="Enter the text here to analyse" mode={mode}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
