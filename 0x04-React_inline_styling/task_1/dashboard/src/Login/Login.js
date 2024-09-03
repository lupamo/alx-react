import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	body: {
		height: '400px',
		fontSize: '1.2rem',
	}
});
function Login() {
	return (
		<div className={css(styles.body)}>
			<p>Login to access the full dashboard</p>
		<form>
			<label htmlFor="email">Email:</label>
			<input type="email" id="email" name="email" />

			<label htmlFor="password">Password:</label>
			<input type="password" id="password" name="password" />

			<button type="submit">OK</button>
		</form>
	</div>
	);
}

export default Login;