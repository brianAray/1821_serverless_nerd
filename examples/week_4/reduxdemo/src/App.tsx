import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/LoginComponent/LoginComponent';
import UserComponent from './components/UserComponent/UserComponent';

function App() {
  return (
    <div className="App">
      <LoginComponent/>
      <UserComponent/>
    </div>
  );
}

export default App;
