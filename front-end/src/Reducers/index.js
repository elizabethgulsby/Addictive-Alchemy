//root reducer goes here
import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer.js'
import RegisterReducer from './RegisterReducer.js'


const rootReducer = combineReducers({
	login: LoginReducer,
	register: RegisterReducer
})

export default rootReducer;