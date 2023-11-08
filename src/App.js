import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'

function App() {


  

  return (
    <div className="App">
      <header className="App-header">
        Code Library
        <img src={logo} className="App-logo" alt="logo" />
       <div className='button-container'>
       <button
       
       >Javascript</button>
       <button>HTML</button>
       <button>CSS</button>
       </div>
     
      </header>
      
    </div>
  );
}

export default App;
