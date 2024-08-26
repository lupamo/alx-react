import React from 'react';
import './App.css';
import logo from './holberton-logo.jpg'

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <img src={logo} alt='logo' className='holberton-logo' />
        <h1>School dashboard</h1>
      </header>

      {/* body div */}
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
      </body>

      {/* footer body */}
      <footer className='App-footer'>
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
