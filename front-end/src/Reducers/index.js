//root reducer goes here
import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer.js';
import RegisterReducer from './RegisterReducer.js';
import CardReducer from './CardReducer.js';
import WeightedReducer from './WeightedReducer.js';


const rootReducer = combineReducers({
	login: LoginReducer,
	register: RegisterReducer
})

export default rootReducer;