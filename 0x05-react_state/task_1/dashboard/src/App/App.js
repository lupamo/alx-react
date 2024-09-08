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
import AppContext, { defaultUser, defaultLogout } from './AppContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      logOut: defaultLogout,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.hanldeHideDrawer = this.hanldeHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }
  hanldeHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: {
        ...defaultUser,
      },
    });
  }

  render() {
    const { displayDrawer, user } = this.state;
    
    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.logOut }}>
        <div className={css(styles.app)}>
          <div className={css(styles.header)}>
            <Header />
            <Notification
              displayDrawer={displayDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              hanldeHideDrawer={this.hanldeHideDrawer}
            />
          </div>
          <div className={css(styles.body)}>
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School" className={css(styles.body)}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet nulla ut auctor tempus.</p>
            </BodySection>
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
  
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
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
