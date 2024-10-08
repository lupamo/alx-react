import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils.js'
import './Footer.css';

function Footer() {
	return (
		<footer className='App-footer'>
			<p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
		</footer>
	);
}


export default Footer;
