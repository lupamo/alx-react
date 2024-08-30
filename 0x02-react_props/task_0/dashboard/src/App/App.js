import React from 'react';
import './App.css';
import Login from '../Login/Login.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Notification from '../Notifications/Notifications.js';

function App() {
  return (
    <div className="App">
      <Notification />
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
