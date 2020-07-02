import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppLayout from './components/menu'
import SimpleForm from './components/simpleform'
import ContentApp from './components/content'

function App() {
  return (
    <div className="App">
      <div className="topnav">
         <a class="active" href="#home">Ionixx Coding Challenge App</a>
  
      </div>
      <AppLayout/>
     

      
        
    </div>
  );
}

export default App;
