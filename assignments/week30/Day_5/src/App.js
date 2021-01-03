import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleAuth from './component/googleAuth'
import Signup from './component/signup'
function App() {
  return (
    <div className="App">
        <Signup/>
        <br />
        <GoogleAuth/>
    </div>
  );
}

export default App;
