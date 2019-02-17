// react
import React from 'react';

function Square(props) {
	return (
		<button
			type="button"
			className="cd-square"
			onClick={props.onClick}>
			{props.value}
		</button>
	);
}

export default Square;
