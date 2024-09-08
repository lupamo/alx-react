import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import AppContext from '../App/AppContext';


const styles = StyleSheet.create({
	header: {
		display: 'flex',
		alignItems: 'center',
		margin: '10px',
		height: '200px',
		color: '#e0354b',
		fontSize: '30px',
	  },
	  logo: {
		width: '200px',
		height: '100%',
	  }
});

class Header extends Component {
	static contextType = AppContext;
	render() {
		const { user, logOut } = this.context;

		return (
			<header className={css(styles.header)}>
				<img src={logo} alt='logo' className={css(styles.logo)} />
				<h1>School dashboard</h1>
				{user.isLoggedIn && (

					<section id="logoutSection" className={css(styles.logoutSection)}>
						Welcome {user.email} (<a href="#logout" onClick={logOut}>logout</a>)
          </section>
        )}
			</header>
		);

	}
}


export default Header;
