import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg'

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

function Header() {
	return (
		<header className={css(styles.header)}>
			<img src={logo} alt='logo' className={css(styles.logo)} />
			<h1>School dashboard</h1>
		</header>
	);
}


export default Header;
