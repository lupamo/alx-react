import React from 'react';
import './App.css';
import logo from './holberton-logo.jpg'
import { getFullYear, getFooterCopy } from './utils.js'

function App() {
  return (
    <div className="App">

      <header className='App-header'>
        <img src={logo} alt='logo' className='holberton-logo' />
        <h1>School dashboard</h1>
      </header>
      {/* body div */}
      <div className='App-body'>
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">OK</button>
      </form>
      </div>

      {/* footer body */}
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
