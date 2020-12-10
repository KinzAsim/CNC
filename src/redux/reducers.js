import { combineReducers } from 'redux';
import authReducer from './reducer/authReducer';
import cncReducer from './reducer/cncReducer';

export default combineReducers({
    auth : authReducer,
    cnc: cncReducer
})