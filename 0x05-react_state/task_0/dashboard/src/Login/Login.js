import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	body: {
		fontSize: '1.2rem',
		border: '1px solid red',
		display: 'grid',
		justifyContent: 'center',
		margin: '0 auto',

	},
	form : {
		width: '400px',
		display: 'grid',
	},
	input: {
		marginBottom: '10px',
	},
	button: {
		width: 'fit-content',
		padding: '7px 15px',
		marginTop: '10px',
	},
	'@media (max-width: 900px)': {
    body: {
      fontSize: '1rem',
      padding: '10px',
    },
    input: {
      width: '100%',
    },
    button: {
      alignSelf: 'flex-start',
    }
},
});
function Login() {
	return (
		<div className={css(styles.body)}>
			<p>Login to access the full dashboard</p>
		<form className={css(styles.form)}>
			<label htmlFor="email">Email:</label>
			<input className={css(styles.input)} type="email" id="email" name="email" />

			<label htmlFor="password">Password:</label>
			<input className={css(styles.input)} type="password" id="password" name="password" />

			<button  className={css(styles.button)} type="submit">OK</button>
		</form>
	</div>
	);
}

export default Login;
