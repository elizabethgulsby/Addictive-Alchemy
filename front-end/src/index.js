import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {Router, IndexRoute, Route, hashHistory} from 'react-router';
import Home from './Containers/Home';
import Balancing from './Containers/Balancing';
import SideEffects from './Containers/SideEffects';

ReactDOM.render(
	<Router history={hashHistory} >
		<Route path='/' component={App}>			
			<IndexRoute component={Home} />		
			<Route path='home' component={Home} />			
			<Route path='balancing' component={Balancing} />
			<Route path='sideeffects' component={SideEffects} />			
		</Route>		  
	</Router>,

  document.getElementById('root')
);
