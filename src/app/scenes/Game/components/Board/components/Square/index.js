// react
import React from 'react';

// app
import classNames from 'classnames/bind';
import i18n from '../../../../../../../assets/i18n/i18n'

function Square(props) {
	const buttonClass = classNames({
		'cd-square': true,
		'sc-player-x': props.value === i18n.t('X')
	});

	return (
		<button
			type="button"
			className={buttonClass}
			onClick={props.onClick}>
			{props.value}
		</button>
	);
}

export default Square;
