// react
import React from "react";

// app
import Texts from '../assets/i18n/en'
import Board from './board.component';

/**
 * class: Game
 */
export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xTurn: true
        };
    }

    /**
     * render
     *
     * @returns {*}
     */
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = Game.calculateWinner(current.squares);
        const status = (winner) ? `${ Texts.Winner }: ${ winner }` : (this.state.xTurn) ? Texts.PlayerTurnX : Texts.PlayerTurnO;

        const moves = history.map((move, index) => {
            const desc = index ? `${ Texts.MoveToPosition }: ${ index }` : Texts.GotoStart;
            return (
                <li key={ index }>
                    <button onClick={() => this.jumpToStep(index)}>{ desc }</button>
                </li>
            );
        });
        const resetBoard = (winner) ? <button onClick={ this.playAgain.bind(this) }>{ Texts.PlayAgain }</button> : null;

        return (
            <div className="cd-game-wrapper">
                <section className="cd-menu">
                    <div className="cd-info">
                        <h2>Tic-Tac-Toe</h2>
                        <div className="cd-status">{ status }</div>
                        <div className="cd-play-again">{ resetBoard }</div>
                        <ul className="cd-moves">{ moves }</ul>
                    </div>
                </section>
                <section className="cd-board">
                    <Board
                        squares={ current.squares }
                        onClick={ this.handleClick.bind(this) }
                    />
                </section>
            </div>
        );
    }

    /**
     * determine game winner
     *
     * @param squares
     * @returns {*}
     */
    static calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    }

    /**
     * handle click event
     *
     * @param i
     */
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        // return if user already wins or Square is already filled.
        if (Game.calculateWinner(squares) || squares[i]) {
            return;
        }

        // set changes in the current board and save in history.
        squares[i] = (this.state.xTurn) ? Texts.X : Texts.O;
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xTurn: !this.state.xTurn
        });
    }

    /**
     * jump to particular step
     *
     * @param step
     */
    jumpToStep(step) {
        this.setState({
            stepNumber: step,
            xTurn: (step % 2) === 0
        });
    }

    /**
     * play again: reset
     */
    playAgain() {
        this.setState({
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xTurn: true
        });
    }
}
