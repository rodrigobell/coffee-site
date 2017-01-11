import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import BeansPage from './components/beans/BeansPage';
import LatteArtPage from './components/latteart/LatteArtPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="beans" component={BeansPage} />
		<Route path="brews" component={BeansPage} />
		<Route path="recipes" component={BeansPage} />
		<Route path="latteart" component={LatteArtPage} />
	</Route>
);
