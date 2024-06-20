import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/Login/LoginComponent';
import RegistrationComponent from './components/Registration/RegistrationComponent';

function App() {
  return (
    <div className="App">
      <LoginComponent/>
      <RegistrationComponent/>
    </div>
  );
}

export default App;
