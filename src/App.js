import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({ msg: message, type: type });
        setTimeout(() => setAlert(null), 2000);
    };

    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
            showAlert('Dark Mode enabled', 'success');
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert('Light Mode enabled', 'success');
        }
    };

    return (
        <>
              <Router>
        <Navbar title="TextUtil" about="About Us"mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
            <Route path="/" element={<TextForm heading="Try Textutils - Word Counter,Character Counter,Convert UpperCase and Convert LowerCase" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
        </>
    );
}

export default App;
