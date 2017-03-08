//root reducer goes here
import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer.js'



const rootReducer = combineReducers({
	login: LoginReducer
})

export default rootReducer;