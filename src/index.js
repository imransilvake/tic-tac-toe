// react
import React from 'react';
import ReactDOM from 'react-dom';

// app
import './assets/scss/main.scss';
import './assets/scss/app.scss';
import Game from './app/game.component';

// bootstrap app
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
