// react
import React, { Component } from 'react';

// app
import Board from './components/Board';
import i18n from '../../../assets/i18n/i18n'

class Game extends Component {
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

	render() {
		const { history } = this.state;
		const current = history[this.state.stepNumber];
		const winner = Game.calculateWinner(current.squares);
		const resetBoard = (winner) ? <button type="button" onClick={this.resetGame}>{i18n.t('PLAY_AGAIN')}</button> : null;
		let status = `${i18n.t('WINNER')}: ${winner}`;
		if (!winner) {
			status = (this.state.xTurn) ? i18n.t('PLAYER_TURN_X') : i18n.t('PLAYER_TURN_O');
		}
		const moves = history.map((move, index) => {
			const desc = index ? `${i18n.t('MOVE_TO_POSITION')}: ${index}` : i18n.t('GOTO_START');
			return (
				<li key={index}>
					<button type="button" onClick={() => this.jumpToStep(index)}>{desc}</button>
				</li>
			);
		});

		return (
			<div className="cd-game-wrapper">
				<section className="cd-menu">
					<div className="cd-info">
						<h2>Tic-Tac-Toe</h2>
						<div className="cd-status">{status}</div>
						<div className="cd-play-again">{resetBoard}</div>
						<ul className="cd-moves">{moves}</ul>
					</div>
				</section>
				<section className="cd-board">
					<Board
						squares={current.squares}
						onClick={this.handleClickOnSquare}
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
			[2, 4, 6]
		];

		for (let i = 0; i < lines.length; i += 1) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
			}
		}

		return null;
	}

	/**
	 * handle square click event
	 *
	 * @param index
	 */
	handleClickOnSquare = (index) => {
		const { stepNumber, xTurn, history } = this.state;
		const historyUpdate = history.slice(0, stepNumber + 1);
		const current = historyUpdate[historyUpdate.length - 1];
		const squares = current.squares.slice();

		// return if user already wins or Square is already filled.
		if (Game.calculateWinner(squares) || squares[index]) {
			return;
		}

		// set changes in the current board and save in history.
		squares[index] = (this.state.xTurn) ? i18n.t('X') : i18n.t('O');
		this.setState({
			history: historyUpdate.concat([{
				squares
			}]),
			stepNumber: historyUpdate.length,
			xTurn: !xTurn
		});

		// reset game if no winner
		const filledSquares = squares && squares.filter(x => x !== null).length;
		if (filledSquares === 9) {
			this.resetGame();
		}
	};

	/**
	 * jump to particular step
	 *
	 * @param step
	 */
	jumpToStep = (step) => {
		this.setState({
			stepNumber: step,
			xTurn: (step % 2) === 0
		});
	};

	/**
	 * reset the game
	 */
	resetGame = () => {
		this.setState({
			history: [{
				squares: Array(9).fill(null)
			}],
			stepNumber: 0,
			xTurn: true
		});
	};
}

export default Game;
