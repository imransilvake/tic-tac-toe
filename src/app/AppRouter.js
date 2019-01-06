// react
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// app
import ENV from '../environment/index';
import Component404 from './system/frame/404/Component404';
import Game from './system/core/Game';

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
