// react
import React from 'react';

export default function Square(props) {
	return (
		<button
			type="button"
			className="cd-square"
			onClick={props.onClick}>
			{props.value}
		</button>
	);
}
