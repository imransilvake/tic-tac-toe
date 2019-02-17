// react
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// app
import ENV from '../environment/index';
import Component404 from './scenes/404/Component404';
import Game from './scenes/Game';

class AppRouter extends Component {
	render() {
		return (
			<Switch>
				<Route exact path={ENV.ROUTING.GAME} component={Game}/>
				<Route exact from="*" component={Component404}/>
			</Switch>
		);
	}
}

export default withRouter(AppRouter);
