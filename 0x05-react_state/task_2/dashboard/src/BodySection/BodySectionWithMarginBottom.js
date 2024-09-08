import React, { Children, Component } from "react";
import BodySection from "./BodySection";
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
	bodySectionWithMargin: {
		marginBottom: '40px',
	},
});
function BodySectionWithMarginBottom(props) {
	return(
		<div className={css(styles.bodySectionWithMargin)}>
			<BodySection {...props} />
		</div>

	);
}

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node,
};


export default BodySectionWithMarginBottom;