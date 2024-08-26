import React from 'react';
import './App.css';
import Login from '../Login/Login.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Notification from '../Notifications/Notifications.js'
import { getFullYear, getFooterCopy } from '../utils/utils.js'

function App() {
  return (
    <div className="App">
      <Notification />
      <Header />
      <div className='App-body'>
        <Login />
      </div>
      <Footer />
    </div>
  );
}

export default App;
