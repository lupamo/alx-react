import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import CourseList from '../CourseList/CourseList.js';
import Login from '../Login/Login.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Notification from '../Notifications/Notifications.js';

function App({ isLoggedIn }) {
  return (
    <div className="App">
      <Notification />
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </div>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default App;