
import './App.css';
import Navbar from './components/Navbar';
import React from 'react'
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";






function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled
  const [alert, setAlert] = useState('null');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert ('null');
      
    }, 2000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');

      document.body.style = 'background: #042743;';
      showAlert('Dark mode is Enabled', "success");
      document.title = "TextUtiles - dark mode";


    }
    else {
      setMode('light');
      document.body.style = 'background: white;';
      showAlert('Light mode is Enabled', "success");
      document.title = "TextUtiles - light mode";

    }




  }


  return (
    <>
    <BrowserRouter>
      <Navbar title="Textutiles" About="About" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">

      <Routes>
          <Route path="/" element={<TextForm heading = "Enter your text to analyse" mode ={mode} showAlert = {showAlert}/>} />
          <Route path="about" element={<About />} />
        </Routes>
      
        

    
       {/*  <About/> */}
      {/* <About/> */}
      </div>
      </BrowserRouter>
      
    </>
  )
};

export default App;
