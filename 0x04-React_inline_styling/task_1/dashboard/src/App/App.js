import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';
import Login from '../Login/Login.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Notification from '../Notifications/Notifications.js';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js';
import BodySection from '../BodySection/BodySection.js';
import { StyleSheet, css } from 'aphrodite';

class App extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className={css(styles.app)}>
        <div  className={css(styles.header)}>
          <Header />
          <Notification />
        </div>
        <div className={css(styles.body)}>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet nulla ut auctor tempus.</p>
          </BodySection>
        </div>
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

const styles = StyleSheet.create({
  app: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  body: {
    width: '100%',
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  footer: {
    backgroundColor: '#e0354b',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
  },
});

export default App;
