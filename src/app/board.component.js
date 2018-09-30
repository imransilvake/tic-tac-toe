// react
import React from "react";

// app
import Square from './square.component';

/**
 * class: Board
 */
export default class Board extends React.Component {
    /**
     * render
     *
     * @returns {*}
     */
    render() {
        return (
            <div>
                <div className="cd-board-row">
                    { this.renderSquare(0) }
                    { this.renderSquare(1) }
                    { this.renderSquare(2) }
                </div>
                <div className="cd-board-row">
                    { this.renderSquare(3) }
                    { this.renderSquare(4) }
                    { this.renderSquare(5) }
                </div>
                <div className="cd-board-row">
                    { this.renderSquare(6) }
                    { this.renderSquare(7) }
                    { this.renderSquare(8) }
                </div>
            </div>
        );
    }

    /**
     * renderSquare
     *
     * @param i
     * @returns {*}
     */
    renderSquare(i) {
        return <Square
            value={ this.props.squares[i] }
            onClick={ () => this.props.onClick(i) }
        />;
    }
}
