import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import CourseList from '../CourseList/CourseList.js';
import Login from '../Login/Login.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Notification from '../Notifications/Notifications.js';

class App extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="App">
        <div className="App-Header">
          <Header />
          <Notification />
        </div>
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    );
  }
  
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: true
};


export default App;