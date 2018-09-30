// react
import React from "react";

/**
 * square: return button
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export default function Square(props) {
    return (
        <button
            className="cd-square"
            onClick={ props.onClick }>
            { props.value }
        </button>
    );
}
