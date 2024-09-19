import React, { useContext } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils.js'
import './Footer.css';
import AppContext from '../App/AppContext.js';

function Footer() {
	const { user } = useContext(AppContext);
	return (
		<footer className='App-footer'>
			<p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
			{user.isLoggedIn && (
				<p>
					<a href="/contact">Contact us</a>
				</p>
			)}
		</footer>
	);
}


export default Footer;
