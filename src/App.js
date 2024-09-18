// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import N from './components/N';
import H from './components/H';
import A from './components/A';
// import Error from './components/Error';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { type } from '@testing-library/user-event/dist/type';

function App() {
  const [mode, setMode] = useState('light');  // Whether dark mode is enabled or not

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is enabled", "Success")
      document.title = 'TextUtils - Home (Dark Mode)';    // changes document title according to the Dark mode
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is enabled", "Success")
      document.title = 'TextUtils - Home';   // changes document title according to the Light mode
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000)
    
  }
  return (
    // <>
    //   {/* <Navbar title='Text Utils' about="About us" /> */}
    //   {/* <Navbar /> */}
    //   <Navbar title='Text Utils' mode={mode} toggleMode={toggleMode} />
    //   <Alert  alert={alert}/>
    //   <div className="container my-3">
    //     <Form heading = "Enter the text:" mode={mode} showAlert={showAlert}/>
    //     <About/>
    //   </div>
    // </>

    // <>
    //   <Main>
    //   <N />
    //   <Routes>
    //     <Route exact path='/' element={<H />} />
    //     <Route exact path='/A' element={<A />} />
    //     <Route path='/*' element={<Error />} />
    //   </Routes>
    //   </Main>
    // </>

    <>
      {/* <Navbar title='Text Utils' about="About us" /> */}
      {/* <Navbar /> */}
      <Router>
      <Navbar title='Text Utils' mode={mode} toggleMode={toggleMode} />
      <Alert  alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<Form heading = "Enter the text:" mode={mode} showAlert={showAlert}/>} />
        </Routes>
      </div>
      </Router>
    </>

  // <>
  // {/* <Navbar title='Text Utils' about="About us" /> */}
  // {/* <Navbar /> */}
  // {/* <Router> */}
  // <Navbar title='Text Utils' mode={mode} toggleMode={toggleMode} />
  // <Alert  alert={alert}/>
  // <div className="container my-3">
  //   {/* <Routes> */}
  //     {/* <Route path="/about" element={<About />}/>
  //     <Route path="/" element={<Form heading = "Enter the text:" mode={mode} showAlert={showAlert}/>} /> */}
  //     <Form heading = "Enter the text:" mode={mode} showAlert={showAlert}/>
  //   {/* </Routes> */}
  // </div>
  // {/* </Router> */}
  // </>
  );
}

export default App;

// Router, Switch, Route, Link
// Main, Route, Routes  <Form heading = "Enter the text:" mode={mode} showAlert={showAlert}/>