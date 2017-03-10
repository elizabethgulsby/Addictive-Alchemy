import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reduxPromise from 'redux-promise';

import {Router, IndexRoute, Route, hashHistory} from 'react-router';
import Home from './Containers/Home.js';
import Balancing from './Containers/Balancing.js';
import SideEffects from './Containers/SideEffects.js';
import Login from './Containers/Login.js';
import Register from './Containers/Register.js';
import Random from './Containers/Random.js';

import {Provider} from 'react-redux';

import { createStore, applyMiddleware } from 'redux';

import Reducers from './Reducers/index';

//create the store to handle our state
const theStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)(Reducers);



ReactDOM.render(
	<Provider store={theStoreWithMiddleware}>
		<Router history={hashHistory} >
			<Route path='/' component={App}>			
				<IndexRoute component={Home} />		
				<Route path='login' component={Login} />
				<Route path='register' component={Register} />				
				<Route path='balancing' component={Balancing} />
				<Route path='random' component={Random} />
				<Route path='sideeffects' component={SideEffects} />			
			</Route>		  
		</Router>
	</Provider>,
  document.getElementById('root')
);
