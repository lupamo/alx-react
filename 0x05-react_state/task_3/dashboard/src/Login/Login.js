import React, { useContext, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

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
	const [formState, setFormState] = useState({
		isLoggedIn: false,
		email: '',
		password: '',
		enableSubmit: false,
	});

	const handleChangeEmail = (e) => {
		const email = e.target.value;
		setFormState((prevState) => ({
		  ...prevState,
		  email,
		  enableSubmit: email.length > 0 && prevState.password.length > 0,
		}));
	  };
	
	  const handleChangePassword = (e) => {
		const password = e.target.value;
		setFormState((prevState) => ({
		  ...prevState,
		  password,
		  enableSubmit: prevState.email.length > 0 && password.length > 0,
		}));
	  };

	  const handleLoginSubmit = (e) => {
		e.preventDefault();
		if (formState.enableSubmit) {
			console.log('Logging in with:', formState.email, formState.password);
		}
	};

	return (
		<div className={css(styles.body)}>
      	<p>Login to access the full dashboard</p>
		<form className={css(styles.form)} onSubmit={handleLoginSubmit}>
			<label htmlFor="email">Email:</label>
			<input
			className={css(styles.input)}
			type="email"
			id="email"
			name="email"
			value={formState.email}
			onChange={handleChangeEmail}
			required
			/>

			<label htmlFor="password">Password:</label>
			<input
			className={css(styles.input)}
			type="password"
			id="password"
			name="password"
			value={formState.password}
			onChange={handleChangePassword}
			required
			/>
			<input className={css(styles.button)} type="submit" value="OK" />
		</form>
    </div>
	);
}

export default Login;
